import type { DialogueLine, L10n } from "../../types";

export const t = (fr: string, en: string): L10n => ({ fr, en });

export const line = (speaker: string, zh: string, pinyin: string, fr: string, en: string): DialogueLine => ({
  speaker,
  zh,
  pinyin,
  tr: { fr, en },
});

export const pair = (zh: string, pinyin: string, fr: string, en: string) => ({ zh, pinyin, tr: { fr, en } });

export const P = {
  order: t("Remets les mots dans le bon ordre.", "Put the words in the right order."),
  fill: t("Complète la phrase.", "Complete the sentence."),
  match: t("Associe chaque mot à son sens.", "Match each word with its meaning."),
  meaning: t("Que veut dire cette phrase ?", "What does this sentence mean?"),
};
