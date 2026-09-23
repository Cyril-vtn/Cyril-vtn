/**
 * Bilingual (fr/en) facts for the "HSK 3.0 explained" page.
 *
 * Two official datasets coexist and must not be confused:
 *  - GF0025-2021 national standard (《国际中文教育中文水平等级标准》), a proficiency framework.
 *    It provides the per-level syllables/characters/words/grammar used in `hskLevels`.
 *  - The HSK exam syllabus released by CLEC/CTI on 15 Nov 2025 (新版HSK考试大纲), which defines
 *    what the exam actually tests. Its (smaller) cumulative targets are in `examSyllabus`.
 *
 * Research notes and confidence levels: docs/research/hsk3.md (verified as of 2026-09-23).
 */

type Bilingual = { fr: string; en: string };

export type HskBand = "elementary" | "intermediate" | "advanced";

export interface Count {
  /** Items introduced at this level. */
  new: number;
  /** Cumulative total up to and including this level. */
  total: number;
}

export interface HskLevelFacts {
  /** Display label: "1" … "6", or "7–9" for the combined advanced band. */
  level: string;
  band: HskBand;
  /** GF0025-2021 figures. */
  syllables: Count;
  characters: Count;
  words: Count;
  grammar: Count;
  /** Cumulative targets from the 2025 exam syllabus (what the exam tests). */
  examSyllabus: {
    words: number;
    recognitionChars: number;
    writingChars: number;
    grammar: number;
  };
  /** One-sentence can-do descriptor (paraphrased from the standard). */
  canDo: Bilingual;
  /** Only set when confirmed by CTI for the HSK 3.0 format. */
  examDuration?: string;
}

export const hskLevels: HskLevelFacts[] = [
  {
    level: "1",
    band: "elementary",
    syllables: { new: 269, total: 269 },
    characters: { new: 300, total: 300 },
    words: { new: 500, total: 500 },
    grammar: { new: 48, total: 48 },
    examSyllabus: { words: 300, recognitionChars: 246, writingChars: 0, grammar: 70 },
    canDo: {
      fr: "Comprendre et utiliser des mots et des phrases très simples pour se présenter, saluer, compter et exprimer des besoins immédiats.",
      en: "Understand and use very simple words and phrases to introduce yourself, greet people, count and express immediate needs.",
    },
  },
  {
    level: "2",
    band: "elementary",
    syllables: { new: 199, total: 468 },
    characters: { new: 300, total: 600 },
    words: { new: 772, total: 1272 },
    grammar: { new: 81, total: 129 },
    examSyllabus: { words: 500, recognitionChars: 371, writingChars: 100, grammar: 148 },
    canDo: {
      fr: "Mener de courts échanges courants sur des sujets familiers (famille, achats, transports, loisirs) et lire des textes brefs et simples.",
      en: "Handle short, routine exchanges on familiar topics (family, shopping, transport, hobbies) and read short, simple texts.",
    },
  },
  {
    level: "3",
    band: "elementary",
    syllables: { new: 140, total: 608 },
    characters: { new: 300, total: 900 },
    words: { new: 973, total: 2245 },
    grammar: { new: 81, total: 210 },
    examSyllabus: { words: 1000, recognitionChars: 655, writingChars: 250, grammar: 244 },
    canDo: {
      fr: "Communiquer sur les sujets du quotidien, des études et du travail, raconter un événement simple et rédiger de courts messages.",
      en: "Communicate about everyday life, study and work, recount a simple event and write short messages.",
    },
  },
  {
    level: "4",
    band: "intermediate",
    syllables: { new: 116, total: 724 },
    characters: { new: 300, total: 1200 },
    words: { new: 1000, total: 3245 },
    grammar: { new: 76, total: 286 },
    examSyllabus: { words: 2000, recognitionChars: 1096, writingChars: 400, grammar: 339 },
    canDo: {
      fr: "Tenir une conversation assez complète sur de nombreux sujets généraux, donner son avis en quelques phrases liées et s'initier à la traduction.",
      en: "Hold fairly complete conversations on a wide range of general topics, give opinions in connected sentences and start translating simple texts.",
    },
  },
  {
    level: "5",
    band: "intermediate",
    syllables: { new: 98, total: 822 },
    characters: { new: 300, total: 1500 },
    words: { new: 1071, total: 4316 },
    grammar: { new: 71, total: 357 },
    examSyllabus: { words: 3600, recognitionChars: 1527, writingChars: 550, grammar: 409 },
    canDo: {
      fr: "Aborder des thèmes sociaux et culturels avec un certain niveau de détail, lire des articles longs et rédiger un texte structuré.",
      en: "Discuss social and cultural topics in some detail, read longer articles and write a structured, multi-paragraph text.",
    },
  },
  {
    level: "6",
    band: "intermediate",
    syllables: { new: 86, total: 908 },
    characters: { new: 300, total: 1800 },
    words: { new: 1140, total: 5456 },
    grammar: { new: 67, total: 424 },
    examSyllabus: { words: 5400, recognitionChars: 1940, writingChars: 700, grammar: 459 },
    canDo: {
      fr: "S'exprimer avec aisance et à-propos sur des sujets complexes, comparer, argumenter et comprendre l'essentiel des médias.",
      en: "Speak fluently and appropriately on complex topics, compare and argue, and understand most mainstream media.",
    },
  },
  {
    level: "7–9",
    band: "advanced",
    syllables: { new: 202, total: 1110 },
    characters: { new: 1200, total: 3000 },
    words: { new: 5636, total: 11092 },
    grammar: { new: 148, total: 572 },
    examSyllabus: { words: 11000, recognitionChars: 3088, writingChars: 1200, grammar: 593 },
    canDo: {
      fr: "Utiliser le chinois dans un cadre universitaire ou professionnel : discours complexes, registre soutenu et traduction écrite comme orale.",
      en: "Use Chinese in academic and professional settings: complex discourse, formal register, and both written and oral translation.",
    },
    examDuration: "≈ 210 min",
  },
];

