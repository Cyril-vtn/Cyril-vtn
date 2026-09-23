import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { allVocab } from "@/content";
import { initials, finals, pinyinTable } from "@/content/foundations/pinyin";
import { stripTones, toneOf } from "@/lib/pinyin";
import PinyinChart, { type ToneSamples } from "@/components/practice/PinyinChart";
import PracticeHeader from "@/components/practice/PracticeHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/practice/pinyin">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Tableau complet du pinyin avec audio" : "Complete pinyin chart with audio",
    description: fr ? "Toutes les syllabes du chinois mandarin, avec les 4 tons et un exemple audio pour chacune." : "Every Mandarin Chinese syllable, in all 4 tones, with an audio example for each.",
  };
}

function buildSamples(locale: Locale): ToneSamples {
  const out: ToneSamples = {};
  for (const w of allVocab()) {
    if ([...w.hanzi].length !== 1 || /\s/.test(w.pinyin)) continue;
    const key = stripTones(w.pinyin).toLowerCase().replace(/ü/g, "ü");
    const t = toneOf(w.pinyin);
    if (t > 4) continue;
    out[key] ??= {};
    if (!out[key][t]) out[key][t] = { hanzi: w.hanzi, pinyin: w.pinyin, gloss: (locale === "fr" ? w.fr : w.en) || w.en };
  }
  return out;
}

export default async function PinyinPage({ params }: PageProps<"/[locale]/practice/pinyin">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PracticeHeader locale={locale} title={fr ? "Tableau du pinyin" : "Pinyin chart"} subtitle={fr ? "Clique sur une syllabe pour l’entendre dans ses quatre tons." : "Click a syllable to hear it in its four tones."} />
      <PinyinChart initials={initials} finals={finals} table={pinyinTable} samples={buildSamples(locale)} locale={locale} />
    </div>
  );
}
