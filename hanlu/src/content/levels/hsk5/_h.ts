import type { DialogueLine, Example, L10n } from "../../types";

/** Bilingual string helper. */
export const t = (fr: string, en: string): L10n => ({ fr, en });

/** Example sentence helper. */
export const ex = (zh: string, pinyin: string, fr: string, en: string): Example => ({
  zh,
  pinyin,
  tr: { fr, en },
});

/** Dialogue / text line helper. */
export const ln = (speaker: string, zh: string, pinyin: string, fr: string, en: string): DialogueLine => ({
  speaker,
  zh,
  pinyin,
  tr: { fr, en },
});
