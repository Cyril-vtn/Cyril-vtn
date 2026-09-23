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
  style: "语体 / register & style",
  disc: "篇章 / discourse",
};

export const grammar: GrammarPoint[] = [
  {
    id: "hsk6-g01",
    level: 6,
    category: C.conj,
    title: t("进而 : et ensuite, allant plus loin", "进而: and then, going further"),
    pattern: "A (étape 1)，进而 + B (étape plus avancée)",
    explanation: t(
      "**进而** marque une **progression par étapes** : après avoir accompli A, on **passe au stade suivant** B, plus large ou plus profond. En français : « puis, dans la foulée », « et, partant de là », « pour ensuite ».\n\nDifférence avec **从而** (niveau 5) : 从而 introduit le **résultat** d'une mesure (A entraîne B) ; **进而** introduit une **étape supplémentaire**, une avancée (après A, on fait aussi B). Registre écrit.",
      "**进而** marks a **step-by-step progression**: having done A, you **move on to** a broader or deeper stage B — \"and then\", \"going on to\", \"further\".\n\nVersus **从而** (level 5): 从而 introduces the **result** of a measure (A leads to B); **进而** introduces a **further step** (after A, you also do B). Written register.",
    ),
    examples: [
      ex("这家企业先占领了国内市场，进而走向了全世界。", "Zhè jiā qǐyè xiān zhànlǐng le guónèi shìchǎng, jìn'ér zǒuxiàng le quán shìjiè.", "Cette entreprise a d'abord conquis le marché intérieur, puis s'est lancée à l'assaut du monde.", "This company first captured the domestic market and then went global."),
      ex("我们要先了解问题，进而找到解决的办法。", "Wǒmen yào xiān liǎojiě wèntí, jìn'ér zhǎodào jiějué de bànfǎ.", "Il faut d'abord comprendre le problème, pour ensuite trouver comment le résoudre.", "We must first understand the problem and then go on to find a solution."),
      ex("文化交流能增进理解，进而促进合作。", "Wénhuà jiāoliú néng zēngjìn lǐjiě, jìn'ér cùjìn hézuò.", "Les échanges culturels renforcent la compréhension et, au-delà, favorisent la coopération.", "Cultural exchange deepens understanding and, further, promotes cooperation."),
    ],
    pitfalls: t(
      "✗ 进而 pour une simple conséquence : ✗ 下雨了，进而路很滑 → ✓ 所以/因此。\n✗ Confondre 进而 et 从而 : 进而 = étape de plus ; 从而 = résultat.",
      "✗ 进而 for a mere consequence: ✗ 下雨了，进而路很滑 → ✓ 所以/因此。\n✗ Mixing up 进而 and 从而: 进而 = one step further; 从而 = result.",
    ),
  },
  {
    id: "hsk6-g02",
    level: 6,
    category: C.complex,
    title: t("尚且…何况… : si même…, à plus forte raison…", "尚且…何况…: if even…, how much more…"),
    pattern: "A 尚且 + (不)V，(更)何况 B (呢)？",
    explanation: t(
      "Forme **soutenue** du raisonnement a fortiori. **尚且** (« même, encore ») pose le **cas facile** ; **何况** tire la conclusion pour le **cas plus difficile**. « Si même A…, que dire alors de B ? »\n\n**尚且** se place **après le sujet** A. La seconde partie peut se terminer par **呢** ou sous-entendre la conclusion. À l'oral, on dirait 连 A 都…，更别说 B 了.",
      "The **formal** a fortiori argument. **尚且** (\"even\") sets up the **easy case**; **何况** draws the conclusion for the **harder case**: \"If even A…, how much more (or less) B?\"\n\n**尚且** goes **after the subject** A. The second part may end in **呢** or leave the conclusion implied. In speech: 连 A 都…，更别说 B 了.",
    ),
    examples: [
      ex("大城市的年轻人尚且买不起房，何况刚毕业的学生呢？", "Dà chéngshì de niánqīngrén shàngqiě mǎi bu qǐ fáng, hékuàng gāng bìyè de xuésheng ne?", "Si même les jeunes actifs des grandes villes ne peuvent pas acheter, que dire des jeunes diplômés ?", "If even young city workers can't afford a home, how could fresh graduates?"),
      ex("专家尚且说不清楚，更何况我们普通人。", "Zhuānjiā shàngqiě shuō bu qīngchu, gèng hékuàng wǒmen pǔtōngrén.", "Même les experts n'arrivent pas à l'expliquer clairement, alors nous, simples citoyens…", "Even experts can't explain it clearly, let alone us ordinary people."),
      ex("这么简单的道理，孩子尚且明白，你怎么会不懂？", "Zhème jiǎndān de dàolǐ, háizi shàngqiě míngbai, nǐ zěnme huì bù dǒng?", "Un principe aussi simple, même un enfant le comprend : comment peux-tu ne pas le saisir ?", "Even a child gets such a simple point — how can you not?"),
    ],
    pitfalls: t(
      "✗ 尚且 avant le sujet : ✗ 尚且专家… → ✓ 专家尚且….\n✗ Inverser les cas : l'élément avec 尚且 doit être le cas **le plus favorable**.\n✗ Confondre 尚且 et 尚未 (« pas encore »).",
      "✗ 尚且 before the subject: ✗ 尚且专家… → ✓ 专家尚且….\n✗ Swapping the cases: the 尚且 item must be the **most favourable** case.\n✗ Confusing 尚且 with 尚未 (\"not yet\").",
    ),
  },
  {
    id: "hsk6-g03",
    level: 6,
    category: C.complex,
    title: t("即便…也… / 纵然…也… : quand bien même", "即便…也… / 纵然…也…: even if, even though"),
    pattern: "即便/纵然 + hypothèse extrême，(S) 也 + V",
    explanation: t(
      "Variantes **écrites** de 即使…也… :\n\n• **即便** = « même si », registre soutenu, très fréquent dans la presse.\n• **纵然** / **纵使** = « quand bien même, dût-on », plus littéraire, souvent devant une hypothèse **extrême** ou une concession **dramatique**.\n\nLa seconde proposition garde **也** (ou 仍、还是). Comme 即使, ces mots portent sur une **hypothèse**, pas sur un fait établi.",
      "**Written** variants of 即使…也…:\n\n• **即便** = \"even if\", formal, very common in the press.\n• **纵然** / **纵使** = \"even though, were it the case that\", more literary, often before an **extreme** hypothesis or **dramatic** concession.\n\nThe second clause keeps **也** (or 仍、还是). Like 即使, they concern a **hypothesis**, not an established fact.",
    ),
    examples: [
      ex("即便搬到郊区，房租也要占工资的一半。", "Jíbiàn bān dào jiāoqū, fángzū yě yào zhàn gōngzī de yíbàn.", "Même en déménageant en banlieue, le loyer engloutit la moitié du salaire.", "Even moving to the suburbs, rent still eats up half your salary."),
      ex("纵然有千难万险，他也不会放弃。", "Zòngrán yǒu qiān nán wàn xiǎn, tā yě bú huì fàngqì.", "Quand bien même il y aurait mille dangers, il n'abandonnerait pas.", "Even in the face of countless dangers, he won't give up."),
      ex("即便是最先进的技术，也无法解决所有问题。", "Jíbiàn shì zuì xiānjìn de jìshù, yě wúfǎ jiějué suǒyǒu wèntí.", "Même la technologie la plus avancée ne peut pas tout résoudre.", "Even the most advanced technology can't solve every problem."),
    ],
    pitfalls: t(
      "✗ 即便…还… sans 也 dans un texte soutenu → ✓ 即便…也….\n✗ 纵然 dans une conversation quotidienne : trop littéraire → ✓ 就算。",
      "✗ 即便… without 也 in formal text → ✓ 即便…也….\n✗ 纵然 in everyday chat: too literary → ✓ 就算。",
    ),
  },
  {
    id: "hsk6-g04",
    level: 6,
    category: C.complex,
    title: t("倘若 / 若 : si (écrit)", "倘若 / 若: if (written)"),
    pattern: "倘若/若 + condition，(S) 则/就 + conséquence",
    explanation: t(
      "**倘若** et **若** sont les équivalents **écrits** de 如果. On les trouve dans les textes juridiques, les éditoriaux, les essais.\n\n• **倘若** : en tête de phrase, souvent suivi d'une hypothèse sérieuse.\n• **若** : très bref, fréquent dans les règlements : **若…，则…** (« si…, alors… »).\n\nLa conséquence est introduite par **就**, **便** ou **则** (plus formel). Les combinaisons **若是**、**如若** existent aussi.",
      "**倘若** and **若** are **written** equivalents of 如果, found in legal texts, editorials and essays.\n\n• **倘若**: sentence-initial, often with a serious hypothesis.\n• **若**: very short, common in regulations: **若…，则…** (\"if…, then…\").\n\nThe consequence is introduced by **就**, **便** or **则** (more formal). **若是**、**如若** also exist.",
    ),
    examples: [
      ex("倘若法律不能保护弱者，社会就难以公平。", "Tǎngruò fǎlǜ bù néng bǎohù ruòzhě, shèhuì jiù nányǐ gōngpíng.", "Si la loi ne peut protéger les faibles, la société peut difficilement être juste.", "If the law can't protect the weak, society can hardly be fair."),
      ex("若违反本规定，则需承担相应的责任。", "Ruò wéifǎn běn guīdìng, zé xū chéngdān xiāngyìng de zérèn.", "En cas de violation du présent règlement, la responsabilité correspondante sera engagée.", "Any breach of these rules will incur the corresponding liability."),
      ex("倘若你当时在场，你会怎么做？", "Tǎngruò nǐ dāngshí zài chǎng, nǐ huì zěnme zuò?", "Si tu avais été présent, qu'aurais-tu fait ?", "If you'd been there at the time, what would you have done?"),
    ],
    pitfalls: t(
      "✗ 若…所以… → ✓ 若…则/就….\n✗ 倘若 entre amis : ✗ 倘若你饿了，我们去吃火锅吧 → ✓ 要是你饿了…",
      "✗ 若…所以… → ✓ 若…则/就….\n✗ 倘若 with friends: ✗ 倘若你饿了，我们去吃火锅吧 → ✓ 要是你饿了…",
    ),
  },
  {
    id: "hsk6-g05",
    level: 6,
    category: C.prep,
    title: t("鉴于 : vu, compte tenu de", "鉴于: in view of, given"),
    pattern: "鉴于 + situation/fait，S + décision/mesure",
    explanation: t(
      "**鉴于** (« considérant que, vu que ») introduit une **situation qui justifie une décision**. Registre **administratif et juridique** : communiqués officiels, jugements, rapports.\n\nIl est suivi d'un groupe nominal ou d'une proposition, toujours **en tête** de phrase ; la principale annonce une **mesure** (决定、规定、建议、有必要…). En français : « Compte tenu de…, il a été décidé… ».",
      "**鉴于** (\"in view of, considering that\") introduces a **situation that justifies a decision**. **Administrative and legal** register: official notices, rulings, reports.\n\nIt takes a noun phrase or clause, always **sentence-initial**; the main clause announces a **measure** (决定、规定、建议、有必要…): \"In view of…, it has been decided…\".",
    ),
    examples: [
      ex("鉴于目前的情况，公司决定推迟上市。", "Jiànyú mùqián de qíngkuàng, gōngsī juédìng tuīchí shàngshì.", "Compte tenu de la situation actuelle, l'entreprise a décidé de reporter son introduction en Bourse.", "In view of the current situation, the company has decided to postpone its IPO."),
      ex("鉴于网络诈骗越来越多，有必要加强相关立法。", "Jiànyú wǎngluò zhàpiàn yuè lái yuè duō, yǒu bìyào jiāqiáng xiāngguān lìfǎ.", "Vu la multiplication des escroqueries en ligne, il est nécessaire de renforcer la législation.", "Given the rise in online fraud, it is necessary to strengthen legislation."),
      ex("鉴于被告认罪态度较好，法院决定从轻处罚。", "Jiànyú bèigào rènzuì tàidu jiào hǎo, fǎyuàn juédìng cóng qīng chǔfá.", "Compte tenu de l'attitude coopérative de l'accusé, le tribunal a décidé d'alléger la peine.", "Given the defendant's good attitude in pleading guilty, the court decided on a lighter sentence."),
    ],
    pitfalls: t(
      "✗ 鉴于 en fin de phrase : ✗ 公司推迟上市，鉴于情况 → ✓ 鉴于…，公司….\n✗ 鉴于 pour une cause banale : ✗ 鉴于我饿了 → ✓ 因为我饿了。",
      "✗ 鉴于 at the end: ✗ 公司推迟上市，鉴于情况 → ✓ 鉴于…，公司….\n✗ 鉴于 for trivial causes: ✗ 鉴于我饿了 → ✓ 因为我饿了。",
    ),
  },
  {
    id: "hsk6-g06",
    level: 6,
    category: C.prep,
    title: t("基于 / 本着 : sur la base de, dans un esprit de", "基于 / 本着: based on, in the spirit of"),
    pattern: "基于 + raison/données，… | 本着 + 原则/精神/态度，…",
    explanation: t(
      "Deux prépositions formelles qui donnent le **fondement** d'une action :\n\n• **基于** = « **sur la base de, en raison de** » : fondement **factuel ou rationnel** (基于以上理由、基于数据分析).\n• **本着** = « **dans un esprit de, conformément à** » : fondement **moral**, un principe ou une attitude (本着公平的原则、本着负责的态度).\n\nLes deux se placent en tête de phrase ou devant le verbe.",
      "Two formal prepositions giving the **basis** of an action:\n\n• **基于** = \"**based on, on the grounds of**\": a **factual or rational** basis (基于以上理由、基于数据分析).\n• **本着** = \"**in the spirit of, in line with**\": a **moral** basis, a principle or attitude (本着公平的原则、本着负责的态度).\n\nBoth go sentence-initially or before the verb.",
    ),
    examples: [
      ex("基于以上理由，我们反对这项法案。", "Jīyú yǐshàng lǐyóu, wǒmen fǎnduì zhè xiàng fǎ'àn.", "Pour les raisons exposées ci-dessus, nous nous opposons à ce projet de loi.", "On the above grounds, we oppose this bill."),
      ex("双方本着平等互利的原则，签订了合同。", "Shuāngfāng běnzhe píngděng hùlì de yuánzé, qiāndìng le hétong.", "Les deux parties ont signé le contrat selon le principe d'égalité et de bénéfice mutuel.", "Both sides signed the contract on the principle of equality and mutual benefit."),
      ex("这个判断是基于大量事实做出的。", "Zhège pànduàn shì jīyú dàliàng shìshí zuò chū de.", "Ce jugement a été rendu sur la base de nombreux faits.", "This judgement was made on the basis of extensive facts."),
    ],
    pitfalls: t(
      "✗ 本着数据 → pour des données ✓ 基于数据 ; 本着 va avec un principe, un esprit.\n✗ 基于 lu *jìyú* : ✓ *jīyú*.",
      "✗ 本着数据 → for data use ✓ 基于数据; 本着 goes with a principle or spirit.\n✗ Reading 基于 as *jìyú*: ✓ *jīyú*.",
    ),
  },
  {
    id: "hsk6-g07",
    level: 6,
    category: C.disc,
    title: t("由此可见 / 可想而知 : on voit par là / on imagine aisément", "由此可见 / 可想而知: from this we see / one can imagine"),
    pattern: "Faits。由此可见，+ conclusion | …，(其…) 可想而知",
    explanation: t(
      "Deux formules de **conclusion argumentative** :\n\n• **由此可见** (« de là on voit que ») : conclusion **logique** tirée d'exemples ou de données. Version renforcée de 可见.\n• **可想而知** (« on peut l'imaginer ») : le résultat est **si évident** qu'il n'a pas besoin d'être détaillé. Il se place souvent **en fin** de phrase : 其困难可想而知.\n\nIndispensables pour structurer une dissertation HSK 6.",
      "Two **argumentative conclusion** formulas:\n\n• **由此可见** (\"from this we can see\"): a **logical** conclusion drawn from examples or data. A strengthened 可见.\n• **可想而知** (\"one can imagine\"): the result is **so obvious** it needs no detail. Often placed **at the end**: 其困难可想而知.\n\nEssential for structuring an HSK 6 essay.",
    ),
    examples: [
      ex("古今中外的思想家都讨论过这个问题，由此可见它的重要性。", "Gǔ jīn zhōng wài de sīxiǎngjiā dōu tǎolùn guo zhège wèntí, yóucǐ kějiàn tā de zhòngyàoxìng.", "Les penseurs de tous les temps et de tous les pays ont débattu de cette question : on voit par là son importance.", "Thinkers of all ages and places have discussed this question, which shows its importance."),
      ex("他一个人照顾三个孩子，其辛苦可想而知。", "Tā yí ge rén zhàogù sān ge háizi, qí xīnkǔ kě xiǎng ér zhī.", "Il élève seul trois enfants : on imagine sans peine combien c'est dur.", "He raises three kids alone — you can imagine how hard it is."),
      ex("由此可见，幸福与财富并没有必然的联系。", "Yóucǐ kějiàn, xìngfú yǔ cáifù bìng méiyǒu bìrán de liánxì.", "On voit donc que le bonheur et la richesse ne sont pas nécessairement liés.", "Thus we can see that happiness and wealth aren't necessarily linked."),
    ],
    pitfalls: t(
      "✗ 由此可见 sans données préalables : il faut des arguments avant.\n✗ 可想而知 en tête sans sujet : ✓ 其结果可想而知 / 结果可想而知。",
      "✗ 由此可见 without prior evidence: arguments must come first.\n✗ 可想而知 needs a topic: ✓ 其结果可想而知 / 结果可想而知。",
    ),
  },
  {
    id: "hsk6-g08",
    level: 6,
    category: C.conj,
    title: t("乃至 / 甚至于 : voire, jusqu'à", "乃至 / 甚至于: and even, up to"),
    pattern: "A、B，乃至 C (échelle la plus large)",
    explanation: t(
      "**乃至** (écrit) marque le **point extrême d'une gradation** : « voire », « et même », « jusqu'à ». Il relie souvent des **échelles** croissantes : 个人、国家乃至全世界 (l'individu, le pays, voire le monde entier).\n\n**甚至于** est une variante un peu plus orale de 甚至. **乃至于** existe aussi. Différence avec 甚至 : 乃至 s'utilise surtout entre **groupes nominaux** et dans un registre soutenu.",
      "**乃至** (written) marks the **extreme end of a scale**: \"and even\", \"up to\", \"not to mention\". It often links **growing scopes**: 个人、国家乃至全世界 (the individual, the nation, even the whole world).\n\n**甚至于** is a slightly more colloquial 甚至; **乃至于** also exists. Versus 甚至: 乃至 is mostly used between **noun phrases** and in formal register.",
    ),
    examples: [
      ex("这场金融危机影响了整个亚洲，乃至全世界。", "Zhè chǎng jīnróng wēijī yǐngxiǎng le zhěnggè Yàzhōu, nǎizhì quán shìjiè.", "Cette crise financière a touché toute l'Asie, voire le monde entier.", "This financial crisis affected all of Asia, and indeed the whole world."),
      ex("一个小小的发明，可能改变一个行业乃至整个社会。", "Yí ge xiǎoxiǎo de fāmíng, kěnéng gǎibiàn yí ge hángyè nǎizhì zhěnggè shèhuì.", "Une petite invention peut transformer une industrie, voire toute la société.", "A tiny invention can change an industry, even society as a whole."),
      ex("他的作品在国内乃至国际上都很有影响。", "Tā de zuòpǐn zài guónèi nǎizhì guójì shang dōu hěn yǒu yǐngxiǎng.", "Son œuvre a une grande influence en Chine et même à l'international.", "His work is influential at home and even internationally."),
    ],
    pitfalls: t(
      "✗ 乃至 vers un élément plus petit : ✗ 全世界乃至中国 → l'ordre doit **monter** : ✓ 中国乃至全世界.\n✗ 乃至 pour relier deux verbes au quotidien : ✓ 甚至 est plus naturel.",
      "✗ 乃至 towards something smaller: ✗ 全世界乃至中国 → the order must **rise**: ✓ 中国乃至全世界.\n✗ Linking everyday verbs: ✓ 甚至 is more natural.",
    ),
  },
  {
    id: "hsk6-g09",
    level: 6,
    category: C.verb,
    title: t("可谓 : on peut dire que, véritablement", "可谓: one may well say, truly"),
    pattern: "S + 可谓 + évaluation (souvent un 成语)",
    explanation: t(
      "**可谓** (« peut être qualifié de ») introduit une **appréciation forte**, souvent un **成语** ou une formule élogieuse. Registre écrit, critique d'art, presse culturelle.\n\nOn le trouve souvent renforcé : **真可谓**、**可谓是**. Il remplace un 是 ou un 可以说 dans un style soutenu : 这部电影可谓经典 (ce film est un véritable classique).",
      "**可谓** (\"may be called\") introduces a **strong appraisal**, often a **成语** or laudatory phrase. Written register: art criticism, culture pages.\n\nOften strengthened as **真可谓**、**可谓是**. It replaces 是 or 可以说 in formal style: 这部电影可谓经典 (this film is a true classic).",
    ),
    examples: [
      ex("这位画家的作品可谓家喻户晓。", "Zhè wèi huàjiā de zuòpǐn kěwèi jiā yù hù xiǎo.", "Les œuvres de ce peintre sont, on peut le dire, connues de tous.", "This painter's works are, one may say, known to every household."),
      ex("他十年只写了一部小说，真可谓十年磨一剑。", "Tā shí nián zhǐ xiě le yí bù xiǎoshuō, zhēn kěwèi shí nián mó yí jiàn.", "Il a mis dix ans à écrire un seul roman : un vrai travail de longue haleine.", "He spent ten years writing one novel — a true case of \"ten years to forge a sword\"."),
      ex("这场演出可谓近年来最成功的一次。", "Zhè chǎng yǎnchū kěwèi jìnnián lái zuì chénggōng de yí cì.", "Ce spectacle est sans doute le plus réussi de ces dernières années.", "This performance was arguably the most successful in recent years."),
    ],
    pitfalls: t(
      "✗ 可谓是是 : un seul 是 au plus.\n✗ 可谓 + fait banal : ✗ 他可谓二十岁 → 可谓 exprime une **évaluation**.",
      "✗ 可谓是是: one 是 at most.\n✗ 可谓 + a plain fact: ✗ 他可谓二十岁 → 可谓 expresses an **evaluation**.",
    ),
  },
  {
    id: "hsk6-g10",
    level: 6,
    category: C.adv,
    title: t("无非 / 不外乎 : ne… rien d'autre que", "无非 / 不外乎: nothing but, no more than"),
    pattern: "S + 无非(是) + X (而已) | 不外乎 + A、B",
    explanation: t(
      "**无非** (« rien d'autre que ») **réduit** quelque chose à l'essentiel, souvent avec une nuance de **banalisation** : « ce n'est jamais que ». Souvent suivi de **是**, et parfois de **而已/罢了** en fin de phrase.\n\n**不外乎** (« ne sort pas de ») fait une **liste fermée** : les possibilités se limitent à A, B, C. Les deux sont écrits et utiles pour résumer une analyse.",
      "**无非** (\"nothing but\") **reduces** something to its essence, often **downplaying** it: \"it's merely\". Often followed by **是**, sometimes with a final **而已/罢了**.\n\n**不外乎** (\"doesn't go beyond\") gives a **closed list**: the options come down to A, B, C. Both are written and useful for summing up an analysis.",
    ),
    examples: [
      ex("人们追求的，无非是幸福和自由。", "Rénmen zhuīqiú de, wúfēi shì xìngfú hé zìyóu.", "Ce que les gens recherchent, ce n'est jamais que le bonheur et la liberté.", "What people pursue is nothing other than happiness and freedom."),
      ex("他说这些话，无非是想让你放心罢了。", "Tā shuō zhèxiē huà, wúfēi shì xiǎng ràng nǐ fàngxīn bà le.", "S'il dit ça, c'est simplement pour te rassurer.", "He's only saying that to put your mind at ease."),
      ex("失败的原因不外乎两个：准备不足和方法不对。", "Shībài de yuányīn bú wàihū liǎng ge: zhǔnbèi bùzú hé fāngfǎ bú duì.", "Les causes de l'échec se résument à deux : une préparation insuffisante et une mauvaise méthode.", "The reasons for failure come down to two: poor preparation and the wrong method."),
    ],
    pitfalls: t(
      "✗ 无非 pour quelque chose d'exceptionnel : il **banalise**.\n✗ 不外乎 + un seul élément vague : il annonce une **liste** fermée.\n✗ 无非 ≠ 并非 (« ce n'est pas du tout »).",
      "✗ 无非 for something exceptional: it **downplays**.\n✗ 不外乎 + one vague item: it announces a closed **list**.\n✗ 无非 ≠ 并非 (\"is by no means\").",
    ),
  },
  {
    id: "hsk6-g11",
    level: 6,
    category: C.adv,
    title: t("未尝 / 何尝 : il n'est pas exclu que / n'est-ce pas que…", "未尝 / 何尝: not necessarily not / how could… not"),
    pattern: "未尝不 + V (= peut très bien) | 何尝 + (不) + V ？(question rhétorique)",
    explanation: t(
      "Deux mots classiques pour des **affirmations atténuées ou indirectes** :\n\n• **未尝不** (« n'a jamais pas ») = **double négation** polie : « il n'est pas exclu que », « on pourrait très bien ». 这未尝不是一件好事 = c'est peut-être bien une bonne chose.\n• **何尝** (« quand donc… ? ») = **question rhétorique** qui **nie** : 我何尝不想去？ = « Tu crois que je n'ai pas envie d'y aller ? » (= j'en ai très envie). 我何尝说过？ = je ne l'ai jamais dit !\n\nC'est l'art de dire les choses **sans les dire frontalement**, très apprécié en chinois soutenu.",
      "Two classical words for **softened or indirect statements**:\n\n• **未尝不** (\"has never not\") = polite **double negative**: \"it may well be\", \"it's not out of the question\". 这未尝不是一件好事 = this might well be a good thing.\n• **何尝** (\"when ever…?\") = **rhetorical question** that **denies**: 我何尝不想去？ = \"Do you think I don't want to go?\" (= I really do). 我何尝说过？ = I never said that!\n\nIt's the art of saying things **without saying them head-on**, prized in formal Chinese.",
    ),
    examples: [
      ex("失败未尝不是一种收获。", "Shībài wèicháng bú shì yì zhǒng shōuhuò.", "L'échec peut très bien être, lui aussi, une forme de gain.", "Failure may well be a kind of gain too."),
      ex("我何尝不想休息？可是工作太多了。", "Wǒ hécháng bù xiǎng xiūxi? Kěshì gōngzuò tài duō le.", "Tu crois que je n'ai pas envie de me reposer ? Mais j'ai trop de travail.", "Don't you think I'd like a rest? There's just too much work."),
      ex("换一个角度看，这未尝不是一个机会。", "Huàn yí ge jiǎodù kàn, zhè wèicháng bú shì yí ge jīhuì.", "Vu sous un autre angle, c'est peut-être bien une opportunité.", "Seen from another angle, this might well be an opportunity."),
    ],
    pitfalls: t(
      "✗ Lire 未尝不 comme une négation : c'est une **affirmation prudente**.\n✗ 何尝 + réponse attendue : c'est rhétorique, le sens est l'inverse de la forme.",
      "✗ Reading 未尝不 as a negation: it's a **cautious affirmation**.\n✗ Treating 何尝 as a real question: it's rhetorical; the meaning is the opposite of the form.",
    ),
  },
  {
    id: "hsk6-g12",
    level: 6,
    category: C.special,
    title: t("岂 / 岂不是 : n'est-ce pas… ?", "岂 / 岂不是: wouldn't it be…?"),
    pattern: "岂 + V/Adj ？ | 这样岂不是 + conséquence ？",
    explanation: t(
      "**岂** est un **adverbe interrogatif classique** qui forme des **questions rhétoriques** : 岂能 (comment pourrait-on), 岂敢 (comment oserais-je), 岂有此理 (c'est absurde !).\n\n**岂不是** (« ne serait-ce pas… ? ») sert à montrer une **conséquence absurde ou évidente** : 这样做岂不是浪费时间？ = « Ce serait une perte de temps, non ? ». L'équivalent oral est **那不是…吗？**.",
      "**岂** is a **classical interrogative adverb** forming **rhetorical questions**: 岂能 (how could one), 岂敢 (how would I dare), 岂有此理 (that's outrageous!).\n\n**岂不是** (\"wouldn't it be…?\") exposes an **absurd or obvious consequence**: 这样做岂不是浪费时间？ = \"Wouldn't that be a waste of time?\". The spoken equivalent is **那不是…吗？**.",
    ),
    examples: [
      ex("如果人人都只考虑自己，社会岂不是乱了套？", "Rúguǒ rénrén dōu zhǐ kǎolǜ zìjǐ, shèhuì qǐ bú shì luàn le tào?", "Si chacun ne pensait qu'à soi, la société ne tomberait-elle pas dans le chaos ?", "If everyone only thought of themselves, wouldn't society fall into chaos?"),
      ex("做人岂能只看眼前的利益？", "Zuò rén qǐ néng zhǐ kàn yǎnqián de lìyì?", "Comment pourrait-on, dans la vie, ne voir que son intérêt immédiat ?", "How can one only look at immediate interests in life?"),
      ex("你现在放弃，以前的努力岂不是白费了？", "Nǐ xiànzài fàngqì, yǐqián de nǔlì qǐ bú shì báifèi le?", "Si tu abandonnes maintenant, tous tes efforts n'auront-ils pas été vains ?", "If you give up now, wouldn't all your past effort be wasted?"),
    ],
    pitfalls: t(
      "✗ Répondre à 岂不是… comme à une vraie question.\n✗ 岂 à l'oral familier sonne pédant → ✓ 那不是…吗？/ 怎么能…？",
      "✗ Answering 岂不是… as a real question.\n✗ 岂 in casual speech sounds pedantic → ✓ 那不是…吗？/ 怎么能…？",
    ),
  },
  {
    id: "hsk6-g13",
    level: 6,
    category: C.adv,
    title: t("莫非 : se pourrait-il que… ?", "莫非: could it be that…?"),
    pattern: "莫非 + hypothèse + (不成/吗)？",
    explanation: t(
      "**莫非** exprime une **supposition surprise ou inquiète** sous forme de question : « Se pourrait-il que… ? », « Ne serait-ce pas que… ? ». Le locuteur soupçonne une explication inattendue.\n\nOn le termine souvent par **吗** ou par **不成** (plus littéraire) : 莫非他生病了不成？ Proche de **难道**, mais 难道 = reproche/évidence, **莫非** = **hypothèse** sincère.",
      "**莫非** expresses a **surprised or worried guess** in question form: \"Could it be that…?\", \"Don't tell me…?\". The speaker suspects an unexpected explanation.\n\nIt often ends with **吗** or **不成** (more literary): 莫非他生病了不成？ Close to **难道**, but 难道 = reproach/obviousness, **莫非** = a genuine **hypothesis**.",
    ),
    examples: [
      ex("他今天一句话也没说，莫非有什么心事？", "Tā jīntiān yí jù huà yě méi shuō, mòfēi yǒu shénme xīnshì?", "Il n'a pas dit un mot aujourd'hui : aurait-il quelque chose qui le tracasse ?", "He hasn't said a word today — could something be bothering him?"),
      ex("莫非人生本来就没有标准答案？", "Mòfēi rénshēng běnlái jiù méiyǒu biāozhǔn dá'àn?", "Se pourrait-il que la vie n'ait tout simplement pas de réponse toute faite ?", "Could it be that life simply has no standard answer?"),
      ex("门开着，灯也亮着，莫非有人来过不成？", "Mén kāi zhe, dēng yě liàng zhe, mòfēi yǒu rén lái guo bùchéng?", "La porte est ouverte, la lumière allumée… quelqu'un serait-il venu ?", "The door's open and the light's on — could someone have been here?"),
    ],
    pitfalls: t(
      "✗ 莫非 comme reproche : ✗ 莫非你不知道？ (pour « tu le sais bien ! ») → ✓ 难道你不知道？\n✗ Oublier la forme interrogative : 莫非 exige une **question**.",
      "✗ 莫非 as a reproach: ✗ 莫非你不知道？ (meaning \"surely you know!\") → ✓ 难道你不知道？\n✗ Dropping the question form: 莫非 requires a **question**.",
    ),
  },
  {
    id: "hsk6-g14",
    level: 6,
    category: C.fixed,
    title: t("非…莫属 : revenir de droit à…", "非…莫属: belongs to none but…"),
    pattern: "(titre/rôle)，非 + N + 莫属",
    explanation: t(
      "**非 N 莫属** (« si ce n'est pas N, personne d'autre ne peut l'avoir ») signifie que **seul N mérite** ce titre, ce rôle ou cette place. En français : « revient de droit à », « ne peut être que ».\n\nStructure classique figée : le sujet thématique (le prix, la place, le meilleur…) vient d'abord, puis **非…莫属**. Très utilisé dans la critique d'art et le sport.",
      "**非 N 莫属** (\"if not N, it belongs to no one\") means **only N deserves** a title, role or place: \"is N's by right\", \"can only be N\".\n\nFixed classical structure: the topic (the prize, the place, the best…) comes first, then **非…莫属**. Much used in art criticism and sport.",
    ),
    examples: [
      ex("要说中国最有名的画家，非齐白石莫属。", "Yào shuō Zhōngguó zuì yǒumíng de huàjiā, fēi Qí Báishí mòshǔ.", "S'il faut nommer le peintre chinois le plus célèbre, c'est Qi Baishi, sans conteste.", "If you're naming China's most famous painter, it can only be Qi Baishi."),
      ex("今年的最佳导演奖，非她莫属。", "Jīnnián de zuì jiā dǎoyǎn jiǎng, fēi tā mòshǔ.", "Le prix de la meilleure réalisatrice cette année lui revient de droit.", "This year's best director award can only go to her."),
      ex("论书法水平，全校第一非他莫属。", "Lùn shūfǎ shuǐpíng, quán xiào dì-yī fēi tā mòshǔ.", "En calligraphie, la première place de l'école ne peut être que la sienne.", "In calligraphy, he's the undisputed best in the school."),
    ],
    pitfalls: t(
      "✗ 非…莫属 avec un sujet agent : ✗ 他非第一莫属 → ✓ 第一非他莫属 (le titre d'abord, la personne dans 非…莫属).\n✗ Confondre avec 非…不可 (« il faut absolument »).",
      "✗ With the person as subject: ✗ 他非第一莫属 → ✓ 第一非他莫属 (title first, person inside 非…莫属).\n✗ Confusing it with 非…不可 (\"absolutely must\").",
    ),
  },
  {
    id: "hsk6-g15",
    level: 6,
    category: C.prep,
    title: t("与…相比 / 相对于 : comparé à", "与…相比 / 相对于: compared with"),
    pattern: "与 + N + 相比，… | 相对于 + N (而言)，…",
    explanation: t(
      "Formules **écrites** de comparaison, plus souples que 比 :\n\n• **与/和/跟 + N + 相比** (« comparé à ») : en tête de phrase, puis on énonce la différence. Pas besoin de répéter la structure 比.\n• **相对于…(而言/来说)** (« par rapport à ») : insiste sur le **caractère relatif** du jugement.\n\nDans la principale, on emploie souvent **更、较、明显** ou des verbes en **于** (高于、低于).",
      "**Written** comparison formulas, more flexible than 比:\n\n• **与/和/跟 + N + 相比** (\"compared with\"): sentence-initial, then state the difference. No need for 比.\n• **相对于…(而言/来说)** (\"relative to\"): stresses that the judgement is **relative**.\n\nThe main clause often uses **更、较、明显** or 于-verbs (高于、低于).",
    ),
    examples: [
      ex("与二十年前相比，中国的城市化水平大大提高了。", "Yǔ èrshí nián qián xiāngbǐ, Zhōngguó de chéngshìhuà shuǐpíng dàdà tígāo le.", "Par rapport à il y a vingt ans, le taux d'urbanisation de la Chine a fortement augmenté.", "Compared with twenty years ago, China's urbanisation rate has risen sharply."),
      ex("相对于发达国家而言，这里的劳动力成本较低。", "Xiāngduì yú fādá guójiā ér yán, zhèlǐ de láodònglì chéngběn jiào dī.", "Par rapport aux pays développés, le coût de la main-d'œuvre est ici plus faible.", "Relative to developed countries, labour costs here are lower."),
      ex("和实体店相比，网购更方便，但也有风险。", "Hé shítǐdiàn xiāngbǐ, wǎnggòu gèng fāngbiàn, dàn yě yǒu fēngxiǎn.", "Comparés aux magasins physiques, les achats en ligne sont plus pratiques, mais comportent aussi des risques.", "Compared with physical stores, online shopping is more convenient but also riskier."),
    ],
    pitfalls: t(
      "✗ 与去年相比，今年比去年高 : redondant → ✓ 与去年相比，今年高了很多。\n✗ 与…比较 est possible, mais ✗ 与…相比较起来了 : trop chargé.",
      "✗ 与去年相比，今年比去年高: redundant → ✓ 与去年相比，今年高了很多。\n✗ Over-stacking: keep it to 与…相比.",
    ),
  },
  {
    id: "hsk6-g16",
    level: 6,
    category: C.fixed,
    title: t("以…而… / 因…而… : grâce à… / à cause de…", "以…而… / 因…而…: known for… / because of…"),
    pattern: "以 + N + 而 + 闻名/著称 | 因 + N + 而 + V",
    explanation: t(
      "Deux structures **écrites** où **而** relie une cause/un moyen au verbe :\n\n• **以 + N + 而 + 闻名/著称/自豪** : « être célèbre **pour** N » : 杭州以西湖而闻名.\n• **因 + N + 而 + V** : « V **à cause de** N » : 因病而缺席 (absent pour cause de maladie), 因人而异 (varier selon les personnes).\n• Aussi **为…而…** : « V **pour** (but) » : 为理想而奋斗.\n\nIci **而** ne signifie pas « mais » : c'est un **lien** entre le complément et le verbe, typique du chinois classique.",
      "Two **written** structures where **而** links a cause/means to the verb:\n\n• **以 + N + 而 + 闻名/著称/自豪**: \"be famous **for** N\": 杭州以西湖而闻名.\n• **因 + N + 而 + V**: \"V **because of** N\": 因病而缺席 (absent due to illness), 因人而异 (vary from person to person).\n• Also **为…而…**: \"V **for** (a goal)\": 为理想而奋斗.\n\nHere **而** doesn't mean \"but\": it's a **link** between the adverbial and the verb, typical of classical Chinese.",
    ),
    examples: [
      ex("景德镇以瓷器而闻名世界。", "Jǐngdézhèn yǐ cíqì ér wénmíng shìjiè.", "Jingdezhen est célèbre dans le monde entier pour sa porcelaine.", "Jingdezhen is world-famous for its porcelain."),
      ex("艺术的价值往往因人而异。", "Yìshù de jiàzhí wǎngwǎng yīn rén ér yì.", "La valeur de l'art varie souvent d'une personne à l'autre.", "The value of art often varies from person to person."),
      ex("他为艺术而放弃了稳定的工作。", "Tā wèi yìshù ér fàngqì le wěndìng de gōngzuò.", "Il a renoncé à un emploi stable pour l'art.", "He gave up a stable job for the sake of art."),
    ],
    pitfalls: t(
      "✗ Traduire ce 而 par « mais » : ici il relie cause/moyen et verbe.\n✗ 以西湖闻名而 → ✓ 以西湖而闻名 (而 juste **devant** le verbe).",
      "✗ Translating this 而 as \"but\": here it links cause/means and verb.\n✗ 以西湖闻名而 → ✓ 以西湖而闻名 (而 right **before** the verb).",
    ),
  },
  {
    id: "hsk6-g17",
    level: 6,
    category: C.conj,
    title: t("则 : quant à, alors (contraste / conséquence)", "则: whereas, then (contrast / consequence)"),
    pattern: "A…，B 则… (contraste) | 若…，则… (condition) | …则… (dans ce cas)",
    explanation: t(
      "**则** est un connecteur écrit très polyvalent :\n\n1. **Contraste** entre deux sujets : « A…, alors que B… » : 北方干燥，南方则潮湿. 则 se place **après le second sujet**.\n2. **Conséquence d'une condition** : **若/如果…，则…** = « si…, alors… ».\n3. Nom : **规则、原则** (règle, principe) — ne pas confondre.\n\nIl remplace souvent 却 (contraste) ou 就 (conséquence) à l'écrit.",
      "**则** is a very versatile written connector:\n\n1. **Contrast** between two subjects: \"A…, whereas B…\": 北方干燥，南方则潮湿. 则 goes **after the second subject**.\n2. **Consequence of a condition**: **若/如果…，则…** = \"if…, then…\".\n3. In nouns: **规则、原则** (rule, principle) — don't confuse.\n\nIn writing it often replaces 却 (contrast) or 就 (consequence).",
    ),
    examples: [
      ex("老城区人口越来越少，新区则发展得很快。", "Lǎo chéngqū rénkǒu yuè lái yuè shǎo, xīnqū zé fāzhǎn de hěn kuài.", "Les vieux quartiers se dépeuplent, tandis que les nouveaux se développent très vite.", "The old districts are losing people, whereas the new ones are growing fast."),
      ex("若交通问题得不到解决，则城市的发展会受到限制。", "Ruò jiāotōng wèntí dé bu dào jiějué, zé chéngshì de fāzhǎn huì shòudào xiànzhì.", "Si les problèmes de circulation ne sont pas résolus, alors le développement urbain sera freiné.", "If traffic problems aren't solved, urban development will be held back."),
      ex("有人喜欢热闹的大城市，我则更喜欢安静的小镇。", "Yǒu rén xǐhuan rènao de dà chéngshì, wǒ zé gèng xǐhuan ānjìng de xiǎozhèn.", "Certains aiment les grandes villes animées ; moi, je préfère les petites villes tranquilles.", "Some love lively big cities; I, on the other hand, prefer quiet small towns."),
    ],
    pitfalls: t(
      "✗ 则 avant le sujet : ✗ 则南方潮湿 → ✓ 南方则潮湿.\n✗ 则 à l'oral : sonne écrit → ✓ 却 / 就 / 而.",
      "✗ 则 before the subject: ✗ 则南方潮湿 → ✓ 南方则潮湿.\n✗ 则 in speech sounds bookish → ✓ 却 / 就 / 而.",
    ),
  },
  {
    id: "hsk6-g18",
    level: 6,
    category: C.adv,
    title: t("皆 / 均 / 亦 : tous / uniformément / aussi (écrit)", "皆 / 均 / 亦: all / equally / also (written)"),
    pattern: "S + 皆/均 + V (= 都) | S + 亦 + V (= 也)",
    explanation: t(
      "Adverbes **monosyllabiques d'origine classique**, très fréquents dans les textes soutenus, les 成语 et les panneaux :\n\n• **皆** = 都 (« tous ») : 人人皆知 (tout le monde le sait), 皆大欢喜.\n• **均** = 都 avec une idée d'**uniformité** : 各项指标均达到标准 (tous les indicateurs sont aux normes).\n• **亦** = 也 (« aussi ») : 亦是如此 (il en va de même).\n\nIls se placent comme leurs équivalents modernes : **après le sujet, devant le verbe**.",
      "**Monosyllabic adverbs of classical origin**, very frequent in formal texts, 成语 and signs:\n\n• **皆** = 都 (\"all\"): 人人皆知 (everyone knows), 皆大欢喜.\n• **均** = 都 with a sense of **uniformity**: 各项指标均达到标准 (all indicators meet the standard).\n• **亦** = 也 (\"also\"): 亦是如此 (the same holds).\n\nThey sit where their modern equivalents do: **after the subject, before the verb**.",
    ),
    examples: [
      ex("这位诗人的名字，在中国可谓人人皆知。", "Zhè wèi shīrén de míngzi, zài Zhōngguó kěwèi rénrén jiē zhī.", "Le nom de ce poète est, en Chine, connu de tous.", "This poet's name is known to everyone in China."),
      ex("展出的作品均来自民间艺术家。", "Zhǎnchū de zuòpǐn jūn láizì mínjiān yìshùjiā.", "Toutes les œuvres exposées proviennent d'artistes populaires.", "All the works on display come from folk artists."),
      ex("音乐如此，绘画亦是如此。", "Yīnyuè rúcǐ, huìhuà yì shì rúcǐ.", "Il en va ainsi de la musique, et il en va de même pour la peinture.", "So it is with music, and so it is with painting too."),
    ],
    pitfalls: t(
      "✗ 皆 / 亦 dans une phrase orale : ✗ 我们皆去吃饭吧 → ✓ 我们都去吃饭吧.\n✗ 均 comme adjectif « moyen » seul : ✓ 平均 (moyenne).",
      "✗ 皆 / 亦 in casual speech: ✗ 我们皆去吃饭吧 → ✓ 我们都去吃饭吧.\n✗ 均 alone for \"average\": ✓ 平均.",
    ),
  },
  {
    id: "hsk6-g19",
    level: 6,
    category: C.verb,
    title: t("乃 / 即 : c'est, à savoir (copule écrite)", "乃 / 即: is, namely (written copula)"),
    pattern: "A + 乃 + B (= A 是 B) | A，即 B (= c'est-à-dire)",
    explanation: t(
      "Deux copules **classiques** qui remplacent 是 à l'écrit :\n\n• **乃** = « est (vraiment) », avec une nuance d'**affirmation solennelle** : 失败乃成功之母 (l'échec est la mère du succès).\n• **即** = « c'est-à-dire, à savoir, soit » : sert à **définir** ou **préciser** : 知行合一，即认识和实践相统一.\n\nOn trouve aussi **即是**、**乃是**. Ces formes sont typiques des textes philosophiques et des maximes.",
      "Two **classical** copulas replacing 是 in writing:\n\n• **乃** = \"is (truly)\", with **solemn affirmation**: 失败乃成功之母 (failure is the mother of success).\n• **即** = \"that is, namely\": used to **define** or **specify**: 知行合一，即认识和实践相统一.\n\nAlso **即是**、**乃是**. Typical of philosophical texts and maxims.",
    ),
    examples: [
      ex("失败乃成功之母。", "Shībài nǎi chénggōng zhī mǔ.", "L'échec est la mère du succès.", "Failure is the mother of success."),
      ex("“知行合一”，即认识和行动要统一。", "“Zhī xíng hé yī”, jí rènshi hé xíngdòng yào tǒngyī.", "« L'unité du savoir et de l'action », c'est-à-dire que la connaissance et l'action doivent aller de pair.", "\"Unity of knowledge and action\" — that is, understanding and action must be one."),
      ex("孔子乃中国历史上最有影响的思想家之一。", "Kǒngzǐ nǎi Zhōngguó lìshǐ shang zuì yǒu yǐngxiǎng de sīxiǎngjiā zhī yī.", "Confucius est l'un des penseurs les plus influents de l'histoire chinoise.", "Confucius is one of the most influential thinkers in Chinese history."),
    ],
    pitfalls: t(
      "✗ 乃 dans une présentation banale : ✗ 我乃学生 (ironique, façon film de cape et d'épée) → ✓ 我是学生.\n✗ Confondre 即 (c'est-à-dire) et 既 (puisque / à la fois).",
      "✗ 乃 in plain self-introduction: ✗ 我乃学生 (sounds like a martial-arts film) → ✓ 我是学生.\n✗ Confusing 即 (namely) with 既 (since / both).",
    ),
  },
  {
    id: "hsk6-g20",
    level: 6,
    category: C.verb,
    title: t("在于 / 取决于 : résider dans / dépendre de", "在于 / 取决于: lie in / depend on"),
    pattern: "A + 在于 + B (essence/cause) | A + 取决于 + B (facteur)",
    explanation: t(
      "Deux verbes clés de l'**analyse** :\n\n• **在于** = « **réside dans, tient à** » : désigne l'**essence** ou la **cause principale** : 问题的关键在于… (le cœur du problème, c'est…). Il peut aussi signifier « dépend de » : 去不去在于你.\n• **取决于** = « **dépend de** » : désigne le **facteur déterminant** : 结果取决于数据的质量.\n\nLes deux sont suivis d'un groupe nominal ou d'une proposition, et s'emploient beaucoup dans les débats et dissertations.",
      "Two key verbs for **analysis**:\n\n• **在于** = \"**lies in, consists in**\": names the **essence** or **main cause**: 问题的关键在于… (the crux is…). It can also mean \"is up to\": 去不去在于你.\n• **取决于** = \"**depends on**\": names the **deciding factor**: 结果取决于数据的质量.\n\nBoth take a noun phrase or clause, and are staples of debates and essays.",
    ),
    examples: [
      ex("人工智能的价值在于帮助人，而不是代替人。", "Réngōng zhìnéng de jiàzhí zàiyú bāngzhù rén, ér bú shì dàitì rén.", "La valeur de l'IA tient à ce qu'elle aide les humains, non à ce qu'elle les remplace.", "The value of AI lies in helping people, not replacing them."),
      ex("模型的表现很大程度上取决于训练数据。", "Móxíng de biǎoxiàn hěn dà chéngdù shang qǔjué yú xùnliàn shùjù.", "Les performances du modèle dépendent en grande partie des données d'entraînement.", "The model's performance largely depends on its training data."),
      ex("成功与否，取决于你是否坚持。", "Chénggōng yǔ fǒu, qǔjué yú nǐ shìfǒu jiānchí.", "Réussir ou non dépend de ta persévérance.", "Whether you succeed depends on whether you persevere."),
    ],
    pitfalls: t(
      "✗ 取决在 → ✓ 取决于.\n✗ 在于 + 了 : ✗ 问题在于了… → pas d'aspect après 在于.\n✗ Lire 取决于 *qǔjuè* : ✓ *qǔjué*.",
      "✗ 取决在 → ✓ 取决于.\n✗ 在于 + 了: ✗ 问题在于了… → no aspect marker after 在于.\n✗ Reading 取决于 as *qǔjuè*: ✓ *qǔjué*.",
    ),
  },
  {
    id: "hsk6-g21",
    level: 6,
    category: C.special,
    title: t("不无 / 不可不 / 无不 : doubles négations écrites", "不无 / 不可不 / 无不: written double negatives"),
    pattern: "不无 + N (= 有一些) | 不可不 + V (= 一定要) | 无不 + V (= 都)",
    explanation: t(
      "Le chinois soutenu aime les **doubles négations** pour nuancer ou renforcer :\n\n• **不无 + N** (« pas sans ») = il y a **un peu de** : 不无道理 (pas dénué de sens), 不无遗憾 (non sans regret). → **atténue**.\n• **不可不 + V** (« ne pas pouvoir ne pas ») = il **faut absolument** : 不可不防 (il faut s'en prémunir). → **renforce**.\n• **无不 + V** (« aucun qui ne… ») = **tous sans exception** : 听众无不感动 (tout le public a été ému). → **renforce**.\n\nPense à « non sans », « on ne saurait ne pas » en français.",
      "Formal Chinese loves **double negatives** to nuance or strengthen:\n\n• **不无 + N** (\"not without\") = **some**: 不无道理 (not without reason), 不无遗憾 (not without regret). → **softens**.\n• **不可不 + V** (\"cannot not\") = **must**: 不可不防 (you must guard against it). → **strengthens**.\n• **无不 + V** (\"none who doesn't\") = **all without exception**: 听众无不感动 (the whole audience was moved). → **strengthens**.\n\nThink of English \"not without\", \"one cannot fail to\".",
    ),
    examples: [
      ex("他的批评虽然尖锐，但不无道理。", "Tā de pīpíng suīrán jiānruì, dàn bù wú dàolǐ.", "Sa critique est acerbe, mais pas dénuée de fondement.", "His criticism is sharp, but not without merit."),
      ex("网络上的个人信息安全问题，不可不重视。", "Wǎngluò shang de gèrén xìnxī ānquán wèntí, bù kě bù zhòngshì.", "On ne saurait négliger la sécurité des données personnelles en ligne.", "Online personal data security is something we cannot fail to take seriously."),
      ex("听了这个判决，在场的人无不感到意外。", "Tīng le zhège pànjué, zài chǎng de rén wú bù gǎndào yìwài.", "En entendant ce verdict, toutes les personnes présentes ont été surprises.", "Hearing the verdict, everyone present was surprised."),
    ],
    pitfalls: t(
      "✗ Lire 不无道理 comme « aucun sens » : c'est l'inverse, « un certain sens ».\n✗ 无不 + négation : ✗ 无不不感动 → une seule double négation suffit.",
      "✗ Reading 不无道理 as \"no sense\": it's the opposite, \"some sense\".\n✗ 无不 + another negation: ✗ 无不不感动 → one double negative is enough.",
    ),
  },
  {
    id: "hsk6-g22",
    level: 6,
    category: C.conj,
    title: t("以便 : afin de, pour que", "以便: so that, in order to"),
    pattern: "Action，以便 + but (facilité)",
    explanation: t(
      "**以便** introduit le **but** d'une action, avec l'idée de **faciliter** quelque chose : « afin de », « de façon à pouvoir ». Registre écrit (notices, consignes, rapports).\n\nIl se place **en tête de la seconde proposition**. C'est le **contraire logique de 以免** : 以便 + ce qu'on veut **rendre possible** ; 以免 + ce qu'on veut **éviter**.",
      "**以便** introduces the **purpose** of an action, with the idea of **making something easier**: \"so that\", \"in order to\". Written register (instructions, notices, reports).\n\nIt opens the **second clause**. It's the **logical opposite of 以免**: 以便 + what you want to **make possible**; 以免 + what you want to **avoid**.",
    ),
    examples: [
      ex("请保存好您的数据，以便日后查询。", "Qǐng bǎocún hǎo nín de shùjù, yǐbiàn rìhòu cháxún.", "Veuillez conserver vos données afin de pouvoir les consulter ultérieurement.", "Please keep your data so it can be consulted later."),
      ex("研究人员公开了代码，以便其他人检验结果。", "Yánjiū rényuán gōngkāi le dàimǎ, yǐbiàn qítā rén jiǎnyàn jiéguǒ.", "Les chercheurs ont publié le code pour que d'autres puissent vérifier les résultats.", "The researchers released the code so that others could verify the results."),
      ex("系统每天自动备份，以便出现故障时迅速恢复。", "Xìtǒng měi tiān zìdòng bèifèn, yǐbiàn chūxiàn gùzhàng shí xùnsù huīfù.", "Le système se sauvegarde chaque jour, afin de pouvoir être restauré rapidement en cas de panne.", "The system backs up daily so it can be restored quickly after a failure."),
    ],
    pitfalls: t(
      "✗ 以便 + conséquence à éviter : ✗ 早点出发，以便迟到 → ✓ 以免迟到。\n✗ 以便 en tête de phrase : ✗ 以便查询，请保存 → ✓ 请保存…，以便查询 (ou ✓ 为了便于查询，请…).",
      "✗ 以便 + an outcome to avoid: ✗ 早点出发，以便迟到 → ✓ 以免迟到。\n✗ 以便 sentence-initially: ✗ 以便查询，请保存 → ✓ 请保存…，以便查询 (or ✓ 为了便于查询，请…).",
    ),
  },
  {
    id: "hsk6-g23",
    level: 6,
    category: C.complex,
    title: t("一经…便/就… : dès que, une fois que", "一经…便/就…: once, as soon as"),
    pattern: "一经 + V (bisyllabique)，便/就 + conséquence",
    explanation: t(
      "**一经** (« dès qu'il a été… ») indique que **dès qu'une action a eu lieu**, un résultat suit **immédiatement et automatiquement**. Registre écrit : règlements, communiqués, presse.\n\nLe verbe après 一经 est souvent **passif de sens** et **bisyllabique** : 发现、发布、推出、确认、查实. La seconde partie contient **便** ou **就**. Exemple typique : **一经发现，立即处理** (« toute infraction constatée sera immédiatement sanctionnée »).",
      "**一经** (\"as soon as it has been…\") means that **once an action happens**, a result follows **immediately and automatically**. Written register: regulations, notices, press.\n\nThe verb after 一经 is often **passive in meaning** and **disyllabic**: 发现、发布、推出、确认、查实. The second part has **便** or **就**. Typical: **一经发现，立即处理** (\"any violation will be dealt with immediately\").",
    ),
    examples: [
      ex("这款手机一经推出，便受到了年轻人的欢迎。", "Zhè kuǎn shǒujī yìjīng tuīchū, biàn shòudào le niánqīngrén de huānyíng.", "Dès sa sortie, ce téléphone a séduit les jeunes.", "As soon as it was launched, this phone was a hit with young people."),
      ex("虚假信息一经发现，平台就会立即删除。", "Xūjiǎ xìnxī yìjīng fāxiàn, píngtái jiù huì lìjí shānchú.", "Toute fausse information est supprimée immédiatement par la plateforme dès qu'elle est repérée.", "Once false information is found, the platform deletes it immediately."),
      ex("合同一经签订，双方都必须遵守。", "Hétong yìjīng qiāndìng, shuāngfāng dōu bìxū zūnshǒu.", "Une fois le contrat signé, les deux parties doivent le respecter.", "Once signed, the contract binds both parties."),
    ],
    pitfalls: t(
      "✗ 一经 pour une habitude : ✗ 我一经下班就回家 → ✓ 我一下班就回家。\n✗ 一经 + monosyllabe courant : ✗ 一经看 → ✓ 一经发现 / 一经使用。",
      "✗ 一经 for a routine: ✗ 我一经下班就回家 → ✓ 我一下班就回家。\n✗ 一经 + common monosyllable: ✗ 一经看 → ✓ 一经发现 / 一经使用。",
    ),
  },
  {
    id: "hsk6-g24",
    level: 6,
    category: C.conj,
    title: t("连同 / 及其 : ainsi que, avec ses…", "连同 / 及其: together with, and its…"),
    pattern: "A + 连同 + B + (一起/一并) + V | N1 + 及其 + N2 (= N1 和 N1 的 N2)",
    explanation: t(
      "Deux connecteurs **écrits** pour regrouper des éléments :\n\n• **连同** = « **ainsi que, en même temps que** » : B est traité **avec** A, souvent suivi de **一起/一并** : 旧房子连同家具一起卖掉了.\n• **及其** = **及 + 其** = « **et son/sa/ses** » : 城市及其周边 (la ville et ses environs), 员工及其家属 (les employés et leurs familles).\n\n及其 évite de répéter le nom : très économique à l'écrit.",
      "Two **written** connectors to group items:\n\n• **连同** = \"**together with, along with**\": B is handled **with** A, often followed by **一起/一并**: 旧房子连同家具一起卖掉了.\n• **及其** = **及 + 其** = \"**and its/their**\": 城市及其周边 (the city and its surroundings), 员工及其家属 (employees and their families).\n\n及其 avoids repeating the noun — very economical in writing.",
    ),
    examples: [
      ex("老房子连同院子里的大树，都被拆掉了。", "Lǎo fángzi liántóng yuànzi lǐ de dà shù, dōu bèi chāi diào le.", "La vieille maison a été démolie, ainsi que le grand arbre de la cour.", "The old house was demolished, along with the big tree in the courtyard."),
      ex("这项政策适用于农民工及其子女。", "Zhè xiàng zhèngcè shìyòng yú nóngmíngōng jí qí zǐnǚ.", "Cette politique s'applique aux travailleurs migrants et à leurs enfants.", "This policy applies to migrant workers and their children."),
      ex("请将申请表连同身份证复印件一并交上来。", "Qǐng jiāng shēnqǐngbiǎo liántóng shēnfènzhèng fùyìnjiàn yíbìng jiāo shànglái.", "Veuillez remettre le formulaire accompagné d'une copie de votre pièce d'identité.", "Please submit the application form together with a copy of your ID card."),
    ],
    pitfalls: t(
      "✗ 城市及它的周边 → ✓ 城市及其周边 (其 = son/leur, écrit).\n✗ 及其 entre deux éléments sans lien de possession : ✗ 老师及其学生 est correct (« et ses élèves ») ; ✗ 苹果及其香蕉 non.",
      "✗ 城市及它的周边 → ✓ 城市及其周边 (其 = its/their, written).\n✗ 及其 without a possessive link: ✓ 老师及其学生 (\"and his/her students\"), but ✗ 苹果及其香蕉.",
    ),
  },
  {
    id: "hsk6-g25",
    level: 6,
    category: C.style,
    title: t("何以 / 何在 : pourquoi / où est… (interrogatifs classiques)", "何以 / 何在: why / where is… (classical interrogatives)"),
    pattern: "S + 何以 + V ？ | N + 何在 ？",
    explanation: t(
      "Le classique **何** (« quoi, quel ») survit dans des interrogatifs **écrits** très utilisés en titre ou en question rhétorique :\n\n• **何以** = « **pourquoi, comment se fait-il que** » (= 为什么/凭什么) : 何以见得？(qu'est-ce qui te fait dire ça ?).\n• **何在** = « **où est, en quoi consiste** » (= 在哪里) : 意义何在？(quel en est le sens ?), 原因何在？\n\nAussi : **何时** (quand), **何处** (où), **何为** (qu'est-ce que). Ils donnent un ton **réflexif, argumentatif** à un texte.",
      "Classical **何** (\"what, which\") survives in **written** interrogatives often used in titles or rhetorical questions:\n\n• **何以** = \"**why, how is it that**\" (= 为什么/凭什么): 何以见得？(what makes you say so?).\n• **何在** = \"**where is, what does… consist of**\" (= 在哪里): 意义何在？(what's the point?), 原因何在？\n\nAlso: **何时** (when), **何处** (where), **何为** (what is). They give a **reflective, argumentative** tone.",
    ),
    examples: [
      ex("如果机器能写诗，人类创作的意义何在？", "Rúguǒ jīqì néng xiě shī, rénlèi chuàngzuò de yìyì hézài?", "Si une machine peut écrire de la poésie, quel est le sens de la création humaine ?", "If a machine can write poetry, what's the point of human creativity?"),
      ex("他何以如此自信？", "Tā héyǐ rúcǐ zìxìn?", "Comment se fait-il qu'il soit si sûr de lui ?", "Why is he so confident?"),
      ex("你说这个方法不行，何以见得？", "Nǐ shuō zhège fāngfǎ bù xíng, héyǐ jiàn dé?", "Tu dis que cette méthode ne marche pas : qu'est-ce qui te permet de l'affirmer ?", "You say this method won't work — what makes you think so?"),
    ],
    pitfalls: t(
      "✗ 何在 en tête : ✗ 何在意义？ → ✓ 意义何在？ (何在 **en fin**).\n✗ 何以 à l'oral quotidien : ✓ 为什么.",
      "✗ 何在 at the start: ✗ 何在意义？ → ✓ 意义何在？ (何在 goes **last**).\n✗ 何以 in everyday speech: ✓ 为什么.",
    ),
  },
  {
    id: "hsk6-g26",
    level: 6,
    category: C.complex,
    title: t("虽说 / 诚然 : certes, il est vrai que", "虽说 / 诚然: admittedly, it is true that"),
    pattern: "虽说 + A，但/可 + B | 诚然，A，但是 B",
    explanation: t(
      "Deux outils de **concession argumentative** :\n\n• **虽说** = 虽然 un peu plus **oral et nuancé** (« bon, c'est vrai que… mais »).\n• **诚然** = « **certes, il est indéniable que** » : très **écrit**, il concède un point **reconnu par tous** avant de le dépasser. Il se place en tête de phrase, souvent suivi d'une virgule, ou après le sujet.\n\nStratégie classique de dissertation : **诚然 + concession, 但是 + thèse**.",
      "Two tools for **argumentative concession**:\n\n• **虽说** = a slightly more **colloquial, nuanced** 虽然 (\"sure, it's true that… but\").\n• **诚然** = \"**admittedly, undeniably**\": very **written**, it grants a point **everyone accepts** before moving past it. Sentence-initial, often followed by a comma, or after the subject.\n\nClassic essay strategy: **诚然 + concession, 但是 + thesis**.",
    ),
    examples: [
      ex("诚然，人工智能提高了效率，但它带来的伦理问题也不容忽视。", "Chéngrán, réngōng zhìnéng tígāo le xiàolǜ, dàn tā dài lái de lúnlǐ wèntí yě bù róng hūshì.", "Certes, l'IA a amélioré l'efficacité, mais on ne peut ignorer les problèmes éthiques qu'elle soulève.", "Admittedly, AI has boosted efficiency, but the ethical issues it raises cannot be ignored."),
      ex("虽说现在翻译软件很发达，可学外语还是很有必要。", "Suīshuō xiànzài fānyì ruǎnjiàn hěn fādá, kě xué wàiyǔ háishi hěn yǒu bìyào.", "Bon, les logiciels de traduction sont très perfectionnés, mais apprendre une langue reste indispensable.", "Sure, translation software is advanced now, but learning languages is still necessary."),
      ex("技术诚然重要，但使用技术的人更重要。", "Jìshù chéngrán zhòngyào, dàn shǐyòng jìshù de rén gèng zhòngyào.", "La technique compte, c'est indéniable, mais ceux qui s'en servent comptent davantage.", "Technology undeniably matters, but the people using it matter more."),
    ],
    pitfalls: t(
      "✗ 诚然 sans « mais » : il annonce toujours un contre-argument.\n✗ Confondre 诚然 (certes) et 诚实 (honnête).",
      "✗ 诚然 without a \"but\": it always announces a counter-argument.\n✗ Confusing 诚然 (admittedly) with 诚实 (honest).",
    ),
  },
  {
    id: "hsk6-g27",
    level: 6,
    category: C.verb,
    title: t("不惜 : ne pas hésiter à, quitte à", "不惜: not hesitate to, at the cost of"),
    pattern: "S + 不惜 + (V) + coût/sacrifice，(也要) + but",
    explanation: t(
      "**不惜** (« ne pas regretter, ne pas épargner ») exprime qu'on est prêt à **payer un prix élevé** pour atteindre un but : « quitte à », « au prix de », « ne pas reculer devant ».\n\nLe complément est un **sacrifice** : 不惜一切代价 (à tout prix), 不惜花重金, 不惜牺牲. Le jugement peut être **positif** (dévouement) ou **négatif** (moyens douteux) selon le contexte.",
      "**不惜** (\"not begrudge, not spare\") means being ready to **pay a high price** for a goal: \"at the cost of\", \"not shrink from\", \"go as far as\".\n\nThe complement is a **sacrifice**: 不惜一切代价 (at all costs), 不惜花重金, 不惜牺牲. The judgement can be **positive** (devotion) or **negative** (dubious means) depending on context.",
    ),
    examples: [
      ex("有的企业为了利润，不惜牺牲环境。", "Yǒu de qǐyè wèile lìrùn, bùxī xīshēng huánjìng.", "Certaines entreprises n'hésitent pas à sacrifier l'environnement pour le profit.", "Some companies sacrifice the environment for profit without hesitation."),
      ex("他不惜一切代价，也要查明真相。", "Tā bùxī yíqiè dàijià, yě yào chámíng zhēnxiàng.", "Il veut faire toute la lumière sur la vérité, quel qu'en soit le prix.", "He's determined to uncover the truth at any cost."),
      ex("父母不惜借钱，送孩子出国读书。", "Fùmǔ bùxī jiè qián, sòng háizi chū guó dú shū.", "Les parents sont allés jusqu'à emprunter pour envoyer leur enfant étudier à l'étranger.", "The parents even borrowed money to send their child abroad to study."),
    ],
    pitfalls: t(
      "✗ 不惜 + résultat agréable : ✗ 他不惜度假 → le complément doit être un **coût**.\n✗ Confondre 不惜 (ne pas épargner) et 可惜 (dommage).",
      "✗ 不惜 + something pleasant: ✗ 他不惜度假 → the complement must be a **cost**.\n✗ Confusing 不惜 (spare no) with 可惜 (what a pity).",
    ),
  },
  {
    id: "hsk6-g28",
    level: 6,
    category: C.adv,
    title: t("势必 / 必将 : inévitablement, à coup sûr", "势必 / 必将: inevitably, surely will"),
    pattern: "S + 势必 + (会) + V | S + 必将 + V",
    explanation: t(
      "Deux adverbes **écrits** de **prédiction certaine** :\n\n• **势必** (« par la force des choses ») : la conséquence découle **logiquement** de la tendance actuelle : « forcément », « immanquablement ». Souvent pour un **risque**.\n• **必将** (« sera nécessairement ») : affirmation **confiante** sur l'avenir, souvent **positive** et solennelle (discours officiels) : 必将取得成功.\n\nIls se placent après le sujet, devant le verbe.",
      "Two **written** adverbs of **confident prediction**:\n\n• **势必** (\"by the force of circumstances\"): the result follows **logically** from current trends — \"bound to\", \"inevitably\". Often for a **risk**.\n• **必将** (\"will surely\"): a **confident** statement about the future, often **positive** and solemn (official speeches): 必将取得成功.\n\nBoth go after the subject, before the verb.",
    ),
    examples: [
      ex("贸易保护主义势必影响全球经济的增长。", "Màoyì bǎohù zhǔyì shìbì yǐngxiǎng quánqiú jīngjì de zēngzhǎng.", "Le protectionnisme commercial pèsera inévitablement sur la croissance mondiale.", "Trade protectionism is bound to affect global economic growth."),
      ex("人口老龄化势必会增加医疗支出。", "Rénkǒu lǎolínghuà shìbì huì zēngjiā yīliáo zhīchū.", "Le vieillissement de la population va forcément augmenter les dépenses de santé.", "Population ageing will inevitably raise healthcare spending."),
      ex("各国加强合作，必将带来共同发展。", "Gè guó jiāqiáng hézuò, bìjiāng dài lái gòngtóng fāzhǎn.", "Le renforcement de la coopération entre pays apportera à coup sûr un développement commun.", "Stronger cooperation among nations will surely bring shared development."),
    ],
    pitfalls: t(
      "✗ 势必 pour un souhait personnel : ✗ 我势必去旅游 → c'est une **déduction** à partir d'une tendance.\n✗ 必将 dans une conversation banale : trop solennel → ✓ 肯定会。",
      "✗ 势必 for a personal wish: ✗ 我势必去旅游 → it's a **deduction** from a trend.\n✗ 必将 in casual talk: too solemn → ✓ 肯定会。",
    ),
  },
  {
    id: "hsk6-g29",
    level: 6,
    category: C.verb,
    title: t("有所 + V : dans une certaine mesure", "有所 + V: to some extent"),
    pattern: "S + 有所 + V bisyllabique (提高/增加/下降/改善/不同…)",
    explanation: t(
      "**有所 + verbe** (« avoir quelque… ») indique qu'un changement a lieu **dans une certaine mesure**, sans le quantifier : 有所提高 (s'est quelque peu amélioré), 有所下降 (a un peu baissé), 有所不同 (diffère quelque peu).\n\nLe verbe est **bisyllabique**, souvent un verbe de **variation**. Forme négative élégante : **无所 + V** (无所谓、无所不知) ou **没有什么 + V**. Très fréquent dans les rapports et statistiques.",
      "**有所 + verb** (\"have some…\") says a change happens **to some extent**, without quantifying it: 有所提高 (has improved somewhat), 有所下降 (has dipped), 有所不同 (differs somewhat).\n\nThe verb is **disyllabic**, usually a verb of **change**. Elegant negative: **无所 + V** (无所谓、无所不知). Very common in reports and statistics.",
    ),
    examples: [
      ex("近年来，城市的空气质量有所改善。", "Jìnnián lái, chéngshì de kōngqì zhìliàng yǒusuǒ gǎishàn.", "Ces dernières années, la qualité de l'air en ville s'est quelque peu améliorée.", "In recent years, urban air quality has improved somewhat."),
      ex("今年房价有所下降，但仍然很高。", "Jīnnián fángjià yǒusuǒ xiàjiàng, dàn réngrán hěn gāo.", "Les prix de l'immobilier ont un peu baissé cette année, mais ils restent élevés.", "House prices have fallen a little this year but remain high."),
      ex("不同城市的生活节奏有所不同。", "Bùtóng chéngshì de shēnghuó jiézòu yǒusuǒ bùtóng.", "Le rythme de vie diffère quelque peu d'une ville à l'autre.", "The pace of life differs somewhat from city to city."),
    ],
    pitfalls: t(
      "✗ 有所高 → ✓ 有所提高 (verbe bisyllabique).\n✗ 有所 + 了 : ✗ 有所提高了 est fréquent à l'oral mais peu élégant à l'écrit → ✓ 有所提高。\n✗ 有所 + quantité précise : ✗ 有所提高了百分之五 → ✓ 提高了百分之五。",
      "✗ 有所高 → ✓ 有所提高 (disyllabic verb).\n✗ 有所提高了 is common in speech but clumsy in writing → ✓ 有所提高。\n✗ 有所 + an exact amount: ✗ 有所提高了百分之五 → ✓ 提高了百分之五。",
    ),
  },
  {
    id: "hsk6-g30",
    level: 6,
    category: C.verb,
    title: t("致使 / 使得 : causer, faire que", "致使 / 使得: cause, result in"),
    pattern: "Cause + 致使/使得 + O + V/Adj",
    explanation: t(
      "Verbes **causatifs écrits**, équivalents formels de 让/使 :\n\n• **使得** = « **faire que, rendre** » : neutre, résultat positif ou négatif : 新技术使得生产更加高效.\n• **致使** = « **entraîner, provoquer** » : presque toujours un résultat **négatif**, fréquent dans les jugements et rapports d'accident : 管理不善，致使公司破产.\n\nStructure pivot : **cause + 致使/使得 + qui + quoi**.",
      "**Written causative** verbs, formal counterparts of 让/使:\n\n• **使得** = \"**make, cause to be**\": neutral, good or bad outcome: 新技术使得生产更加高效.\n• **致使** = \"**lead to, result in**\": almost always a **negative** result, common in rulings and accident reports: 管理不善，致使公司破产.\n\nPivot structure: **cause + 致使/使得 + who + what**.",
    ),
    examples: [
      ex("司机酒后驾驶，致使两人受伤。", "Sījī jiǔ hòu jiàshǐ, zhìshǐ liǎng rén shòushāng.", "Le conducteur roulait en état d'ivresse, ce qui a fait deux blessés.", "The driver drove drunk, injuring two people."),
      ex("互联网的普及使得信息传播更加迅速。", "Hùliánwǎng de pǔjí shǐde xìnxī chuánbō gèngjiā xùnsù.", "La démocratisation d'Internet a rendu la diffusion de l'information plus rapide.", "The spread of the internet has made information travel faster."),
      ex("法律漏洞致使许多受害者得不到赔偿。", "Fǎlǜ lòudòng zhìshǐ xǔduō shòuhàizhě dé bu dào péicháng.", "Des failles juridiques font que de nombreuses victimes ne sont pas indemnisées.", "Legal loopholes have left many victims without compensation."),
    ],
    pitfalls: t(
      "✗ 致使 + résultat heureux : ✗ 他的努力致使他成功了 → ✓ 使得/让他成功了。\n✗ 使得 lu *shǐ dé* : ✓ *shǐde*.",
      "✗ 致使 + a happy outcome: ✗ 他的努力致使他成功了 → ✓ 使得/让他成功了。\n✗ Reading 使得 as *shǐ dé*: ✓ *shǐde*.",
    ),
  },
  {
    id: "hsk6-g31",
    level: 6,
    category: C.prep,
    title: t("截至 / 自…以来 : en date du / depuis", "截至 / 自…以来: as of / since"),
    pattern: "截至 + date，… | 自 + point de départ + 以来，…",
    explanation: t(
      "Deux repères temporels **écrits**, omniprésents dans les données et la presse :\n\n• **截至** (« jusqu'à, en date du ») : donne la **date d'arrêt** d'un chiffre : 截至去年底 (à fin de l'année dernière).\n• **自…以来** (« depuis… ») : indique une **période qui commence** à un moment et **dure jusqu'à maintenant** : 自改革开放以来 (depuis la réforme et l'ouverture).\n\nNe confonds pas **截至** (date d'arrêt, suivi d'une date) et **截止** (verbe « prendre fin » : 报名已截止).",
      "Two **written** time markers, everywhere in statistics and the press:\n\n• **截至** (\"as of, up to\"): the **cut-off date** of a figure: 截至去年底 (as of the end of last year).\n• **自…以来** (\"since…\"): a **period starting** at some point and **lasting until now**: 自改革开放以来 (since reform and opening-up).\n\nDon't confuse **截至** (cut-off, followed by a date) with **截止** (verb \"to close\": 报名已截止).",
    ),
    examples: [
      ex("截至去年年底，中国的高铁里程已超过四万公里。", "Jiézhì qùnián niándǐ, Zhōngguó de gāotiě lǐchéng yǐ chāoguò sì wàn gōnglǐ.", "À la fin de l'année dernière, le réseau chinois de TGV dépassait 40 000 km.", "As of the end of last year, China's high-speed rail network exceeded 40,000 km."),
      ex("自加入世贸组织以来，中国的对外贸易迅速增长。", "Zì jiārù Shìmào Zǔzhī yǐlái, Zhōngguó de duìwài màoyì xùnsù zēngzhǎng.", "Depuis son entrée à l'OMC, le commerce extérieur de la Chine a connu une croissance rapide.", "Since joining the WTO, China's foreign trade has grown rapidly."),
      ex("报名已经截止了，下次请早点儿。", "Bàomíng yǐjīng jiézhǐ le, xià cì qǐng zǎo diǎnr.", "Les inscriptions sont closes, la prochaine fois, inscris-toi plus tôt.", "Registration has closed — next time, please sign up earlier."),
    ],
    pitfalls: t(
      "✗ 截止去年年底 (dans une statistique) → ✓ 截至去年年底.\n✗ 自…以后 pour une période jusqu'à maintenant → ✓ 自…以来.\n✓ 自从…以来 est correct aussi.",
      "✗ 截止去年年底 (in a statistic) → ✓ 截至去年年底.\n✗ 自…以后 for a period up to now → ✓ 自…以来.\n✓ 自从…以来 is also fine.",
    ),
  },
  {
    id: "hsk6-g32",
    level: 6,
    category: C.style,
    title: t("Les moules de quatre caractères (四字格)", "Four-character patterns (四字格)"),
    pattern: "不A不B | 半A半B | 有A有B | 一A一B | 自A自B | 无A无B | 东A西B",
    explanation: t(
      "Au-delà des 成语 figés, le chinois possède des **moules productifs** de quatre caractères qu'on peut remplir soi-même. Les reconnaître aide à comprendre des expressions jamais vues :\n\n• **不A不B** : « ni trop A ni trop B » (不大不小) ou « sans A » (不知不觉, sans s'en rendre compte).\n• **半A半B** : « mi-A mi-B » (半信半疑, mi-crédule mi-sceptique).\n• **有A有B** : « avec A et B » (有说有笑, en bavardant et riant).\n• **一A一B** : un de chaque, souvent contraste (一问一答, question-réponse).\n• **自A自B** : « par soi-même » (自言自语, se parler à soi-même).\n• **东A西B** : « de-ci de-là » (东张西望, regarder partout).\n\nCes formules donnent du **rythme** et de l'**élégance** à un texte, surtout en critique d'art et en littérature.",
      "Beyond fixed 成语, Chinese has **productive four-character moulds** you can fill in. Recognising them helps you parse expressions you've never seen:\n\n• **不A不B**: \"neither too A nor too B\" (不大不小) or \"without A\" (不知不觉, without realising).\n• **半A半B**: \"half A, half B\" (半信半疑, half-believing).\n• **有A有B**: \"with both A and B\" (有说有笑, chatting and laughing).\n• **一A一B**: one of each, often contrasting (一问一答, question and answer).\n• **自A自B**: \"by oneself\" (自言自语, talk to oneself).\n• **东A西B**: \"here and there\" (东张西望, look all around).\n\nThese give **rhythm** and **elegance** to writing, especially in art criticism and literature.",
    ),
    examples: [
      ex("观众听得不知不觉入了迷。", "Guānzhòng tīng de bù zhī bù jué rù le mí.", "Le public, sans s'en rendre compte, a été complètement captivé.", "The audience grew spellbound without even realising it."),
      ex("对于这位画家的新作品，评论家们半信半疑。", "Duìyú zhè wèi huàjiā de xīn zuòpǐn, pínglùnjiāmen bàn xìn bàn yí.", "Face à la nouvelle œuvre de ce peintre, les critiques restent sceptiques.", "Critics were half-convinced, half-doubtful about the painter's new work."),
      ex("两位演员一唱一和，配合得非常默契。", "Liǎng wèi yǎnyuán yí chàng yí hè, pèihé de fēicháng mòqì.", "Les deux acteurs se donnent la réplique avec une parfaite complicité.", "The two performers echoed each other in perfect harmony."),
      ex("老人坐在画前，自言自语地说着什么。", "Lǎorén zuò zài huà qián, zì yán zì yǔ de shuō zhe shénme.", "Le vieil homme, assis devant le tableau, marmonnait quelque chose pour lui-même.", "The old man sat before the painting, muttering something to himself."),
    ],
    pitfalls: t(
      "✗ Mélanger les moules : ✗ 半知不觉 → ✓ 不知不觉.\n✗ Créer n'importe quel 四字格 : les combinaisons sont en partie **figées** par l'usage ; vérifie avant de l'utiliser à l'écrit.\n✗ Lire 一唱一和 *hé* : ✓ *hè* (répondre en écho).",
      "✗ Mixing moulds: ✗ 半知不觉 → ✓ 不知不觉.\n✗ Inventing any 四字格: combinations are partly **fixed by usage**; check before writing one.\n✗ Reading 一唱一和 as *hé*: ✓ *hè* (to echo).",
    ),
  },
];
