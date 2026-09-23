import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { href } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default async function About({ params }: PageProps<"/[locale]/about">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <span className="font-han text-7xl text-seal">汉路</span>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight">{fr ? "Le chemin du chinois" : "The path to Chinese"}</h1>
      <div className="prose-hl mt-8 space-y-4 text-lg text-ink-2">
        {fr ? (
          <>
            <p>« Hanlu » (汉路) signifie littéralement <strong>le chemin du chinois</strong>. Nous l’avons créé parce que les francophones manquaient d’un outil sérieux, moderne et à jour pour apprendre le mandarin.</p>
            <p>Depuis 2021, le HSK a changé : 9 niveaux, 11 092 mots, 3 000 caractères. La plupart des applis et manuels n’ont pas suivi. Hanlu est construit dès le départ sur le nouveau référentiel.</p>
            <p>Notre principe : <strong>comprendre, pratiquer, retenir</strong>. Des explications claires qui disent pourquoi, des exercices qui font travailler l’oreille et la mémoire, et un algorithme de révision qui s’assure que rien ne s’oublie.</p>
          </>
        ) : (
          <>
            <p>“Hanlu” (汉路) literally means <strong>the path of Chinese</strong>. We built it because learners lacked a serious, modern, up-to-date tool to learn Mandarin, especially in French.</p>
            <p>Since 2021, the HSK has changed: 9 levels, 11,092 words, 3,000 characters. Most apps and textbooks have not caught up. Hanlu is built on the new standard from day one.</p>
            <p>Our principle: <strong>understand, practise, retain</strong>. Clear explanations that tell you why, exercises that train your ear and memory, and a review algorithm that makes sure nothing slips away.</p>
          </>
        )}
      </div>
      <Link href={href(locale, "/learn/1")} className="btn btn-primary mt-10">
        {fr ? "Commencer le HSK 1" : "Start HSK 1"}
      </Link>
    </div>
  );
}
