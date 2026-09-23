/**
 * Content schema for Hanlu. All learner-facing text is bilingual (fr + en).
 * Chinese is always Simplified; pinyin always uses tone marks (nǐ hǎo), never numbers.
 */
export type Locale = "fr" | "en";
export type L10n = { fr: string; en: string };

/** HSK 3.0 level. 7 stands for the combined "7–9" advanced band. */
export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface VocabEntry {
  /** stable id, e.g. "1-爱" or "3-办法" */
  id: string;
  hanzi: string;
  trad?: string;
  pinyin: string;
  level: Level;
  /** part(s) of speech, short english codes: n, v, adj, adv, m (measure word), pron, prep, conj, part, num, int, ... */
  pos?: string[];
  en: string;
  fr?: string;
}

export interface Example {
  zh: string;
  pinyin: string;
  tr: L10n;
}

export interface GrammarPoint {
  /** e.g. "hsk1-g01" */
  id: string;
  level: Level;
  title: L10n;
  /** Structural formula, e.g. "Sujet + 是 + Nom" — keep it short. Use Chinese words + generic slots. */
  pattern: string;
  /** 2–6 short paragraphs. Supports **bold** and line breaks (\n). */
  explanation: L10n;
  examples: Example[];
  /** Typical learner mistakes, with the wrong form marked ✗ and the right ✓. */
  pitfalls?: L10n;
  /** Category from the official HSK 3.0 grammar syllabus, if known (e.g. "代词 / pronouns"). */
  category?: string;
}

export type Exercise =
  /** Multiple choice. Options are either plain strings (Chinese/pinyin) or bilingual. */
  | {
      type: "choice";
      prompt: L10n;
      zh?: string;
      pinyin?: string;
      options: (string | L10n)[];
      answer: number;
      explain?: L10n;
    }
  /** Put Chinese tokens in the correct order. `tokens` is the CORRECT order; the UI shuffles. */
  | { type: "order"; prompt: L10n; tokens: string[]; tr: L10n }
  /** Fill the blank: before + ___ + after. */
  | {
      type: "fill";
      prompt: L10n;
      before: string;
      after: string;
      options: string[];
      answer: number;
      tr: L10n;
      explain?: L10n;
    }
  /** Listening: TTS reads `zh`, learner picks the matching option (Chinese strings). */
  | { type: "listen"; zh: string; options: string[]; answer: number; tr: L10n }
  /** Match Chinese words to meanings (3–6 pairs). */
  | { type: "match"; prompt: L10n; pairs: { zh: string; pinyin: string; tr: L10n }[] };

export interface DialogueLine {
  speaker: string; // e.g. "A", "B" or a Chinese name like "王明"
  zh: string;
  pinyin: string;
  tr: L10n;
}

export interface Lesson {
  /** e.g. "hsk1-l01" */
  id: string;
  level: Level;
  order: number;
  title: L10n;
  subtitle: L10n;
  /** one of: greetings, family, food, time, shopping, travel, school, work, health, weather, hobbies, home, city, feelings, nature, tech, culture, society */
  theme: string;
  goals: L10n[];
  dialogue: { context: L10n; lines: DialogueLine[] };
  /** Key words introduced in this lesson (Simplified hanzi). Should belong to this HSK level or below. */
  vocab: string[];
  /** GrammarPoint ids taught in this lesson. */
  grammar: string[];
  culture?: { title: L10n; body: L10n };
  exercises: Exercise[];
}

export interface LevelCourse {
  level: Level;
  lessons: Lesson[];
  grammar: GrammarPoint[];
}
