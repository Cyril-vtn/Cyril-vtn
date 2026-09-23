"use client";
import { useMemo, useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import { getUI } from "@/i18n/ui";
import { searchKey } from "@/lib/pinyin";
import { track } from "@/lib/analytics";
import { setState, useHydrated, useStore } from "@/lib/store";
import { newCardFor } from "@/lib/srs";
import { speak } from "@/lib/tts";
import { Hanzi, Pinyin } from "../Zh";
import Icon from "../Icon";

const PAGE = 120;

export default function VocabTable({ words, locale }: { words: VocabEntry[]; locale: Locale }) {
  const t = getUI(locale).common;
  const fr = locale === "fr";
  const [q, setQ] = useState("");
  const [pos, setPos] = useState<string>("");
  const [limit, setLimit] = useState(PAGE);
  const srs = useStore((s) => s.srs);
  const hydrated = useHydrated();

  const posList = useMemo(() => {
    const counts = new Map<string, number>();
    words.forEach((w) => w.pos?.forEach((p) => counts.set(p, (counts.get(p) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([p]) => p);
  }, [words]);

  const filtered = useMemo(() => {
    const k = searchKey(q);
    const raw = q.trim().toLowerCase();
    return words.filter((w) => {
      if (pos && !w.pos?.includes(pos)) return false;
      if (!raw) return true;
      return (
        w.hanzi.includes(q.trim()) ||
        searchKey(w.pinyin).startsWith(k) ||
        w.en.toLowerCase().includes(raw) ||
        (w.fr ?? "").toLowerCase().includes(raw)
      );
    });
  }, [words, q, pos]);

  const inDeck = hydrated ? words.filter((w) => srs[w.id]).length : 0;
  const addAll = () => {
    setState((s) => {
      const next = { ...s.srs };
      for (const w of filtered) if (!next[w.id]) next[w.id] = newCardFor();
      return { ...s, srs: next };
    });
    track("vocab_added_to_review", { count: filtered.length, scope: "bulk", level: words[0]?.level });
  };
  const toggle = (w: VocabEntry) =>
    setState((s) => {
      const next = { ...s.srs };
      if (next[w.id]) delete next[w.id];
      else {
        next[w.id] = newCardFor();
        track("vocab_added_to_review", { count: 1, scope: "single", level: w.level });
      }
      return { ...s, srs: next };
    });

  const POS_LABEL: Record<string, [string, string]> = {
    n: ["nom", "noun"], v: ["verbe", "verb"], adj: ["adjectif", "adjective"], adv: ["adverbe", "adverb"],
    m: ["classificateur", "measure word"], pron: ["pronom", "pronoun"], prep: ["préposition", "preposition"],
    conj: ["conjonction", "conjunction"], num: ["nombre", "number"], part: ["particule", "particle"],
    int: ["interjection", "interjection"], "": ["", ""],
  };

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 flex flex-col gap-3 bg-paper/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:flex-row md:items-center">
        <label className="relative flex-1">
          <Icon name="search" size={18} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setLimit(PAGE);
            }}
            onBlur={() => q && track("vocab_searched", { q_len: q.length, results: filtered.length, level: words[0]?.level })}
            placeholder={fr ? "汉字, pinyin (ni hao), français…" : "汉字, pinyin (ni hao), English…"}
            className="w-full rounded-full border border-line bg-card py-3 pr-4 pl-11 outline-none focus:border-ink-2"
          />
        </label>
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
          <button onClick={() => setPos("")} className={`chip shrink-0 ${!pos ? "!bg-ink !text-paper" : ""}`}>
            {t.all}
          </button>
          {posList.map((p) => (
            <button key={p} onClick={() => setPos(p)} className={`chip shrink-0 ${pos === p ? "!bg-ink !text-paper" : ""}`}>
              {POS_LABEL[p]?.[fr ? 0 : 1] || p}
            </button>
          ))}
        </div>
        <button onClick={addAll} className="btn btn-ink shrink-0 !py-2 !text-sm">
          <Icon name="cards" size={16} /> {fr ? "Tout réviser" : "Review all"} ({filtered.length})
        </button>
      </div>
      <p className="mt-3 text-sm text-muted">
        {filtered.length.toLocaleString()} {t.words}
        {hydrated && inDeck > 0 && ` · ${inDeck} ${fr ? "dans tes révisions" : "in your deck"}`}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.slice(0, limit).map((w) => (
          <li key={w.id} className="card flex items-center gap-3 p-3.5">
            <button onClick={() => speak(w.hanzi)} className="shrink-0 text-left" aria-label={`${t.listen} ${w.hanzi}`}>
              <Hanzi hanzi={w.hanzi} pinyin={w.pinyin} className="text-2xl" />
            </button>
            <div className="min-w-0 flex-1">
              <Pinyin text={w.pinyin} className="text-sm font-medium" />
              <p className="line-clamp-2 text-sm text-ink-2">{(fr ? w.fr : w.en) || w.en}</p>
            </div>
            <button
              onClick={() => toggle(w)}
              aria-label="review"
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                hydrated && srs[w.id] ? "border-jade bg-jade text-white" : "border-line text-muted hover:border-ink-2"
              }`}
            >
              <Icon name={hydrated && srs[w.id] ? "check" : "cards"} size={14} />
            </button>
          </li>
        ))}
      </ul>
      {filtered.length > limit && (
        <div className="mt-8 text-center">
          <button className="btn btn-ghost" onClick={() => setLimit(limit + PAGE * 2)}>
            {fr ? "Afficher plus" : "Show more"} ({(filtered.length - limit).toLocaleString()})
          </button>
        </div>
      )}
    </div>
  );
}
