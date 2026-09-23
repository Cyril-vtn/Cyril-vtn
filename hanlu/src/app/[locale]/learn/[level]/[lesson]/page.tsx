import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale, VocabEntry } from "@/content/types";
import { LEVELS, findWord, getCourse, getGrammar, getLesson, parseLevel } from "@/content";
import { l, locales } from "@/i18n/config";
import { href } from "@/lib/site";
import LessonPlayer from "@/components/learn/LessonPlayer";
import ProGate from "@/components/ProGate";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    LEVELS.flatMap((lv) => (getCourse(lv)?.lessons ?? []).map((x) => ({ locale, level: String(lv), lesson: x.id }))),
  );
}

export async function generateMetadata({ params }: PageProps<"/[locale]/learn/[level]/[lesson]">): Promise<Metadata> {
  const { locale, level, lesson: id } = await params;
  const lv = parseLevel(level);
  const lesson = lv && getLesson(lv, id);
  if (!lesson) return {};
  return {
    title: `HSK ${lv} · ${l(lesson.title, locale as Locale)}`,
    description: l(lesson.subtitle, locale as Locale),
  };
}

export default async function LessonPage({ params }: PageProps<"/[locale]/learn/[level]/[lesson]">) {
  const { locale: loc, level, lesson: id } = await params;
  const locale = loc as Locale;
  const lv = parseLevel(level);
  const lesson = lv && getLesson(lv, id);
  if (!lv || !lesson) notFound();
  const course = getCourse(lv)!;
  const grammar = lesson.grammar.map((g) => getGrammar(g)).filter((g) => !!g);
  const words = lesson.vocab
    .map((h) => findWord(h))
    .filter((w): w is VocabEntry => !!w)
    .filter((w, i, arr) => arr.findIndex((x) => x.id === w.id) === i);
  const idx = course.lessons.findIndex((x) => x.id === id);
  const next = course.lessons[idx + 1];
  return (
    <ProGate level={lv} locale={locale} feature="lesson">
      <LessonPlayer
        lesson={lesson}
        grammar={grammar}
        words={words}
        locale={locale}
        nextHref={next ? href(locale, `/learn/${lv}/${next.id}`) : undefined}
      />
    </ProGate>
  );
}
