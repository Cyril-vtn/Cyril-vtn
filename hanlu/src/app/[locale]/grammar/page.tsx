import type { Metadata } from "next";
import { Suspense } from "react";
import type { Locale } from "@/content/types";
import { allGrammar } from "@/content";
import GrammarIndex from "@/components/grammar/GrammarIndex";

export async function generateMetadata({ params }: PageProps<"/[locale]/grammar">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Grammaire chinoise HSK 3.0 : toutes les structures expliquées" : "HSK 3.0 Chinese grammar: every structure explained",
    description: fr
      ? "Fiches de grammaire chinoise par niveau HSK : structure, explication claire, exemples audio et pièges fréquents."
      : "Chinese grammar guides by HSK level: pattern, clear explanation, audio examples and common mistakes.",
  };
}

export default async function GrammarPage({ params }: PageProps<"/[locale]/grammar">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  const items = allGrammar().map(({ id, level, title, pattern, category }) => ({ id, level, title, pattern, category }));
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">{fr ? "Grammaire" : "Grammar"}</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold tracking-tight">
        {fr ? "La grammaire chinoise, enfin claire" : "Chinese grammar, finally clear"}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        {fr
          ? `${items.length} fiches alignées sur le programme officiel du HSK 3.0, avec comparaisons au français et pièges à éviter.`
          : `${items.length} guides aligned with the official HSK 3.0 syllabus, with comparisons to English and mistakes to avoid.`}
      </p>
      <Suspense>
        <GrammarIndex items={items} locale={locale} />
      </Suspense>
    </div>
  );
}
