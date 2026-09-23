# Analytics — tracking plan

**Goal:** know what learners do, where they drop, what converts — and produce the numbers a buyer of the business will ask for (traffic, activation, retention, conversion, MRR/churn).

## Stack

| Layer | Tool | Consent needed? | Why |
|---|---|---|---|
| Traffic & goals | **Plausible** (EU, cookieless) | No, as long as it's configured per CNIL guidance (no cross-site tracking, aggregate only) | SEO/traffic sources, top pages, conversion goals. Public dashboard link is a great asset in a sale listing. |
| Product analytics | **PostHog EU** (`eu.i.posthog.com`) | **Yes** — loaded only after “Accept” | Funnels, retention cohorts, paths, feature usage, (optional) session replay. |
| Revenue | **Stripe** | n/a | Source of truth for MRR, churn, LTV. Use Stripe's built-in dashboards or ChartMogul/Baremetrics (buyers trust these). |

All calls go through one function: `track(event, props)` in `src/lib/analytics.ts`. Event names are a TypeScript union, so the taxonomy cannot drift. In development every event is logged in the console.

**Super-properties** (attached to every event): `locale`, `plan`, `total_xp`, `lessons_done`.

## Event taxonomy

| Event | When | Key props |
|---|---|---|
| `page_view` | every route change | `path`, `path_template` (e.g. `/:locale/learn/:level/:lesson`), `referrer` |
| `cta_clicked` | marketing CTAs | `cta` |
| `locale_switched` / `theme_switched` | header toggles | `from`,`to` / `theme` |
| `lesson_started` | lesson player mounts | `lesson_id`, `level` |
| `lesson_step_viewed` | step change (intro → dialogue → vocab → grammar → practice → done) | `lesson_id`, `step` |
| `exercise_answered` | each answer | `lesson_id`, `type`, `index`, `correct`, `context` |
| `lesson_completed` | end of lesson | `lesson_id`, `level`, `score`, `duration_sec`, `exercises` |
| `audio_played` | any TTS play | `source` |
| `review_session_started` / `review_card_rated` / `review_session_completed` | SRS | `due`, `new` / `grade`, `was_new`, `level` / `reviewed` |
| `vocab_searched` | search field blur | `q_len`, `results`, `level` |
| `vocab_added_to_review` | add card(s) | `count`, `scope` (single/bulk/seed), `level` |
| `grammar_viewed`, `guide_viewed` | content pages | `grammar_id` / `slug` |
| `placement_started` / `placement_completed` | placement test | `level` |
| `tone_quiz_answered`, `writing_practice_completed` | practice tools | `correct` / `mistakes` |
| `paywall_viewed` | locked content shown | `feature`, `level` |
| `checkout_clicked` | pricing buttons | `plan` |
| `consent_updated`, `progress_exported` | — | — |

Plausible only receives pageviews plus 5 goals: `lesson_completed`, `placement_completed`, `review_session_completed`, `paywall_viewed`, `checkout_clicked` — add them as *Custom event goals* in Plausible.

## Dashboards to build in PostHog

1. **Activation funnel:** `page_view` (home) → `lesson_started` (hsk1-l01) → `lesson_completed` (hsk1-l01) → `review_session_started`. *Activation = first lesson completed within 24h of the first visit.*
2. **Lesson drop-off:** `lesson_step_viewed` broken down by `step` for each `lesson_id` → shows which dialogue or grammar step loses people.
3. **Exercise difficulty:** `exercise_answered` share of `correct = true` by `lesson_id` + `index` → flags broken or too-hard exercises (fix content where the rate is under 40%).
4. **Retention:** weekly cohort retention on `lesson_completed OR review_card_rated` (a “learning action”). Target: W1 ≥ 25%, W4 ≥ 12%.
5. **Monetisation funnel:** `paywall_viewed` → `checkout_clicked` → Stripe `checkout.session.completed` (send a server-side event from the Stripe webhook once accounts exist).
6. **Acquisition:** Plausible sources × `placement_completed` / `lesson_completed` goals → which SEO pages bring learners, not just visitors.

## The KPIs a buyer will ask for

| KPI | Where |
|---|---|
| Monthly unique visitors, organic share, top landing pages | Plausible |
| Activated learners / month, activation rate | PostHog funnel 1 |
| D1 / D7 / D30 retention | PostHog retention |
| Free → paid conversion, trial → paid | PostHog funnel 5 + Stripe |
| MRR, ARR, churn, ARPU, LTV | Stripe / ChartMogul |
| CAC by channel (if paid acquisition) | ad platforms + Plausible UTM |

Keep 12+ months of history before a sale: most marketplaces (Acquire.com, Flippa, FE International) value SaaS/content businesses on a multiple of trailing-12-month profit or ARR, and verified analytics access is a due-diligence must-have.

## What is not wired yet

- **User accounts**: progress lives in localStorage, so PostHog sees anonymous devices, not people. When auth ships (Supabase recommended), call `posthog.identify(userId)` after login and move key events (`lesson_completed`, purchases) server-side.
- **Stripe webhook → analytics**: needs a backend route.
