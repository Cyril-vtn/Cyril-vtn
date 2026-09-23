import type { Metadata } from "next";
import { Suspense } from "react";
import type { Locale } from "@/content/types";
import WritingPractice from "@/components/practice/WritingPractice";
import PracticeHeader from "@/components/practice/PracticeHeader";

export async function generateMetadata({ params }: PageProps<"/[locale]/practice/writing">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return { title: fr ? "Ordre des traits et écriture des caractères chinois" : "Chinese character stroke order & writing practice" };
}

export default async function WritingPage({ params }: PageProps<"/[locale]/practice/writing">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <PracticeHeader locale={locale} title={fr ? "Écriture des caractères" : "Character writing"} subtitle={fr ? "Les 3 000 caractères officiels du HSK 3.0, trait par trait." : "All 3,000 official HSK 3.0 characters, stroke by stroke."} />
      <Suspense>
        <WritingPractice locale={locale} />
      </Suspense>
    </div>
  );
}
