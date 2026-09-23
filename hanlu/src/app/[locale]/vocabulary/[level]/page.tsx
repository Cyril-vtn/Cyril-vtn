import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { LEVELS, getVocab, parseLevel } from "@/content";
import { locales } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { href, levelLabel } from "@/lib/site";
import VocabTable from "@/components/vocab/VocabTable";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return locales.flatMap((locale) => LEVELS.map((lv) => ({ locale, level: String(lv) })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/vocabulary/[level]">): Promise<Metadata> {
  const { locale, level } = await params;
  const lv = parseLevel(level);
  if (!lv) return {};
  const n = getVocab(lv).length;
  const fr = locale === "fr";
  return {
    title: fr ? `Liste de vocabulaire HSK ${levelLabel(lv)} (${n} mots, HSK 3.0)` : `HSK ${levelLabel(lv)} vocabulary list (${n} words, HSK 3.0)`,
    description: fr
      ? `Les ${n} mots du HSK ${levelLabel(lv)} (nouveau HSK 3.0) avec pinyin, traduction française, audio et révisions espacées.`
      : `All ${n} HSK ${levelLabel(lv)} words (new HSK 3.0) with pinyin, English meaning, audio and spaced repetition.`,
  };
}

export default async function VocabLevel({ params }: PageProps<"/[locale]/vocabulary/[level]">) {
  const { locale: loc, level } = await params;
  const locale = loc as Locale;
  const lv = parseLevel(level);
  if (!lv) notFound();
  const words = getVocab(lv);
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href={href(locale, "/vocabulary")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <Icon name="back" size={16} /> {getUI(locale).nav.vocabulary}
      </Link>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl font-semibold tracking-tight">
            {fr ? "Vocabulaire" : "Vocabulary"} HSK {levelLabel(lv)}
          </h1>
          <p className="mt-2 text-ink-2">
            {words.length.toLocaleString()} {fr ? "mots du référentiel officiel HSK 3.0" : "words from the official HSK 3.0 syllabus"}
          </p>
        </div>
        <div className="flex gap-1.5">
          {LEVELS.map((x) => (
            <Link
              key={x}
              href={href(locale, `/vocabulary/${x}`)}
              className={`grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-semibold ${x === lv ? "bg-ink text-paper" : "border border-line bg-card"}`}
            >
              {levelLabel(x)}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <VocabTable words={words} locale={locale} />
      </div>
    </div>
  );
}
