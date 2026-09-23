import type { GrammarPoint } from "../../types";
import { ex, t } from "./_h";

const C = {
  complex: "复句 / complex sentences",
  conj: "连词 / conjunctions",
  adv: "副词 / adverbs",
  prep: "介词 / prepositions",
  fixed: "固定格式 / set structures",
  special: "特殊句型 / special sentence patterns",
  verb: "动词 / verbs",
  part: "助词 / particles",
  style: "语体 / register & style",
  disc: "篇章 / discourse",
};

export const grammar: GrammarPoint[] = [
  {
    id: "hsk5-g01",
    level: 5,
    category: C.complex,
    title: t("之所以…是因为… : si…, c'est parce que…", "之所以…是因为…: the reason why… is that…"),
    pattern: "S + 之所以 + résultat，是因为 + cause",
    explanation: t(
      "Dans la phrase causale ordinaire (因为…所以…), la cause vient d'abord. **之所以…是因为…** **inverse l'ordre** : on part du **résultat connu** et on **met l'accent sur la cause**. En français : « Si…, c'est parce que… » ; « La raison pour laquelle…, c'est que… ».\n\n**之所以** se place **après le sujet** ; la seconde partie commence par **是因为** (ou 是由于、在于 à l'écrit). Structure typique des argumentations, des éditos et des dissertations HSK.",
      "In an ordinary causal sentence (因为…所以…) the cause comes first. **之所以…是因为…** **flips the order**: you start from the **known result** and **put the spotlight on the cause** — \"The reason why… is that…\".\n\n**之所以** goes **after the subject**; the second part starts with **是因为** (or 是由于、在于 in writing). A staple of arguments, editorials and HSK essays.",
    ),
    examples: [
      ex("这家公司之所以成功，是因为它非常重视客户的意见。", "Zhè jiā gōngsī zhīsuǒyǐ chénggōng, shì yīnwèi tā fēicháng zhòngshì kèhù de yìjiàn.", "Si cette entreprise a réussi, c'est parce qu'elle accorde une grande importance à l'avis des clients.", "The reason this company succeeded is that it really values customer feedback."),
      ex("我之所以选择这个专业，是因为对经济感兴趣。", "Wǒ zhīsuǒyǐ xuǎnzé zhège zhuānyè, shì yīnwèi duì jīngjì gǎn xìngqù.", "Si j'ai choisi cette filière, c'est parce que l'économie m'intéresse.", "I chose this major because I'm interested in economics."),
      ex("房价之所以这么高，主要是由于供不应求。", "Fángjià zhīsuǒyǐ zhème gāo, zhǔyào shì yóuyú gōng bú yìng qiú.", "Si les prix de l'immobilier sont si élevés, c'est surtout parce que l'offre ne suit pas la demande.", "House prices are so high mainly because demand outstrips supply."),
    ],
    pitfalls: t(
      "✗ 之所以他成功… → ✓ 他之所以成功… (之所以 **après** le sujet).\n✗ 之所以…所以… → la seconde partie doit être ✓ 是因为….\n✗ 因为…之所以… : ordre inversé impossible.",
      "✗ 之所以他成功… → ✓ 他之所以成功… (之所以 **after** the subject).\n✗ 之所以…所以… → the second part must be ✓ 是因为….\n✗ 因为…之所以…: can't flip it back.",
    ),
  },
  {
    id: "hsk5-g02",
    level: 5,
    category: C.complex,
    title: t("与其…不如… : plutôt que…, mieux vaut…", "与其…不如…: rather than…, better to…"),
    pattern: "与其 + A，(S) 不如 + B",
    explanation: t(
      "On compare **deux options** et on **choisit la seconde** : « plutôt que de faire A, mieux vaut faire B ». **与其** introduit l'option **rejetée**, **不如** l'option **préférée**.\n\nOn renforce souvent avec **还**, **倒** : 与其…还不如…/倒不如…. Attention à l'ordre : c'est l'inverse de 宁可 (où l'option choisie vient d'abord).",
      "You compare **two options** and **pick the second**: \"rather than A, better to B\". **与其** introduces the **rejected** option, **不如** the **preferred** one.\n\nOften strengthened with **还** or **倒**: 与其…还不如…/倒不如…. Watch the order: it's the reverse of 宁可 (where the chosen option comes first).",
    ),
    examples: [
      ex("与其在家里抱怨，不如出去找找机会。", "Yǔqí zài jiā lǐ bàoyuàn, bùrú chūqu zhǎozhao jīhuì.", "Plutôt que de te plaindre à la maison, va plutôt chercher des occasions.", "Rather than complaining at home, go out and look for opportunities."),
      ex("与其让孩子上那么多补习班，还不如让他多睡一会儿。", "Yǔqí ràng háizi shàng nàme duō bǔxíbān, hái bùrú ràng tā duō shuì yíhuìr.", "Plutôt que d'inscrire l'enfant à tant de cours du soir, mieux vaut le laisser dormir un peu plus.", "Rather than sending the kid to so many cram classes, better to let him sleep a bit more."),
      ex("与其花钱买名牌，倒不如存起来。", "Yǔqí huā qián mǎi míngpái, dào bùrú cún qǐlái.", "Plutôt que de dépenser en marques, mieux vaut mettre de côté.", "Rather than spending on brands, you'd be better off saving."),
    ],
    pitfalls: t(
      "✗ 与其…还是… → ✓ 与其…不如….\n✗ Inverser les options : 与其 + ce que tu **préfères** ✗ → 与其 porte toujours l'option **écartée**.\n✗ 不如 avant le sujet : ✗ 不如我们… est possible à l'oral, mais standard : ✓ (我们)不如….",
      "✗ 与其…还是… → ✓ 与其…不如….\n✗ Swapping the options: 与其 always carries the **rejected** choice.\n✗ Subject placement: ✓ 与其…，我们不如… (subject before 不如).",
    ),
  },
  {
    id: "hsk5-g03",
    level: 5,
    category: C.complex,
    title: t("宁可…也不/也要… : plutôt… que de…", "宁可…也不/也要…: would rather… than…"),
    pattern: "S + 宁可 + A，也不 + B | S + 宁可 + sacrifice，也要 + but",
    explanation: t(
      "**宁可** (ou **宁愿**) exprime un **choix difficile** : on accepte une option **pénible** pour éviter pire ou pour atteindre un but.\n\n• **宁可 A，也不 B** : « je préfère A plutôt que B » (on refuse B catégoriquement).\n• **宁可 A，也要 B** : « quitte à A, je veux B » (A est le sacrifice accepté).\n\nContrairement à 与其…不如…, l'option **choisie** vient **en premier**. Le ton est **déterminé**, souvent moral : 宁可站着死，也不跪着生 (plutôt mourir debout que vivre à genoux).",
      "**宁可** (or **宁愿**) expresses a **hard choice**: you accept a **painful** option to avoid something worse or reach a goal.\n\n• **宁可 A，也不 B**: \"I'd rather A than B\" (flatly refusing B).\n• **宁可 A，也要 B**: \"even at the cost of A, I want B\" (A is the accepted sacrifice).\n\nUnlike 与其…不如…, the **chosen** option comes **first**. The tone is **resolute**, often moral: 宁可站着死，也不跪着生 (better to die standing than live on your knees).",
    ),
    examples: [
      ex("我宁可走路回家，也不坐他的车。", "Wǒ nìngkě zǒulù huí jiā, yě bú zuò tā de chē.", "Je préfère rentrer à pied plutôt que de monter dans sa voiture.", "I'd rather walk home than ride in his car."),
      ex("她宁可少睡几个小时，也要把这本小说读完。", "Tā nìngkě shǎo shuì jǐ ge xiǎoshí, yě yào bǎ zhè běn xiǎoshuō dú wán.", "Quitte à dormir quelques heures de moins, elle veut finir ce roman.", "She'd sacrifice a few hours of sleep to finish this novel."),
      ex("老人宁愿住在老房子里，也不愿意搬到城里。", "Lǎorén nìngyuàn zhù zài lǎo fángzi lǐ, yě bú yuànyì bān dào chéng lǐ.", "Le vieil homme préfère vivre dans sa vieille maison plutôt que de déménager en ville.", "The old man would rather live in his old house than move to the city."),
    ],
    pitfalls: t(
      "✗ 宁可…不如… → ✓ 宁可…也不… (ne mélange pas les deux structures).\n✗ 宁可 + option agréable : ✗ 我宁可去度假，也不工作 — ça marche grammaticalement, mais 宁可 suppose que A est un **sacrifice** ; sinon utilise 我更想….",
      "✗ 宁可…不如… → ✓ 宁可…也不… (don't mix the two patterns).\n✗ 宁可 + something pleasant: 宁可 implies A is a **sacrifice**; for a simple preference say 我更想….",
    ),
  },
  {
    id: "hsk5-g04",
    level: 5,
    category: C.conj,
    title: t("何况 / 况且 : à plus forte raison / de plus", "何况 / 况且: let alone / besides"),
    pattern: "A 都/尚且…，(更)何况 B (呢)？ | 理由1，况且 + 理由2",
    explanation: t(
      "**何况** fait un **raisonnement a fortiori** : si même A (cas facile) pose problème, **à plus forte raison** B (cas plus difficile). En français : « alors… ! », « encore moins… », « a fortiori ». La première partie contient souvent **连…都** ou **尚且** ; la phrase finit souvent par **呢**.\n\n**况且** (« d'ailleurs, en plus ») ajoute un **argument supplémentaire** pour appuyer une décision. Il s'emploie aussi sous la forme **更何况** avec le sens de « d'autant plus que ».",
      "**何况** makes an **a fortiori** argument: if even A (easy case) is a problem, **all the more so** B (harder case) — \"let alone\", \"much less\". The first part often has **连…都** or **尚且**; the sentence often ends in **呢**.\n\n**况且** (\"besides, moreover\") adds **one more reason** to back up a decision. **更何况** can also mean \"all the more since\".",
    ),
    examples: [
      ex("这种垃圾连专家都分不清，何况普通人呢？", "Zhè zhǒng lājī lián zhuānjiā dōu fēn bu qīng, hékuàng pǔtōngrén ne?", "Même les experts n'arrivent pas à trier ce genre de déchets, alors les gens ordinaires…", "Even experts can't sort this kind of rubbish, let alone ordinary people."),
      ex("今天太晚了，况且还下着雨，明天再去吧。", "Jīntiān tài wǎn le, kuàngqiě hái xià zhe yǔ, míngtiān zài qù ba.", "Il est trop tard, et en plus il pleut : allons-y demain.", "It's too late today, and besides it's raining — let's go tomorrow."),
      ex("保护环境是大家的事，更何况这关系到我们的孩子。", "Bǎohù huánjìng shì dàjiā de shì, gèng hékuàng zhè guānxi dào wǒmen de háizi.", "Protéger l'environnement est l'affaire de tous, d'autant plus que l'avenir de nos enfants en dépend.", "Protecting the environment is everyone's business — all the more since it concerns our children."),
    ],
    pitfalls: t(
      "✗ 何况 pour le cas **plus facile** : ✗ 大人都搬不动，何况大力士？→ l'élément après 何况 doit être le cas **plus difficile** (✓ 何况孩子).\n✗ 况且 ne sert pas à la gradation a fortiori, seulement à **ajouter** une raison.",
      "✗ Using 何况 with the **easier** case: ✗ 大人都搬不动，何况大力士？→ what follows 何况 must be the **harder** case (✓ 何况孩子).\n✗ 况且 doesn't do a fortiori; it only **adds** a reason.",
    ),
  },
  {
    id: "hsk5-g05",
    level: 5,
    category: C.conj,
    title: t("以免 / 免得 : pour éviter que", "以免 / 免得: so as not to, lest"),
    pattern: "Action (précaution)，以免/免得 + conséquence indésirable",
    explanation: t(
      "**以免** (écrit) et **免得** (oral) introduisent ce qu'on veut **éviter** grâce à l'action de la première proposition : « pour ne pas… », « de peur que… », « afin d'éviter que… ».\n\nIls se placent **en tête de la seconde proposition**. Ce qui suit est **négatif** (un risque) — mais **sans négation** : 以免迟到 = pour ne pas être en retard. C'est le piège principal pour les francophones.",
      "**以免** (written) and **免得** (spoken) introduce what you want to **avoid** by doing the first action: \"so as not to\", \"lest\", \"to avoid\".\n\nThey open the **second clause**. What follows is **negative** (a risk) — but with **no negation word**: 以免迟到 = so as not to be late. That's the main trap for English/French speakers.",
    ),
    examples: [
      ex("出门前请关好窗户，以免下雨时进水。", "Chūmén qián qǐng guān hǎo chuānghu, yǐmiǎn xià yǔ shí jìn shuǐ.", "Ferme bien les fenêtres avant de sortir, pour éviter que la pluie n'entre.", "Close the windows before going out, so the rain doesn't get in."),
      ex("电池要单独回收，以免污染土地和水。", "Diànchí yào dāndú huíshōu, yǐmiǎn wūrǎn tǔdì hé shuǐ.", "Les piles doivent être recyclées à part, pour ne pas polluer les sols et l'eau.", "Batteries must be recycled separately to avoid polluting soil and water."),
      ex("你早点儿告诉他，免得他担心。", "Nǐ zǎo diǎnr gàosu tā, miǎnde tā dānxīn.", "Préviens-le plus tôt, qu'il ne s'inquiète pas.", "Tell him early so he doesn't worry."),
    ],
    pitfalls: t(
      "✗ 以免不迟到 → ✓ 以免迟到 (pas de négation : 以免 contient déjà le sens « éviter »).\n✗ 以免 + résultat souhaité : ✗ 多穿点，以免暖和 → ✓ 以免感冒。",
      "✗ 以免不迟到 → ✓ 以免迟到 (no negation: 以免 already means \"avoid\").\n✗ 以免 + a desired result: ✗ 多穿点，以免暖和 → ✓ 以免感冒。",
    ),
  },
  {
    id: "hsk5-g06",
    level: 5,
    category: C.conj,
    title: t("从而 : et par là même, de sorte que", "从而: thereby, thus"),
    pattern: "Moyen/cause，从而 + résultat (V)",
    explanation: t(
      "**从而** relie une **action ou mesure** à son **résultat positif ou logique** : « et ainsi », « ce qui permet de », « de ce fait ». Registre **écrit** (rapports, économie, politique).\n\nIl se place en tête de la seconde proposition, **sans répéter le sujet**, et il est suivi d'un **verbe** (提高、促进、减少、实现…). Différence avec 因此 : 因此 marque une conséquence ; 从而 insiste sur le **mécanisme** : « par ce moyen ».",
      "**从而** links an **action or measure** to its **logical (usually positive) result**: \"thereby\", \"thus\", \"which in turn\". **Written** register (reports, economics, policy).\n\nIt opens the second clause, **without repeating the subject**, and is followed by a **verb** (提高、促进、减少、实现…). Versus 因此: 因此 marks a consequence; 从而 stresses the **mechanism** — \"by this means\".",
    ),
    examples: [
      ex("政府降低了税收，从而促进了消费。", "Zhèngfǔ jiàngdī le shuìshōu, cóng'ér cùjìn le xiāofèi.", "Le gouvernement a baissé les impôts, ce qui a stimulé la consommation.", "The government cut taxes, thereby boosting consumption."),
      ex("公司改进了技术，从而大大降低了成本。", "Gōngsī gǎijìn le jìshù, cóng'ér dàdà jiàngdī le chéngběn.", "L'entreprise a amélioré sa technologie et a ainsi fortement réduit ses coûts.", "The company improved its technology and thus greatly cut costs."),
      ex("多读书可以开阔眼界，从而更好地理解世界。", "Duō dú shū kěyǐ kāikuò yǎnjiè, cóng'ér gèng hǎo de lǐjiě shìjiè.", "Lire élargit l'horizon, et permet ainsi de mieux comprendre le monde.", "Reading widens your horizons and so helps you understand the world better."),
    ],
    pitfalls: t(
      "✗ 从而他们… → ✓ 从而… + verbe directement (pas de nouveau sujet).\n✗ 从而 à l'oral familier : ✗ 我饿了，从而去吃饭 → ✓ 所以/于是。\n✗ Confondre 从而 et 从此 (« dès lors », point de départ temporel).",
      "✗ 从而他们… → ✓ 从而 + verb directly (no new subject).\n✗ 从而 in casual speech: ✗ 我饿了，从而去吃饭 → ✓ 所以/于是。\n✗ Mixing up 从而 and 从此 (\"from then on\", a time starting point).",
    ),
  },
  {
    id: "hsk5-g07",
    level: 5,
    category: C.fixed,
    title: t("以…为… : prendre… comme…", "以…为…: take… as…"),
    pattern: "以 + A + 为 + B (主/中心/例/目标/荣…)",
    explanation: t(
      "**以 A 为 B** (écrit) = « **prendre A comme B**, considérer A comme B ». C'est l'équivalent soutenu de 把 A 当作 B. Combinaisons très fréquentes :\n\n• **以…为主** : « avoir… comme élément principal » (以米饭为主).\n• **以…为例** : « prendre… comme exemple ».\n• **以…为中心 / 为目标 / 为荣** : « centré sur / avoir pour but / être fier de ».\n\nIci **为** se lit **wéi** (2e ton), pas wèi.",
      "**以 A 为 B** (written) = \"**take A as B**, regard A as B\" — the formal counterpart of 把 A 当作 B. Very frequent combinations:\n\n• **以…为主**: \"mainly consist of\" (以米饭为主).\n• **以…为例**: \"take… as an example\".\n• **以…为中心 / 为目标 / 为荣**: \"centred on / aim at / be proud of\".\n\nHere **为** is read **wéi** (2nd tone), not wèi.",
    ),
    examples: [
      ex("南方人的饮食以米饭为主。", "Nánfāngrén de yǐnshí yǐ mǐfàn wéi zhǔ.", "L'alimentation des gens du Sud repose principalement sur le riz.", "Southerners' diet is mainly based on rice."),
      ex("以北京为例，空气质量这几年明显改善了。", "Yǐ Běijīng wéi lì, kōngqì zhìliàng zhè jǐ nián míngxiǎn gǎishàn le.", "Prenons Pékin : la qualité de l'air s'y est nettement améliorée ces dernières années.", "Take Beijing: air quality has clearly improved in recent years."),
      ex("这个城市以发展绿色能源为目标。", "Zhège chéngshì yǐ fāzhǎn lǜsè néngyuán wéi mùbiāo.", "Cette ville s'est fixé pour objectif de développer les énergies vertes.", "This city aims to develop green energy."),
    ],
    pitfalls: t(
      "✗ Lire 为 *wèi* : ici ✓ *wéi*.\n✗ 以米饭是主 → ✓ 以米饭为主 (为 remplace 是 à l'écrit).\n✗ Utiliser 以…为… dans une conversation banale sonne pompeux → ✓ 主要吃米饭。",
      "✗ Reading 为 as *wèi*: here it's ✓ *wéi*.\n✗ 以米饭是主 → ✓ 以米饭为主 (为 replaces 是 in writing).\n✗ Using 以…为… in casual chat sounds stiff → ✓ 主要吃米饭。",
    ),
  },
  {
    id: "hsk5-g08",
    level: 5,
    category: C.prep,
    title: t("在…下 : sous (l'effet de), grâce à", "在…下: under, with (the help of)"),
    pattern: "在 + (N 的) + 帮助/影响/支持/领导/条件 + 下，…",
    explanation: t(
      "**在…下** indique la **condition** ou **l'influence** sous laquelle quelque chose se produit : « sous l'influence de », « avec l'aide de », « dans ces conditions ». Le groupe se place en tête de phrase.\n\nLe nom central est presque toujours abstrait : **帮助、影响、支持、指导、压力、条件、情况**. Ne le confonds pas avec 在…上 (« en matière de », 在工作上) ni 在…中 (« au cours de », 在学习中).",
      "**在…下** marks the **condition** or **influence** under which something happens: \"under the influence of\", \"with the help of\", \"under these conditions\". The phrase opens the sentence.\n\nThe core noun is almost always abstract: **帮助、影响、支持、指导、压力、条件、情况**. Don't confuse it with 在…上 (\"in terms of\", 在工作上) or 在…中 (\"in the course of\", 在学习中).",
    ),
    examples: [
      ex("在老师的帮助下，他的成绩提高得很快。", "Zài lǎoshī de bāngzhù xià, tā de chéngjì tígāo de hěn kuài.", "Avec l'aide de son professeur, ses notes ont vite progressé.", "With the teacher's help, his grades improved quickly."),
      ex("在经济全球化的影响下，很多企业开始走向海外。", "Zài jīngjì quánqiúhuà de yǐngxiǎng xià, hěn duō qǐyè kāishǐ zǒuxiàng hǎiwài.", "Sous l'effet de la mondialisation, beaucoup d'entreprises se tournent vers l'étranger.", "Under the influence of globalisation, many firms are expanding abroad."),
      ex("在这种情况下，我们只能降价。", "Zài zhè zhǒng qíngkuàng xià, wǒmen zhǐ néng jiàngjià.", "Dans ces conditions, nous ne pouvons que baisser les prix.", "Under these circumstances, we can only cut prices."),
    ],
    pitfalls: t(
      "✗ 在老师的帮助，… → ✓ 在老师的帮助下，… (ne pas oublier 下).\n✗ 在工作下 → ✓ 在工作上 (domaine) ; 下 va avec influence/aide/condition.",
      "✗ 在老师的帮助，… → ✓ 在老师的帮助下，… (don't drop 下).\n✗ 在工作下 → ✓ 在工作上 (domain); 下 goes with influence/help/conditions.",
    ),
  },
  {
    id: "hsk5-g09",
    level: 5,
    category: C.fixed,
    title: t("就…而言 : en ce qui concerne…", "就…而言: as far as… is concerned"),
    pattern: "就 + N/aspect + 而言/来说，…",
    explanation: t(
      "**就…而言** (écrit) ou **就…来说** (plus neutre) délimite **l'angle** ou **l'aspect** sous lequel on juge : « en ce qui concerne… », « du point de vue de… », « pour ce qui est de… ».\n\nIl sert à **nuancer** : on évalue une chose sous un angle précis, en laissant entendre qu'ailleurs c'est différent. Proche de 对…来说, mais 就…而言 porte plutôt sur un **aspect** (就价格而言) que sur une **personne**.",
      "**就…而言** (written) or **就…来说** (more neutral) sets the **angle** or **aspect** you're judging from: \"as far as… is concerned\", \"in terms of…\".\n\nIt's used to **nuance**: you assess one aspect while implying others may differ. Close to 对…来说, but 就…而言 is more about an **aspect** (就价格而言) than a **person**.",
    ),
    examples: [
      ex("就性格而言，他比较内向。", "Jiù xìnggé ér yán, tā bǐjiào nèixiàng.", "Pour ce qui est du caractère, il est plutôt introverti.", "In terms of personality, he's rather introverted."),
      ex("就目前的情况来说，我们还不能放松。", "Jiù mùqián de qíngkuàng lái shuō, wǒmen hái bù néng fàngsōng.", "Vu la situation actuelle, on ne peut pas encore se relâcher.", "As things stand, we can't relax yet."),
      ex("就心理健康而言，睡眠和运动同样重要。", "Jiù xīnlǐ jiànkāng ér yán, shuìmián hé yùndòng tóngyàng zhòngyào.", "En matière de santé mentale, le sommeil et le sport sont tout aussi importants.", "As far as mental health goes, sleep and exercise matter equally."),
    ],
    pitfalls: t(
      "✗ 就性格来看而言 : ne cumule pas les cadres.\n✗ 而言 lu *ér yàn* : ✓ *ér yán*.\n✗ 就我而言 est possible (« en ce qui me concerne »), mais ✗ 就我来看而言.",
      "✗ 就性格来看而言: don't stack frames.\n✗ Reading 而言 as *ér yàn*: ✓ *ér yán*.\n✗ 就我而言 is fine (\"as for me\"), but not ✗ 就我来看而言.",
    ),
  },
  {
    id: "hsk5-g10",
    level: 5,
    category: C.adv,
    title: t("未必 / 不见得 : pas forcément", "未必 / 不见得: not necessarily"),
    pattern: "S + 未必/不见得 + V/Adj",
    explanation: t(
      "**未必** (écrit/neutre) et **不见得** (oral) expriment un **doute poli** : « pas forcément », « ce n'est pas dit que ». Ce sont des négations **atténuées**, idéales pour contredire quelqu'un sans le brusquer.\n\nComparer :\n• 不一定 = pas forcément (neutre, très courant)\n• **未必** = pas forcément (plus soutenu, un peu plus sceptique)\n• 一定不 = certainement pas (catégorique !)",
      "**未必** (written/neutral) and **不见得** (spoken) express **polite doubt**: \"not necessarily\", \"it's not certain that\". They're **softened** negations — ideal for disagreeing without bluntness.\n\nCompare:\n• 不一定 = not necessarily (neutral, very common)\n• **未必** = not necessarily (more formal, a bit more sceptical)\n• 一定不 = definitely not (categorical!)",
    ),
    examples: [
      ex("成绩好的学生未必适合做研究。", "Chéngjì hǎo de xuésheng wèibì shìhé zuò yánjiū.", "Un bon élève n'est pas forcément fait pour la recherche.", "Students with good grades aren't necessarily suited to research."),
      ex("贵的东西不见得就好。", "Guì de dōngxi bú jiànde jiù hǎo.", "Ce qui est cher n'est pas forcément bon.", "Expensive things aren't necessarily good."),
      ex("他说的未必是真话。", "Tā shuō de wèibì shì zhēn huà.", "Ce qu'il dit n'est pas forcément la vérité.", "What he says isn't necessarily true."),
    ],
    pitfalls: t(
      "✗ 未必不 = double négation → « probablement si » : 他未必不知道 = il le sait sans doute.\n✗ 未必 ≠ 必须不 ; ne l'utilise pas pour une interdiction.\n✗ 不见得 lu *bú jiàn dé* : ✓ *bú jiànde* (得 neutre).",
      "✗ 未必不 is a double negative → \"quite possibly does\": 他未必不知道 = he probably knows.\n✗ 未必 isn't a prohibition.\n✗ 不见得: ✓ *bú jiànde* (neutral 得).",
    ),
  },
  {
    id: "hsk5-g11",
    level: 5,
    category: C.adv,
    title: t("难免 / 不免 : inévitablement", "难免 / 不免: inevitably, bound to"),
    pattern: "S + 难免 + (会) + V | S + 不免 + V (réaction)",
    explanation: t(
      "**难免** (adjectif/adverbe) signifie « **difficile à éviter** » : « il est normal que », « on ne peut s'empêcher de ». Il sert souvent à **dédramatiser** : 犯错是难免的 (faire des erreurs, c'est inévitable).\n\n**不免** (adverbe) décrit une **réaction naturelle** à une situation : « ne pas pouvoir s'empêcher de ». Il porte souvent sur un sentiment (不免有些担心).\n\n**难免** peut aussi être attribut : …是难免的. 不免, non.",
      "**难免** means \"**hard to avoid**\": \"it's only natural that\", \"bound to\". It's often used to **reassure**: 犯错是难免的 (mistakes are inevitable).\n\n**不免** (adverb) describes a **natural reaction** to a situation: \"can't help but\". It often governs a feeling (不免有些担心).\n\n**难免** can also be a predicate: …是难免的. 不免 can't.",
    ),
    examples: [
      ex("刚开始工作，犯点儿错是难免的。", "Gāng kāishǐ gōngzuò, fàn diǎnr cuò shì nánmiǎn de.", "Quand on débute, c'est normal de faire quelques erreurs.", "When you've just started a job, a few mistakes are inevitable."),
      ex("第一次离开家，心里难免会有点儿孤独。", "Dì-yī cì líkāi jiā, xīn lǐ nánmiǎn huì yǒudiǎnr gūdú.", "Quand on quitte la maison pour la première fois, on se sent forcément un peu seul.", "Leaving home for the first time, you're bound to feel a bit lonely."),
      ex("听到这个消息，大家不免有些失望。", "Tīngdào zhège xiāoxi, dàjiā bùmiǎn yǒuxiē shīwàng.", "En apprenant la nouvelle, tout le monde n'a pu s'empêcher d'être un peu déçu.", "Hearing the news, everyone couldn't help feeling a little disappointed."),
    ],
    pitfalls: t(
      "✗ 难免不犯错 : attention, 难免 + négation peut créer un double sens. Préfère ✓ 难免会犯错。\n✗ 这是不免的 → ✓ 这是难免的。",
      "✗ 难免不犯错: 难免 + negation gets confusing. Prefer ✓ 难免会犯错。\n✗ 这是不免的 → ✓ 这是难免的。",
    ),
  },
  {
    id: "hsk5-g12",
    level: 5,
    category: C.adv,
    title: t("毕竟 : après tout", "毕竟: after all"),
    pattern: "(虽然/尽管…)，S + 毕竟 + 是/V…",
    explanation: t(
      "**毕竟** rappelle un **fait essentiel qui l'emporte** sur le reste : « après tout », « quand même », « il ne faut pas oublier que ». Il sert souvent à **excuser** ou **relativiser** : 他毕竟还是个孩子 (ce n'est qu'un enfant, après tout).\n\nIl se place après le sujet, fréquemment devant **是**. Souvent précédé d'une concession (虽然…) qu'il vient contrebalancer.",
      "**毕竟** recalls a **key fact that outweighs** the rest: \"after all\", \"when all is said and done\". It's often used to **excuse** or **put in perspective**: 他毕竟还是个孩子 (he's only a child, after all).\n\nIt goes after the subject, often before **是**. Frequently preceded by a concession (虽然…) that it counterbalances.",
    ),
    examples: [
      ex("别怪他了，他毕竟还是个孩子。", "Bié guài tā le, tā bìjìng hái shì ge háizi.", "Ne lui en veux pas, ce n'est qu'un enfant, après tout.", "Don't blame him — he's only a child, after all."),
      ex("在线课程虽然方便，但毕竟不能完全代替老师。", "Zàixiàn kèchéng suīrán fāngbiàn, dàn bìjìng bù néng wánquán dàitì lǎoshī.", "Les cours en ligne sont pratiques, mais ils ne peuvent tout de même pas remplacer complètement un professeur.", "Online courses are convenient, but after all they can't fully replace a teacher."),
      ex("考试成绩毕竟只是一个方面。", "Kǎoshì chéngjì bìjìng zhǐ shì yí ge fāngmiàn.", "Les résultats aux examens ne sont qu'un aspect parmi d'autres, après tout.", "Exam scores are just one aspect, after all."),
    ],
    pitfalls: t(
      "✗ 毕竟 = « finalement » (au bout d'un processus) → pour ça ✓ 终于 / 最后。毕竟 = argument décisif.\n✗ 毕竟他是孩子 : possible à l'oral, mais la place standard est ✓ 他毕竟是孩子。",
      "✗ 毕竟 as \"finally\" (end of a process) → use ✓ 终于 / 最后. 毕竟 = decisive argument.\n✗ 毕竟他是孩子 occurs in speech, but standard is ✓ 他毕竟是孩子。",
    ),
  },
  {
    id: "hsk5-g13",
    level: 5,
    category: C.adv,
    title: t("倒 : pourtant, plutôt (contraste)", "倒: actually, on the contrary"),
    pattern: "S + 倒 + V/Adj (contraire à l'attente) | Adj 倒是 Adj，就是/可是…",
    explanation: t(
      "L'adverbe **倒** (dào) signale un **contraste avec l'attente** ou avec ce qui précède :\n\n1. **Surprise** : 你倒说得轻松 (« c'est facile à dire, pour toi ! »), 没想到他倒先来了.\n2. **Concession** : **A 倒是 A，就是/可是 B** = « pour ce qui est de A, c'est A, mais… » : 这件衣服好看倒是好看，就是太贵了.\n3. Adoucir une suggestion : 你倒是说话呀！(« mais dis quelque chose ! »).\n\nC'est un mot très idiomatique, fréquent dans les récits et les dialogues.",
      "The adverb **倒** (dào) signals a **contrast with expectation** or with what came before:\n\n1. **Surprise**: 你倒说得轻松 (\"easy for you to say!\"), 没想到他倒先来了.\n2. **Concession**: **A 倒是 A，就是/可是 B** = \"it's A all right, but…\": 这件衣服好看倒是好看，就是太贵了.\n3. Urging: 你倒是说话呀！(\"well, say something!\").\n\nIt's highly idiomatic and frequent in stories and dialogue.",
    ),
    examples: [
      ex("这本小说长倒是长，可是一点儿也不无聊。", "Zhè běn xiǎoshuō cháng dàoshì cháng, kěshì yìdiǎnr yě bù wúliáo.", "Ce roman est long, c'est vrai, mais il n'est pas du tout ennuyeux.", "This novel is long, sure, but it's not boring at all."),
      ex("我以为他会生气，他倒笑了。", "Wǒ yǐwéi tā huì shēngqì, tā dào xiào le.", "Je pensais qu'il allait se fâcher ; au contraire, il a ri.", "I thought he'd get angry, but he actually laughed."),
      ex("你说得倒容易，你来试试！", "Nǐ shuō de dào róngyì, nǐ lái shìshi!", "Facile à dire ! Essaie un peu, toi !", "Easy for you to say — you try it!"),
    ],
    pitfalls: t(
      "✗ Confondre 倒 (dào, adverbe de contraste) et 倒 (dǎo, « tomber »).\n✗ 倒 avant le sujet : ✗ 倒他笑了 → ✓ 他倒笑了。",
      "✗ Confusing 倒 (dào, contrast adverb) with 倒 (dǎo, \"to fall\").\n✗ 倒 before the subject: ✗ 倒他笑了 → ✓ 他倒笑了。",
    ),
  },
  {
    id: "hsk5-g14",
    level: 5,
    category: C.complex,
    title: t("一旦…就… : dès lors que, une fois que", "一旦…就…: once, as soon as (something happens)"),
    pattern: "一旦 + événement (souvent grave)，(S) 就 + conséquence",
    explanation: t(
      "**一旦** (« un jour où ») introduit un événement **décisif**, souvent **négatif ou irréversible**, dont découle une conséquence : « si jamais », « dès lors que », « une fois que ».\n\nIl peut se placer avant ou après le sujet. La seconde partie contient **就** ou **便**. Différence avec 一…就… : 一…就… = succession rapide et habituelle ; **一旦** = condition décisive, parfois hypothétique.",
      "**一旦** (\"one day when\") introduces a **decisive** event, often **negative or irreversible**, with a consequence: \"once\", \"if ever\", \"the moment that\".\n\nIt can go before or after the subject. The second part has **就** or **便**. Versus 一…就…: 一…就… = quick, habitual succession; **一旦** = decisive, sometimes hypothetical condition.",
    ),
    examples: [
      ex("一旦失去信用，就很难再找到合作伙伴。", "Yídàn shīqù xìnyòng, jiù hěn nán zài zhǎodào hézuò huǒbàn.", "Une fois qu'on a perdu la confiance, il est très difficile de retrouver des partenaires.", "Once you lose your credibility, it's very hard to find partners again."),
      ex("经济一旦出现问题，普通人最先受到影响。", "Jīngjì yídàn chūxiàn wèntí, pǔtōngrén zuì xiān shòudào yǐngxiǎng.", "Dès que l'économie a des problèmes, ce sont les gens ordinaires qui sont touchés en premier.", "The moment the economy runs into trouble, ordinary people are hit first."),
      ex("习惯一旦养成，就不容易改变。", "Xíguàn yídàn yǎngchéng, jiù bù róngyì gǎibiàn.", "Une fois qu'une habitude est prise, elle est difficile à changer.", "Once a habit forms, it's hard to change."),
    ],
    pitfalls: t(
      "✗ 一旦 pour une habitude banale : ✗ 我一旦下班就回家 → ✓ 我一下班就回家。\n✗ Oublier 就 : ✓ 一旦…就….",
      "✗ 一旦 for a routine habit: ✗ 我一旦下班就回家 → ✓ 我一下班就回家。\n✗ Dropping 就: ✓ 一旦…就….",
    ),
  },
  {
    id: "hsk5-g15",
    level: 5,
    category: C.fixed,
    title: t("凡是…都… : tout ce qui…, sans exception", "凡是…都…: all, every (without exception)"),
    pattern: "凡是 + N/proposition relative (的)，都 + V",
    explanation: t(
      "**凡是** (« tout ce qui, quiconque ») englobe **tous les éléments d'une catégorie, sans exception**. On l'utilise pour énoncer une **règle générale** : 凡是…的，都….\n\nIl se place en tête de phrase et exige **都** dans la suite. Registre soutenu : règlements, principes, proverbes.",
      "**凡是** (\"all that, whoever\") covers **every member of a category, without exception**. It states a **general rule**: 凡是…的，都….\n\nIt opens the sentence and requires **都** afterwards. Formal register: regulations, principles, sayings.",
    ),
    examples: [
      ex("凡是能回收的垃圾，都要放进蓝色的桶里。", "Fánshì néng huíshōu de lājī, dōu yào fàng jìn lánsè de tǒng lǐ.", "Tous les déchets recyclables doivent aller dans la poubelle bleue.", "All recyclable waste must go in the blue bin."),
      ex("凡是参加比赛的人，都可以得到一份礼物。", "Fánshì cānjiā bǐsài de rén, dōu kěyǐ dédào yí fèn lǐwù.", "Tous les participants au concours recevront un cadeau.", "Everyone who takes part gets a gift."),
      ex("凡是他答应的事，都一定会做到。", "Fánshì tā dāying de shì, dōu yídìng huì zuò dào.", "Tout ce qu'il promet, il le fait sans faute.", "Whatever he promises, he always delivers."),
    ],
    pitfalls: t(
      "✗ 凡是参加的人可以得到礼物 → ✓ …都可以… (都 obligatoire).\n✗ 凡是 + un seul individu : ✗ 凡是我哥哥… → 凡是 porte sur une **catégorie**.",
      "✗ 凡是参加的人可以得到礼物 → ✓ …都可以… (都 required).\n✗ 凡是 + a single individual: ✗ 凡是我哥哥… → 凡是 covers a **category**.",
    ),
  },
  {
    id: "hsk5-g16",
    level: 5,
    category: C.complex,
    title: t("固然…但… : certes…, mais…", "固然…但…: admittedly…, but…"),
    pattern: "A 固然 + Adj/V，但(是)/可是 + B (也…)",
    explanation: t(
      "**固然** (« certes, il est vrai que ») **reconnaît la validité** d'un premier point avant d'en **introduire un second**, souvent plus important. C'est l'outil de base de l'**argumentation nuancée** : « Certes A, mais B ».\n\n**固然** se place **après le sujet**. La seconde partie commence par **但(是)/可是/然而**, avec souvent **也** : 成绩固然重要，但健康也很重要.\n\nDifférence avec 虽然 : 虽然 concède un fait ; 固然 **admet un argument** tout en le relativisant.",
      "**固然** (\"admittedly, it's true that\") **acknowledges a first point** before **raising a second**, usually more important. It's the basic tool of **nuanced argument**: \"Granted A, but B\".\n\n**固然** goes **after the subject**. The second part starts with **但(是)/可是/然而**, often with **也**: 成绩固然重要，但健康也很重要.\n\nVersus 虽然: 虽然 concedes a fact; 固然 **grants an argument** while putting it in perspective.",
    ),
    examples: [
      ex("考试成绩固然重要，但能力更重要。", "Kǎoshì chéngjì gùrán zhòngyào, dàn nénglì gèng zhòngyào.", "Les notes comptent, certes, mais les compétences comptent davantage.", "Exam results matter, admittedly, but ability matters more."),
      ex("出国留学固然能开阔眼界，可是费用也很高。", "Chū guó liúxué gùrán néng kāikuò yǎnjiè, kěshì fèiyong yě hěn gāo.", "Étudier à l'étranger ouvre l'esprit, c'est vrai, mais ça coûte aussi très cher.", "Studying abroad broadens your horizons, sure, but it's also very expensive."),
      ex("你的想法固然好，但是很难实现。", "Nǐ de xiǎngfǎ gùrán hǎo, dànshì hěn nán shíxiàn.", "Ton idée est bonne, certes, mais difficile à réaliser.", "Your idea is good, granted, but hard to carry out."),
    ],
    pitfalls: t(
      "✗ 固然考试重要 → ✓ 考试固然重要 (固然 après le sujet).\n✗ 固然 seul sans seconde partie : il annonce toujours un « mais ».",
      "✗ 固然考试重要 → ✓ 考试固然重要 (固然 after the subject).\n✗ 固然 with no second part: it always announces a \"but\".",
    ),
  },
  {
    id: "hsk5-g17",
    level: 5,
    category: C.conj,
    title: t("以致 / 以至于 : au point que, si bien que", "以致 / 以至于: so that, to the extent that"),
    pattern: "Cause，以致 + conséquence (négative) | …，以至于 + degré extrême",
    explanation: t(
      "**以致** introduit une **conséquence fâcheuse** : « si bien que », « ce qui a entraîné ». Registre écrit, souvent dans un bilan d'erreur.\n\n**以至于** marque qu'on atteint un **degré extrême** : « au point que ». La conséquence peut être neutre.\n\nNe confonds pas avec **以免** (pour éviter) : 以致 = le mauvais résultat **s'est produit** ; 以免 = on veut l'**empêcher**.",
      "**以致** introduces an **unfortunate consequence**: \"so that\", \"with the result that\". Written register, often when reviewing a mistake.\n\n**以至于** marks reaching an **extreme degree**: \"to the point that\". The result can be neutral.\n\nDon't mix it up with **以免** (so as to avoid): 以致 = the bad result **happened**; 以免 = you want to **prevent** it.",
    ),
    examples: [
      ex("公司盲目扩大生产，以致产品卖不出去。", "Gōngsī mángmù kuòdà shēngchǎn, yǐzhì chǎnpǐn mài bu chūqu.", "L'entreprise a augmenté sa production à l'aveugle, si bien que ses produits ne se vendaient plus.", "The company blindly expanded production, so its products wouldn't sell."),
      ex("他没有及时还贷款，以致信用受到了影响。", "Tā méiyǒu jíshí huán dàikuǎn, yǐzhì xìnyòng shòudào le yǐngxiǎng.", "Il n'a pas remboursé son prêt à temps, ce qui a nui à son crédit.", "He didn't repay his loan on time, which damaged his credit."),
      ex("他太专心了，以至于没听见有人叫他。", "Tā tài zhuānxīn le, yǐzhìyú méi tīngjiàn yǒu rén jiào tā.", "Il était si concentré qu'il n'a pas entendu qu'on l'appelait.", "He was so focused that he didn't hear someone calling him."),
    ],
    pitfalls: t(
      "✗ 他很努力，以致考上了大学 → résultat positif : ✓ 从而/所以 考上了大学。\n✗ 以致 ≠ 以免 : ✗ 早点走，以致迟到 → ✓ 早点走，以免迟到。",
      "✗ 他很努力，以致考上了大学 → positive result: ✓ 从而/所以 考上了大学。\n✗ 以致 ≠ 以免: ✗ 早点走，以致迟到 → ✓ 早点走，以免迟到。",
    ),
  },
  {
    id: "hsk5-g18",
    level: 5,
    category: C.adv,
    title: t("不至于 : ce n'est pas au point de", "不至于: not go so far as to"),
    pattern: "S + 不至于 + V (conséquence extrême)",
    explanation: t(
      "**不至于** affirme qu'une situation **n'ira pas jusqu'à** un résultat extrême ou exagéré : « il ne faut pas exagérer », « ça n'ira pas jusqu'à ». On l'utilise pour **rassurer** ou pour **relativiser** une crainte.\n\nForme interrogative fréquente : **不至于吧？** (« Quand même pas ! », « Tu exagères, non ? »). Forme positive : **至于** (« en arriver à ») s'emploie surtout dans des questions rhétoriques : 至于这么生气吗？",
      "**不至于** says a situation **won't go as far as** an extreme or exaggerated outcome: \"it's not that bad\", \"it won't come to that\". Used to **reassure** or **tone down** a fear.\n\nCommon as a question: **不至于吧？** (\"Surely not!\", \"Isn't that a stretch?\"). The positive **至于** (\"go so far as\") mostly appears in rhetorical questions: 至于这么生气吗？",
    ),
    examples: [
      ex("一次考试没考好，不至于影响你的将来。", "Yí cì kǎoshì méi kǎo hǎo, bú zhìyú yǐngxiǎng nǐ de jiānglái.", "Un examen raté ne va quand même pas compromettre ton avenir.", "One bad exam won't go so far as to affect your future."),
      ex("他只是有点儿累，还不至于生病。", "Tā zhǐshì yǒudiǎnr lèi, hái bú zhìyú shēngbìng.", "Il est juste un peu fatigué, ce n'est pas au point d'être malade.", "He's just a bit tired — not to the point of being ill."),
      ex("为这点儿小事，至于这么生气吗？", "Wèi zhè diǎnr xiǎo shì, zhìyú zhème shēngqì ma?", "Te mettre dans un état pareil pour si peu, franchement ?", "Is it worth getting so angry over something so small?"),
    ],
    pitfalls: t(
      "✗ 不至于 + fait neutre : ✗ 他不至于吃饭。— le verbe doit être une **conséquence exagérée**.\n✗ Confondre 至于 (« en arriver à ») et 至于 préposition (« quant à », 至于钱的问题…).",
      "✗ 不至于 + a neutral action: ✗ 他不至于吃饭。— the verb must be an **exaggerated consequence**.\n✗ Confusing 至于 (\"go so far\") with the preposition 至于 (\"as for\", 至于钱的问题…).",
    ),
  },
  {
    id: "hsk5-g19",
    level: 5,
    category: C.adv,
    title: t("只不过…(而已) : ce n'est que…", "只不过…(而已): merely, just"),
    pattern: "S + 只不过 + 是/V + … + (而已/罢了)",
    explanation: t(
      "**只不过** **minimise** : « ce n'est que », « simplement ». Souvent accompagné en fin de phrase de **而已** (écrit) ou **罢了** (oral littéraire) : « et rien de plus ».\n\nIl sert aussi à introduire une **petite réserve** après un compliment : 这个办法很好，只不过费用高了点儿 (« … sauf que c'est un peu cher »).",
      "**只不过** **minimises**: \"merely\", \"just\". Often paired with a final **而已** (written) or **罢了** (literary-spoken): \"and nothing more\".\n\nIt also introduces a **small reservation** after praise: 这个办法很好，只不过费用高了点儿 (\"…except it's a bit pricey\").",
    ),
    examples: [
      ex("我只不过是开个玩笑而已，你别当真。", "Wǒ zhǐbúguò shì kāi ge wánxiào éryǐ, nǐ bié dàngzhēn.", "Je ne faisais que plaisanter, ne le prends pas au sérieux.", "I was only joking — don't take it seriously."),
      ex("失败只不过是成功路上的一站罢了。", "Shībài zhǐbúguò shì chénggōng lù shang de yí zhàn bà le.", "L'échec n'est qu'une étape sur la route du succès.", "Failure is merely a stop on the road to success."),
      ex("他人不错，只不过有点儿急躁。", "Tā rén búcuò, zhǐbúguò yǒudiǎnr jízào.", "C'est quelqu'un de bien, sauf qu'il est un peu impatient.", "He's a decent guy, just a bit impatient."),
    ],
    pitfalls: t(
      "✗ 而已 sans restriction : ✗ 他是老师而已 → ✓ 他只是/只不过是老师而已 (il faut 只 pour cadrer).\n✗ 只不过 pour un énorme défaut : il **minimise**, donc la réserve doit être petite.",
      "✗ 而已 alone: ✗ 他是老师而已 → ✓ 他只是/只不过是老师而已 (you need 只 to frame it).\n✗ 只不过 for a huge flaw: it **minimises**, so the reservation must be small.",
    ),
  },
  {
    id: "hsk5-g20",
    level: 5,
    category: C.complex,
    title: t("与其说…不如说… : c'est moins… que…", "与其说…不如说…: it's less… than…"),
    pattern: "与其说 + A，不如说 + B",
    explanation: t(
      "Variante de 与其…不如… qui porte sur **les mots** et non sur les actions : on **reformule** pour être plus juste. « Plutôt que de dire A, il vaudrait mieux dire B » ; en français naturel : « c'est moins A que B », « ce n'est pas tant A que B ».\n\nTrès utile en dissertation et en analyse pour **corriger une idée reçue** : 与其说是天赋，不如说是努力.",
      "A variant of 与其…不如… that works on **wording**, not actions: you **rephrase** to be more accurate. \"Rather than saying A, it'd be truer to say B\" — naturally: \"it's not so much A as B\".\n\nVery handy in essays and analysis to **correct a received idea**: 与其说是天赋，不如说是努力.",
    ),
    examples: [
      ex("他的成功与其说是运气，不如说是多年努力的结果。", "Tā de chénggōng yǔqí shuō shì yùnqi, bùrú shuō shì duō nián nǔlì de jiéguǒ.", "Sa réussite tient moins à la chance qu'à des années d'efforts.", "His success is less luck than the result of years of hard work."),
      ex("与其说这是教育问题，不如说是社会问题。", "Yǔqí shuō zhè shì jiàoyù wèntí, bùrú shuō shì shèhuì wèntí.", "Ce n'est pas tant un problème d'éducation qu'un problème de société.", "It's less an education problem than a social one."),
      ex("与其说我在教他，不如说我们在互相学习。", "Yǔqí shuō wǒ zài jiāo tā, bùrú shuō wǒmen zài hùxiāng xuéxí.", "Plutôt que de dire que je lui apprends, disons qu'on apprend l'un de l'autre.", "Rather than me teaching him, we're really learning from each other."),
    ],
    pitfalls: t(
      "✗ 与其说…不如… (说 manquant) → ✓ 与其说…不如说… (parallélisme).\n✗ Confondre avec 与其…不如… : ici on ne choisit pas une action, on corrige une **description**.",
      "✗ 与其说…不如… (missing 说) → ✓ 与其说…不如说… (keep it parallel).\n✗ Confusing it with 与其…不如…: here you're not choosing an action but correcting a **description**.",
    ),
  },
  {
    id: "hsk5-g21",
    level: 5,
    category: C.special,
    title: t("为…所… : passif écrit", "为…所…: formal written passive"),
    pattern: "Sujet (patient) + 为 + agent + 所 + V",
    explanation: t(
      "**为…所…** est un **passif d'origine classique**, très courant à l'écrit (histoire, presse, littérature). Équivalent de 被…: 为人所知 = 被人知道 (être connu des gens).\n\n**为** se lit ici **wéi**. Le verbe suit **所** directement, souvent **monosyllabique ou bisyllabique**, et généralement sans 了 ni complément. Expressions figées à connaître : **为人所知**、**为…所用**、**为…所感动**、**不为所动** (rester de marbre).",
      "**为…所…** is a **passive of classical origin**, very common in writing (history, press, literature). It equals 被…: 为人所知 = 被人知道 (known to people).\n\n**为** is read **wéi** here. The verb follows **所** directly, usually mono- or disyllabic, typically without 了 or complements. Set phrases to know: **为人所知**、**为…所用**、**为…所感动**、**不为所动** (remain unmoved).",
    ),
    examples: [
      ex("这段历史很少为人所知。", "Zhè duàn lìshǐ hěn shǎo wéi rén suǒ zhī.", "Cette période de l'histoire est peu connue.", "This period of history is little known."),
      ex("他的作品深深地为读者所喜爱。", "Tā de zuòpǐn shēnshēn de wéi dúzhě suǒ xǐ'ài.", "Ses œuvres sont profondément aimées des lecteurs.", "His works are deeply loved by readers."),
      ex("大家都被他的故事感动了，只有她不为所动。", "Dàjiā dōu bèi tā de gùshi gǎndòng le, zhǐyǒu tā bù wéi suǒ dòng.", "Tout le monde a été ému par son histoire ; elle seule est restée de marbre.", "Everyone was moved by his story; only she remained unmoved."),
    ],
    pitfalls: t(
      "✗ 为人所知道了 → ✓ 为人所知 (verbe court, pas de 了).\n✗ Lire 为 *wèi* : ✓ *wéi*.\n✗ Utiliser 为…所 à l'oral quotidien sonne très livresque → ✓ 被.",
      "✗ 为人所知道了 → ✓ 为人所知 (short verb, no 了).\n✗ Reading 为 as *wèi*: ✓ *wéi*.\n✗ 为…所 in everyday speech sounds bookish → ✓ 被.",
    ),
  },
  {
    id: "hsk5-g22",
    level: 5,
    category: C.part,
    title: t("…之一 et 之 (= 的 écrit)", "…之一 and 之 (written 的)"),
    pattern: "N + 之一 | A + 之 + N (书面) | 百分之 X",
    explanation: t(
      "**之** est l'ancêtre classique de **的**. Il survit dans l'écrit moderne dans des tournures figées :\n\n• **…之一** = « l'un des… » : 世界上最长的河之一. Le nom est au singulier en français mais la catégorie est plurielle.\n• **百分之 X** = X % ; **三分之一** = un tiers.\n• **A 之 N** dans des titres ou expressions : 中国之行 (voyage en Chine), 成功之路, 无价之宝.\n• **之前 / 之后 / 之间 / 之中** : équivalents soutenus de 以前、以后、中间….",
      "**之** is the classical ancestor of **的**. It survives in modern writing in set forms:\n\n• **…之一** = \"one of…\": 世界上最长的河之一.\n• **百分之 X** = X%; **三分之一** = one third.\n• **A 之 N** in titles and set phrases: 中国之行 (a trip to China), 成功之路, 无价之宝.\n• **之前 / 之后 / 之间 / 之中**: formal counterparts of 以前、以后、中间….",
    ),
    examples: [
      ex("长城是世界上最有名的建筑之一。", "Chángchéng shì shìjiè shang zuì yǒumíng de jiànzhù zhī yī.", "La Grande Muraille est l'une des constructions les plus célèbres au monde.", "The Great Wall is one of the most famous structures in the world."),
      ex("在两千多年之前，这里是一个重要的港口。", "Zài liǎng qiān duō nián zhīqián, zhèlǐ shì yí ge zhòngyào de gǎngkǒu.", "Il y a plus de deux mille ans, c'était un port important.", "Over two thousand years ago, this was an important port."),
      ex("大约三分之一的人参加了这次活动。", "Dàyuē sān fēn zhī yī de rén cānjiā le zhè cì huódòng.", "Environ un tiers des gens a participé à l'événement.", "About a third of the people took part in the event."),
    ],
    pitfalls: t(
      "✗ 之一 après un nom seul sans catégorie : ✗ 他是我的朋友之一 est correct, mais ✗ 他是之一朋友 ne l'est pas : 之一 va **toujours à la fin**.\n✗ 一之三 pour « un tiers » → ✓ 三分之一 (le dénominateur d'abord !).",
      "✗ Misplacing 之一: ✓ 他是我的朋友之一; ✗ 他是之一朋友 — 之一 always goes **at the end**.\n✗ 一之三 for \"a third\" → ✓ 三分之一 (denominator first!).",
    ),
  },
  {
    id: "hsk5-g23",
    level: 5,
    category: C.verb,
    title: t("加以 / 进行 : verbes « supports » de l'écrit", "加以 / 进行: formal \"dummy\" verbs"),
    pattern: "对 + O + 加以/进行 + V bisyllabique (研究、分析、处理…)",
    explanation: t(
      "À l'écrit formel, on transforme souvent un verbe d'action en **nom-verbal** précédé d'un **verbe support** :\n\n• **进行** + activité durable : 进行调查 (mener une enquête), 进行讨论, 进行研究.\n• **加以** + traitement appliqué à quelque chose de **déjà mentionné** : 对…加以分析/保护/改进.\n\nLe verbe qui suit doit être **bisyllabique** et **sans objet** (l'objet passe devant avec **对**). En français, c'est le style « procéder à l'analyse de… ».",
      "Formal writing often turns an action verb into a **verbal noun** after a **support verb**:\n\n• **进行** + ongoing activity: 进行调查 (carry out a survey), 进行讨论, 进行研究.\n• **加以** + treatment applied to something **already mentioned**: 对…加以分析/保护/改进.\n\nThe following verb must be **disyllabic** and **take no object** (the object moves in front with **对**). It's the \"conduct an analysis of…\" style.",
    ),
    examples: [
      ex("专家对这条河的污染情况进行了调查。", "Zhuānjiā duì zhè tiáo hé de wūrǎn qíngkuàng jìnxíng le diàochá.", "Des experts ont mené une enquête sur la pollution de cette rivière.", "Experts carried out a survey of the river's pollution."),
      ex("这些问题必须及时加以解决。", "Zhèxiē wèntí bìxū jíshí jiāyǐ jiějué.", "Ces problèmes doivent être résolus sans tarder.", "These problems must be dealt with promptly."),
      ex("对于珍贵的动物，我们应该加以保护。", "Duìyú zhēnguì de dòngwù, wǒmen yīnggāi jiāyǐ bǎohù.", "Il faut protéger les espèces animales précieuses.", "Precious animal species should be protected."),
    ],
    pitfalls: t(
      "✗ 进行学 → ✓ 进行学习 (verbe bisyllabique).\n✗ 进行调查这个问题 → ✓ 对这个问题进行调查 (objet devant avec 对).\n✗ 进行 à l'oral : ✗ 我们进行吃饭吧 !",
      "✗ 进行学 → ✓ 进行学习 (disyllabic verb).\n✗ 进行调查这个问题 → ✓ 对这个问题进行调查 (object moved forward with 对).\n✗ 进行 for everyday actions: ✗ 我们进行吃饭吧!",
    ),
  },
  {
    id: "hsk5-g24",
    level: 5,
    category: C.adv,
    title: t("何必 / 何苦 : à quoi bon…?", "何必 / 何苦: why bother…?"),
    pattern: "何必 + V (呢)？ | 何苦 + V (呢)？",
    explanation: t(
      "**何必** (« pourquoi faudrait-il ») est une **question rhétorique** qui signifie « ce n'est pas nécessaire » : 何必生气呢？ = inutile de te fâcher. Plus doux et plus élégant que 不必.\n\n**何苦** (« pourquoi se faire du mal ») ajoute l'idée qu'on **se tourmente pour rien** : 何苦为难自己？(pourquoi te compliquer la vie ?).\n\nLes deux finissent souvent par **呢** et s'emploient pour **conseiller** ou **consoler**.",
      "**何必** (\"why must\") is a **rhetorical question** meaning \"there's no need\": 何必生气呢？ = no need to get angry. Softer and more elegant than 不必.\n\n**何苦** (\"why suffer\") adds that you're **tormenting yourself for nothing**: 何苦为难自己？(why make life hard for yourself?).\n\nBoth often end with **呢** and are used to **advise** or **console**.",
    ),
    examples: [
      ex("事情已经过去了，何必再想呢？", "Shìqing yǐjīng guòqu le, hébì zài xiǎng ne?", "C'est du passé, à quoi bon y repenser ?", "It's over — why keep thinking about it?"),
      ex("大家都是朋友，何必为这点儿小事吵架？", "Dàjiā dōu shì péngyou, hébì wèi zhè diǎnr xiǎo shì chǎojià?", "On est tous amis, pourquoi se disputer pour si peu ?", "We're all friends — why fight over something so small?"),
      ex("你明明不喜欢这份工作，何苦勉强自己？", "Nǐ míngmíng bù xǐhuan zhè fèn gōngzuò, hékǔ miǎnqiǎng zìjǐ?", "Tu n'aimes clairement pas ce travail, pourquoi te forcer ?", "You clearly don't like this job — why force yourself?"),
    ],
    pitfalls: t(
      "✗ 何必 + 不 : ✗ 何必不去？ est rare et ambigu ; utilise ✓ 为什么不去？\n✗ Répondre « oui » à 何必 : ce n'est pas une vraie question.",
      "✗ 何必 + 不: ✗ 何必不去？ is odd; use ✓ 为什么不去？\n✗ Answering 何必 literally: it's not a real question.",
    ),
  },
  {
    id: "hsk5-g25",
    level: 5,
    category: C.conj,
    title: t("不料 / 没想到 : contre toute attente", "不料 / 没想到: unexpectedly"),
    pattern: "Attente/plan，不料/没想到 + événement inattendu",
    explanation: t(
      "**不料** (écrit, « sans qu'on s'y attende ») et **没想到** (oral, « je ne m'attendais pas à ce que ») introduisent un **retournement** dans un récit : « mais contre toute attente », « or voilà que ».\n\n不料 se place en tête de la seconde proposition. L'événement est souvent **négatif**, mais pas forcément. Variantes littéraires : **谁知**、**哪知**.",
      "**不料** (written, \"unexpectedly\") and **没想到** (spoken, \"I didn't expect\") introduce a **twist** in a narrative: \"but, to everyone's surprise\", \"who'd have thought\".\n\n不料 opens the second clause. The event is often **negative**, though not always. Literary variants: **谁知**、**哪知**.",
    ),
    examples: [
      ex("本来计划周末去爬山，不料下了一场大雨。", "Běnlái jìhuà zhōumò qù pá shān, búliào xià le yì cháng dà yǔ.", "On avait prévu d'aller en montagne ce week-end, mais contre toute attente, une grosse pluie est tombée.", "We'd planned to go hiking at the weekend, but unexpectedly it poured."),
      ex("皇帝以为自己很安全，不料大臣早就背叛了他。", "Huángdì yǐwéi zìjǐ hěn ānquán, búliào dàchén zǎo jiù bèipàn le tā.", "L'empereur se croyait en sécurité, or son ministre l'avait trahi depuis longtemps.", "The emperor thought he was safe, but his minister had long since betrayed him."),
      ex("没想到这么小的村子，竟然出了三个状元。", "Méi xiǎngdào zhème xiǎo de cūnzi, jìngrán chū le sān ge zhuàngyuan.", "Qui aurait cru qu'un si petit village ait produit trois lauréats impériaux ?", "Who'd have thought such a small village would produce three top imperial scholars?"),
    ],
    pitfalls: t(
      "✗ 不料 pour un événement prévu : ✗ 我计划去北京，不料去了北京 — il faut un **écart** avec l'attente.\n✗ 不料 lu *bù liào* : ✓ *búliào* (料 au 4e ton).",
      "✗ 不料 for something planned: ✗ 我计划去北京，不料去了北京 — there must be a **gap** with expectations.\n✗ Reading 不料 as *bù liào*: ✓ *búliào* (料 is 4th tone).",
    ),
  },
  {
    id: "hsk5-g26",
    level: 5,
    category: C.disc,
    title: t("总之 / 换句话说 / 总而言之 : connecteurs de discours", "总之 / 换句话说 / 总而言之: discourse markers"),
    pattern: "…。总之/总而言之，+ conclusion | …，换句话说，+ reformulation",
    explanation: t(
      "Pour **structurer un discours** ou une rédaction :\n\n• **总之** / **总而言之** (plus formel) = « **bref, en somme, pour conclure** » : résume ce qui précède.\n• **换句话说** = « **autrement dit** » : reformule pour clarifier.\n• **也就是说** = « **c'est-à-dire** ».\n• **一方面…另一方面…, 首先…其次…最后…** pour organiser.\n\nCes marqueurs sont précieux à l'épreuve d'écriture de l'HSK 5.",
      "To **structure a talk** or an essay:\n\n• **总之** / **总而言之** (more formal) = \"**in short, all in all**\": sums up.\n• **换句话说** = \"**in other words**\": rephrases for clarity.\n• **也就是说** = \"**that is to say**\".\n• **一方面…另一方面…, 首先…其次…最后…** to organise.\n\nThese markers are gold in the HSK 5 writing section.",
    ),
    examples: [
      ex("少开车、少用塑料袋、节约用水……总之，环保要从小事做起。", "Shǎo kāi chē, shǎo yòng sùliàodài, jiéyuē yòng shuǐ……zǒngzhī, huánbǎo yào cóng xiǎo shì zuò qǐ.", "Moins de voiture, moins de sacs plastique, économiser l'eau… bref, l'écologie commence par les petits gestes.", "Drive less, use fewer plastic bags, save water… in short, going green starts with little things."),
      ex("他是个低碳生活者，换句话说，他尽量不浪费任何资源。", "Tā shì ge dītàn shēnghuó zhě, huàn jù huà shuō, tā jǐnliàng bú làngfèi rènhé zīyuán.", "Il a un mode de vie bas carbone ; autrement dit, il évite de gaspiller la moindre ressource.", "He lives low-carbon; in other words, he tries not to waste any resource."),
      ex("总而言之，这个方案利大于弊。", "Zǒng ér yán zhī, zhège fāng'àn lì dà yú bì.", "En somme, ce projet présente plus d'avantages que d'inconvénients.", "All in all, this plan does more good than harm."),
    ],
    pitfalls: t(
      "✗ 总之 au début d'un texte : il **conclut**, il ne peut pas ouvrir.\n✗ 换句话说 suivi d'une idée nouvelle : il doit **reformuler** la même idée.",
      "✗ 总之 at the start of a text: it **concludes**; it can't open.\n✗ 换句话说 followed by a new idea: it must **rephrase** the same idea.",
    ),
  },
  {
    id: "hsk5-g27",
    level: 5,
    category: C.style,
    title: t("Utiliser les 成语 (expressions en quatre caractères)", "Using 成语 (four-character idioms)"),
    pattern: "成语 = adjectif (很+成语 ✗) / adverbe (成语 + 地 + V) / prédicat / complément du nom (成语 + 的 + N)",
    explanation: t(
      "Les **成语** sont des expressions figées, souvent en **quatre caractères**, issues de textes classiques ou d'anecdotes historiques. Au niveau 5, il faut savoir **les placer correctement dans la phrase** :\n\n• **Prédicat** : 这个地方**山清水秀** (montagnes vertes, eaux claires).\n• **Complément du nom** avec 的 : 一个**举世闻名**的建筑.\n• **Adverbial** avec 地 : 他**全心全意**地工作.\n• **Complément** après 得 : 说得**津津有味**.\n\nRègle d'or : beaucoup de 成语 contiennent déjà un **degré** (极、非常). Donc ✗ 很 + 成语 est souvent incorrect : ✗ 很举世闻名.",
      "**成语** are set expressions, usually **four characters**, drawn from classical texts or historical anecdotes. At level 5 you must **slot them correctly into a sentence**:\n\n• **Predicate**: 这个地方**山清水秀** (green hills, clear waters).\n• **Noun modifier** with 的: 一个**举世闻名**的建筑.\n• **Adverbial** with 地: 他**全心全意**地工作.\n• **Complement** after 得: 说得**津津有味**.\n\nGolden rule: many 成语 already contain **degree** (extremely, totally), so ✗ 很 + 成语 is often wrong: ✗ 很举世闻名.",
    ),
    examples: [
      ex("这位作家的小说举世闻名。", "Zhè wèi zuòjiā de xiǎoshuō jǔshì wénmíng.", "Les romans de cet écrivain sont connus dans le monde entier.", "This writer's novels are world-famous."),
      ex("奶奶讲故事讲得津津有味，孩子们听得入了迷。", "Nǎinai jiǎng gùshi jiǎng de jīnjīn yǒu wèi, háizimen tīng de rù le mí.", "Grand-mère raconte ses histoires avec délectation, les enfants sont captivés.", "Grandma tells stories with relish, and the kids are spellbound."),
      ex("他全心全意地照顾生病的母亲。", "Tā quánxīn quányì de zhàogù shēngbìng de mǔqīn.", "Il s'occupe de sa mère malade corps et âme.", "He looks after his sick mother wholeheartedly."),
      ex("这个故事告诉我们，做事不能半途而废。", "Zhège gùshi gàosu wǒmen, zuò shì bù néng bàntú ér fèi.", "Cette histoire nous apprend qu'il ne faut pas abandonner à mi-chemin.", "This story teaches us not to give up halfway."),
    ],
    pitfalls: t(
      "✗ 很举世闻名 / 非常津津有味 → le 成语 porte déjà l'intensité.\n✗ 成语 + objet : ✗ 他半途而废了学习 → ✓ 他学习半途而废了 (beaucoup de 成语 sont **intransitifs**).\n✗ Registre : un 成语 dans un SMS banal peut sembler ironique.",
      "✗ 很举世闻名 / 非常津津有味 → the 成语 already carries intensity.\n✗ 成语 + object: ✗ 他半途而废了学习 → ✓ 他学习半途而废了 (many 成语 are **intransitive**).\n✗ Register: a 成语 in a casual text can sound ironic.",
    ),
  },
  {
    id: "hsk5-g28",
    level: 5,
    category: C.style,
    title: t("书面语 vs 口语 : écrit et oral", "书面语 vs 口语: written vs spoken register"),
    pattern: "口语 → 书面语 : 在→于, 这→此, 他的→其, 是→为, 和→与/及, 没有→无/未, 因为→由于/因",
    explanation: t(
      "Le chinois moderne a deux registres très marqués. À partir du niveau 5, on lit des textes (presse, littérature, notices) truffés de **mots monosyllabiques d'origine classique** :\n\n• **于** = 在/对/比 (位于、高于、有利于)\n• **此** = 这 (因此、此时、如此)\n• **其** = 他的/它的/其中 (其原因、其他)\n• **与** = 和 ; **及** = 以及 ; **无** = 没有 ; **未** = 没/还没 ; **皆** = 都\n• **为** (wéi) = 是/当作\n\nÀ l'inverse, à l'oral, on préfère les formes longues et les particules (呢、吧、嘛). Savoir **passer d'un registre à l'autre** est une compétence clé des niveaux 5-6.",
      "Modern Chinese has two sharply different registers. From level 5 you read texts (press, literature, notices) full of **monosyllabic words of classical origin**:\n\n• **于** = 在/对/比 (位于、高于、有利于)\n• **此** = 这 (因此、此时、如此)\n• **其** = 他的/它的/其中 (其原因、其他)\n• **与** = 和; **及** = 以及; **无** = 没有; **未** = 没/还没; **皆** = 都\n• **为** (wéi) = 是/当作\n\nConversely, speech prefers longer forms and particles (呢、吧、嘛). **Switching registers** is a key skill at levels 5–6.",
    ),
    examples: [
      ex("此地位于长江以南，气候温和。", "Cǐ dì wèiyú Cháng Jiāng yǐ nán, qìhòu wēnhé.", "Cet endroit se trouve au sud du Yangtsé, le climat y est doux.", "This place lies south of the Yangtze, with a mild climate."),
      ex("作者未说明其原因。", "Zuòzhě wèi shuōmíng qí yuányīn.", "L'auteur n'en a pas expliqué la raison.", "The author didn't explain the reason for it."),
      ex("口语：这个问题我们还没讨论。→ 书面语：此问题尚未讨论。", "Kǒuyǔ: Zhège wèntí wǒmen hái méi tǎolùn. → Shūmiànyǔ: Cǐ wèntí shàng wèi tǎolùn.", "Oral : « On n'a pas encore parlé de ce problème. » → Écrit : « Cette question n'a pas encore été examinée. »", "Spoken: \"We haven't discussed this yet.\" → Written: \"This matter has not yet been discussed.\""),
    ],
    pitfalls: t(
      "✗ Mélanger les registres : ✗ 此问题我们还没讨论呢 → soit tout oral, soit tout écrit.\n✗ 其 en début de phrase comme sujet autonome : ✗ 其很好 → ✓ 其质量很好 (其 détermine un nom).",
      "✗ Mixing registers: ✗ 此问题我们还没讨论呢 → keep it all spoken or all written.\n✗ 其 as a standalone subject: ✗ 其很好 → ✓ 其质量很好 (其 modifies a noun).",
    ),
  },
  {
    id: "hsk5-g29",
    level: 5,
    category: C.prep,
    title: t("V + 于 : verbes formels (位于、高于、有助于…)", "V + 于: formal verbs (位于、高于、有助于…)"),
    pattern: "V/Adj + 于 + N (lieu / comparaison / cible / origine)",
    explanation: t(
      "**于** après un verbe ou un adjectif forme de nombreux **composés écrits** :\n\n• **Lieu** : 位于 (se situer à), 生于 (né à/en).\n• **Comparaison** : 高于、低于、大于、多于 (« supérieur à… »).\n• **Cible/domaine** : 有助于 (contribuer à), 有利于 (être favorable à), 属于 (appartenir à), 致力于 (se consacrer à).\n• **Origine** : 来自于、源于 (provenir de).\n\nCes formes sont omniprésentes dans les textes économiques et les données chiffrées.",
      "**于** after a verb or adjective forms many **written compounds**:\n\n• **Place**: 位于 (be located at), 生于 (born in).\n• **Comparison**: 高于、低于、大于、多于 (\"higher than…\").\n• **Target/domain**: 有助于 (help to), 有利于 (be good for), 属于 (belong to), 致力于 (devote oneself to).\n• **Origin**: 来自于、源于 (come from).\n\nThey're everywhere in economic texts and statistics.",
    ),
    examples: [
      ex("今年的经济增长速度高于去年。", "Jīnnián de jīngjì zēngzhǎng sùdù gāo yú qùnián.", "Cette année, la croissance économique est plus rapide que l'an dernier.", "This year's economic growth is faster than last year's."),
      ex("降低利息有助于刺激消费。", "Jiàngdī lìxī yǒu zhù yú cìjī xiāofèi.", "Baisser les taux d'intérêt contribue à stimuler la consommation.", "Lowering interest rates helps stimulate consumption."),
      ex("这家公司位于上海，属于一家外国企业。", "Zhè jiā gōngsī wèiyú Shànghǎi, shǔyú yì jiā wàiguó qǐyè.", "Cette société se trouve à Shanghai et appartient à une entreprise étrangère.", "This company is based in Shanghai and belongs to a foreign firm."),
    ],
    pitfalls: t(
      "✗ 比去年高于 → soit ✓ 比去年高, soit ✓ 高于去年 (ne cumule pas 比 et 于).\n✗ 有助于 + 了 : ✗ 有助于了 → le 了 va après le verbe principal s'il y en a un.\n✗ 位于在上海 → ✓ 位于上海 (于 = 在).",
      "✗ 比去年高于 → either ✓ 比去年高 or ✓ 高于去年 (don't combine 比 and 于).\n✗ 有助于了 is wrong.\n✗ 位于在上海 → ✓ 位于上海 (于 already = 在).",
    ),
  },
  {
    id: "hsk5-g30",
    level: 5,
    category: C.part,
    title: t("所 + V (的) : ce que…", "所 + V (的): that which…"),
    pattern: "(S) + 所 + V + 的 + (N)",
    explanation: t(
      "**所** placé devant un verbe transitif crée un groupe qui désigne **l'objet de l'action** : 我所知道的 = « ce que je sais ». Il ne change pas le sens de la relative (我知道的 = même sens), mais rend la phrase **plus soutenue et plus précise**.\n\nExpressions très fréquentes : **所有** (tout, tous), **所谓** (ce qu'on appelle, soi-disant), **所在** (là où se trouve), **众所周知** (comme chacun sait), **有所** + V (dans une certaine mesure).",
      "**所** before a transitive verb creates a phrase referring to **the object of the action**: 我所知道的 = \"what I know\". It doesn't change the meaning (我知道的 means the same) but makes it **more formal and precise**.\n\nVery common expressions: **所有** (all), **所谓** (so-called), **所在** (where something lies), **众所周知** (as everyone knows), **有所** + V (to some extent).",
    ),
    examples: [
      ex("据我所知，这座寺庙建于唐朝。", "Jù wǒ suǒ zhī, zhè zuò sìmiào jiàn yú Tángcháo.", "À ma connaissance, ce temple a été construit sous les Tang.", "As far as I know, this temple was built in the Tang dynasty."),
      ex("历史书上所写的，并不都是事实。", "Lìshǐ shū shang suǒ xiě de, bìng bù dōu shì shìshí.", "Tout ce qui est écrit dans les livres d'histoire n'est pas forcément la vérité.", "Not everything written in history books is fact."),
      ex("众所周知，丝绸之路连接了东方和西方。", "Zhòng suǒ zhōu zhī, Sīchóu zhī Lù liánjiē le dōngfāng hé xīfāng.", "Comme chacun sait, la route de la soie reliait l'Orient et l'Occident.", "As everyone knows, the Silk Road linked East and West."),
    ],
    pitfalls: t(
      "✗ 所 + verbe intransitif : ✗ 我所去的 est possible (去 prend un lieu), mais ✗ 我所哭的 non.\n✗ 所 sans 的 devant un nom : ✗ 我所看书 → ✓ 我所看的书。",
      "✗ 所 + intransitive verb: ✗ 我所哭的 doesn't work.\n✗ Dropping 的 before a noun: ✗ 我所看书 → ✓ 我所看的书。",
    ),
  },
  {
    id: "hsk5-g31",
    level: 5,
    category: C.adv,
    title: t("偏偏 : justement, comme par hasard", "偏偏: of all things, stubbornly"),
    pattern: "S + 偏偏 + V (contraire au souhait / à la raison)",
    explanation: t(
      "**偏偏** exprime qu'un fait va **à l'encontre du souhait** ou de la raison, souvent avec **frustration** :\n\n1. **Hasard malheureux** : « justement », « comme par hasard » : 我要出门，偏偏下起了雨.\n2. **Obstination** : « s'obstiner à » : 大家都劝他，他偏偏不听.\n\n偏 seul existe aussi (plus oral) : 你不让我去，我偏要去！",
      "**偏偏** says something goes **against wishes** or reason, often with **frustration**:\n\n1. **Bad luck**: \"of all times\", \"just when\": 我要出门，偏偏下起了雨.\n2. **Stubbornness**: \"insist on\": 大家都劝他，他偏偏不听.\n\n偏 alone exists too (more colloquial): 你不让我去，我偏要去！",
    ),
    examples: [
      ex("我正要出门，偏偏下起了大雨。", "Wǒ zhèng yào chūmén, piānpiān xià qǐ le dà yǔ.", "J'allais sortir, et justement il s'est mis à pleuvoir à verse.", "I was just about to go out when, of course, it started pouring."),
      ex("父亲希望他学医，他偏偏爱上了写诗。", "Fùqīn xīwàng tā xué yī, tā piānpiān ài shàng le xiě shī.", "Son père voulait qu'il fasse médecine ; lui, il s'est justement épris de poésie.", "His father wanted him to study medicine, but he fell in love with writing poetry instead."),
      ex("大家都劝她别去，她偏偏不听。", "Dàjiā dōu quàn tā bié qù, tā piānpiān bù tīng.", "Tout le monde lui a conseillé de ne pas y aller, mais elle n'en a fait qu'à sa tête.", "Everyone told her not to go, but she stubbornly wouldn't listen."),
    ],
    pitfalls: t(
      "✗ 偏偏 pour un heureux hasard neutre : ✗ 我想吃饺子，偏偏妈妈做了饺子 → ✓ 正好/刚好。偏偏 = contrariant.\n✗ 偏偏他… : la place standard est après le sujet, ✓ 他偏偏….",
      "✗ 偏偏 for a happy coincidence: ✗ 我想吃饺子，偏偏妈妈做了饺子 → ✓ 正好/刚好. 偏偏 = annoying.\n✗ 偏偏他…: standard slot is after the subject, ✓ 他偏偏….",
    ),
  },
  {
    id: "hsk5-g32",
    level: 5,
    category: C.adv,
    title: t("竟然 / 居然 : à ma grande surprise", "竟然 / 居然: surprisingly, actually"),
    pattern: "S + 竟然/居然 + V/Adj",
    explanation: t(
      "**竟然** et **居然** expriment la **surprise** du locuteur face à un fait inattendu : « figure-toi que », « contre toute attente », « aller jusqu'à ». Le fait peut être positif ou négatif.\n\nIls se placent **après le sujet**, devant le verbe. **居然** est un peu plus oral ; **竟然** plus courant à l'écrit (forme courte littéraire : **竟**). Différence avec 不料 : 不料 est un **connecteur** entre deux propositions, 竟然 un **adverbe** dans la proposition.",
      "**竟然** and **居然** express the speaker's **surprise** at an unexpected fact: \"to my surprise\", \"actually\", \"went so far as to\". The fact can be good or bad.\n\nThey go **after the subject**, before the verb. **居然** is a bit more colloquial; **竟然** more common in writing (literary short form: **竟**). Versus 不料: 不料 is a **connector** between clauses; 竟然 is an **adverb** inside a clause.",
    ),
    examples: [
      ex("这座桥竟然已经有一千多年的历史了。", "Zhè zuò qiáo jìngrán yǐjīng yǒu yìqiān duō nián de lìshǐ le.", "Ce pont a, figure-toi, plus de mille ans.", "Believe it or not, this bridge is over a thousand years old."),
      ex("他居然连自己国家的首都都不知道！", "Tā jūrán lián zìjǐ guójiā de shǒudū dōu bù zhīdào!", "Il ne connaît même pas la capitale de son propre pays, c'est incroyable !", "He actually doesn't even know his own country's capital!"),
      ex("一个农民竟然当上了皇帝。", "Yí ge nóngmín jìngrán dāng shàng le huángdì.", "Un paysan est devenu empereur, contre toute attente.", "A peasant actually became emperor."),
    ],
    pitfalls: t(
      "✗ 竟然他… → ✓ 他竟然… (après le sujet).\n✗ 竟然 pour sa propre action prévue : ✗ 我竟然按计划去了 — il faut une vraie surprise.\n✗ 竟然 + 吗 : ✗ 他竟然来了吗？ → ✓ 他竟然来了！",
      "✗ 竟然他… → ✓ 他竟然… (after the subject).\n✗ 竟然 for something planned: ✗ 我竟然按计划去了 — there must be real surprise.\n✗ 竟然 + 吗: ✗ 他竟然来了吗？ → ✓ 他竟然来了！",
    ),
  },
  {
    id: "hsk5-g33",
    level: 5,
    category: C.complex,
    title: t("要么…要么… : soit…, soit…", "要么…要么…: either… or…"),
    pattern: "要么 + A，要么 + B",
    explanation: t(
      "**要么…要么…** présente une **alternative exclusive** : on doit choisir l'une des deux options, il n'y en a pas d'autre. En français : « soit… soit… », « ou bien… ou bien… ».\n\nDifférence avec **或者** : 或者 propose des options ouvertes (« ou »), **要么…要么** ferme le choix et sonne souvent **catégorique**, voire comme un **ultimatum**. Proche : **不是…就是…** (« si ce n'est pas A, c'est B », pour décrire un fait).",
      "**要么…要么…** gives an **exclusive alternative**: you must pick one of the two, there's no third option — \"either… or…\".\n\nVersus **或者**: 或者 offers open options (\"or\"); **要么…要么** closes the choice and often sounds **categorical**, even like an **ultimatum**. Related: **不是…就是…** (\"if not A then B\", describing a fact).",
    ),
    examples: [
      ex("毕业以后，要么考研，要么直接工作，你得决定。", "Bìyè yǐhòu, yàome kǎo yán, yàome zhíjiē gōngzuò, nǐ děi juédìng.", "Après le diplôme, soit tu passes le concours du master, soit tu travailles directement : il faut choisir.", "After graduating, either you sit the master's exam or you go straight to work — you have to decide."),
      ex("要么你来，要么我去，总之今天得见一面。", "Yàome nǐ lái, yàome wǒ qù, zǒngzhī jīntiān děi jiàn yí miàn.", "Soit tu viens, soit j'y vais, mais il faut qu'on se voie aujourd'hui.", "Either you come or I go — one way or another we need to meet today."),
      ex("周末他不是在图书馆，就是在补习班。", "Zhōumò tā bú shì zài túshūguǎn, jiù shì zài bǔxíbān.", "Le week-end, s'il n'est pas à la bibliothèque, il est en cours du soir.", "At weekends he's either at the library or at cram school."),
    ],
    pitfalls: t(
      "✗ 要么 dans une question : ✗ 你要么喝茶要么喝咖啡？→ pour une question ✓ 你喝茶还是喝咖啡？\n✗ Un seul 要么 : la structure est ✓ 要么…要么… (en parallèle).",
      "✗ 要么 in a question: ✗ 你要么喝茶要么喝咖啡？→ for questions use ✓ 你喝茶还是喝咖啡？\n✗ A single 要么: the pattern is parallel ✓ 要么…要么….",
    ),
  },
];
