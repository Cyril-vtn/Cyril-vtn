import type { GrammarPoint } from "../../types";
import { t, ex } from "./helpers";

export const grammarB: GrammarPoint[] = [
  {
    id: "hsk3-g27",
    level: 3,
    title: t("Le passif : 被 / 叫 / 让", "The passive: 被 / 叫 / 让"),
    pattern: "Objet subi + 被 (+ agent) + Verbe + complément",
    explanation: t(
      "La phrase en **被** met en avant la personne ou la chose qui **subit** l'action. Elle sert surtout pour des événements **désagréables ou inattendus** : se faire voler, être cassé, être critiqué…\n\nComme pour 把, le verbe **ne reste jamais seul** : il faut 了, un complément de résultat, etc. : 我的钱包被偷**了**.\n\nL'**agent** (qui fait l'action) est facultatif après 被 : 手机被(小偷)偷了. À l'oral, on utilise aussi **叫** ou **让**, mais alors l'agent est **obligatoire** : 我的蛋糕让弟弟吃了。\n\nLa négation et les adverbes se placent **avant 被** : 我的护照没被偷。",
      "The **被** sentence puts the person or thing that **undergoes** the action first. It's mostly used for **unpleasant or unexpected** events: being robbed, broken, criticised…\n\nAs with 把, the verb **never stands alone**: it needs 了, a result complement, etc.: 我的钱包被偷**了**.\n\nThe **agent** (the doer) is optional after 被: 手机被(小偷)偷了. In speech you can also use **叫** or **让**, but then the agent is **required**: 我的蛋糕让弟弟吃了。\n\nNegation and adverbs go **before 被**: 我的护照没被偷。"
    ),
    examples: [
      ex("我的钱包被偷了！", "Wǒ de qiánbāo bèi tōu le!", "On m'a volé mon portefeuille !", "My wallet has been stolen!"),
      ex("我们的航班被取消了。", "Wǒmen de hángbān bèi qǔxiāo le.", "Notre vol a été annulé.", "Our flight was cancelled."),
      ex("行李箱叫雨打湿了。", "Xínglixiāng jiào yǔ dǎshī le.", "La valise a été trempée par la pluie.", "The suitcase got soaked by the rain."),
      ex("他的自行车没被人骑走。", "Tā de zìxíngchē méi bèi rén qízǒu.", "Personne n'est parti avec son vélo.", "His bike wasn't ridden off by anyone."),
    ],
    pitfalls: t(
      "✗ 我的手机被偷。 → verbe seul. ✓ 我的手机被偷了。\n✗ 我的手机叫偷了。 → avec 叫/让, l'agent est obligatoire. ✓ 我的手机叫小偷偷了。\n✗ 我的钱包被没偷。 → ✓ 我的钱包没被偷。",
      "✗ 我的手机被偷。 → bare verb. ✓ 我的手机被偷了。\n✗ 我的手机叫偷了。 → with 叫/让 the agent is required. ✓ 我的手机叫小偷偷了。\n✗ 我的钱包被没偷。 → ✓ 我的钱包没被偷。"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g28",
    level: 3,
    title: t("J'ai bien peur que : 恐怕", "I'm afraid (that): 恐怕"),
    pattern: "恐怕 + proposition ｜ Sujet + 恐怕 + Verbe",
    explanation: t(
      "**恐怕** (kǒngpà) exprime une **supposition inquiète** : « j'ai bien peur que, je crains que, probablement (hélas) ». On l'utilise pour annoncer une mauvaise nouvelle avec tact.\n\nIl se place en tête de phrase ou juste après le sujet : 恐怕来不及了 / 我恐怕来不及了.\n\nAvec un nombre, il signifie « environ, sans doute » : 恐怕要等两个小时 (il faudra sans doute attendre deux heures).\n\nAttention : 恐怕 n'est pas « avoir peur de » quelque chose (害怕) : ✗ 我恐怕狗 → ✓ 我怕狗 / 我害怕狗。",
      "**恐怕** (kǒngpà) expresses a **worried guess**: \"I'm afraid that, probably (unfortunately)\". It's a tactful way to announce bad news.\n\nIt goes at the start of the sentence or after the subject: 恐怕来不及了 / 我恐怕来不及了.\n\nWith a number it means \"probably, around\": 恐怕要等两个小时 (we'll probably have to wait two hours).\n\nCareful: 恐怕 isn't \"to be afraid of\" something (害怕): ✗ 我恐怕狗 → ✓ 我怕狗 / 我害怕狗。"
    ),
    examples: [
      ex("路上堵车，恐怕我们要迟到了。", "Lù shang dǔchē, kǒngpà wǒmen yào chídào le.", "Il y a des bouchons, j'ai bien peur qu'on arrive en retard.", "There's traffic — I'm afraid we're going to be late."),
      ex("这么晚了，恐怕没有地铁了。", "Zhème wǎn le, kǒngpà méiyǒu dìtiě le.", "À cette heure-ci, je crains qu'il n'y ait plus de métro.", "It's so late, I'm afraid there's no more subway."),
      ex("恐怕要等一个多小时。", "Kǒngpà yào děng yí ge duō xiǎoshí.", "Il faudra sans doute attendre plus d'une heure.", "We'll probably have to wait over an hour."),
    ],
    pitfalls: t(
      "✗ 我恐怕坐飞机。 (pour « j'ai peur de l'avion ») → ✓ 我害怕坐飞机。\n恐怕 annonce plutôt un résultat négatif ; pour une bonne nouvelle probable, dis 可能 ou 大概.",
      "✗ 我恐怕坐飞机。 (for \"I'm scared of flying\") → ✓ 我害怕坐飞机。\n恐怕 announces a likely bad outcome; for a likely good one, use 可能 or 大概."
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g29",
    level: 3,
    title: t("Et donc, alors : 于是", "So, thereupon: 于是"),
    pattern: "Événement 1，于是 + (Sujet) + Événement 2",
    explanation: t(
      "**于是** (yúshì) relie deux événements **passés** : le second est la **réaction naturelle** au premier. « Alors, du coup, c'est pourquoi ».\n\nIl est typique du **récit** : 天下雨了，于是我们回酒店了 (il s'est mis à pleuvoir, alors on est rentrés à l'hôtel).\n\nDifférence avec **所以** : 所以 exprime une cause logique (présent, passé, futur) ; **于是** raconte une **suite d'actions** dans le passé. On ne l'utilise pas pour des vérités générales.",
      "**于是** (yúshì) links two **past** events: the second is the **natural reaction** to the first. \"So, and then, thereupon\".\n\nIt's typical of **storytelling**: 天下雨了，于是我们回酒店了 (it started raining, so we went back to the hotel).\n\nDifference from **所以**: 所以 expresses a logical cause (any time); **于是** narrates a **sequence of actions** in the past. It isn't used for general truths."
    ),
    examples: [
      ex("火车晚点了，于是我们去吃了点儿东西。", "Huǒchē wǎndiǎn le, yúshì wǒmen qù chī le diǎnr dōngxi.", "Le train avait du retard, alors on est allés manger un morceau.", "The train was delayed, so we went to grab a bite."),
      ex("他找不到护照，于是马上给大使馆打了电话。", "Tā zhǎo bu dào hùzhào, yúshì mǎshàng gěi dàshǐguǎn dǎ le diànhuà.", "Il ne trouvait plus son passeport, alors il a tout de suite appelé l'ambassade.", "He couldn't find his passport, so he immediately called the embassy."),
      ex("酒店没有房间了，于是我们换了一家。", "Jiǔdiàn méiyǒu fángjiān le, yúshì wǒmen huàn le yì jiā.", "L'hôtel était complet, du coup on en a pris un autre.", "The hotel was full, so we switched to another one."),
    ],
    pitfalls: t(
      "✗ 明天下雨，于是我不去。 → 于是 raconte le passé. ✓ 明天下雨，所以我不去。\n✗ 因为……于是…… → on ne combine pas 因为 et 于是.",
      "✗ 明天下雨，于是我不去。 → 于是 narrates the past. ✓ 明天下雨，所以我不去。\n✗ 因为……于是…… → don't pair 因为 with 于是."
    ),
    category: "连词 / conjunctions",
  },
  {
    id: "hsk3-g30",
    level: 3,
    title: t("Pourtant : 却", "Yet, however: 却"),
    pattern: "A，(Sujet) + 却 + Verbe / Adj",
    explanation: t(
      "**却** (què) marque une **opposition** ou un résultat **inattendu** : « pourtant, mais, alors que ».\n\nC'est un **adverbe** : il se place **après le sujet**, devant le verbe — jamais en tête de phrase (contrairement à 但是, qui est une conjonction).\n\nOn peut combiner 但是 et 却 pour renforcer : 我很早出门，但是却迟到了。",
      "**却** (què) marks **contrast** or an **unexpected** result: \"yet, but, however\".\n\nIt's an **adverb**: it goes **after the subject**, before the verb — never at the start of a sentence (unlike 但是, which is a conjunction).\n\nYou can combine 但是 and 却 for extra emphasis: 我很早出门，但是却迟到了。"
    ),
    examples: [
      ex("我们订了两个房间，酒店却只给了一个。", "Wǒmen dìng le liǎng ge fángjiān, jiǔdiàn què zhǐ gěi le yí ge.", "On avait réservé deux chambres, et pourtant l'hôtel ne nous en a donné qu'une.", "We booked two rooms, yet the hotel only gave us one."),
      ex("天气预报说晴天，却下了一整天雨。", "Tiānqì yùbào shuō qíngtiān, què xià le yì zhěng tiān yǔ.", "La météo annonçait du soleil, et il a plu toute la journée.", "The forecast said sunny, but it rained all day."),
      ex("他去过很多国家，却从来没来过中国。", "Tā qù guo hěn duō guójiā, què cónglái méi lái guo Zhōngguó.", "Il est allé dans plein de pays, mais n'est jamais venu en Chine.", "He's been to many countries, yet never to China."),
    ],
    pitfalls: t(
      "✗ 却我没去。 → 却 se place après le sujet. ✓ 我却没去。\n✗ 却 + 是 en tête. Pour commencer la phrase, utilise 但是 / 可是.",
      "✗ 却我没去。 → 却 comes after the subject. ✓ 我却没去。\nTo start a sentence, use 但是 / 可是 instead."
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g31",
    level: 3,
    title: t("Compléments de résultat : 住, 掉, 成, 好, 到", "Result complements: 住, 掉, 成, 好, 到"),
    pattern: "Verbe + 住 / 掉 / 成 / 好 / 到 (+ Objet)",
    explanation: t(
      "Un **complément de résultat** indique ce qui arrive **à la suite** d'une action. Au niveau 3, retiens ces cinq :\n- **住** : fixer, immobiliser, retenir : 记住 (retenir), 站住 (s'arrêter net), 抓住 (attraper).\n- **掉** : disparition, perte : 丢掉 (perdre, jeter), 忘掉 (oublier), 卖掉 (vendre).\n- **成** : transformation ou réussite : 变成 (devenir), 翻译成 (traduire en), 写成 (écrire sous forme de).\n- **好** : action **menée à bien**, prête : 准备好, 收拾好.\n- **到** : atteindre un but : 找到, 买到, 看到.\n\nNégation avec **没** : 我没找到护照。",
      "A **result complement** says what happens **as a result** of an action. At level 3, learn these five:\n- **住**: fix, hold in place: 记住 (memorise), 站住 (stop dead), 抓住 (catch).\n- **掉**: loss, removal: 丢掉 (lose, throw away), 忘掉 (forget), 卖掉 (sell off).\n- **成**: transformation or success: 变成 (become), 翻译成 (translate into), 写成 (write as).\n- **好**: done **properly**, ready: 准备好, 收拾好.\n- **到**: reaching a goal: 找到, 买到, 看到.\n\nNegate with **没**: 我没找到护照。"
    ),
    examples: [
      ex("请记住你的房间号。", "Qǐng jìzhù nǐ de fángjiān hào.", "Retiens bien ton numéro de chambre.", "Please remember your room number."),
      ex("我把机票丢掉了！", "Wǒ bǎ jīpiào diūdiào le!", "J'ai perdu mon billet d'avion !", "I've lost my plane ticket!"),
      ex("司机把“西安”听成了“西湖”。", "Sījī bǎ “Xī'ān” tīngchéng le “Xīhú”.", "Le chauffeur a compris « Xi'an » au lieu de « Xihu ».", "The driver misheard \"Xi'an\" as \"West Lake\"."),
      ex("你买到回来的票了吗？", "Nǐ mǎidào huílai de piào le ma?", "Tu as réussi à acheter le billet de retour ?", "Did you manage to get a return ticket?"),
    ],
    pitfalls: t(
      "✗ 我不找到护照。 → pour un résultat, négation avec 没. ✓ 我没找到护照。\n✗ 我找了护照 ≠ 我找到了护照 : le premier dit seulement qu'on a cherché, pas qu'on a trouvé !",
      "✗ 我不找到护照。 → negate results with 没. ✓ 我没找到护照。\n✗ 我找了护照 ≠ 我找到了护照: the first only says you looked, not that you found it!"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g32",
    level: 3,
    title: t("Quel que soit… : 无论 / 不管……都", "No matter…: 无论 / 不管……都"),
    pattern: "无论 / 不管 + mot interrogatif ou alternative，(Sujet) + 都 / 也 + …",
    explanation: t(
      "**无论** (wúlùn, plus écrit) et **不管** (bùguǎn, plus oral) signifient « quel que soit, peu importe ». Le résultat **ne change pas**, quelles que soient les conditions.\n\nAprès 无论/不管, il faut une **expression ouverte** :\n- un **mot interrogatif** : 谁, 什么, 哪儿, 怎么, 多…\n- une **alternative** : A 还是 B, 去不去, 大小…\n\nLa seconde partie contient **都** (ou 也).",
      "**无论** (wúlùn, more written) and **不管** (bùguǎn, more spoken) mean \"no matter, whatever\". The result **stays the same** whatever the conditions.\n\nAfter 无论/不管 you need an **open expression**:\n- a **question word**: 谁, 什么, 哪儿, 怎么, 多…\n- an **alternative**: A 还是 B, 去不去, 大小…\n\nThe second half contains **都** (or 也)."
    ),
    examples: [
      ex("不管你去哪儿，我都支持你。", "Bùguǎn nǐ qù nǎr, wǒ dōu zhīchí nǐ.", "Où que tu ailles, je te soutiendrai.", "Wherever you go, I'll support you."),
      ex("无论遇到什么困难，好朋友都会帮你。", "Wúlùn yùdào shénme kùnnan, hǎo péngyou dōu huì bāng nǐ.", "Quelles que soient les difficultés, un vrai ami t'aidera.", "Whatever difficulties you meet, a good friend will help you."),
      ex("不管刮风还是下雨，他每天都来看我。", "Bùguǎn guāfēng háishi xiàyǔ, tā měi tiān dōu lái kàn wǒ.", "Qu'il vente ou qu'il pleuve, il vient me voir tous les jours.", "Rain or shine, he comes to see me every day."),
    ],
    pitfalls: t(
      "✗ 不管天气很冷，我都去。 → il faut une expression ouverte. ✓ 不管天气多冷，我都去。 (Pour une situation réelle : 虽然天气很冷，但是我还是去。)\n✗ 不管……或者…… → dans une alternative, utilise 还是.",
      "✗ 不管天气很冷，我都去。 → you need an open expression. ✓ 不管天气多冷，我都去。 (For a real situation: 虽然天气很冷，但是我还是去。)\n✗ 不管……或者…… → in an alternative, use 还是."
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g33",
    level: 3,
    title: t("Même si : 即使……也", "Even if: 即使……也"),
    pattern: "即使 + hypothèse，(Sujet) + 也 + résultat",
    explanation: t(
      "**即使……也** (jíshǐ… yě) = « même si… quand même ». On pose une **hypothèse** (souvent extrême) et on affirme que le résultat **reste le même**.\n\n**也** se place après le sujet de la seconde proposition.\n\nDifférence avec **虽然……但是** : 虽然 parle d'un fait **réel** (« bien que ») ; 即使 parle d'une **hypothèse** (« même si »). 虽然下雨，我还是去了 (il pleuvait vraiment) / 即使下雨，我也去 (s'il pleut, j'irai quand même).",
      "**即使……也** (jíshǐ… yě) = \"even if… still\". You set up a **hypothesis** (often extreme) and say the result **stays the same**.\n\n**也** goes after the subject of the second clause.\n\nDifference from **虽然……但是**: 虽然 talks about a **real** fact (\"although\"); 即使 is a **hypothesis** (\"even if\"). 虽然下雨，我还是去了 (it really rained) / 即使下雨，我也去 (even if it rains, I'll go)."
    ),
    examples: [
      ex("即使很忙，他也会给我打电话。", "Jíshǐ hěn máng, tā yě huì gěi wǒ dǎ diànhuà.", "Même quand il est très pris, il m'appelle.", "Even when he's really busy, he calls me."),
      ex("即使我们不常见面，我们也是好朋友。", "Jíshǐ wǒmen bù cháng jiànmiàn, wǒmen yě shì hǎo péngyou.", "Même si on ne se voit pas souvent, on reste de bons amis.", "Even if we don't meet often, we're still good friends."),
      ex("即使你说对不起，她也不会原谅你。", "Jíshǐ nǐ shuō duìbuqǐ, tā yě bú huì yuánliàng nǐ.", "Même si tu t'excuses, elle ne te pardonnera pas.", "Even if you apologise, she won't forgive you."),
    ],
    pitfalls: t(
      "✗ 即使下雨，我还去。 → avec 即使, utilise 也. ✓ 即使下雨，我也去。\n✗ 即使……但是…… → mélange de deux structures. ✓ 即使……也…… ou 虽然……但是……",
      "✗ 即使下雨，我还去。 → 即使 pairs with 也. ✓ 即使下雨，我也去。\n✗ 即使……但是…… → mixes two patterns. ✓ 即使……也…… or 虽然……但是……"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g34",
    level: 3,
    title: t("À la fois… et… : 既……又 / 也", "Both… and…: 既……又 / 也"),
    pattern: "Sujet + 既 + A，又 / 也 + B",
    explanation: t(
      "**既……又……** (jì… yòu…) = « à la fois A et B ». Les deux qualités ou actions **coexistent**. C'est plus soutenu que 又……又…….\n\nA et B sont en général de même nature (deux adjectifs, deux verbes) et vont dans le **même sens** (deux qualités, ou deux défauts).\n\nVariante : **既……也……**, un peu plus écrite.",
      "**既……又……** (jì… yòu…) = \"both A and B\". The two qualities or actions **coexist**. It's a bit more formal than 又……又…….\n\nA and B are usually of the same type (two adjectives, two verbs) and point in the **same direction** (two good points, or two bad ones).\n\nVariant: **既……也……**, slightly more written."
    ),
    examples: [
      ex("我的新同屋既热情又大方。", "Wǒ de xīn tóngwū jì rèqíng yòu dàfang.", "Mon nouveau colocataire est à la fois chaleureux et généreux.", "My new roommate is both warm and generous."),
      ex("好朋友既能一起玩儿，也能一起吃苦。", "Hǎo péngyou jì néng yìqǐ wánr, yě néng yìqǐ chīkǔ.", "Les vrais amis savent s'amuser ensemble et aussi traverser les moments durs.", "Good friends can both have fun together and go through hard times together."),
      ex("她既是我的同事，又是我最好的朋友。", "Tā jì shì wǒ de tóngshì, yòu shì wǒ zuì hǎo de péngyou.", "C'est à la fois ma collègue et ma meilleure amie.", "She's both my colleague and my best friend."),
    ],
    pitfalls: t(
      "✗ 他既聪明，又懒。 → maladroit : les deux termes vont normalement dans le même sens. Pour une opposition : 他很聪明，却很懒。\n✗ 既……还…… → ✓ 既……又…… / 既……也……",
      "✗ 他既聪明，又懒。 → awkward: both items normally point the same way. For a contrast: 他很聪明，却很懒。\n✗ 既……还…… → ✓ 既……又…… / 既……也……"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g35",
    level: 3,
    title: t("Question rhétorique : 难道……吗", "Rhetorical question: 难道……吗"),
    pattern: "难道 + proposition + 吗？",
    explanation: t(
      "**难道** (nándào) introduit une **question rhétorique** qui exprime la **surprise**, le reproche ou l'incrédulité : « ne me dis pas que… ? », « est-ce que par hasard… ? ».\n\nLe sens réel est **l'inverse** de la forme : 难道你不知道吗？ = « Tu ne le savais quand même pas ?! » → « Tu devrais le savoir ! ».\n\n难道 se place en tête de phrase ou après le sujet ; la phrase finit souvent par **吗** (parfois omis) ou **不成** à l'oral.",
      "**难道** (nándào) introduces a **rhetorical question** that shows **surprise**, reproach or disbelief: \"don't tell me…?\", \"could it be that…?\".\n\nThe real meaning is **the opposite** of the form: 难道你不知道吗？ = \"Surely you knew?!\" → \"You should have known!\"\n\n难道 goes at the start or after the subject; the sentence often ends with **吗** (sometimes dropped)."
    ),
    examples: [
      ex("难道你忘了今天是我的生日吗？", "Nándào nǐ wàng le jīntiān shì wǒ de shēngrì ma?", "Ne me dis pas que tu as oublié que c'est mon anniversaire ?", "Don't tell me you forgot it's my birthday today?"),
      ex("我们是朋友，难道我会骗你吗？", "Wǒmen shì péngyou, nándào wǒ huì piàn nǐ ma?", "On est amis, tu crois vraiment que je te mentirais ?", "We're friends — would I ever lie to you?"),
      ex("他难道不知道我生气了吗？", "Tā nándào bù zhīdào wǒ shēngqì le ma?", "Il ne voit donc pas que je suis fâchée ?", "Can't he see I'm angry?"),
    ],
    pitfalls: t(
      "✗ 难道 dans une vraie question neutre : 难道你几点来？ → 难道 ne va pas avec un mot interrogatif. ✓ 你几点来？\n✗ 难道你是学生吗？ pour simplement demander → c'est une question pleine de surprise, pas neutre.",
      "✗ Using 难道 in a neutral question: 难道你几点来？ → 难道 doesn't combine with question words. ✓ 你几点来？\n难道你是学生吗？ isn't a neutral question — it sounds surprised or doubtful."
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g36",
    level: 3,
    title: t("Faire faire : 让, 叫, 使, 请 (phrases pivots)", "Making someone do: 让, 叫, 使, 请 (pivot sentences)"),
    pattern: "A + 让 / 叫 / 使 / 请 + B + Verbe / Adj",
    explanation: t(
      "Dans une **phrase pivot** (兼语句), la personne B est à la fois l'**objet** du premier verbe et le **sujet** du second : 妈妈让我早点儿回家 (maman me dit de rentrer tôt : « moi » est l'objet de 让 et le sujet de 回家).\n\n- **让 / 叫** : demander, laisser, faire faire (oral).\n- **请** : inviter / demander poliment.\n- **使** (shǐ) : **provoquer un état**, surtout un sentiment, suivi d'un adjectif ou d'un verbe psychologique — plus écrit : 这件事使我很难过.\n\nLa négation se met **avant le premier verbe** : 妈妈不让我出去。",
      "In a **pivot sentence** (兼语句), person B is both the **object** of the first verb and the **subject** of the second: 妈妈让我早点儿回家 (Mum tells me to come home early: \"me\" is the object of 让 and the subject of 回家).\n\n- **让 / 叫**: ask, let, make someone do (spoken).\n- **请**: invite / ask politely.\n- **使** (shǐ): **cause a state**, especially a feeling, followed by an adjective or psychological verb — more written: 这件事使我很难过.\n\nNegation goes **before the first verb**: 妈妈不让我出去。"
    ),
    examples: [
      ex("朋友的话让我很感动。", "Péngyou de huà ràng wǒ hěn gǎndòng.", "Les mots de mon ami m'ont beaucoup touché.", "My friend's words really moved me."),
      ex("他请我们周末去他家吃饭。", "Tā qǐng wǒmen zhōumò qù tā jiā chīfàn.", "Il nous a invités à dîner chez lui ce week-end.", "He invited us to his place for dinner this weekend."),
      ex("这次误会使我们的关系更好了。", "Zhè cì wùhuì shǐ wǒmen de guānxi gèng hǎo le.", "Ce malentendu a finalement renforcé notre relation.", "This misunderstanding actually made our relationship better."),
      ex("老师叫我们别迟到。", "Lǎoshī jiào wǒmen bié chídào.", "Le prof nous a dit de ne pas être en retard.", "The teacher told us not to be late."),
    ],
    pitfalls: t(
      "✗ 这件事让我感动了很。 → ✓ 这件事让我很感动。\n✗ 妈妈让我不出去。 (pour « maman ne me laisse pas sortir ») → ✓ 妈妈不让我出去。\n✗ 使 + action volontaire : ✗ 老师使我们写作业 → ✓ 老师让我们写作业。",
      "✗ 这件事让我感动了很。 → ✓ 这件事让我很感动。\n✗ 妈妈让我不出去。 (for \"Mum won't let me go out\") → ✓ 妈妈不让我出去。\n✗ 使 + a deliberate action: ✗ 老师使我们写作业 → ✓ 老师让我们写作业。"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g37",
    level: 3,
    title: t("Selon, d'après : 按照 / 根据", "According to: 按照 / 根据"),
    pattern: "按照 + règle / habitude + Verbe ｜ 根据 + source / données + Verbe",
    explanation: t(
      "Les deux signifient « selon », mais :\n- **按照** (ànzhào) : on **suit** une règle, une habitude, un plan, une tradition — on agit **conformément** à quelque chose. 按照中国人的习惯…\n- **根据** (gēnjù) : on **se base** sur une information, des données, une source pour en **tirer une conclusion** ou décider. 根据天气预报…\n\nTruc : 按照 → « faire comme le dit X » ; 根据 → « à partir de X, on conclut que… ». 根据 est aussi un nom : « base, fondement ».",
      "Both mean \"according to\", but:\n- **按照** (ànzhào): you **follow** a rule, habit, plan or tradition — acting **in line with** something. 按照中国人的习惯…\n- **根据** (gēnjù): you **base** yourself on information, data or a source to **draw a conclusion** or decide. 根据天气预报…\n\nTip: 按照 → \"do as X says\"; 根据 → \"from X, we conclude…\". 根据 is also a noun: \"basis, grounds\"."
    ),
    examples: [
      ex("按照传统，春节要吃饺子。", "Ànzhào chuántǒng, Chūnjié yào chī jiǎozi.", "Selon la tradition, on mange des raviolis au Nouvel An chinois.", "According to tradition, you eat dumplings at Spring Festival."),
      ex("根据农历，今年的中秋节在九月。", "Gēnjù nónglì, jīnnián de Zhōngqiū Jié zài jiǔ yuè.", "D'après le calendrier lunaire, la fête de la mi-automne tombe en septembre cette année.", "According to the lunar calendar, this year's Mid-Autumn Festival is in September."),
      ex("请按照老师说的做。", "Qǐng ànzhào lǎoshī shuō de zuò.", "Fais comme a dit le prof, s'il te plaît.", "Please do as the teacher said."),
    ],
    pitfalls: t(
      "✗ 根据规定排队 → on suit une règle : ✓ 按照规定排队。\n✗ 按照调查，…… → une enquête est une source d'information : ✓ 根据调查，……",
      "✗ 根据规定排队 → you follow a rule: ✓ 按照规定排队。\n✗ 按照调查，…… → a survey is a source of data: ✓ 根据调查，……"
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g38",
    level: 3,
    title: t("Chaque, divers, autres : 每, 各, 其他, 另外", "Each, various, other: 每, 各, 其他, 另外"),
    pattern: "每 + (Num) + Cl + N (+ 都) ｜ 各 + N ｜ 其他 + N ｜ 另外 + 一 + Cl + N",
    explanation: t(
      "- **每** (měi) : « chaque », pris un par un, souvent avec **都** : 每个人都…\n- **各** (gè) : « chaque, les différents », avec l'idée de **diversité** ; il se met directement devant certains noms, sans classificateur : 各地 (partout, dans chaque région), 各国, 各位.\n- **其他** (qítā) : « les autres » (le reste d'un ensemble) : 其他人, 其他地方.\n- **另外** (lìngwài) : « un(e) autre, supplémentaire » : 另外一个办法 ; comme conjonction : « par ailleurs, en plus ».",
      "- **每** (měi): \"each, every\", one by one, often with **都**: 每个人都…\n- **各** (gè): \"each, various\", with a sense of **diversity**; it goes straight before some nouns, no measure word: 各地 (everywhere, in every region), 各国, 各位.\n- **其他** (qítā): \"the other(s)\" (the rest of a set): 其他人, 其他地方.\n- **另外** (lìngwài): \"another, an additional\": 另外一个办法; as a conjunction: \"besides, in addition\"."
    ),
    examples: [
      ex("每年春节，各地的人都回家过年。", "Měi nián Chūnjié, gè dì de rén dōu huí jiā guònián.", "Chaque année au Nouvel An, des gens de toutes les régions rentrent chez eux.", "Every Spring Festival, people from all over go home for the New Year."),
      ex("除了饺子，北方人还吃其他东西吗？", "Chúle jiǎozi, běifāngrén hái chī qítā dōngxi ma?", "À part les raviolis, les gens du Nord mangent-ils d'autres choses ?", "Besides dumplings, do northerners eat anything else?"),
      ex("这个办法不行，我们试试另外一个吧。", "Zhège bànfǎ bù xíng, wǒmen shìshi lìngwài yí ge ba.", "Cette méthode ne marche pas, essayons-en une autre.", "This method doesn't work, let's try another one."),
      ex("各位朋友，新年快乐！", "Gè wèi péngyou, xīnnián kuàilè!", "Chers amis, bonne année à tous !", "Dear friends, Happy New Year!"),
    ],
    pitfalls: t(
      "✗ 每人都 est possible, mais ✗ 每书 ne l'est pas : 每 demande un classificateur sauf pour quelques noms (人, 天, 年). ✓ 每本书。\n✗ 其他一个人 → pour « une autre personne » : ✓ 另外一个人。",
      "✗ 每书 → 每 needs a measure word except with a few nouns (人, 天, 年). ✓ 每本书。\n✗ 其他一个人 → for \"one other person\": ✓ 另外一个人。"
    ),
    category: "代词 / pronouns",
  },
  {
    id: "hsk3-g39",
    level: 3,
    title: t("Et cetera : 等 / 等等", "Et cetera: 等 / 等等"),
    pattern: "A、B、C + 等 (+ nom / nombre) ｜ A、B、C + 等等",
    explanation: t(
      "**等** et **等等** (děng děng) s'ajoutent à la fin d'une **énumération** : « etc., et ainsi de suite ».\n\n- **等** peut être suivi d'un **nom récapitulatif** ou d'un **nombre** qui **clôt** la liste : 春节、中秋节、端午节等三个节日 (les trois fêtes : Nouvel An, mi-automne et bateaux-dragons).\n- **等等** s'emploie plutôt **en fin de phrase**, et indique que la liste n'est pas finie.\n\nLes éléments d'une liste sont séparés par la **virgule d'énumération** 、 (顿号).",
      "**等** and **等等** (děng děng) go at the end of a **list**: \"etc., and so on\".\n\n- **等** can be followed by a **summarising noun** or a **number** that **closes** the list: 春节、中秋节、端午节等三个节日 (the three festivals: Spring, Mid-Autumn and Dragon Boat).\n- **等等** is mostly used **at the end of a sentence**, meaning the list goes on.\n\nList items are separated by the **enumeration comma** 、 (顿号)."
    ),
    examples: [
      ex("春节的时候，人们贴春联、放鞭炮、吃饺子等等。", "Chūnjié de shíhou, rénmen tiē chūnlián, fàng biānpào, chī jiǎozi děng děng.", "Au Nouvel An, on colle des sentences parallèles, on tire des pétards, on mange des raviolis, etc.", "At Spring Festival, people put up couplets, set off firecrackers, eat dumplings and so on."),
      ex("中秋节、端午节等节日都有很长的历史。", "Zhōngqiū Jié, Duānwǔ Jié děng jiérì dōu yǒu hěn cháng de lìshǐ.", "Les fêtes comme la mi-automne ou les bateaux-dragons ont une très longue histoire.", "Festivals such as Mid-Autumn and Dragon Boat all have a long history."),
      ex("我去过北京、上海、西安等城市。", "Wǒ qù guo Běijīng, Shànghǎi, Xī'ān děng chéngshì.", "Je suis allé dans des villes comme Pékin, Shanghai ou Xi'an.", "I've been to cities like Beijing, Shanghai and Xi'an."),
    ],
    pitfalls: t(
      "✗ 我喜欢苹果，香蕉，等等。 → utilise le 顿号 dans une énumération. ✓ 我喜欢苹果、香蕉等等。\n✗ 等 après un seul élément : ✗ 我吃了饺子等 → il faut au moins deux éléments, ou préférer 什么的 à l'oral.",
      "✗ 我喜欢苹果，香蕉，等等。 → use the 顿号 in lists. ✓ 我喜欢苹果、香蕉等等。\n✗ 等 after a single item: ✗ 我吃了饺子等 → list at least two, or say 什么的 in casual speech."
    ),
    category: "助词 / particles",
  },
  {
    id: "hsk3-g40",
    level: 3,
    title: t("Mots interrogatifs « universels » : 谁都, 什么都, 哪儿都", "Question words as \"any/every\": 谁都, 什么都, 哪儿都"),
    pattern: "谁 / 什么 / 哪儿 / 怎么 + 都 / 也 + Verbe",
    explanation: t(
      "Un mot interrogatif suivi de **都** ou **也** ne pose plus de question : il prend un sens **universel** (« n'importe qui, tout le monde, tout, partout ») :\n- 谁都知道 = tout le monde le sait\n- 什么都想吃 = avoir envie de tout manger\n- 哪儿都不想去 = ne vouloir aller nulle part\n\nÀ la forme négative, on obtient « personne, rien, nulle part ». Avec un objet, celui-ci se place **devant 都** : 我什么菜都吃。\n\nOn peut aussi répéter le mot interrogatif : **谁先到谁买票** (le premier arrivé achète les billets).",
      "A question word followed by **都** or **也** is no longer a question: it takes a **universal** meaning (\"anyone, everyone, everything, everywhere\"):\n- 谁都知道 = everyone knows\n- 什么都想吃 = want to eat everything\n- 哪儿都不想去 = don't want to go anywhere\n\nIn the negative you get \"nobody, nothing, nowhere\". An object goes **before 都**: 我什么菜都吃。\n\nYou can also repeat the question word: **谁先到谁买票** (whoever arrives first buys the tickets)."
    ),
    examples: [
      ex("春节的时候，谁都想回家。", "Chūnjié de shíhou, shéi dōu xiǎng huí jiā.", "Au Nouvel An, tout le monde veut rentrer chez soi.", "At Spring Festival, everyone wants to go home."),
      ex("我今天太累了，哪儿也不想去。", "Wǒ jīntiān tài lèi le, nǎr yě bù xiǎng qù.", "Je suis trop fatigué aujourd'hui, je ne veux aller nulle part.", "I'm too tired today, I don't want to go anywhere."),
      ex("奶奶做的菜，我什么都爱吃。", "Nǎinai zuò de cài, wǒ shénme dōu ài chī.", "Les plats de ma grand-mère, j'adore tout.", "When grandma cooks, I love everything."),
      ex("你想吃什么就吃什么。", "Nǐ xiǎng chī shénme jiù chī shénme.", "Mange ce que tu veux.", "Eat whatever you like."),
    ],
    pitfalls: t(
      "✗ 我都什么吃。 → ✓ 我什么都吃。\n✗ 我不什么都吃 (pour « je ne mange rien ») → ✓ 我什么都不吃。 La négation vient **après 都**.",
      "✗ 我都什么吃。 → ✓ 我什么都吃。\n✗ 我不什么都吃 (for \"I eat nothing\") → ✓ 我什么都不吃。 The negation comes **after 都**."
    ),
    category: "代词 / pronouns",
  },
  {
    id: "hsk3-g41",
    level: 3,
    title: t("Classificateurs verbaux : 次, 遍, 趟, 顿, 场", "Verbal measure words: 次, 遍, 趟, 顿, 场"),
    pattern: "Verbe + (了/过) + Num + 次/遍/趟/顿/场 (+ Objet)",
    explanation: t(
      "Pour compter **combien de fois** une action a lieu, on utilise un classificateur **verbal** après le verbe :\n- **次** (cì) : fois, le plus général.\n- **遍** (biàn) : fois, **du début à la fin** : 这本书我看了两遍 (lu deux fois en entier).\n- **趟** (tàng) : un **aller-retour**, un voyage : 回了一趟老家.\n- **顿** (dùn) : pour les **repas** (et les réprimandes) : 吃了一顿饺子, 骂了他一顿.\n- **场** (chǎng) : pour une **séance**, un match, un spectacle, une averse : 看了一场电影, 下了一场雨.\n\nOrdre : un objet **nom commun** vient après le classificateur (看了一场电影) ; un **pronom personnel** vient avant (骂了他一顿).",
      "To count **how many times** an action happens, put a **verbal** measure word after the verb:\n- **次** (cì): time, the most general.\n- **遍** (biàn): time, **from start to finish**: 这本书我看了两遍 (read it through twice).\n- **趟** (tàng): a **round trip**, a journey: 回了一趟老家.\n- **顿** (dùn): for **meals** (and scoldings): 吃了一顿饺子, 骂了他一顿.\n- **场** (chǎng): a **session**, match, show, downpour: 看了一场电影, 下了一场雨.\n\nOrder: a **common noun** object comes after the measure word (看了一场电影); a **personal pronoun** comes before (骂了他一顿)."
    ),
    examples: [
      ex("春节我回了一趟老家。", "Chūnjié wǒ huí le yí tàng lǎojiā.", "Pour le Nouvel An, je suis rentré dans ma ville natale.", "I made a trip back to my hometown for Spring Festival."),
      ex("除夕晚上，全家人一起吃了一顿年夜饭。", "Chúxī wǎnshang, quánjiārén yìqǐ chī le yí dùn niányèfàn.", "Le soir du réveillon, toute la famille a partagé le dîner du Nouvel An.", "On New Year's Eve, the whole family had the reunion dinner together."),
      ex("这个故事我听过好几遍了。", "Zhège gùshi wǒ tīng guo hǎo jǐ biàn le.", "Cette histoire, je l'ai entendue plusieurs fois.", "I've heard this story quite a few times."),
      ex("昨晚我们看了一场演出。", "Zuó wǎn wǒmen kàn le yì chǎng yǎnchū.", "Hier soir, on a vu un spectacle.", "Last night we watched a performance."),
    ],
    pitfalls: t(
      "✗ 我两次去过北京。 → le classificateur verbal suit le verbe. ✓ 我去过两次北京。/ 我去过北京两次。\n✗ 吃了一次饭 n'est pas faux, mais 吃了一顿饭 est bien plus naturel pour un repas.",
      "✗ 我两次去过北京。 → the verbal measure word follows the verb. ✓ 我去过两次北京。/ 我去过北京两次。\n吃了一次饭 isn't wrong, but 吃了一顿饭 is far more natural for a meal."
    ),
    category: "量词 / measure words",
  },
  {
    id: "hsk3-g42",
    level: 3,
    title: t("Moins bien que : A 不如 B", "Not as good as: A 不如 B"),
    pattern: "A + 不如 + B (+ Adj)",
    explanation: t(
      "**A 不如 B** (bùrú) = « A ne vaut pas B, A est moins… que B ». Utilisé seul, il signifie que **B est meilleur** : 我的中文不如他 (mon chinois n'est pas aussi bon que le sien).\n\nOn peut préciser l'aspect avec un adjectif **positif** : 这个学校不如那个学校大.\n\n不如 sert aussi à faire une **suggestion** : 与其等车，不如走路 → plus simplement, 我们不如走路去吧 (on ferait mieux d'y aller à pied).",
      "**A 不如 B** (bùrú) = \"A is not as good as B, A is less… than B\". On its own, it means **B is better**: 我的中文不如他 (my Chinese isn't as good as his).\n\nYou can specify the aspect with a **positive** adjective: 这个学校不如那个学校大.\n\n不如 is also used for **suggestions**: 我们不如走路去吧 (we'd better walk)."
    ),
    examples: [
      ex("我的数学成绩不如我姐姐。", "Wǒ de shùxué chéngjì bùrú wǒ jiějie.", "Mes notes en maths sont moins bonnes que celles de ma sœur.", "My maths grades aren't as good as my sister's."),
      ex("这所大学不如那所大学有名。", "Zhè suǒ dàxué bùrú nà suǒ dàxué yǒumíng.", "Cette université est moins connue que l'autre.", "This university isn't as famous as that one."),
      ex("在家复习不如去图书馆。", "Zài jiā fùxí bùrú qù túshūguǎn.", "Réviser à la maison, c'est moins bien que d'aller à la bibliothèque.", "Studying at home isn't as good as going to the library."),
    ],
    pitfalls: t(
      "✗ 这个不如那个小。 → avec 不如, préfère un adjectif **positif** (grand, bon, beau…). ✓ 这个不如那个大。\n✗ 我不如他很高。 → pas d'adverbe de degré. ✓ 我不如他高。",
      "✗ 这个不如那个小。 → with 不如, use a **positive** adjective (big, good, pretty…). ✓ 这个不如那个大。\n✗ 我不如他很高。 → no degree adverb. ✓ 我不如他高。"
    ),
    category: "比较句 / comparison",
  },
  {
    id: "hsk3-g43",
    level: 3,
    title: t("Comparer avec précision : 没有……那么, 比……得多 / 一点儿", "Precise comparison: 没有……那么, 比……得多 / 一点儿"),
    pattern: "A + 没有 + B + (那么/这么) + Adj ｜ A + 比 + B + Adj + 得多 / 多了 / 一点儿",
    explanation: t(
      "**A 没有 B (那么) Adj** : « A n'est pas aussi… que B ». C'est la négation la plus naturelle d'une phrase en 比 : 这里没有北京那么冷.\n\nPour **mesurer l'écart** dans une phrase en 比, on met la précision **après l'adjectif** :\n- grand écart : **得多** ou **多了** : 他比我高得多.\n- petit écart : **一点儿 / 一些** : 今天比昨天冷一点儿.\n- écart précis : un **nombre** : 他比我大三岁.\n\nOn ne met **jamais** 很 / 非常 / 太 devant l'adjectif dans une phrase en 比 ; on peut en revanche utiliser **更** ou **还** : 他比我还忙.",
      "**A 没有 B (那么) Adj**: \"A is not as… as B\". It's the most natural negative of a 比 sentence: 这里没有北京那么冷.\n\nTo **measure the gap** in a 比 sentence, put the detail **after the adjective**:\n- big gap: **得多** or **多了**: 他比我高得多.\n- small gap: **一点儿 / 一些**: 今天比昨天冷一点儿.\n- exact gap: a **number**: 他比我大三岁.\n\n**Never** put 很 / 非常 / 太 before the adjective in a 比 sentence; you can use **更** or **还**: 他比我还忙."
    ),
    examples: [
      ex("中国的高考比法国的考试难得多。", "Zhōngguó de gāokǎo bǐ Fǎguó de kǎoshì nán de duō.", "Le gaokao chinois est bien plus difficile que l'examen français.", "China's gaokao is much harder than the French exam."),
      ex("小学的作业没有中学那么多。", "Xiǎoxué de zuòyè méiyǒu zhōngxué nàme duō.", "À l'école primaire, il n'y a pas autant de devoirs qu'au collège.", "Primary school homework isn't as heavy as secondary school."),
      ex("这次考试比上次好一点儿。", "Zhè cì kǎoshì bǐ shàng cì hǎo yìdiǎnr.", "Cet examen s'est un peu mieux passé que le précédent.", "This exam went a bit better than the last one."),
      ex("我妹妹比我小五岁。", "Wǒ mèimei bǐ wǒ xiǎo wǔ suì.", "Ma petite sœur a cinq ans de moins que moi.", "My younger sister is five years younger than me."),
    ],
    pitfalls: t(
      "✗ 他比我很高。 → ✓ 他比我高得多。/ 他比我高很多。\n✗ 他比我不高。 → la négation normale est 没有. ✓ 他没有我高。\n✗ 他比我一点儿高。 → la mesure se place après l'adjectif. ✓ 他比我高一点儿。",
      "✗ 他比我很高。 → ✓ 他比我高得多。/ 他比我高很多。\n✗ 他比我不高。 → the normal negative uses 没有. ✓ 他没有我高。\n✗ 他比我一点儿高。 → the amount goes after the adjective. ✓ 他比我高一点儿。"
    ),
    category: "比较句 / comparison",
  },
  {
    id: "hsk3-g44",
    level: 3,
    title: t("Pareil, différent : 跟……一样 / 不一样 / 相同 / 不同", "Same, different: 跟……一样 / 不一样 / 相同 / 不同"),
    pattern: "A + 跟/和 + B + 一样 (+ Adj) ｜ A + 跟 + B + 不一样 / 不同",
    explanation: t(
      "**A 跟 B 一样** = « A est pareil que B ». On peut ajouter un adjectif pour préciser : 他跟我一样高 (il est aussi grand que moi).\n\nNégation : **A 跟 B 不一样** (la négation porte sur 一样, pas sur 跟).\n\nPlus soutenu : **相同** (identique) / **不同** (différent). Ils s'utilisent aussi devant un nom : 不同的国家有不同的教育制度.",
      "**A 跟 B 一样** = \"A is the same as B\". Add an adjective to be specific: 他跟我一样高 (he's as tall as me).\n\nNegative: **A 跟 B 不一样** (negate 一样, not 跟).\n\nMore formal: **相同** (identical) / **不同** (different). They also work before a noun: 不同的国家有不同的教育制度."
    ),
    examples: [
      ex("中国的大学跟法国的大学不一样。", "Zhōngguó de dàxué gēn Fǎguó de dàxué bù yíyàng.", "Les universités chinoises ne sont pas comme les universités françaises.", "Chinese universities aren't like French ones."),
      ex("我的专业跟我哥哥一样。", "Wǒ de zhuānyè gēn wǒ gēge yíyàng.", "J'ai choisi la même spécialité que mon grand frère.", "My major is the same as my older brother's."),
      ex("不同的学生有不同的学习方法。", "Bùtóng de xuésheng yǒu bùtóng de xuéxí fāngfǎ.", "Chaque élève a sa propre façon d'apprendre.", "Different students have different ways of learning."),
    ],
    pitfalls: t(
      "✗ 我不跟他一样。 → ✓ 我跟他不一样。\n✗ 他跟我一样很高。 → pas de 很. ✓ 他跟我一样高。",
      "✗ 我不跟他一样。 → ✓ 我跟他不一样。\n✗ 他跟我一样很高。 → no 很. ✓ 他跟我一样高。"
    ),
    category: "比较句 / comparison",
  },
  {
    id: "hsk3-g45",
    level: 3,
    title: t("Faute de mieux : 只好", "Have no choice but: 只好"),
    pattern: "(raison)，Sujet + 只好 + Verbe",
    explanation: t(
      "**只好** (zhǐhǎo) = « être obligé de, n'avoir pas d'autre choix que ». On fait quelque chose **à contrecœur**, parce que les circonstances l'imposent.\n\nIl se place **après le sujet**, devant le verbe, et suit souvent une **raison** : 没有公交车了，我只好打车。\n\nSynonyme plus fort : **不得不** (voir la double négation).",
      "**只好** (zhǐhǎo) = \"have no choice but to, have to\". You do something **reluctantly** because circumstances force you.\n\nIt goes **after the subject**, before the verb, often after a **reason**: 没有公交车了，我只好打车。\n\nA stronger synonym: **不得不** (see double negatives)."
    ),
    examples: [
      ex("我没考上理想的大学，只好再复习一年。", "Wǒ méi kǎoshang lǐxiǎng de dàxué, zhǐhǎo zài fùxí yì nián.", "Je n'ai pas été admis dans l'université de mes rêves, alors je dois repasser l'examen l'an prochain.", "I didn't get into my dream university, so I have to study another year and retake it."),
      ex("图书馆关门了，我们只好回宿舍学习。", "Túshūguǎn guānmén le, wǒmen zhǐhǎo huí sùshè xuéxí.", "La bibliothèque était fermée, on a dû retourner réviser au dortoir.", "The library was closed, so we had to go back to the dorm to study."),
      ex("老师病了，今天的课只好取消。", "Lǎoshī bìng le, jīntiān de kè zhǐhǎo qǔxiāo.", "Le prof est malade, le cours d'aujourd'hui doit être annulé.", "The teacher is ill, so today's class has to be cancelled."),
    ],
    pitfalls: t(
      "✗ 只好我走路。 → après le sujet. ✓ 我只好走路。\nNe confonds pas 只好 (pas le choix) et 最好 (le mieux serait de) : 你最好早点儿睡 = tu ferais mieux de te coucher tôt.",
      "✗ 只好我走路。 → after the subject. ✓ 我只好走路。\nDon't confuse 只好 (no choice) with 最好 (had better): 你最好早点儿睡 = you'd better go to bed early."
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g46",
    level: 3,
    title: t("Puisque : 既然……就", "Since (given that): 既然……就"),
    pattern: "既然 + fait admis，(Sujet) + 就 + conclusion",
    explanation: t(
      "**既然** (jìrán) = « puisque, du moment que ». La première partie est un **fait déjà connu ou admis** par les deux interlocuteurs ; la deuxième en tire une **conclusion**, souvent un conseil ou une décision, introduite par **就** (ou 也, 还).\n\nDifférence avec **因为** : 因为 donne une **cause** nouvelle ; 既然 part d'un fait **déjà établi** pour tirer une conséquence : 既然你不舒服，就别去上课了 (puisque tu ne te sens pas bien — on le sait — ne va pas en cours).",
      "**既然** (jìrán) = \"since, now that\". The first part is a fact **already known or accepted** by both speakers; the second draws a **conclusion**, often advice or a decision, introduced by **就** (or 也, 还).\n\nDifference from **因为**: 因为 gives a new **cause**; 既然 starts from an **established** fact to draw a consequence: 既然你不舒服，就别去上课了 (since you're unwell — as we both know — don't go to class)."
    ),
    examples: [
      ex("既然你喜欢画画，就去学美术吧。", "Jìrán nǐ xǐhuan huàhuà, jiù qù xué měishù ba.", "Puisque tu aimes dessiner, pourquoi ne pas étudier les beaux-arts ?", "Since you like drawing, why not study art?"),
      ex("既然已经决定了，就别后悔。", "Jìrán yǐjīng juédìng le, jiù bié hòuhuǐ.", "Puisque c'est décidé, pas de regrets.", "Now that you've decided, don't regret it."),
      ex("既然考试结束了，我们就好好儿休息几天。", "Jìrán kǎoshì jiéshù le, wǒmen jiù hǎohāor xiūxi jǐ tiān.", "Maintenant que les examens sont finis, on va bien se reposer quelques jours.", "Since the exams are over, let's have a good rest for a few days."),
    ],
    pitfalls: t(
      "✗ 既然……所以…… → 既然 va avec 就. ✓ 既然……就……\n✗ 既然 + information nouvelle : ✗ 既然我头疼，所以没来 (on explique une cause) → ✓ 因为我头疼，所以没来。",
      "✗ 既然……所以…… → 既然 pairs with 就. ✓ 既然……就……\n✗ Using 既然 for new information: ✗ 既然我头疼，所以没来 (explaining a cause) → ✓ 因为我头疼，所以没来。"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g47",
    level: 3,
    title: t("Au sujet de, envers : 关于 / 对于", "About, regarding: 关于 / 对于"),
    pattern: "关于 + sujet，… ｜ 关于 + sujet + 的 + Nom ｜ 对于 + objet / personne，…",
    explanation: t(
      "- **关于** (guānyú) = « au sujet de, à propos de » : il introduit le **thème** dont on parle. Souvent devant un nom avec 的 : 关于环境的新闻 (une information sur l'environnement), ou en tête de phrase : 关于这个问题，……\n- **对于** (duìyú) = « envers, en ce qui concerne » : il introduit l'**objet** vers lequel se dirige une attitude, un jugement : 对于这个决定，大家都很满意.\n\nTruc : si tu peux dire « au sujet de », pense 关于 ; si tu peux dire « envers / vis-à-vis de », pense 对于. En cas de doute, 关于 ne se place **jamais après le sujet**, alors que 对于 le peut : 我对于这件事有意见。",
      "- **关于** (guānyú) = \"about, concerning\": it introduces the **topic**. Often before a noun with 的: 关于环境的新闻 (news about the environment), or at the start: 关于这个问题，……\n- **对于** (duìyú) = \"towards, regarding\": it introduces the **target** of an attitude or judgement: 对于这个决定，大家都很满意.\n\nTip: if you can say \"about\", think 关于; if you can say \"towards / with regard to\", think 对于. When unsure: 关于 **never goes after the subject**, while 对于 can: 我对于这件事有意见。"
    ),
    examples: [
      ex("关于这个问题，每个人都有自己的看法。", "Guānyú zhège wèntí, měi ge rén dōu yǒu zìjǐ de kànfǎ.", "Sur cette question, chacun a son avis.", "Everyone has their own view on this issue."),
      ex("我最近看了一本关于中国历史的书。", "Wǒ zuìjìn kàn le yì běn guānyú Zhōngguó lìshǐ de shū.", "J'ai lu récemment un livre sur l'histoire de la Chine.", "I recently read a book about Chinese history."),
      ex("对于年轻人来说，找工作不容易。", "Duìyú niánqīngrén lái shuō, zhǎo gōngzuò bù róngyì.", "Pour les jeunes, trouver du travail n'est pas facile.", "For young people, finding a job isn't easy."),
    ],
    pitfalls: t(
      "✗ 我关于这件事有意见。 → 关于 ne suit pas le sujet. ✓ 关于这件事，我有意见。/ 我对于这件事有意见。\n✗ 这是一本对于音乐的书。 → pour un thème : ✓ 这是一本关于音乐的书。",
      "✗ 我关于这件事有意见。 → 关于 can't follow the subject. ✓ 关于这件事，我有意见。/ 我对于这件事有意见。\n✗ 这是一本对于音乐的书。 → for a topic: ✓ 这是一本关于音乐的书。"
    ),
    category: "介词 / prepositions",
  },
  {
    id: "hsk3-g48",
    level: 3,
    title: t("Ce n'est pas A mais B : 不是……而是", "Not A but B: 不是……而是"),
    pattern: "(Sujet) + 不是 + A，而是 + B",
    explanation: t(
      "**不是A，而是B** (bú shì… ér shì…) sert à **corriger** une idée : « ce n'est pas A, c'est B ». On rejette A et on affirme B à sa place.\n\nTrès utile pour **donner son opinion** ou nuancer : 问题不是钱，而是时间 (le problème, ce n'est pas l'argent, c'est le temps).\n\nNe confonds pas avec **不是A，就是B** (soit A, soit B) : cf. le point sur 不是……就是.",
      "**不是A，而是B** (bú shì… ér shì…) **corrects** an idea: \"it's not A, it's B\". You reject A and assert B instead.\n\nVery useful for **giving your opinion** or adding nuance: 问题不是钱，而是时间 (the problem isn't money, it's time).\n\nDon't confuse it with **不是A，就是B** (either A or B): see the point on 不是……就是."
    ),
    examples: [
      ex("我不是不同意，而是还需要考虑一下。", "Wǒ bú shì bù tóngyì, ér shì hái xūyào kǎolǜ yíxià.", "Ce n'est pas que je ne suis pas d'accord, c'est que j'ai besoin d'y réfléchir.", "It's not that I disagree — I just need to think it over."),
      ex("成功的关键不是聪明，而是努力。", "Chénggōng de guānjiàn bú shì cōngming, ér shì nǔlì.", "La clé du succès, ce n'est pas l'intelligence mais le travail.", "The key to success isn't intelligence, it's hard work."),
      ex("他不是我的老师，而是我的同学。", "Tā bú shì wǒ de lǎoshī, ér shì wǒ de tóngxué.", "Ce n'est pas mon prof, c'est mon camarade de classe.", "He's not my teacher, he's my classmate."),
    ],
    pitfalls: t(
      "✗ 不是A，但是B → ✓ 不是A，而是B。\n✗ 他不是医生，而他是老师。 → 而是 ne se sépare pas. ✓ 他不是医生，而是老师。",
      "✗ 不是A，但是B → ✓ 不是A，而是B。\n✗ 他不是医生，而他是老师。 → 而是 stays together. ✓ 他不是医生，而是老师。"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g49",
    level: 3,
    title: t("Bien que : 尽管……还是 / 但是", "Although: 尽管……还是 / 但是"),
    pattern: "尽管 + fait，(但是/可是) + Sujet + 还是 / 却 / 也 + …",
    explanation: t(
      "**尽管** (jǐnguǎn) = « bien que, même si (c'est vrai) ». Comme 虽然, il introduit un **fait réel** qui aurait pu empêcher le résultat, mais le résultat a lieu **malgré tout**.\n\n尽管 est un peu **plus fort et plus écrit** que 虽然. La seconde partie contient souvent **但是 / 可是** et/ou **还是 / 却 / 也**.\n\nRappel : pour une **hypothèse**, on utilise **即使……也** et non 尽管.",
      "**尽管** (jǐnguǎn) = \"although, even though (it's true)\". Like 虽然, it introduces a **real fact** that could have prevented the result, but the result happens **anyway**.\n\n尽管 is a bit **stronger and more written** than 虽然. The second clause often has **但是 / 可是** and/or **还是 / 却 / 也**.\n\nReminder: for a **hypothesis**, use **即使……也**, not 尽管."
    ),
    examples: [
      ex("尽管大家都反对，他还是坚持自己的意见。", "Jǐnguǎn dàjiā dōu fǎnduì, tā háishi jiānchí zìjǐ de yìjiàn.", "Bien que tout le monde soit contre, il maintient son point de vue.", "Although everyone objected, he stuck to his opinion."),
      ex("尽管我不同意你的看法，但是我尊重你。", "Jǐnguǎn wǒ bù tóngyì nǐ de kànfǎ, dànshì wǒ zūnzhòng nǐ.", "Même si je ne partage pas ton avis, je te respecte.", "Although I disagree with you, I respect you."),
      ex("尽管很累，她还是把报告写完了。", "Jǐnguǎn hěn lèi, tā háishi bǎ bàogào xiěwán le.", "Malgré la fatigue, elle a fini d'écrire son rapport.", "Tired as she was, she still finished writing the report."),
    ],
    pitfalls: t(
      "✗ 尽管明天下雨，我也去。 → hypothèse : ✓ 即使明天下雨，我也去。\n✗ 尽管……所以…… → 尽管 exprime une concession, pas une cause.",
      "✗ 尽管明天下雨，我也去。 → hypothesis: ✓ 即使明天下雨，我也去。\n✗ 尽管……所以…… → 尽管 is a concession, not a cause."
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g50",
    level: 3,
    title: t("En fait : 其实", "Actually: 其实"),
    pattern: "其实 + proposition ｜ Sujet + 其实 + Verbe",
    explanation: t(
      "**其实** (qíshí) = « en fait, en réalité ». Il introduit la **vérité** qui **corrige** une apparence, une idée reçue, ou ce que l'autre pense.\n\nIl se place en tête de phrase ou après le sujet : 其实我不太喜欢 / 我其实不太喜欢.\n\nTrès utile pour **nuancer poliment** son opinion. Attention : 其实 ne veut **pas** dire « actuellement » (现在 / 目前).",
      "**其实** (qíshí) = \"actually, in fact\". It introduces the **truth** that **corrects** an appearance, a common belief, or what the other person thinks.\n\nIt goes at the start or after the subject: 其实我不太喜欢 / 我其实不太喜欢.\n\nGreat for **politely nuancing** your opinion. Careful: French speakers, 其实 does **not** mean \"actuellement\" (that's 现在 / 目前)."
    ),
    examples: [
      ex("很多人觉得中文很难，其实语法很简单。", "Hěn duō rén juéde Zhōngwén hěn nán, qíshí yǔfǎ hěn jiǎndān.", "Beaucoup pensent que le chinois est difficile, mais en fait la grammaire est simple.", "Many people think Chinese is hard, but actually the grammar is simple."),
      ex("他看起来很严格，其实人很好。", "Tā kàn qilai hěn yángé, qíshí rén hěn hǎo.", "Il a l'air sévère, mais en réalité il est très gentil.", "He looks strict, but he's actually really nice."),
      ex("其实我也不太清楚。", "Qíshí wǒ yě bú tài qīngchu.", "À vrai dire, je ne sais pas trop non plus.", "Actually, I'm not too sure either."),
    ],
    pitfalls: t(
      "✗ 其实我在北京工作 (pour « actuellement ») → ✓ 我现在在北京工作。\n其实 introduit une **correction** : il faut qu'il y ait une idée à corriger (même implicite).",
      "✗ Using 其实 for \"currently\" → ✓ 我现在在北京工作。\n其实 introduces a **correction**: there must be an idea (even implicit) being corrected."
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g51",
    level: 3,
    title: t("Au contraire : 反而", "On the contrary: 反而"),
    pattern: "(On s'attendait à A)，Sujet + 反而 + contraire de A",
    explanation: t(
      "**反而** (fǎn'ér) = « au contraire, finalement c'est l'inverse ». Le résultat est **contraire à ce qu'on attendait** logiquement.\n\nIl se place **après le sujet**, devant le verbe. Souvent précédé de **不但不 / 不但没** : 吃了药，病不但没好，反而更严重了 (après le médicament, non seulement ça ne va pas mieux, mais c'est même pire).\n\nNuance avec 却 : 却 marque une simple opposition ; 反而 dit que c'est **carrément l'inverse** de l'attente.",
      "**反而** (fǎn'ér) = \"on the contrary, instead\". The result is the **opposite of what you'd logically expect**.\n\nIt goes **after the subject**, before the verb. Often preceded by **不但不 / 不但没**: 吃了药，病不但没好，反而更严重了 (after the medicine, not only did it not improve, it got worse).\n\nNuance with 却: 却 marks simple contrast; 反而 says it's **the very opposite** of what was expected."
    ),
    examples: [
      ex("我帮他说话，他反而生我的气。", "Wǒ bāng tā shuōhuà, tā fǎn'ér shēng wǒ de qì.", "J'ai pris sa défense, et c'est à moi qu'il en veut !", "I stood up for him, and instead he got angry with me."),
      ex("雨不但没停，反而越下越大了。", "Yǔ búdàn méi tíng, fǎn'ér yuè xià yuè dà le.", "La pluie ne s'est pas arrêtée, au contraire, elle redouble.", "Far from stopping, the rain got heavier and heavier."),
      ex("手机让交流更方便，人们反而见面少了。", "Shǒujī ràng jiāoliú gèng fāngbiàn, rénmen fǎn'ér jiànmiàn shǎo le.", "Le téléphone facilite la communication, et pourtant on se voit moins.", "Phones make communication easier, yet people actually meet less."),
    ],
    pitfalls: t(
      "✗ 反而他没来。 → après le sujet. ✓ 他反而没来。\n✗ 他很努力，反而考得很好。 → le résultat est attendu, pas contraire : pas de 反而. ✓ 他很努力，所以考得很好。",
      "✗ 反而他没来。 → after the subject. ✓ 他反而没来。\n✗ 他很努力，反而考得很好。 → the result is expected, not opposite: no 反而. ✓ 他很努力，所以考得很好。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g52",
    level: 3,
    title: t("Pas du tout (réfutation) : 并 + 不 / 没", "Not at all (rebuttal): 并 + 不 / 没"),
    pattern: "Sujet + 并 + 不 / 没(有) + Verbe / Adj",
    explanation: t(
      "**并** (bìng) devant **不** ou **没** renforce la négation pour **contredire** une idée que l'autre a (ou pourrait avoir) : « pas du tout, contrairement à ce qu'on croit ».\n\n这个问题并不难 = cette question n'est pas si difficile (contrairement à ce que tu penses).\n\nC'est idéal pour **défendre son opinion** dans une discussion. Sans contexte d'idée reçue, 并 sonne bizarre.",
      "**并** (bìng) before **不** or **没** strengthens the negation to **contradict** an idea the other person has (or might have): \"not at all, contrary to what you think\".\n\n这个问题并不难 = this question isn't actually hard (despite what you think).\n\nIdeal for **defending your view** in a discussion. Without an assumption to contradict, 并 sounds odd."
    ),
    examples: [
      ex("网上的消息并不都是真的。", "Wǎng shang de xiāoxi bìng bù dōu shì zhēn de.", "Les informations en ligne ne sont pas toutes vraies, loin de là.", "Not everything online is true, you know."),
      ex("我并没有说你不对，只是有不同的看法。", "Wǒ bìng méiyǒu shuō nǐ bú duì, zhǐshì yǒu bùtóng de kànfǎ.", "Je n'ai jamais dit que tu avais tort, j'ai juste un avis différent.", "I never said you were wrong — I just see it differently."),
      ex("钱多并不一定幸福。", "Qián duō bìng bù yídìng xìngfú.", "Avoir beaucoup d'argent ne rend pas forcément heureux.", "Having lots of money doesn't necessarily make you happy."),
    ],
    pitfalls: t(
      "✗ 我并喜欢。 → 并 (dans ce sens) n'apparaît que devant une **négation**. ✓ 我并不喜欢。\n✗ 并他不知道。 → après le sujet. ✓ 他并不知道。",
      "✗ 我并喜欢。 → in this sense 并 only comes before a **negation**. ✓ 我并不喜欢。\n✗ 并他不知道。 → after the subject. ✓ 他并不知道。"
    ),
    category: "副词 / adverbs",
  },
];
