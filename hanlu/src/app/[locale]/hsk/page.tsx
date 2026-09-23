import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { hsk2vs3, hskFaq, hskLevels, hskTimeline, sources } from "@/content/hsk3-facts";
import { l } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { href } from "@/lib/site";
import Icon from "@/components/Icon";

export async function generateMetadata({ params }: PageProps<"/[locale]/hsk">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "HSK 3.0 : le guide complet du nouveau HSK (9 niveaux, 2026)" : "HSK 3.0: the complete guide to the new HSK (9 levels, 2026)",
    description: fr
      ? "Tout comprendre du HSK 3.0 : les 9 niveaux, le nombre de mots et de caractères, les différences avec le HSK 2.0, le calendrier 2026 et la FAQ."
      : "Everything about HSK 3.0: the 9 levels, word and character counts, differences with HSK 2.0, the 2026 timeline and FAQ.",
  };
}

export default async function HskPage({ params }: PageProps<"/[locale]/hsk">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  const t = getUI(locale);
  const n = (x: number) => x.toLocaleString(fr ? "fr-FR" : "en-US");
  const max = hskLevels[hskLevels.length - 1].words.total;
  const bandColor = { elementary: "var(--jade)", intermediate: "var(--gold)", advanced: "var(--seal)" } as const;
  const fmtDate = (d: string) =>
    new Date(d.length === 7 ? d + "-01" : d).toLocaleDateString(fr ? "fr-FR" : "en-US", d.length === 7 ? { year: "numeric", month: "long" } : { year: "numeric", month: "long", day: "numeric" });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hskFaq.map((f) => ({ "@type": "Question", name: l(f.q, locale), acceptedAnswer: { "@type": "Answer", text: l(f.a, locale) } })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">HSK 3.0 · 汉语水平考试</p>
      <h1 className="mt-2 max-w-4xl font-display text-5xl font-semibold tracking-tight sm:text-6xl">
        {fr ? "Le HSK 3.0, expliqué simplement" : "HSK 3.0, explained simply"}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-2">
        {fr
          ? "En 2021, la Chine a publié un nouveau référentiel pour l’apprentissage du chinois (norme GF0025-2021) : 3 étapes, 9 niveaux et quatre éléments mesurés (syllabes, caractères, mots, grammaire). L’examen HSK bascule officiellement sur ce format fin 2026. Voici tout ce qu’il faut savoir."
          : "In 2021, China published a new framework for learning Chinese (standard GF0025-2021): 3 stages, 9 levels and four measured elements (syllables, characters, words, grammar). The HSK exam officially switches to this format at the end of 2026. Here is everything you need to know."}
      </p>

      {/* chart */}
      <section className="card mt-12 p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">{fr ? "Mots cumulés par niveau" : "Cumulative words per level"}</h2>
        <p className="mt-1 text-sm text-muted">
          {fr ? "Norme GF0025-2021 · programme d’examen 2025 en pointillés" : "Standard GF0025-2021 · 2025 exam syllabus dotted"}
        </p>
        <div className="mt-8 flex h-72 items-end gap-3 sm:gap-6">
          {hskLevels.map((lv) => (
            <div key={lv.level} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <span className="text-xs font-semibold tabular-nums sm:text-sm">{n(lv.words.total)}</span>
              <div className="relative w-full flex-1">
                <div
                  className="absolute bottom-0 w-full rounded-t-lg"
                  style={{ height: `${(100 * lv.words.total) / max}%`, background: bandColor[lv.band] }}
                />
                <div
                  className="absolute bottom-0 left-1/2 w-2/3 -translate-x-1/2 rounded-t border-2 border-dashed border-ink/50"
                  style={{ height: `${(100 * lv.examSyllabus.words) / max}%` }}
                  title={`${fr ? "Examen" : "Exam"}: ${n(lv.examSyllabus.words)}`}
                />
              </div>
              <span className="font-display text-lg font-semibold">{lv.level}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-2">
          {(["elementary", "intermediate", "advanced"] as const).map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm" style={{ background: bandColor[b] }} /> {t.home[b]}
            </span>
          ))}
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm border-2 border-dashed border-ink/50" /> {fr ? "Programme d’examen 2025" : "2025 exam syllabus"}
          </span>
        </div>
      </section>

      {/* table */}
      <section className="mt-12">
        <h2 className="font-display text-3xl font-semibold">{fr ? "Les 9 niveaux en chiffres" : "The 9 levels in numbers"}</h2>
        <div className="card mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs tracking-wider text-muted uppercase">
                <th className="p-4">{fr ? "Niveau" : "Level"}</th>
                <th className="p-4">{fr ? "Syllabes" : "Syllables"}</th>
                <th className="p-4">{fr ? "Caractères" : "Characters"}</th>
                <th className="p-4">{fr ? "Mots" : "Words"}</th>
                <th className="p-4">{fr ? "Grammaire" : "Grammar"}</th>
                <th className="p-4">{fr ? "Examen 2025 (mots)" : "2025 exam (words)"}</th>
              </tr>
            </thead>
            <tbody>
              {hskLevels.map((lv, i) => (
                <tr key={lv.level} className="border-b border-line/60 last:border-0">
                  <td className="p-4">
                    <Link href={href(locale, `/learn/${i + 1}`)} className="flex items-center gap-2 font-display text-lg font-semibold hover:text-seal">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: bandColor[lv.band] }} />
                      HSK {lv.level}
                    </Link>
                  </td>
                  {[lv.syllables, lv.characters, lv.words, lv.grammar].map((c, k) => (
                    <td key={k} className="p-4 tabular-nums">
                      <span className="font-semibold">+{n(c.new)}</span> <span className="text-muted">/ {n(c.total)}</span>
                    </td>
                  ))}
                  <td className="p-4 tabular-nums text-ink-2">{n(lv.examSyllabus.words)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm text-ink-2">
          <Icon name="info" className="mt-0.5 shrink-0 text-gold" />
          <p>
            {fr
              ? "Attention à la confusion fréquente : la norme de 2021 (11 092 mots) décrit la compétence visée, tandis que le programme d’examen publié en novembre 2025 définit ce que l’examen teste réellement, avec des listes plus courtes aux niveaux 1 à 6. Hanlu enseigne la norme complète : tu seras donc couvert pour l’examen."
              : "A frequent source of confusion: the 2021 standard (11,092 words) describes target proficiency, while the exam syllabus published in November 2025 defines what the exam actually tests, with shorter lists at levels 1–6. Hanlu teaches the full standard, so you are covered for the exam."}
          </p>
        </div>
      </section>

      {/* can-do */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">{fr ? "Ce que tu sais faire à chaque niveau" : "What you can do at each level"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {hskLevels.map((lv) => (
            <div key={lv.level} className="card flex gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-semibold text-white" style={{ background: bandColor[lv.band] }}>
                {lv.level}
              </span>
              <div>
                <p className="text-ink-2">{l(lv.canDo, locale)}</p>
                {lv.examDuration && <p className="mt-1 text-xs text-muted">{fr ? "Durée de l’examen" : "Exam duration"} : {lv.examDuration}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* compare */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">HSK 2.0 → HSK 3.0</h2>
        <div className="card mt-6 divide-y divide-line">
          {hsk2vs3.map((r, i) => (
            <div key={i} className="grid gap-2 p-5 md:grid-cols-[12rem_1fr_1fr] md:gap-6">
              <p className="font-semibold">{l(r.topic, locale)}</p>
              <p className="text-sm text-muted">
                <span className="mr-2 chip !text-[10px]">2.0</span>
                {l(r.hsk2, locale)}
              </p>
              <p className="text-sm">
                <span className="mr-2 chip !border-seal/30 !text-[10px] !text-seal">3.0</span>
                {l(r.hsk3, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">{fr ? "Calendrier" : "Timeline"}</h2>
        <ol className="relative mt-8 space-y-6 border-l-2 border-line pl-8">
          {hskTimeline.map((e) => {
            const future = new Date(e.date.length === 7 ? e.date + "-01" : e.date) > new Date("2026-09-23");
            return (
              <li key={e.date} className="relative">
                <span className={`absolute top-1.5 -left-[2.4rem] h-4 w-4 rounded-full border-4 border-paper ${future ? "bg-seal" : "bg-ink-2"}`} />
                <p className={`text-sm font-semibold ${future ? "text-seal" : "text-muted"}`}>{fmtDate(e.date)}</p>
                <p className="mt-1">{fr ? e.fr : e.en}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* faq */}
      <section className="mt-16">
        <h2 className="font-display text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {hskFaq.map((f, i) => (
            <details key={i} className="card group p-5 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {l(f.q, locale)}
                <span className="text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-2">{l(f.a, locale)}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold tracking-widest text-muted uppercase">Sources</h2>
        <ul className="mt-3 space-y-1 text-sm">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink-2 underline decoration-line underline-offset-2 hover:text-seal">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
