import type { L10n, Example } from "../types";

export interface GuideSection {
  heading: L10n;
  body: L10n;
  examples?: Example[];
  table?: { head: L10n[]; rows: (string | L10n)[][] };
  tip?: L10n;
}

export interface Guide {
  slug: string;
  title: L10n;
  summary: L10n;
  readMinutes: number;
  category: "pronunciation" | "writing" | "grammar" | "exam" | "method" | "culture";
  sections: GuideSection[];
}

export interface Radical {
  radical: string;
  variants?: string[];
  pinyin: string;
  strokes: number;
  meaning: L10n;
  examples: { hanzi: string; pinyin: string; tr: L10n }[];
}

export interface PinyinSyllable {
  initial: string;
  final: string;
  /** written form e.g. "ju", "yue", "wu" */
  syllable: string;
}
