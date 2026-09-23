"use client";
import { useEffect, useMemo, useState } from "react";
import type { Exercise, Locale } from "@/content/types";
import { l } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { speak } from "@/lib/tts";
import { getState } from "@/lib/store";
import Speak from "../Speak";
import { Pinyin } from "../Zh";
import Icon from "../Icon";

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface ExerciseResult {
  correct: boolean;
}

/**
 * Renders any Exercise. Calls onAnswered once the learner commits an answer, and onNext when
 * they continue. Stateless across exercises — parent keys it by index.
 */
export default function ExerciseCard({
  ex,
  locale,
  seed,
  onAnswered,
  onNext,
}: {
  ex: Exercise;
  locale: Locale;
  seed: number;
  onAnswered: (r: ExerciseResult) => void;
  onNext: () => void;
}) {
  const t = getUI(locale).common;
  const [status, setStatus] = useState<"idle" | "right" | "wrong">("idle");
  const commit = (correct: boolean) => {
    if (status !== "idle") return;
    setStatus(correct ? "right" : "wrong");
    onAnswered({ correct });
  };

  let body: React.ReactNode = null;
  let explain: string | undefined;
  let solution: React.ReactNode = null;

  switch (ex.type) {
    case "choice":
      explain = l(ex.explain, locale);
      body = <Choice ex={ex} locale={locale} status={status} onPick={(i) => commit(i === ex.answer)} />;
      break;
    case "fill":
      explain = l(ex.explain, locale) || l(ex.tr, locale);
      body = <Fill ex={ex} locale={locale} status={status} onPick={(i) => commit(i === ex.answer)} />;
      break;
    case "listen":
      explain = l(ex.tr, locale);
      solution = <span className="font-han">{ex.zh}</span>;
      body = <Listen ex={ex} status={status} onPick={(i) => commit(i === ex.answer)} />;
      break;
    case "order":
      explain = l(ex.tr, locale);
      solution = <span className="font-han">{ex.tokens.join("")}</span>;
      body = <Order ex={ex} locale={locale} seed={seed} status={status} onDone={commit} />;
      break;
    case "match":
      body = <Match ex={ex} locale={locale} seed={seed} status={status} onDone={commit} />;
      break;
  }

  const title =
    ex.type === "listen"
      ? locale === "fr"
        ? "Écoute et choisis ce que tu entends"
        : "Listen and pick what you hear"
      : l(ex.prompt, locale);

  return (
    <div className="pop">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">{exerciseLabel(ex.type, locale)}</p>
      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{title}</h3>
      <div className="mt-6">{body}</div>
      {status !== "idle" && (
        <div
          className={`pop mt-6 flex flex-col gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between ${
            status === "right" ? "bg-jade/10" : "bg-seal/10"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${status === "right" ? "bg-jade" : "bg-seal"}`}
            >
              <Icon name={status === "right" ? "check" : "x"} size={18} />
            </span>
            <div>
              <p className={`font-semibold ${status === "right" ? "text-jade" : "text-seal"}`}>
                {status === "right" ? t.correct : t.incorrect}
              </p>
              {solution && status === "wrong" && (
                <p className="text-sm">
                  {t.answer} : {solution}
                </p>
              )}
              {explain && <p className="mt-0.5 text-sm text-ink-2">{explain}</p>}
            </div>
          </div>
          <button autoFocus className="btn btn-ink shrink-0" onClick={onNext}>
            {t.continue} <Icon name="arrow" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function exerciseLabel(type: Exercise["type"], locale: Locale) {
  const fr = { choice: "Choix multiple", fill: "Complète la phrase", listen: "Compréhension orale", order: "Remets dans l’ordre", match: "Associe" };
  const en = { choice: "Multiple choice", fill: "Fill the blank", listen: "Listening", order: "Word order", match: "Match" };
  return (locale === "fr" ? fr : en)[type];
}

function optionClass(i: number, answer: number, picked: number | null, status: string) {
  if (status === "idle") return "hover:border-ink-2 hover:-translate-y-0.5";
  if (i === answer) return "border-jade bg-jade/10";
  if (i === picked) return "border-seal bg-seal/10 shake";
  return "opacity-40";
}

function Choice({
  ex,
  locale,
  status,
  onPick,
}: {
  ex: Extract<Exercise, { type: "choice" }>;
  locale: Locale;
  status: string;
  onPick: (i: number) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const isZh = ex.options.every((o) => typeof o === "string" && /\p{Script=Han}/u.test(o));
  return (
    <div>
      {ex.zh && (
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-paper-2 p-4">
          <Speak text={ex.zh} source="exercise" />
          <div>
            <p className="font-han text-2xl sm:text-3xl">{ex.zh}</p>
            {ex.pinyin && <Pinyin text={ex.pinyin} className="text-sm" />}
          </div>
        </div>
      )}
      <div className={`grid gap-2.5 ${isZh ? "grid-cols-2" : ""}`}>
        {ex.options.map((o, i) => (
          <button
            key={i}
            disabled={status !== "idle"}
            onClick={() => {
              setPicked(i);
              onPick(i);
              if (isZh && typeof o === "string") speak(o, getState().settings.ttsRate);
            }}
            className={`rounded-2xl border border-line bg-card px-4 py-3.5 text-left font-medium transition ${
              isZh ? "text-center font-han text-2xl" : ""
            } ${optionClass(i, ex.answer, picked, status)}`}
          >
            {typeof o === "string" ? o : l(o, locale)}
          </button>
        ))}
      </div>
    </div>
  );
}

function Fill({
  ex,
  locale,
  status,
  onPick,
}: {
  ex: Extract<Exercise, { type: "fill" }>;
  locale: Locale;
  status: string;
  onPick: (i: number) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const shown = picked === null ? null : ex.options[status === "wrong" ? ex.answer : picked];
  return (
    <div>
      <div className="rounded-2xl bg-paper-2 p-5 text-center">
        <p className="font-han text-2xl leading-loose sm:text-3xl">
          {ex.before}
          <span
            className={`mx-1 inline-block min-w-16 border-b-2 px-2 ${
              shown ? (status === "right" ? "border-jade text-jade" : "border-seal text-seal") : "border-ink-2"
            }`}
          >
            {shown ?? " "}
          </span>
          {ex.after}
        </p>
        <p className="mt-2 text-sm text-muted">{l(ex.tr, locale)}</p>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2.5">
        {ex.options.map((o, i) => (
          <button
            key={i}
            disabled={status !== "idle"}
            onClick={() => {
              setPicked(i);
              onPick(i);
              if (i === ex.answer) speak(ex.before + o + ex.after, getState().settings.ttsRate);
            }}
            className={`min-w-20 rounded-2xl border border-line bg-card px-5 py-3 font-han text-xl transition ${optionClass(i, ex.answer, picked, status)}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Listen({ ex, status, onPick }: { ex: Extract<Exercise, { type: "listen" }>; status: string; onPick: (i: number) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  useEffect(() => {
    const id = setTimeout(() => speak(ex.zh, getState().settings.ttsRate), 350);
    return () => clearTimeout(id);
  }, [ex.zh]);
  return (
    <div>
      <div className="flex justify-center gap-3">
        <button
          className="grid h-24 w-24 place-items-center rounded-full bg-seal text-white shadow-[0_12px_30px_-10px_var(--seal)] transition hover:scale-105"
          onClick={() => speak(ex.zh, getState().settings.ttsRate)}
          aria-label="Play"
        >
          <Icon name="volume" size={36} />
        </button>
        <button
          className="grid h-12 w-12 self-end place-items-center rounded-full border border-line bg-card text-xs font-semibold"
          onClick={() => speak(ex.zh, 0.55)}
          aria-label="Slow"
        >
          0.5×
        </button>
      </div>
      <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
        {ex.options.map((o, i) => (
          <button
            key={i}
            disabled={status !== "idle"}
            onClick={() => {
              setPicked(i);
              onPick(i);
            }}
            className={`rounded-2xl border border-line bg-card px-4 py-3.5 font-han text-xl transition ${optionClass(i, ex.answer, picked, status)}`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Order({
  ex,
  locale,
  seed,
  status,
  onDone,
}: {
  ex: Extract<Exercise, { type: "order" }>;
  locale: Locale;
  seed: number;
  status: string;
  onDone: (correct: boolean) => void;
}) {
  const pool = useMemo(() => {
    let s = shuffle(
      ex.tokens.map((tok, i) => ({ tok, i })),
      seed + 7,
    );
    if (s.every((x, k) => x.i === k) && s.length > 1) s = [...s.slice(1), s[0]];
    return s;
  }, [ex.tokens, seed]);
  const [chosen, setChosen] = useState<number[]>([]);
  const answer = chosen.map((k) => pool[k].tok).join("");
  const target = ex.tokens.join("");
  return (
    <div>
      <p className="mb-4 rounded-2xl bg-paper-2 p-4 text-center text-ink-2">{l(ex.tr, locale)}</p>
      <div
        className={`flex min-h-[4.5rem] flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed p-3 ${
          status === "right" ? "border-jade" : status === "wrong" ? "border-seal" : "border-line"
        }`}
      >
        {chosen.map((k, pos) => (
          <button
            key={k}
            disabled={status !== "idle"}
            onClick={() => setChosen(chosen.filter((_, p) => p !== pos))}
            className="pop rounded-xl border border-line bg-card px-3.5 py-2 font-han text-xl shadow-soft"
          >
            {pool[k].tok}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {pool.map((x, k) =>
          chosen.includes(k) ? (
            <span key={k} className="rounded-xl border border-dashed border-line px-3.5 py-2 font-han text-xl text-transparent">
              {x.tok}
            </span>
          ) : (
            <button
              key={k}
              disabled={status !== "idle"}
              onClick={() => setChosen([...chosen, k])}
              className="rounded-xl border border-line bg-card px-3.5 py-2 font-han text-xl transition hover:-translate-y-0.5 hover:border-ink-2"
            >
              {x.tok}
            </button>
          ),
        )}
      </div>
      {status === "idle" && (
        <div className="mt-6 flex justify-end">
          <button
            className="btn btn-primary"
            disabled={chosen.length !== pool.length}
            onClick={() => {
              const ok = answer === target;
              if (ok) speak(target, getState().settings.ttsRate);
              onDone(ok);
            }}
          >
            {getUI(locale).common.check}
          </button>
        </div>
      )}
    </div>
  );
}

function Match({
  ex,
  locale,
  seed,
  status,
  onDone,
}: {
  ex: Extract<Exercise, { type: "match" }>;
  locale: Locale;
  seed: number;
  status: string;
  onDone: (correct: boolean) => void;
}) {
  const right = useMemo(() => shuffle(ex.pairs.map((_, i) => i), seed + 3), [ex.pairs, seed]);
  const [sel, setSel] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const pickRight = (pi: number) => {
    if (sel === null || status !== "idle") return;
    if (sel === pi) {
      const m = [...matched, pi];
      setMatched(m);
      setSel(null);
      if (m.length === ex.pairs.length) onDone(mistakes === 0);
    } else {
      setWrong(pi);
      setMistakes(mistakes + 1);
      setTimeout(() => setWrong(null), 400);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="grid gap-2.5">
        {ex.pairs.map((p, i) => (
          <button
            key={i}
            disabled={matched.includes(i)}
            onClick={() => {
              setSel(i);
              speak(p.zh, getState().settings.ttsRate);
            }}
            className={`rounded-2xl border px-3 py-3 text-center transition ${
              matched.includes(i)
                ? "border-jade/40 bg-jade/10 opacity-60"
                : sel === i
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-card hover:border-ink-2"
            }`}
          >
            <span className="block font-han text-xl">{p.zh}</span>
            <span className="block text-xs opacity-70">{p.pinyin}</span>
          </button>
        ))}
      </div>
      <div className="grid gap-2.5">
        {right.map((pi) => (
          <button
            key={pi}
            disabled={matched.includes(pi)}
            onClick={() => pickRight(pi)}
            className={`rounded-2xl border px-3 py-3 text-sm font-medium transition ${
              matched.includes(pi)
                ? "border-jade/40 bg-jade/10 opacity-60"
                : wrong === pi
                  ? "shake border-seal bg-seal/10"
                  : "border-line bg-card hover:border-ink-2"
            }`}
          >
            {l(ex.pairs[pi].tr, locale)}
          </button>
        ))}
      </div>
    </div>
  );
}
