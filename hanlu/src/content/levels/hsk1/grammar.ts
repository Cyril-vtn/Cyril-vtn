import type { Example, GrammarPoint, L10n } from "../../types";

const t = (fr: string, en: string): L10n => ({ fr, en });
const ex = (zh: string, pinyin: string, fr: string, en: string): Example => ({ zh, pinyin, tr: { fr, en } });

/**
 * HSK 3.0 — Level 1 grammar (GF0025-2021, appendix A.1 一级语法点 【一01】–【一48】).
 * The 48 points below cover the official list; the `category` field gives the matching official code(s).
 */
export const grammar: GrammarPoint[] = [
  // ───────────────────────── Lesson 1 ─────────────────────────
  {
    id: "hsk1-g01",
    level: 1,
    title: t("Les pronoms personnels", "Personal pronouns"),
    pattern: "我 / 你 / 您 / 他 / 她 (+ 们)",
    explanation: t(
      "Les pronoms chinois sont d'une simplicité reposante : **我** (je, moi), **你** (tu, toi), **他** (il, lui), **她** (elle). Ils ne changent **jamais de forme** : « je », « me » et « moi » se disent tous 我.\n\nPour le pluriel, on ajoute simplement **们** (men) : 我们 (nous), 你们 (vous), 他们 (ils), 她们 (elles). Pour un groupe mixte, on écrit 他们.\n\n**您** (nín) est la forme **polie** de 你, comme le « vous » de politesse en français. On l'utilise avec un professeur, une personne âgée, un client.\n\nÀ l'oral, 他 et 她 se prononcent exactement pareil : **tā**. Seul l'écrit fait la différence.",
      "Chinese pronouns are refreshingly simple: **我** (I, me), **你** (you), **他** (he, him), **她** (she, her). They **never change form**: “I” and “me” are both 我.\n\nTo make a plural, just add **们** (men): 我们 (we/us), 你们 (you all), 他们 (they), 她们 (they, all female). A mixed group uses 他们.\n\n**您** (nín) is the **polite** form of 你, a bit like “sir/madam” built into the word. Use it with teachers, older people and customers.\n\nIn speech, 他 and 她 sound exactly the same: **tā**. Only writing tells them apart.",
    ),
    examples: [
      ex("你好！", "Nǐ hǎo!", "Salut ! / Bonjour !", "Hi! / Hello!"),
      ex("您好，老师！", "Nín hǎo, lǎoshī!", "Bonjour, monsieur / madame (le professeur) !", "Hello, teacher!"),
      ex("我们是学生。", "Wǒmen shì xuésheng.", "Nous sommes étudiants.", "We are students."),
      ex("他们是我的同学。", "Tāmen shì wǒ de tóngxué.", "Ce sont mes camarades de classe.", "They are my classmates."),
      ex("她很高。", "Tā hěn gāo.", "Elle est grande.", "She is tall."),
    ],
    pitfalls: t(
      "✗ 您们好 → ✓ 你们好 (您 ne prend normalement pas 们 à l'oral ; pour saluer poliment un groupe, dis 你们好 ou 大家好).\n✗ 我是好 → ✓ 我很好 (« je vais bien » ne prend pas 是).",
      "✗ 您们好 → ✓ 你们好 (您 normally doesn't take 们 in speech; to greet a group, say 你们好 or 大家好).\n✗ 我是好 → ✓ 我很好 (“I'm fine” doesn't use 是).",
    ),
    category: "【一05】人称代词 / personal pronouns",
  },
  {
    id: "hsk1-g02",
    level: 1,
    title: t("L'ordre de base : Sujet + Verbe + Objet (叫)", "Basic word order: Subject + Verb + Object (叫)"),
    pattern: "Sujet + 叫 + nom",
    explanation: t(
      "Bonne nouvelle : l'ordre de base du chinois est le même qu'en français : **Sujet + Verbe + Objet**. 我叫王明 = « Je m'appelle Wang Ming », mot à mot « je + appeler + Wang Ming ».\n\nEt le verbe **ne se conjugue jamais** : 我叫, 你叫, 他叫… Pas de terminaison, pas de temps grammatical. Le contexte (et des petits mots qu'on verra plus tard) indique le moment.\n\nPour demander le nom de quelqu'un : **你叫什么名字？** (littéralement « tu t'appelles quel nom ? »). La réponse reprend la même structure : 我叫……\n\nAstuce : en chinois, le **nom de famille vient en premier** : dans 王明, 王 (Wáng) est le nom de famille et 明 (Míng) le prénom.",
      "Good news: basic Chinese word order is the same as English: **Subject + Verb + Object**. 我叫王明 = “I'm called Wang Ming”, literally “I + call + Wang Ming”.\n\nAnd verbs **never conjugate**: 我叫, 你叫, 他叫… No endings, no tenses. Context (and small words you'll meet later) shows the time.\n\nTo ask someone's name: **你叫什么名字？** (literally “you are-called what name?”). The answer uses the same frame: 我叫……\n\nTip: in Chinese, the **family name comes first**: in 王明, 王 (Wáng) is the surname and 明 (Míng) the given name.",
    ),
    examples: [
      ex("我叫马克。", "Wǒ jiào Mǎkè.", "Je m'appelle Marc.", "My name is Marc."),
      ex("你叫什么名字？", "Nǐ jiào shénme míngzi?", "Comment tu t'appelles ?", "What's your name?"),
      ex("她叫李月。", "Tā jiào Lǐ Yuè.", "Elle s'appelle Li Yue.", "Her name is Li Yue."),
      ex("我们学中文。", "Wǒmen xué Zhōngwén.", "Nous apprenons le chinois.", "We study Chinese."),
      ex("他吃面包。", "Tā chī miànbāo.", "Il mange du pain.", "He eats bread."),
    ],
    pitfalls: t(
      "✗ 我是叫马克 → ✓ 我叫马克 (叫 est déjà le verbe, pas besoin de 是).\n✗ 我的名字叫是马克 → ✓ 我的名字是马克 ou ✓ 我叫马克.",
      "✗ 我是叫马克 → ✓ 我叫马克 (叫 is already the verb, no 是 needed).\n✗ 我的名字叫是马克 → ✓ 我的名字是马克 or ✓ 我叫马克.",
    ),
    category: "【一24–26】【一29】主语、谓语、宾语 / 动词谓语句",
  },
  {
    id: "hsk1-g03",
    level: 1,
    title: t("Le mot interrogatif 什么 (quoi, quel)", "The question word 什么 (what)"),
    pattern: "Sujet + Verbe + 什么 (+ Nom)？",
    explanation: t(
      "**什么** (shénme) veut dire « quoi / quel ». La règle d'or des questions chinoises : **le mot interrogatif prend la place de la réponse**. On ne déplace rien !\n\n你喝**什么**？ → 我喝**茶**。 Le mot 茶 vient exactement là où était 什么.\n\n什么 peut aussi se placer devant un nom : **什么名字** (quel nom), **什么书** (quel livre).\n\nC'est une grosse différence avec le français et l'anglais, où l'on met le mot interrogatif en tête (« **Que** bois-tu ? »). En chinois, on garde l'ordre de la phrase affirmative.",
      "**什么** (shénme) means “what”. The golden rule of Chinese questions: **the question word sits where the answer will go**. Nothing moves!\n\n你喝**什么**？ → 我喝**茶**。 The word 茶 lands exactly where 什么 was.\n\n什么 can also go before a noun: **什么名字** (what name), **什么书** (what book).\n\nThis is a big difference from English, which moves the question word to the front (“**What** do you drink?”). Chinese keeps statement word order.",
    ),
    examples: [
      ex("这是什么？", "Zhè shì shénme?", "Qu'est-ce que c'est ?", "What is this?"),
      ex("你喝什么？", "Nǐ hē shénme?", "Qu'est-ce que tu bois ?", "What are you drinking?"),
      ex("你买什么？", "Nǐ mǎi shénme?", "Qu'est-ce que tu achètes ?", "What are you buying?"),
      ex("你星期天做什么？", "Nǐ xīngqītiān zuò shénme?", "Qu'est-ce que tu fais dimanche ?", "What are you doing on Sunday?"),
    ],
    pitfalls: t(
      "✗ 什么你喝？ → ✓ 你喝什么？ (on ne déplace pas le mot interrogatif).\n✗ 你叫什么名字吗？ → ✓ 你叫什么名字？ (jamais de 吗 avec un mot interrogatif).",
      "✗ 什么你喝？ → ✓ 你喝什么？ (don't move the question word).\n✗ 你叫什么名字吗？ → ✓ 你叫什么名字？ (never add 吗 to a question-word question).",
    ),
    category: "【一04】【一46】疑问代词 / 用“什么”提问",
  },
  {
    id: "hsk1-g04",
    level: 1,
    title: t("La particule 呢 : « Et toi ? », « Où est… ? »", "The particle 呢: “And you?”, “Where is…?”"),
    pattern: "Nom / Pronom + 呢？",
    explanation: t(
      "**呢** (ne) est une petite particule très pratique. Après un nom ou un pronom, elle sert à **renvoyer la question** : 我叫马克，**你呢？** = « Je m'appelle Marc, et toi ? »\n\nSans contexte, **X呢？** veut souvent dire « **Où est X ?** » : 我的书呢？ = « Où est mon livre ? »\n\n呢 peut aussi adoucir une question qui contient déjà un mot interrogatif : 他是哪国人**呢**？ (« Il est de quel pays, au fait ? »).\n\nOn verra plus tard un autre usage : 呢 en fin de phrase pour une action en cours (我在吃饭呢).",
      "**呢** (ne) is a handy little particle. After a noun or pronoun, it **bounces the question back**: 我叫马克，**你呢？** = “I'm Marc, and you?”\n\nWith no context, **X呢？** often means “**Where is X?**”: 我的书呢？ = “Where's my book?”\n\n呢 can also soften a question that already has a question word: 他是哪国人**呢**？ (“So which country is he from?”).\n\nLater you'll see another use: 呢 at the end of a sentence for an action in progress (我在吃饭呢).",
    ),
    examples: [
      ex("我叫马克，你呢？", "Wǒ jiào Mǎkè, nǐ ne?", "Je m'appelle Marc, et toi ?", "I'm Marc, and you?"),
      ex("我很好，你呢？", "Wǒ hěn hǎo, nǐ ne?", "Je vais bien, et toi ?", "I'm fine, and you?"),
      ex("我的手机呢？", "Wǒ de shǒujī ne?", "Où est mon portable ?", "Where's my phone?"),
      ex("他是哪国人呢？", "Tā shì nǎ guó rén ne?", "Il est de quelle nationalité, au fait ?", "So what nationality is he?"),
    ],
    pitfalls: t(
      "✗ 你呢吗？ → ✓ 你呢？ (呢 et 吗 ne se cumulent pas).\n✗ 呢你？ → ✓ 你呢？ (呢 se place toujours après).",
      "✗ 你呢吗？ → ✓ 你呢？ (呢 and 吗 don't stack).\n✗ 呢你？ → ✓ 你呢？ (呢 always comes after).",
    ),
    category: "【一22】语气助词 呢",
  },

  // ───────────────────────── Lesson 2 ─────────────────────────
  {
    id: "hsk1-g05",
    level: 1,
    title: t("Le verbe 是 (être) : A 是 B", "The verb 是 (to be): A 是 B"),
    pattern: "A + 是 + B　/　A + 不是 + B",
    explanation: t(
      "**是** (shì) relie deux **noms** : « A est B ». 我**是**学生 = « Je suis étudiant ». Pour la négation, on met **不** devant : 我**不是**老师 (attention au ton : **bú shì**).\n\nAttention, 是 est bien plus étroit que « être » : il sert à **identifier** ou **classer** (qui/quoi est A), **pas** à décrire avec un adjectif. « Je suis occupé » se dit 我**很**忙, sans 是 (on le verra avec 很).\n\nOn peut aussi l'utiliser pour décrire ce qui se trouve à un endroit : 车站东边**是**一个学校 (« à l'est de la gare, c'est une école »).\n\nEt pour une caractéristique : 这个包是新的 (« ce sac est neuf » — littéralement « est un neuf »).",
      "**是** (shì) links two **nouns**: “A is B”. 我**是**学生 = “I am a student”. To negate, put **不** in front: 我**不是**老师 (mind the tone: **bú shì**).\n\nCareful: 是 is much narrower than “to be”. It **identifies** or **classifies** (who/what A is), it does **not** go with adjectives. “I'm busy” is 我**很**忙, with no 是 (see 很 later).\n\nIt can also say what is located somewhere: 车站东边**是**一个学校 (“east of the station is a school”).\n\nAnd describe a feature: 这个包是新的 (“this bag is new” — literally “is a new one”).",
    ),
    examples: [
      ex("我是学生。", "Wǒ shì xuésheng.", "Je suis étudiant.", "I'm a student."),
      ex("他不是老师。", "Tā bú shì lǎoshī.", "Il n'est pas professeur.", "He isn't a teacher."),
      ex("这是我的朋友。", "Zhè shì wǒ de péngyou.", "C'est mon ami.", "This is my friend."),
      ex("她是医生吗？", "Tā shì yīshēng ma?", "Elle est médecin ?", "Is she a doctor?"),
      ex("车站东边是一个学校。", "Chēzhàn dōngbian shì yí ge xuéxiào.", "À l'est de la gare, il y a une école.", "East of the station is a school."),
    ],
    pitfalls: t(
      "✗ 我是很忙 → ✓ 我很忙 (pas de 是 devant un adjectif).\n✗ 我是去学校 → ✓ 我去学校 (是 n'est pas un auxiliaire).\nTon : 不是 se lit **bú shì**, pas bù shì.",
      "✗ 我是很忙 → ✓ 我很忙 (no 是 before adjectives).\n✗ 我是去学校 → ✓ 我去学校 (是 is not an auxiliary).\nTone: 不是 is read **bú shì**, not bù shì.",
    ),
    category: "【一36】“是”字句",
  },
  {
    id: "hsk1-g06",
    level: 1,
    title: t("Les questions fermées avec 吗", "Yes/no questions with 吗"),
    pattern: "Phrase affirmative + 吗？",
    explanation: t(
      "Transformer une affirmation en question oui/non est un jeu d'enfant : on ajoute **吗** (ma) à la fin. 你是学生。→ 你是学生**吗**？\n\nL'ordre des mots **ne change pas** (pas d'inversion comme « Es-tu… ? »).\n\nPour répondre, le chinois n'a pas vraiment de « oui » universel : on **reprend le verbe** (ou l'adjectif). 你是学生吗？— **是**。/ **不是**。 你喝茶吗？— **喝**。/ **不喝**。 On peut aussi répondre 对 (« c'est ça ») quand on confirme une information.",
      "Turning a statement into a yes/no question is easy: add **吗** (ma) at the end. 你是学生。→ 你是学生**吗**？\n\nWord order **does not change** (no inversion like “Are you…?”).\n\nTo answer, Chinese has no all-purpose “yes”: you **repeat the verb** (or adjective). 你是学生吗？— **是**。/ **不是**。 你喝茶吗？— **喝**。/ **不喝**。 You can also say 对 (“right”) to confirm information.",
    ),
    examples: [
      ex("你是老师吗？", "Nǐ shì lǎoshī ma?", "Tu es professeur ?", "Are you a teacher?"),
      ex("你喝茶吗？——喝。", "Nǐ hē chá ma? — Hē.", "Tu bois du thé ? — Oui.", "Do you drink tea? — Yes."),
      ex("这包子好吃吗？", "Zhè bāozi hǎochī ma?", "Ce bao est bon ?", "Is this bun tasty?"),
      ex("那儿现在热吗？", "Nàr xiànzài rè ma?", "Il fait chaud là-bas en ce moment ?", "Is it hot there now?"),
    ],
    pitfalls: t(
      "✗ 你去哪儿吗？ → ✓ 你去哪儿？ (pas de 吗 avec 什么, 谁, 哪儿, 几…).\n✗ 是你学生吗？ → ✓ 你是学生吗？ (pas d'inversion).",
      "✗ 你去哪儿吗？ → ✓ 你去哪儿？ (no 吗 with 什么, 谁, 哪儿, 几…).\n✗ 是你学生吗？ → ✓ 你是学生吗？ (no inversion).",
    ),
    category: "【一33】【一45】是非问句 / 用“吗”提问",
  },
  {
    id: "hsk1-g07",
    level: 1,
    title: t("Les nombres de 0 à 999 ; 二 et 两 ; 半", "Numbers 0–999; 二 vs 两; 半"),
    pattern: "十 + chiffre / chiffre + 十 / chiffre + 百",
    explanation: t(
      "Les nombres chinois sont d'une logique parfaite. Il suffit de connaître **零** (0) à **十** (10), puis **百** (100).\n\n• 11 = 十一 (dix-un), 15 = 十五\n• 20 = 二十 (deux-dix), 25 = 二十五\n• 99 = 九十九, 100 = 一百, 206 = 二百零六 (le **零** marque le « trou » des dizaines).\n\n**二 ou 两 ?** Pour compter ou dans un nombre, on dit **二** (二, 十二, 二十). Mais devant un **spécificatif** (个, 本…), on dit **两** : **两**个人, **两**本书. Pour 200, on entend 二百 et 两百.\n\n**半** = « demi » : 半个小时 (une demi-heure), 八点半 (8 h 30).\n\nAu téléphone, on lit les chiffres un par un, et **1** se dit souvent **yāo** pour ne pas le confondre avec 七 (qī).",
      "Chinese numbers are perfectly logical. Learn **零** (0) to **十** (10), then **百** (100).\n\n• 11 = 十一 (ten-one), 15 = 十五\n• 20 = 二十 (two-ten), 25 = 二十五\n• 99 = 九十九, 100 = 一百, 206 = 二百零六 (**零** fills the empty tens slot).\n\n**二 or 两?** For counting or inside a number, say **二** (二, 十二, 二十). But before a **measure word** (个, 本…), say **两**: **两**个人, **两**本书. For 200 you hear both 二百 and 两百.\n\n**半** = “half”: 半个小时 (half an hour), 八点半 (8:30).\n\nFor phone numbers, digits are read one by one, and **1** is often said **yāo** so it isn't confused with 七 (qī).",
    ),
    examples: [
      ex("我们班有二十五个学生。", "Wǒmen bān yǒu èrshíwǔ ge xuésheng.", "Il y a 25 élèves dans notre classe.", "There are 25 students in our class."),
      ex("我要两个包子。", "Wǒ yào liǎng ge bāozi.", "Je voudrais deux baos.", "I'd like two steamed buns."),
      ex("这本书一百一十五页。", "Zhè běn shū yìbǎi yīshíwǔ yè.", "Ce livre fait 115 pages.", "This book has 115 pages."),
      ex("我等了半个小时。", "Wǒ děngle bàn ge xiǎoshí.", "J'ai attendu une demi-heure.", "I waited half an hour."),
    ],
    pitfalls: t(
      "✗ 二个人 → ✓ 两个人.\n✗ 十二 ≠ 二十 : 十二 = 12, 二十 = 20 (l'ordre compte !).\n✗ 二百六 = 206 → non : 二百六 = 260 ; 206 = 二百零六.",
      "✗ 二个人 → ✓ 两个人.\n✗ 十二 ≠ 二十: 十二 = 12, 二十 = 20 (order matters!).\n✗ 二百六 = 206 → no: 二百六 = 260; 206 = 二百零六.",
    ),
    category: "【一07】数词",
  },
  {
    id: "hsk1-g08",
    level: 1,
    title: t("Demander une quantité : 几, 多少, 多 + adj.", "Asking “how many”: 几, 多少, 多 + adj."),
    pattern: "几 + spécificatif + Nom　/　多少 (+ spéc.) + Nom　/　多 + 大",
    explanation: t(
      "**几** (jǐ) s'emploie quand on attend un **petit nombre** (en général moins de 10) ou pour les dates et l'heure. Il est **toujours suivi d'un spécificatif** : 你家有**几口**人？ 现在**几点**？\n\n**多少** (duōshao) s'utilise pour un nombre **quelconque ou grand**, et le spécificatif est facultatif : 你们班有**多少**（个）学生？ C'est aussi le mot des prix (**多少钱？**) et des numéros (手机号是**多少**？).\n\n**多 + adjectif** demande un degré : **多大** (quel âge / quelle taille). 你**多大**？ = « Tu as quel âge ? » (entre adultes). À un enfant, on demande plutôt 你**几岁**？\n\nL'âge se dit sans verbe : 我二十岁 (« moi vingt ans »).",
      "**几** (jǐ) is used when you expect a **small number** (usually under 10), and for dates and clock time. It is **always followed by a measure word**: 你家有**几口**人？ 现在**几点**？\n\n**多少** (duōshao) is for **any or large** numbers, and the measure word is optional: 你们班有**多少**（个）学生？ It's also the word for prices (**多少钱？**) and numbers (手机号是**多少**？).\n\n**多 + adjective** asks about degree: **多大** (how old / how big). 你**多大**？ = “How old are you?” (between adults). To a child, ask 你**几岁**？\n\nAge needs no verb: 我二十岁 (“me twenty years”).",
    ),
    examples: [
      ex("你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Vous êtes combien dans ta famille ?", "How many people are in your family?"),
      ex("你们班有多少个学生？", "Nǐmen bān yǒu duōshao ge xuésheng?", "Combien d'élèves y a-t-il dans ta classe ?", "How many students are in your class?"),
      ex("你哥哥多大？", "Nǐ gēge duō dà?", "Quel âge a ton grand frère ?", "How old is your older brother?"),
      ex("小朋友，你几岁？", "Xiǎopéngyou, nǐ jǐ suì?", "Tu as quel âge, mon petit ?", "How old are you, little one?"),
      ex("你的手机号是多少？", "Nǐ de shǒujī hào shì duōshao?", "C'est quoi ton numéro de portable ?", "What's your phone number?"),
    ],
    pitfalls: t(
      "✗ 你家有几人？ → ✓ 你家有几口人？ (几 exige un spécificatif).\n✗ 我是二十岁 → ✓ 我二十岁 (pas de 是 pour l'âge à la forme affirmative).\n✗ 你几大？ → ✓ 你多大？",
      "✗ 你家有几人？ → ✓ 你家有几口人？ (几 needs a measure word).\n✗ 我是二十岁 → ✓ 我二十岁 (no 是 for age in positive sentences).\n✗ 你几大？ → ✓ 你多大？",
    ),
    category: "【一04】【一46】疑问代词 多、多少、几",
  },

  // ───────────────────────── Lesson 3 ─────────────────────────
  {
    id: "hsk1-g09",
    level: 1,
    title: t("La particule 的 : possession et description", "The particle 的: possession and description"),
    pattern: "Possesseur / Adjectif + 的 + Nom",
    explanation: t(
      "**的** (de) relie un déterminant au nom qui suit, un peu comme le « ’s » anglais : **我的**书 (mon livre), **老师的**名字 (le nom du professeur). En chinois, **ce qui précise vient toujours avant** le nom.\n\nPour les **proches** et les **groupes** auxquels on appartient, on omet souvent 的 : **我妈妈** (ma mère), **我们学校** (notre école), **你家** (ta famille).\n\n的 sert aussi après un adjectif de plus d'une syllabe : **干净的**房间 (une chambre propre). Mais les adjectifs courts s'en passent souvent : **新**书包 (un cartable neuf), **中文**书 (un livre en chinois).\n\nEnfin, 的 peut remplacer le nom : 这本书是**我的** (« ce livre est à moi »).",
      "**的** (de) links a modifier to the noun after it, much like English “’s”: **我的**书 (my book), **老师的**名字 (the teacher's name). In Chinese, **modifiers always come before** the noun.\n\nWith **close relatives** and **groups** you belong to, 的 is usually dropped: **我妈妈** (my mom), **我们学校** (our school), **你家** (your family).\n\n的 also follows longer adjectives: **干净的**房间 (a clean room). Short ones often skip it: **新**书包 (a new schoolbag), **中文**书 (a Chinese book).\n\nFinally, 的 can stand in for the noun: 这本书是**我的** (“this book is mine”).",
    ),
    examples: [
      ex("这是我的手机。", "Zhè shì wǒ de shǒujī.", "C'est mon portable.", "This is my phone."),
      ex("你的衣服很好看。", "Nǐ de yīfu hěn hǎokàn.", "Tes vêtements sont jolis.", "Your clothes look nice."),
      ex("我妈妈是老师。", "Wǒ māma shì lǎoshī.", "Ma mère est professeure.", "My mom is a teacher."),
      ex("我喜欢干净的房间。", "Wǒ xǐhuan gānjìng de fángjiān.", "J'aime les chambres propres.", "I like clean rooms."),
      ex("这是谁的书？——是我的。", "Zhè shì shéi de shū? — Shì wǒ de.", "C'est le livre de qui ? — C'est le mien.", "Whose book is this? — It's mine."),
    ],
    pitfalls: t(
      "✗ 书的我 → ✓ 我的书 (le possesseur d'abord, comme en anglais « my book »).\n✗ le livre de Marc = 书的马克 → ✓ 马克的书.",
      "✗ 书的我 → ✓ 我的书 (owner first).\n✗ “the book of Marc” = 书的马克 → ✓ 马克的书.",
    ),
    category: "【一20】【一27】结构助词“的” / 定语",
  },
  {
    id: "hsk1-g10",
    level: 1,
    title: t("有 : avoir ; négation 没有", "有: to have; negative 没有"),
    pattern: "Sujet + 有 / 没有 + Objet",
    explanation: t(
      "**有** (yǒu) signifie « avoir » : 我**有**一个哥哥 (j'ai un grand frère).\n\nSa négation est **unique** : on dit **没有** (méiyǒu), **jamais** 不有. C'est l'une des erreurs les plus fréquentes des débutants !\n\n有 exprime aussi « il y a » quand le sujet est un lieu ou un ensemble : 一个星期**有**七天 (une semaine a sept jours). On verra ce sens en détail avec les lieux.\n\nQuestion : 你有哥哥**吗**？ ou 你**有没有**哥哥？",
      "**有** (yǒu) means “to have”: 我**有**一个哥哥 (I have an older brother).\n\nIts negative is **unique**: **没有** (méiyǒu), **never** 不有. This is one of the most common beginner mistakes!\n\n有 also means “there is/are” when the subject is a place or a whole: 一个星期**有**七天 (a week has seven days). You'll see this in detail with places.\n\nQuestion: 你有哥哥**吗**？ or 你**有没有**哥哥？",
    ),
    examples: [
      ex("我有很多书。", "Wǒ yǒu hěn duō shū.", "J'ai beaucoup de livres.", "I have a lot of books."),
      ex("他没有哥哥。", "Tā méiyǒu gēge.", "Il n'a pas de grand frère.", "He has no older brother."),
      ex("你有中文名字吗？", "Nǐ yǒu Zhōngwén míngzi ma?", "Tu as un nom chinois ?", "Do you have a Chinese name?"),
      ex("一个星期有七天。", "Yí ge xīngqī yǒu qī tiān.", "Une semaine a sept jours.", "A week has seven days."),
    ],
    pitfalls: t(
      "✗ 我不有妹妹 → ✓ 我没有妹妹.\n✗ 我没有一个妹妹 → ✓ 我没有妹妹 (pas de nombre après 没有, comme « pas de » en français).",
      "✗ 我不有妹妹 → ✓ 我没有妹妹.\n✗ 我没有一个妹妹 → ✓ 我没有妹妹 (no number after 没有, just “no sister”).",
    ),
    category: "【一37】“有”字句 (领有)",
  },
  {
    id: "hsk1-g11",
    level: 1,
    title: t("Les spécificatifs (classificateurs) : 个, 本, 口, 杯…", "Measure words: 个, 本, 口, 杯…"),
    pattern: "Nombre / 这 / 那 / 几 + spécificatif + Nom",
    explanation: t(
      "En chinois, on ne peut pas coller un nombre directement à un nom. Il faut un **spécificatif** entre les deux, un peu comme « **une tasse de** thé » ou « **une tranche de** pain » — sauf qu'en chinois, c'est **obligatoire pour tous les noms**.\n\nLes plus utiles au niveau 1 :\n• **个** (ge) : le passe-partout (personnes, objets) — 一个人, 三个学生\n• **本** (běn) : livres, cahiers — 两本书\n• **口** (kǒu) : membres d'une famille — 三口人\n• **杯** (bēi) : tasses, verres — 一杯茶\n• **家** (jiā) : magasins, restaurants — 五家商店\n• **间** (jiān) : pièces — 六间房子\n• **块** (kuài) : morceaux — 七块面包\n• **页** (yè) : pages\n\nL'ensemble « nombre + spécificatif » (两杯, 三本…) forme un **groupe numéral**. En cas de doute, 个 est souvent acceptable à l'oral.",
      "In Chinese you can't put a number right next to a noun. A **measure word** must go in between, a bit like “a **cup of** tea” or “a **slice of** bread” — except in Chinese it's **required for every noun**.\n\nThe most useful ones at level 1:\n• **个** (ge): the all-rounder (people, things) — 一个人, 三个学生\n• **本** (běn): books, notebooks — 两本书\n• **口** (kǒu): family members — 三口人\n• **杯** (bēi): cups, glasses — 一杯茶\n• **家** (jiā): shops, restaurants — 五家商店\n• **间** (jiān): rooms — 六间房子\n• **块** (kuài): pieces — 七块面包\n• **页** (yè): pages\n\nThe “number + measure word” unit (两杯, 三本…) is a **numeral phrase**. When in doubt, 个 is often acceptable in speech.",
    ),
    examples: [
      ex("我有三本中文书。", "Wǒ yǒu sān běn Zhōngwén shū.", "J'ai trois livres de chinois.", "I have three Chinese books."),
      ex("我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nous sommes quatre dans ma famille.", "There are four people in my family."),
      ex("请给我两杯牛奶。", "Qǐng gěi wǒ liǎng bēi niúnǎi.", "Deux verres de lait, s'il vous plaît.", "Two glasses of milk, please."),
      ex("这儿有五家商店。", "Zhèr yǒu wǔ jiā shāngdiàn.", "Il y a cinq magasins ici.", "There are five shops here."),
      ex("这个学生很认真。", "Zhège xuésheng hěn rènzhēn.", "Cet élève est très sérieux.", "This student is very diligent."),
    ],
    pitfalls: t(
      "✗ 三书 → ✓ 三本书.\n✗ 两个口人 → ✓ 两口人 (un seul spécificatif).\nTon : 一个 se lit **yí ge** (个 est au 4e ton à l'origine).",
      "✗ 三书 → ✓ 三本书.\n✗ 两个口人 → ✓ 两口人 (only one measure word).\nTone: 一个 is read **yí ge** (个 is originally 4th tone).",
    ),
    category: "【一08】【一23】名量词 / 数量短语",
  },
  {
    id: "hsk1-g12",
    level: 1,
    title: t("Le mot interrogatif 谁 (qui)", "The question word 谁 (who)"),
    pattern: "谁 + Verbe…？ / … + 是 + 谁？ / 谁的 + Nom",
    explanation: t(
      "**谁** (shéi, parfois prononcé shuí) signifie « qui ». Comme tous les mots interrogatifs, **il se met à la place de la réponse** :\n\n他是**谁**？ → 他是**我哥哥**。\n**谁**是你的老师？ → **李老师**是我的老师。\n\nAvec 的, on obtient « à qui / de qui » : **谁的**书？ (le livre de qui ?).",
      "**谁** (shéi, sometimes pronounced shuí) means “who”. Like every question word, **it sits where the answer goes**:\n\n他是**谁**？ → 他是**我哥哥**。\n**谁**是你的老师？ → **李老师**是我的老师。\n\nWith 的 you get “whose”: **谁的**书？ (whose book?).",
    ),
    examples: [
      ex("他是谁？", "Tā shì shéi?", "Qui est-ce ?", "Who is he?"),
      ex("谁是老师？", "Shéi shì lǎoshī?", "Qui est le professeur ?", "Who is the teacher?"),
      ex("这是谁的手机？", "Zhè shì shéi de shǒujī?", "C'est le portable de qui ?", "Whose phone is this?"),
      ex("谁要喝茶？", "Shéi yào hē chá?", "Qui veut du thé ?", "Who wants tea?"),
    ],
    pitfalls: t(
      "✗ 谁是他吗？ → ✓ 他是谁？ (pas de 吗).\n✗ 谁书 → ✓ 谁的书.",
      "✗ 谁是他吗？ → ✓ 他是谁？ (no 吗).\n✗ 谁书 → ✓ 谁的书.",
    ),
    category: "【一04】【一46】疑问代词 谁",
  },

  // ───────────────────────── Lesson 4 ─────────────────────────
  {
    id: "hsk1-g13",
    level: 1,
    title: t("哪, 哪儿, 哪里, 哪些 : quel, où, lesquels", "哪, 哪儿, 哪里, 哪些: which, where, which ones"),
    pattern: "哪 + (nombre) + spéc. + Nom　/　Verbe + 哪儿",
    explanation: t(
      "**哪** (nǎ) = « quel ». Il se construit comme 这/那 : **哪 + spécificatif + nom** : 哪个, 哪本书. Pour la nationalité : 你是**哪国**人？ (« tu es une personne de quel pays ? »).\n\n**哪儿** (nǎr) et **哪里** (nǎli) = « où ». 哪儿 est plus courant dans le Nord (Pékin), 哪里 dans le Sud ; les deux sont corrects.\n\n**哪些** (nǎxiē) = « lesquels », au pluriel.\n\nAttention aux tons : **哪** nǎ (3e ton, question) ≠ **那** nà (4e ton, « ce…là »).",
      "**哪** (nǎ) = “which”. It works like 这/那: **哪 + measure word + noun**: 哪个, 哪本书. For nationality: 你是**哪国**人？ (“you are a person of which country?”).\n\n**哪儿** (nǎr) and **哪里** (nǎli) = “where”. 哪儿 is more northern (Beijing), 哪里 more southern; both are correct.\n\n**哪些** (nǎxiē) = “which ones”, plural.\n\nWatch the tones: **哪** nǎ (3rd tone, question) ≠ **那** nà (4th tone, “that”).",
    ),
    examples: [
      ex("你是哪国人？", "Nǐ shì nǎ guó rén?", "Tu es de quelle nationalité ?", "What's your nationality?"),
      ex("你们去哪儿？", "Nǐmen qù nǎr?", "Vous allez où ?", "Where are you going?"),
      ex("车站在哪里？", "Chēzhàn zài nǎli?", "Où est la gare ?", "Where is the station?"),
      ex("你喜欢哪个电影？", "Nǐ xǐhuan nǎge diànyǐng?", "Quel film tu aimes ?", "Which movie do you like?"),
      ex("你看了哪些书？", "Nǐ kànle nǎxiē shū?", "Quels livres as-tu lus ?", "Which books did you read?"),
    ],
    pitfalls: t(
      "✗ 哪儿你去？ → ✓ 你去哪儿？\n✗ 你是哪人？ → ✓ 你是哪国人？\n哪 (nǎ, question) ≠ 那 (nà, démonstratif).",
      "✗ 哪儿你去？ → ✓ 你去哪儿？\n✗ 你是哪人？ → ✓ 你是哪国人？\n哪 (nǎ, question) ≠ 那 (nà, “that”).",
    ),
    category: "【一04】【一46】疑问代词 哪、哪儿、哪里、哪些",
  },
  {
    id: "hsk1-g14",
    level: 1,
    title: t("也 (aussi) et 都 (tous) : toujours avant le verbe", "也 (also) and 都 (all): always before the verb"),
    pattern: "Sujet + 也 / 都 + Verbe / Adjectif",
    explanation: t(
      "**也** (yě, « aussi ») et **都** (dōu, « tous, tout ») sont des **adverbes** : ils se placent **après le sujet et avant le verbe**, jamais en début ou en fin de phrase.\n\n我**也**是学生 (moi aussi, je suis étudiant). 我们**都**是学生 (nous sommes tous étudiants).\n\nQuand on les combine, l'ordre est **也 + 都** : 他们**也都**是学生.\n\n**都** « regarde vers la gauche » : il résume ce qui est **avant** lui : 爸爸跟妈妈**都**不在家 (papa et maman ne sont pas là, ni l'un ni l'autre).\n\n**都不** = « aucun ne… » ; **不都** = « pas tous ». 我们**都不**去 (aucun de nous n'y va) ≠ 我们**不都**去 (on n'y va pas tous).\n\n也 relie aussi deux propositions : 这个房间很大，**也**很干净 (grande, et propre aussi).",
      "**也** (yě, “also”) and **都** (dōu, “all, both”) are **adverbs**: they go **after the subject and before the verb**, never at the start or end.\n\n我**也**是学生 (I'm a student too). 我们**都**是学生 (we're all students).\n\nCombined, the order is **也 + 都**: 他们**也都**是学生.\n\n**都** “looks left”: it sums up what comes **before** it: 爸爸跟妈妈**都**不在家 (neither Dad nor Mom is home).\n\n**都不** = “none”; **不都** = “not all”. 我们**都不**去 (none of us is going) ≠ 我们**不都**去 (not all of us are going).\n\n也 also links two clauses: 这个房间很大，**也**很干净 (big, and clean too).",
    ),
    examples: [
      ex("他是学生，我也是学生。", "Tā shì xuésheng, wǒ yě shì xuésheng.", "Il est étudiant, moi aussi.", "He's a student, and so am I."),
      ex("同学们都很认真。", "Tóngxuémen dōu hěn rènzhēn.", "Les élèves sont tous très sérieux.", "The students are all very diligent."),
      ex("我和弟弟都学习中文。", "Wǒ hé dìdi dōu xuéxí Zhōngwén.", "Mon petit frère et moi apprenons tous les deux le chinois.", "My younger brother and I both study Chinese."),
      ex("我喜欢唱歌，弟弟也喜欢唱歌。", "Wǒ xǐhuan chàng gē, dìdi yě xǐhuan chàng gē.", "J'aime chanter, mon petit frère aussi.", "I like singing, and so does my younger brother."),
      ex("那些东西都很贵。", "Nàxiē dōngxi dōu hěn guì.", "Ces choses-là sont toutes chères.", "Those things are all expensive."),
    ],
    pitfalls: t(
      "✗ 也我是学生 / 我是学生也 → ✓ 我也是学生.\n✗ 我们是都学生 → ✓ 我们都是学生.\n✗ 都我们去 → ✓ 我们都去 (都 après ce qu'il résume).",
      "✗ 也我是学生 / 我是学生也 → ✓ 我也是学生.\n✗ 我们是都学生 → ✓ 我们都是学生.\n✗ 都我们去 → ✓ 我们都去 (都 after what it sums up).",
    ),
    category: "【一10】【一13】【一39】范围副词“都”、关联副词“也”、并列复句",
  },
  {
    id: "hsk1-g15",
    level: 1,
    title: t("会 : savoir faire (capacité apprise)", "会: can, know how to (learned skill)"),
    pattern: "Sujet + (不) 会 + Verbe",
    explanation: t(
      "**会** (huì) exprime une **compétence acquise par apprentissage** : parler une langue, conduire, chanter, nager… C'est le « savoir » de « je sais nager ».\n\n我**会**说汉语 (je sais parler chinois). 他**不会**开车 (il ne sait pas conduire — ton : **bú huì**).\n\nOn peut nuancer avec **一点儿** (un peu) : 我会说**一点儿**汉语.\n\nQuestion : 你会写汉字**吗**？ ou 你**会不会**写汉字？ Réponse courte : **会** / **不会**.\n\n(会 peut aussi annoncer une probabilité future — « il va sûrement… » —, on le verra au niveau 2.)",
      "**会** (huì) expresses a **skill acquired by learning**: speaking a language, driving, singing, swimming… It's the “can” of “I can swim”.\n\n我**会**说汉语 (I can speak Chinese). 他**不会**开车 (he can't drive — tone: **bú huì**).\n\nSoften it with **一点儿** (a little): 我会说**一点儿**汉语.\n\nQuestion: 你会写汉字**吗**？ or 你**会不会**写汉字？ Short answer: **会** / **不会**.\n\n(会 can also express future likelihood — “will probably…” — covered at level 2.)",
    ),
    examples: [
      ex("我不会说中文。", "Wǒ bú huì shuō Zhōngwén.", "Je ne sais pas parler chinois.", "I can't speak Chinese."),
      ex("你会写汉字吗？", "Nǐ huì xiě Hànzì ma?", "Tu sais écrire les caractères chinois ?", "Can you write Chinese characters?"),
      ex("我会说一点儿汉语。", "Wǒ huì shuō yìdiǎnr Hànyǔ.", "Je parle un peu chinois.", "I speak a little Chinese."),
      ex("我哥哥会开车。", "Wǒ gēge huì kāichē.", "Mon grand frère sait conduire.", "My older brother can drive."),
    ],
    pitfalls: t(
      "✗ 我会一点儿说汉语 → ✓ 我会说一点儿汉语 (一点儿 va devant l'objet).\n✗ 我能说汉语 pour une compétence de base → préfère ✓ 我会说汉语 (voir 能).",
      "✗ 我会一点儿说汉语 → ✓ 我会说一点儿汉语 (一点儿 goes before the object).\n✗ 我能说汉语 for a basic skill → prefer ✓ 我会说汉语 (see 能).",
    ),
    category: "【一02】能愿动词“会”",
  },
  {
    id: "hsk1-g16",
    level: 1,
    title: t("La négation 不", "Negation with 不"),
    pattern: "Sujet + 不 + Verbe / Adjectif",
    explanation: t(
      "**不** (bù) nie le **présent**, le **futur**, les **habitudes** et les **états** : 我**不**喝茶 (je ne bois pas de thé), 今天**不**冷 (il ne fait pas froid aujourd'hui), 他明天**不**去 (il n'y va pas demain).\n\nIl se place **juste avant** le verbe ou l'adjectif, et devant les verbes modaux : **不会**, **不想**.\n\n**Changement de ton** : devant un 4e ton, 不 devient **bú** : 不是 **bú** shì, 不去 **bú** qù, 不对 **bú** duì. Sinon il reste **bù** : 不好 bù hǎo, 不忙 bù máng.\n\nDeux exceptions à retenir : 有 se nie avec **没** (没有), et pour une action **passée** on utilise **没** (on le verra plus tard).",
      "**不** (bù) negates the **present**, the **future**, **habits** and **states**: 我**不**喝茶 (I don't drink tea), 今天**不**冷 (it's not cold today), 他明天**不**去 (he isn't going tomorrow).\n\nIt goes **right before** the verb or adjective, and before modal verbs: **不会**, **不想**.\n\n**Tone change**: before a 4th tone, 不 becomes **bú**: 不是 **bú** shì, 不去 **bú** qù, 不对 **bú** duì. Otherwise it stays **bù**: 不好 bù hǎo, 不忙 bù máng.\n\nTwo exceptions: 有 is negated with **没** (没有), and **past** actions use **没** (covered later).",
    ),
    examples: [
      ex("今天不热。", "Jīntiān bú rè.", "Il ne fait pas chaud aujourd'hui.", "It isn't hot today."),
      ex("他不去医院。", "Tā bú qù yīyuàn.", "Il ne va pas à l'hôpital.", "He's not going to the hospital."),
      ex("我不喜欢看电视。", "Wǒ bù xǐhuan kàn diànshì.", "Je n'aime pas regarder la télé.", "I don't like watching TV."),
      ex("他不吃包子。", "Tā bù chī bāozi.", "Il ne mange pas de baos.", "He doesn't eat steamed buns."),
    ],
    pitfalls: t(
      "✗ 我不有 → ✓ 我没有.\n✗ 我喝不茶 → ✓ 我不喝茶 (不 avant le verbe).\nTon : ✗ bù shì → ✓ bú shì.",
      "✗ 我不有 → ✓ 我没有.\n✗ 我喝不茶 → ✓ 我不喝茶 (不 before the verb).\nTone: ✗ bù shì → ✓ bú shì.",
    ),
    category: "【一14】否定副词“不”",
  },

  // ───────────────────────── Lesson 5 ─────────────────────────
  {
    id: "hsk1-g17",
    level: 1,
    title: t("Dire l'heure : 点, 分, 半, 差", "Telling time: 点, 分, 半, 差"),
    pattern: "… 点 (+ … 分 / 半)　/　差 + … 分 + … 点",
    explanation: t(
      "L'heure se dit avec **点** (diǎn, « heure » sur l'horloge) et **分** (fēn, minute) :\n• 2 h 00 = **两点** (on dit 两, pas 二 !)\n• 2 h 25 = 两点二十五（分）\n• 3 h 05 = 三点**零**五（分）\n• 5 h 30 = 五点**半**\n• 7 h 58 = **差**两分八点 (« il manque deux minutes pour huit heures »)\n\nLa question : **现在几点？** (Quelle heure est-il ?)\n\nPas d'heure « 24 h » dans la conversation : on précise le moment de la journée **avant** : **早上**八点 (8 h du matin), **下午**三点 (15 h), **晚上**七点 (19 h).",
      "Time uses **点** (diǎn, “o'clock”) and **分** (fēn, minute):\n• 2:00 = **两点** (两, not 二!)\n• 2:25 = 两点二十五（分）\n• 3:05 = 三点**零**五（分）\n• 5:30 = 五点**半**\n• 7:58 = **差**两分八点 (“two minutes short of eight”)\n\nThe question: **现在几点？** (What time is it?)\n\nPeople rarely use the 24-hour clock in speech: put the part of the day **first**: **早上**八点 (8 a.m.), **下午**三点 (3 p.m.), **晚上**七点 (7 p.m.).",
    ),
    examples: [
      ex("现在几点？", "Xiànzài jǐ diǎn?", "Il est quelle heure ?", "What time is it?"),
      ex("现在两点二十五。", "Xiànzài liǎng diǎn èrshíwǔ.", "Il est 2 h 25.", "It's 2:25."),
      ex("我早上七点半起床。", "Wǒ zǎoshang qī diǎn bàn qǐchuáng.", "Je me lève à 7 h 30.", "I get up at 7:30 a.m."),
      ex("他十点睡觉。", "Tā shí diǎn shuìjiào.", "Il se couche à 10 h.", "He goes to bed at ten."),
      ex("现在差五分九点。", "Xiànzài chà wǔ fēn jiǔ diǎn.", "Il est 9 h moins 5.", "It's five to nine."),
    ],
    pitfalls: t(
      "✗ 二点 → ✓ 两点.\n✗ 半八点 → ✓ 八点半.\n✗ 八点下午 → ✓ 下午八点 → mieux : ✓ 晚上八点 (du plus grand au plus petit).",
      "✗ 二点 → ✓ 两点.\n✗ 半八点 → ✓ 八点半.\n✗ 八点下午 → ✓ 晚上八点 (bigger unit first).",
    ),
    category: "【一44】时间表示法 (钟点)",
  },
  {
    id: "hsk1-g18",
    level: 1,
    title: t("Les dates : année, mois, jour, jour de la semaine", "Dates: year, month, day, weekday"),
    pattern: "… 年 … 月 … 日/号, 星期 …",
    explanation: t(
      "La date chinoise va **du plus grand au plus petit** — l'inverse du français : **2026年9月23日，星期三**.\n\n• **L'année** se lit chiffre par chiffre : 2026年 = èr líng èr liù nián.\n• **Les mois** sont numérotés : 一月 (janvier)… 十二月 (décembre).\n• **Le jour** : 日 (rì) à l'écrit, **号** (hào) à l'oral : 七月十号.\n• **La semaine** : 星期 + chiffre : 星期一 (lundi)… 星期六 (samedi). Dimanche = **星期日** ou **星期天** (jamais 星期七 !).\n\nPour l'âge, la date, l'heure ou le jour de la semaine, on n'a **pas besoin de 是** dans une phrase affirmative : 今天星期三 (« aujourd'hui mercredi »). En revanche, la négation demande 不是 : 今天**不是**星期三.\n\nQuestions : 今天**几**月**几**号？ 今天星期**几**？",
      "Chinese dates go **from biggest to smallest**: **2026年9月23日，星期三**.\n\n• **The year** is read digit by digit: 2026年 = èr líng èr liù nián.\n• **Months** are numbered: 一月 (January)… 十二月 (December).\n• **The day**: 日 (rì) in writing, **号** (hào) in speech: 七月十号.\n• **Weekdays**: 星期 + number: 星期一 (Monday)… 星期六 (Saturday). Sunday = **星期日** or **星期天** (never 星期七!).\n\nFor age, dates, clock time or weekdays, you **don't need 是** in a positive sentence: 今天星期三 (“today Wednesday”). The negative, however, needs 不是: 今天**不是**星期三.\n\nQuestions: 今天**几**月**几**号？ 今天星期**几**？",
    ),
    examples: [
      ex("今天几月几号？", "Jīntiān jǐ yuè jǐ hào?", "On est le combien aujourd'hui ?", "What's the date today?"),
      ex("今天七月十号，星期一。", "Jīntiān qīyuè shí hào, xīngqīyī.", "Aujourd'hui, c'est lundi 10 juillet.", "Today is Monday, July 10th."),
      ex("我的生日是五月八号。", "Wǒ de shēngrì shì wǔyuè bā hào.", "Mon anniversaire, c'est le 8 mai.", "My birthday is May 8th."),
      ex("明天不是星期天。", "Míngtiān bú shì xīngqītiān.", "Demain, ce n'est pas dimanche.", "Tomorrow isn't Sunday."),
    ],
    pitfalls: t(
      "✗ 十号七月 → ✓ 七月十号.\n✗ 星期七 → ✓ 星期日 / 星期天.\n✗ 七个月 = « sept mois » (une durée) ≠ ✓ 七月 = « juillet ».",
      "✗ 十号七月 → ✓ 七月十号.\n✗ 星期七 → ✓ 星期日 / 星期天.\n✗ 七个月 = “seven months” (a duration) ≠ ✓ 七月 = “July”.",
    ),
    category: "【一44】时间表示法 (年、月、日、星期)",
  },
  {
    id: "hsk1-g19",
    level: 1,
    title: t("Place du temps et du lieu : avant le verbe", "Position of time and place: before the verb"),
    pattern: "Sujet + Temps + 在 + Lieu + Verbe (+ Objet)",
    explanation: t(
      "En français, on met souvent le temps et le lieu **à la fin** : « Je mange au restaurant demain ». En chinois, ils se placent **avant le verbe** :\n\n我**明天****在饭店**吃饭。\n\nL'ordre de base : **Sujet → Quand → Où → Action**. Retiens la formule « **qui, quand, où, quoi** ».\n\nLe mot de temps peut aussi ouvrir la phrase pour le mettre en valeur : **明天**我去北京 = 我**明天**去北京.\n\nMais il ne va **jamais à la fin** : ✗ 我去北京明天.",
      "In English, time and place usually go **at the end**: “I'm eating at the restaurant tomorrow”. In Chinese they go **before the verb**:\n\n我**明天****在饭店**吃饭。\n\nBasic order: **Subject → When → Where → Action**. Remember “**who, when, where, what**”.\n\nThe time word can also open the sentence for emphasis: **明天**我去北京 = 我**明天**去北京.\n\nBut it **never goes at the end**: ✗ 我去北京明天.",
    ),
    examples: [
      ex("我们下午去吧。", "Wǒmen xiàwǔ qù ba.", "Allons-y cet après-midi.", "Let's go this afternoon."),
      ex("我明天去北京。", "Wǒ míngtiān qù Běijīng.", "Je vais à Pékin demain.", "I'm going to Beijing tomorrow."),
      ex("他晚上在家看电视。", "Tā wǎnshang zài jiā kàn diànshì.", "Le soir, il regarde la télé à la maison.", "He watches TV at home in the evening."),
      ex("她在网上买了两本书。", "Tā zài wǎngshàng mǎile liǎng běn shū.", "Elle a acheté deux livres en ligne.", "She bought two books online."),
    ],
    pitfalls: t(
      "✗ 我去北京明天 → ✓ 我明天去北京.\n✗ 我吃饭在饭店 → ✓ 我在饭店吃饭.\n✗ 我在家晚上看书 → ✓ 我晚上在家看书 (temps avant lieu).",
      "✗ 我去北京明天 → ✓ 我明天去北京.\n✗ 我吃饭在饭店 → ✓ 我在饭店吃饭.\n✗ 我在家晚上看书 → ✓ 我晚上在家看书 (time before place).",
    ),
    category: "【一28】状语 (时间、处所)",
  },

  // ───────────────────────── Lesson 6 ─────────────────────────
  {
    id: "hsk1-g20",
    level: 1,
    title: t("先…再… (d'abord… ensuite) et 马上 (tout de suite)", "先…再… (first… then) and 马上 (right away)"),
    pattern: "Sujet + 先 + V1，再 + V2",
    explanation: t(
      "**先** (xiān) = « d'abord » ; **再** (zài) = « ensuite, puis ». Ces deux adverbes se placent **devant le verbe** pour ordonner deux actions : 我**先**吃饭，**再**去学校.\n\n**再** veut aussi dire « de nouveau, encore » pour une action **à venir** : 我们明天**再**去看吧 (retournons le voir demain), 请**再**说一次 (répétez, s'il vous plaît).\n\n**马上** (mǎshàng) = « tout de suite, immédiatement » : 医生**马上**来 (le médecin arrive tout de suite).\n\nTous se placent **après le sujet**, jamais en fin de phrase.",
      "**先** (xiān) = “first”; **再** (zài) = “then”. Both adverbs go **before the verb** to order two actions: 我**先**吃饭，**再**去学校.\n\n**再** also means “again” for a **future** action: 我们明天**再**去看吧 (let's go and see it again tomorrow), 请**再**说一次 (please say it again).\n\n**马上** (mǎshàng) = “right away, immediately”: 医生**马上**来 (the doctor is coming right away).\n\nAll of them go **after the subject**, never at the end of the sentence.",
    ),
    examples: [
      ex("我先洗手，再吃饭。", "Wǒ xiān xǐ shǒu, zài chī fàn.", "Je me lave les mains d'abord, puis je mange.", "I wash my hands first, then eat."),
      ex("老师，我先说吧。", "Lǎoshī, wǒ xiān shuō ba.", "Professeur, je commence, d'accord ?", "Teacher, let me go first."),
      ex("今天的电影太好看了，我们明天再去看吧。", "Jīntiān de diànyǐng tài hǎokàn le, wǒmen míngtiān zài qù kàn ba.", "Le film d'aujourd'hui était génial, retournons le voir demain.", "Today's movie was great, let's go and see it again tomorrow."),
      ex("医生马上来。", "Yīshēng mǎshàng lái.", "Le médecin arrive tout de suite.", "The doctor is coming right away."),
    ],
    pitfalls: t(
      "✗ 我吃饭先 → ✓ 我先吃饭.\n✗ 马上我来 pour un ordre neutre → ✓ 我马上来.\n再 = répétition **future** ; pour une répétition passée on utilise 又 (niveau 2).",
      "✗ 我吃饭先 → ✓ 我先吃饭.\n✗ 马上我来 as a neutral statement → ✓ 我马上来.\n再 = **future** repetition; past repetition uses 又 (level 2).",
    ),
    category: "【一11】【一12】时间副词“先、马上”、重复副词“再”",
  },
  {
    id: "hsk1-g21",
    level: 1,
    title: t("La fréquence : 每, 常常, 有时", "Frequency: 每, 常常, 有时"),
    pattern: "每 + (spéc.) + Nom (+ 都)　/　Sujet + 常常 / 有时 + Verbe",
    explanation: t(
      "**每** (měi) = « chaque ». Avec **天** (jour) et **年** (an), pas de spécificatif : **每天**, **每年**. Sinon il en faut un : **每个**星期, **每个**人. On ajoute souvent **都** après : 每个人**都**有手机.\n\n**常** / **常常** (cháng / chángcháng) = « souvent ». **有时** / **有时候** (yǒushí / yǒu shíhou) = « parfois ». Ce sont des adverbes : **avant le verbe**. 有时候 peut aussi ouvrir la phrase.\n\nNégation : on dit plutôt **不常** (pas souvent) : 我不常去.\n\nAstuce : pour parler de ton quotidien, combine avec l'heure : 我**每天**七点起床.",
      "**每** (měi) = “every”. With **天** (day) and **年** (year), no measure word: **每天**, **每年**. Otherwise you need one: **每个**星期, **每个**人. 都 often follows: 每个人**都**有手机.\n\n**常** / **常常** (cháng / chángcháng) = “often”. **有时** / **有时候** (yǒushí / yǒu shíhou) = “sometimes”. They're adverbs: **before the verb**. 有时候 can also start the sentence.\n\nNegative: say **不常** (not often): 我不常去.\n\nTip: to describe your routine, combine with clock time: 我**每天**七点起床.",
    ),
    examples: [
      ex("我每天七点起床。", "Wǒ měi tiān qī diǎn qǐchuáng.", "Je me lève tous les jours à 7 h.", "I get up at seven every day."),
      ex("他常去饭店吃饭。", "Tā cháng qù fàndiàn chī fàn.", "Il va souvent manger au restaurant.", "He often eats at restaurants."),
      ex("她常常不吃早饭。", "Tā chángcháng bù chī zǎofàn.", "Elle saute souvent le petit-déjeuner.", "She often skips breakfast."),
      ex("他有时晚上上课。", "Tā yǒushí wǎnshang shàngkè.", "Il a parfois cours le soir.", "He sometimes has class in the evening."),
      ex("每个人都有手机。", "Měi ge rén dōu yǒu shǒujī.", "Tout le monde a un portable.", "Everyone has a phone."),
    ],
    pitfalls: t(
      "✗ 每个天 → ✓ 每天.\n✗ 我去常常 → ✓ 我常常去.\n✗ 每星期 → ✓ 每个星期 (à l'oral standard).",
      "✗ 每个天 → ✓ 每天.\n✗ 我去常常 → ✓ 我常常去.\n✗ 每星期 → ✓ 每个星期 (in standard speech).",
    ),
    category: "【一11】【一12】时间副词“有时”、频率副词“常、常常”",
  },
  {
    id: "hsk1-g22",
    level: 1,
    title: t("L'action en cours : 在 / 正在 / 正 … 呢", "Actions in progress: 在 / 正在 / 正 … 呢"),
    pattern: "Sujet + (正)在 + Verbe (+ Objet) + (呢)",
    explanation: t(
      "Pour dire qu'une action est **en train de se dérouler**, on place **在** (zài), **正在** (zhèngzài) ou **正** (zhèng) devant le verbe, et on ajoute souvent **呢** (ne) à la fin :\n\n我**在**看电视**呢** (je suis en train de regarder la télé).\n\n• **在** : le plus courant.\n• **正在** : insiste sur « précisément en ce moment ».\n• **正 … 呢** : 正 s'emploie presque toujours avec 呢.\n• **呢** seul suffit parfois à l'oral : 我洗衣服**呢**.\n\nNégation : 我**没**（在）看电视 (je ne suis pas en train de regarder la télé).\n\nCe n'est pas un « temps » : ça marche aussi pour le passé, si le contexte le précise (« quand le prof est entré, je… »).",
      "To say an action is **in progress**, put **在** (zài), **正在** (zhèngzài) or **正** (zhèng) before the verb, often with **呢** (ne) at the end:\n\n我**在**看电视**呢** (I'm watching TV).\n\n• **在**: the most common.\n• **正在**: stresses “right at this moment”.\n• **正 … 呢**: 正 almost always comes with 呢.\n• **呢** alone is sometimes enough in speech: 我洗衣服**呢**.\n\nNegative: 我**没**（在）看电视 (I'm not watching TV).\n\nIt isn't a tense: it also works in the past if context says so (“when the teacher came in, I was…”).",
    ),
    examples: [
      ex("我在看电视呢。", "Wǒ zài kàn diànshì ne.", "Je suis en train de regarder la télé.", "I'm watching TV."),
      ex("外边正在下雨。", "Wàibian zhèngzài xià yǔ.", "Il est en train de pleuvoir dehors.", "It's raining outside."),
      ex("你等一下儿，他正吃饭呢。", "Nǐ děng yíxiàr, tā zhèng chī fàn ne.", "Attends un peu, il est en train de manger.", "Wait a moment, he's eating."),
      ex("孩子在睡觉，你别说话。", "Háizi zài shuìjiào, nǐ bié shuōhuà.", "L'enfant dort, ne parle pas.", "The child is sleeping, don't talk."),
      ex("你在做什么？——我洗衣服呢。", "Nǐ zài zuò shénme? — Wǒ xǐ yīfu ne.", "Tu fais quoi ? — Je lave du linge.", "What are you doing? — I'm doing laundry."),
    ],
    pitfalls: t(
      "✗ 我在是学生 / 我在有 → impossible : 是, 有, 知道, 喜欢 ne décrivent pas une action en cours.\n✗ 我不在看书 → ✓ 我没在看书.\nNe confonds pas avec 在 + lieu : 我在家 (je suis à la maison).",
      "✗ 我在是学生 / 我在有 → impossible: 是, 有, 知道, 喜欢 aren't ongoing actions.\n✗ 我不在看书 → ✓ 我没在看书.\nDon't confuse with 在 + place: 我在家 (I'm at home).",
    ),
    category: "【一11】【一22】【一42】进行态 (在、正、正在…呢)",
  },

  // ───────────────────────── Lesson 7 ─────────────────────────
  {
    id: "hsk1-g23",
    level: 1,
    title: t("想 et 要 : vouloir, avoir envie, aller faire", "想 and 要: want, would like, be going to"),
    pattern: "Sujet + 想 / 要 + Verbe　/　要 + Nom",
    explanation: t(
      "**想** (xiǎng) + verbe = « avoir envie de, aimerait » — c'est doux et poli : 我**想**喝水 (j'aimerais boire de l'eau).\n\n**要** (yào) + verbe = « vouloir » (plus ferme) ou « aller faire, devoir faire » (un projet décidé) : 他**要**去书店 (il va à la librairie). 明天我**要**考试 (demain, j'ai un examen).\n\n**要** + nom = « vouloir quelque chose », très utilisé pour **commander** : 我**要**一杯茶 (je prends un thé).\n\n**Négation** : pour « je ne veux pas », dis **不想** : 我不想去. Évite 不要 + verbe dans ce sens : **不要** + verbe signifie plutôt « ne… pas ! » (interdiction).\n\n想 + personne = « penser à, manquer » : 我**想**妈妈 (maman me manque).",
      "**想** (xiǎng) + verb = “feel like, would like” — soft and polite: 我**想**喝水 (I'd like some water).\n\n**要** (yào) + verb = “want” (firmer) or “be going to / have to” (a decided plan): 他**要**去书店 (he's going to the bookstore). 明天我**要**考试 (I have an exam tomorrow).\n\n**要** + noun = “want something”, used all the time for **ordering**: 我**要**一杯茶 (I'll have a tea).\n\n**Negative**: for “I don't want to”, say **不想**: 我不想去. Avoid 不要 + verb in this sense: **不要** + verb usually means “don't!” (a prohibition).\n\n想 + person = “miss”: 我**想**妈妈 (I miss Mom).",
    ),
    examples: [
      ex("我想学中文。", "Wǒ xiǎng xué Zhōngwén.", "J'aimerais apprendre le chinois.", "I'd like to learn Chinese."),
      ex("他要去书店。", "Tā yào qù shūdiàn.", "Il va à la librairie.", "He's going to the bookstore."),
      ex("你好，我要两个本子。", "Nǐ hǎo, wǒ yào liǎng ge běnzi.", "Bonjour, je voudrais deux cahiers.", "Hello, I'd like two notebooks."),
      ex("我不想喝茶。", "Wǒ bù xiǎng hē chá.", "Je n'ai pas envie de thé.", "I don't feel like tea."),
      ex("你想家吗？", "Nǐ xiǎng jiā ma?", "Ta famille te manque ?", "Are you homesick?"),
    ],
    pitfalls: t(
      "« Je ne veux pas y aller » : ✗ 我不要去 (sonne capricieux) → ✓ 我不想去.\n✗ 我想要去 est correct mais lourd au début ; ✓ 我想去 suffit.",
      "“I don't want to go”: ✗ 我不要去 (sounds bratty) → ✓ 我不想去.\n我想要去 is correct but heavy for now; ✓ 我想去 is enough.",
    ),
    category: "【一03】能愿动词“想、要”",
  },
  {
    id: "hsk1-g24",
    level: 1,
    title: t("La particule 吧 : proposer, supposer", "The particle 吧: suggestions and assumptions"),
    pattern: "Phrase + 吧",
    explanation: t(
      "**吧** (ba) en fin de phrase adoucit ce qu'on dit. Deux usages principaux :\n\n1. **Proposer / inviter** (≈ « allez, on… ! ») : 我们走**吧** (allons-y). 你先说**吧** (vas-y, commence).\n\n2. **Supposer et demander confirmation** (≈ « …, non ? ») : 你是马克**吧**？ (tu es Marc, c'est ça ?). Avec 吗, on ne sait pas ; avec 吧, on pense déjà connaître la réponse.\n\nOn l'entend aussi dans **好吧** (bon, d'accord).",
      "**吧** (ba) at the end of a sentence softens it. Two main uses:\n\n1. **Suggesting / inviting** (≈ “let's…”): 我们走**吧** (let's go). 你先说**吧** (go ahead, you first).\n\n2. **Assuming and checking** (≈ “…, right?”): 你是马克**吧**？ (you're Marc, right?). With 吗 you don't know; with 吧 you think you already know.\n\nYou'll also hear **好吧** (OK, fine).",
    ),
    examples: [
      ex("我们走吧。", "Wǒmen zǒu ba.", "Allons-y.", "Let's go."),
      ex("我们下午去吧。", "Wǒmen xiàwǔ qù ba.", "Allons-y cet après-midi.", "Let's go this afternoon."),
      ex("你是王明吧？", "Nǐ shì Wáng Míng ba?", "Tu es Wang Ming, c'est ça ?", "You're Wang Ming, right?"),
      ex("你累了吧？休息一下儿吧。", "Nǐ lèi le ba? Xiūxi yíxiàr ba.", "Tu es fatigué, non ? Repose-toi un peu.", "You must be tired. Take a little rest."),
    ],
    pitfalls: t(
      "✗ 我们走吗？ pour proposer → ✓ 我们走吧！ (吗 poserait une vraie question : « on part ? »).\n✗ 吧 avec un mot interrogatif : 你去哪儿吧？ → ✓ 你去哪儿？",
      "✗ 我们走吗？ to suggest → ✓ 我们走吧！ (吗 asks a real question: “are we leaving?”).\n✗ 吧 with a question word: 你去哪儿吧？ → ✓ 你去哪儿？",
    ),
    category: "【一22】语气助词“吧”",
  },
  {
    id: "hsk1-g25",
    level: 1,
    title: t("L'impératif poli avec 请", "Polite requests with 请"),
    pattern: "请 + Verbe (+ Objet)　/　请 + personne + Verbe",
    explanation: t(
      "**请** (qǐng) placé devant un verbe transforme un ordre en **invitation polie**, comme « je vous en prie » ou « s'il vous plaît » : **请进** (entrez), **请坐** (asseyez-vous), **请喝茶** (prenez du thé).\n\n**请问** (qǐngwèn) = « excusez-moi, puis-je vous demander… » : c'est la formule pour aborder quelqu'un avant une question. 请问，洗手间在哪儿？\n\n**请 + personne + verbe** = « inviter quelqu'un à » (souvent en payant) : 我**请**你吃饭 (je t'invite au restaurant).\n\nUne phrase impérative peut aussi être sans 请 : 你认真写！ (écris soigneusement !).",
      "**请** (qǐng) in front of a verb turns an order into a **polite invitation**, like “please”: **请进** (come in), **请坐** (have a seat), **请喝茶** (have some tea).\n\n**请问** (qǐngwèn) = “excuse me, may I ask…”: the opener before asking a stranger something. 请问，洗手间在哪儿？\n\n**请 + person + verb** = “invite someone to” (often paying): 我**请**你吃饭 (dinner's on me).\n\nImperatives can also go without 请: 你认真写！ (write carefully!).",
    ),
    examples: [
      ex("请进！", "Qǐng jìn!", "Entrez, je vous en prie !", "Please come in!"),
      ex("请坐，请喝茶。", "Qǐng zuò, qǐng hē chá.", "Asseyez-vous, prenez du thé.", "Please sit down and have some tea."),
      ex("请问，洗手间在哪儿？", "Qǐngwèn, xǐshǒujiān zài nǎr?", "Excusez-moi, où sont les toilettes ?", "Excuse me, where's the restroom?"),
      ex("今天我请你吃饭。", "Jīntiān wǒ qǐng nǐ chī fàn.", "Aujourd'hui, c'est moi qui t'invite à manger.", "Today, dinner's on me."),
    ],
    pitfalls: t(
      "✗ 请，洗手间在哪儿？ → ✓ 请问，洗手间在哪儿？ (请 seul ne sert pas à interpeller).\n✗ 进请 → ✓ 请进 (请 toujours devant).",
      "✗ 请，洗手间在哪儿？ → ✓ 请问，洗手间在哪儿？ (请 alone doesn't mean “excuse me”).\n✗ 进请 → ✓ 请进 (请 always comes first).",
    ),
    category: "【一34】祈使句",
  },

  // ───────────────────────── Lesson 8 ─────────────────────────
  {
    id: "hsk1-g26",
    level: 1,
    title: t("Les prix : 块, 毛, 元, 分", "Prices: 块, 毛, 元, 分"),
    pattern: "… 块 (… 毛 … 分)　/　… 多少钱？",
    explanation: t(
      "La monnaie chinoise est le **yuan** (人民币). On a trois unités :\n• **元** (yuán) à l'écrit = **块** (kuài) à l'oral : 1 yuan\n• **角** à l'écrit = **毛** (máo) à l'oral : 0,10 yuan\n• **分** (fēn) : 0,01 yuan (rare aujourd'hui)\n\nOn lit du plus grand au plus petit, et on **omet souvent la dernière unité** : 9,30 元 = 九块三（毛）; 15,63 元 = 十五块六毛三（分）.\n\nUn « trou » se marque avec **零** : 25,08 元 = 二十五块**零**八（分）; 105 元 = 一百**零**五块.\n\nLa question : **多少钱？** (Combien ça coûte ?) — 这个**多少钱**？ On ajoute souvent 钱 : 十块**钱**.",
      "Chinese money is the **yuan** (RMB). Three units:\n• **元** (yuán) in writing = **块** (kuài) in speech: 1 yuan\n• **角** in writing = **毛** (máo) in speech: 0.10 yuan\n• **分** (fēn): 0.01 yuan (rare today)\n\nRead from biggest to smallest, and **the last unit is often dropped**: ¥9.30 = 九块三（毛）; ¥15.63 = 十五块六毛三（分）.\n\nA gap is marked with **零**: ¥25.08 = 二十五块**零**八（分）; ¥105 = 一百**零**五块.\n\nThe question: **多少钱？** (How much?) — 这个**多少钱**？ 钱 is often added: 十块**钱**.",
    ),
    examples: [
      ex("这个多少钱？", "Zhège duōshao qián?", "Combien coûte celui-ci ?", "How much is this one?"),
      ex("九块三。", "Jiǔ kuài sān.", "9,30 yuans.", "9.30 yuan."),
      ex("那个十五块六毛三。", "Nàge shíwǔ kuài liù máo sān.", "Celui-là coûte 15,63 yuans.", "That one is 15.63 yuan."),
      ex("这个书包一百零五块。", "Zhège shūbāo yìbǎi líng wǔ kuài.", "Ce cartable coûte 105 yuans.", "This schoolbag costs 105 yuan."),
      ex("两块钱。", "Liǎng kuài qián.", "Deux yuans.", "Two yuan."),
    ],
    pitfalls: t(
      "✗ 二块 → ✓ 两块 (块 est un spécificatif).\n✗ 这个是多少钱？ → ✓ 这个多少钱？ (pas besoin de 是).\n✗ 十五块和六毛 → ✓ 十五块六毛.",
      "✗ 二块 → ✓ 两块 (块 is a measure word).\n✗ 这个是多少钱？ → ✓ 这个多少钱？ (no 是 needed).\n✗ 十五块和六毛 → ✓ 十五块六毛.",
    ),
    category: "【一43】钱数表示法",
  },
  {
    id: "hsk1-g27",
    level: 1,
    title: t("Les démonstratifs : 这, 那, 这儿, 那儿, 这些, 那些, 别的, 有的", "Demonstratives: 这, 那, 这儿, 那儿, 这些, 那些, 别的, 有的"),
    pattern: "这 / 那 + (nombre) + spéc. + Nom",
    explanation: t(
      "**这** (zhè, « ce…ci ») et **那** (nà, « ce…là ») : seuls, ils signifient « ceci / cela » : **这**是我的书. Devant un nom, il faut un **spécificatif** : **这个**人, **那本**书. À l'oral, on entend souvent zhèi et nèi.\n\n• **这儿 / 这里** = ici ; **那儿 / 那里** = là-bas.\n• **这些 / 那些** = ces… (pluriel) : 这些书.\n• **别的** = autre(s) : 你还要**别的**东西吗？ (vous voulez autre chose ?)\n• **有的** = certains : **有的**同学在休息，**有的**同学在看书 (certains élèves se reposent, d'autres lisent).",
      "**这** (zhè, “this”) and **那** (nà, “that”): alone, they mean “this / that”: **这**是我的书. Before a noun they need a **measure word**: **这个**人, **那本**书. In speech you'll often hear zhèi and nèi.\n\n• **这儿 / 这里** = here; **那儿 / 那里** = there.\n• **这些 / 那些** = these / those: 这些书.\n• **别的** = other: 你还要**别的**东西吗？ (anything else?)\n• **有的** = some: **有的**同学在休息，**有的**同学在看书 (some students are resting, others are reading).",
    ),
    examples: [
      ex("这是谁的手机？", "Zhè shì shéi de shǒujī?", "C'est le portable de qui ?", "Whose phone is this?"),
      ex("她喜欢那个书包。", "Tā xǐhuan nàge shūbāo.", "Elle aime ce cartable-là.", "She likes that schoolbag."),
      ex("你坐这里，弟弟坐那里。", "Nǐ zuò zhèli, dìdi zuò nàli.", "Assieds-toi ici, ton petit frère là-bas.", "You sit here, your little brother sits there."),
      ex("这些书很新。", "Zhèxiē shū hěn xīn.", "Ces livres sont tout neufs.", "These books are brand new."),
      ex("你还要别的东西吗？", "Nǐ hái yào bié de dōngxi ma?", "Vous désirez autre chose ?", "Would you like anything else?"),
    ],
    pitfalls: t(
      "✗ 这些个书 → ✓ 这些书 (些 remplace le spécificatif).\n✗ 我去这儿 est bizarre → ✓ 我来这儿 / 我在这儿.\n哪 (nǎ, quel ?) ≠ 那 (nà, ce…là).",
      "✗ 这些个书 → ✓ 这些书 (些 replaces the measure word).\n✗ 我去这儿 sounds odd → ✓ 我来这儿 / 我在这儿.\n哪 (nǎ, which?) ≠ 那 (nà, that).",
    ),
    category: "【一06】指示代词",
  },
  {
    id: "hsk1-g28",
    level: 1,
    title: t("La question affirmative-négative : V 不 V / V 没 V", "Affirmative-negative questions: V 不 V / V 没 V"),
    pattern: "Sujet + V 不 V (+ Objet)？　/　Sujet + V 没 V？ / … 了没有？",
    explanation: t(
      "Une autre façon de poser une question oui/non : on dit le verbe (ou l'adjectif) **à la forme affirmative puis négative** : 你**去不去**？ (tu y vas ou pas ?). 这本书**贵不贵**？ (ce livre, il est cher ?).\n\nLe 不 du milieu est **atone** : qù bu qù.\n\nPour un verbe de deux syllabes, on peut couper : 好看不好看 ou 好不好看.\n\nPour une action **passée**, on utilise **没** : 他**去没去**图书馆？ ou 他去图书馆**了没有**？ (est-il allé à la bibliothèque ?).\n\nComme cette forme est déjà une question, **pas de 吗** !",
      "Another way to ask a yes/no question: say the verb (or adjective) **in positive then negative form**: 你**去不去**？ (are you going or not?). 这本书**贵不贵**？ (is this book expensive?).\n\nThe middle 不 is **toneless**: qù bu qù.\n\nWith two-syllable words you can split: 好看不好看 or 好不好看.\n\nFor a **past** action, use **没**: 他**去没去**图书馆？ or 他去图书馆**了没有**？ (did he go to the library?).\n\nThis form is already a question, so **no 吗**!",
    ),
    examples: [
      ex("你吃不吃包子？", "Nǐ chī bu chī bāozi?", "Tu manges des baos ou pas ?", "Do you eat steamed buns or not?"),
      ex("这本书贵不贵？", "Zhè běn shū guì bu guì?", "Ce livre est cher ?", "Is this book expensive?"),
      ex("电影好看不好看？", "Diànyǐng hǎokàn bu hǎokàn?", "Le film était bien ?", "Was the movie good?"),
      ex("你是不是老师？", "Nǐ shì bu shì lǎoshī?", "Tu es professeur, oui ou non ?", "Are you a teacher or not?"),
      ex("他回家了没有？", "Tā huí jiā le méiyǒu?", "Il est rentré à la maison ?", "Has he gone home?"),
    ],
    pitfalls: t(
      "✗ 你去不去吗？ → ✓ 你去不去？\n✗ 这个很贵不贵？ → ✓ 这个贵不贵？ (pas de 很).\n✗ 你有不有？ → ✓ 你有没有？",
      "✗ 你去不去吗？ → ✓ 你去不去？\n✗ 这个很贵不贵？ → ✓ 这个贵不贵？ (no 很).\n✗ 你有不有？ → ✓ 你有没有？",
    ),
    category: "【一33】【一48】正反问句",
  },
  {
    id: "hsk1-g29",
    level: 1,
    title: t("Adoucir un verbe : redoublement (看看) et 一下儿", "Softening a verb: reduplication (看看) and 一下儿"),
    pattern: "V V (看看)　/　V V (休息休息)　/　V + 一下儿",
    explanation: t(
      "Pour dire qu'on fait une action **brièvement** ou **à titre d'essai**, on **redouble le verbe** : **看看** (jeter un œil), **试试** (essayer un peu). La deuxième syllabe est **atone** : kànkan.\n\nPour un verbe de deux syllabes, on répète le tout : **休息休息** (se reposer un peu).\n\n**Verbe + 一下儿** (yíxiàr) a le même effet : **看一下儿**, **等一下儿** (attends un instant).\n\nC'est très fréquent pour être **poli** : 你**试试**这个 est bien plus doux que 你试这个.",
      "To say you do something **briefly** or **to try it out**, **double the verb**: **看看** (have a look), **试试** (give it a try). The second syllable is **toneless**: kànkan.\n\nFor a two-syllable verb, repeat the whole thing: **休息休息** (rest a bit).\n\n**Verb + 一下儿** (yíxiàr) has the same effect: **看一下儿**, **等一下儿** (wait a moment).\n\nThis is very common for **politeness**: 你**试试**这个 is much softer than 你试这个.",
    ),
    examples: [
      ex("我看看。", "Wǒ kànkan.", "Je regarde un peu.", "Let me have a look."),
      ex("你试试这个。", "Nǐ shìshi zhège.", "Essaie celui-ci.", "Try this one."),
      ex("请等一下儿。", "Qǐng děng yíxiàr.", "Attendez un instant, s'il vous plaît.", "Please wait a moment."),
      ex("我们休息休息吧。", "Wǒmen xiūxi xiūxi ba.", "Reposons-nous un peu.", "Let's take a little rest."),
    ],
    pitfalls: t(
      "✗ 看看一下儿 → ✓ 看看 ou ✓ 看一下儿 (pas les deux).\n✗ 休休息息 → ✓ 休息休息 (on répète le verbe entier).\n✗ 我昨天看看了 → pour le passé, dis ✓ 我昨天看了看 (plus tard).",
      "✗ 看看一下儿 → ✓ 看看 or ✓ 看一下儿 (not both).\n✗ 休休息息 → ✓ 休息休息 (repeat the whole verb).\n✗ 我昨天看看了 → for the past: ✓ 我昨天看了看 (later).",
    ),
    category: "动词重叠 / V + 一下儿 (complément de la leçon)",
  },

  // ───────────────────────── Lesson 9 ─────────────────────────
  {
    id: "hsk1-g30",
    level: 1,
    title: t("在 : être à (verbe) et à / dans (préposition)", "在: to be at (verb) and at / in (preposition)"),
    pattern: "Qqch + 在 + Lieu　/　Sujet + 在 + Lieu + Verbe",
    explanation: t(
      "**在** (zài) a deux emplois de base qui se ressemblent :\n\n1. **Verbe** « être (situé) à » : 书**在**桌子上 (le livre est sur la table). 我**在**家 (je suis à la maison). C'est **在**, et non 是, qui sert à situer !\n\n2. **Préposition** « à, dans » devant un verbe : 哥哥**在**北京学中文 (mon frère apprend le chinois à Pékin). Le groupe « 在 + lieu » se place **avant le verbe**, jamais après.\n\nQuestion : …**在哪儿**？ Négation : **不在** (他不在家, il n'est pas à la maison).",
      "**在** (zài) has two closely related basic uses:\n\n1. **Verb** “to be (located) at”: 书**在**桌子上 (the book is on the table). 我**在**家 (I'm at home). Location uses **在**, not 是!\n\n2. **Preposition** “at, in” before a verb: 哥哥**在**北京学中文 (my brother studies Chinese in Beijing). “在 + place” goes **before the verb**, never after.\n\nQuestion: …**在哪儿**？ Negative: **不在** (他不在家, he's not home).",
    ),
    examples: [
      ex("手机在书包里。", "Shǒujī zài shūbāo li.", "Le portable est dans le cartable.", "The phone is in the schoolbag."),
      ex("爸爸不在家。", "Bàba bú zài jiā.", "Papa n'est pas à la maison.", "Dad isn't home."),
      ex("哥哥在北京学中文。", "Gēge zài Běijīng xué Zhōngwén.", "Mon grand frère apprend le chinois à Pékin.", "My older brother studies Chinese in Beijing."),
      ex("他在手机上看电影。", "Tā zài shǒujī shang kàn diànyǐng.", "Il regarde des films sur son portable.", "He watches movies on his phone."),
      ex("我们在哪儿见面？", "Wǒmen zài nǎr jiànmiàn?", "On se retrouve où ?", "Where shall we meet?"),
    ],
    pitfalls: t(
      "✗ 我是在家 / 我是家 → ✓ 我在家.\n✗ 我工作在医院 (calque de « je travaille à l'hôpital ») → ✓ 我在医院工作.\n✗ 他在北京里 → ✓ 他在北京 (pas de 里 après un nom de ville ou de pays).",
      "✗ 我是在家 / 我是家 → ✓ 我在家.\n✗ 我工作在医院 (from “I work at the hospital”) → ✓ 我在医院工作.\n✗ 他在北京里 → ✓ 他在北京 (no 里 after city or country names).",
    ),
    category: "【一16】介词“在” / 动词“在”",
  },
  {
    id: "hsk1-g31",
    level: 1,
    title: t("Les mots de position : 上, 下, 里, 前, 后, 左, 右… (+ 边)", "Position words: 上, 下, 里, 前, 后, 左, 右… (+ 边)"),
    pattern: "Nom + 上 / 里 / 下…　/　Nom + (的) + 前边 / 左边…",
    explanation: t(
      "En français, on dit « **sur** la table » (la préposition est devant). En chinois, la position vient **après** le nom : 桌子**上** (« table-dessus »), 书包**里** (« cartable-dedans »).\n\nLes mots simples : **上** (sur), **下** (sous), **里** (dans), **外** (dehors), **前** (devant), **后** (derrière), **左** (gauche), **右** (droite), **东 南 西 北** (est, sud, ouest, nord).\n\nAvec **边** (bian), ils deviennent des noms autonomes : **上边, 里边, 前边, 左边, 东边…** On peut les utiliser seuls (前边有一个商店) ou après un nom, souvent avec 的 : 饭店**的**前边, 图书馆**的**北边.\n\n**旁边** (pángbiān) = à côté ; **中间** = au milieu.\n\nAvec 在, on obtient la phrase de localisation : 书**在**桌子**上**.",
      "In English you say “**on** the table” (the preposition comes first). In Chinese, the position word comes **after** the noun: 桌子**上** (“table-top”), 书包**里** (“bag-inside”).\n\nSimple words: **上** (on), **下** (under), **里** (in), **外** (outside), **前** (front), **后** (back), **左** (left), **右** (right), **东 南 西 北** (east, south, west, north).\n\nWith **边** (bian), they become standalone nouns: **上边, 里边, 前边, 左边, 东边…** Use them alone (前边有一个商店) or after a noun, often with 的: 饭店**的**前边, 图书馆**的**北边.\n\n**旁边** (pángbiān) = next to; **中间** = in the middle.\n\nWith 在 you get the location sentence: 书**在**桌子**上**.",
    ),
    examples: [
      ex("书在桌子上。", "Shū zài zhuōzi shang.", "Le livre est sur la table.", "The book is on the table."),
      ex("房间里没有人。", "Fángjiān li méiyǒu rén.", "Il n'y a personne dans la chambre.", "There's nobody in the room."),
      ex("他去东边的车站。", "Tā qù dōngbian de chēzhàn.", "Il va à la gare côté est.", "He's going to the station on the east side."),
      ex("商店在饭店的前边。", "Shāngdiàn zài fàndiàn de qiánbian.", "Le magasin est devant le restaurant.", "The shop is in front of the restaurant."),
      ex("洗手间在左边。", "Xǐshǒujiān zài zuǒbian.", "Les toilettes sont à gauche.", "The restroom is on the left."),
    ],
    pitfalls: t(
      "✗ 在上桌子 → ✓ 在桌子上 (la position après le nom).\n✗ 书在桌子 → ✓ 书在桌子上 (un objet a besoin d'un mot de position pour devenir un lieu).\n✗ 在中国里 → ✓ 在中国.",
      "✗ 在上桌子 → ✓ 在桌子上 (position word after the noun).\n✗ 书在桌子 → ✓ 书在桌子上 (an object needs a position word to become a place).\n✗ 在中国里 → ✓ 在中国.",
    ),
    category: "【一01】方位名词",
  },
  {
    id: "hsk1-g32",
    level: 1,
    title: t("« Il y a » : Lieu + 有 + Qqch (et Lieu + 是 + Qqch)", "“There is”: Place + 有 + Thing (and Place + 是 + Thing)"),
    pattern: "Lieu + 有 / 没有 + (nombre + spéc.) + Nom",
    explanation: t(
      "Pour dire « **il y a** quelque chose quelque part », on commence par **le lieu**, puis **有** : 桌子上**有**一本书 (sur la table, il y a un livre). Négation : 房间里**没有**桌子.\n\nComparer avec 在 :\n• **Lieu + 有 + chose** : on découvre **ce qu'il y a** (information nouvelle, souvent avec un nombre).\n• **Chose + 在 + lieu** : on sait de quoi on parle, on cherche **où** c'est. 我的书在桌子上.\n\n**Lieu + 是 + chose** précise **ce qui occupe** le lieu : 车站东边**是**一个学校 (« à l'est de la gare, c'est une école »).\n\nQuestion typique : 这儿**有**洗手间**吗**？ (il y a des toilettes ici ?)",
      "To say “**there is** something somewhere”, start with **the place**, then **有**: 桌子上**有**一本书 (there's a book on the table). Negative: 房间里**没有**桌子.\n\nCompare with 在:\n• **Place + 有 + thing**: you learn **what is there** (new information, often with a number).\n• **Thing + 在 + place**: you know the thing and ask **where** it is. 我的书在桌子上.\n\n**Place + 是 + thing** says **what occupies** the place: 车站东边**是**一个学校 (“east of the station is a school”).\n\nTypical question: 这儿**有**洗手间**吗**？ (is there a restroom here?)",
    ),
    examples: [
      ex("房间里有两个人。", "Fángjiān li yǒu liǎng ge rén.", "Il y a deux personnes dans la chambre.", "There are two people in the room."),
      ex("学校旁边有一家商店。", "Xuéxiào pángbiān yǒu yì jiā shāngdiàn.", "Il y a un magasin à côté de l'école.", "There's a shop next to the school."),
      ex("这儿有洗手间吗？", "Zhèr yǒu xǐshǒujiān ma?", "Il y a des toilettes ici ?", "Is there a restroom here?"),
      ex("教学楼西边不是图书馆。", "Jiàoxuélóu xībian bú shì túshūguǎn.", "Ce n'est pas la bibliothèque, à l'ouest du bâtiment des cours.", "West of the classroom building isn't the library."),
    ],
    pitfalls: t(
      "✗ 一本书在桌子上 (sonne étrange) → ✓ 桌子上有一本书.\n✗ 在桌子上有一本书 → ✓ 桌子上有一本书 (le lieu est le sujet, pas besoin de 在).\n✗ 桌子上是书吗 pour « y a-t-il un livre ? » → ✓ 桌子上有书吗？",
      "✗ 一本书在桌子上 (sounds odd) → ✓ 桌子上有一本书.\n✗ 在桌子上有一本书 → ✓ 桌子上有一本书 (the place is the subject, no 在 needed).\n✗ 桌子上是书吗 for “is there a book?” → ✓ 桌子上有书吗？",
    ),
    category: "【一37】“有”字句 (存在) /【一36】“是”字句 (存在)",
  },

  // ───────────────────────── Lesson 10 ─────────────────────────
  {
    id: "hsk1-g33",
    level: 1,
    title: t("怎么 + verbe : comment ?", "怎么 + verb: how?"),
    pattern: "Sujet + 怎么 + Verbe？",
    explanation: t(
      "**怎么** (zěnme) + verbe demande la **manière** : « comment ? ».\n\n你**怎么**去医院？ (Comment vas-tu à l'hôpital ?) → 我坐车去.\n这个字**怎么**读？ (Comment se lit ce caractère ?)\n去机场**怎么**走？ (Comment on va à l'aéroport ?)\n\nComme toujours, 怎么 reste **à sa place, devant le verbe**.\n\nBonus : avec un ton surpris, 怎么 signifie aussi « **comment ça se fait / pourquoi** » : 你**怎么**没来？ (Pourquoi tu n'es pas venu ?). Et au niveau 2, tu verras **怎么样** (« comment est… ? / ça te dit ? »).",
      "**怎么** (zěnme) + verb asks about **manner**: “how?”.\n\n你**怎么**去医院？ (How do you get to the hospital?) → 我坐车去.\n这个字**怎么**读？ (How do you read this character?)\n去机场**怎么**走？ (How do I get to the airport?)\n\nAs always, 怎么 **stays in place, before the verb**.\n\nBonus: with a surprised tone, 怎么 also means “**how come / why**”: 你**怎么**没来？ (How come you didn't come?). At level 2 you'll meet **怎么样** (“how is…? / how about…?”).",
    ),
    examples: [
      ex("你怎么去医院？", "Nǐ zěnme qù yīyuàn?", "Comment tu vas à l'hôpital ?", "How are you getting to the hospital?"),
      ex("这个字怎么读？", "Zhège zì zěnme dú?", "Comment se lit ce caractère ?", "How do you read this character?"),
      ex("去机场怎么走？", "Qù jīchǎng zěnme zǒu?", "Comment on va à l'aéroport ?", "How do I get to the airport?"),
      ex("你昨天怎么没来上课？", "Nǐ zuótiān zěnme méi lái shàngkè?", "Pourquoi tu n'es pas venu en cours hier ?", "How come you didn't come to class yesterday?"),
    ],
    pitfalls: t(
      "✗ 怎么你去？ → ✓ 你怎么去？\n✗ 你去怎么？ → ✓ 你怎么去？ (怎么 devant le verbe).\n✗ 你怎么去吗？ → ✓ 你怎么去？",
      "✗ 怎么你去？ → ✓ 你怎么去？\n✗ 你去怎么？ → ✓ 你怎么去？ (怎么 before the verb).\n✗ 你怎么去吗？ → ✓ 你怎么去？",
    ),
    category: "【一04】【一46】疑问代词“怎么”",
  },
  {
    id: "hsk1-g34",
    level: 1,
    title: t("Deux verbes à la suite : 坐车去, 去商店买东西", "Verbs in series: 坐车去, 去商店买东西"),
    pattern: "Sujet + 坐 / 开 + véhicule + 去 + Lieu　/　Sujet + 去 + Lieu + Verbe",
    explanation: t(
      "Le chinois aligne volontiers **deux verbes dans l'ordre chronologique**, sans « et » ni « pour ».\n\n1. **Moyen + action** : 我**坐飞机去**北京 (je vais à Pékin en avion — littéralement « je prends l'avion, vais à Pékin »). 他**开车去**上班.\n\n2. **Déplacement + but** : 我**去商店买**东西 (je vais au magasin acheter des choses). 妈妈**来看**我了 (maman est venue me voir).\n\nLa logique : on décrit les étapes **dans l'ordre où elles se passent**. D'abord on monte dans l'avion, ensuite on arrive à Pékin.\n\nQuestion avec choix : 你们**坐火车去**还是**坐飞机去**？",
      "Chinese happily lines up **two verbs in time order**, with no “and” or “to”.\n\n1. **Means + action**: 我**坐飞机去**北京 (I'm flying to Beijing — literally “I take the plane, go to Beijing”). 他**开车去**上班.\n\n2. **Movement + purpose**: 我**去商店买**东西 (I'm going to the store to buy things). 妈妈**来看**我了 (Mom came to see me).\n\nThe logic: steps are described **in the order they happen**. First you board the plane, then you reach Beijing.\n\nChoice question: 你们**坐火车去**还是**坐飞机去**？",
    ),
    examples: [
      ex("我坐飞机去北京。", "Wǒ zuò fēijī qù Běijīng.", "Je vais à Pékin en avion.", "I'm flying to Beijing."),
      ex("他每天开车去上班。", "Tā měi tiān kāichē qù shàngbān.", "Il va au travail en voiture tous les jours.", "He drives to work every day."),
      ex("我去商店买水果。", "Wǒ qù shāngdiàn mǎi shuǐguǒ.", "Je vais au magasin acheter des fruits.", "I'm going to the store to buy fruit."),
      ex("他常去饭店吃饭。", "Tā cháng qù fàndiàn chī fàn.", "Il va souvent manger au restaurant.", "He often goes to restaurants to eat."),
      ex("妈妈来看我了。", "Māma lái kàn wǒ le.", "Maman est venue me voir.", "Mom came to see me."),
    ],
    pitfalls: t(
      "✗ 我去北京坐飞机 (= je vais à Pékin pour prendre l'avion) → ✓ 我坐飞机去北京.\n✗ 我去商店为买东西 → ✓ 我去商店买东西 (pas de « pour »).\n✗ 我去北京在飞机 → ✓ 我坐飞机去北京.",
      "✗ 我去北京坐飞机 (= I go to Beijing to take a plane) → ✓ 我坐飞机去北京.\n✗ 我去商店为买东西 → ✓ 我去商店买东西 (no “to/for”).\n✗ 我去北京在飞机 → ✓ 我坐飞机去北京.",
    ),
    category: "【一29】动词谓语句 (连动) — structure de base",
  },
  {
    id: "hsk1-g35",
    level: 1,
    title: t("从 … (到 …) : de … (à …)", "从 … (到 …): from … (to …)"),
    pattern: "从 + lieu / moment (+ 到 + lieu / moment) + Verbe",
    explanation: t(
      "**从** (cóng) = « de, depuis » (point de départ) ; **到** (dào) = « jusqu'à, à » (point d'arrivée). Ensemble : **从…到…** = « de… à… », pour l'espace **et** le temps.\n\n**从**家**到**学校 (de la maison à l'école). **从**星期一**到**星期五 (du lundi au vendredi).\n\nLe groupe se place **avant le verbe** : 我们**从星期一到星期五**工作.\n\nPour l'origine : 你**从**哪儿**来**？ → 我**从**法国**来** (je viens de France). Attention à l'ordre : 从 + lieu + 来.",
      "**从** (cóng) = “from” (starting point); **到** (dào) = “to, until” (end point). Together: **从…到…** = “from… to…”, for space **and** time.\n\n**从**家**到**学校 (from home to school). **从**星期一**到**星期五 (from Monday to Friday).\n\nThe phrase goes **before the verb**: 我们**从星期一到星期五**工作.\n\nFor origin: 你**从**哪儿**来**？ → 我**从**法国**来** (I come from France). Mind the order: 从 + place + 来.",
    ),
    examples: [
      ex("我们从星期一到星期五工作。", "Wǒmen cóng xīngqīyī dào xīngqīwǔ gōngzuò.", "Nous travaillons du lundi au vendredi.", "We work from Monday to Friday."),
      ex("你从哪儿来？", "Nǐ cóng nǎr lái?", "Tu viens d'où ?", "Where do you come from?"),
      ex("哥哥从北京回来了。", "Gēge cóng Běijīng huílái le.", "Mon grand frère est rentré de Pékin.", "My older brother came back from Beijing."),
      ex("从这儿到机场要一个小时。", "Cóng zhèr dào jīchǎng yào yí ge xiǎoshí.", "D'ici à l'aéroport, il faut une heure.", "It takes an hour from here to the airport."),
    ],
    pitfalls: t(
      "✗ 我来从法国 (calque de « je viens de France ») → ✓ 我从法国来.\n✗ 我工作从九点到五点 → ✓ 我从九点到五点工作.",
      "✗ 我来从法国 (from “I come from France”) → ✓ 我从法国来.\n✗ 我工作从九点到五点 → ✓ 我从九点到五点工作.",
    ),
    category: "【一15】介词“从”",
  },

  // ───────────────────────── Lesson 11 ─────────────────────────
  {
    id: "hsk1-g36",
    level: 1,
    title: t("Adjectifs comme prédicat : 很, 非常, 真, 最", "Adjectives as predicates: 很, 非常, 真, 最"),
    pattern: "Sujet + 很 / 非常 / 真 / 最 + Adjectif",
    explanation: t(
      "En chinois, l'adjectif fonctionne **comme un verbe** : il n'a **pas besoin de 是**. « Il fait froid aujourd'hui » = 今天**很冷**.\n\nPourquoi ce 很 ? Un adjectif tout seul (今天冷) sonne comme une **comparaison** (« aujourd'hui, il fait froid — mais pas hier »). **很** (hěn) rend la phrase neutre ; il est souvent faible et ne veut pas vraiment dire « très ».\n\nPour renforcer vraiment :\n• **非常** (fēicháng) = extrêmement : 我**非常**喜欢这本书.\n• **真** (zhēn) = vraiment (exclamatif) : 你的房间**真**干净！\n• **最** (zuì) = le plus : 我**最**喜欢打球. 这个学生**最**认真.\n\nNégation : **不** + adjectif, sans 很 : 今天**不冷**.",
      "In Chinese, adjectives work **like verbs**: they **don't need 是**. “It's cold today” = 今天**很冷**.\n\nWhy 很? A bare adjective (今天冷) sounds like a **comparison** (“today is cold — unlike yesterday”). **很** (hěn) makes the sentence neutral; it's often weak and doesn't really mean “very”.\n\nTo really intensify:\n• **非常** (fēicháng) = extremely: 我**非常**喜欢这本书.\n• **真** (zhēn) = really (exclamatory): 你的房间**真**干净！\n• **最** (zuì) = the most: 我**最**喜欢打球. 这个学生**最**认真.\n\nNegative: **不** + adjective, no 很: 今天**不冷**.",
    ),
    examples: [
      ex("那个本子很好看。", "Nàge běnzi hěn hǎokàn.", "Ce cahier-là est joli.", "That notebook is pretty."),
      ex("我非常喜欢这本书。", "Wǒ fēicháng xǐhuan zhè běn shū.", "J'adore ce livre.", "I really love this book."),
      ex("你的房间真干净！", "Nǐ de fángjiān zhēn gānjìng!", "Ta chambre est vraiment propre !", "Your room is so clean!"),
      ex("我最喜欢打球。", "Wǒ zuì xǐhuan dǎ qiú.", "Ce que je préfère, c'est jouer au ballon.", "I like playing ball games best."),
      ex("这个菜很好吃。", "Zhège cài hěn hǎochī.", "Ce plat est délicieux.", "This dish is delicious."),
    ],
    pitfalls: t(
      "✗ 今天是冷 → ✓ 今天很冷.\n✗ 我是很高兴 → ✓ 我很高兴.\n✗ 今天不很冷 pour « il ne fait pas froid » → ✓ 今天不冷.",
      "✗ 今天是冷 → ✓ 今天很冷.\n✗ 我是很高兴 → ✓ 我很高兴.\n✗ 今天不很冷 for “it isn't cold” → ✓ 今天不冷.",
    ),
    category: "【一09】【一30】程度副词 / 形容词谓语句",
  },
  {
    id: "hsk1-g37",
    level: 1,
    title: t("L'exclamation : 太 … 了 ! et 真 … !", "Exclamations: 太 … 了! and 真 … !"),
    pattern: "太 + Adjectif + 了！　/　真 + Adjectif！",
    explanation: t(
      "**太 … 了** (tài … le) = « trop ! » ou « tellement ! ». Selon le contexte, c'est un excès (太贵了！ c'est trop cher !) ou un enthousiasme (太好了！ génial !).\n\nLe **了** final est presque obligatoire : il donne le ton exclamatif.\n\n**真** + adjectif est une autre exclamation, plus « constat admiratif » : 这水果**真**好吃！ (ces fruits sont vraiment bons !).\n\nLa négation **不太** + adj. = « pas très » (très utile pour rester poli) : 不太好, 不太贵. Ton : **bú tài**.",
      "**太 … 了** (tài … le) = “too…!” or “so…!”. Depending on context it's excess (太贵了！ too expensive!) or enthusiasm (太好了！ great!).\n\nThe final **了** is almost mandatory: it carries the exclamation.\n\n**真** + adjective is another exclamation, more of an admiring remark: 这水果**真**好吃！ (this fruit is really good!).\n\nThe negative **不太** + adj. = “not very” (handy for politeness): 不太好, 不太贵. Tone: **bú tài**.",
    ),
    examples: [
      ex("今天太热了！", "Jīntiān tài rè le!", "Qu'est-ce qu'il fait chaud aujourd'hui !", "It's so hot today!"),
      ex("太好了！", "Tài hǎo le!", "Génial !", "Great!"),
      ex("这个包太贵了。", "Zhège bāo tài guì le.", "Ce sac est trop cher.", "This bag is too expensive."),
      ex("这水果真好吃！", "Zhè shuǐguǒ zhēn hǎochī!", "Ces fruits sont vraiment délicieux !", "This fruit is really delicious!"),
      ex("我的汉语不太好。", "Wǒ de Hànyǔ bú tài hǎo.", "Mon chinois n'est pas très bon.", "My Chinese isn't very good."),
    ],
    pitfalls: t(
      "✗ 太贵 (sans 了, sonne inachevé) → ✓ 太贵了！\n✗ 很好了 → ✓ 太好了！ / 很好。\n✗ 太不好 ≠ 不太好 : 太不好 = « vraiment mauvais », 不太好 = « pas très bon ».",
      "✗ 太贵 (no 了, sounds unfinished) → ✓ 太贵了！\n✗ 很好了 → ✓ 太好了！ / 很好。\n✗ 太不好 ≠ 不太好: 太不好 = “really bad”, 不太好 = “not very good”.",
    ),
    category: "【一35】感叹句",
  },
  {
    id: "hsk1-g38",
    level: 1,
    title: t("了 du changement : « maintenant, c'est… »", "了 for change: “now it's…”"),
    pattern: "Phrase + 了",
    explanation: t(
      "Placé **en fin de phrase**, **了** (le) signale un **changement de situation** : quelque chose est nouveau par rapport à avant.\n\n**下雨了！** (Il s'est mis à pleuvoir !) — avant, il ne pleuvait pas.\n我**饿了** (j'ai faim, maintenant). 她**病了** (elle est tombée malade). 他二十岁**了** (il a vingt ans maintenant).\n\nAvec une négation, 了 annonce un **changement de plan** : 我**不去了** (finalement, je n'y vais plus).\n\nPour nier un changement, on utilise **没** sans 了 : 她**没**病 (elle n'est pas malade). 雨**没**小 (la pluie n'a pas diminué).\n\nCertaines phrases n'ont même pas de sujet : **下雨了。** C'est normal en chinois pour la météo.",
      "At the **end of a sentence**, **了** (le) signals a **change of situation**: something is new compared to before.\n\n**下雨了！** (It's started raining!) — it wasn't raining before.\n我**饿了** (I'm hungry now). 她**病了** (she's fallen ill). 他二十岁**了** (he's twenty now).\n\nWith a negative, 了 signals a **change of plan**: 我**不去了** (I'm not going after all).\n\nTo deny a change, use **没** without 了: 她**没**病 (she isn't sick). 雨**没**小 (the rain hasn't eased).\n\nSome sentences don't even have a subject: **下雨了。** That's normal in Chinese for weather.",
    ),
    examples: [
      ex("下雨了！", "Xià yǔ le!", "Il pleut !", "It's raining!"),
      ex("我累了。", "Wǒ lèi le.", "Je suis fatigué (maintenant).", "I'm tired."),
      ex("她病了。", "Tā bìng le.", "Elle est tombée malade.", "She's fallen ill."),
      ex("雨小了。", "Yǔ xiǎo le.", "La pluie a diminué.", "The rain has eased."),
      ex("我不去了。", "Wǒ bú qù le.", "Finalement, je n'y vais plus.", "I'm not going after all."),
    ],
    pitfalls: t(
      "✗ 我饿 (sonne incomplet) → ✓ 我饿了 / 我很饿.\n✗ 她没病了 → ✓ 她没病.\n了 ≠ passé composé : 下雨了 décrit la situation **actuelle** (il pleut maintenant).",
      "✗ 我饿 (sounds incomplete) → ✓ 我饿了 / 我很饿.\n✗ 她没病了 → ✓ 她没病.\n了 ≠ past tense: 下雨了 describes the **current** situation (it's raining now).",
    ),
    category: "【一22】【一31】【一40】语气助词“了” / 变化态 / 非主谓句",
  },
  {
    id: "hsk1-g39",
    level: 1,
    title: t("La comparaison : A 比 B + adj. ; A 没有 B + adj.", "Comparison: A 比 B + adj.; A 没有 B + adj."),
    pattern: "A + 比 + B + Adjectif　/　A + 没有 + B + Adjectif",
    explanation: t(
      "Pour dire « A est plus … que B » : **A 比 B + adjectif**. 哥哥**比**弟弟高 (le grand frère est plus grand que le petit frère).\n\nAttention : **pas de 很** dans une comparaison avec 比 ! L'idée de « plus » est déjà dans 比.\n\nPour dire « A est moins … que B » (ou « pas aussi … que ») : **A 没有 B + adjectif**. 昨天**没有**今天热 (hier, il ne faisait pas aussi chaud qu'aujourd'hui).\n\nAstuce : pense à 比 comme « comparé à » : 今天比昨天冷 = « aujourd'hui, comparé à hier, froid ».",
      "To say “A is more … than B”: **A 比 B + adjective**. 哥哥**比**弟弟高 (the older brother is taller than the younger one).\n\nCareful: **no 很** in a 比 comparison! The “more” idea is already in 比.\n\nFor “A is less … than B” (“not as … as”): **A 没有 B + adjective**. 昨天**没有**今天热 (yesterday wasn't as hot as today).\n\nTip: think of 比 as “compared to”: 今天比昨天冷 = “today, compared to yesterday, cold”.",
    ),
    examples: [
      ex("我朋友比我高。", "Wǒ péngyou bǐ wǒ gāo.", "Mon ami est plus grand que moi.", "My friend is taller than me."),
      ex("这个手机比那个贵。", "Zhège shǒujī bǐ nàge guì.", "Ce portable est plus cher que celui-là.", "This phone is more expensive than that one."),
      ex("这个房间比那个房间大。", "Zhège fángjiān bǐ nàge fángjiān dà.", "Cette chambre est plus grande que l'autre.", "This room is bigger than that one."),
      ex("昨天没有今天热。", "Zuótiān méiyǒu jīntiān rè.", "Hier, il faisait moins chaud qu'aujourd'hui.", "Yesterday wasn't as hot as today."),
      ex("这个书包没有那个好看。", "Zhège shūbāo méiyǒu nàge hǎokàn.", "Ce cartable n'est pas aussi joli que l'autre.", "This schoolbag isn't as nice as that one."),
    ],
    pitfalls: t(
      "✗ 哥哥比弟弟很高 → ✓ 哥哥比弟弟高.\n✗ 哥哥高比弟弟 (calque de « plus grand que ») → ✓ 哥哥比弟弟高.\n✗ 哥哥不比弟弟高 pour « moins grand » → ✓ 哥哥没有弟弟高.",
      "✗ 哥哥比弟弟很高 → ✓ 哥哥比弟弟高.\n✗ 哥哥高比弟弟 (from “taller than”) → ✓ 哥哥比弟弟高.\n✗ 哥哥不比弟弟高 for “less tall” → ✓ 哥哥没有弟弟高.",
    ),
    category: "【一18】【一38】介词“比” / 比较句",
  },

  // ───────────────────────── Lesson 12 ─────────────────────────
  {
    id: "hsk1-g40",
    level: 1,
    title: t("还是 : « ou » dans une question", "还是: “or” in a question"),
    pattern: "A + 还是 + B？",
    explanation: t(
      "**还是** (háishi) propose un **choix** dans une question : 你喝茶**还是**喝水？ (tu bois du thé ou de l'eau ?).\n\nOn répète souvent le verbe des deux côtés. Pour 是, on écrit un seul 是 : 你爸爸**是**老师**还是**医生？\n\nComme c'est déjà une question, **pas de 吗** à la fin.\n\nÀ retenir pour plus tard : dans une phrase **affirmative** (« on peut y aller lundi ou mardi »), le « ou » se dit **或者** (niveau 2), pas 还是.",
      "**还是** (háishi) offers a **choice** in a question: 你喝茶**还是**喝水？ (tea or water?).\n\nThe verb is often repeated on both sides. With 是, use just one 是: 你爸爸**是**老师**还是**医生？\n\nIt's already a question, so **no 吗** at the end.\n\nFor later: in a **statement** (“we can go Monday or Tuesday”), “or” is **或者** (level 2), not 还是.",
    ),
    examples: [
      ex("你喝茶还是喝水？", "Nǐ hē chá háishi hē shuǐ?", "Tu bois du thé ou de l'eau ?", "Would you like tea or water?"),
      ex("你爸爸是老师还是医生？", "Nǐ bàba shì lǎoshī háishi yīshēng?", "Ton père est professeur ou médecin ?", "Is your dad a teacher or a doctor?"),
      ex("你们坐火车去还是坐飞机去？", "Nǐmen zuò huǒchē qù háishi zuò fēijī qù?", "Vous y allez en train ou en avion ?", "Are you going by train or by plane?"),
      ex("你喝水还是喝牛奶？", "Nǐ hē shuǐ háishi hē niúnǎi?", "Tu bois de l'eau ou du lait ?", "Water or milk?"),
    ],
    pitfalls: t(
      "✗ 你喝茶还是喝水吗？ → ✓ 你喝茶还是喝水？\n✗ 你喝茶和水？ pour proposer un choix → ✓ 你喝茶还是喝水？ (和 = « et »).",
      "✗ 你喝茶还是喝水吗？ → ✓ 你喝茶还是喝水？\n✗ 你喝茶和水？ to offer a choice → ✓ 你喝茶还是喝水？ (和 = “and”).",
    ),
    category: "【一19】【一33】【一47】连词“还是” / 选择问句",
  },
  {
    id: "hsk1-g41",
    level: 1,
    title: t("和 et 跟 : « et » entre deux noms", "和 and 跟: “and” between nouns"),
    pattern: "Nom A + 和 / 跟 + Nom B",
    explanation: t(
      "**和** (hé) et **跟** (gēn, plus oral) relient **deux noms ou pronoms** : 我**和**弟弟 (mon petit frère et moi), 爸爸**跟**妈妈 (papa et maman).\n\nOn les suit souvent de **都** : 爸爸跟妈妈**都**不在家.\n\n**Mais** ils ne relient **pas deux verbes ni deux phrases** comme le « et » français ! Pour « je suis fatigué et j'ai faim », on juxtapose ou on utilise **也** : 我很累，**也**很饿.\n\nDans une liste, on met 和 seulement avant le dernier élément, et 、 (virgule d'énumération) entre les autres : 爸爸、妈妈**和**我.",
      "**和** (hé) and **跟** (gēn, more colloquial) join **two nouns or pronouns**: 我**和**弟弟 (my younger brother and I), 爸爸**跟**妈妈 (Dad and Mom).\n\nThey're often followed by **都**: 爸爸跟妈妈**都**不在家.\n\n**But** they do **not** link two verbs or two clauses like English “and”! For “I'm tired and hungry”, just juxtapose or use **也**: 我很累，**也**很饿.\n\nIn a list, put 和 only before the last item, with 、 (enumeration comma) between the others: 爸爸、妈妈**和**我.",
    ),
    examples: [
      ex("我和弟弟都学习中文。", "Wǒ hé dìdi dōu xuéxí Zhōngwén.", "Mon petit frère et moi apprenons le chinois.", "My younger brother and I both study Chinese."),
      ex("爸爸跟妈妈都不在家。", "Bàba gēn māma dōu bú zài jiā.", "Papa et maman ne sont pas à la maison.", "Neither Dad nor Mom is home."),
      ex("我喜欢包子和面条儿。", "Wǒ xǐhuan bāozi hé miàntiáor.", "J'aime les baos et les nouilles.", "I like steamed buns and noodles."),
      ex("我家有爸爸、妈妈、姐姐和我。", "Wǒ jiā yǒu bàba, māma, jiějie hé wǒ.", "Dans ma famille, il y a papa, maman, ma grande sœur et moi.", "My family is Dad, Mom, my older sister and me."),
    ],
    pitfalls: t(
      "✗ 我很忙和很累 → ✓ 我很忙，也很累.\n✗ 我去商店和买水果 → ✓ 我去商店买水果.\n✗ 他是学生和我是学生 → ✓ 他是学生，我也是学生.",
      "✗ 我很忙和很累 → ✓ 我很忙，也很累.\n✗ 我去商店和买水果 → ✓ 我去商店买水果.\n✗ 他是学生和我是学生 → ✓ 他是学生，我也是学生.",
    ),
    category: "【一19】连词“和、跟”",
  },
  {
    id: "hsk1-g42",
    level: 1,
    title: t("跟 / 和 … 一起 : avec quelqu'un ; 一块儿", "跟 / 和 … 一起: together with someone; 一块儿"),
    pattern: "Sujet + 跟 / 和 + Personne + 一起 / 一块儿 + Verbe",
    explanation: t(
      "Pour dire « faire quelque chose **avec** quelqu'un », on utilise **跟** ou **和** comme **préposition**, souvent suivi de **一起** (yìqǐ, ensemble) ou de son équivalent oral **一块儿** (yíkuàir), **avant le verbe** :\n\n我**跟**朋友**一起**去 (je vais avec un ami). 我们常**一块儿**玩儿 (on joue souvent ensemble).\n\nSans personne précise : 我们**一起**去吧 (allons-y ensemble).\n\n跟 introduit aussi la personne à qui l'on s'adresse : 他**跟**老师请假了 (il a demandé un congé au professeur). 我**跟**你说 (je te dis…).\n\nNégation : le 没/不 se place **avant 跟/和** : 我**没和**姐姐一起去.",
      "To say “do something **with** someone”, use **跟** or **和** as a **preposition**, usually followed by **一起** (yìqǐ, together) or its colloquial twin **一块儿** (yíkuàir), **before the verb**:\n\n我**跟**朋友**一起**去 (I'm going with a friend). 我们常**一块儿**玩儿 (we often hang out together).\n\nWith no specific person: 我们**一起**去吧 (let's go together).\n\n跟 also introduces the person you address: 他**跟**老师请假了 (he asked the teacher for leave). 我**跟**你说 (let me tell you…).\n\nNegative: 没/不 goes **before 跟/和**: 我**没和**姐姐一起去.",
    ),
    examples: [
      ex("明天他们一起去图书馆。", "Míngtiān tāmen yìqǐ qù túshūguǎn.", "Demain, ils vont ensemble à la bibliothèque.", "Tomorrow they're going to the library together."),
      ex("我们常一块儿玩儿。", "Wǒmen cháng yíkuàir wánr.", "On s'amuse souvent ensemble.", "We often hang out together."),
      ex("我没和姐姐一起去中国。", "Wǒ méi hé jiějie yìqǐ qù Zhōngguó.", "Je ne suis pas allé en Chine avec ma grande sœur.", "I didn't go to China with my older sister."),
      ex("他跟老师请假了。", "Tā gēn lǎoshī qǐngjià le.", "Il a demandé un congé au professeur.", "He asked the teacher for time off."),
    ],
    pitfalls: t(
      "✗ 我一起跟朋友去 → ✓ 我跟朋友一起去.\n✗ 我去电影院跟朋友 (calque de « with a friend » à la fin) → ✓ 我跟朋友去电影院.\n✗ 我和姐姐没一起去 → ✓ 我没和姐姐一起去.",
      "✗ 我一起跟朋友去 → ✓ 我跟朋友一起去.\n✗ 我去电影院跟朋友 (“with a friend” at the end) → ✓ 我跟朋友去电影院.\n✗ 我和姐姐没一起去 → ✓ 我没和姐姐一起去.",
    ),
    category: "【一10】【一17】协同副词“一起、一块儿” / 介词“跟、和”",
  },

  // ───────────────────────── Lesson 13 ─────────────────────────
  {
    id: "hsk1-g43",
    level: 1,
    title: t("能 : pouvoir (possibilité, permission) — et la différence avec 会", "能: can (possibility, permission) — and how it differs from 会"),
    pattern: "Sujet + (不) 能 + Verbe",
    explanation: t(
      "**能** (néng) exprime qu'on **peut** faire quelque chose parce que **les conditions le permettent** (temps, santé, autorisation) : 明天你**能**来吗？ (tu peux venir demain ?). 我明天**不能**去 (je ne peux pas y aller demain).\n\nIl sert aussi à **demander la permission** : 我**能**进来吗？ (je peux entrer ?).\n\n**会 ou 能 ?**\n• **会** = compétence **apprise** : 我**会**开车 (je sais conduire).\n• **能** = possibilité **ici et maintenant** : 我今天**不能**开车 (je ne peux pas conduire aujourd'hui — j'ai bu, je n'ai pas la voiture…).\n\nNégation : **不能**.",
      "**能** (néng) says you **can** do something because **conditions allow it** (time, health, permission): 明天你**能**来吗？ (can you come tomorrow?). 我明天**不能**去 (I can't go tomorrow).\n\nIt's also used to **ask permission**: 我**能**进来吗？ (may I come in?).\n\n**会 or 能?**\n• **会** = **learned** skill: 我**会**开车 (I know how to drive).\n• **能** = possibility **here and now**: 我今天**不能**开车 (I can't drive today — I've been drinking, no car…).\n\nNegative: **不能**.",
    ),
    examples: [
      ex("明天你能来吗？", "Míngtiān nǐ néng lái ma?", "Tu peux venir demain ?", "Can you come tomorrow?"),
      ex("我明天下午不能去。", "Wǒ míngtiān xiàwǔ bù néng qù.", "Je ne peux pas y aller demain après-midi.", "I can't go tomorrow afternoon."),
      ex("你能帮我吗？", "Nǐ néng bāng wǒ ma?", "Tu peux m'aider ?", "Can you help me?"),
      ex("这儿能上网吗？", "Zhèr néng shàngwǎng ma?", "On peut aller sur Internet ici ?", "Can you get online here?"),
      ex("他会开车，今天不能开。", "Tā huì kāichē, jīntiān bù néng kāi.", "Il sait conduire, mais aujourd'hui il ne peut pas.", "He can drive, but he can't today."),
    ],
    pitfalls: t(
      "✗ 我不会来明天 → ✓ 我明天不能来 (empêchement = 能 ; et le temps avant le verbe).\n✗ 我能说一点儿汉语 pour une compétence → ✓ 我会说一点儿汉语.",
      "✗ 我不会来明天 → ✓ 我明天不能来 (being prevented = 能; time before the verb).\n✗ 我能说一点儿汉语 for a skill → ✓ 我会说一点儿汉语.",
    ),
    category: "【一02】能愿动词“能”",
  },
  {
    id: "hsk1-g44",
    level: 1,
    title: t("Interdire : 别 et 不要 + verbe", "Telling someone not to: 别 and 不要 + verb"),
    pattern: "(你) 别 / 不要 + Verbe (+ 了)",
    explanation: t(
      "Pour dire à quelqu'un de **ne pas** faire quelque chose, on place **别** (bié) ou **不要** (bú yào) devant le verbe : **别**说话 (ne parle pas). **不要**在这儿吃东西 (ne mange pas ici).\n\n别 est plus court et plus fréquent à l'oral. 不要 est un peu plus formel (panneaux, consignes).\n\n**别 … 了** veut souvent dire « arrête de… » : **别**说**了**！ (arrête de parler / ça suffit !).\n\nFormules courantes : **别忘了**！ (n'oublie pas !), **别**进来 (n'entre pas).\n\nAttention : **不** + verbe décrit un fait (« il ne mange pas »), **别** donne une consigne (« ne mange pas ! »).",
      "To tell someone **not** to do something, put **别** (bié) or **不要** (bú yào) before the verb: **别**说话 (don't talk). **不要**在这儿吃东西 (don't eat here).\n\n别 is shorter and more common in speech. 不要 is a bit more formal (signs, instructions).\n\n**别 … 了** often means “stop…-ing”: **别**说**了**！ (stop talking / that's enough!).\n\nEveryday phrases: **别忘了**！ (don't forget!), **别**进来 (don't come in).\n\nNote: **不** + verb states a fact (“he doesn't eat”), **别** gives an order (“don't eat!”).",
    ),
    examples: [
      ex("你别进来。", "Nǐ bié jìnlái.", "N'entre pas.", "Don't come in."),
      ex("别说了！", "Bié shuō le!", "Arrête, ça suffit !", "Stop talking!"),
      ex("不要在这儿吃东西。", "Bú yào zài zhèr chī dōngxi.", "Ne mange pas ici.", "Don't eat here."),
      ex("明天考试，别忘了！", "Míngtiān kǎoshì, bié wàng le!", "Il y a l'examen demain, n'oublie pas !", "The exam is tomorrow, don't forget!"),
    ],
    pitfalls: t(
      "✗ 不说话！ pour interdire → ✓ 别说话！\n✗ 你别不来 (double négation confuse) → ✓ 你一定来 (niveau 2) ou ✓ 别忘了来.",
      "✗ 不说话！ to forbid → ✓ 别说话！\n✗ 你别不来 (confusing double negative) → ✓ 别忘了来.",
    ),
    category: "【一14】【一34】否定副词“别” / 祈使句",
  },
  {
    id: "hsk1-g45",
    level: 1,
    title: t("给 + personne + verbe : pour / à quelqu'un", "给 + person + verb: for / to someone"),
    pattern: "Sujet + 给 + Personne + Verbe (+ Objet)",
    explanation: t(
      "**给** (gěi) est d'abord un verbe : « donner » : 请**给**我一杯茶 (donnez-moi un thé, s'il vous plaît).\n\nMais il sert aussi à introduire **la personne qui reçoit ou bénéficie** d'une action, **avant le verbe** :\n• **给**我**打电话** (appelle-moi — « à moi téléphone »)\n• 我**给**你们**买了**一些水果 (je vous ai acheté des fruits)\n\nComme pour 在 et 跟, le groupe « 给 + personne » se place **devant le verbe**, pas à la fin comme en français.\n\n(C'est surtout 打电话 qui l'utilise au niveau 1 ; les autres emplois s'étoffent au niveau 2.)",
      "**给** (gěi) is first a verb: “to give”: 请**给**我一杯茶 (please give me a tea).\n\nBut it also introduces **the person who receives or benefits** from an action, **before the verb**:\n• **给**我**打电话** (call me — “to me phone”)\n• 我**给**你们**买了**一些水果 (I bought you some fruit)\n\nLike 在 and 跟, “给 + person” goes **before the verb**, not at the end as in English.\n\n(At level 1 it mostly appears with 打电话; other uses expand at level 2.)",
    ),
    examples: [
      ex("请给我一杯茶。", "Qǐng gěi wǒ yì bēi chá.", "Un thé, s'il vous plaît.", "A tea, please."),
      ex("晚上给我打电话吧。", "Wǎnshang gěi wǒ dǎ diànhuà ba.", "Appelle-moi ce soir.", "Give me a call tonight."),
      ex("昨天我给妈妈打了电话。", "Zuótiān wǒ gěi māma dǎle diànhuà.", "Hier, j'ai appelé ma mère.", "I called my mom yesterday."),
      ex("我给你们买了一些水果。", "Wǒ gěi nǐmen mǎile yìxiē shuǐguǒ.", "Je vous ai acheté des fruits.", "I bought you some fruit."),
    ],
    pitfalls: t(
      "✗ 我打电话你 → ✓ 我给你打电话.\n✗ 我给打电话你 → ✓ 我给你打电话 (la personne juste après 给).",
      "✗ 我打电话你 → ✓ 我给你打电话.\n✗ 我给打电话你 → ✓ 我给你打电话 (the person right after 给).",
    ),
    category: "给 (verbe et coverbe) — complément de la leçon",
  },

  // ───────────────────────── Lesson 14 ─────────────────────────
  {
    id: "hsk1-g46",
    level: 1,
    title: t("了 de l'action accomplie ; négation 没 (有)", "了 for completed actions; negation with 没 (有)"),
    pattern: "Sujet + Verbe + 了 (+ nombre + spéc.) + Objet　/　Sujet + 没 (有) + Verbe",
    explanation: t(
      "Placé **juste après un verbe**, **了** indique que l'action est **accomplie** : 他买**了**一本书 (il a acheté un livre).\n\nQuand l'objet est simple (sans nombre), on met plutôt 了 en fin de phrase : 我吃饭**了** / 他吃早饭**了**.\n\n**Négation** : on utilise **没** ou **没有** devant le verbe, **et on supprime 了** : 他**没**买书 (il n'a pas acheté de livre). 我今天**没有**吃早饭.\n\nQuestion : 你吃饭**了吗**？ ou 你吃**没吃**饭？ / 你吃饭**了没有**？ Réponse négative fréquente : **还没（呢）** (pas encore).\n\n**Attention** : 了 **n'est pas un temps passé**. Une habitude passée n'en prend pas (我以前常常去 — « j'y allais souvent »), et 了 peut s'employer pour le futur (« quand j'aurai mangé… »).",
      "Right **after a verb**, **了** marks the action as **completed**: 他买**了**一本书 (he bought a book).\n\nWith a simple object (no number), 了 usually goes at the end: 我吃饭**了** / 他吃早饭**了**.\n\n**Negative**: use **没** or **没有** before the verb, **and drop 了**: 他**没**买书 (he didn't buy a book). 我今天**没有**吃早饭.\n\nQuestion: 你吃饭**了吗**？ or 你吃**没吃**饭？ / 你吃饭**了没有**？ Common negative answer: **还没（呢）** (not yet).\n\n**Careful**: 了 **isn't a past tense**. Past habits don't take it (“I used to go often”), and 了 can even be used for the future (“once I've eaten…”).",
    ),
    examples: [
      ex("他买了两个面包。", "Tā mǎile liǎng ge miànbāo.", "Il a acheté deux pains.", "He bought two loaves of bread."),
      ex("我写了两个汉字。", "Wǒ xiěle liǎng ge Hànzì.", "J'ai écrit deux caractères.", "I wrote two characters."),
      ex("他昨天没上课。", "Tā zuótiān méi shàngkè.", "Il n'est pas allé en cours hier.", "He didn't go to class yesterday."),
      ex("我今天没有吃早饭。", "Wǒ jīntiān méiyǒu chī zǎofàn.", "Je n'ai pas pris de petit-déjeuner aujourd'hui.", "I didn't have breakfast today."),
      ex("你吃饭了吗？——还没呢。", "Nǐ chī fàn le ma? — Hái méi ne.", "Tu as mangé ? — Pas encore.", "Have you eaten? — Not yet."),
    ],
    pitfalls: t(
      "✗ 我没买了书 → ✓ 我没买书 (没 et 了 ne vont pas ensemble).\n✗ 我昨天不去学校 (pour un fait passé) → ✓ 我昨天没去学校.\n✗ 我买了书 (sonne inachevé) → ✓ 我买了一本书 / 我买书了.",
      "✗ 我没买了书 → ✓ 我没买书 (没 and 了 don't mix).\n✗ 我昨天不去学校 (for a past fact) → ✓ 我昨天没去学校.\n✗ 我买了书 (sounds unfinished) → ✓ 我买了一本书 / 我买书了.",
    ),
    category: "【一14】【一21】【一41】动态助词“了” / 完成态 / 否定副词“没、没有”",
  },
  {
    id: "hsk1-g47",
    level: 1,
    title: t("一边 … 一边 … : faire deux choses en même temps", "一边 … 一边 …: doing two things at once"),
    pattern: "Sujet + 一边 + V1，一边 + V2",
    explanation: t(
      "**一边…一边…** (yìbiān… yìbiān…) exprime deux actions **simultanées**, comme « tout en… » : 他**一边**走路，**一边**唱歌 (il chante en marchant).\n\nLe sujet est placé **une seule fois**, au début. Chaque 一边 est suivi d'un verbe.\n\nC'est une façon simple de construire une **phrase à deux propositions** dès le niveau 1. Deux autres façons de coordonner : juxtaposer (我喜欢看电视，弟弟喜欢打球) ou utiliser 也 (这个房间很大，也很干净).",
      "**一边…一边…** (yìbiān… yìbiān…) expresses two **simultaneous** actions, like “while…-ing”: 他**一边**走路，**一边**唱歌 (he sings as he walks).\n\nThe subject appears **only once**, at the start. Each 一边 is followed by a verb.\n\nIt's an easy way to build a **two-clause sentence** at level 1. Two other ways to coordinate: simply juxtapose (我喜欢看电视，弟弟喜欢打球) or use 也 (这个房间很大，也很干净).",
    ),
    examples: [
      ex("他一边走路，一边唱歌。", "Tā yìbiān zǒulù, yìbiān chàng gē.", "Il chante en marchant.", "He sings while walking."),
      ex("哥哥一边看电视，一边吃东西。", "Gēge yìbiān kàn diànshì, yìbiān chī dōngxi.", "Mon grand frère mange devant la télé.", "My older brother eats while watching TV."),
      ex("我们一边吃饭，一边说话吧。", "Wǒmen yìbiān chī fàn, yìbiān shuōhuà ba.", "Parlons en mangeant.", "Let's talk while we eat."),
      ex("我喜欢看电视，弟弟喜欢打球。", "Wǒ xǐhuan kàn diànshì, dìdi xǐhuan dǎ qiú.", "Moi, j'aime la télé ; mon petit frère, le ballon.", "I like watching TV; my younger brother likes ball games."),
    ],
    pitfalls: t(
      "✗ 他一边走路，他一边唱歌 → ✓ 他一边走路，一边唱歌 (le sujet une seule fois).\n✗ 一边他走路 → ✓ 他一边走路.\nTon : 一边 se lit **yìbiān**.",
      "✗ 他一边走路，他一边唱歌 → ✓ 他一边走路，一边唱歌 (subject only once).\n✗ 一边他走路 → ✓ 他一边走路.\nTone: 一边 is read **yìbiān**.",
    ),
    category: "【一39】并列复句 (一边……，一边……)",
  },
  {
    id: "hsk1-g48",
    level: 1,
    title: t("地 : de l'adjectif à l'adverbe (认真地学习)", "地: from adjective to adverb (认真地学习)"),
    pattern: "Adjectif / Adverbe + 地 + Verbe",
    explanation: t(
      "**地** (de, même prononciation que 的 !) transforme un adjectif en **adverbe de manière**, un peu comme « -ment » en français ou « -ly » en anglais : 认真 (sérieux) → **认真地**学习 (étudier sérieusement).\n\n他**高兴地**说：« 我明天回家！ » (il dit joyeusement : …)\n\nLe groupe « adj. + 地 » se place **avant le verbe**.\n\nPour les adjectifs d'une syllabe, on s'en passe souvent : **快**走！ (marche vite !), **慢**点儿 (doucement). Et dans une phrase à l'impératif courte, 地 est souvent omis : 你认真写！\n\nMémo : **的** + nom (我的书), **地** + verbe (认真地写).",
      "**地** (de, pronounced just like 的!) turns an adjective into a **manner adverb**, like English “-ly”: 认真 (serious) → **认真地**学习 (study seriously).\n\n他**高兴地**说：“我明天回家！” (he said happily: …)\n\n“Adj. + 地” goes **before the verb**.\n\nOne-syllable adjectives often skip it: **快**走！ (walk fast!), **慢**点儿 (slow down). In short commands 地 is often dropped: 你认真写！\n\nMemo: **的** + noun (我的书), **地** + verb (认真地写).",
    ),
    examples: [
      ex("他高兴地说：“我明天回家。”", "Tā gāoxìng de shuō: “Wǒ míngtiān huí jiā.”", "Il a dit joyeusement : « Je rentre demain. »", "He said happily: “I'm going home tomorrow.”"),
      ex("我们要认真地准备考试。", "Wǒmen yào rènzhēn de zhǔnbèi kǎoshì.", "Nous devons préparer l'examen sérieusement.", "We need to prepare for the exam seriously."),
      ex("你认真写！", "Nǐ rènzhēn xiě!", "Écris avec soin !", "Write carefully!"),
      ex("孩子们高兴地唱歌。", "Háizimen gāoxìng de chàng gē.", "Les enfants chantent joyeusement.", "The children sing happily."),
    ],
    pitfalls: t(
      "✗ 他说高兴地 (calque de « il dit joyeusement ») → ✓ 他高兴地说.\n✗ 认真的学习 (à l'écrit standard) → ✓ 认真地学习 (的 devant un nom, 地 devant un verbe).",
      "✗ 他说高兴地 (from “he said happily”) → ✓ 他高兴地说.\n✗ 认真的学习 (in standard writing) → ✓ 认真地学习 (的 before nouns, 地 before verbs).",
    ),
    category: "【一20】【一28】结构助词“地” / 状语",
  },
];
