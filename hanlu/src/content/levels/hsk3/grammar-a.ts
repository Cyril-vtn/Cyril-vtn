import type { GrammarPoint } from "../../types";
import { t, ex } from "./helpers";

export const grammarA: GrammarPoint[] = [
  {
    id: "hsk3-g01",
    level: 3,
    title: t("Mettre en relief les circonstances : 是……的", "Emphasising circumstances: 是……的"),
    pattern: "Sujet + 是 + [quand / où / comment / avec qui] + Verbe + 的",
    explanation: t(
      "La structure **是……的** sert à parler d'une action **déjà réalisée** en mettant l'accent non pas sur l'action elle-même (on sait qu'elle a eu lieu), mais sur une **circonstance** : le moment, le lieu, le moyen, la personne, le but.\n\nOn place **是** juste devant l'élément mis en relief et **的** à la fin de la phrase (ou avant un objet simple : 我是昨天买的票). C'est l'équivalent du français « c'est… que » : « C'est hier que je suis arrivé ».\n\nÀ l'oral, **是** peut disparaître dans une phrase affirmative (我昨天来的), mais **的** est obligatoire. À la forme négative, on dit **不是……的** : 我不是坐飞机来的。",
      "The **是……的** structure is used for an action that **has already happened**, when the focus is not the action itself (everyone knows it happened) but a **circumstance**: when, where, how, with whom, why.\n\nPut **是** right before the focused element and **的** at the end of the sentence (or before a simple object: 我是昨天买的票). It works like English cleft sentences: \"It was yesterday that I arrived.\"\n\nIn speech, **是** can be dropped in affirmative sentences (我昨天来的), but **的** cannot. The negative is **不是……的**: 我不是坐飞机来的。"
    ),
    examples: [
      ex("你是什么时候来北京的？", "Nǐ shì shénme shíhou lái Běijīng de?", "Tu es arrivé à Pékin quand ?", "When did you come to Beijing?"),
      ex("我是坐高铁来的，不是坐飞机来的。", "Wǒ shì zuò gāotiě lái de, bú shì zuò fēijī lái de.", "Je suis venu en TGV, pas en avion.", "I came by high-speed train, not by plane."),
      ex("这个工作机会是朋友介绍的。", "Zhège gōngzuò jīhuì shì péngyou jièshào de.", "C'est un ami qui m'a présenté cette offre d'emploi.", "It was a friend who told me about this job opening."),
      ex("你是在哪儿学的中文？", "Nǐ shì zài nǎr xué de Zhōngwén?", "Où est-ce que tu as appris le chinois ?", "Where did you learn Chinese?"),
    ],
    pitfalls: t(
      "✗ 我是明天来的。 → 是……的 ne s'utilise que pour le **passé**. ✓ 我明天来。\n✗ 我是昨天来了。 → pas de 了 dans cette structure. ✓ 我是昨天来的。\n✗ 我不昨天来的。 → la négation porte sur 是. ✓ 我不是昨天来的。",
      "✗ 我是明天来的。 → 是……的 only describes **past** events. ✓ 我明天来。\n✗ 我是昨天来了。 → no 了 in this pattern. ✓ 我是昨天来的。\n✗ 我不昨天来的。 → negate 是 itself. ✓ 我不是昨天来的。"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g02",
    level: 3,
    title: t("Expérience passée : 曾经", "Past experience: 曾经"),
    pattern: "Sujet + 曾经 + Verbe (+ 过) + Objet",
    explanation: t(
      "**曾经** (céngjīng) signifie « autrefois, déjà, il m'est arrivé de ». Il indique qu'une action ou une situation a existé **dans le passé** et qu'elle est **terminée** aujourd'hui. On l'associe très souvent à **过** ou à **了**.\n\nC'est un mot un peu plus soutenu que le simple 过 : il est idéal pour parler de son parcours, par exemple en entretien d'embauche.\n\nAttention à ne pas le confondre avec **已经** (déjà) : 已经 dit qu'une action est accomplie **jusqu'à maintenant** et que son résultat compte encore ; 曾经 renvoie à un passé révolu.",
      "**曾经** (céngjīng) means \"once, at some point in the past, have (ever) done\". It shows that an action or state existed **in the past** and is **over** now. It very often goes with **过** or **了**.\n\nIt sounds a bit more formal than plain 过, which makes it perfect for talking about your background — in a job interview, for example.\n\nDon't confuse it with **已经** (already): 已经 says something is done **as of now** and its result still matters; 曾经 points to a finished past."
    ),
    examples: [
      ex("我曾经在一家外国公司工作过两年。", "Wǒ céngjīng zài yì jiā wàiguó gōngsī gōngzuò guo liǎng nián.", "J'ai travaillé deux ans dans une entreprise étrangère.", "I once worked for a foreign company for two years."),
      ex("他曾经是我们学校的老师。", "Tā céngjīng shì wǒmen xuéxiào de lǎoshī.", "Il a été professeur dans notre école.", "He used to be a teacher at our school."),
      ex("我曾经想当医生，后来改变了主意。", "Wǒ céngjīng xiǎng dāng yīshēng, hòulái gǎibiàn le zhǔyi.", "J'ai voulu être médecin à une époque, puis j'ai changé d'avis.", "I once wanted to be a doctor, but later I changed my mind."),
      ex("这里曾经有一个很大的公园。", "Zhèlǐ céngjīng yǒu yí ge hěn dà de gōngyuán.", "Il y avait autrefois un grand parc ici.", "There used to be a big park here."),
    ],
    pitfalls: t(
      "✗ 我曾经吃饭了，不饿。 → le résultat compte maintenant : utilise 已经. ✓ 我已经吃饭了，不饿。\n✗ 我没曾经去过。 → à la forme négative on dit simplement 没(有)……过. ✓ 我没去过。",
      "✗ 我曾经吃饭了，不饿。 → the result matters now, so use 已经. ✓ 我已经吃饭了，不饿。\n✗ 我没曾经去过。 → in the negative just use 没(有)……过. ✓ 我没去过。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g03",
    level: 3,
    title: t("Par le biais de : 通过", "By means of: 通过"),
    pattern: "通过 + moyen / personne, (Sujet) + Verbe…",
    explanation: t(
      "Comme préposition, **通过** (tōngguò) signifie « par l'intermédiaire de, grâce à, via ». Il introduit le **moyen** ou la **personne** qui permet d'obtenir un résultat.\n\nLe groupe 通过 + X se met généralement **en tête de phrase** ou juste après le sujet : 通过朋友，我找到了这份工作 / 我通过朋友找到了这份工作。\n\n通过 est aussi un verbe : « passer, réussir (un examen) », « traverser » : 他通过了面试 (il a réussi l'entretien).",
      "As a preposition, **通过** (tōngguò) means \"through, by means of, via\". It introduces the **means** or the **person** that makes a result possible.\n\nThe 通过 + X phrase usually goes **at the start of the sentence** or right after the subject: 通过朋友，我找到了这份工作 / 我通过朋友找到了这份工作。\n\n通过 is also a verb: \"to pass (an exam)\", \"to go through\": 他通过了面试 (he passed the interview)."
    ),
    examples: [
      ex("通过这次面试，我了解了这家公司。", "Tōngguò zhè cì miànshì, wǒ liǎojiě le zhè jiā gōngsī.", "Grâce à cet entretien, j'ai appris à connaître cette entreprise.", "Through this interview, I got to know the company."),
      ex("我是通过网站找到这份工作的。", "Wǒ shì tōngguò wǎngzhàn zhǎodào zhè fèn gōngzuò de.", "C'est via un site internet que j'ai trouvé ce travail.", "I found this job through a website."),
      ex("通过努力，他的汉语水平提高了很多。", "Tōngguò nǔlì, tā de Hànyǔ shuǐpíng tígāo le hěn duō.", "À force d'efforts, son niveau de chinois a beaucoup progressé.", "Through hard work, his Chinese improved a lot."),
      ex("恭喜你通过了考试！", "Gōngxǐ nǐ tōngguò le kǎoshì!", "Félicitations, tu as réussi l'examen !", "Congratulations on passing the exam!"),
    ],
    pitfalls: t(
      "✗ 我找到了工作通过朋友。 → le groupe prépositionnel se place **avant** le verbe. ✓ 我通过朋友找到了工作。\nNe confonds pas avec 经过 (passer devant / après) : 经过这次经历 insiste sur l'expérience vécue, 通过 sur le moyen.",
      "✗ 我找到了工作通过朋友。 → the prepositional phrase goes **before** the verb. ✓ 我通过朋友找到了工作。\nDon't mix it up with 经过 (to pass by / after going through): 经过 stresses the process lived through, 通过 the means."
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g04",
    level: 3,
    title: t("Du point de vue de : 对……来说", "As far as … is concerned: 对……来说"),
    pattern: "对 + personne + 来说，…",
    explanation: t(
      "**对……来说** signifie « pour quelqu'un, du point de vue de quelqu'un ». On l'utilise pour dire qu'un jugement vaut **pour une personne en particulier** : 对我来说，这个工作很合适 (pour moi, ce travail convient bien).\n\nLa structure se place presque toujours **en début de phrase**, suivie d'une virgule.\n\nNe la confonds pas avec **对** seul (envers, à l'égard de : 他对我很好) ni avec **我觉得** : 对我来说 met en avant la situation de la personne, 我觉得 exprime une opinion.",
      "**对……来说** means \"for someone, from someone's point of view\". It says a judgement holds **for a particular person**: 对我来说，这个工作很合适 (for me, this job is a good fit).\n\nIt almost always comes **at the start of the sentence**, followed by a comma.\n\nDon't confuse it with plain **对** (towards: 他对我很好) or with **我觉得**: 对我来说 highlights the person's situation, 我觉得 states an opinion."
    ),
    examples: [
      ex("对我来说，工作环境比工资更重要。", "Duì wǒ lái shuō, gōngzuò huánjìng bǐ gōngzī gèng zhòngyào.", "Pour moi, l'environnement de travail compte plus que le salaire.", "For me, the work environment matters more than the salary."),
      ex("对外国人来说，汉字不太容易。", "Duì wàiguórén lái shuō, Hànzì bú tài róngyì.", "Pour les étrangers, les caractères chinois ne sont pas très faciles.", "For foreigners, Chinese characters aren't very easy."),
      ex("这个机会对他来说非常重要。", "Zhège jīhuì duì tā lái shuō fēicháng zhòngyào.", "Cette occasion est très importante pour lui.", "This opportunity is very important to him."),
    ],
    pitfalls: t(
      "✗ 对我说，这很难。 → il manque 来. ✓ 对我来说，这很难。\n✗ 为我来说…… → on utilise 对, pas 为. ✓ 对我来说……",
      "✗ 对我说，这很难。 → 来 is missing. ✓ 对我来说，这很难。\n✗ 为我来说…… → use 对, not 为. ✓ 对我来说……"
    ),
    category: "固定格式 / fixed patterns",
  },
  {
    id: "hsk3-g05",
    level: 3,
    title: t("Structurer un exposé : 首先……其次……最后", "Structuring a talk: 首先……其次……最后"),
    pattern: "首先…，其次…，然后/再…，最后…",
    explanation: t(
      "Pour organiser un discours ou une liste d'étapes, on utilise **首先** (d'abord, en premier lieu), **其次** (ensuite, en second lieu), et **最后** (enfin).\n\n首先 et 其次 sont un peu **formels** : parfaits pour un entretien, une présentation ou un texte. À l'oral détendu, on dit plutôt 先……再……然后……\n\n其次 peut aussi signifier « secondaire, moins important » : 工资是其次的 (le salaire, c'est secondaire).",
      "To organise a speech or a list of steps, use **首先** (first of all), **其次** (secondly, next), and **最后** (finally).\n\n首先 and 其次 are rather **formal**: great for interviews, presentations or written texts. In relaxed speech people prefer 先……再……然后……\n\n其次 can also mean \"secondary, less important\": 工资是其次的 (the salary is secondary)."
    ),
    examples: [
      ex("首先，我对这个工作很感兴趣；其次，我有相关的经验。", "Shǒuxiān, wǒ duì zhège gōngzuò hěn gǎn xìngqù; qícì, wǒ yǒu xiāngguān de jīngyàn.", "D'abord, ce poste m'intéresse beaucoup ; ensuite, j'ai une expérience dans le domaine.", "First, I'm very interested in this job; secondly, I have relevant experience."),
      ex("首先要了解情况，然后再做决定。", "Shǒuxiān yào liǎojiě qíngkuàng, ránhòu zài zuò juédìng.", "Il faut d'abord bien comprendre la situation, puis prendre une décision.", "First you need to understand the situation, then make a decision."),
      ex("最后，谢谢大家给我这个机会。", "Zuìhòu, xièxie dàjiā gěi wǒ zhège jīhuì.", "Enfin, merci à tous de m'avoir donné cette chance.", "Finally, thank you all for giving me this opportunity."),
    ],
    pitfalls: t(
      "✗ 第一……其次……最后 n'est pas faux, mais évite de mélanger les registres : 首先……其次……最后 ou 第一……第二……第三.\n✗ 最后我首先吃饭。 → 首先 et 最后 s'excluent dans la même proposition.",
      "✗ 第一……其次……最后 isn't wrong, but avoid mixing registers: use 首先……其次……最后 or 第一……第二……第三.\n✗ 最后我首先吃饭。 → 首先 and 最后 can't sit in the same clause."
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g06",
    level: 3,
    title: t("La phrase en 把 : agir sur un objet", "The 把 sentence: doing something to an object"),
    pattern: "Sujet + 把 + Objet + Verbe + complément (了 / résultat / direction…)",
    explanation: t(
      "La phrase en **把** met l'**objet avant le verbe** pour insister sur ce qu'on **fait subir** à cet objet et sur le **résultat** : il est déplacé, modifié, terminé, cassé…\n\nTrois règles d'or :\n1. L'objet est **défini** (on sait de quoi on parle) : 把这些书, 把我的行李.\n2. Le verbe ne peut **jamais être seul** : il faut un complément (了, un complément de résultat, de direction, un redoublement…). ✓ 把门关上 / 把饭吃完了.\n3. Le verbe doit exprimer une **action concrète sur l'objet**. On ne dit pas ✗ 把中文喜欢.\n\nComparaison : 我搬了箱子 (j'ai déplacé des cartons) → 我把箱子搬到楼上了 (les cartons, je les ai montés à l'étage) : on apprend ce qui est arrivé aux cartons.",
      "The **把** sentence moves the **object before the verb** to stress what is **done to** that object and the **result**: it gets moved, changed, finished, broken…\n\nThree golden rules:\n1. The object is **definite** (we know which one): 把这些书, 把我的行李.\n2. The verb can **never stand alone**: it needs something after it (了, a result complement, a direction, reduplication…). ✓ 把门关上 / 把饭吃完了.\n3. The verb must be a **concrete action affecting the object**. You can't say ✗ 把中文喜欢.\n\nCompare: 我搬了箱子 (I moved some boxes) → 我把箱子搬到楼上了 (I moved the boxes upstairs): the focus is on what happened to the boxes."
    ),
    examples: [
      ex("请把门关上。", "Qǐng bǎ mén guānshang.", "Ferme la porte, s'il te plaît.", "Please close the door."),
      ex("我已经把行李收拾好了。", "Wǒ yǐjīng bǎ xíngli shōushi hǎo le.", "J'ai déjà fini de faire mes bagages.", "I've already packed my luggage."),
      ex("你把这些旧衣服扔了吧。", "Nǐ bǎ zhèxiē jiù yīfu rēng le ba.", "Jette donc ces vieux vêtements.", "Just throw away these old clothes."),
      ex("他把房间打扫得很干净。", "Tā bǎ fángjiān dǎsǎo de hěn gānjìng.", "Il a nettoyé la chambre à fond.", "He cleaned the room really well."),
    ],
    pitfalls: t(
      "✗ 我把饭吃。 → verbe sans complément. ✓ 我把饭吃完了。\n✗ 我把一本书看完了。 → objet indéfini. ✓ 我把那本书看完了。\n✗ 我把他认识了。 → 认识, 喜欢, 知道, 是, 有 ne vont pas avec 把.",
      "✗ 我把饭吃。 → verb with nothing after it. ✓ 我把饭吃完了。\n✗ 我把一本书看完了。 → indefinite object. ✓ 我把那本书看完了。\n✗ 我把他认识了。 → 认识, 喜欢, 知道, 是, 有 don't work with 把."
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g07",
    level: 3,
    title: t("把 + Verbe + 在 / 到 / 给 : déplacer, remettre", "把 + Verb + 在 / 到 / 给: placing, moving, handing over"),
    pattern: "Sujet + 把 + Objet + Verbe + 在 / 到 + lieu ｜ 给 + personne",
    explanation: t(
      "Quand une action **fait changer de place** un objet ou le **remet** à quelqu'un, le chinois utilise presque obligatoirement **把** :\n- 把 + O + V + **在** + lieu : l'objet **se retrouve** à cet endroit (放在桌子上).\n- 把 + O + V + **到** + lieu : l'objet **arrive** à un endroit (搬到新家).\n- 把 + O + V + **给** + personne : l'objet est **remis** à quelqu'un (交给老师).\n\nEn français on dit simplement « Pose les clés sur la table » ; en chinois, ✗ 放钥匙在桌子上 est incorrect : il faut ✓ 把钥匙放在桌子上。",
      "When an action **moves** an object to a place or **hands** it to someone, Chinese almost always uses **把**:\n- 把 + O + V + **在** + place: the object **ends up** there (放在桌子上).\n- 把 + O + V + **到** + place: the object **reaches** a place (搬到新家).\n- 把 + O + V + **给** + person: the object is **given** to someone (交给老师).\n\nIn English you just say \"Put the keys on the table\"; in Chinese ✗ 放钥匙在桌子上 is wrong — you need ✓ 把钥匙放在桌子上。"
    ),
    examples: [
      ex("你把钥匙放在哪儿了？", "Nǐ bǎ yàoshi fàng zài nǎr le?", "Où as-tu mis les clés ?", "Where did you put the keys?"),
      ex("我们把沙发搬到客厅吧。", "Wǒmen bǎ shāfā bāndào kètīng ba.", "Mettons le canapé dans le salon.", "Let's move the sofa into the living room."),
      ex("请把这封信交给房东。", "Qǐng bǎ zhè fēng xìn jiāogěi fángdōng.", "Remets cette lettre au propriétaire, s'il te plaît.", "Please give this letter to the landlord."),
      ex("他把车停在了楼下。", "Tā bǎ chē tíng zài le lóu xià.", "Il a garé la voiture en bas de l'immeuble.", "He parked the car downstairs."),
    ],
    pitfalls: t(
      "✗ 我放书在桌子上。 → ✓ 我把书放在桌子上。\n✗ 我把书放桌子。 → il manque 在 et 上 : ✓ 放在桌子上.\nLe 了 se met après le lieu ou juste après 在/到 : 放在桌子上了 / 放在了桌子上 — pas entre le verbe et 在.",
      "✗ 我放书在桌子上。 → ✓ 我把书放在桌子上。\n✗ 我把书放桌子。 → 在 and 上 are missing: ✓ 放在桌子上.\n了 goes after the place or right after 在/到: 放在桌子上了 / 放在了桌子上 — never between the verb and 在."
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g08",
    level: 3,
    title: t("Compléments directionnels composés : 上来, 下去, 进来, 出去…", "Compound directional complements: 上来, 下去, 进来, 出去…"),
    pattern: "Verbe + 上/下/进/出/回/过/起 + 来/去",
    explanation: t(
      "Un complément directionnel **composé** combine deux éléments après le verbe :\n- la **direction** du mouvement : 上 (monter), 下 (descendre), 进 (entrer), 出 (sortir), 回 (revenir), 过 (passer), 起 (se lever) ;\n- le **point de vue** du locuteur : **来** (vers moi) ou **去** (loin de moi).\n\nEx. : 走进来 (entrer, vers moi), 跑出去 (sortir en courant), 搬上去 (monter quelque chose là-haut).\n\n**Place de l'objet** : un **lieu** se place obligatoirement **avant 来/去** : 走进教室来, 跑回家去. Une **chose** peut se placer avant 来/去 ou à la fin : 拿出一本书来 / 拿出来一本书.",
      "A **compound** directional complement adds two elements after the verb:\n- the **direction** of movement: 上 (up), 下 (down), 进 (in), 出 (out), 回 (back), 过 (over), 起 (up from lying/sitting);\n- the speaker's **viewpoint**: **来** (towards me) or **去** (away from me).\n\nE.g. 走进来 (walk in, towards me), 跑出去 (run out), 搬上去 (carry up there).\n\n**Object position**: a **place** must go **before 来/去**: 走进教室来, 跑回家去. A **thing** can go before 来/去 or at the end: 拿出一本书来 / 拿出来一本书."
    ),
    examples: [
      ex("快进来吧，外面很冷。", "Kuài jìnlai ba, wàimiàn hěn lěng.", "Entre vite, il fait froid dehors.", "Come on in, it's cold outside."),
      ex("你能帮我把箱子搬上去吗？", "Nǐ néng bāng wǒ bǎ xiāngzi bān shangqu ma?", "Tu peux m'aider à monter le carton ?", "Can you help me carry the box up?"),
      ex("他从包里拿出来一本护照。", "Tā cóng bāo lǐ ná chulai yì běn hùzhào.", "Il a sorti un passeport de son sac.", "He took a passport out of his bag."),
      ex("孩子们跑回家去了。", "Háizimen pǎo huí jiā qu le.", "Les enfants sont rentrés chez eux en courant.", "The kids ran back home."),
    ],
    pitfalls: t(
      "✗ 他走进来教室。 → le lieu se met avant 来. ✓ 他走进教室来。\n✗ 你下来楼吧。 → ✓ 你下楼来吧。\nChoisis 来 ou 去 selon **où tu te trouves** : si tu es dans la pièce, on « 进来 » ; si tu es dehors, on « 进去 ».",
      "✗ 他走进来教室。 → the place goes before 来. ✓ 他走进教室来。\n✗ 你下来楼吧。 → ✓ 你下楼来吧。\nPick 来 or 去 according to **where you are**: if you're in the room, people 进来; if you're outside, they 进去."
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g09",
    level: 3,
    title: t("À part… : 除了……以外", "Apart from…: 除了……以外"),
    pattern: "除了 A (以外)，B 都… ｜ 除了 A (以外)，还/也 B",
    explanation: t(
      "**除了……以外** (以外 est facultatif) a **deux sens**, selon l'adverbe qui suit :\n1. **Exclusion** — « sauf, excepté » : 除了A，(其他)都…  → A est l'exception. 除了小王，大家都来了 (tout le monde est venu sauf Xiao Wang).\n2. **Ajout** — « en plus de » : 除了A，还/也 B → A et B sont vrais tous les deux. 除了中文，他还会说法语 (en plus du chinois, il parle aussi français).\n\nC'est donc **都** ou **还/也** dans la deuxième partie qui donne le sens : sois attentif !",
      "**除了……以外** (以外 is optional) has **two meanings**, depending on the adverb that follows:\n1. **Exclusion** — \"except\": 除了A，(其他)都… → A is the exception. 除了小王，大家都来了 (everyone came except Xiao Wang).\n2. **Addition** — \"besides, in addition to\": 除了A，还/也 B → both A and B are true. 除了中文，他还会说法语 (besides Chinese, he also speaks French).\n\nSo it's **都** or **还/也** in the second half that decides the meaning — watch for it!"
    ),
    examples: [
      ex("除了厨房以外，别的房间都很大。", "Chúle chúfáng yǐwài, bié de fángjiān dōu hěn dà.", "À part la cuisine, toutes les pièces sont grandes.", "Apart from the kitchen, all the other rooms are big."),
      ex("除了房租，我还要付水电费。", "Chúle fángzū, wǒ hái yào fù shuǐdiànfèi.", "En plus du loyer, je dois aussi payer l'eau et l'électricité.", "Besides the rent, I also have to pay for water and electricity."),
      ex("除了周末，他每天都加班。", "Chúle zhōumò, tā měi tiān dōu jiābān.", "Sauf le week-end, il fait des heures sup tous les jours.", "He works overtime every day except weekends."),
      ex("除了我以外，我的同事也搬家了。", "Chúle wǒ yǐwài, wǒ de tóngshì yě bānjiā le.", "Il n'y a pas que moi : mon collègue a déménagé aussi.", "Besides me, my colleague also moved house."),
    ],
    pitfalls: t(
      "✗ 除了他，我们还没去。 → ambigu/incorrect : pour exclure, utilise 都. ✓ 除了他，我们都去了。\n✗ 除了……以外 + 都 et 还 dans la même phrase : choisis l'un ou l'autre.",
      "✗ 除了他，我们还没去。 → confusing: to exclude, use 都. ✓ 除了他，我们都去了。\n✗ Using both 都 and 还 after 除了: pick one meaning."
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g10",
    level: 3,
    title: t("Phrases d'existence : 桌子上放着…, 来了一位…", "Existential sentences: 桌子上放着…, 来了一位…"),
    pattern: "Lieu + Verbe + 着 / 了 + (nombre + classificateur) + Nom",
    explanation: t(
      "Pour décrire **ce qui se trouve** à un endroit, ou ce qui **apparaît / disparaît**, le chinois commence par le **lieu**, puis le **verbe**, puis la **chose** ou la **personne** (souvent indéfinie, avec un nombre).\n\n- **Existence** avec **着** : 墙上挂着一张地图 (au mur est accrochée une carte).\n- **Apparition / disparition** avec **了** : 楼下搬来了一家人 (une famille a emménagé en bas), 我们班走了两个同学 (deux camarades ont quitté notre classe).\n\nC'est l'équivalent de « Il y a… » ou « Est arrivé un… » en français. Le lieu **n'a pas besoin de 在** devant.",
      "To describe **what is located** somewhere, or what **appears / disappears**, Chinese starts with the **place**, then the **verb**, then the **thing or person** (usually indefinite, with a number).\n\n- **Existence** with **着**: 墙上挂着一张地图 (on the wall hangs a map).\n- **Appearance / disappearance** with **了**: 楼下搬来了一家人 (a family moved in downstairs), 我们班走了两个同学 (two classmates left our class).\n\nIt's like English \"There is…\" or \"In came…\". The place **doesn't need 在** in front."
    ),
    examples: [
      ex("桌子上放着很多箱子。", "Zhuōzi shang fàng zhe hěn duō xiāngzi.", "Il y a plein de cartons posés sur la table.", "There are lots of boxes on the table."),
      ex("门口站着一个人。", "Ménkǒu zhàn zhe yí ge rén.", "Il y a quelqu'un debout devant la porte.", "There's someone standing at the door."),
      ex("我们楼里搬来了一位新邻居。", "Wǒmen lóu lǐ bānlai le yí wèi xīn línjū.", "Un nouveau voisin a emménagé dans notre immeuble.", "A new neighbour has moved into our building."),
      ex("墙上挂着一张城市地图。", "Qiáng shang guà zhe yì zhāng chéngshì dìtú.", "Un plan de la ville est accroché au mur.", "A city map is hanging on the wall."),
    ],
    pitfalls: t(
      "✗ 在桌子上放着一本书。 → pas de 在 en tête. ✓ 桌子上放着一本书。\n✗ 桌子上放着那本书。 → la chose est normalement indéfinie. ✓ 桌子上放着一本书。 (Pour une chose connue : 那本书在桌子上。)",
      "✗ 在桌子上放着一本书。 → no 在 at the start. ✓ 桌子上放着一本书。\n✗ 桌子上放着那本书。 → the thing is normally indefinite. ✓ 桌子上放着一本书。 (For a known thing: 那本书在桌子上。)"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g11",
    level: 3,
    title: t("Condition suffisante : 只要……就", "Sufficient condition: 只要……就"),
    pattern: "只要 + condition，(Sujet) + 就 + résultat",
    explanation: t(
      "**只要……就** signifie « il suffit que… pour que… / du moment que… ». La condition est **suffisante** : si elle est remplie, le résultat suit forcément, et c'est **facile**.\n\n**只要** se place au début de la première proposition (avant ou après le sujet), **就** se place **après le sujet** de la seconde proposition, juste devant le verbe.\n\nComparaison avec 只有……才 (point suivant) : 只要 = « il suffit de », 只有 = « il faut absolument ».",
      "**只要……就** means \"as long as…, then…\" / \"all you need is…\". The condition is **sufficient**: if it's met, the result follows, and it's **easy**.\n\n**只要** starts the first clause (before or after the subject); **就** goes **after the subject** of the second clause, right before the verb.\n\nCompare with 只有……才 (next point): 只要 = \"it's enough to\", 只有 = \"only if\"."
    ),
    examples: [
      ex("只要每天锻炼半个小时，身体就会越来越好。", "Zhǐyào měi tiān duànliàn bàn ge xiǎoshí, shēntǐ jiù huì yuè lái yuè hǎo.", "Il suffit de faire du sport une demi-heure par jour pour être en meilleure forme.", "As long as you exercise half an hour a day, your health will keep improving."),
      ex("只要你按时吃药，病很快就会好。", "Zhǐyào nǐ ànshí chī yào, bìng hěn kuài jiù huì hǎo.", "Du moment que tu prends tes médicaments à l'heure, tu guériras vite.", "As long as you take your medicine on time, you'll get better soon."),
      ex("只要有时间，我就去游泳。", "Zhǐyào yǒu shíjiān, wǒ jiù qù yóuyǒng.", "Dès que j'ai du temps, je vais nager.", "Whenever I have time, I go swimming."),
    ],
    pitfalls: t(
      "✗ 只要你努力，你才能成功。 → 只要 va avec 就. ✓ 只要你努力，你就能成功。\n✗ 只要你努力，就你能成功。 → 就 se place après le sujet. ✓ ……你就能成功。",
      "✗ 只要你努力，你才能成功。 → 只要 pairs with 就. ✓ 只要你努力，你就能成功。\n✗ 只要你努力，就你能成功。 → 就 comes after the subject. ✓ ……你就能成功。"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g12",
    level: 3,
    title: t("Condition nécessaire : 只有……才", "Necessary condition: 只有……才"),
    pattern: "只有 + condition，(Sujet) + 才 + résultat",
    explanation: t(
      "**只有……才** signifie « ce n'est qu'à condition que… que… / il faut absolument… pour… ». La condition est **nécessaire** : sans elle, pas de résultat. On insiste sur la **difficulté** ou l'**exigence**.\n\n**才** se place après le sujet de la deuxième proposition, devant le verbe.\n\n只要早点儿睡，就不会累 (il suffit de se coucher tôt) ≠ 只有早点儿睡，才不会累 (il n'y a qu'en se couchant tôt qu'on n'est pas fatigué — pas d'autre solution).",
      "**只有……才** means \"only if… (then)…\". The condition is **necessary**: without it, no result. It stresses **difficulty** or a **requirement**.\n\n**才** goes after the subject of the second clause, before the verb.\n\n只要早点儿睡，就不会累 (just go to bed early and you won't be tired) ≠ 只有早点儿睡，才不会累 (only going to bed early will keep you from being tired — there's no other way)."
    ),
    examples: [
      ex("只有坚持锻炼，身体才会健康。", "Zhǐyǒu jiānchí duànliàn, shēntǐ cái huì jiànkāng.", "Ce n'est qu'en faisant du sport régulièrement qu'on reste en bonne santé.", "Only by exercising regularly can you stay healthy."),
      ex("只有医生同意，你才能出院。", "Zhǐyǒu yīshēng tóngyì, nǐ cái néng chūyuàn.", "Tu ne pourras sortir de l'hôpital que si le médecin est d'accord.", "You can only leave hospital if the doctor agrees."),
      ex("只有多听多说，才能学好中文。", "Zhǐyǒu duō tīng duō shuō, cái néng xuéhǎo Zhōngwén.", "Il faut beaucoup écouter et parler pour bien apprendre le chinois.", "Only by listening and speaking a lot can you master Chinese."),
    ],
    pitfalls: t(
      "✗ 只有你来，我就高兴。 → 只有 va avec 才. ✓ 只有你来，我才高兴。\n✗ 只有……才 + 了 : 才 ne se combine pas avec le 了 final. ✗ 他十点才来了。 ✓ 他十点才来。",
      "✗ 只有你来，我就高兴。 → 只有 pairs with 才. ✓ 只有你来，我才高兴。\n✗ 才 doesn't take a sentence-final 了: ✗ 他十点才来了。 ✓ 他十点才来。"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g13",
    level: 3,
    title: t("Plus… plus… : 越……越 / 越来越", "The more… the more…: 越……越 / 越来越"),
    pattern: "A 越 V1，(B) 越 V2 ｜ Sujet + 越来越 + Adj",
    explanation: t(
      "**越A越B** : « plus A, plus B ». Le changement de B **dépend** du changement de A : 你越说，我越不明白 (plus tu parles, moins je comprends).\n\n**越来越 + adjectif / verbe psychologique** : « de plus en plus ». Il décrit une évolution avec le **temps** : 天气越来越冷 (il fait de plus en plus froid).\n\nComme 越 est déjà un adverbe de degré, on n'ajoute **jamais** 很, 非常, 太… après : ✗ 越来越很好.",
      "**越A越B**: \"the more A, the more B\". The change in B **depends** on A: 你越说，我越不明白 (the more you talk, the less I understand).\n\n**越来越 + adjective / psychological verb**: \"more and more\". It describes change **over time**: 天气越来越冷 (it's getting colder and colder).\n\nSince 越 is already a degree adverb, **never** add 很, 非常, 太… after it: ✗ 越来越很好."
    ),
    examples: [
      ex("他的身体越来越好了。", "Tā de shēntǐ yuè lái yuè hǎo le.", "Il est en de plus en plus en forme.", "His health is getting better and better."),
      ex("雨越下越大。", "Yǔ yuè xià yuè dà.", "La pluie tombe de plus en plus fort.", "The rain is getting heavier and heavier."),
      ex("你越紧张，就越睡不着。", "Nǐ yuè jǐnzhāng, jiù yuè shuì bu zháo.", "Plus tu stresses, moins tu arrives à dormir.", "The more stressed you are, the harder it is to fall asleep."),
      ex("我越来越喜欢早上跑步了。", "Wǒ yuè lái yuè xǐhuan zǎoshang pǎobù le.", "J'aime de plus en plus courir le matin.", "I'm enjoying morning runs more and more."),
    ],
    pitfalls: t(
      "✗ 天气越来越很冷。 → pas d'adverbe de degré. ✓ 天气越来越冷。\n✗ 越来越我喜欢。 → le sujet vient avant. ✓ 我越来越喜欢。",
      "✗ 天气越来越很冷。 → no degree adverb. ✓ 天气越来越冷。\n✗ 越来越我喜欢。 → subject first. ✓ 我越来越喜欢。"
    ),
    category: "固定格式 / fixed patterns",
  },
  {
    id: "hsk3-g14",
    level: 3,
    title: t("Jamais : 从来 + 不 / 没", "Never: 从来 + 不 / 没"),
    pattern: "Sujet + 从来 + 不 + Verbe ｜ 从来 + 没(有) + Verbe + 过",
    explanation: t(
      "**从来** (cónglái) signifie « depuis toujours » ; il s'emploie surtout à la forme **négative** pour dire « jamais ».\n- **从来不 + V** : une **habitude** ou un principe — « ne… jamais » : 他从来不喝酒 (il ne boit jamais d'alcool).\n- **从来没(有) + V + 过** : une **expérience** qui n'a jamais eu lieu jusqu'à maintenant : 我从来没去过医院 (je ne suis jamais allé à l'hôpital).\n\nLe choix entre 不 et 没 suit la même logique qu'au niveau 1 : 不 = habitude/volonté, 没 = fait passé.",
      "**从来** (cónglái) means \"always, all along\"; it's mostly used in the **negative** to mean \"never\".\n- **从来不 + V**: a **habit** or principle — \"never (does)\": 他从来不喝酒 (he never drinks alcohol).\n- **从来没(有) + V + 过**: an **experience** that has never happened up to now: 我从来没去过医院 (I've never been to hospital).\n\nThe choice of 不 vs 没 follows the usual logic: 不 = habit/will, 没 = past fact."
    ),
    examples: [
      ex("我爷爷从来不抽烟。", "Wǒ yéye cónglái bù chōuyān.", "Mon grand-père n'a jamais fumé de sa vie.", "My grandfather never smokes."),
      ex("我从来没这么累过。", "Wǒ cónglái méi zhème lèi guo.", "Je n'ai jamais été aussi fatigué.", "I've never been this tired."),
      ex("她从来不吃早饭，这个习惯不好。", "Tā cónglái bù chī zǎofàn, zhège xíguàn bù hǎo.", "Elle ne prend jamais de petit-déjeuner, ce n'est pas une bonne habitude.", "She never eats breakfast — that's a bad habit."),
    ],
    pitfalls: t(
      "✗ 我从来没去。 → avec 没, ajoute 过 pour l'expérience. ✓ 我从来没去过。\n✗ 我从来喝咖啡。 → à l'affirmative, préfère 一直 ou 总是. ✓ 我一直喝咖啡。",
      "✗ 我从来没去。 → with 没, add 过 for experience. ✓ 我从来没去过。\n✗ 我从来喝咖啡。 → in the affirmative, use 一直 or 总是 instead. ✓ 我一直喝咖啡。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g15",
    level: 3,
    title: t("Obligation : 必须, 得 (děi), 不用", "Obligation: 必须, 得 (děi), 不用"),
    pattern: "Sujet + 必须 / 得 + Verbe ｜ 不用 / 不必 + Verbe",
    explanation: t(
      "Pour dire « il faut, on doit » :\n- **必须** (bìxū) : obligation **forte**, règle, nécessité absolue — registre neutre à soutenu.\n- **得** (**děi**, attention à la prononciation !) : « il faut, je dois » — très **oral**.\n\nLa **négation** n'est **pas** 不必须 ni 不得 : on dit **不用** (pas besoin de) ou, plus soutenu, **不必**.\n\n你必须去 → 你不用去 (tu n'as pas besoin d'y aller).",
      "To say \"must, have to\":\n- **必须** (bìxū): **strong** obligation, a rule, absolute necessity — neutral to formal.\n- **得** (**děi** — mind the pronunciation!): \"have to, gotta\" — very **colloquial**.\n\nThe **negative** is **not** 不必须 or 不得: say **不用** (no need to) or, more formally, **不必**.\n\n你必须去 → 你不用去 (you don't need to go)."
    ),
    examples: [
      ex("感冒了，你必须多喝水、多休息。", "Gǎnmào le, nǐ bìxū duō hē shuǐ, duō xiūxi.", "Tu es enrhumé : tu dois boire beaucoup d'eau et te reposer.", "You've got a cold, so you must drink lots of water and rest."),
      ex("太晚了，我得走了。", "Tài wǎn le, wǒ děi zǒu le.", "Il est tard, il faut que j'y aille.", "It's late, I've got to go."),
      ex("你不用担心，只是小问题。", "Nǐ bú yòng dānxīn, zhǐshì xiǎo wèntí.", "Pas besoin de t'inquiéter, ce n'est qu'un petit problème.", "No need to worry, it's just a minor problem."),
    ],
    pitfalls: t(
      "✗ 你不必须来。 → ✓ 你不用来。 / 你不必来。\n✗ 我得（dé）去医院。 → quand il signifie « devoir », 得 se lit **děi**.",
      "✗ 你不必须来。 → ✓ 你不用来。 / 你不必来。\n✗ Reading 得 as dé: when it means \"must\", 得 is read **děi**."
    ),
    category: "能愿动词 / modal verbs",
  },
  {
    id: "hsk3-g16",
    level: 3,
    title: t("Un peu : 稍微 + Adj/Verbe + 一点儿", "A little bit: 稍微 + Adj/Verb + 一点儿"),
    pattern: "稍微 + Adj / Verbe + 一点儿 / 一些 / 一下",
    explanation: t(
      "**稍微** (shāowēi) signifie « un peu, légèrement ». Il ne s'utilise presque jamais seul : on ajoute après l'adjectif ou le verbe **一点儿**, **一些** ou **一下**.\n\n- 稍微 + Adj + 一点儿 : 稍微贵一点儿 (un peu plus cher).\n- 稍微 + V + 一下 : 请稍微等一下 (attends un petit instant).\n\nC'est une façon **polie** d'adoucir une demande ou une critique.",
      "**稍微** (shāowēi) means \"slightly, a bit\". It almost never stands alone: after the adjective or verb, add **一点儿**, **一些** or **一下**.\n\n- 稍微 + Adj + 一点儿: 稍微贵一点儿 (a bit more expensive).\n- 稍微 + V + 一下: 请稍微等一下 (please wait a moment).\n\nIt's a **polite** way to soften a request or a criticism."
    ),
    examples: [
      ex("你应该稍微少吃一点儿甜的。", "Nǐ yīnggāi shāowēi shǎo chī yìdiǎnr tián de.", "Tu devrais manger un peu moins sucré.", "You should eat slightly less sweet stuff."),
      ex("请稍微等一下，医生马上来。", "Qǐng shāowēi děng yíxià, yīshēng mǎshàng lái.", "Patientez un petit instant, le médecin arrive.", "Please wait a moment, the doctor is coming right away."),
      ex("今天我觉得稍微好一些了。", "Jīntiān wǒ juéde shāowēi hǎo yìxiē le.", "Aujourd'hui je me sens un peu mieux.", "Today I feel a little better."),
    ],
    pitfalls: t(
      "✗ 这件衣服稍微贵。 → ajoute 一点儿. ✓ 这件衣服稍微贵一点儿。\n✗ 稍微很累 → pas d'autre adverbe de degré.",
      "✗ 这件衣服稍微贵。 → add 一点儿. ✓ 这件衣服稍微贵一点儿。\n✗ 稍微很累 → no other degree adverb."
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g17",
    level: 3,
    title: t("Dans le but de : 为了", "In order to: 为了"),
    pattern: "为了 + but，Sujet + Verbe… ｜ Sujet + 是为了 + but",
    explanation: t(
      "**为了** (wèile) introduit le **but** d'une action : « pour, afin de ». Le groupe 为了 + but se met en **tête de phrase** : 为了保护环境，我们应该少开车。\n\nOn peut aussi expliquer le but **après coup** avec **是为了** : 我学中文，是为了去中国工作。\n\nDistingue bien **为了** (but, « pour ») et **因为** (cause, « parce que ») : 为了健康 = pour être en bonne santé ; 因为健康 = parce qu'on est en bonne santé.",
      "**为了** (wèile) introduces the **purpose** of an action: \"in order to, for the sake of\". The 为了 + purpose phrase usually goes **at the start**: 为了保护环境，我们应该少开车。\n\nYou can also explain the purpose **afterwards** with **是为了**: 我学中文，是为了去中国工作。\n\nKeep **为了** (purpose, \"in order to\") apart from **因为** (cause, \"because\"): 为了健康 = to be healthy; 因为健康 = because one is healthy."
    ),
    examples: [
      ex("为了保护环境，我每天骑自行车上班。", "Wèile bǎohù huánjìng, wǒ měi tiān qí zìxíngchē shàngbān.", "Pour protéger l'environnement, je vais au travail à vélo tous les jours.", "To protect the environment, I cycle to work every day."),
      ex("为了节约用水，请随手关水。", "Wèile jiéyuē yòng shuǐ, qǐng suíshǒu guān shuǐ.", "Pour économiser l'eau, pense à fermer le robinet.", "To save water, please turn off the tap after use."),
      ex("我们种树是为了让空气更好。", "Wǒmen zhòng shù shì wèile ràng kōngqì gèng hǎo.", "Nous plantons des arbres pour améliorer l'air.", "We plant trees to make the air better."),
    ],
    pitfalls: t(
      "✗ 我为了下雨没去。 → la cause s'exprime avec 因为. ✓ 因为下雨，我没去。\n✗ 我去中国为了学中文。 → dans cet ordre, il faut 是. ✓ 我去中国是为了学中文。",
      "✗ 我为了下雨没去。 → causes use 因为. ✓ 因为下雨，我没去。\n✗ 我去中国为了学中文。 → in this order you need 是. ✓ 我去中国是为了学中文。"
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g18",
    level: 3,
    title: t("Cause et conséquence (écrit) : 由于……因此", "Cause and effect (formal): 由于……因此"),
    pattern: "由于 + cause，(所以 / 因此) + conséquence",
    explanation: t(
      "**由于** (yóuyú) = « en raison de, du fait que » ; **因此** (yīncǐ) = « c'est pourquoi, par conséquent ». C'est la version **plus écrite / formelle** de 因为……所以, très fréquente dans les **informations** et les textes.\n\nOn peut combiner 由于 avec 所以 ou 因此, mais **pas** 因为 avec 因此 dans un style soigné.\n\n由于 peut aussi être suivi d'un simple nom : 由于天气原因，航班取消了 (en raison de la météo, le vol a été annulé).",
      "**由于** (yóuyú) = \"due to, owing to\"; **因此** (yīncǐ) = \"therefore, as a result\". This is the **more written / formal** version of 因为……所以, very common in **news** and texts.\n\n由于 can pair with 所以 or 因此, but in careful style avoid 因为 + 因此.\n\n由于 can also take just a noun: 由于天气原因，航班取消了 (due to the weather, the flight was cancelled)."
    ),
    examples: [
      ex("由于空气污染严重，很多人戴上了口罩。", "Yóuyú kōngqì wūrǎn yánzhòng, hěn duō rén dàishang le kǒuzhào.", "En raison d'une forte pollution de l'air, beaucoup de gens ont mis un masque.", "Due to severe air pollution, many people put on face masks."),
      ex("这条河以前很脏，因此政府决定保护它。", "Zhè tiáo hé yǐqián hěn zāng, yīncǐ zhèngfǔ juédìng bǎohù tā.", "Cette rivière était très sale, c'est pourquoi le gouvernement a décidé de la protéger.", "This river used to be dirty, so the government decided to protect it."),
      ex("由于大家的努力，城市变得更干净了。", "Yóuyú dàjiā de nǔlì, chéngshì biàn de gèng gānjìng le.", "Grâce aux efforts de tous, la ville est devenue plus propre.", "Thanks to everyone's efforts, the city has become cleaner."),
    ],
    pitfalls: t(
      "✗ 因此下雨，我没去。 → 因此 introduit la **conséquence**, pas la cause. ✓ 由于下雨，因此我没去。\n因此 se place en tête de la seconde proposition, pas à la fin.",
      "✗ 因此下雨，我没去。 → 因此 introduces the **result**, not the cause. ✓ 由于下雨，因此我没去。\n因此 opens the second clause; it never goes at the end."
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g19",
    level: 3,
    title: t("Même, jusqu'à : 甚至", "Even, to the point of: 甚至"),
    pattern: "…，甚至 + (Sujet) + élément extrême",
    explanation: t(
      "**甚至** (shènzhì) signifie « même, voire, jusqu'à ». Il introduit l'élément **le plus extrême** ou le plus surprenant d'une gradation : « beaucoup de gens…, même des enfants… ».\n\nIl se place devant un verbe, un groupe nominal ou une proposition. Il est souvent combiné avec **都 / 也** : 他甚至连饭都忘了吃 (il a même oublié de manger).\n\nIl complète bien 不但……而且 : 不但A，而且B，甚至C.",
      "**甚至** (shènzhì) means \"even, so much so that\". It introduces the **most extreme** or surprising item in a series: \"many people…, even children…\".\n\nIt goes before a verb, a noun phrase or a clause. It often combines with **都 / 也**: 他甚至连饭都忘了吃 (he even forgot to eat).\n\nIt fits nicely after 不但……而且: 不但A，而且B，甚至C."
    ),
    examples: [
      ex("这里的冬天很冷，甚至会到零下三十度。", "Zhèlǐ de dōngtiān hěn lěng, shènzhì huì dào língxià sānshí dù.", "Ici l'hiver est très froid, il peut même faire moins trente.", "Winters here are very cold — it can even hit minus thirty."),
      ex("很多人，甚至孩子，都知道垃圾分类。", "Hěn duō rén, shènzhì háizi, dōu zhīdào lājī fēnlèi.", "Beaucoup de gens, et même les enfants, connaissent le tri des déchets.", "Many people, even children, know how to sort their rubbish."),
      ex("他忙得甚至没时间喝水。", "Tā máng de shènzhì méi shíjiān hē shuǐ.", "Il est tellement occupé qu'il n'a même pas le temps de boire.", "He's so busy he doesn't even have time to drink water."),
    ],
    pitfalls: t(
      "✗ 甚至用在第一项 : 甚至 introduit le **dernier** élément, le plus fort, pas le premier.\n✗ 他甚至很累。 → il faut une gradation claire avant. ✓ 他很累，甚至站不起来了。",
      "✗ Putting 甚至 on the first item: it introduces the **last**, strongest item.\n✗ 他甚至很累。 → you need a clear build-up first. ✓ 他很累，甚至站不起来了。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g20",
    level: 3,
    title: t("Non seulement… mais aussi : 不但……而且", "Not only… but also: 不但……而且"),
    pattern: "(Sujet) 不但 + A，而且 (Sujet) (还/也) + B",
    explanation: t(
      "**不但……而且** (búdàn… érqiě) exprime une **gradation** : B va **plus loin** que A. On l'écrit aussi **不仅……而且/也** (plus soutenu).\n\nPosition de 不但 : **même sujet** → sujet + 不但… : 他不但会说中文，而且说得很好。 **Sujets différents** → 不但 + sujet 1… : 不但我喜欢，而且我朋友也喜欢。\n\nOn renforce souvent la deuxième partie avec **还** ou **也**.",
      "**不但……而且** (búdàn… érqiě) expresses **escalation**: B goes **further** than A. A more formal variant is **不仅……而且/也**.\n\nPosition of 不但: **same subject** → subject + 不但…: 他不但会说中文，而且说得很好。 **Different subjects** → 不但 + subject 1…: 不但我喜欢，而且我朋友也喜欢。\n\nThe second half is often reinforced with **还** or **也**."
    ),
    examples: [
      ex("骑自行车不但环保，而且对身体好。", "Qí zìxíngchē búdàn huánbǎo, érqiě duì shēntǐ hǎo.", "Le vélo, non seulement c'est écologique, mais en plus c'est bon pour la santé.", "Cycling is not only eco-friendly but also good for your health."),
      ex("这个城市不但空气好，而且交通也很方便。", "Zhège chéngshì búdàn kōngqì hǎo, érqiě jiāotōng yě hěn fāngbiàn.", "Dans cette ville, non seulement l'air est bon, mais les transports sont aussi pratiques.", "This city not only has clean air, but the transport is convenient too."),
      ex("不但学生要节约用电，而且老师也要节约。", "Búdàn xuésheng yào jiéyuē yòng diàn, érqiě lǎoshī yě yào jiéyuē.", "Il n'y a pas que les élèves qui doivent économiser l'électricité : les profs aussi.", "Not only students but teachers too should save electricity."),
    ],
    pitfalls: t(
      "✗ 他不但聪明，但是很努力。 → 但是 exprime une opposition, pas une gradation. ✓ ……而且很努力。\n✗ 不但他会唱歌，而且会跳舞。 → même sujet : 不但 après le sujet. ✓ 他不但会唱歌，而且会跳舞。",
      "✗ 他不但聪明，但是很努力。 → 但是 contrasts, it doesn't escalate. ✓ ……而且很努力。\n✗ 不但他会唱歌，而且会跳舞。 → same subject: 不但 after the subject. ✓ 他不但会唱歌，而且会跳舞。"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g21",
    level: 3,
    title: t("Fractions, pourcentages, multiples : 分之, 百分之, 倍", "Fractions, percentages, multiples: 分之, 百分之, 倍"),
    pattern: "B 分之 A ｜ 百分之 + N ｜ A 是 B 的 N 倍 ｜ 增加了 N 倍",
    explanation: t(
      "Le chinois dit les fractions **à l'envers** du français : d'abord le **dénominateur**, puis **分之**, puis le **numérateur**. 三分之一 = un tiers (littéralement « des trois parts, une »).\n\nLes **pourcentages** suivent la même logique : **百分之** + nombre. 百分之六十 = 60 %.\n\nLes **multiples** utilisent **倍** (bèi) : A 是 B 的两倍 (A est le double de B). 增加了一倍 = a doublé (a augmenté de 100 %).",
      "Chinese says fractions **backwards** compared to English: **denominator** first, then **分之**, then the **numerator**. 三分之一 = one third (literally \"of three parts, one\").\n\n**Percentages** follow the same logic: **百分之** + number. 百分之六十 = 60%.\n\n**Multiples** use **倍** (bèi): A 是 B 的两倍 (A is twice B). 增加了一倍 = has doubled (increased by 100%)."
    ),
    examples: [
      ex("地球上三分之二是水。", "Dìqiú shang sān fēn zhī èr shì shuǐ.", "Les deux tiers de la Terre sont de l'eau.", "Two thirds of the Earth is water."),
      ex("百分之八十的人支持垃圾分类。", "Bǎi fēn zhī bāshí de rén zhīchí lājī fēnlèi.", "80 % des gens sont favorables au tri des déchets.", "80% of people support rubbish sorting."),
      ex("这个城市的汽车比十年前多了两倍。", "Zhège chéngshì de qìchē bǐ shí nián qián duō le liǎng bèi.", "Il y a trois fois plus de voitures dans cette ville qu'il y a dix ans.", "This city has three times as many cars as ten years ago."),
      ex("今年的用电量是去年的一半。", "Jīnnián de yòngdiànliàng shì qùnián de yíbàn.", "Cette année on a consommé moitié moins d'électricité que l'an dernier.", "This year's electricity use is half of last year's."),
    ],
    pitfalls: t(
      "✗ 一分之三 pour « un tiers » → ✓ 三分之一。\n✗ 六十百分之 → ✓ 百分之六十。\nAttention : 多了两倍 = **trois fois plus** (on ajoute deux fois la quantité), alors que 是……的两倍 = deux fois plus.",
      "✗ 一分之三 for \"one third\" → ✓ 三分之一。\n✗ 六十百分之 → ✓ 百分之六十。\nCareful: 多了两倍 = **three times as many** (two times more added), while 是……的两倍 = twice as many."
    ),
    category: "数词 / numerals",
  },
  {
    id: "hsk3-g22",
    level: 3,
    title: t("Complément de possibilité (1) : V + 得/不 + résultat", "Potential complement (1): V + 得/不 + result"),
    pattern: "Verbe + 得 / 不 + complément de résultat ou de direction",
    explanation: t(
      "Le **complément de possibilité** dit si on **peut** ou **ne peut pas** atteindre un résultat. On insère **得** (possible) ou **不** (impossible) entre le verbe et son complément :\n- 听懂 (comprendre à l'écoute) → 听**得**懂 / 听**不**懂\n- 看清楚 → 看得清楚 / 看不清楚\n- 回来 → 回得来 / 回不来\n\nC'est souvent plus naturel que 能/不能 : ✓ 我听不懂 est bien plus idiomatique que ✗ 我不能听懂. Le 不 se prononce au **ton neutre** : kàn bu dǒng.\n\nQuestion : 你听得懂吗？ / 你听得懂听不懂？",
      "The **potential complement** says whether you **can** or **can't** achieve a result. Insert **得** (possible) or **不** (impossible) between the verb and its complement:\n- 听懂 (understand by listening) → 听**得**懂 / 听**不**懂\n- 看清楚 → 看得清楚 / 看不清楚\n- 回来 → 回得来 / 回不来\n\nIt's often more natural than 能/不能: ✓ 我听不懂 is far more idiomatic than ✗ 我不能听懂. The 不 is **neutral tone**: kàn bu dǒng.\n\nQuestions: 你听得懂吗？ / 你听得懂听不懂？"
    ),
    examples: [
      ex("屏幕太小了，我看不清楚。", "Píngmù tài xiǎo le, wǒ kàn bu qīngchu.", "L'écran est trop petit, je n'arrive pas à bien voir.", "The screen is too small, I can't see clearly."),
      ex("没有网，我的邮件发不出去。", "Méiyǒu wǎng, wǒ de yóujiàn fā bu chūqù.", "Sans réseau, mes e-mails ne partent pas.", "Without internet, my emails won't send."),
      ex("你说得太快了，我听不懂。", "Nǐ shuō de tài kuài le, wǒ tīng bu dǒng.", "Tu parles trop vite, je ne comprends pas.", "You're speaking too fast, I can't understand."),
      ex("这个密码你记得住吗？", "Zhège mìmǎ nǐ jì de zhù ma?", "Tu arrives à retenir ce mot de passe ?", "Can you remember this password?"),
    ],
    pitfalls: t(
      "✗ 我不能听懂。 → ✓ 我听不懂。\n✗ 我听不懂了你的话。 → pas de 了 dans le complément de possibilité. ✓ 我听不懂你的话。\n✗ 把 + complément de possibilité : ✗ 我把作业做不完 → ✓ 我做不完作业。",
      "✗ 我不能听懂。 → ✓ 我听不懂。\n✗ 我听不懂了你的话。 → no 了 with potential complements. ✓ 我听不懂你的话。\n✗ 把 + potential complement: ✗ 我把作业做不完 → ✓ 我做不完作业。"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g23",
    level: 3,
    title: t("Complément de possibilité (2) : 了 (liǎo), 动, 下", "Potential complement (2): 了 (liǎo), 动, 下"),
    pattern: "V + 得/不 + 了 (liǎo) ｜ V + 得/不 + 动 ｜ V + 得/不 + 下",
    explanation: t(
      "Trois compléments de possibilité très fréquents :\n- **V得了 / V不了** (**liǎo**) : peut-on **finir / venir à bout** de quelque chose, ou est-ce possible tout court ? 这么多菜，我吃不了 (je ne peux pas manger autant). 明天我去不了 (je ne pourrai pas y aller demain).\n- **V得动 / V不动** : a-t-on la **force physique** pour bouger quelque chose ou soi-même ? 我走不动了 (je n'arrive plus à marcher). 这个箱子你拿得动吗？\n- **V得下 / V不下** : y a-t-il assez de **place / capacité** ? 这个手机存不下这么多照片 (ce téléphone ne peut pas stocker autant de photos). 我吃不下了 (je n'ai plus de place).\n\nIci 了 se lit **liǎo**, pas le.",
      "Three very common potential complements:\n- **V得了 / V不了** (**liǎo**): can you **manage / finish** it, or is it possible at all? 这么多菜，我吃不了 (I can't eat this much). 明天我去不了 (I can't make it tomorrow).\n- **V得动 / V不动**: do you have the **physical strength** to move something or yourself? 我走不动了 (I can't walk any more). 这个箱子你拿得动吗？\n- **V得下 / V不下**: is there enough **room / capacity**? 这个手机存不下这么多照片 (this phone can't store that many photos). 我吃不下了 (I can't eat another bite).\n\nHere 了 is read **liǎo**, not le."
    ),
    examples: [
      ex("手机没电了，今天用不了了。", "Shǒujī méi diàn le, jīntiān yòng bu liǎo le.", "Mon téléphone n'a plus de batterie, je ne pourrai plus m'en servir aujourd'hui.", "My phone's dead, I can't use it any more today."),
      ex("电脑太重了，我拿不动。", "Diànnǎo tài zhòng le, wǒ ná bu dòng.", "L'ordinateur est trop lourd, je n'arrive pas à le porter.", "The computer is too heavy for me to carry."),
      ex("我的手机太旧，装不下新软件了。", "Wǒ de shǒujī tài jiù, zhuāng bu xià xīn ruǎnjiàn le.", "Mon téléphone est trop vieux, il n'a plus de place pour une nouvelle appli.", "My phone is too old, there's no room for new apps."),
      ex("这个问题你解决得了吗？", "Zhège wèntí nǐ jiějué de liǎo ma?", "Tu arrives à régler ce problème ?", "Can you handle this problem?"),
    ],
    pitfalls: t(
      "✗ 吃不了 lu « chī bu le » → ✓ chī bu liǎo.\n✗ 我不走动了。 → ✓ 我走不动了。\nNe confonds pas 吃不了 (trop de nourriture, on ne peut pas tout manger) et 吃不下 (on n'a plus de place dans l'estomac) : très proches, mais 吃不下 insiste sur la capacité.",
      "✗ Reading 吃不了 as \"chī bu le\" → ✓ chī bu liǎo.\n✗ 我不走动了。 → ✓ 我走不动了。\n吃不了 (too much food to finish) and 吃不下 (no room left in your stomach) are close, but 吃不下 stresses capacity."
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g24",
    level: 3,
    title: t("起来 au sens figuré : commencer, sembler, se souvenir", "Figurative 起来: starting, seeming, recalling"),
    pattern: "V/Adj + 起来 ｜ V + 起来 + 很… ｜ 想起来",
    explanation: t(
      "Au-delà de « se lever » (站起来), **起来** a trois emplois figurés essentiels :\n1. **Début** d'une action ou d'un état qui se prolonge : 他笑起来了 (il s'est mis à rire), 天气热起来了 (il commence à faire chaud).\n2. **Impression / évaluation** : V + 起来 + adj = « à l'usage, ça semble… » : 这个手机用起来很方便 (ce téléphone est pratique à l'usage). 看起来 = avoir l'air.\n3. **Souvenir / rassemblement** : 想起来 (se rappeler), 收起来 (ranger).\n\nAvec un objet, celui-ci se place **entre 起 et 来** : 他唱起歌来了。",
      "Beyond \"stand up\" (站起来), **起来** has three key figurative uses:\n1. **Start** of an action or state that continues: 他笑起来了 (he burst out laughing), 天气热起来了 (it's getting hot).\n2. **Impression / evaluation**: V + 起来 + adj = \"when you do it, it seems…\": 这个手机用起来很方便 (this phone is handy to use). 看起来 = to look (like).\n3. **Recalling / gathering**: 想起来 (remember), 收起来 (put away).\n\nWith an object, it goes **between 起 and 来**: 他唱起歌来了。"
    ),
    examples: [
      ex("这个软件用起来很简单。", "Zhège ruǎnjiàn yòng qilai hěn jiǎndān.", "Cette appli est très simple à utiliser.", "This app is very easy to use."),
      ex("我想起来了，密码是我的生日！", "Wǒ xiǎng qilai le, mìmǎ shì wǒ de shēngrì!", "Ça me revient : le mot de passe, c'est ma date d'anniversaire !", "I remember now — the password is my birthday!"),
      ex("听到这个消息，大家都笑起来了。", "Tīngdào zhège xiāoxi, dàjiā dōu xiào qilai le.", "En apprenant la nouvelle, tout le monde s'est mis à rire.", "When they heard the news, everyone burst out laughing."),
      ex("你看起来有点儿累。", "Nǐ kàn qilai yǒudiǎnr lèi.", "Tu as l'air un peu fatigué.", "You look a bit tired."),
    ],
    pitfalls: t(
      "✗ 他唱起来歌了。 → l'objet se place entre 起 et 来. ✓ 他唱起歌来了。\n✗ 想起来 vs 想出来 : 想起来 = retrouver un souvenir ; 想出来 = trouver une idée nouvelle.",
      "✗ 他唱起来歌了。 → the object goes between 起 and 来. ✓ 他唱起歌来了。\n想起来 vs 想出来: 想起来 = recall something you knew; 想出来 = come up with a new idea."
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g25",
    level: 3,
    title: t("Depuis que : 自从……(以来/以后)", "Ever since: 自从……(以来/以后)"),
    pattern: "自从 + moment / événement + (以来 / 以后)，…",
    explanation: t(
      "**自从** (zìcóng) = « depuis (que) ». Il marque le **point de départ dans le passé** d'une situation qui dure jusqu'à maintenant (ou qui a changé depuis).\n\nOn ajoute souvent **以后** ou **以来** à la fin du groupe : 自从有了手机以后…, 自从去年以来…\n\nDifférence avec **从** : 从 peut indiquer un départ dans le passé **ou le futur** (从明天开始), alors que 自从 ne s'utilise que pour le **passé**.",
      "**自从** (zìcóng) = \"ever since\". It marks the **starting point in the past** of a situation that lasts until now (or has changed since).\n\nYou often add **以后** or **以来** at the end of the phrase: 自从有了手机以后…, 自从去年以来…\n\nDifference from **从**: 从 can mark a start in the past **or future** (从明天开始), while 自从 is only for the **past**."
    ),
    examples: [
      ex("自从有了智能手机，我很少看报纸了。", "Zìcóng yǒu le zhìnéng shǒujī, wǒ hěn shǎo kàn bàozhǐ le.", "Depuis que j'ai un smartphone, je ne lis presque plus le journal.", "Ever since I got a smartphone, I hardly read newspapers."),
      ex("自从他搬走以后，我们就没见过面。", "Zìcóng tā bānzǒu yǐhòu, wǒmen jiù méi jiàn guo miàn.", "Depuis qu'il a déménagé, on ne s'est plus vus.", "We haven't seen each other since he moved away."),
      ex("自从去年以来，网上买东西的人越来越多。", "Zìcóng qùnián yǐlái, wǎng shang mǎi dōngxi de rén yuè lái yuè duō.", "Depuis l'an dernier, de plus en plus de gens achètent en ligne.", "Since last year, more and more people have been shopping online."),
    ],
    pitfalls: t(
      "✗ 自从明天开始 → 自从 = passé uniquement. ✓ 从明天开始。\n✗ 我学中文自从去年。 → le groupe se place en début de phrase. ✓ 自从去年，我开始学中文。",
      "✗ 自从明天开始 → 自从 is for the past only. ✓ 从明天开始。\n✗ 我学中文自从去年。 → the phrase goes first. ✓ 自从去年，我开始学中文。"
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g26",
    level: 3,
    title: t("Même… : 连……都 / 也", "Even…: 连……都 / 也"),
    pattern: "(Sujet) + 连 + élément extrême + 都 / 也 + Verbe",
    explanation: t(
      "**连……都/也** sert à **insister** sur un cas extrême pour montrer à quel point une situation est vraie : « même X… ».\n\nOn met l'élément surprenant entre **连** et **都/也**. Cet élément peut être le sujet, l'objet, ou même un verbe : 他连饭都没吃 (il n'a même pas mangé), 连孩子都知道 (même les enfants le savent).\n\nTrès fréquent à la forme négative avec « un(e) seul(e) » : 连一个字都不认识 (ne pas connaître un seul caractère).",
      "**连……都/也** **emphasises** an extreme case to show how true something is: \"even X…\".\n\nPut the surprising element between **连** and **都/也**. It can be the subject, the object, or even a verb: 他连饭都没吃 (he didn't even eat), 连孩子都知道 (even kids know).\n\nVery common in the negative with \"a single\": 连一个字都不认识 (not know a single character)."
    ),
    examples: [
      ex("我奶奶连微信都会用。", "Wǒ nǎinai lián Wēixìn dōu huì yòng.", "Même ma grand-mère sait utiliser WeChat.", "Even my grandma can use WeChat."),
      ex("他忙得连电话都没时间打。", "Tā máng de lián diànhuà dōu méi shíjiān dǎ.", "Il est tellement débordé qu'il n'a même pas le temps de téléphoner.", "He's so busy he doesn't even have time to make a call."),
      ex("这个问题连老师也不知道。", "Zhège wèntí lián lǎoshī yě bù zhīdào.", "Même le prof ne connaît pas la réponse à cette question.", "Even the teacher doesn't know the answer to this question."),
      ex("我手机里连一张照片也没有了。", "Wǒ shǒujī lǐ lián yì zhāng zhàopiàn yě méiyǒu le.", "Il ne reste plus une seule photo dans mon téléphone.", "There isn't a single photo left on my phone."),
    ],
    pitfalls: t(
      "✗ 连他知道。 → il manque 都/也. ✓ 连他都知道。\n✗ 他连都没吃饭。 → l'élément se place entre 连 et 都. ✓ 他连饭都没吃。",
      "✗ 连他知道。 → 都/也 is missing. ✓ 连他都知道。\n✗ 他连都没吃饭。 → the element goes between 连 and 都. ✓ 他连饭都没吃。"
    ),
    category: "强调 / emphasis",
  },
];
