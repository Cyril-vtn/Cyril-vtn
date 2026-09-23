"use client";
import type { VocabEntry } from "@/content/types";

const cache = new Map<number, Promise<VocabEntry[]>>();

export function loadLevel(level: number): Promise<VocabEntry[]> {
  if (!cache.has(level)) {
    cache.set(
      level,
      fetch(`/data/vocab/hsk${level}.json`).then((r) => {
        if (!r.ok) throw new Error(`vocab ${level}: ${r.status}`);
        return r.json() as Promise<VocabEntry[]>;
      }),
    );
  }
  return cache.get(level)!;
}

/** Load the entries for the given ids (id prefix = level). */
export async function loadByIds(ids: string[]): Promise<Map<string, VocabEntry>> {
  const levels = [...new Set(ids.map((id) => Number(id.split("-")[0])).filter((n) => n >= 1 && n <= 7))];
  const lists = await Promise.all(levels.map(loadLevel));
  const map = new Map<string, VocabEntry>();
  for (const list of lists) for (const w of list) map.set(w.id, w);
  return map;
}
