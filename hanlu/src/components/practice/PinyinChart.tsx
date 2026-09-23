"use client";
import { useState } from "react";
import type { Locale } from "@/content/types";
import { speak } from "@/lib/tts";
import { track } from "@/lib/analytics";
import Icon from "../Icon";

export type ToneSamples = Record<string, Record<number, { hanzi: string; pinyin: string; gloss: string }>>;

export default function PinyinChart({
  initials,
  finals,
  table,
  samples,
  locale,
}: {
  initials: string[];
  finals: string[];
  table: { initial: string; final: string; syllable: string }[];
  samples: ToneSamples;
  locale: Locale;
}) {
  const fr = locale === "fr";
  const [sel, setSel] = useState<string | null>(null);
  const cols = ["", ...initials];
  const cell = new Map(table.map((s) => [`${s.initial}|${s.final}`, s.syllable]));
  const rows = finals.filter((f) => cols.some((i) => cell.has(`${i}|${f}`)));
  return (
    <div>
      {sel && (
        <div className="card pop sticky top-20 z-20 mx-auto mb-6 flex max-w-2xl flex-wrap items-center gap-3 p-4">
          <span className="font-display text-3xl font-semibold">{sel}</span>
          <div className="flex flex-1 flex-wrap gap-2">
            {[1, 2, 3, 4].map((t) => {
              const s = samples[sel]?.[t];
              return (
                <button
                  key={t}
                  disabled={!s}
                  onClick={() => {
                    if (!s) return;
                    speak(s.hanzi, 0.7);
                    track("audio_played", { source: "pinyin_chart" });
                  }}
                  className="flex min-w-24 items-center gap-2 rounded-xl border border-line bg-card px-3 py-2 disabled:opacity-30"
                  title={s?.gloss}
                >
                  <span className={`font-semibold t${t}`}>{s?.pinyin ?? "—"}</span>
                  {s && <span className="font-han text-lg">{s.hanzi}</span>}
                </button>
              );
            })}
          </div>
          <button onClick={() => setSel(null)} aria-label="close" className="text-muted">
            <Icon name="x" />
          </button>
        </div>
      )}
      <div className="card overflow-auto">
        <table className="text-sm">
          <thead className="sticky top-0 bg-card">
            <tr>
              <th className="sticky left-0 bg-card p-2" />
              {cols.map((i) => (
                <th key={i || "∅"} className="p-2 font-display font-semibold text-seal">
                  {i || "∅"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f} className="border-t border-line/60">
                <th className="sticky left-0 bg-card p-2 text-left font-display font-semibold text-sky">{f}</th>
                {cols.map((i) => {
                  const syl = cell.get(`${i}|${f}`);
                  return (
                    <td key={i} className="p-0.5 text-center">
                      {syl && (
                        <button
                          onClick={() => {
                            setSel(syl);
                            const s = samples[syl];
                            const first = s && (s[1] ?? s[2] ?? s[3] ?? s[4]);
                            if (first) speak(first.hanzi, 0.7);
                          }}
                          className={`min-w-11 rounded-lg px-1.5 py-1.5 transition hover:bg-seal hover:text-white ${sel === syl ? "bg-ink text-paper" : ""} ${samples[syl] ? "" : "text-muted"}`}
                        >
                          {syl}
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">
        {fr ? "Chaque son est illustré par un caractère réel du HSK 3.0. ∅ = sans initiale." : "Each sound is illustrated with a real HSK 3.0 character. ∅ = no initial."}
      </p>
    </div>
  );
}
