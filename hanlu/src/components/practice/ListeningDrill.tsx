"use client";
import { useEffect, useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import { loadLevel } from "@/lib/vocabClient";
import { speak } from "@/lib/tts";
import { track } from "@/lib/analytics";
import { addXp } from "@/lib/store";
import { levelLabel } from "@/lib/site";
import { Pinyin } from "../Zh";
import Icon from "../Icon";

function sample<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export default function ListeningDrill({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const [level, setLevel] = useState(1);
  const [pool, setPool] = useState<VocabEntry[]>([]);
  const [q, setQ] = useState<{ target: VocabEntry; options: VocabEntry[] } | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ ok: 0, total: 0 });

  const ask = (list: VocabEntry[]) => {
    if (list.length < 4) return;
    const [target, ...rest] = sample(list, 12);
    // distractors: prefer same length for difficulty
    const same = rest.filter((w) => [...w.hanzi].length === [...target.hanzi].length && w.hanzi !== target.hanzi);
    const distract = (same.length >= 3 ? same : rest).slice(0, 3);
    setQ({ target, options: sample([target, ...distract], 4) });
    setPicked(null);
    setTimeout(() => speak(target.hanzi, 0.8), 250);
  };
  const next = () => ask(pool);

  useEffect(() => {
    let alive = true;
    loadLevel(level).then((list) => {
      if (!alive) return;
      setPool(list);
      ask(list);
    });
    return () => {
      alive = false;
    };
     
  }, [level]);

  if (!q) return <div className="h-96" />;
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {[1, 2, 3, 4, 5, 6, 7].map((lv) => (
            <button key={lv} onClick={() => setLevel(lv)} className={`chip ${level === lv ? "!bg-ink !text-paper" : ""}`}>
              HSK {levelLabel(lv)}
            </button>
          ))}
        </div>
        <span className="chip">
          {score.ok}/{score.total}
        </span>
      </div>
      <div className="card mt-6 p-8 text-center">
        <button onClick={() => speak(q.target.hanzi, 0.8)} className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-seal text-white shadow-[0_12px_30px_-10px_var(--seal)] transition hover:scale-105" aria-label="play">
          <Icon name="volume" size={36} />
        </button>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {q.options.map((o) => {
            const state = picked ? (o.id === q.target.id ? "border-jade bg-jade/10" : o.id === picked ? "border-seal bg-seal/10 shake" : "opacity-40") : "hover:border-ink-2";
            return (
              <button
                key={o.id}
                disabled={!!picked}
                onClick={() => {
                  setPicked(o.id);
                  const good = o.id === q.target.id;
                  setScore((s) => ({ ok: s.ok + (good ? 1 : 0), total: s.total + 1 }));
                  if (good) addXp(1);
                  track("exercise_answered", { type: "listen", context: "listening_drill", level, correct: good });
                }}
                className={`rounded-2xl border border-line bg-card p-4 transition ${state}`}
              >
                <span className="block font-han text-3xl">{o.hanzi}</span>
                {picked && (
                  <>
                    <Pinyin text={o.pinyin} className="mt-1 block text-sm" />
                    <span className="block truncate text-xs text-muted">{(fr ? o.fr : o.en) || o.en}</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
        {picked && (
          <button className="btn btn-ink pop mt-8 !px-8" onClick={next} autoFocus>
            {fr ? "Suivant" : "Next"} <Icon name="arrow" size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
