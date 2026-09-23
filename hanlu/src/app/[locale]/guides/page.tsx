import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { guides } from "@/content/foundations/guides";
import { l } from "@/i18n/config";
import { href } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[locale]/guides">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Guides pour apprendre le chinois : tons, pinyin, grammaire" : "Guides to learning Chinese: tones, pinyin, grammar",
    description: fr ? "Les fondamentaux du chinois mandarin expliqués en profondeur : pinyin, tons, écriture, 了, 的/得/地, méthode." : "Mandarin Chinese fundamentals explained in depth: pinyin, tones, writing, 了, 的/得/地, method.",
  };
}

const CAT: Record<string, [string, string, string]> = {
  pronunciation: ["Prononciation", "Pronunciation", "音"],
  writing: ["Écriture", "Writing", "字"],
  grammar: ["Grammaire", "Grammar", "法"],
  exam: ["Examen", "Exam", "考"],
  method: ["Méthode", "Method", "学"],
  culture: ["Culture", "Culture", "文"],
};

export default async function GuidesPage({ params }: PageProps<"/[locale]/guides">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">{fr ? "Guides" : "Guides"}</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold tracking-tight">{fr ? "Les fondamentaux, en profondeur" : "The fundamentals, in depth"}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        {fr ? "Tout ce que les manuels survolent : lis-les une fois, reviens-y quand tu bloques." : "Everything textbooks skim over: read them once, come back when you get stuck."}
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => {
          const c = CAT[g.category];
          return (
            <Link key={g.slug} href={href(locale, `/guides/${g.slug}`)} className="card group relative overflow-hidden p-7 transition hover:-translate-y-1">
              <span className="pointer-events-none absolute -right-3 -bottom-8 font-han text-[8rem] leading-none text-ink/[0.05] transition group-hover:text-seal/10">{c[2]}</span>
              <span className="chip">{fr ? c[0] : c[1]}</span>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-seal">{l(g.title, locale)}</h2>
              <p className="mt-2 text-ink-2">{l(g.summary, locale)}</p>
              <p className="mt-4 text-xs text-muted">
                {g.readMinutes} {fr ? "min de lecture" : "min read"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
