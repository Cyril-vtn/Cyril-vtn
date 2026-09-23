"use client";
import { useEffect, useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import { loadLevel } from "@/lib/vocabClient";
import { tonify } from "@/lib/pinyin";
import { speak } from "@/lib/tts";
import { track } from "@/lib/analytics";
import { addXp } from "@/lib/store";
import { Hanzi, Pinyin } from "../Zh";
import Icon from "../Icon";

const TONE_LABEL = ["", "ˉ", "ˊ", "ˇ", "ˋ", "·"];

export default function ToneTrainer({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [level, setLevel] = useState(1);
  const [pool, setPool] = useState<VocabEntry[]>([]);
  const [word, setWord] = useState<VocabEntry | null>(null);
  const [answer, setAnswer] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState({ ok: 0, total: 0, streak: 0 });

  const ask = (list: VocabEntry[]) => {
    if (!list.length) return;
    const w = list[Math.floor(Math.random() * list.length)];
    setWord(w);
    setAnswer([]);
    setChecked(false);
    setTimeout(() => speak(w.hanzi, 0.75), 200);
  };
  const next = () => ask(pool);

  useEffect(() => {
    let alive = true;
    loadLevel(level).then((list) => {
      if (!alive) return;
      const usable = list.filter((w) => {
        const syl = tonify(w.pinyin).filter((t) => t.isSyllable);
        return syl.length >= 1 && syl.length <= 3 && syl.length === [...w.hanzi].length;
      });
      setPool(usable);
      ask(usable);
    });
    return () => {
      alive = false;
    };
     
  }, [level]);

  if (!word) return <div className="h-96" />;
  const truth = tonify(word.pinyin)
    .filter((t) => t.isSyllable)
    .map((t) => t.tone);
  const ok = checked && truth.every((t, i) => t === answer[i]);

  const check = () => {
    const good = truth.every((t, i) => t === answer[i]);
    setChecked(true);
    setScore((s) => ({ ok: s.ok + (good ? 1 : 0), total: s.total + 1, streak: good ? s.streak + 1 : 0 }));
    if (good) addXp(1);
    track("tone_quiz_answered", { correct: good, level, syllables: truth.length });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((lv) => (
            <button key={lv} onClick={() => setLevel(lv)} className={`chip ${level === lv ? "!bg-ink !text-paper" : ""}`}>
              HSK {lv}
            </button>
          ))}
        </div>
        <div className="flex gap-2 text-sm">
          <span className="chip">
            {score.ok}/{score.total}
          </span>
          <span className="chip">
            <Icon name="flame" size={14} className="text-seal" fill /> {score.streak}
          </span>
        </div>
      </div>
      <div className="card mt-6 p-8 text-center">
        <button onClick={() => speak(word.hanzi, 0.75)} className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-seal text-white shadow-[0_12px_30px_-10px_var(--seal)] transition hover:scale-105" aria-label="play">
          <Icon name="volume" size={36} />
        </button>
        <div className="mt-4 flex justify-center gap-2">
          <button className="chip" onClick={() => speak(word.hanzi, 0.5)}>
            0.5×
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {truth.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="font-han text-5xl">{checked ? <Hanzi hanzi={[...word.hanzi][i]} pinyin={tonify(word.pinyin).filter((x) => x.isSyllable)[i].text} /> : "？"}</span>
              <div className="grid grid-cols-5 gap-1">
                {[1, 2, 3, 4, 5].map((tone) => {
                  const picked = answer[i] === tone;
                  const state = checked ? (tone === t ? "bg-jade text-white border-jade" : picked ? "bg-seal text-white border-seal" : "opacity-40") : picked ? "bg-ink text-paper border-ink" : "";
                  return (
                    <button
                      key={tone}
                      disabled={checked}
                      onClick={() => {
                        const a = [...answer];
                        a[i] = tone;
                        setAnswer(a);
                      }}
                      className={`h-10 w-10 rounded-xl border border-line text-lg font-bold transition ${state}`}
                      title={`${fr ? "Ton" : "Tone"} ${tone === 5 ? (fr ? "neutre" : "neutral") : tone}`}
                    >
                      <span className={checked ? "" : `t${tone}`}>{TONE_LABEL[tone]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {checked && (
          <div className="pop mt-8">
            <Pinyin text={word.pinyin} className="font-display text-3xl font-semibold" />
            <p className="mt-1 text-ink-2">{(fr ? word.fr : word.en) || word.en}</p>
            <p className={`mt-3 font-semibold ${ok ? "text-jade" : "text-seal"}`}>{ok ? (fr ? "Parfait !" : "Perfect!") : fr ? "Raté, réécoute bien la mélodie." : "Missed — listen to the melody again."}</p>
          </div>
        )}
        <div className="mt-8">
          {!checked ? (
            <button className="btn btn-primary !px-8" disabled={answer.filter(Boolean).length !== truth.length} onClick={check}>
              {fr ? "Vérifier" : "Check"}
            </button>
          ) : (
            <button className="btn btn-ink !px-8" onClick={next} autoFocus>
              {fr ? "Mot suivant" : "Next word"} <Icon name="arrow" size={16} />
            </button>
          )}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted">
        {fr ? "ˉ 1er ton · ˊ 2e · ˇ 3e · ˋ 4e · · neutre. Les changements de ton (sandhi) ne sont pas notés dans les dictionnaires." : "ˉ 1st tone · ˊ 2nd · ˇ 3rd · ˋ 4th · · neutral. Tone changes (sandhi) are not written in dictionaries."}
      </p>
    </div>
  );
}
