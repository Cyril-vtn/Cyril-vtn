"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GrammarPoint, Lesson, Locale, VocabEntry } from "@/content/types";
import { l } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { track } from "@/lib/analytics";
import { completeLesson, setState, useStore } from "@/lib/store";
import { speak } from "@/lib/tts";
import { newCardFor } from "@/lib/srs";
import { href } from "@/lib/site";
import ExerciseCard from "./ExerciseCard";
import GrammarBody, { RichText } from "./GrammarBody";
import Speak from "../Speak";
import { Hanzi, Pinyin } from "../Zh";
import Icon from "../Icon";

type Step = "intro" | "dialogue" | "vocab" | "grammar" | "practice" | "done";
const STEPS: Step[] = ["intro", "dialogue", "vocab", "grammar", "practice", "done"];

export default function LessonPlayer({
  lesson,
  grammar,
  words,
  locale,
  nextHref,
}: {
  lesson: Lesson;
  grammar: GrammarPoint[];
  words: VocabEntry[];
  locale: Locale;
  nextHref?: string;
}) {
  const t = getUI(locale).common;
  const fr = locale === "fr";
  const [step, setStep] = useState<Step>("intro");
  const [exIdx, setExIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const startedAt = useRef(0);
  const showPinyin = useStore((s) => s.settings.showPinyin);
  const showTr = useStore((s) => s.settings.showTranslation);

  useEffect(() => {
    startedAt.current = Date.now();
    track("lesson_started", { lesson_id: lesson.id, level: lesson.level });
  }, [lesson.id, lesson.level]);

  const go = (s: Step) => {
    setStep(s);
    track("lesson_step_viewed", { lesson_id: lesson.id, level: lesson.level, step: s });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stepIndex = STEPS.indexOf(step);
  const progress =
    step === "practice"
      ? (4 + exIdx / Math.max(1, lesson.exercises.length)) / 5
      : step === "done"
        ? 1
        : stepIndex / 5;

  const score = results.length ? Math.round((100 * results.filter(Boolean).length) / results.length) : 0;

  const finish = () => {
    const xp = 10 + Math.round(score / 5);
    completeLesson(lesson.id, score, xp);
    // add lesson vocab to the review deck
    setState((s) => {
      const srs = { ...s.srs };
      for (const w of words) if (!srs[w.id]) srs[w.id] = newCardFor();
      return { ...s, srs };
    });
    track("lesson_completed", {
      lesson_id: lesson.id,
      level: lesson.level,
      score,
      duration_sec: Math.round((Date.now() - startedAt.current) / 1000),
      exercises: results.length,
    });
    go("done");
  };

  const labels: Record<Step, string> = fr
    ? { intro: "Objectifs", dialogue: "Dialogue", vocab: "Vocabulaire", grammar: "Grammaire", practice: "Exercices", done: "Bilan" }
    : { intro: "Goals", dialogue: "Dialogue", vocab: "Vocabulary", grammar: "Grammar", practice: "Practice", done: "Summary" };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
      {/* progress */}
      <div className="sticky top-16 z-30 -mx-4 bg-paper/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href={href(locale, `/learn/${lesson.level}`)} className="text-muted hover:text-ink" aria-label={t.back}>
            <Icon name="x" />
          </Link>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-paper-2">
            <div className="h-full rounded-full bg-seal transition-all duration-500" style={{ width: `${progress * 100}%` }} />
          </div>
          <Toggles locale={locale} />
        </div>
        <div className="no-scrollbar mt-2 flex gap-1 overflow-x-auto">
          {STEPS.slice(0, 5).map((s, i) => (
            <button
              key={s}
              onClick={() => i <= 3 && go(s)}
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                step === s ? "bg-ink text-paper" : i < stepIndex ? "text-ink-2" : "text-muted"
              }`}
            >
              {labels[s]}
            </button>
          ))}
        </div>
      </div>

      {step === "intro" && (
        <section className="reveal pt-8">
          <p className="text-sm font-semibold tracking-widest text-seal uppercase">
            HSK {lesson.level} · {t.lesson} {lesson.order}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{l(lesson.title, locale)}</h1>
          <p className="mt-3 text-lg text-ink-2">{l(lesson.subtitle, locale)}</p>
          <div className="card mt-8 p-6">
            <h2 className="font-semibold">{fr ? "À la fin de cette leçon, tu sauras :" : "By the end of this lesson you will be able to:"}</h2>
            <ul className="mt-4 space-y-3">
              {lesson.goals.map((g, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-jade/15 text-jade">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{l(g, locale)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
              <span className="chip">{lesson.vocab.length} {t.words}</span>
              <span className="chip">{lesson.grammar.length} {t.grammarPoints}</span>
              <span className="chip">{lesson.exercises.length} {fr ? "exercices" : "exercises"}</span>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="btn btn-primary !px-6 !py-3.5" onClick={() => go("dialogue")}>
              {t.start} <Icon name="arrow" size={18} />
            </button>
          </div>
        </section>
      )}

      {step === "dialogue" && (
        <section className="reveal pt-8">
          <h2 className="font-display text-3xl font-semibold">{labels.dialogue}</h2>
          <p className="mt-2 text-ink-2">{l(lesson.dialogue.context, locale)}</p>
          <div className="mt-4">
            <button
              className="btn btn-ghost !py-2 !text-sm"
              onClick={async () => {
                track("audio_played", { source: "dialogue_all", lesson_id: lesson.id });
                for (const line of lesson.dialogue.lines) await speak(line.zh, 0.85);
              }}
            >
              <Icon name="play" size={14} fill /> {fr ? "Écouter tout le dialogue" : "Play the whole dialogue"}
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {lesson.dialogue.lines.map((line, i) => {
              const speakers = [...new Set(lesson.dialogue.lines.map((x) => x.speaker))];
              const right = speakers.indexOf(line.speaker) % 2 === 1;
              return (
                <div key={i} className={`flex gap-3 ${right ? "flex-row-reverse text-right" : ""}`}>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-han text-sm font-semibold text-white ${
                      right ? "bg-sky" : "bg-seal"
                    }`}
                  >
                    {line.speaker.slice(0, 2)}
                  </span>
                  <div className={`card max-w-[85%] p-4 ${right ? "rounded-tr-md" : "rounded-tl-md"}`}>
                    <div className={`flex items-start gap-3 ${right ? "flex-row-reverse" : ""}`}>
                      <div>
                        {showPinyin && <Pinyin text={line.pinyin} className="block text-sm" />}
                        <p className="font-han text-xl leading-relaxed sm:text-2xl">{line.zh}</p>
                        {showTr && <p className="mt-1 text-sm text-muted">{l(line.tr, locale)}</p>}
                      </div>
                      <Speak text={line.zh} source="dialogue_line" size="sm" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {lesson.culture && (
            <aside className="mt-8 overflow-hidden rounded-2xl border border-gold/30 bg-gold/5 p-5">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase">
                <span className="font-han text-base">文化</span> {fr ? "Culture" : "Culture"}
              </p>
              <h3 className="mt-2 font-semibold">{l(lesson.culture.title, locale)}</h3>
              <RichText text={l(lesson.culture.body, locale)} className="mt-1 text-sm text-ink-2" />
            </aside>
          )}
          <NextBar onNext={() => go("vocab")} label={t.next} />
        </section>
      )}

      {step === "vocab" && (
        <section className="reveal pt-8">
          <h2 className="font-display text-3xl font-semibold">{labels.vocab}</h2>
          <p className="mt-2 text-ink-2">
            {fr ? "Clique sur un mot pour l’écouter. Ils seront ajoutés à tes révisions." : "Tap a word to hear it. They’ll be added to your review deck."}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {words.map((w) => (
              <button
                key={w.id}
                onClick={() => {
                  speak(w.hanzi);
                  track("audio_played", { source: "lesson_vocab" });
                }}
                className="card flex items-center gap-4 p-4 text-left transition hover:-translate-y-0.5"
              >
                <Hanzi hanzi={w.hanzi} pinyin={w.pinyin} className="text-3xl" />
                <div className="min-w-0">
                  <Pinyin text={w.pinyin} className="text-sm font-medium" />
                  <p className="truncate text-sm text-ink-2">{(fr ? w.fr : w.en) || w.en}</p>
                </div>
                <span className="ml-auto chip shrink-0 !text-[10px]">HSK {w.level === 7 ? "7–9" : w.level}</span>
              </button>
            ))}
          </div>
          <NextBar onNext={() => go(grammar.length ? "grammar" : "practice")} label={t.next} />
        </section>
      )}

      {step === "grammar" && (
        <section className="reveal pt-8">
          <h2 className="font-display text-3xl font-semibold">{labels.grammar}</h2>
          <div className="mt-6 space-y-6">
            {grammar.map((g) => (
              <article key={g.id} className="card p-6">
                <h3 className="font-display text-2xl font-semibold">{l(g.title, locale)}</h3>
                <GrammarBody g={g} locale={locale} />
              </article>
            ))}
          </div>
          <NextBar onNext={() => go("practice")} label={fr ? "Passer aux exercices" : "Start practice"} />
        </section>
      )}

      {step === "practice" && lesson.exercises[exIdx] && (
        <section className="pt-8">
          <p className="mb-4 text-sm text-muted">
            {exIdx + 1} / {lesson.exercises.length}
          </p>
          <div className="card p-6 sm:p-8">
            <ExerciseCard
              key={exIdx}
              ex={lesson.exercises[exIdx]}
              locale={locale}
              seed={exIdx + lesson.order * 31}
              onAnswered={({ correct }) => {
                setResults((r) => [...r, correct]);
                track("exercise_answered", {
                  lesson_id: lesson.id,
                  level: lesson.level,
                  type: lesson.exercises[exIdx].type,
                  index: exIdx,
                  correct,
                });
              }}
              onNext={() => (exIdx + 1 < lesson.exercises.length ? setExIdx(exIdx + 1) : finish())}
            />
          </div>
        </section>
      )}

      {step === "done" && (
        <Done lesson={lesson} locale={locale} score={score} results={results} nextHref={nextHref} />
      )}
    </div>
  );
}

