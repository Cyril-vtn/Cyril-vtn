"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { L10n, Locale } from "@/content/types";
import { l } from "@/i18n/config";
import { href, levelLabel } from "@/lib/site";
import Icon from "../Icon";

export interface GrammarSummary {
  id: string;
  level: number;
  title: L10n;
  pattern: string;
  category?: string;
}

export default function GrammarIndex({ items, locale }: { items: GrammarSummary[]; locale: Locale }) {
  const fr = locale === "fr";
  const sp = useSearchParams();
  const initial = Number(sp.get("level")) || 0;
  const [level, setLevel] = useState(initial);
  const [q, setQ] = useState("");
  const levels = [...new Set(items.map((i) => i.level))].sort();
  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return items.filter(
      (g) =>
        (!level || g.level === level) &&
        (!k || l(g.title, locale).toLowerCase().includes(k) || g.pattern.toLowerCase().includes(k) || g.pattern.includes(q.trim())),
    );
  }, [items, level, q, locale]);
  const grouped = levels
    .filter((lv) => !level || lv === level)
    .map((lv) => [lv, filtered.filter((g) => g.level === lv)] as const)
    .filter(([, g]) => g.length);

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 flex flex-col gap-3 bg-paper/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:flex-row md:items-center">
        <label className="relative flex-1">
          <Icon name="search" size={18} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={fr ? "Rechercher : 把, comparaison, passé…" : "Search: 把, comparison, past…"}
            className="w-full rounded-full border border-line bg-card py-3 pr-4 pl-11 outline-none focus:border-ink-2"
          />
        </label>
        <div className="flex gap-1.5">
          <button onClick={() => setLevel(0)} className={`chip ${!level ? "!bg-ink !text-paper" : ""}`}>
            {fr ? "Tous" : "All"}
          </button>
          {levels.map((lv) => (
            <button key={lv} onClick={() => setLevel(lv)} className={`chip ${level === lv ? "!bg-ink !text-paper" : ""}`}>
              HSK {levelLabel(lv)}
            </button>
          ))}
        </div>
      </div>
      {grouped.map(([lv, list]) => (
        <section key={lv} className="mt-10">
          <h2 className="font-display text-2xl font-semibold">
            HSK {levelLabel(lv)} <span className="text-base font-normal text-muted">· {list.length}</span>
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g) => (
              <Link key={g.id} href={href(locale, `/grammar/${g.id}`)} className="card group p-5 transition hover:-translate-y-0.5">
                <p className="font-han text-base text-seal">{g.pattern}</p>
                <h3 className="mt-2 font-semibold group-hover:text-seal">{l(g.title, locale)}</h3>
                {g.category && <p className="mt-1 text-xs text-muted">{g.category}</p>}
              </Link>
            ))}
          </div>
        </section>
      ))}
      {!grouped.length && <p className="mt-16 text-center text-muted">{fr ? "Aucun résultat." : "No results."}</p>}
    </div>
  );
}
