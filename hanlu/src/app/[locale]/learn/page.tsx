import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { LEVELS, getCourse, getVocab, getChars } from "@/content";
import { hskLevels } from "@/content/hsk3-facts";
import { l } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { FREE_LEVELS, href, levelLabel } from "@/lib/site";
import { LevelProgress } from "@/components/learn/LessonProgress";
import Icon from "@/components/Icon";

export async function generateMetadata({ params }: PageProps<"/[locale]/learn">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Cours de chinois HSK 1 à 9" : "Chinese courses HSK 1 to 9",
    description: fr
      ? "Parcours complet de chinois aligné sur le HSK 3.0 : leçons, dialogues, grammaire et exercices, du niveau 1 au niveau 9."
      : "A complete Chinese course aligned with HSK 3.0: lessons, dialogues, grammar and exercises from level 1 to 9.",
  };
}

export default async function LearnPage({ params }: PageProps<"/[locale]/learn">) {
  const locale = (await params).locale as Locale;
  const t = getUI(locale);
  const fr = locale === "fr";
  const band = { elementary: t.home.elementary, intermediate: t.home.intermediate, advanced: t.home.advanced };
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-seal uppercase">{t.nav.learn}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight">{fr ? "Ton parcours HSK 3.0" : "Your HSK 3.0 path"}</h1>
        <p className="mt-4 text-lg text-ink-2">
          {fr
            ? "Chaque niveau suit le référentiel officiel : vocabulaire, caractères et grammaire. Avance à ton rythme, les révisions s’occupent du reste."
            : "Each level follows the official syllabus: vocabulary, characters and grammar. Move at your own pace; reviews take care of the rest."}
        </p>
      </header>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map((lv, i) => {
          const c = getCourse(lv);
          const facts = hskLevels[i];
          const ids = c?.lessons.map((x) => x.id) ?? [];
          return (
            <Link
              key={lv}
              href={href(locale, `/learn/${lv}`)}
              className="card group relative flex flex-col overflow-hidden p-6 transition hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[8rem] leading-none font-semibold text-ink/[0.04]">
                {levelLabel(lv)}
              </span>
              <div className="flex items-center gap-2">
                <span className="chip">{band[facts.band]}</span>
                {FREE_LEVELS.includes(lv) ? (
                  <span className="chip !border-jade/30 !text-jade">{t.common.free}</span>
                ) : (
                  <span className="chip !border-gold/40 !text-gold">
                    <Icon name="star" size={12} fill /> {t.common.pro}
                  </span>
                )}
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold">HSK {levelLabel(lv)}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{l(facts.canDo, locale)}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Mini n={getVocab(lv).length} label={t.common.words} />
                <Mini n={getChars(lv).length} label={t.common.characters} />
                <Mini n={c?.grammar.length ?? facts.grammar.new} label={fr ? "grammaire" : "grammar"} />
              </div>
              <div className="mt-5">
                {ids.length ? (
                  <LevelProgress ids={ids} label={`${ids.length} ${t.common.lessons.toLowerCase()}`} />
                ) : (
                  <p className="text-xs text-muted">{fr ? "Leçons en préparation · vocabulaire disponible" : "Lessons in progress · vocabulary available"}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Mini({ n, label }: { n: number; label: string }) {
  return (
    <div className="rounded-xl bg-paper-2 px-2 py-2">
      <div className="font-display text-lg font-semibold">{n.toLocaleString()}</div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}