export interface TimelineEntry {
  /** ISO date (YYYY-MM-DD) or month (YYYY-MM) when the exact day is not known. */
  date: string;
  fr: string;
  en: string;
}

export const hskTimeline: TimelineEntry[] = [
  {
    date: "2010-01",
    fr: "Le « nouveau HSK » (aujourd'hui appelé HSK 2.0) s'impose : 6 niveaux, 5 000 mots.",
    en: "The \"new HSK\" (now called HSK 2.0) becomes the norm: 6 levels, 5,000 words.",
  },
  {
    date: "2021-03",
    fr: "Le ministère chinois de l'Éducation et la Commission nationale de la langue publient la norme GF0025-2021 : 3 stades, 9 niveaux.",
    en: "China's Ministry of Education and State Language Commission publish standard GF0025-2021: 3 stages, 9 levels.",
  },
  {
    date: "2021-07-01",
    fr: "Entrée en vigueur de la norme GF0025-2021.",
    en: "Standard GF0025-2021 takes effect.",
  },
  {
    date: "2022-11-26",
    fr: "Première session mondiale de l'examen HSK 7–9 (niveau avancé).",
    en: "First worldwide sitting of the advanced HSK 7–9 exam.",
  },
  {
    date: "2025-11-15",
    fr: "Publication du nouveau programme officiel de l'examen HSK (300 mots au niveau 1, 5 400 au niveau 6).",
    en: "The new official HSK exam syllabus is released (300 words at level 1, 5,400 at level 6).",
  },
  {
    date: "2026-01-31",
    fr: "Première session pilote mondiale du HSK 3.0 pour les niveaux 1 à 6, sur papier et sur ordinateur.",
    en: "First worldwide HSK 3.0 pilot for levels 1–6, on paper and on computer.",
  },
  {
    date: "2026-09-08",
    fr: "Chinese Testing International annonce la date de lancement officiel du HSK 3.0.",
    en: "Chinese Testing International announces the official HSK 3.0 launch date.",
  },
  {
    date: "2026-12-13",
    fr: "Lancement officiel du HSK 3.0 dans le monde entier ; l'ancien format ne sera plus proposé en parallèle.",
    en: "Official worldwide launch of HSK 3.0; the old format will no longer run in parallel.",
  },
  {
    date: "2027-01",
    fr: "Le HSK 3.0 devient la version de référence de l'examen partout dans le monde.",
    en: "HSK 3.0 becomes the standard version of the exam worldwide.",
  },
];

export interface ComparisonRow {
  topic: Bilingual;
  hsk2: Bilingual;
  hsk3: Bilingual;
}

