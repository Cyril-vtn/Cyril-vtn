import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import ToneTrainer from "@/components/practice/ToneTrainer";
import PracticeHeader from "@/components/practice/PracticeHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/practice/tones">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return { title: fr ? "Entraîneur de tons chinois (gratuit)" : "Chinese tone trainer (free)" };
}

export default async function TonesPage({ params }: PageProps<"/[locale]/practice/tones">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PracticeHeader locale={locale} title={fr ? "Entraîneur de tons" : "Tone trainer"} subtitle={fr ? "Écoute, puis indique le ton de chaque syllabe." : "Listen, then mark the tone of each syllable."} />
      <ToneTrainer locale={locale} />
    </div>
  );
}
