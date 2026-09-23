import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { allGrammar, getCourse, getGrammar } from "@/content";
import { l, locales } from "@/i18n/config";
import { href, levelLabel } from "@/lib/site";
import GrammarBody from "@/components/learn/GrammarBody";
import GrammarView from "@/components/grammar/GrammarView";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return locales.flatMap((locale) => allGrammar().map((g) => ({ locale, id: g.id })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/grammar/[id]">): Promise<Metadata> {
  const { locale, id } = await params;
  const g = getGrammar(id);
  if (!g) return {};
  const title = `${g.pattern} — ${l(g.title, locale as Locale)} (HSK ${levelLabel(g.level)})`;
  return { title, description: l(g.explanation, locale as Locale).replace(/\*\*/g, "").slice(0, 155) };
}

export default async function GrammarPoint({ params }: PageProps<"/[locale]/grammar/[id]">) {
  const { locale: loc, id } = await params;
  const locale = loc as Locale;
  const g = getGrammar(id);
  if (!g) notFound();
  const fr = locale === "fr";
  const siblings = getCourse(g.level)?.grammar ?? [];
  const i = siblings.findIndex((x) => x.id === id);
  const prev = siblings[i - 1];
  const next = siblings[i + 1];
  const lesson = getCourse(g.level)?.lessons.find((x) => x.grammar.includes(id));
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <GrammarView id={g.id} level={g.level} />
      <Link href={href(locale, `/grammar?level=${g.level}`)} className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <Icon name="back" size={16} /> {fr ? "Grammaire" : "Grammar"} HSK {levelLabel(g.level)}
      </Link>
      <article className="card mt-6 p-6 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="chip">HSK {levelLabel(g.level)}</span>
          {g.category && <span className="chip">{g.category}</span>}
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">{l(g.title, locale)}</h1>
        <GrammarBody g={g} locale={locale} />
      </article>
      {lesson && (
        <Link href={href(locale, `/learn/${g.level}/${lesson.id}`)} className="card mt-6 flex items-center gap-4 p-5 transition hover:-translate-y-0.5">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-seal text-white">
            <Icon name="play" fill />
          </span>
          <div className="flex-1">
            <p className="text-xs text-muted">{fr ? "Pratique dans la leçon" : "Practice it in the lesson"}</p>
            <p className="font-semibold">{l(lesson.title, locale)}</p>
          </div>
          <Icon name="arrow" className="text-muted" />
        </Link>
      )}
      <nav className="mt-8 grid grid-cols-2 gap-3">
        {prev ? (
          <Link href={href(locale, `/grammar/${prev.id}`)} className="card p-4 text-sm hover:border-ink-2">
            <span className="text-muted">← {fr ? "Précédent" : "Previous"}</span>
            <span className="mt-1 block font-semibold">{l(prev.title, locale)}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={href(locale, `/grammar/${next.id}`)} className="card p-4 text-right text-sm hover:border-ink-2">
            <span className="text-muted">{fr ? "Suivant" : "Next"} →</span>
            <span className="mt-1 block font-semibold">{l(next.title, locale)}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
