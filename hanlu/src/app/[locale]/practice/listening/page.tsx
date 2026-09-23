import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import ListeningDrill from "@/components/practice/ListeningDrill";
import PracticeHeader from "@/components/practice/PracticeHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/practice/listening">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return { title: fr ? "Compréhension orale : mots HSK à l’oreille" : "Listening practice: HSK words by ear" };
}

export default async function ListeningPage({ params }: PageProps<"/[locale]/practice/listening">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PracticeHeader locale={locale} title={fr ? "Dictée audio" : "Listening drill"} subtitle={fr ? "Écoute et choisis le bon mot." : "Listen and pick the right word."} />
      <ListeningDrill locale={locale} />
    </div>
  );
}
