import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { LEVELS, getVocab } from "@/content";
import { getUI } from "@/i18n/ui";
import { href, levelLabel } from "@/lib/site";
import { Hanzi } from "@/components/Zh";
import Icon from "@/components/Icon";

export async function generateMetadata({ params }: PageProps<"/[locale]/vocabulary">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Liste de vocabulaire HSK 3.0 complète (11 092 mots)" : "Complete HSK 3.0 vocabulary list (11,092 words)",
    description: fr
      ? "Toutes les listes officielles du HSK 3.0, niveau par niveau, avec pinyin, traduction française et audio."
      : "Every official HSK 3.0 word list, level by level, with pinyin, English meaning and audio.",
  };
}

export default async function VocabIndex({ params }: PageProps<"/[locale]/vocabulary">) {
  const locale = (await params).locale as Locale;
  const t = getUI(locale);
  const fr = locale === "fr";
  const totals = LEVELS.map((lv) => getVocab(lv).length);
  const cumulative = totals.map((_, i) => totals.slice(0, i + 1).reduce((a, b) => a + b, 0));
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">{t.nav.vocabulary}</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold tracking-tight">
        {fr ? "Les listes officielles du HSK 3.0" : "The official HSK 3.0 word lists"}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        {fr
          ? "11 092 mots répartis sur 9 niveaux. Recherche par caractère, pinyin ou traduction, écoute chaque mot et ajoute-le à tes révisions en un clic."
          : "11,092 words across 9 levels. Search by character, pinyin or meaning, listen to every word and add it to your review deck in one click."}
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LEVELS.map((lv, i) => {
          const words = getVocab(lv);
          const cum = cumulative[i];
          return (
            <Link key={lv} href={href(locale, `/vocabulary/${lv}`)} className="card group p-6 transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold">HSK {levelLabel(lv)}</h2>
                <Icon name="arrow" className="text-muted transition group-hover:translate-x-1 group-hover:text-seal" />
              </div>
              <p className="mt-1 text-sm text-muted">
                {words.length.toLocaleString()} {t.common.words} · {fr ? "cumul" : "total"} {cum.toLocaleString()}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xl">
                {words.slice(0, 8).map((w) => (
                  <Hanzi key={w.id} hanzi={w.hanzi} pinyin={w.pinyin} />
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
