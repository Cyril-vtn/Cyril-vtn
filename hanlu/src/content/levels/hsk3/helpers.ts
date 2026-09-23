import type { L10n, Example, DialogueLine } from "../../types";

/** Bilingual string. */
export const t = (fr: string, en: string): L10n => ({ fr, en });

/** Example sentence. */
export const ex = (zh: string, pinyin: string, fr: string, en: string): Example => ({
  zh,
  pinyin,
  tr: { fr, en },
});

/** Dialogue line. */
export const ln = (speaker: string, zh: string, pinyin: string, fr: string, en: string): DialogueLine => ({
  speaker,
  zh,
  pinyin,
  tr: { fr, en },
});

/** Match pair. */
export const mp = (zh: string, pinyin: string, fr: string, en: string) => ({ zh, pinyin, tr: { fr, en } });
