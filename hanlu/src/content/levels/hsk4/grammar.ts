import type { GrammarPoint } from "../../types";
import { ex, t } from "./_h";

const C = {
  complex: "复句 / complex sentences",
  conj: "连词 / conjunctions",
  adv: "副词 / adverbs",
  prep: "介词 / prepositions",
  pron: "代词 / pronouns",
  fixed: "固定格式 / set structures",
  special: "特殊句型 / special sentence patterns",
  comp: "补语 / complements",
  num: "数量表达 / numbers & quantities",
};

export const grammar: GrammarPoint[] = [
  {
    id: "hsk4-g01",
    level: 4,
    category: C.complex,
    title: t("不但不…反而… : non seulement pas… au contraire", "不但不…反而…: not only not… but on the contrary"),
    pattern: "A 不但不/没 + V1，反而 + V2",
    explanation: t(
      "Cette structure exprime un **résultat contraire à l'attente** : on s'attendait à X, non seulement X ne se produit pas, mais c'est même l'inverse qui arrive.\n\n**不但不 / 不但没** nie l'attente, **反而** (« au contraire ») introduit la surprise. C'est plus fort que 但是 : en français, on dirait « loin de…, il… au contraire ».\n\nSi les deux propositions ont le même sujet, il se place **avant** 不但. 反而 est un adverbe : il se place toujours **après** le sujet de la seconde proposition, jamais en tête de phrase.",
      "This pattern expresses a **result contrary to expectation**: you expected X, and not only does X not happen, the opposite happens.\n\n**不但不 / 不但没** denies the expectation, and **反而** (\"on the contrary\") introduces the surprise. It is stronger than 但是 — close to English \"far from…, it actually…\".\n\nWith one subject, put it **before** 不但. 反而 is an adverb: it goes **after** the subject of the second clause, never at the very start of the sentence.",
    ),
    examples: [
      ex("吃了药以后，他的病不但没好，反而更严重了。", "Chī le yào yǐhòu, tā de bìng búdàn méi hǎo, fǎn'ér gèng yánzhòng le.", "Après avoir pris le médicament, loin d'aller mieux, il est encore plus malade.", "After taking the medicine, instead of getting better, he got even worse."),
      ex("我帮了他，他不但不感谢我，反而怪我。", "Wǒ bāng le tā, tā búdàn bù gǎnxiè wǒ, fǎn'ér guài wǒ.", "Je l'ai aidé ; au lieu de me remercier, il me le reproche.", "I helped him, and instead of thanking me, he blamed me."),
      ex("雨不但没停，反而越下越大。", "Yǔ búdàn méi tíng, fǎn'ér yuè xià yuè dà.", "La pluie, loin de s'arrêter, tombe de plus en plus fort.", "Far from stopping, the rain got heavier and heavier."),
    ],
    pitfalls: t(
      "✗ 他不但不累，而且很累。— 不但不… se combine avec **反而**, pas avec 而且 (qui ajoute dans le même sens).\n✗ 反而他更生气了。→ ✓ 他反而更生气了。(反而 après le sujet)\n✗ 不但反而 sans négation : la première partie doit contenir **不/没**.",
      "✗ 他不但不累，而且很累。— 不但不… pairs with **反而**, not 而且 (which adds in the same direction).\n✗ 反而他更生气了。→ ✓ 他反而更生气了。(反而 after the subject)\n✗ Leaving out the negation: the first clause must contain **不/没**.",
    ),
  },
  {
    id: "hsk4-g02",
    level: 4,
    category: C.complex,
    title: t("即使…也… : même si…", "即使…也…: even if…"),
    pattern: "即使 + hypothèse/hypothesis，(S) 也 + résultat/result",
    explanation: t(
      "**即使…也…** exprime une **concession hypothétique** : « même si (cela arrivait), le résultat ne changerait pas ». La première partie est souvent imaginaire ou extrême.\n\n**也** est obligatoire dans la seconde proposition et se place après le sujet. À l'oral, on entend aussi **就算…也…** ; à l'écrit, **即便…也…** (plus soutenu).\n\nDifférence avec 虽然 : 虽然 présente un **fait réel** (« bien que »), 即使 une **hypothèse** (« même si »).",
      "**即使…也…** expresses a **hypothetical concession**: \"even if (that happened), the result would stay the same\". The first clause is often imaginary or extreme.\n\n**也** is required in the second clause, after its subject. In speech you also hear **就算…也…**; in writing, **即便…也…** (more formal).\n\nVersus 虽然: 虽然 states a **real fact** (\"although\"), 即使 a **hypothesis** (\"even if\").",
    ),
    examples: [
      ex("即使明天下雨，我们也要去。", "Jíshǐ míngtiān xià yǔ, wǒmen yě yào qù.", "Même s'il pleut demain, on ira.", "Even if it rains tomorrow, we'll still go."),
      ex("即使工作再忙，他也每天锻炼半个小时。", "Jíshǐ gōngzuò zài máng, tā yě měi tiān duànliàn bàn ge xiǎoshí.", "Même quand il est débordé, il fait une demi-heure de sport par jour.", "However busy work gets, he exercises for half an hour every day."),
      ex("即使你不说，我也知道。", "Jíshǐ nǐ bù shuō, wǒ yě zhīdào.", "Même si tu ne dis rien, je le sais.", "Even if you don't say it, I know."),
    ],
    pitfalls: t(
      "✗ 即使明天下雨，我们还是去。— Avec 即使, le partenaire naturel est **也**.\n✗ 即使他是我哥哥（fait réel）→ pour un fait réel, préfère ✓ 虽然他是我哥哥，但是…\n✗ 也 avant le sujet : ✗ 也我知道 → ✓ 我也知道。",
      "✗ 即使明天下雨，我们还是去。— The natural partner of 即使 is **也**.\n✗ Using 即使 for a real fact → ✓ 虽然他是我哥哥，但是…\n✗ 也 before the subject: ✗ 也我知道 → ✓ 我也知道。",
    ),
  },
  {
    id: "hsk4-g03",
    level: 4,
    category: C.complex,
    title: t("无论/不管…都… : quel que soit…", "无论/不管…都…: no matter…"),
    pattern: "无论/不管 + question (谁/什么/多… / A还是B / A不A)，S 都/也 + V",
    explanation: t(
      "Cette structure dit que **le résultat ne change pas, quelles que soient les conditions**. En français : « peu importe… », « quel que soit… ».\n\nPoint clé : ce qui suit 无论/不管 doit contenir une **idée de choix ouvert** : un mot interrogatif (谁、什么、怎么、多…), une alternative (A **还是** B) ou une forme A不A. On ne met jamais une simple affirmation.\n\n**无论** est plus soutenu (écrit), **不管** plus oral. **都** (ou 也) est obligatoire dans la seconde proposition.",
      "This pattern says **the result stays the same whatever the conditions**: \"no matter…\", \"whatever…\".\n\nKey point: what follows 无论/不管 must contain an **open choice**: a question word (谁、什么、怎么、多…), an alternative (A **还是** B) or an A-not-A form. Never a plain statement.\n\n**无论** is more formal (written), **不管** more colloquial. **都** (or 也) is required in the second clause.",
    ),
    examples: [
      ex("无论遇到什么困难，我们都不会放弃。", "Wúlùn yùdào shénme kùnnan, wǒmen dōu bú huì fàngqì.", "Quelles que soient les difficultés, nous n'abandonnerons pas.", "Whatever difficulties we meet, we won't give up."),
      ex("不管你去还是不去，都要告诉我一声。", "Bùguǎn nǐ qù háishi bú qù, dōu yào gàosu wǒ yì shēng.", "Que tu y ailles ou non, préviens-moi.", "Whether you go or not, let me know."),
      ex("无论多晚，妈妈都会等我回家。", "Wúlùn duō wǎn, māma dōu huì děng wǒ huí jiā.", "Peu importe l'heure, maman attend que je rentre.", "No matter how late it is, Mum waits for me to come home."),
      ex("不管天气好不好，他都去跑步。", "Bùguǎn tiānqì hǎo bu hǎo, tā dōu qù pǎobù.", "Qu'il fasse beau ou non, il va courir.", "Whether the weather is good or not, he goes running."),
    ],
    pitfalls: t(
      "✗ 不管天气很好，他都去跑步。— pas de choix ouvert ! → ✓ 不管天气好不好 / 不管天气怎么样。\n✗ 不管你去或者不去 → dans une alternative de ce type, on emploie **还是** : ✓ 不管你去还是不去。\n✗ Oublier 都 : ✗ 无论多晚，妈妈会等我 → ✓ 妈妈都会等我。",
      "✗ 不管天气很好，他都去跑步。— no open choice! → ✓ 不管天气好不好 / 不管天气怎么样。\n✗ 不管你去或者不去 → in this alternative use **还是**: ✓ 不管你去还是不去。\n✗ Dropping 都: ✗ 无论多晚，妈妈会等我 → ✓ 妈妈都会等我。",
    ),
  },
  {
    id: "hsk4-g04",
    level: 4,
    category: C.complex,
    title: t("除非…才/否则… : à moins que / seulement si", "除非…才/否则…: unless / only if"),
    pattern: "除非 + condition，S 才 + V  |  除非 + condition，否则 + conséquence",
    explanation: t(
      "**除非** pose une **condition unique et indispensable**. Deux constructions, de sens proche :\n\n1. **除非 A，才 B** : « B seulement si A » (≈ 只有 A 才 B).\n2. **除非 A，否则 B** : « à moins que A, B » — B est ce qui arrive **si A n'a pas lieu**.\n\nAttention au piège logique : dans la version 否则, la seconde partie décrit la **mauvaise** conséquence. Le français « à moins que » fonctionne pareil : « Il ne viendra pas, à moins que tu l'invites. »",
      "**除非** sets a **single, indispensable condition**. Two constructions with close meaning:\n\n1. **除非 A，才 B**: \"B only if A\" (≈ 只有 A 才 B).\n2. **除非 A，否则 B**: \"unless A, B\" — B is what happens **if A does not**.\n\nMind the logic: with 否则, the second part describes the **bad** outcome, just like English \"unless you invite him, he won't come\".",
    ),
    examples: [
      ex("除非你亲自去请他，他才会来。", "Chúfēi nǐ qīnzì qù qǐng tā, tā cái huì lái.", "Il ne viendra que si tu vas l'inviter en personne.", "He'll only come if you invite him in person."),
      ex("除非老板同意，否则我们不能改计划。", "Chúfēi lǎobǎn tóngyì, fǒuzé wǒmen bù néng gǎi jìhuà.", "À moins que le patron soit d'accord, on ne peut pas changer le plan.", "Unless the boss agrees, we can't change the plan."),
      ex("除非有特别的事，否则他从来不请假。", "Chúfēi yǒu tèbié de shì, fǒuzé tā cónglái bù qǐngjià.", "Sauf imprévu particulier, il ne prend jamais de congé.", "Unless something special comes up, he never takes leave."),
    ],
    pitfalls: t(
      "✗ 除非你去请他，他就会来。— avec 除非, on emploie **才** (ou 否则), pas 就.\n✗ 除非老板同意，否则我们能改计划。— contresens : après 否则 vient ce qui se passe **sans** la condition → ✓ 否则我们不能改。",
      "✗ 除非你去请他，他就会来。— with 除非 use **才** (or 否则), not 就.\n✗ 除非老板同意，否则我们能改计划。— wrong logic: 否则 introduces what happens **without** the condition → ✓ 否则我们不能改。",
    ),
  },
  {
    id: "hsk4-g05",
    level: 4,
    category: C.complex,
    title: t("既然…就… : puisque…, alors…", "既然…就…: since…, then…"),
    pattern: "既然 + fait admis/accepted fact，(S) 就 + conclusion",
    explanation: t(
      "**既然** part d'un **fait déjà connu ou accepté** par les deux interlocuteurs et en tire une **conclusion**, souvent un conseil ou une décision. En français : « puisque… ».\n\nDifférence avec **因为** : 因为 donne une cause objective (« parce que »), 既然 s'appuie sur une situation admise pour dire **ce qu'il faut faire**. La seconde partie contient souvent 就, 那 (么), 还, ou une question rhétorique.",
      "**既然** starts from a **fact both speakers already know or accept** and draws a **conclusion**, often advice or a decision: \"since…\", \"now that…\".\n\nVersus **因为**: 因为 gives an objective cause, while 既然 builds on an accepted situation to say **what should be done**. The second clause often contains 就, 那 (么), 还, or a rhetorical question.",
    ),
    examples: [
      ex("既然你已经决定了，我就不多说了。", "Jìrán nǐ yǐjīng juédìng le, wǒ jiù bù duō shuō le.", "Puisque tu as déjà décidé, je n'en dis pas plus.", "Since you've already decided, I won't say any more."),
      ex("既然身体不舒服，就早点儿回家休息吧。", "Jìrán shēntǐ bù shūfu, jiù zǎo diǎnr huí jiā xiūxi ba.", "Puisque tu ne te sens pas bien, rentre te reposer plus tôt.", "Since you're not feeling well, go home early and rest."),
      ex("既然大家都同意，那就这么办。", "Jìrán dàjiā dōu tóngyì, nà jiù zhème bàn.", "Puisque tout le monde est d'accord, faisons comme ça.", "Since everyone agrees, let's do it this way."),
    ],
    pitfalls: t(
      "✗ 既然明天会下雨… (fait incertain) — 既然 exige un fait **déjà établi**. Pour une hypothèse, utilise 如果.\n✗ 既然…所以… → ✓ 既然…就…。So/所以 va avec 因为, pas avec 既然.",
      "✗ 既然明天会下雨… (uncertain) — 既然 needs an **established** fact. For a hypothesis use 如果.\n✗ 既然…所以… → ✓ 既然…就…。所以 pairs with 因为, not 既然.",
    ),
  },
  {
    id: "hsk4-g06",
    level: 4,
    category: C.complex,
    title: t("尽管…但是/却… : bien que…", "尽管…但是/却…: although…"),
    pattern: "尽管 + fait réel/real fact，但是/可是 + S (却/还是) + V",
    explanation: t(
      "**尽管** introduit une **concession réelle** : c'est vrai, et pourtant le résultat va dans l'autre sens. C'est un 虽然 un peu plus soutenu et plus insistant (« bien que », « malgré le fait que »).\n\nLa seconde proposition commence par **但是/可是/然而** et contient souvent **还是、仍然** ou **却**. **却** est un adverbe : il se place **après** le sujet, contrairement à 但是.\n\nComme 虽然, 尽管 porte sur un **fait**, pas sur une hypothèse (→ 即使).",
      "**尽管** introduces a **real concession**: it's true, and yet the outcome goes the other way. It's a slightly more formal, more emphatic 虽然 (\"although\", \"despite the fact that\").\n\nThe second clause starts with **但是/可是/然而** and often contains **还是、仍然** or **却**. **却** is an adverb: it goes **after** the subject, unlike 但是.\n\nLike 虽然, 尽管 is about a **fact**, not a hypothesis (→ 即使).",
    ),
    examples: [
      ex("尽管工资不高，但是他很喜欢这份工作。", "Jǐnguǎn gōngzī bù gāo, dànshì tā hěn xǐhuan zhè fèn gōngzuò.", "Bien que le salaire ne soit pas élevé, il aime beaucoup ce travail.", "Although the pay isn't high, he really likes the job."),
      ex("尽管医生多次提醒，他却还是天天抽烟。", "Jǐnguǎn yīshēng duō cì tíxǐng, tā què háishi tiāntiān chōu yān.", "Malgré les nombreux avertissements du médecin, il fume toujours tous les jours.", "Despite the doctor's repeated warnings, he still smokes every day."),
      ex("尽管很累，大家仍然坚持到了最后。", "Jǐnguǎn hěn lèi, dàjiā réngrán jiānchí dào le zuìhòu.", "Même épuisés, tous ont tenu jusqu'au bout.", "Although exhausted, everyone held on to the end."),
    ],
    pitfalls: t(
      "✗ 尽管很累，却大家坚持了。→ ✓ 大家却坚持了。(却 après le sujet)\n✗ 尽管明天下雨，我也去。— hypothèse → ✓ 即使明天下雨，我也去。",
      "✗ 尽管很累，却大家坚持了。→ ✓ 大家却坚持了。(却 after the subject)\n✗ 尽管明天下雨，我也去。— hypothesis → ✓ 即使明天下雨，我也去。",
    ),
  },
  {
    id: "hsk4-g07",
    level: 4,
    category: C.complex,
    title: t("由于…因此… : en raison de…, par conséquent", "由于…因此…: due to…, therefore"),
    pattern: "由于 + cause，因此/所以 + résultat  |  由于 + N，…",
    explanation: t(
      "**由于** (« en raison de », « du fait que ») est le 因为 du **registre écrit et formel** : rapports, articles, annonces. Il peut être suivi d'une proposition ou simplement d'un groupe nominal (由于天气原因…).\n\nOn l'associe volontiers à **因此** (« par conséquent ») ou 所以. **因此** peut aussi s'employer seul pour tirer une conclusion d'une phrase précédente.\n\nContrairement à 因为, 由于 ne se place **pas** dans la seconde proposition : ✗ …，是由于… est possible seulement avec 是 (« c'est dû à »).",
      "**由于** (\"due to\", \"owing to\") is the **written, formal** 因为: reports, articles, announcements. It can be followed by a clause or just a noun phrase (由于天气原因…).\n\nIt pairs naturally with **因此** (\"therefore\") or 所以. **因此** can also stand alone to draw a conclusion from a previous sentence.\n\nUnlike 因为, 由于 isn't used to add a reason after the main clause, except in the form …是由于… (\"is due to\").",
    ),
    examples: [
      ex("由于天气原因，航班推迟了两个小时。", "Yóuyú tiānqì yuányīn, hángbān tuīchí le liǎng ge xiǎoshí.", "En raison des conditions météo, le vol a été retardé de deux heures.", "Due to the weather, the flight was delayed by two hours."),
      ex("由于他平时很努力，因此考得非常好。", "Yóuyú tā píngshí hěn nǔlì, yīncǐ kǎo de fēicháng hǎo.", "Comme il travaille dur au quotidien, il a très bien réussi l'examen.", "Because he works hard day to day, he did very well in the exam."),
      ex("这种材料又轻又结实，因此很受欢迎。", "Zhè zhǒng cáiliào yòu qīng yòu jiēshi, yīncǐ hěn shòu huānyíng.", "Ce matériau est léger et solide ; c'est pourquoi il est très apprécié.", "This material is light and strong, which is why it's popular."),
    ],
    pitfalls: t(
      "✗ 因此 + 所以 ensemble : ✗ 因此所以 → un seul suffit.\n✗ À l'oral entre amis, 由于 sonne administratif : « 由于我饿了 » → ✓ 因为我饿了。",
      "✗ 因此 + 所以 together: ✗ 因此所以 → one is enough.\n✗ In casual speech 由于 sounds bureaucratic: \"由于我饿了\" → ✓ 因为我饿了。",
    ),
  },
  {
    id: "hsk4-g08",
    level: 4,
    category: C.conj,
    title: t("甚至 : et même, jusqu'à", "甚至: even, to the point of"),
    pattern: "A，甚至 (连) B 也/都…  |  S 甚至 + V",
    explanation: t(
      "**甚至** marque une **gradation vers l'extrême** : après un premier élément, on ajoute un cas encore plus surprenant. En français : « voire », « et même », « jusqu'à ».\n\nIl peut relier deux éléments (A，甚至 B) ou servir d'adverbe devant le verbe. On le combine souvent avec **连…也/都…** pour insister : 甚至连…都….",
      "**甚至** marks a **climb towards the extreme**: after a first item, you add an even more surprising case — \"even\", \"to the point of\".\n\nIt can link two elements (A，甚至 B) or work as an adverb before the verb. It often combines with **连…也/都…** for emphasis: 甚至连…都….",
    ),
    examples: [
      ex("这个问题很简单，小学生甚至都会回答。", "Zhège wèntí hěn jiǎndān, xiǎoxuéshēng shènzhì dōu huì huídá.", "Cette question est très simple, même un écolier saurait y répondre.", "This question is simple; even a primary schoolkid could answer it."),
      ex("他忙得没时间吃饭，甚至连觉都不睡。", "Tā máng de méi shíjiān chī fàn, shènzhì lián jiào dōu bú shuì.", "Il est si occupé qu'il n'a pas le temps de manger, ni même de dormir.", "He's so busy he has no time to eat, not even to sleep."),
      ex("很多人，甚至很多老人，都开始用手机付钱了。", "Hěn duō rén, shènzhì hěn duō lǎorén, dōu kāishǐ yòng shǒujī fù qián le.", "Beaucoup de gens, et même beaucoup de personnes âgées, paient désormais avec leur téléphone.", "Many people, even many elderly people, now pay with their phones."),
    ],
    pitfalls: t(
      "✗ 甚至 pour un élément **moins** fort : ✗ 他会说法语，甚至会说你好。— l'élément après 甚至 doit être le plus étonnant.\n✗ 甚至连他也不知道 : correct ; mais ✗ 甚至连他不知道 (il manque 也/都).",
      "✗ Using 甚至 for a **weaker** item: ✗ 他会说法语，甚至会说你好。— what follows 甚至 must be the most surprising.\n✗ 甚至连他不知道 — 连 needs 也/都: ✓ 甚至连他也不知道。",
    ),
  },
  {
    id: "hsk4-g09",
    level: 4,
    category: C.complex,
    title: t("一方面…另一方面… : d'un côté…, de l'autre…", "一方面…另一方面…: on the one hand…, on the other…"),
    pattern: "一方面 + A，另一方面 + B",
    explanation: t(
      "Structure **parallèle** pour présenter **deux aspects** d'une même situation : deux raisons, deux effets, ou deux points de vue. En français : « d'une part…, d'autre part… ».\n\nOn peut ajouter **也/还** dans la seconde partie. Très utile à l'oral comme à l'écrit pour structurer une argumentation, par exemple à l'épreuve d'expression de l'HSK.",
      "A **parallel** structure presenting **two aspects** of one situation: two reasons, two effects, or two viewpoints — \"on the one hand…, on the other hand…\".\n\nYou can add **也/还** in the second part. Very handy in speech and writing to structure an argument, e.g. in HSK writing tasks.",
    ),
    examples: [
      ex("一方面我想出国留学，另一方面又不想离开家人。", "Yì fāngmiàn wǒ xiǎng chū guó liúxué, lìng yì fāngmiàn yòu bù xiǎng líkāi jiārén.", "D'un côté je veux étudier à l'étranger, de l'autre je ne veux pas quitter ma famille.", "On the one hand I want to study abroad; on the other, I don't want to leave my family."),
      ex("运动一方面能减轻压力，另一方面也能提高睡眠质量。", "Yùndòng yì fāngmiàn néng jiǎnqīng yālì, lìng yì fāngmiàn yě néng tígāo shuìmián zhìliàng.", "Le sport réduit le stress d'une part, et améliore le sommeil d'autre part.", "Exercise reduces stress on the one hand and improves sleep quality on the other."),
      ex("他一方面要工作，另一方面还要照顾孩子。", "Tā yì fāngmiàn yào gōngzuò, lìng yì fāngmiàn hái yào zhàogù háizi.", "Il doit à la fois travailler et s'occuper des enfants.", "He has to work and look after the kids at the same time."),
    ],
    pitfalls: t(
      "✗ 一方面…一方面… est possible mais moins courant ; ✓ 一方面…另一方面… est la forme standard.\n✗ 另一方面他也 → la place du sujet est libre, mais ne supprime pas 另 : ✗ 一方面…，方面…",
      "✗ 一方面…一方面… exists but is less common; ✓ 一方面…另一方面… is standard.\n✗ Don't drop 另 or 一: ✗ 一方面…，方面…",
    ),
  },
  {
    id: "hsk4-g10",
    level: 4,
    category: C.conj,
    title: t("否则 / 要不然 : sinon", "否则 / 要不然: otherwise"),
    pattern: "Conseil/condition，否则/要不然 + conséquence négative",
    explanation: t(
      "**否则** (écrit/neutre) et **要不然 / 要不** (oral) signifient « **sinon** ». La première partie donne un conseil, un ordre ou une condition ; la seconde, ce qui arrivera **si on ne le fait pas**.\n\nIls s'utilisent en tête de la seconde proposition. On peut renforcer avec **就** ou **会** : 否则就会迟到。",
      "**否则** (written/neutral) and **要不然 / 要不** (spoken) mean \"**otherwise**, or else\". The first part gives advice, an order or a condition; the second, what will happen **if you don't**.\n\nThey open the second clause. Often reinforced with **就** or **会**: 否则就会迟到。",
    ),
    examples: [
      ex("快点儿走吧，否则就赶不上火车了。", "Kuài diǎnr zǒu ba, fǒuzé jiù gǎn bu shàng huǒchē le.", "Dépêchons-nous, sinon on va rater le train.", "Let's hurry, or we'll miss the train."),
      ex("你最好提前预约，要不然可能没有位子。", "Nǐ zuìhǎo tíqián yùyuē, yàobùrán kěnéng méiyǒu wèizi.", "Tu ferais mieux de réserver, sinon il n'y aura peut-être plus de place.", "You'd better book ahead, otherwise there may be no seats."),
      ex("文件必须今天交，否则会影响整个项目。", "Wénjiàn bìxū jīntiān jiāo, fǒuzé huì yǐngxiǎng zhěnggè xiàngmù.", "Le document doit être rendu aujourd'hui, sinon tout le projet en pâtira.", "The document must be handed in today, or it'll affect the whole project."),
    ],
    pitfalls: t(
      "✗ 否则 + conséquence positive : ✗ 你要努力，否则你会成功。→ ✓ 否则你会失败。\n✗ 要不然 dans un rapport écrit sonne familier → ✓ 否则。",
      "✗ 否则 + positive result: ✗ 你要努力，否则你会成功。→ ✓ 否则你会失败。\n✗ 要不然 in a written report sounds casual → ✓ 否则。",
    ),
  },
  {
    id: "hsk4-g11",
    level: 4,
    category: C.conj,
    title: t("于是 : alors, du coup (enchaînement)", "于是: so, thereupon"),
    pattern: "Événement 1，于是 + (S) + événement 2",
    explanation: t(
      "**于是** relie deux **actions passées** : la seconde est la **réaction naturelle** à la première. En français : « alors », « du coup », « c'est ainsi que ».\n\nIl se place en tête de la seconde proposition (avant le sujet) et sert surtout dans un **récit**. On ne l'utilise pas pour une conclusion logique générale (→ 所以) ni pour un ordre (→ 那就).",
      "**于是** links two **past actions**: the second is the **natural response** to the first — \"so\", \"thereupon\", \"and so\".\n\nIt opens the second clause (before the subject) and is mainly used in **narration**. It isn't used for general logical conclusions (→ 所以) or suggestions (→ 那就).",
    ),
    examples: [
      ex("他觉得这个工作没意思，于是辞职了。", "Tā juéde zhège gōngzuò méi yìsi, yúshì cízhí le.", "Il trouvait ce travail inintéressant, alors il a démissionné.", "He found the job boring, so he quit."),
      ex("视频在网上火了，于是很多人来这里旅游。", "Shìpín zài wǎng shang huǒ le, yúshì hěn duō rén lái zhèlǐ lǚyóu.", "La vidéo a fait le buzz, du coup beaucoup de gens sont venus visiter.", "The video went viral, and so lots of people came here as tourists."),
      ex("天黑了，于是我们决定回家。", "Tiān hēi le, yúshì wǒmen juédìng huí jiā.", "La nuit tombait, alors nous avons décidé de rentrer.", "It got dark, so we decided to head home."),
    ],
    pitfalls: t(
      "✗ 明天下雨，于是你带伞吧。— 于是 ne sert pas pour un conseil au futur → ✓ 所以你带伞吧 / 那你带伞吧。\n✗ 因为…于是… → ✓ 因为…所以… ; 于是 s'emploie seul.",
      "✗ 明天下雨，于是你带伞吧。— 于是 isn't for future advice → ✓ 所以你带伞吧 / 那你带伞吧。\n✗ 因为…于是… → ✓ 因为…所以…; 于是 stands alone.",
    ),
  },
  {
    id: "hsk4-g12",
    level: 4,
    category: C.conj,
    title: t("可见 : on voit bien que, cela montre que", "可见: this shows that"),
    pattern: "Faits/données。可见，+ conclusion",
    explanation: t(
      "**可见** (« on peut voir que ») tire une **conclusion à partir d'un fait ou d'une observation** qu'on vient de citer. En français : « c'est dire que », « preuve que ».\n\nIl se place en tête de la phrase de conclusion, souvent suivi d'une virgule. Plus fort encore et plus écrit : **由此可见** (« on voit par là que »).",
      "**可见** (\"it can be seen\") draws a **conclusion from a fact or observation** just mentioned — \"this shows that\", \"clearly\".\n\nIt opens the concluding sentence, often followed by a comma. Stronger and more written: **由此可见** (\"from this we can see\").",
    ),
    examples: [
      ex("他连周末都在实验室，可见他多么热爱科学。", "Tā lián zhōumò dōu zài shíyànshì, kějiàn tā duōme rè'ài kēxué.", "Il est au labo même le week-end : c'est dire s'il aime la science.", "He's in the lab even at weekends, which shows how much he loves science."),
      ex("这本书卖了一百万本，可见很受读者欢迎。", "Zhè běn shū mài le yìbǎi wàn běn, kějiàn hěn shòu dúzhě huānyíng.", "Ce livre s'est vendu à un million d'exemplaires : preuve qu'il plaît aux lecteurs.", "This book sold a million copies, which shows readers love it."),
      ex("大家都没听懂，可见他讲得不够清楚。", "Dàjiā dōu méi tīng dǒng, kějiàn tā jiǎng de bú gòu qīngchu.", "Personne n'a compris : c'est bien qu'il n'a pas été assez clair.", "Nobody understood, so clearly he didn't explain well enough."),
    ],
    pitfalls: t(
      "✗ Utiliser 可见 sans fait préalable : ✗ 可见明天会下雨。— il faut une preuve avant.\n✗ Confondre avec 看见 (voir avec les yeux) : 可见 = « on en déduit ».",
      "✗ Using 可见 with no prior evidence: ✗ 可见明天会下雨。— state the evidence first.\n✗ Confusing it with 看见 (to see with your eyes): 可见 = \"it follows that\".",
    ),
  },
  {
    id: "hsk4-g13",
    level: 4,
    category: C.conj,
    title: t("以及 / 并且 : et (registre soutenu)", "以及 / 并且: and (formal)"),
    pattern: "N1、N2 以及 N3  |  V1，并且 + V2",
    explanation: t(
      "Le chinois distingue le « et » qui relie des **noms** de celui qui relie des **verbes/propositions**.\n\n• **以及** relie des **groupes nominaux**, surtout en fin d'énumération et à l'écrit : 老师、学生以及家长。Il peut introduire un élément de moindre importance.\n• **并且** relie des **verbes ou propositions** : « et en plus », « et de surcroît ». Plus soutenu que 而且.\n\nRappel : **和** ne relie normalement **pas** deux propositions. ✗ 我吃饭和他看书。",
      "Chinese separates \"and\" between **nouns** from \"and\" between **verbs/clauses**.\n\n• **以及** links **noun phrases**, typically at the end of a list and in writing: 老师、学生以及家长. It may introduce a lesser item.\n• **并且** links **verbs or clauses**: \"and moreover\". More formal than 而且.\n\nReminder: **和** normally does **not** link two clauses. ✗ 我吃饭和他看书。",
    ),
    examples: [
      ex("会议讨论了工资、休假以及培训等问题。", "Huìyì tǎolùn le gōngzī, xiūjià yǐjí péixùn děng wèntí.", "La réunion a abordé les salaires, les congés ainsi que la formation.", "The meeting discussed pay, leave and training, among other issues."),
      ex("他通过了考试，并且拿到了奖学金。", "Tā tōngguò le kǎoshì, bìngqiě ná dào le jiǎngxuéjīn.", "Il a réussi l'examen et a en plus obtenu une bourse.", "He passed the exam and also got a scholarship."),
      ex("科学家发现并且证明了这个规律。", "Kēxuéjiā fāxiàn bìngqiě zhèngmíng le zhège guīlǜ.", "Les scientifiques ont découvert et démontré cette loi.", "Scientists discovered and proved this law."),
    ],
    pitfalls: t(
      "✗ 他很聪明以及很努力。→ ✓ 他很聪明，并且很努力。(以及 = noms)\n✗ 我去了超市和买了水果。→ ✓ 我去了超市，并且买了水果 / 还买了水果。",
      "✗ 他很聪明以及很努力。→ ✓ 他很聪明，并且很努力。(以及 = nouns)\n✗ 我去了超市和买了水果。→ ✓ 我去了超市，并且买了水果 / 还买了水果。",
    ),
  },
  {
    id: "hsk4-g14",
    level: 4,
    category: C.prep,
    title: t("对于 vs 关于 : quant à / au sujet de", "对于 vs 关于: regarding / about"),
    pattern: "对于 + N，S + 看法/态度…  |  关于 + 主题 + 的 + N",
    explanation: t(
      "Deux prépositions souvent confondues :\n\n• **关于** = « **au sujet de, concernant** » : il indique le **thème** d'un contenu. Il forme souvent un complément du nom : 关于环境的文章 (un article sur l'environnement).\n• **对于** = « **pour, vis-à-vis de, à l'égard de** » : il indique **l'objet d'une attitude ou d'un effet** : 对于这个问题，我有不同的看法。\n\nAstuce : si tu peux remplacer par 对 (vers, envers), c'est 对于 ; si c'est « le sujet traité », c'est 关于. Aussi : 关于 + groupe se place **en tête** de phrase, jamais après le sujet.",
      "Two prepositions learners mix up:\n\n• **关于** = \"**about, concerning**\": marks the **topic** of some content. Often a noun modifier: 关于环境的文章 (an article about the environment).\n• **对于** = \"**towards, as for, with regard to**\": marks the **target of an attitude or effect**: 对于这个问题，我有不同的看法。\n\nTip: if 对 (towards) would fit, it's 对于; if it's \"the topic being covered\", it's 关于. Also, a 关于 phrase goes **at the start** of a sentence, never after the subject.",
    ),
    examples: [
      ex("我看了一个关于中国历史的节目。", "Wǒ kàn le yí ge guānyú Zhōngguó lìshǐ de jiémù.", "J'ai regardé une émission sur l'histoire de la Chine.", "I watched a programme about Chinese history."),
      ex("对于年轻人来说，找工作越来越难了。", "Duìyú niánqīngrén lái shuō, zhǎo gōngzuò yuè lái yuè nán le.", "Pour les jeunes, trouver du travail devient de plus en plus difficile.", "For young people, finding a job is getting harder and harder."),
      ex("关于这件事，公司还没有决定。", "Guānyú zhè jiàn shì, gōngsī hái méiyǒu juédìng.", "Concernant cette affaire, l'entreprise n'a pas encore tranché.", "As for this matter, the company hasn't decided yet."),
      ex("对于网上的消息，我们要小心判断。", "Duìyú wǎng shang de xiāoxi, wǒmen yào xiǎoxīn pànduàn.", "Face aux infos en ligne, il faut juger avec prudence.", "With online news, we need to judge carefully."),
    ],
    pitfalls: t(
      "✗ 我们关于这个问题讨论了。→ ✓ 关于这个问题，我们讨论了 / 我们讨论了这个问题。\n✗ 对于环境的书 (« un livre sur l'environnement ») → ✓ 关于环境的书。",
      "✗ 我们关于这个问题讨论了。→ ✓ 关于这个问题，我们讨论了 / 我们讨论了这个问题。\n✗ 对于环境的书 (\"a book about the environment\") → ✓ 关于环境的书。",
    ),
  },
  {
    id: "hsk4-g15",
    level: 4,
    category: C.prep,
    title: t("按照 / 根据 : selon, conformément à", "按照 / 根据: according to"),
    pattern: "按照 + règle/plan + V  |  根据 + données/faits + V/判断",
    explanation: t(
      "Les deux se traduisent par « selon », mais :\n\n• **按照** = **suivre** une règle, un plan, une habitude (« conformément à », « comme prévu par ») : 按照规定、按照计划、按照习惯.\n• **根据** = **s'appuyer sur** une source ou des données pour conclure ou décider (« d'après », « sur la base de ») : 根据调查、根据天气预报. 根据 est aussi un **nom** (« fondement »).\n\nLes deux se placent en tête de phrase ou avant le verbe.",
      "Both translate as \"according to\", but:\n\n• **按照** = **follow** a rule, plan or custom (\"in accordance with\"): 按照规定、按照计划、按照习惯.\n• **根据** = **base yourself on** a source or data to conclude or decide (\"based on\"): 根据调查、根据天气预报. 根据 is also a **noun** (\"basis\").\n\nBoth go at the start of the sentence or before the verb.",
    ),
    examples: [
      ex("请按照顺序排队上车。", "Qǐng ànzhào shùnxù páiduì shàng chē.", "Merci de faire la queue et de monter dans l'ordre.", "Please queue and board in order."),
      ex("根据天气预报，明天有大雨。", "Gēnjù tiānqì yùbào, míngtiān yǒu dà yǔ.", "D'après la météo, il y aura de fortes pluies demain.", "According to the forecast, there'll be heavy rain tomorrow."),
      ex("按照中国的习惯，春节要回家过年。", "Ànzhào Zhōngguó de xíguàn, Chūnjié yào huí jiā guò nián.", "Selon la coutume chinoise, on rentre chez soi pour la fête du Printemps.", "By Chinese custom, you go home for Spring Festival."),
    ],
    pitfalls: t(
      "✗ 按照调查，… → pour une source d'information, ✓ 根据调查，…\n✗ 根据我，… → pour une opinion personnelle ✓ 我认为 / 在我看来。",
      "✗ 按照调查，… → for a source of data, ✓ 根据调查，…\n✗ 根据我，… → for a personal opinion ✓ 我认为 / 在我看来。",
    ),
  },
  {
    id: "hsk4-g16",
    level: 4,
    category: C.prep,
    title: t("随着 : au fur et à mesure de, avec", "随着: along with, as"),
    pattern: "随着 + N (的发展/变化/提高)，S + 也/越来越…",
    explanation: t(
      "**随着** exprime qu'un changement **accompagne** un autre : « avec », « au fur et à mesure que », « à mesure que ». Typique des textes sur la société et l'économie.\n\nIl est suivi d'un **groupe nominal**, très souvent du type **X 的发展 / 的提高 / 的变化 / 的增加**. La proposition principale contient souvent **也、越来越、逐渐**.",
      "**随着** says one change **goes along with** another: \"with\", \"as\", \"along with\". Typical of texts on society and economy.\n\nIt takes a **noun phrase**, very often **X 的发展 / 的提高 / 的变化 / 的增加**. The main clause often contains **也、越来越、逐渐**.",
    ),
    examples: [
      ex("随着经济的发展，人们的生活水平越来越高。", "Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó shuǐpíng yuè lái yuè gāo.", "Avec le développement économique, le niveau de vie ne cesse de s'élever.", "As the economy develops, living standards keep rising."),
      ex("随着年龄的增加，他的想法也变了。", "Suízhe niánlíng de zēngjiā, tā de xiǎngfǎ yě biàn le.", "Avec l'âge, sa façon de penser a changé elle aussi.", "As he got older, his way of thinking changed too."),
      ex("随着互联网的普及，网上购物成了习惯。", "Suízhe hùliánwǎng de pǔjí, wǎng shang gòuwù chéng le xíguàn.", "Avec la généralisation d'Internet, les achats en ligne sont devenus une habitude.", "With the spread of the internet, online shopping has become a habit."),
    ],
    pitfalls: t(
      "✗ 随着经济发展得很快，… → après 随着, un **nom**, pas une phrase complète : ✓ 随着经济的快速发展，…\n✗ 随着 sans changement dans la principale : il faut une évolution (变、越来越…).",
      "✗ 随着经济发展得很快，… → 随着 takes a **noun phrase**, not a full clause: ✓ 随着经济的快速发展，…\n✗ The main clause must show a change (变、越来越…).",
    ),
  },
  {
    id: "hsk4-g17",
    level: 4,
    category: C.prep,
    title: t("通过 : grâce à, par le biais de", "通过: through, by means of"),
    pattern: "通过 + moyen/méthode，S + V (résultat)",
    explanation: t(
      "Comme préposition, **通过** indique le **moyen** ou le **processus** qui permet d'obtenir un résultat : « par », « grâce à », « au moyen de ». Il se place en tête de phrase ou juste avant le verbe.\n\n通过 est aussi un **verbe** : « passer, traverser » (通过马路) ou « réussir, être adopté » (通过考试). Le contexte suffit à distinguer.",
      "As a preposition, **通过** marks the **means** or **process** that leads to a result: \"through\", \"by\", \"via\". It goes at the start of the sentence or right before the verb.\n\n通过 is also a **verb**: \"to pass through\" (通过马路) or \"to pass, be adopted\" (通过考试). Context tells them apart.",
    ),
    examples: [
      ex("通过这次实验，我们证明了这个观点。", "Tōngguò zhè cì shíyàn, wǒmen zhèngmíng le zhège guāndiǎn.", "Grâce à cette expérience, nous avons démontré ce point de vue.", "Through this experiment, we proved this view."),
      ex("他是通过朋友介绍认识她的。", "Tā shì tōngguò péngyou jièshào rènshi tā de.", "Il l'a rencontrée par l'intermédiaire d'un ami.", "He met her through a friend."),
      ex("通过努力，她终于通过了考试。", "Tōngguò nǔlì, tā zhōngyú tōngguò le kǎoshì.", "À force d'efforts, elle a enfin réussi l'examen.", "Through hard work, she finally passed the exam."),
    ],
    pitfalls: t(
      "✗ 我通过坐地铁去公司。— pour un moyen de transport, dis simplement ✓ 我坐地铁去公司。通过 = méthode/processus.\n✗ 通过 en fin de phrase comme « grâce à » français : ✗ 我成功了通过努力。→ ✓ 通过努力，我成功了。",
      "✗ 我通过坐地铁去公司。— for transport just say ✓ 我坐地铁去公司。通过 = method/process.\n✗ Tacking it on at the end: ✗ 我成功了通过努力。→ ✓ 通过努力，我成功了。",
    ),
  },
  {
    id: "hsk4-g18",
    level: 4,
    category: C.fixed,
    title: t("对…来说 / 在…看来 : pour…, aux yeux de…", "对…来说 / 在…看来: for…, in…'s view"),
    pattern: "对(于) + 人 + 来说，…  |  在 + 人 + 看来，…",
    explanation: t(
      "Deux cadres très fréquents pour indiquer **de quel point de vue** on parle :\n\n• **对…来说** : « **pour** quelqu'un » — la situation telle qu'elle **affecte** cette personne (difficile pour lui, important pour moi).\n• **在…看来** : « **selon, aux yeux de** » — l'**opinion** de cette personne.\n\nDans les deux cas, le cadre se place **en tête** de phrase. Ne dis pas ✗ 对我说 : il manque 来.",
      "Two very common frames showing **whose perspective** you're speaking from:\n\n• **对…来说**: \"**for** someone\" — how the situation **affects** that person (hard for him, important to me).\n• **在…看来**: \"**in someone's view**\" — that person's **opinion**.\n\nBoth go **at the start** of the sentence. Don't say ✗ 对我说 — it means \"to say to me\"; you need 来说.",
    ),
    examples: [
      ex("对老年人来说，用手机挂号并不容易。", "Duì lǎoniánrén lái shuō, yòng shǒujī guàhào bìng bù róngyì.", "Pour les personnes âgées, prendre rendez-vous à l'hôpital par téléphone n'est pas si simple.", "For elderly people, booking hospital appointments by phone isn't easy at all."),
      ex("在我看来，健康比钱更重要。", "Zài wǒ kàn lái, jiànkāng bǐ qián gèng zhòngyào.", "À mes yeux, la santé compte plus que l'argent.", "In my view, health matters more than money."),
      ex("在父母看来，孩子永远是孩子。", "Zài fùmǔ kàn lái, háizi yǒngyuǎn shì háizi.", "Aux yeux des parents, un enfant reste toujours un enfant.", "To parents, a child is always a child."),
    ],
    pitfalls: t(
      "✗ 对我说，这很难。→ ✓ 对我来说，这很难。\n✗ 我看来… → ✓ 在我看来…（ne pas oublier 在）\n✗ 在我看来 + 我觉得 : redondant, choisis l'un ou l'autre.",
      "✗ 对我说，这很难。→ ✓ 对我来说，这很难。\n✗ 我看来… → ✓ 在我看来… (don't forget 在)\n✗ 在我看来 + 我觉得 is redundant; pick one.",
    ),
  },
  {
    id: "hsk4-g19",
    level: 4,
    category: C.fixed,
    title: t("拿…来说 : prenons l'exemple de…", "拿…来说: take… for example"),
    pattern: "拿 + exemple + 来说，…",
    explanation: t(
      "**拿…来说** introduit un **exemple concret** qui illustre une affirmation générale qu'on vient de faire. En français : « prenons…, par exemple », « si l'on prend le cas de… ».\n\nLa structure se place en tête de phrase et est suivie d'une virgule. Proche de **比如** ou **以…为例** (plus écrit).",
      "**拿…来说** introduces a **concrete example** illustrating a general claim you've just made: \"take… for example\", \"if we take the case of…\".\n\nIt opens the sentence and is followed by a comma. Close to **比如** or **以…为例** (more written).",
    ),
    examples: [
      ex("中国各地的饮食很不一样，拿早饭来说，北方人爱吃包子。", "Zhōngguó gè dì de yǐnshí hěn bù yíyàng, ná zǎofàn lái shuō, běifāngrén ài chī bāozi.", "La cuisine varie énormément selon les régions : prenons le petit-déjeuner, les gens du Nord adorent les baozi.", "Food varies a lot across China; take breakfast — northerners love steamed buns."),
      ex("现在的交通很方便，拿我来说，每天坐高铁上班。", "Xiànzài de jiāotōng hěn fāngbiàn, ná wǒ lái shuō, měi tiān zuò gāotiě shàngbān.", "Les transports sont très pratiques aujourd'hui : moi, par exemple, je prends le TGV chaque jour pour aller au travail.", "Transport is very convenient now; take me — I commute by high-speed train every day."),
      ex("拿这次旅行来说，我们只花了两千块。", "Ná zhè cì lǚxíng lái shuō, wǒmen zhǐ huā le liǎng qiān kuài.", "Prenons ce voyage : nous n'avons dépensé que deux mille yuans.", "Take this trip: we only spent two thousand yuan."),
    ],
    pitfalls: t(
      "✗ 拿…来说 sans affirmation générale avant : l'exemple doit **illustrer** quelque chose.\n✗ 拿我说 → ✓ 拿我来说。",
      "✗ Using 拿…来说 with no general statement before it: the example must **illustrate** something.\n✗ 拿我说 → ✓ 拿我来说。",
    ),
  },
  {
    id: "hsk4-g20",
    level: 4,
    category: C.special,
    title: t("不得不 / 非…不可 : ne pas avoir le choix", "不得不 / 非…不可: to have no choice but"),
    pattern: "S + 不得不 + V  |  S + 非 + V/N + 不可",
    explanation: t(
      "Deux **doubles négations** qui expriment l'**obligation** :\n\n• **不得不** (« ne pas pouvoir ne pas ») = être **contraint** par les circonstances, souvent à contrecœur : « être obligé de ».\n• **非…不可** (« si ce n'est pas…, impossible ») = **nécessité absolue** ou **détermination** forte : « il faut absolument », « tenir à ».\n\nNuance : 不得不 = on subit ; 非…不可 = c'est indispensable ou on y tient.",
      "Two **double negatives** expressing **obligation**:\n\n• **不得不** (\"cannot not\") = being **forced** by circumstances, often reluctantly: \"have no choice but to\".\n• **非…不可** (\"unless…, impossible\") = **absolute necessity** or strong **determination**: \"must\", \"insist on\".\n\nNuance: 不得不 = you put up with it; 非…不可 = it's essential or you insist.",
    ),
    examples: [
      ex("公司突然有急事，我不得不取消休假。", "Gōngsī tūrán yǒu jí shì, wǒ bù dé bù qǔxiāo xiūjià.", "Une urgence au bureau m'a obligé à annuler mes congés.", "Something urgent came up at work and I had to cancel my leave."),
      ex("这个会很重要，你非参加不可。", "Zhège huì hěn zhòngyào, nǐ fēi cānjiā bùkě.", "Cette réunion est très importante, tu dois absolument y assister.", "This meeting is crucial; you absolutely must attend."),
      ex("他病得很重，非住院不可。", "Tā bìng de hěn zhòng, fēi zhùyuàn bùkě.", "Il est gravement malade, il faut absolument l'hospitaliser.", "He's seriously ill and has to be hospitalised."),
    ],
    pitfalls: t(
      "✗ 我不得不喜欢这个电影 — 不得不 = contrainte extérieure, pas un sentiment.\n✗ 非参加 sans 不可 : à l'oral on entend 非去 seul, mais apprends d'abord la forme complète ✓ 非去不可。\n✗ 不得不 ≠ 不必 (pas besoin de).",
      "✗ 我不得不喜欢这个电影 — 不得不 = external constraint, not a feeling.\n✗ Dropping 不可: in speech 非去 alone occurs, but learn the full ✓ 非去不可 first.\n✗ 不得不 ≠ 不必 (needn't).",
    ),
  },
  {
    id: "hsk4-g21",
    level: 4,
    category: C.special,
    title: t("难道…吗？ : question rhétorique", "难道…吗？: rhetorical question"),
    pattern: "难道 + (S) + phrase + 吗？",
    explanation: t(
      "**难道…吗？** ne demande pas une information : c'est une **question rhétorique** qui exprime la **surprise, le reproche ou l'évidence**. Le sens réel est **l'inverse** de la forme : 难道你不知道吗？ = « Tu le sais bien ! ».\n\nEn français : « Ne me dis pas que… ? », « Tu ne vas quand même pas… ? ». 难道 peut se placer avant ou après le sujet ; 吗 en fin de phrase est très fréquent.",
      "**难道…吗？** doesn't ask for information: it's a **rhetorical question** expressing **surprise, reproach or obviousness**. The real meaning is the **opposite** of the form: 难道你不知道吗？ = \"Surely you know!\".\n\nEnglish: \"Don't tell me…?\", \"Surely you don't…?\". 难道 can go before or after the subject; 吗 at the end is very common.",
    ),
    examples: [
      ex("难道你没看新闻吗？大家都知道了。", "Nándào nǐ méi kàn xīnwén ma? Dàjiā dōu zhīdào le.", "Tu n'as quand même pas raté les infos ? Tout le monde est au courant.", "Didn't you see the news? Everyone knows."),
      ex("网上说的难道都是真的吗？", "Wǎng shang shuō de nándào dōu shì zhēn de ma?", "Tu crois vraiment que tout ce qu'on dit en ligne est vrai ?", "Surely not everything online is true?"),
      ex("这么简单的道理，难道还要我解释吗？", "Zhème jiǎndān de dàolǐ, nándào hái yào wǒ jiěshì ma?", "Un principe aussi simple, tu veux vraiment que je te l'explique ?", "Such a simple point — do I really need to explain it?"),
    ],
    pitfalls: t(
      "✗ Répondre à 难道…吗 par une info neutre : c'est un reproche, pas une vraie question.\n✗ 难道 + question en 什么/谁 : ✗ 难道你去哪儿吗？— 难道 va avec une question oui/non.",
      "✗ Treating 难道…吗 as a real question: it's a reproach.\n✗ 难道 + wh-question: ✗ 难道你去哪儿吗？— 难道 goes with yes/no questions.",
    ),
  },
  {
    id: "hsk4-g22",
    level: 4,
    category: C.adv,
    title: t("到底 / 究竟 : finalement, au juste", "到底 / 究竟: on earth, after all"),
    pattern: "S + 到底/究竟 + question ?  |  到底 + V (=finalement)",
    explanation: t(
      "Dans une **question**, **到底** (oral) et **究竟** (plus écrit) expriment l'**impatience** ou l'envie d'avoir enfin une réponse claire : « au juste », « enfin », « bon sang ». \n\nLa question doit être **ouverte** (mot interrogatif, A不A, A还是B) — **jamais avec 吗**.\n\n到底 a un second sens : « **finalement, au bout du compte** » (他到底成功了). Et 到底 comme verbe-complément : 坚持到底 (tenir jusqu'au bout).",
      "In a **question**, **到底** (spoken) and **究竟** (more written) show **impatience** or a push for a clear answer: \"on earth\", \"exactly\", \"after all\".\n\nThe question must be **open** (question word, A-not-A, A or B) — **never with 吗**.\n\n到底 also means \"**finally, in the end**\" (他到底成功了), and as a complement: 坚持到底 (hold out to the end).",
    ),
    examples: [
      ex("你到底同意不同意？", "Nǐ dàodǐ tóngyì bu tóngyì?", "Bon, tu es d'accord ou pas ?", "So do you agree or not?"),
      ex("这个项目究竟什么时候能完成？", "Zhège xiàngmù jiūjìng shénme shíhou néng wánchéng?", "Ce projet, il sera terminé quand, au juste ?", "When exactly will this project be finished?"),
      ex("经过几年的努力，他到底实现了理想。", "Jīngguò jǐ nián de nǔlì, tā dàodǐ shíxiàn le lǐxiǎng.", "Après des années d'efforts, il a finalement réalisé son rêve.", "After years of effort, he finally achieved his dream."),
    ],
    pitfalls: t(
      "✗ 你到底同意吗？→ ✓ 你到底同意不同意？— pas de 吗 avec 到底.\n✗ 到底你… en tête avec un sujet pronom est possible à l'oral, mais la place standard est **après le sujet**.",
      "✗ 你到底同意吗？→ ✓ 你到底同意不同意？— no 吗 with 到底.\n✗ 到底你… at the start occurs in speech, but the standard slot is **after the subject**.",
    ),
  },
  {
    id: "hsk4-g23",
    level: 4,
    category: C.adv,
    title: t("反正 : de toute façon", "反正: anyway, in any case"),
    pattern: "(无论/不管…)，反正 + S + V",
    explanation: t(
      "**反正** signifie « **de toute façon, quoi qu'il en soit** » : la conclusion reste valable quelles que soient les circonstances. Il accompagne souvent 无论/不管 ou suit une alternative.\n\nIl sert aussi à **justifier** une décision de manière décontractée : 反正没事，我们去走走吧 (« de toute façon on n'a rien à faire… »). Registre plutôt **oral**. Il se place avant ou après le sujet.",
      "**反正** means \"**anyway, in any case**\": the conclusion holds whatever the circumstances. It often follows 无论/不管 or an alternative.\n\nIt also **justifies** a decision casually: 反正没事，我们去走走吧 (\"we've nothing to do anyway…\"). Mainly **spoken**. It goes before or after the subject.",
    ),
    examples: [
      ex("不管你信不信，反正我信。", "Bùguǎn nǐ xìn bu xìn, fǎnzhèng wǒ xìn.", "Que tu y croies ou non, moi j'y crois, en tout cas.", "Whether you believe it or not, I do anyway."),
      ex("反正明天放假，今晚我们看电影吧。", "Fǎnzhèng míngtiān fàngjià, jīnwǎn wǒmen kàn diànyǐng ba.", "De toute façon demain c'est férié, regardons un film ce soir.", "We're off tomorrow anyway, so let's watch a film tonight."),
      ex("你别劝了，反正我已经决定了。", "Nǐ bié quàn le, fǎnzhèng wǒ yǐjīng juédìng le.", "N'essaie pas de me convaincre, de toute façon j'ai déjà décidé.", "Stop trying to persuade me; I've decided anyway."),
    ],
    pitfalls: t(
      "✗ Confondre 反正 (de toute façon) et 反而 (au contraire).\n✗ 反正 dans un rapport officiel : trop familier → ✓ 无论如何。",
      "✗ Mixing up 反正 (anyway) and 反而 (on the contrary).\n✗ 反正 in a formal report sounds too casual → ✓ 无论如何。",
    ),
  },
  {
    id: "hsk4-g24",
    level: 4,
    category: C.adv,
    title: t("仍然 : toujours, encore (continuité)", "仍然: still"),
    pattern: "(虽然/尽管…)，S + 仍然 + V/Adj",
    explanation: t(
      "**仍然** (« toujours, encore ») indique qu'une situation **n'a pas changé** malgré le temps ou un obstacle. C'est un 还是/还 plus **écrit**.\n\nIl apparaît naturellement après 虽然/尽管 ou après une indication de temps : 十年过去了，他仍然… Variante littéraire : **依然**.",
      "**仍然** (\"still\") shows that a situation **hasn't changed** despite time or an obstacle. It's a more **written** 还是/还.\n\nIt naturally follows 虽然/尽管 or a time phrase: 十年过去了，他仍然… Literary variant: **依然**.",
    ),
    examples: [
      ex("吃了三天药，他仍然咳嗽。", "Chī le sān tiān yào, tā réngrán késou.", "Après trois jours de médicaments, il tousse toujours.", "After three days of medicine, he's still coughing."),
      ex("虽然已经八十岁了，奶奶仍然每天散步。", "Suīrán yǐjīng bāshí suì le, nǎinai réngrán měi tiān sànbù.", "À quatre-vingts ans, grand-mère se promène encore chaque jour.", "Though she's eighty, Grandma still goes for a walk every day."),
      ex("问题仍然没有解决。", "Wèntí réngrán méiyǒu jiějué.", "Le problème n'est toujours pas résolu.", "The problem still hasn't been solved."),
    ],
    pitfalls: t(
      "✗ 仍然 avant le sujet : ✗ 仍然他咳嗽 → ✓ 他仍然咳嗽。\n✗ 仍然 pour « encore une fois » (répétition) → ✓ 又/再。",
      "✗ 仍然 before the subject: ✗ 仍然他咳嗽 → ✓ 他仍然咳嗽。\n✗ 仍然 for \"once again\" (repetition) → ✓ 又/再。",
    ),
  },
  {
    id: "hsk4-g25",
    level: 4,
    category: C.adv,
    title: t("恐怕 : j'ai bien peur que, sans doute", "恐怕: I'm afraid, probably"),
    pattern: "恐怕 + phrase  |  S + 恐怕 + V",
    explanation: t(
      "**恐怕** exprime une **estimation**, souvent **défavorable** : « je crains que », « j'ai bien peur que », « probablement ». Il adoucit une mauvaise nouvelle, comme l'anglais *I'm afraid…*.\n\nIl se place en tête de phrase ou avant le verbe. Ce n'est pas le verbe « avoir peur » (怕、害怕) : 恐怕 est un **adverbe de modalité**.",
      "**恐怕** gives an **estimate**, often an **unwelcome** one: \"I'm afraid\", \"probably\". It softens bad news, just like English *I'm afraid…*.\n\nIt goes at the start of the sentence or before the verb. It isn't the verb \"to fear\" (怕、害怕): 恐怕 is a **modal adverb**.",
    ),
    examples: [
      ex("恐怕我今天不能按时完成了。", "Kǒngpà wǒ jīntiān bù néng ànshí wánchéng le.", "J'ai bien peur de ne pas pouvoir finir à temps aujourd'hui.", "I'm afraid I can't finish on time today."),
      ex("路上堵车，他恐怕要迟到了。", "Lù shang dǔ chē, tā kǒngpà yào chídào le.", "Avec les bouchons, il va sans doute être en retard.", "With the traffic jams, he'll probably be late."),
      ex("这件事恐怕没那么简单。", "Zhè jiàn shì kǒngpà méi nàme jiǎndān.", "Je crains que cette affaire ne soit pas si simple.", "I'm afraid this isn't that simple."),
    ],
    pitfalls: t(
      "✗ 我恐怕狗。(« j'ai peur des chiens ») → ✓ 我怕狗 / 我害怕狗。\n✗ Utiliser 恐怕 pour une bonne nouvelle sonne bizarre : ✗ 恐怕你中奖了。",
      "✗ 我恐怕狗。(\"I'm scared of dogs\") → ✓ 我怕狗 / 我害怕狗。\n✗ Using 恐怕 for good news sounds odd: ✗ 恐怕你中奖了。",
    ),
  },
  {
    id: "hsk4-g26",
    level: 4,
    category: C.adv,
    title: t("似乎 / 像…似的 : on dirait que, comme si", "似乎 / 像…似的: seemingly, as if"),
    pattern: "S + 似乎 + V/Adj  |  像 + N + 似的",
    explanation: t(
      "**似乎** (« il semble que, apparemment ») est un 好像 plus **soutenu**. Il exprime une impression ou une supposition incertaine, et se place **après le sujet** en général.\n\n**像…似的** (souvent prononcé *shìde*) fait une **comparaison imagée** : « comme si », « on dirait ». 似的 se place **à la fin** de la comparaison. Variante : 好像…似的 / 像…一样.",
      "**似乎** (\"it seems, apparently\") is a more **formal** 好像. It expresses an impression or uncertain guess and usually goes **after the subject**.\n\n**像…似的** (似的 read *shìde*) makes a **vivid comparison**: \"as if\", \"like\". 似的 goes **at the end** of the comparison. Variants: 好像…似的 / 像…一样.",
    ),
    examples: [
      ex("这个结论似乎有问题。", "Zhège jiélùn sìhū yǒu wèntí.", "Cette conclusion semble poser problème.", "This conclusion seems to have a problem."),
      ex("他似乎不太愿意回答。", "Tā sìhū bú tài yuànyì huídá.", "Il ne semble pas très disposé à répondre.", "He doesn't seem very willing to answer."),
      ex("她高兴得像个孩子似的。", "Tā gāoxìng de xiàng ge háizi shìde.", "Elle est contente comme une enfant.", "She's as happy as a child."),
    ],
    pitfalls: t(
      "✗ 似的 lu *sìde* : on dit ✓ *shìde*.\n✗ 像孩子似 → ✓ 像孩子似的（ne pas oublier 的）。\n✗ 似乎 à l'oral familier sonne un peu écrit ; 好像 est plus naturel entre amis.",
      "✗ Reading 似的 as *sìde*: it's ✓ *shìde*.\n✗ 像孩子似 → ✓ 像孩子似的 (don't drop 的).\n✗ 似乎 in casual chat sounds bookish; 好像 is more natural with friends.",
    ),
  },
  {
    id: "hsk4-g27",
    level: 4,
    category: C.special,
    title: t("Passif avec 让 / 叫 / 给", "Passive with 让 / 叫 / 给"),
    pattern: "Objet + 让/叫/给 + agent + V + complément",
    explanation: t(
      "À l'oral, le passif en **被** a trois équivalents : **让、叫、给**. Même structure : *patient + 让/叫 + agent + verbe + résultat*.\n\nDifférence importante : avec **让/叫**, l'**agent est obligatoire** (✗ 我的车让偷了). Avec **被** et **给**, il peut être omis (我的车被偷了 / 我的车给偷了).\n\nComme avec 被, le verbe doit être **suivi d'un complément** (了、résultat, durée) : on ne dit pas ✗ 衣服叫雨淋。Le passif chinois exprime souvent un **événement subi, désagréable**.",
      "In speech, the 被 passive has three equivalents: **让、叫、给**. Same structure: *patient + 让/叫 + agent + verb + result*.\n\nKey difference: with **让/叫** the **agent is required** (✗ 我的车让偷了). With **被** and **给** it can be dropped (我的车被偷了 / 我的车给偷了).\n\nAs with 被, the verb needs **something after it** (了, a result, a duration): not ✗ 衣服叫雨淋。The Chinese passive often describes something **unpleasant** that happened to you.",
    ),
    examples: [
      ex("我的自行车让人骑走了。", "Wǒ de zìxíngchē ràng rén qí zǒu le.", "Quelqu'un est parti avec mon vélo.", "Someone rode off with my bike."),
      ex("衣服叫雨淋湿了。", "Yīfu jiào yǔ lín shī le.", "Les vêtements ont été trempés par la pluie.", "The clothes got soaked by the rain."),
      ex("蛋糕给弟弟吃完了。", "Dàngāo gěi dìdi chī wán le.", "Le gâteau a été fini par mon petit frère.", "The cake got eaten up by my little brother."),
      ex("这个秘密被记者发现了。", "Zhège mìmì bèi jìzhě fāxiàn le.", "Ce secret a été découvert par un journaliste.", "This secret was discovered by a journalist."),
    ],
    pitfalls: t(
      "✗ 我的车让偷了。→ ✓ 我的车让人偷了 / 被偷了。\n✗ 衣服叫雨淋。→ ✓ 衣服叫雨淋湿了。\n✗ Négation après 让 : ✗ 他让老师没批评 → ✓ 他没让老师批评。",
      "✗ 我的车让偷了。→ ✓ 我的车让人偷了 / 被偷了。\n✗ 衣服叫雨淋。→ ✓ 衣服叫雨淋湿了。\n✗ Negation after 让: ✗ 他让老师没批评 → ✓ 他没让老师批评。",
    ),
  },
  {
    id: "hsk4-g28",
    level: 4,
    category: C.special,
    title: t("把…V成/作/为 : transformer en, considérer comme", "把…V成/作/为: turn into, treat as"),
    pattern: "S + 把 + A + V + 成/作/为 + B",
    explanation: t(
      "Cette forme de **把** exprime qu'on **transforme A en B** ou qu'on **traite A comme B** : 翻译成 (traduire en), 看成/看作 (considérer comme), 当作 (prendre pour), 变成 (changer en).\n\nLe complément **成/作/为 + B** est indispensable : c'est lui qui donne le résultat. **成** est le plus courant à l'oral ; **作、为** sont plus écrits.",
      "This **把** pattern says you **turn A into B** or **treat A as B**: 翻译成 (translate into), 看成/看作 (regard as), 当作 (take as), 变成 (change into).\n\nThe **成/作/为 + B** complement is essential: it's the result. **成** is most common in speech; **作、为** are more written.",
    ),
    examples: [
      ex("请把这段话翻译成法语。", "Qǐng bǎ zhè duàn huà fānyì chéng Fǎyǔ.", "Traduis ce passage en français, s'il te plaît.", "Please translate this passage into French."),
      ex("他把运动当作一种休息。", "Tā bǎ yùndòng dàng zuò yì zhǒng xiūxi.", "Il considère le sport comme une forme de repos.", "He treats exercise as a kind of rest."),
      ex("别把感冒看成小事。", "Bié bǎ gǎnmào kàn chéng xiǎo shì.", "Ne prends pas un rhume pour une broutille.", "Don't treat a cold as a trivial thing."),
    ],
    pitfalls: t(
      "✗ 我翻译这段话成法语。→ avec un résultat « en B », le 把 est obligatoire : ✓ 我把这段话翻译成法语。\n✗ 他把运动当休息 : acceptable à l'oral, mais ✓ 当作/当成 est plus clair.",
      "✗ 我翻译这段话成法语。→ with \"into B\" 把 is required: ✓ 我把这段话翻译成法语。\n✗ 他把运动当休息 is OK in speech, but ✓ 当作/当成 is clearer.",
    ),
  },
  {
    id: "hsk4-g29",
    level: 4,
    category: C.comp,
    title: t("V下去 / V出来 / V起来 : sens figurés", "V下去 / V出来 / V起来: figurative meanings"),
    pattern: "V + 下去 (continuer) | V + 出来 (identifier/produire) | V + 起来 (rappeler/commencer/évaluer)",
    explanation: t(
      "Les compléments de direction ont des **sens abstraits** très fréquents au niveau 4 :\n\n• **下去** = **continuer** une action déjà commencée : 说下去、坚持下去.\n• **出来** = faire **apparaître, identifier, produire** : 看出来 (remarquer), 听出来 (reconnaître à la voix), 想出来 (trouver une idée).\n• **起来** = **commencer** (笑起来), **se rappeler** (想起来), ou **évaluer** une impression (看起来、听起来).\n\nPiège classique : **想出来** = inventer une idée nouvelle ; **想起来** = retrouver un souvenir.",
      "Directional complements have very common **abstract meanings** at level 4:\n\n• **下去** = **carry on** with something already started: 说下去、坚持下去.\n• **出来** = make something **appear, identify, produce**: 看出来 (notice), 听出来 (recognise by sound), 想出来 (come up with).\n• **起来** = **start** (笑起来), **recall** (想起来), or **assess** an impression (看起来、听起来).\n\nClassic trap: **想出来** = come up with a new idea; **想起来** = remember something.",
    ),
    examples: [
      ex("研究很难，但我们一定要做下去。", "Yánjiū hěn nán, dàn wǒmen yídìng yào zuò xiàqu.", "La recherche est dure, mais nous devons absolument continuer.", "Research is hard, but we must keep going."),
      ex("你看得出来这是真的还是假的吗？", "Nǐ kàn de chūlái zhè shì zhēn de háishi jiǎ de ma?", "Tu arrives à voir si c'est du vrai ou du faux ?", "Can you tell whether this is real or fake?"),
      ex("他终于想出来一个好办法。", "Tā zhōngyú xiǎng chūlái yí ge hǎo bànfǎ.", "Il a enfin trouvé une bonne solution.", "He finally came up with a good solution."),
      ex("我想起来了，我们见过面！", "Wǒ xiǎng qǐlái le, wǒmen jiàn guo miàn!", "Ça me revient, on s'est déjà rencontrés !", "I remember now — we've met before!"),
    ],
    pitfalls: t(
      "✗ 我想出来他的名字了。→ un nom qu'on connaissait : ✓ 我想起来他的名字了。\n✗ 坚持下来 vs 坚持下去 : 下来 = on a tenu jusqu'à maintenant (bilan) ; 下去 = on va continuer.",
      "✗ 我想出来他的名字了。→ a name you knew: ✓ 我想起来他的名字了。\n✗ 坚持下来 vs 坚持下去: 下来 = held out until now (looking back); 下去 = will keep going.",
    ),
  },
  {
    id: "hsk4-g30",
    level: 4,
    category: C.adv,
    title: t("从来 + 不/没 : jamais", "从来 + 不/没: never"),
    pattern: "S + 从来 + 不 + V (habitude) | S + 从来 + 没(有) + V + 过 (expérience)",
    explanation: t(
      "**从来** signifie « **depuis toujours** » et s'emploie surtout à la **forme négative** pour dire « **jamais** ».\n\n• **从来不 + V** : une **habitude** ou un principe (« je ne… jamais ») : 他从来不喝酒.\n• **从来没(有) + V + 过** : une **expérience** jamais vécue : 我从来没去过西藏.\n\nLa différence 不/没 est la même que partout ailleurs : 不 = volonté/habitude, 没 = fait passé.",
      "**从来** means \"**always, all along**\" and is mostly used **negatively** to mean \"**never**\".\n\n• **从来不 + V**: a **habit** or principle: 他从来不喝酒 (he never drinks).\n• **从来没(有) + V + 过**: an **experience** never had: 我从来没去过西藏 (I've never been to Tibet).\n\nThe 不/没 contrast is the usual one: 不 = will/habit, 没 = past fact.",
    ),
    examples: [
      ex("他从来不吃早饭，所以胃不好。", "Tā cónglái bù chī zǎofàn, suǒyǐ wèi bù hǎo.", "Il ne prend jamais de petit-déjeuner, d'où ses problèmes d'estomac.", "He never eats breakfast, so his stomach is bad."),
      ex("我从来没得过这么重的感冒。", "Wǒ cónglái méi dé guo zhème zhòng de gǎnmào.", "Je n'ai jamais eu un rhume aussi fort.", "I've never had such a bad cold."),
      ex("她从来都很注意饮食。", "Tā cónglái dōu hěn zhùyì yǐnshí.", "Elle a toujours fait attention à son alimentation.", "She has always watched her diet."),
    ],
    pitfalls: t(
      "✗ 我从来没去西藏。→ ✓ 我从来没去过西藏。(过 attendu pour l'expérience)\n✗ 我从来去过西藏 : la forme affirmative sans 都 est rare → ✓ 我一直…",
      "✗ 我从来没去西藏。→ ✓ 我从来没去过西藏。(过 expected for experience)\n✗ 我从来去过西藏: positive 从来 without 都 is rare → use ✓ 我一直…",
    ),
  },
  {
    id: "hsk4-g31",
    level: 4,
    category: C.pron,
    title: t("各 / 任何 / 其他 : chaque, n'importe quel, autres", "各 / 任何 / 其他: each, any, other"),
    pattern: "各 + (M) + N | 任何 + N + 都/也 | 其他 + (的) + N",
    explanation: t(
      "Trois déterminants fréquents à l'écrit :\n\n• **各** = « **chaque, les différents** » (vus séparément) : 各国、各地、各位. Il se combine directement avec certains noms, sans classificateur.\n• **任何** = « **n'importe quel, aucun** » : presque toujours avec **都/也**, souvent à la forme négative : 任何人都不能进去.\n• **其他** = « **les autres** » (le reste d'un ensemble) : 其他人、其他问题.",
      "Three determiners common in writing:\n\n• **各** = \"**each, the various**\" (taken separately): 各国、各地、各位. Combines directly with some nouns, without a measure word.\n• **任何** = \"**any, no… whatsoever**\": almost always with **都/也**, often negative: 任何人都不能进去.\n• **其他** = \"**the other(s)**\" (rest of a group): 其他人、其他问题.",
    ),
    examples: [
      ex("各地的风俗习惯都不一样。", "Gè dì de fēngsú xíguàn dōu bù yíyàng.", "Les coutumes diffèrent d'une région à l'autre.", "Customs differ from place to place."),
      ex("出了任何问题，都可以给我打电话。", "Chū le rènhé wèntí, dōu kěyǐ gěi wǒ dǎ diànhuà.", "S'il y a le moindre problème, tu peux m'appeler.", "If any problem comes up, you can call me."),
      ex("除了故宫，我们还参观了其他地方。", "Chúle Gùgōng, wǒmen hái cānguān le qítā dìfang.", "En plus de la Cité interdite, nous avons visité d'autres endroits.", "Besides the Forbidden City, we visited other places."),
    ],
    pitfalls: t(
      "✗ 任何人不能进去。→ ✓ 任何人都不能进去。(都/也 manquant)\n✗ 各个人 → ✓ 每个人 / 各位。\n• 其他 vs 别的 : 别的 est plus oral ; les deux se placent devant un nom.",
      "✗ 任何人不能进去。→ ✓ 任何人都不能进去。(missing 都/也)\n✗ 各个人 → ✓ 每个人 / 各位。\n✗ 其他 vs 别的: 别的 is more colloquial; both are fine with a following noun.",
    ),
  },
  {
    id: "hsk4-g32",
    level: 4,
    category: C.complex,
    title: t("假如 / 万一 : si, au cas où", "假如 / 万一: if, in case"),
    pattern: "假如 + hypothèse，(S) 就… | 万一 + imprévu，(S) 就/怎么办",
    explanation: t(
      "Deux façons d'introduire une **hypothèse** :\n\n• **假如** = « **si, supposons que** » : un 如果 plus écrit, pour une hypothèse **neutre**.\n• **万一** = « **au cas où, si jamais** » (littéralement « un sur dix mille ») : hypothèse **peu probable et indésirable**. On l'utilise pour **prévoir un problème** : 万一下雨怎么办？\n\nLa seconde proposition contient souvent **就** ou une question 怎么办.",
      "Two ways to introduce a **hypothesis**:\n\n• **假如** = \"**if, suppose**\": a more written 如果 for a **neutral** hypothesis.\n• **万一** = \"**in case, what if**\" (literally \"one in ten thousand\"): an **unlikely and unwanted** scenario, used to **plan for trouble**: 万一下雨怎么办？\n\nThe second clause often has **就** or 怎么办.",
    ),
    examples: [
      ex("假如有机会，我想去西藏看看。", "Jiǎrú yǒu jīhuì, wǒ xiǎng qù Xīzàng kànkan.", "Si j'en ai l'occasion, j'aimerais aller voir le Tibet.", "If I get the chance, I'd like to visit Tibet."),
      ex("多带点儿钱吧，万一不能刷卡呢？", "Duō dài diǎnr qián ba, wànyī bù néng shuā kǎ ne?", "Prends un peu plus de liquide, au cas où on ne pourrait pas payer par carte.", "Take some extra cash, in case cards aren't accepted."),
      ex("万一护照丢了，就马上联系大使馆。", "Wànyī hùzhào diū le, jiù mǎshàng liánxì dàshǐguǎn.", "Si jamais tu perds ton passeport, contacte tout de suite l'ambassade.", "If you happen to lose your passport, contact the embassy immediately."),
    ],
    pitfalls: t(
      "✗ 万一我中了大奖… — 万一 s'emploie pour un **risque**, pas un bon événement → ✓ 假如/要是我中了大奖…\n✗ 假如…所以… → ✓ 假如…就…。",
      "✗ 万一我中了大奖… — 万一 is for **risks**, not good luck → ✓ 假如/要是我中了大奖…\n✗ 假如…所以… → ✓ 假如…就…。",
    ),
  },
  {
    id: "hsk4-g33",
    level: 4,
    category: C.comp,
    title: t("V得起 / V不起 : avoir les moyens de", "V得起 / V不起: can / can't afford to"),
    pattern: "S + V + 得起/不起 + O",
    explanation: t(
      "**得起 / 不起** est un **complément de possibilité** qui exprime si l'on a les **moyens** (financiers ou autres) de faire quelque chose : 买得起 (pouvoir se payer), 住不起 (ne pas pouvoir se loger), 花不起 (ne pas pouvoir dépenser).\n\nSens figuré : **看不起** = mépriser ; **对不起** = désolé (litt. « ne pas être à la hauteur de »). **了**(liǎo) a un sens proche mais général : 吃不了 = ne pas pouvoir finir (trop) ; 吃不起 = trop cher.",
      "**得起 / 不起** is a **potential complement** saying whether you can **afford** (money or otherwise) to do something: 买得起 (can afford to buy), 住不起 (can't afford to live/stay), 花不起 (can't afford to spend).\n\nFigurative: **看不起** = look down on; **对不起** = sorry (literally \"not live up to\"). Compare **了** (liǎo): 吃不了 = can't finish (too much); 吃不起 = too expensive to eat.",
    ),
    examples: [
      ex("市中心的酒店太贵了，我们住不起。", "Shì zhōngxīn de jiǔdiàn tài guì le, wǒmen zhù bu qǐ.", "Les hôtels du centre sont trop chers, on n'a pas les moyens d'y loger.", "Downtown hotels are too pricey; we can't afford them."),
      ex("现在很多年轻人都买得起车了。", "Xiànzài hěn duō niánqīngrén dōu mǎi de qǐ chē le.", "Aujourd'hui, beaucoup de jeunes peuvent se payer une voiture.", "Nowadays many young people can afford a car."),
      ex("别看不起别人。", "Bié kàn bu qǐ biérén.", "Ne méprise pas les autres.", "Don't look down on others."),
    ],
    pitfalls: t(
      "✗ 我不能买得起。→ ✓ 我买不起。(le complément de possibilité remplace 能)\n✗ 吃不起 pour « trop de nourriture » → ✓ 吃不了。",
      "✗ 我不能买得起。→ ✓ 我买不起。(the potential complement replaces 能)\n✗ 吃不起 for \"too much food\" → ✓ 吃不了。",
    ),
  },
  {
    id: "hsk4-g34",
    level: 4,
    category: C.num,
    title: t("左右 / 上下 / 来 : environ", "左右 / 上下 / 来: about, around"),
    pattern: "Nombre + (M) + 左右/上下 | 十/百 + 来 + M + N",
    explanation: t(
      "Pour donner une **approximation** :\n\n• **左右** (« gauche-droite ») : après un nombre + classificateur/unité : 三十岁左右、八点左右. Le plus courant.\n• **上下** (« haut-bas ») : surtout pour l'**âge, le poids, la taille** : 五十岁上下.\n• **来** : après un chiffre rond (十、二十、一百…) et **avant** le classificateur : 二十来个人 (une vingtaine de personnes).\n\n大概 + 左右 ensemble (大概三十个左右) s'entend souvent à l'oral, mais c'est redondant à l'écrit soigné.",
      "To give an **approximation**:\n\n• **左右** (\"left-right\"): after number + measure/unit: 三十岁左右、八点左右. The most common.\n• **上下** (\"up-down\"): mostly for **age, weight, height**: 五十岁上下.\n• **来**: after a round number (十、二十、一百…) and **before** the measure word: 二十来个人 (twenty-odd people).\n\n大概 + 左右 together (大概三十个左右) is common in speech but redundant in careful writing.",
    ),
    examples: [
      ex("中国六十岁以上的老人有两亿多，占总人口的百分之二十左右。", "Zhōngguó liùshí suì yǐshàng de lǎorén yǒu liǎng yì duō, zhàn zǒng rénkǒu de bǎi fēn zhī èrshí zuǒyòu.", "La Chine compte plus de deux cents millions de plus de soixante ans, environ 20 % de la population.", "China has over 200 million people aged 60+, around 20% of the population."),
      ex("他看起来四十岁上下。", "Tā kàn qǐlái sìshí suì shàngxià.", "Il a l'air d'avoir une quarantaine d'années.", "He looks about forty."),
      ex("会议来了二十来个人。", "Huìyì lái le èrshí lái ge rén.", "Une vingtaine de personnes sont venues à la réunion.", "Twenty-odd people came to the meeting."),
    ],
    pitfalls: t(
      "✗ 左右三十岁 → ✓ 三十岁左右 (左右 **après**).\n✗ 二十个来人 → ✓ 二十来个人 (来 **avant** le classificateur).\n✗ 八点上下 pour l'heure → ✓ 八点左右。",
      "✗ 左右三十岁 → ✓ 三十岁左右 (左右 goes **after**).\n✗ 二十个来人 → ✓ 二十来个人 (来 **before** the measure word).\n✗ 八点上下 for clock time → ✓ 八点左右。",
    ),
  },
];
