"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import chars from "@/data/chars/hsk-chars.json";
import { loadLevel } from "@/lib/vocabClient";
import { track } from "@/lib/analytics";
import { addXp } from "@/lib/store";
import { levelLabel } from "@/lib/site";
import StrokeWriter, { type StrokeWriterHandle } from "../StrokeWriter";
import Speak from "../Speak";
import { Hanzi, Pinyin } from "../Zh";
import Icon from "../Icon";

const CHARS = chars as Record<string, string[]>;

export default function WritingPractice({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const sp = useSearchParams();
  const initialChar = sp.get("c") ?? "";
  const initialLevel = Number(Object.keys(CHARS).find((k) => CHARS[k].includes(initialChar)) ?? 1);
  const [level, setLevel] = useState(initialLevel);
  const [char, setChar] = useState(initialChar || CHARS["1"][0]);
  const [mode, setMode] = useState<"animate" | "quiz">("animate");
  const [result, setResult] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [words, setWords] = useState<VocabEntry[]>([]);
  const writer = useRef<StrokeWriterHandle>(null);

  useEffect(() => {
    Promise.all([1, 2, 3, 4, 5, 6, 7].filter((l) => l <= Math.max(level, 3)).map(loadLevel)).then((lists) => setWords(lists.flat()));
  }, [level]);

  const examples = useMemo(() => {
    const single = words.find((w) => w.hanzi === char);
    const multi = words.filter((w) => w.hanzi.includes(char) && w.hanzi !== char).slice(0, 5);
    return { single, multi };
  }, [words, char]);

  const pick = (c: string) => {
    setChar(c);
    setResult(null);
    setMistakes(0);
    setMode("animate");
  };
  const list = CHARS[String(level)] ?? [];
  const idx = list.indexOf(char);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
      <div className="card flex flex-col items-center p-6 sm:p-10">
        <div className="flex w-full items-center justify-between">
          <button className="btn btn-ghost !p-2" disabled={idx <= 0} onClick={() => pick(list[idx - 1])} aria-label="prev">
            <Icon name="back" />
          </button>
          <div className="flex rounded-full border border-line p-1 text-sm">
            <button onClick={() => { setMode("animate"); setResult(null); }} className={`rounded-full px-4 py-1.5 ${mode === "animate" ? "bg-ink text-paper" : ""}`}>
              {fr ? "Regarder" : "Watch"}
            </button>
            <button onClick={() => { setMode("quiz"); setResult(null); setMistakes(0); }} className={`rounded-full px-4 py-1.5 ${mode === "quiz" ? "bg-ink text-paper" : ""}`}>
              {fr ? "Écrire" : "Write"}
            </button>
          </div>
          <button className="btn btn-ghost !p-2" disabled={idx < 0 || idx >= list.length - 1} onClick={() => pick(list[idx + 1])} aria-label="next">
            <Icon name="arrow" />
          </button>
        </div>
        <div className="mt-8">
          <StrokeWriter
            ref={writer}
            key={char + mode}
            char={char}
            size={300}
            mode={mode}
            showOutline={mode === "animate" || mistakes > 2}
            onMistake={() => setMistakes((m) => m + 1)}
            onQuizComplete={(m) => {
              setResult(m);
              addXp(m === 0 ? 3 : 1);
              track("writing_practice_completed", { char_level: level, mistakes: m });
            }}
          />
        </div>
        <div className="mt-6 flex gap-2">
          {mode === "animate" ? (
            <button className="btn btn-ghost" onClick={() => writer.current?.animate()}>
              <Icon name="refresh" size={16} /> {fr ? "Rejouer" : "Replay"}
            </button>
          ) : (
            <button className="btn btn-ghost" onClick={() => writer.current?.reveal()}>
              <Icon name="eye" size={16} /> {fr ? "Voir le caractère" : "Show character"}
            </button>
          )}
        </div>
        {result !== null && (
          <p className={`pop mt-4 font-semibold ${result === 0 ? "text-jade" : "text-gold"}`}>
            {result === 0 ? (fr ? "Sans faute ! 写得好！" : "Flawless! 写得好！") : fr ? `Terminé avec ${result} erreur(s).` : `Done with ${result} mistake(s).`}
          </p>
        )}
        {mode === "quiz" && result === null && (
          <p className="mt-4 text-sm text-muted">{fr ? "Trace les traits dans l’ordre. Un indice apparaît après 2 erreurs." : "Draw the strokes in order. A hint appears after 2 misses."}</p>
        )}
      </div>

      <aside className="space-y-5">
        <div className="card p-6">
          <div className="flex items-center gap-4">
            <span className="font-han text-6xl">{char}</span>
            <div>
              {examples.single ? (
                <>
                  <Pinyin text={examples.single.pinyin} className="font-display text-2xl font-semibold" />
                  <p className="text-sm text-ink-2">{(fr ? examples.single.fr : examples.single.en) || examples.single.en}</p>
                </>
              ) : (
                <p className="text-sm text-muted">HSK {levelLabel(level)}</p>
              )}
            </div>
            <Speak text={char} source="writing" className="ml-auto" />
          </div>
          {examples.multi.length > 0 && (
            <>
              <h3 className="mt-6 text-xs font-semibold tracking-widest text-muted uppercase">{fr ? "Dans les mots" : "In words"}</h3>
              <ul className="mt-2 divide-y divide-line">
                {examples.multi.map((w) => (
                  <li key={w.id} className="flex items-center gap-3 py-2">
                    <Hanzi hanzi={w.hanzi} pinyin={w.pinyin} className="text-xl" />
                    <span className="truncate text-sm text-ink-2">{(fr ? w.fr : w.en) || w.en}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="card p-6">
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(CHARS).map((k) => (
              <button key={k} onClick={() => { setLevel(Number(k)); pick(CHARS[k][0]); }} className={`chip ${String(level) === k ? "!bg-ink !text-paper" : ""}`}>
                HSK {levelLabel(Number(k))}
              </button>
            ))}
          </div>
          <div className="mt-4 grid max-h-80 grid-cols-8 gap-1 overflow-y-auto font-han text-lg">
            {list.map((c) => (
              <button key={c} onClick={() => pick(c)} className={`grid aspect-square place-items-center rounded-lg ${c === char ? "bg-seal text-white" : "hover:bg-paper-2"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
