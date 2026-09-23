import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { LEVELS, getChars, getCourse, getVocab, parseLevel } from "@/content";
import { hskLevels } from "@/content/hsk3-facts";
import { l, locales } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { FREE_LEVELS, href, levelLabel } from "@/lib/site";
import { LessonBadge, LevelProgress } from "@/components/learn/LessonProgress";
import Icon from "@/components/Icon";
import { artSrc } from "@/content/art";

export function generateStaticParams() {
  return locales.flatMap((locale) => LEVELS.map((lv) => ({ locale, level: String(lv) })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/learn/[level]">): Promise<Metadata> {
  const { locale, level } = await params;
  const lv = parseLevel(level);
  if (!lv) return {};
  const fr = locale === "fr";
  return {
    title: fr ? `Cours HSK ${levelLabel(lv)} (HSK 3.0)` : `HSK ${levelLabel(lv)} course (HSK 3.0)`,
    description: l(hskLevels[lv - 1].canDo, locale as Locale),
  };
}

const THEME_GLYPH: Record<string, string> = {
  greetings: "你", family: "家", food: "吃", time: "时", shopping: "买", travel: "行", school: "学", work: "工",
  health: "医", weather: "天", hobbies: "乐", home: "房", city: "城", feelings: "心", nature: "山", tech: "机",
  culture: "文", society: "社",
};

export default async function LevelPage({ params }: PageProps<"/[locale]/learn/[level]">) {
  const { locale: loc, level } = await params;
  const locale = loc as Locale;
  const lv = parseLevel(level);
  if (!lv) notFound();
  const t = getUI(locale);
  const fr = locale === "fr";
  const course = getCourse(lv);
  const facts = hskLevels[lv - 1];
  const chars = getChars(lv);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href={href(locale, "/learn")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <Icon name="back" size={16} /> {t.nav.learn}
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{t.home[facts.band]}</span>
            {FREE_LEVELS.includes(lv) ? (
              <span className="chip !border-jade/30 !text-jade">{t.common.free}</span>
            ) : (
              <span className="chip !border-gold/40 !text-gold">Pro</span>
            )}
          </div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">HSK {levelLabel(lv)}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={artSrc(`level-${lv}`)} alt="" className="ink-art mt-6 aspect-[21/9] w-full rounded-3xl object-cover" />
          <p className="mt-4 max-w-2xl text-lg text-ink-2">{l(facts.canDo, locale)}</p>

          {course ? (
            <>
              <div className="mt-8 max-w-md">
                <LevelProgress ids={course.lessons.map((x) => x.id)} label={fr ? "Progression" : "Progress"} />
              </div>
              <ol className="mt-10 space-y-3">
                {course.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      href={href(locale, `/learn/${lv}/${lesson.id}`)}
                      className="card group flex items-center gap-5 p-4 transition hover:-translate-y-0.5 sm:p-5"
                    >
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-paper-2 font-han text-2xl transition group-hover:bg-seal group-hover:text-white">
                        {THEME_GLYPH[lesson.theme] ?? "学"}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                          {t.common.lesson} {lesson.order}
                        </p>
                        <h2 className="truncate text-lg font-semibold">{l(lesson.title, locale)}</h2>
                        <p className="truncate text-sm text-ink-2">{l(lesson.subtitle, locale)}</p>
                      </div>
                      <LessonBadge id={lesson.id} />
                      <Icon name="arrow" className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-seal" />
                    </Link>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <div className="card mt-10 p-8">
              <h2 className="font-display text-2xl font-semibold">{fr ? "Leçons en préparation" : "Lessons in preparation"}</h2>
              <p className="mt-2 text-ink-2">
                {fr
                  ? "Le vocabulaire complet de ce niveau est déjà disponible, avec révisions espacées. Les leçons guidées arrivent."
                  : "The complete vocabulary for this level is already available, with spaced review. Guided lessons are coming."}
              </p>
              <Link href={href(locale, `/vocabulary/${lv}`)} className="btn btn-primary mt-6">
                {fr ? "Voir le vocabulaire" : "Browse vocabulary"} <Icon name="arrow" size={16} />
              </Link>
            </div>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h3 className="font-semibold">{fr ? "Référentiel officiel" : "Official syllabus"}</h3>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {[
                [fr ? "Mots" : "Words", facts.words],
                [fr ? "Caractères" : "Characters", facts.characters],
                [fr ? "Syllabes" : "Syllables", facts.syllables],
                [fr ? "Grammaire" : "Grammar", facts.grammar],
              ].map(([k, v]) => {
                const c = v as { new: number; total: number };
                return (
                  <div key={k as string} className="rounded-xl bg-paper-2 p-3">
                    <dt className="text-xs text-muted">{k as string}</dt>
                    <dd className="font-display text-xl font-semibold">+{c.new.toLocaleString()}</dd>
                    <dd className="text-xs text-muted">
                      {fr ? "cumul" : "total"} {c.total.toLocaleString()}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <div className="mt-5 grid gap-2">
              <Link href={href(locale, `/vocabulary/${lv}`)} className="btn btn-ghost !justify-between">
                {getVocab(lv).length.toLocaleString()} {t.common.words} <Icon name="arrow" size={16} />
              </Link>
              <Link href={href(locale, `/grammar?level=${lv}`)} className="btn btn-ghost !justify-between">
                {course?.grammar.length ?? 0} {fr ? "fiches de grammaire" : "grammar guides"} <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">
              {chars.length} {t.common.characters}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1 font-han text-xl">
              {chars.slice(0, 60).map((c) => (
                <Link key={c} href={href(locale, `/practice/writing?c=${encodeURIComponent(c)}`)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-seal hover:text-white">
                  {c}
                </Link>
              ))}
              {chars.length > 60 && <span className="self-center px-2 text-sm text-muted">+{chars.length - 60}</span>}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
