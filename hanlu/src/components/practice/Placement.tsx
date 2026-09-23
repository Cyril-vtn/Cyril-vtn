"use client";
import Link from "next/link";
import { useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import { loadLevel } from "@/lib/vocabClient";
import { track } from "@/lib/analytics";
import { setState } from "@/lib/store";
import { href, levelLabel } from "@/lib/site";
import Icon from "../Icon";

/**
 * Adaptive vocabulary placement: 6 recognition questions per level, climbing from HSK 1.
 * A level is "passed" at ≥ 5/6; the test stops after the first failed level.
 * Vocabulary size is the strongest single predictor of HSK level, so this gives a fast estimate.
 */
const PER_LEVEL = 6;
const PASS = 5;

interface Q {
  level: number;
  word: VocabEntry;
  options: string[];
  answer: number;
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export default function Placement({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const gloss = (w: VocabEntry) => ((fr ? w.fr : w.en) || w.en).split(";")[0].trim();
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [qs, setQs] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [levelScore, setLevelScore] = useState(0);
  const [passed, setPassed] = useState(0);

  const buildLevel = async (level: number): Promise<Q[]> => {
    const pool = (await loadLevel(level)).filter((w) => w.en && [...w.hanzi].length <= 4);
    const picks = shuffle(pool).slice(0, PER_LEVEL);
    return picks.map((word) => {
      const distract = shuffle(pool.filter((w) => w.id !== word.id && gloss(w) !== gloss(word))).slice(0, 3);
      const options = shuffle([word, ...distract]);
      return { level, word, options: [...options.map(gloss), fr ? "Je ne sais pas" : "I don't know"], answer: options.indexOf(word) };
    });
  };

  const start = async () => {
    setQs(await buildLevel(1));
    setI(0);
    setLevelScore(0);
    setPassed(0);
    setPhase("test");
    track("placement_started");
  };

  const finish = (level: number) => {
    setPassed(level);
    setPhase("result");
    setState((s) => ({ ...s, placement: { level, at: new Date().toISOString() } }));
    track("placement_completed", { level });
  };

  const answer = async (k: number) => {
    setPicked(k);
    const q = qs[i];
    const score = levelScore + (k === q.answer ? 1 : 0);
    await new Promise((r) => setTimeout(r, 550));
    setPicked(null);
    const lastOfLevel = (i + 1) % PER_LEVEL === 0;
    if (!lastOfLevel) {
      setLevelScore(score);
      setI(i + 1);
      return;
    }
    if (score < PASS) return finish(q.level - 1);
    if (q.level === 7) return finish(7);
    const more = await buildLevel(q.level + 1);
    setQs([...qs, ...more]);
    setLevelScore(0);
    setI(i + 1);
  };

  if (phase === "intro")
    return (
      <div className="card mx-auto max-w-xl p-8 text-center">
        <span className="font-han text-7xl text-seal">测</span>
        <h2 className="mt-4 font-display text-3xl font-semibold">{fr ? "Où en es-tu ?" : "Where are you at?"}</h2>
        <p className="mt-3 text-ink-2">
          {fr
            ? "Des mots de difficulté croissante, du HSK 1 au HSK 9. Réponds honnêtement : « Je ne sais pas » vaut mieux qu’un coup de chance."
            : "Words of increasing difficulty, from HSK 1 to HSK 9. Be honest: “I don't know” beats a lucky guess."}
        </p>
        <p className="mt-2 text-sm text-muted">{fr ? "≈ 3 à 6 minutes · sans inscription" : "≈ 3–6 minutes · no sign-up"}</p>
        <button className="btn btn-primary mt-6 !px-8 !py-3.5" onClick={start}>
          {fr ? "Commencer le test" : "Start the test"} <Icon name="arrow" size={18} />
        </button>
      </div>
    );

  if (phase === "result") {
    const next = Math.min(7, passed + 1);
    return (
      <div className="pop card mx-auto max-w-xl p-8 text-center">
        <p className="text-sm font-semibold tracking-widest text-muted uppercase">{fr ? "Ton niveau estimé" : "Your estimated level"}</p>
        <p className="mt-3 font-display text-7xl font-semibold text-seal">{passed ? `HSK ${levelLabel(passed)}` : fr ? "Débutant" : "Beginner"}</p>
        <p className="mt-4 text-ink-2">
          {passed
            ? fr
              ? `Tu maîtrises l’essentiel du vocabulaire jusqu’au HSK ${levelLabel(passed)}. On te conseille d’attaquer le HSK ${levelLabel(next)}.`
              : `You know most of the vocabulary up to HSK ${levelLabel(passed)}. We suggest starting HSK ${levelLabel(next)}.`
            : fr
              ? "Parfait pour démarrer du bon pied avec le HSK 1."
              : "Perfect time to start on the right foot with HSK 1."}
        </p>
        <p className="mt-2 text-xs text-muted">
          {fr ? "Estimation basée sur le vocabulaire ; l’examen évalue aussi l’oral, l’écrit et la grammaire." : "Vocabulary-based estimate; the exam also tests speaking, writing and grammar."}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="btn btn-ghost" onClick={start}>
            <Icon name="refresh" size={16} /> {fr ? "Refaire" : "Retake"}
          </button>
          <Link href={href(locale, `/learn/${next}`)} className="btn btn-primary">
            HSK {levelLabel(passed ? next : 1)} <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const q = qs[i];
  if (!q) return null;
  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>HSK {levelLabel(q.level)}</span>
        <span>
          {(i % PER_LEVEL) + 1}/{PER_LEVEL}
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        {[1, 2, 3, 4, 5, 6, 7].map((lv) => (
          <div key={lv} className={`h-1.5 flex-1 rounded-full ${lv < q.level ? "bg-jade" : lv === q.level ? "bg-seal" : "bg-paper-2"}`} />
        ))}
      </div>
      <div className="card pop mt-6 p-8 text-center" key={i}>
        <p className="font-han text-6xl">{q.word.hanzi}</p>
        <div className="mt-8 grid gap-2">
          {q.options.map((o, k) => (
            <button
              key={k}
              disabled={picked !== null}
              onClick={() => answer(k)}
              className={`rounded-2xl border border-line px-4 py-3 text-left transition hover:border-ink-2 ${
                k === q.options.length - 1 ? "text-muted" : "bg-card"
              } ${picked === k ? "!border-ink bg-ink text-paper" : ""}`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
