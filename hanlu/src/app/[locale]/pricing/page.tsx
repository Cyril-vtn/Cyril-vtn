import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import Pricing from "@/components/pricing/Pricing";

export async function generateMetadata({ params }: PageProps<"/[locale]/pricing">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return { title: fr ? "Tarifs" : "Pricing" };
}

export default async function PricingPage({ params }: PageProps<"/[locale]/pricing">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  const faq = fr
    ? [
        ["Puis-je vraiment apprendre gratuitement ?", "Oui. Le HSK 1 complet, toutes les listes de vocabulaire, les fiches de grammaire et les outils d’entraînement sont gratuits, sans limite de durée."],
        ["Comment fonctionne l’essai gratuit ?", "L’abonnement annuel inclut 7 jours d’essai. Annule avant la fin : tu ne paies rien."],
        ["Hanlu remplace-t-il un professeur ?", "Hanlu couvre le vocabulaire, la grammaire, la compréhension et l’écriture. Pour l’expression orale, nous recommandons de compléter par des échanges avec des locuteurs natifs."],
        ["Suis-je prêt pour l’examen officiel ?", "Nos cours suivent le référentiel HSK 3.0 complet, plus large que le programme d’examen. Entraîne-toi aussi aux épreuves orales du centre d’examen."],
      ]
    : [
        ["Can I really learn for free?", "Yes. Full HSK 1, every vocabulary list, all grammar guides and practice tools are free, with no time limit."],
        ["How does the free trial work?", "The yearly plan includes a 7-day trial. Cancel before it ends and you pay nothing."],
        ["Does Hanlu replace a teacher?", "Hanlu covers vocabulary, grammar, comprehension and writing. For speaking, we recommend adding conversations with native speakers."],
        ["Will I be ready for the official exam?", "Our courses follow the full HSK 3.0 standard, which is broader than the exam syllabus. Also practise the speaking section with your test centre’s format."],
      ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-5xl font-semibold tracking-tight">{fr ? "Investis dans ton chinois" : "Invest in your Chinese"}</h1>
        <p className="mt-4 text-lg text-ink-2">{fr ? "Commence gratuitement. Passe à Pro quand tu es prêt." : "Start free. Go Pro when you are ready."}</p>
      </div>
      <div className="mt-12">
        <Pricing locale={locale} />
      </div>
      <div className="mx-auto mt-20 max-w-3xl space-y-3">
        {faq.map(([q, a]) => (
          <details key={q} className="card group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              {q} <span className="text-muted transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-ink-2">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