function NextBar({ onNext, label }: { onNext: () => void; label: string }) {
  return (
    <div className="mt-10 flex justify-end">
      <button className="btn btn-primary !px-6 !py-3.5" onClick={onNext}>
        {label} <Icon name="arrow" size={18} />
      </button>
    </div>
  );
}

function Toggles({ locale }: { locale: Locale }) {
  const t = getUI(locale).common;
  const s = useStore((x) => x.settings);
  const toggle = (k: "showPinyin" | "showTranslation") =>
    setState((st) => ({ ...st, settings: { ...st.settings, [k]: !st.settings[k] } }));
  return (
    <div className="flex gap-1">
      <button onClick={() => toggle("showPinyin")} className={`chip ${s.showPinyin ? "!bg-ink !text-paper" : ""}`}>
        {t.showPinyin}
      </button>
      <button onClick={() => toggle("showTranslation")} className={`chip ${s.showTranslation ? "!bg-ink !text-paper" : ""}`}>
        <Icon name="eye" size={12} />
      </button>
    </div>
  );
}

function Done({
  lesson,
  locale,
  score,
  results,
  nextHref,
}: {
  lesson: Lesson;
  locale: Locale;
  score: number;
  results: boolean[];
  nextHref?: string;
}) {
  const fr = locale === "fr";
  const xp = 10 + Math.round(score / 5);
  const stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;
  const msg = useMemo(
    () =>
      score >= 90
        ? fr
          ? "Excellent ! 太棒了！"
          : "Excellent! 太棒了！"
        : score >= 70
          ? fr
            ? "Bien joué ! 很好！"
            : "Well done! 很好！"
          : fr
            ? "Continue, ça rentre ! 加油！"
            : "Keep going! 加油！",
    [score, fr],
  );
  return (
    <section className="pop pt-12 text-center">
      <div className="mx-auto flex justify-center gap-2">
        {[1, 2, 3].map((i) => (
          <span key={i} className={i <= stars ? "text-gold" : "text-line"} style={{ animationDelay: `${i * 0.15}s` }}>
            <Icon name="star" size={48} fill className="pop" />
          </span>
        ))}
      </div>
      <h2 className="mt-6 font-display text-4xl font-semibold">{msg}</h2>
      <p className="mt-3 text-ink-2">
        {fr ? `Tu as terminé « ${l(lesson.title, locale)} »` : `You finished “${l(lesson.title, locale)}”`}
      </p>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-3">
        <Stat n={`${score}%`} label={fr ? "réussite" : "accuracy"} />
        <Stat n={`+${xp}`} label="XP" />
        <Stat n={`${results.filter(Boolean).length}/${results.length}`} label={fr ? "bonnes rép." : "correct"} />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href={href(locale, "/review")} className="btn btn-ghost">
          <Icon name="cards" size={16} /> {fr ? "Réviser les mots" : "Review the words"}
        </Link>
        {nextHref ? (
          <Link href={nextHref} className="btn btn-primary">
            {fr ? "Leçon suivante" : "Next lesson"} <Icon name="arrow" size={16} />
          </Link>
        ) : (
          <Link href={href(locale, `/learn/${lesson.level}`)} className="btn btn-primary">
            {fr ? "Retour au niveau" : "Back to level"} <Icon name="arrow" size={16} />
          </Link>
        )}
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="card p-4">
      <div className="font-display text-2xl font-semibold">{n}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}
