import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import Placement from "@/components/practice/Placement";
import PracticeHeader from "@/components/practice/PracticeHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/placement">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Test de niveau de chinois gratuit (HSK 1 à 9)" : "Free Chinese level test (HSK 1–9)",
    description: fr ? "Estime ton niveau HSK 3.0 en 5 minutes avec un test adaptatif gratuit." : "Estimate your HSK 3.0 level in 5 minutes with a free adaptive test.",
  };
}

export default async function PlacementPage({ params }: PageProps<"/[locale]/placement">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PracticeHeader locale={locale} title={fr ? "Test de niveau" : "Placement test"} subtitle={fr ? "Adaptatif, gratuit, sans inscription." : "Adaptive, free, no sign-up."} />
      <Placement locale={locale} />
    </div>
  );
}