export const hsk2vs3: ComparisonRow[] = [
  {
    topic: { fr: "Niveaux", en: "Levels" },
    hsk2: { fr: "6 niveaux", en: "6 levels" },
    hsk3: {
      fr: "9 niveaux répartis en 3 stades ; les niveaux 7 à 9 font l'objet d'un examen unique",
      en: "9 levels in 3 stages; levels 7–9 share a single exam",
    },
  },
  {
    topic: { fr: "Vocabulaire total", en: "Total vocabulary" },
    hsk2: { fr: "5 000 mots", en: "5,000 words" },
    hsk3: { fr: "Environ 11 000 mots (11 092 dans la norme)", en: "About 11,000 words (11,092 in the standard)" },
  },
  {
    topic: { fr: "Vocabulaire du niveau 1", en: "Level 1 vocabulary" },
    hsk2: { fr: "150 mots", en: "150 words" },
    hsk3: {
      fr: "300 mots à l'examen (500 dans la norme de 2021)",
      en: "300 words for the exam (500 in the 2021 standard)",
    },
  },
  {
    topic: { fr: "Caractères", en: "Characters" },
    hsk2: { fr: "Pas de liste officielle distincte", en: "No separate official list" },
    hsk3: {
      fr: "3 000 caractères à reconnaître, dont 1 200 à savoir écrire à la main",
      en: "3,000 characters to recognise, 1,200 of which must be handwritten",
    },
  },
  {
    topic: { fr: "Compétences évaluées", en: "Skills tested" },
    hsk2: { fr: "Compréhension orale, lecture, écriture", en: "Listening, reading, writing" },
    hsk3: {
      fr: "Compréhension orale, expression orale, lecture, écriture et traduction",
      en: "Listening, speaking, reading, writing and translation",
    },
  },
  {
    topic: { fr: "Expression orale", en: "Speaking" },
    hsk2: { fr: "HSKK facultatif, passé séparément", en: "Optional HSKK, taken separately" },
    hsk3: {
      fr: "Obligatoire dès le niveau 3, avec inscription conjointe à l'écrit",
      en: "Mandatory from level 3, registered together with the written exam",
    },
  },
  {
    topic: { fr: "Écriture manuscrite", en: "Handwriting" },
    hsk2: { fr: "Caractères exigés à partir du niveau 3", en: "Characters required from level 3" },
    hsk3: {
      fr: "Évaluée dès le niveau 2, sur une liste officielle de caractères",
      en: "Tested from level 2, based on an official character list",
    },
  },
  {
    topic: { fr: "Traduction", en: "Translation" },
    hsk2: { fr: "Absente", en: "Not tested" },
    hsk3: { fr: "Aux niveaux 5–6 et 7–9", en: "At levels 5–6 and 7–9" },
  },
  {
    topic: { fr: "Référentiel", en: "Framework" },
    hsk2: { fr: "Programmes d'examen de 2009", en: "2009 exam syllabuses" },
    hsk3: {
      fr: "Norme nationale GF0025-2021 et programme d'examen de 2025",
      en: "National standard GF0025-2021 and the 2025 exam syllabus",
    },
  },
];

export interface FaqEntry {
  q: Bilingual;
  a: Bilingual;
}

