import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { href } from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";

export async function generateMetadata({ params }: PageProps<"/[locale]/practice">): Promise<Metadata> {
  const fr = (await params).locale === "fr";
  return { title: fr ? "Entraînement : tons, écriture, écoute, pinyin" : "Practice: tones, handwriting, listening, pinyin" };
}

export default async function PracticeHub({ params }: PageProps<"/[locale]/practice">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  const tools: { to: string; icon: IconName; glyph: string; t: string; d: string; tag?: string }[] = [
    {
      to: "/practice/tones",
      icon: "wave",
      glyph: "声",
      t: fr ? "Entraîneur de tons" : "Tone trainer",
      d: fr ? "Écoute un mot, identifie ses tons. L’exercice n°1 pour une prononciation juste." : "Hear a word, identify its tones. The #1 drill for accurate pronunciation.",
      tag: fr ? "Populaire" : "Popular",
    },
    {
      to: "/practice/listening",
      icon: "ear",
      glyph: "听",
      t: fr ? "Dictée audio" : "Listening drill",
      d: fr ? "Reconnais les mots HSK à l’oreille, du niveau 1 au niveau 9." : "Recognise HSK words by ear, from level 1 to 9.",
    },
    {
      to: "/practice/writing",
      icon: "brush",
      glyph: "写",
      t: fr ? "Écriture des caractères" : "Character writing",
      d: fr ? "Ordre des traits animé puis tracé guidé des 3 000 caractères officiels." : "Animated stroke order then guided tracing for all 3,000 official characters.",
    },
    {
      to: "/practice/pinyin",
      icon: "grid",
      glyph: "拼",
      t: fr ? "Tableau du pinyin" : "Pinyin chart",
      d: fr ? "Toutes les syllabes du mandarin, cliquables, avec les 4 tons." : "Every Mandarin syllable, clickable, in all 4 tones.",
    },
    {
      to: "/placement",
      icon: "target",
      glyph: "测",
      t: fr ? "Test de niveau" : "Placement test",
      d: fr ? "5 minutes pour savoir où tu te situes sur l’échelle HSK 3.0." : "5 minutes to find where you stand on the HSK 3.0 scale.",
    },
    {
      to: "/radicals",
      icon: "layers",
      glyph: "部",
      t: fr ? "Radicaux" : "Radicals",
      d: fr ? "Les 80 briques qui composent la majorité des caractères." : "The 80 building blocks behind most characters.",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold tracking-widest text-seal uppercase">{fr ? "Entraînement" : "Practice"}</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight">{fr ? "Muscle ton chinois" : "Train your Chinese"}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        {fr ? "Des ateliers ciblés pour les compétences que les applis négligent : tons, oreille et écriture." : "Focused drills for the skills most apps neglect: tones, listening and handwriting."}
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((x) => (
          <Link key={x.to} href={href(locale, x.to)} className="card group relative overflow-hidden p-7 transition hover:-translate-y-1">
            <span className="pointer-events-none absolute -right-4 -bottom-8 font-han text-[9rem] leading-none text-ink/[0.05] transition group-hover:text-seal/10">
              {x.glyph}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-seal/10 text-seal">
              <Icon name={x.icon} />
            </span>
            {x.tag && <span className="chip absolute top-6 right-6 !border-seal/30 !text-seal">{x.tag}</span>}
            <h2 className="mt-5 text-xl font-semibold">{x.t}</h2>
            <p className="mt-2 text-ink-2">{x.d}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
