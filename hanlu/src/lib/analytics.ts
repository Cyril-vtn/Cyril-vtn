"use client";
/**
 * Analytics layer — one `track()` call site, several sinks.
 *
 *  - Plausible (optional, NEXT_PUBLIC_PLAUSIBLE_DOMAIN): cookieless traffic & goal counts. Loaded
 *    without consent — Plausible sets no cookies and stores no personal data (check CNIL guidance
 *    for your exact configuration before relying on the consent exemption).
 *  - PostHog (optional, NEXT_PUBLIC_POSTHOG_KEY, EU host by default): product analytics — funnels,
 *    retention, session paths. Loaded ONLY after explicit opt-in (GDPR / ePrivacy).
 *  - Dev console: every event is logged in development.
 *
 * Event names are a closed union so the taxonomy stays clean (see docs/analytics.md).
 */
import type { PostHog } from "posthog-js";

export type AnalyticsEvent =
  | "page_view"
  | "cta_clicked"
  | "locale_switched"
  | "theme_switched"
  | "lesson_started"
  | "lesson_step_viewed"
  | "lesson_completed"
  | "exercise_answered"
  | "audio_played"
  | "review_session_started"
  | "review_card_rated"
  | "review_session_completed"
  | "vocab_searched"
  | "vocab_added_to_review"
  | "grammar_viewed"
  | "guide_viewed"
  | "placement_started"
  | "placement_completed"
  | "tone_quiz_answered"
  | "writing_practice_completed"
  | "paywall_viewed"
  | "checkout_clicked"
  | "consent_updated"
  | "progress_exported";

export type Props = Record<string, string | number | boolean | null | undefined>;
export type Consent = "granted" | "denied" | "unset";

const CONSENT_KEY = "hanlu:consent";
const PH_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const PH_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_SRC = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.manual.js";

let posthog: PostHog | null = null;
let loadingPosthog: Promise<void> | null = null;
const queue: [AnalyticsEvent, Props][] = [];
const consentListeners = new Set<() => void>();

declare global {
  interface Window {
    plausible?: ((event: string, opts?: { props?: Props; u?: string }) => void) & { q?: unknown[] };
  }
}

export function getConsent(): Consent {
  if (typeof window === "undefined") return "unset";
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : "unset";
  } catch {
    return "unset";
  }
}

export function setConsent(c: Exclude<Consent, "unset">) {
  try {
    window.localStorage.setItem(CONSENT_KEY, c);
  } catch {
    /* ignore */
  }
  consentListeners.forEach((l) => l());
  if (c === "granted") {
    void loadPosthog();
    track("consent_updated", { consent: c });
  } else if (posthog) {
    posthog.opt_out_capturing();
  }
}

export function onConsentChange(cb: () => void) {
  consentListeners.add(cb);
  return () => {
    consentListeners.delete(cb);
  };
}

/** Whether any consent-gated analytics provider is configured (drives whether we show a banner). */
export const needsConsentBanner = !!PH_KEY;

function loadPosthog(): Promise<void> {
  if (!PH_KEY || typeof window === "undefined") return Promise.resolve();
  if (loadingPosthog) return loadingPosthog;
  loadingPosthog = import("posthog-js").then(({ default: ph }) => {
    ph.init(PH_KEY, {
      api_host: PH_HOST,
      person_profiles: "identified_only",
      capture_pageview: false, // we send page_view ourselves (App Router navigations)
      capture_pageleave: true,
      autocapture: true,
      disable_session_recording: process.env.NEXT_PUBLIC_POSTHOG_RECORDING !== "true",
      respect_dnt: true,
      persistence: "localStorage+cookie",
    });
    posthog = ph;
    ph.opt_in_capturing();
    while (queue.length) {
      const [e, p] = queue.shift()!;
      ph.capture(e === "page_view" ? "$pageview" : e, p);
    }
  });
  return loadingPosthog;
}

function loadPlausible() {
  if (!PLAUSIBLE_DOMAIN || typeof document === "undefined" || document.getElementById("plausible-js")) return;
  window.plausible =
    window.plausible ||
    Object.assign(
      function (...args: unknown[]) {
        (window.plausible!.q = window.plausible!.q || []).push(args);
      },
      { q: [] as unknown[] },
    );
  const s = document.createElement("script");
  s.id = "plausible-js";
  s.defer = true;
  s.dataset.domain = PLAUSIBLE_DOMAIN;
  s.src = PLAUSIBLE_SRC;
  document.head.appendChild(s);
}

export function initAnalytics() {
  loadPlausible();
  if (getConsent() === "granted") void loadPosthog();
}

/** Super-properties attached to every event. */
let base: Props = {};
export function setBaseProps(p: Props) {
  base = { ...base, ...p };
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...base, ...props };
  if (process.env.NODE_ENV !== "production") console.debug("[analytics]", event, payload);

  // Plausible: pageviews + a curated set of conversion goals only (keeps it aggregate & cookieless)
  if (window.plausible) {
    if (event === "page_view") window.plausible("pageview", { u: location.href });
    else if (GOALS.has(event)) window.plausible(event, { props: pick(payload, ["level", "plan", "locale", "feature"]) });
  }

  if (getConsent() !== "granted" || !PH_KEY) return;
  if (posthog) posthog.capture(event === "page_view" ? "$pageview" : event, payload);
  else {
    queue.push([event, payload]);
    void loadPosthog();
  }
}

const GOALS = new Set<AnalyticsEvent>([
  "lesson_completed",
  "placement_completed",
  "review_session_completed",
  "paywall_viewed",
  "checkout_clicked",
]);

function pick(p: Props, keys: string[]): Props {
  const o: Props = {};
  for (const k of keys) if (p[k] !== undefined) o[k] = p[k];
  return o;
}