export const hskFaq: FaqEntry[] = [
  {
    q: { fr: "Le HSK 3.0 est-il déjà en vigueur ?", en: "Is HSK 3.0 already in effect?" },
    a: {
      fr: "La norme existe depuis juillet 2021 et l'examen HSK 7–9 depuis 2022. Pour les niveaux 1 à 6, le nouveau format entre officiellement en vigueur le 13 décembre 2026, après des sessions pilotes en 2026.",
      en: "The standard has applied since July 2021 and the HSK 7–9 exam since 2022. For levels 1–6, the new format officially starts on 13 December 2026, after pilot sessions in 2026.",
    },
  },
  {
    q: {
      fr: "Le HSK 1 compte-t-il 300 ou 500 mots ?",
      en: "Does HSK 1 have 300 or 500 words?",
    },
    a: {
      fr: "Les deux chiffres circulent. La norme de 2021 prévoit 500 mots, mais le programme d'examen publié en 2025 n'en retient que 300. Pour préparer l'examen, c'est la liste de 300 mots qui compte.",
      en: "Both figures are real. The 2021 standard lists 500 words, but the exam syllabus published in 2025 keeps only 300. If you are preparing for the exam, the 300-word list is the one that matters.",
    },
  },
  {
    q: {
      fr: "Dois-je apprendre les anciennes listes HSK 2.0 ou les nouvelles ?",
      en: "Should I study the old HSK 2.0 lists or the new ones?",
    },
    a: {
      fr: "Si vous passez l'examen après le 13 décembre 2026, apprenez les nouvelles listes. Les deux se recoupent largement, mais de nombreux mots ont changé de niveau.",
      en: "If you sit the exam after 13 December 2026, study the new lists. The two overlap a lot, but many words have moved to a different level.",
    },
  },
  {
    q: {
      fr: "Mon certificat HSK 2.0 reste-t-il valable ?",
      en: "Is my HSK 2.0 certificate still valid?",
    },
    a: {
      fr: "Oui, le certificat n'expire pas. En revanche, pour une admission dans une université chinoise, le relevé de notes n'est généralement pris en compte que pendant deux ans.",
      en: "Yes, the certificate does not expire. For admission to a Chinese university, however, the score report is usually only accepted for two years.",
    },
  },
  {
    q: {
      fr: "L'oral est-il obligatoire ?",
      en: "Is the speaking test mandatory?",
    },
    a: {
      fr: "Oui, à partir du niveau 3 : l'épreuve orale se passe en même temps que l'écrit et ne peut plus être dissociée. Les niveaux 1 et 2 n'ont pas d'épreuve orale.",
      en: "Yes, from level 3 upwards: the speaking test is taken together with the written exam and can no longer be booked separately. Levels 1 and 2 have no speaking test.",
    },
  },
  {
    q: {
      fr: "Faut-il savoir écrire les caractères à la main ?",
      en: "Do I need to handwrite characters?",
    },
    a: {
      fr: "Oui, dès le niveau 2, mais uniquement ceux d'une liste officielle : environ 100 caractères au niveau 2, puis 1 200 au total pour les niveaux 7 à 9. Pour la lecture, il faut en reconnaître bien davantage.",
      en: "Yes, from level 2, but only characters from an official list: about 100 at level 2, growing to 1,200 by levels 7–9. You need to recognise far more characters for reading.",
    },
  },
  {
    q: {
      fr: "À quoi ressemble l'examen HSK 7–9 ?",
      en: "What does the HSK 7–9 exam look like?",
    },
    a: {
      fr: "C'est un examen unique d'environ 3 h 30 (98 questions) qui évalue la compréhension orale, la lecture, l'écriture, la traduction et l'expression orale. Selon vos résultats, vous obtenez le niveau 7, 8 ou 9.",
      en: "It is a single exam of about 3.5 hours (98 items) covering listening, reading, writing, translation and speaking. Your results place you at level 7, 8 or 9.",
    },
  },
  {
    q: {
      fr: "L'ancien HSK 6 équivaut-il au nouveau HSK 9 ?",
      en: "Is the old HSK 6 equivalent to the new HSK 9?",
    },
    a: {
      fr: "Non. Avec ses 5 000 mots, l'ancien HSK 6 se rapproche plutôt du nouveau niveau 6 (5 400 mots), qui exige en plus l'oral et la traduction. Il n'existe pas de table d'équivalence officielle.",
      en: "No. With its 5,000 words, the old HSK 6 is closer to the new level 6 (5,400 words), which also requires speaking and translation. There is no official equivalence table.",
    },
  },
  {
    q: {
      fr: "Pourquoi trouve-t-on des chiffres différents d'un site à l'autre ?",
      en: "Why do different websites quote different numbers?",
    },
    a: {
      fr: "Parce qu'il existe deux documents officiels : la norme de 2021, qui décrit la compétence en langue, et le programme d'examen de 2025, qui fixe ce qui est réellement évalué. Beaucoup de sites les confondent.",
      en: "Because there are two official documents: the 2021 standard, which describes language proficiency, and the 2025 exam syllabus, which defines what is actually tested. Many sites mix them up.",
    },
  },
  {
    q: {
      fr: "Combien de temps faut-il pour atteindre chaque niveau ?",
      en: "How long does it take to reach each level?",
    },
    a: {
      fr: "Aucun chiffre officiel n'est publié. À titre indicatif, comptez quelques mois de pratique régulière pour le niveau 1 et plusieurs années pour les niveaux 7 à 9. La régularité compte davantage que l'intensité.",
      en: "No official figures exist. As a rough guide, allow a few months of regular practice for level 1 and several years for levels 7–9. Consistency matters more than intensity.",
    },
  },
];

export interface Source {
  label: string;
  url: string;
}

export const sources: Source[] = [
  {
    label: "Ministry of Education (PRC): release of GF0025-2021",
    url: "http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202103/t20210329_523304.html",
  },
  {
    label: "Ministry of Education (PRC): full text of the standard (PDF)",
    url: "http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/202111/W020211118507389477190.pdf",
  },
  {
    label: "CLEC: HSK exam syllabus, 2025 (PDF)",
    url: "https://hsk.cn-bj.ufileos.com/3.0/%E6%96%B0%E7%89%88HSK%E8%80%83%E8%AF%95%E5%A4%A7%E7%BA%B21219.pdf",
  },
  { label: "Chinese Testing International: About HSK", url: "https://www.chinesetest.cn/hsk" },
  { label: "Chinese Testing International: HSK 3.0 pilot notice", url: "https://www.chinesetest.cn/notice" },
  { label: "Chinese Testing International: HSK 7–9", url: "https://www.chinesetest.cn/HSK/7-9" },
  {
    label: "CCTV: HSK 3.0 global pilot announced",
    url: "https://edu.cctv.com/2025/12/19/ARTIV4R5P66203aDjA16v9rn251219.shtml",
  },
  {
    label: "FLTRP: HSK 3.0 released and new HSK coursebook launched",
    url: "http://www.fltrp.com/c/2025-11-20/540070.shtml",
  },
  { label: "Hack Chinese: HSK 2.0 vs HSK 3.0", url: "https://www.hackchinese.com/old-vs-new-hsk" },
  {
    label: "Khanji School: HSK 3.0 launch date confirmed",
    url: "https://khanjischool.com/blog/chinese/hsk-3-0-launch-date-2026",
  },
];
