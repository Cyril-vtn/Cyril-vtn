import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { radicals } from "@/content/foundations/radicals";
import { l } from "@/i18n/config";
import Speak from "@/components/Speak";

export async function generateMetadata({ params }: PageProps<"/[locale]/radicals">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return {
    title: fr ? "Les 80 radicaux chinois essentiels" : "The 80 essential Chinese radicals",
    description: fr ? "Les radicaux les plus utiles pour comprendre et mémoriser les caractères chinois, avec exemples." : "The most useful radicals for understanding and remembering Chinese characters, with examples.",
  };
}

export default async function RadicalsPage({ params }: PageProps<"/[locale]/radicals">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">部首</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight">{fr ? "Les radicaux essentiels" : "Essential radicals"}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        {fr
          ? "La plupart des caractères combinent un radical (le sens) et un composant phonétique (le son). Connaître ces briques rend chaque nouveau caractère plus facile à retenir."
          : "Most characters combine a radical (meaning) and a phonetic component (sound). Knowing these building blocks makes every new character easier to remember."}
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {radicals.map((r) => (
          <div key={r.radical} className="card p-5">
            <div className="flex items-start gap-4">
              <span className="font-han text-5xl leading-none text-seal">{r.radical}</span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">
                  {r.pinyin}
                  {r.variants?.length ? <span className="ml-2 font-han font-normal text-muted">{r.variants.join(" ")}</span> : null}
                </p>
                <p className="text-sm text-ink-2">{l(r.meaning, locale)}</p>
                <p className="mt-1 text-xs text-muted">
                  {r.strokes} {fr ? "traits" : "strokes"}
                </p>
              </div>
            </div>
            <ul className="mt-4 flex gap-2">
              {r.examples.map((e) => (
                <li key={e.hanzi} className="flex flex-1 flex-col items-center rounded-xl bg-paper-2 p-2 text-center" title={l(e.tr, locale)}>
                  <span className="font-han text-2xl">{e.hanzi}</span>
                  <span className="text-xs text-muted">{e.pinyin}</span>
                  <Speak text={e.hanzi} source="radicals" size="sm" className="mt-1 !h-6 !w-6" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
