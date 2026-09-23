/** Server-side content registry. Import only from Server Components / build-time code. */
import type { GrammarPoint, Lesson, Level, LevelCourse, VocabEntry } from "./types";
import { course as c1 } from "./levels/hsk1";
import { course as c2 } from "./levels/hsk2";
import { course as c3 } from "./levels/hsk3";
import { course as c4 } from "./levels/hsk4";
import { course as c5 } from "./levels/hsk5";
import { course as c6 } from "./levels/hsk6";
import v1 from "@/data/vocab/hsk1.json";
import v2 from "@/data/vocab/hsk2.json";
import v3 from "@/data/vocab/hsk3.json";
import v4 from "@/data/vocab/hsk4.json";
import v5 from "@/data/vocab/hsk5.json";
import v6 from "@/data/vocab/hsk6.json";
import v7 from "@/data/vocab/hsk7.json";
import chars from "@/data/chars/hsk-chars.json";

export const LEVELS: Level[] = [1, 2, 3, 4, 5, 6, 7];

export const courses: Partial<Record<Level, LevelCourse>> = { 1: c1, 2: c2, 3: c3, 4: c4, 5: c5, 6: c6 };

const vocabByLevel: Record<Level, VocabEntry[]> = {
  1: v1 as VocabEntry[],
  2: v2 as VocabEntry[],
  3: v3 as VocabEntry[],
  4: v4 as VocabEntry[],
  5: v5 as VocabEntry[],
  6: v6 as VocabEntry[],
  7: v7 as VocabEntry[],
};

export function getVocab(level: Level): VocabEntry[] {
  return vocabByLevel[level];
}

export function allVocab(): VocabEntry[] {
  return LEVELS.flatMap((l) => vocabByLevel[l]);
}

let index: Map<string, VocabEntry> | null = null;
/** Lookup by hanzi, preferring the lowest level. */
export function findWord(hanzi: string): VocabEntry | undefined {
  if (!index) {
    index = new Map();
    for (const w of allVocab()) if (!index.has(w.hanzi)) index.set(w.hanzi, w);
  }
  return index.get(hanzi);
}

export function getChars(level: Level): string[] {
  return (chars as Record<string, string[]>)[String(level)] ?? [];
}

export function getCourse(level: Level): LevelCourse | undefined {
  return courses[level];
}

export function getLesson(level: Level, id: string): Lesson | undefined {
  return courses[level]?.lessons.find((l) => l.id === id);
}

export function allGrammar(): GrammarPoint[] {
  return LEVELS.flatMap((l) => courses[l]?.grammar ?? []);
}

export function getGrammar(id: string): GrammarPoint | undefined {
  return allGrammar().find((g) => g.id === id);
}

export function stats() {
  const lessons = LEVELS.flatMap((l) => courses[l]?.lessons ?? []);
  return {
    words: allVocab().length,
    grammar: allGrammar().length,
    lessons: lessons.length,
    exercises: lessons.reduce((n, l) => n + l.exercises.length, 0),
  };
}

export function parseLevel(s: string): Level | undefined {
  const n = Number(s);
  return LEVELS.includes(n as Level) ? (n as Level) : undefined;
}
