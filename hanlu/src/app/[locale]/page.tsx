import Link from "next/link";
import type { Locale } from "@/content/types";
import { getUI } from "@/i18n/ui";
import { href } from "@/lib/site";
import { stats } from "@/content";
import { hskLevels } from "@/content/hsk3-facts";
import HeroCard from "@/components/home/HeroCard";
import ToneDemo from "@/components/home/ToneDemo";
import MiniQuiz from "@/components/home/MiniQuiz";
import Icon, { type IconName } from "@/components/Icon";
import { artSrc } from "@/content/art";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  const t = getUI(locale).home;
  const s = stats();
  const fmt = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US");

  const features: { icon: IconName; t: string; d: string }[] = [
    { icon: "layers", t: t.f1t, d: t.f1d },
    { icon: "book", t: t.f2t, d: t.f2d },
    { icon: "cards", t: t.f3t, d: t.f3d },
    { icon: "wave", t: t.f4t, d: t.f4d },
    { icon: "brush", t: t.f5t, d: t.f5d },
    { icon: "globe", t: t.f6t, d: t.f6d },
  ];

  const compare: [string, boolean | string, boolean | string, boolean | string][] =
    locale === "fr"
      ? [
          ["Programme calé sur le HSK 3.0 (9 niveaux)", true, "partiel", "rarement"],
          ["Explications de grammaire approfondies", true, false, true],
          ["Révisions espacées (FSRS)", true, "basique", false],
          ["Exercices interactifs + audio", true, true, false],
          ["Ordre des traits animé", true, "parfois", false],
          ["Interface et contenus en français", true, "rarement", "parfois"],
          ["Listes de vocabulaire officielles complètes", true, false, "partiel"],
        ]
      : [
          ["Syllabus mapped to HSK 3.0 (9 levels)", true, "partial", "rarely"],
          ["In-depth grammar explanations", true, false, true],
          ["Spaced repetition (FSRS)", true, "basic", false],
          ["Interactive exercises + audio", true, true, false],
          ["Animated stroke order", true, "sometimes", false],
          ["Full French and English support", true, "rarely", "sometimes"],
          ["Complete official word lists", true, false, "partial"],
        ];

  const bandColor = { elementary: "var(--jade)", intermediate: "var(--gold)", advanced: "var(--seal)" } as const;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden" aria-hidden="true">
          <span className="absolute -right-20 -top-16 font-han text-[28rem] leading-none font-black text-ink/[0.035]">
            路
          </span>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
          <div className="reveal">
            <span className="chip !border-seal/30 !bg-seal/5 !text-seal">
              <Icon name="sparkle" size={14} /> {t.eyebrow}
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] font-semibold tracking-tight sm:text-7xl">
              {t.title1}
              <br />
              <span className="relative inline-block text-seal italic">
                {t.title2}
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 14 C 80 4, 180 4, 297 12" stroke="var(--seal)" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".35" />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2">{t.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={href(locale, "/learn/1")} className="btn btn-primary !px-6 !py-3.5 !text-base">
                {t.ctaPrimary} <Icon name="arrow" size={18} />
              </Link>
              <Link href={href(locale, "/placement")} className="btn btn-ghost !px-6 !py-3.5 !text-base">
                <Icon name="target" size={18} /> {t.ctaSecondary}
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted">{t.trust}</p>
          </div>
          <div className="reveal" style={{ animationDelay: ".15s" }}>
            <HeroCard locale={locale} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-line bg-card/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
          {[
            [fmt.format(s.words), t.statsWords],
            [fmt.format(s.grammar), t.statsGrammar],
            ["9", t.statsLevels],
            [fmt.format(s.exercises), t.statsExercises],
          ].map(([n, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{n}</div>
              <div className="mt-1 text-sm text-muted">{label}</div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden border-t border-line py-3" aria-hidden="true">
          <div className="marquee flex w-max gap-8 font-han text-2xl text-ink/25">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8">
                {"你好谢谢再见学习中文朋友老师学生喜欢吃饭喝茶今天明天工作生活快乐天气北京上海时间爱家书水火山人口大小月日".split("").map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TONES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.toneTitle}</h2>
          <p className="mt-4 text-lg text-ink-2">{t.toneSubtitle}</p>
        </div>
        <div className="mt-12">
          <ToneDemo locale={locale} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.featuresTitle}</h2>
            <p className="mt-4 text-lg text-paper/70">{t.featuresSubtitle}</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.t} className="bg-ink p-8 transition hover:bg-[color-mix(in_oklab,var(--ink)_92%,var(--seal))]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-seal/15 text-seal-2">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 leading-relaxed text-paper/65">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.pathTitle}</h2>
          <p className="mt-4 text-lg text-ink-2">{t.pathSubtitle}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={artSrc("journey")} alt="" loading="lazy" className="ink-art mt-12 aspect-[21/9] w-full rounded-3xl object-cover" />
        <div className="relative mt-12">
          <div className="absolute top-9 right-8 left-8 hidden h-1 rounded-full bg-gradient-to-r from-jade via-gold to-seal lg:block" />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {hskLevels.map((lv, i) => {
              const levelNum = i + 1;
              return (
                <li key={lv.level}>
                  <Link href={href(locale, `/learn/${levelNum}`)} className="group block text-center">
                    <span
                      className="mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border-4 bg-card font-display text-2xl font-semibold shadow-soft transition group-hover:scale-110"
                      style={{ borderColor: bandColor[lv.band] }}
                    >
                      {lv.level}
                    </span>
                    <span className="mt-3 block text-xs font-semibold tracking-widest uppercase" style={{ color: bandColor[lv.band] }}>
                      {t[lv.band]}
                    </span>
                    <span className="mt-1 block text-sm text-ink-2">
                      {fmt.format(lv.words.total)} {getUI(locale).common.words}
                    </span>
                    <span className="block text-xs text-muted">
                      {fmt.format(lv.characters.total)} {getUI(locale).common.characters}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-12 text-center">
          <Link href={href(locale, "/hsk")} className="btn btn-ghost">
            {locale === "fr" ? "Tout comprendre du HSK 3.0" : "Everything about HSK 3.0"} <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* DEMO */}
      <section className="border-y border-line bg-paper-2/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight">{t.demoTitle}</h2>
            <p className="mt-3 text-ink-2">{t.demoSubtitle}</p>
          </div>
          <MiniQuiz locale={locale} />
        </div>
      </section>

      {/* COMPARE */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <h2 className="text-center font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.compareTitle}</h2>
        <div className="card mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="p-4" />
                <th className="p-4 text-center font-display text-base text-seal">{t.compareUs}</th>
                <th className="p-4 text-center font-medium text-muted">{t.compareApps}</th>
                <th className="p-4 text-center font-medium text-muted">{t.compareBooks}</th>
              </tr>
            </thead>
            <tbody>
              {compare.map(([label, ...cells]) => (
                <tr key={label} className="border-b border-line/60 last:border-0">
                  <td className="p-4 font-medium">{label}</td>
                  {cells.map((c, i) => (
                    <td key={i} className={`p-4 text-center ${i === 0 ? "bg-seal/5" : ""}`}>
                      {c === true ? (
                        <Icon name="check" className="mx-auto text-jade" />
                      ) : c === false ? (
                        <Icon name="x" className="mx-auto text-muted" size={16} />
                      ) : (
                        <span className="text-muted">{c}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-seal px-8 py-16 text-center text-white sm:px-16">
          <span className="pointer-events-none absolute -bottom-24 -left-10 font-han text-[18rem] leading-none font-black text-white/10" aria-hidden="true">
            学
          </span>
          <h2 className="relative font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.ctaBandTitle}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">{t.ctaBandSubtitle}</p>
          <Link href={href(locale, "/learn/1")} className="btn relative mt-8 !bg-white !px-7 !py-3.5 !text-base !text-seal">
            {t.ctaPrimary} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
