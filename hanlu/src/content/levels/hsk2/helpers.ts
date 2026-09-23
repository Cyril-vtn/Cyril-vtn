import type { DialogueLine, Example, Exercise, L10n } from "../../types";

export const t = (fr: string, en: string): L10n => ({ fr, en });

export const ex = (zh: string, pinyin: string, fr: string, en: string): Example => ({
  zh,
  pinyin,
  tr: { fr, en },
});

export const ln = (speaker: string, zh: string, pinyin: string, fr: string, en: string): DialogueLine => ({
  speaker,
  zh,
  pinyin,
  tr: { fr, en },
});

export const choice = (
  prompt: L10n,
  options: (string | L10n)[],
  answer: number,
  extra: { zh?: string; pinyin?: string; explain?: L10n } = {},
): Exercise => ({ type: "choice", prompt, options, answer, ...extra });

export const fill = (
  prompt: L10n,
  before: string,
  after: string,
  options: string[],
  answer: number,
  tr: L10n,
  explain?: L10n,
): Exercise => (explain ? { type: "fill", prompt, before, after, options, answer, tr, explain } : { type: "fill", prompt, before, after, options, answer, tr });

export const order = (prompt: L10n, tokens: string[], tr: L10n): Exercise => ({ type: "order", prompt, tokens, tr });

export const listen = (zh: string, options: string[], answer: number, tr: L10n): Exercise => ({
  type: "listen",
  zh,
  options,
  answer,
  tr,
});

export const match = (prompt: L10n, pairs: [string, string, string, string][]): Exercise => ({
  type: "match",
  prompt,
  pairs: pairs.map(([zh, pinyin, fr, en]) => ({ zh, pinyin, tr: { fr, en } })),
});

/** Common prompts */
export const P = {
  fill: t("Complète la phrase.", "Complete the sentence."),
  order: t("Remets les mots dans l'ordre.", "Put the words in order."),
  match: t("Associe chaque mot à son sens.", "Match each word to its meaning."),
  meaning: t("Que signifie cette phrase ?", "What does this sentence mean?"),
  correct: t("Quelle phrase est correcte ?", "Which sentence is correct?"),
};
