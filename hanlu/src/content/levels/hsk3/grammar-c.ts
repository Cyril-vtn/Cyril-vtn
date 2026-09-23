import type { GrammarPoint } from "../../types";
import { t, ex } from "./helpers";

export const grammarC: GrammarPoint[] = [
  {
    id: "hsk3-g53",
    level: 3,
    title: t("Au juste, finalement : 究竟 / 到底", "On earth, after all: 究竟 / 到底"),
    pattern: "Sujet + 究竟 / 到底 + question ?",
    explanation: t(
      "Dans une **question**, **到底** (dàodǐ, oral) et **究竟** (jiūjìng, plus écrit) expriment l'**impatience** ou l'envie de savoir **la vérité** : « au juste, enfin, bon sang ».\n\nLa phrase doit être une **vraie question** : avec un mot interrogatif, une alternative 还是, ou la forme V不V — mais **pas avec 吗** : ✗ 你到底去吗？ ✓ 你到底去不去？\n\n到底 a aussi un sens affirmatif : « finalement, au bout du compte » : 问题到底解决了 (le problème a fini par être réglé).",
      "In a **question**, **到底** (dàodǐ, spoken) and **究竟** (jiūjìng, more written) show **impatience** or a wish to know **the truth**: \"on earth, exactly, after all\".\n\nThe sentence must be a **real question**: with a question word, a 还是 alternative, or the V不V form — but **not with 吗**: ✗ 你到底去吗？ ✓ 你到底去不去？\n\n到底 also has an affirmative meaning: \"finally, in the end\": 问题到底解决了 (the problem was finally solved)."
    ),
    examples: [
      ex("这条新闻到底是真的还是假的？", "Zhè tiáo xīnwén dàodǐ shì zhēn de háishi jiǎ de?", "Alors, cette info, elle est vraie ou fausse ?", "So is this news actually true or fake?"),
      ex("究竟发生了什么事？", "Jiūjìng fāshēng le shénme shì?", "Que s'est-il passé au juste ?", "What exactly happened?"),
      ex("你到底想不想看这个视频？", "Nǐ dàodǐ xiǎng bu xiǎng kàn zhège shìpín?", "Bon, tu veux voir cette vidéo ou pas ?", "Do you want to watch this video or not?"),
    ],
    pitfalls: t(
      "✗ 你到底喜欢吗？ → pas de 吗. ✓ 你到底喜不喜欢？\n✗ 到底谁你是？ → ✓ 你到底是谁？ (到底 se place après le sujet s'il n'est pas un mot interrogatif ; devant le sujet interrogatif : 到底谁对？)",
      "✗ 你到底喜欢吗？ → no 吗. ✓ 你到底喜不喜欢？\n✗ 到底谁你是？ → ✓ 你到底是谁？ (到底 follows a normal subject; it precedes a question-word subject: 到底谁对？)"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g54",
    level: 3,
    title: t("下去 au sens figuré : continuer", "Figurative 下去: continuing"),
    pattern: "Verbe + 下去 ｜ Adj (négatif) + 下去",
    explanation: t(
      "Après un verbe, **下去** indique qu'une action **se poursuit** à partir de maintenant, vers l'avenir : 说下去 (continue à parler), 坚持下去 (tenir bon).\n\nAprès un adjectif (souvent négatif), il indique qu'un état **va continuer à s'aggraver** : 天气会冷下去.\n\nAvec la potentialité : **V不下去** = ne plus pouvoir continuer : 我看不下去了 (je ne peux plus regarder ça). Comparaison : 起来 = début, 下去 = continuation.",
      "After a verb, **下去** shows an action **continues** from now on: 说下去 (go on talking), 坚持下去 (keep going).\n\nAfter an adjective (often negative), it shows a state **will keep getting worse**: 天气会冷下去.\n\nWith the potential form: **V不下去** = can't go on: 我看不下去了 (I can't bear to watch any more). Compare: 起来 = starting, 下去 = continuing."
    ),
    examples: [
      ex("这个节目很受欢迎，希望能一直做下去。", "Zhège jiémù hěn shòu huānyíng, xīwàng néng yìzhí zuò xiaqu.", "Cette émission a beaucoup de succès, j'espère qu'elle va continuer.", "This show is very popular — hopefully it'll keep going."),
      ex("你说得很好，请继续说下去。", "Nǐ shuō de hěn hǎo, qǐng jìxù shuō xiaqu.", "C'est très bien, continue, je t'en prie.", "You're doing great — please go on."),
      ex("这种假新闻，我真的看不下去了。", "Zhè zhǒng jiǎ xīnwén, wǒ zhēn de kàn bu xiàqu le.", "Ce genre de fausses infos, je ne peux vraiment plus les supporter.", "I really can't stand watching this kind of fake news any more."),
    ],
    pitfalls: t(
      "✗ 我要下去学习中文。 → 下去 suit le verbe. ✓ 我要学下去。/ 我要继续学中文。\n✗ Avec un objet : ✗ 学下去中文 → reformule : ✓ 把中文学下去 / 继续学中文。",
      "✗ 我要下去学习中文。 → 下去 follows the verb. ✓ 我要学下去。/ 我要继续学中文。\n✗ With an object: ✗ 学下去中文 → rephrase: ✓ 继续学中文。"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g55",
    level: 3,
    title: t("出来 au sens figuré : identifier, créer", "Figurative 出来: identifying, producing"),
    pattern: "看 / 听 / 认 / 想 / 写 + 出来",
    explanation: t(
      "Au sens figuré, **出来** indique qu'on fait **apparaître** quelque chose qui était caché ou inexistant :\n1. **Identifier, reconnaître** : 看出来 (remarquer, voir que), 听出来 (reconnaître à la voix), 认出来 (reconnaître quelqu'un).\n2. **Produire, créer** : 想出来 (trouver une idée), 写出来 (rédiger).\n\nPotentialité : 看得出来 / 看不出来 (on voit / on ne voit pas que…). Avec un objet : 我认出他来了 / 我认出来了他 — l'objet se met souvent entre 出 et 来.",
      "Figuratively, **出来** means making something **emerge** that was hidden or didn't exist:\n1. **Identify, recognise**: 看出来 (notice, tell), 听出来 (recognise by sound), 认出来 (recognise someone).\n2. **Produce, create**: 想出来 (come up with), 写出来 (write out).\n\nPotential: 看得出来 / 看不出来 (you can / can't tell that…). With an object: 我认出他来了 — the object often goes between 出 and 来."
    ),
    examples: [
      ex("你看得出来这张照片是假的吗？", "Nǐ kàn de chūlai zhè zhāng zhàopiàn shì jiǎ de ma?", "Tu arrives à voir que cette photo est truquée ?", "Can you tell this photo is fake?"),
      ex("我一听就听出来是你的声音。", "Wǒ yì tīng jiù tīng chulai shì nǐ de shēngyīn.", "J'ai tout de suite reconnu ta voix.", "I recognised your voice straight away."),
      ex("记者想出来一个好办法。", "Jìzhě xiǎng chulai yí ge hǎo bànfǎ.", "Le journaliste a trouvé une bonne idée.", "The reporter came up with a good idea."),
    ],
    pitfalls: t(
      "✗ 我想起来一个好办法。 → une idée **nouvelle** : ✓ 我想出来一个好办法。 (想起来 = se souvenir)\n✗ 我看出来不了。 → ✓ 我看不出来。",
      "✗ 我想起来一个好办法。 → for a **new** idea: ✓ 我想出来一个好办法。 (想起来 = recall)\n✗ 我看出来不了。 → ✓ 我看不出来。"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g56",
    level: 3,
    title: t("Mots interrogatifs « indéfinis » : quelque chose, quelqu'un", "Question words as indefinites: something, someone"),
    pattern: "Verbe + (一)点儿 + 什么 ｜ 好像在哪儿… ｜ 有谁…",
    explanation: t(
      "Dans une phrase **non interrogative**, un mot interrogatif peut désigner quelque chose de **vague ou d'inconnu** : **什么** = quelque chose, **谁** = quelqu'un, **哪儿** = quelque part.\n\n- 我想吃点儿什么 = j'ai envie de manger quelque chose.\n- 我好像在哪儿见过他 = il me semble l'avoir vu quelque part.\n\nC'est fréquent avec **好像, 可能, 想, 点儿**. Si la phrase se termine par **吗**, c'est une question oui/non : 你想吃点儿什么吗？ = Tu veux manger quelque chose ?",
      "In a **non-question** sentence, a question word can mean something **vague or unknown**: **什么** = something, **谁** = someone, **哪儿** = somewhere.\n\n- 我想吃点儿什么 = I feel like eating something.\n- 我好像在哪儿见过他 = I think I've seen him somewhere.\n\nCommon with **好像, 可能, 想, 点儿**. If the sentence ends with **吗**, it's a yes/no question: 你想吃点儿什么吗？ = Do you want something to eat?"
    ),
    examples: [
      ex("我好像在哪儿看过这条新闻。", "Wǒ hǎoxiàng zài nǎr kàn guo zhè tiáo xīnwén.", "Il me semble avoir vu cette info quelque part.", "I think I've seen this news somewhere."),
      ex("网上有什么新消息吗？", "Wǎng shang yǒu shénme xīn xiāoxi ma?", "Il y a du nouveau sur internet ?", "Is there any news online?"),
      ex("好像有谁在门口等你。", "Hǎoxiàng yǒu shéi zài ménkǒu děng nǐ.", "On dirait que quelqu'un t'attend à la porte.", "It seems someone's waiting for you at the door."),
    ],
    pitfalls: t(
      "Attention à l'ambiguïté : 你想吃什么？ (Que veux-tu manger ?) ≠ 你想吃点儿什么吗？ (Tu veux manger quelque chose ?). C'est le **吗** qui change tout.\n✗ 我想买东西什么 → ✓ 我想买点儿什么。",
      "Watch the ambiguity: 你想吃什么？ (What do you want to eat?) ≠ 你想吃点儿什么吗？ (Do you want something to eat?). The **吗** changes everything.\n✗ 我想买东西什么 → ✓ 我想买点儿什么。"
    ),
    category: "代词 / pronouns",
  },
  {
    id: "hsk3-g57",
    level: 3,
    title: t("Nombres approximatifs : 左右, 多, 几, deux chiffres voisins", "Approximate numbers: 左右, 多, 几, neighbouring numbers"),
    pattern: "Num + 左右 ｜ Num + 多 + Cl ｜ 几 + 十/百 ｜ 三四个",
    explanation: t(
      "Pour donner un **ordre de grandeur** :\n- **左右** (zuǒyòu) après la quantité : « environ » : 一百人左右.\n- **多** : « et quelques, plus de ». Place-le **après un nombre rond** (10, 20, 100…) et **avant** le classificateur : 二十多个人. Après un nombre non rond, il vient **après** le classificateur : 一个多小时 (plus d'une heure).\n- **几** : « quelques », ou « des dizaines » : 几十个, 十几个 (une dizaine et quelques).\n- **Deux chiffres voisins** : 三四个 (trois ou quatre), 七八天.\n\n大概……左右 est courant à l'oral, mais redondant : évite-le à l'écrit.",
      "To give a **rough figure**:\n- **左右** (zuǒyòu) after the quantity: \"about\": 一百人左右.\n- **多**: \"-odd, over\". After a **round number** (10, 20, 100…) it goes **before** the measure word: 二十多个人. After a non-round number it goes **after** the measure word: 一个多小时 (over an hour).\n- **几**: \"a few\", or \"dozens\": 几十个, 十几个 (a dozen or so).\n- **Two neighbouring numbers**: 三四个 (three or four), 七八天.\n\n大概……左右 is common in speech but redundant; avoid it in writing."
    ),
    examples: [
      ex("这个视频有一百万左右的人看过。", "Zhège shìpín yǒu yìbǎi wàn zuǒyòu de rén kàn guo.", "Environ un million de personnes ont vu cette vidéo.", "About a million people have watched this video."),
      ex("我每天看两个多小时手机。", "Wǒ měi tiān kàn liǎng ge duō xiǎoshí shǒujī.", "Je passe plus de deux heures par jour sur mon téléphone.", "I spend over two hours a day on my phone."),
      ex("新闻里说，有几十个人参加了活动。", "Xīnwén lǐ shuō, yǒu jǐ shí ge rén cānjiā le huódòng.", "D'après les infos, plusieurs dizaines de personnes ont participé.", "The news said several dozen people took part."),
      ex("这件事我跟他说了三四遍。", "Zhè jiàn shì wǒ gēn tā shuō le sān sì biàn.", "Je lui ai répété ça trois ou quatre fois.", "I've told him this three or four times."),
    ],
    pitfalls: t(
      "✗ 二十个多人 → ✓ 二十多个人。\n✗ 两多个小时 → après un nombre non rond : ✓ 两个多小时。\n✗ 左右一百人 → ✓ 一百人左右。",
      "✗ 二十个多人 → ✓ 二十多个人。\n✗ 两多个小时 → after a non-round number: ✓ 两个多小时。\n✗ 左右一百人 → ✓ 一百人左右。"
    ),
    category: "数词 / numerals",
  },
  {
    id: "hsk3-g58",
    level: 3,
    title: t("Enchaîner des étapes : 先……再……然后……最后", "Sequencing steps: 先……再……然后……最后"),
    pattern: "先 + V1，再 + V2，然后 + V3，最后 + V4",
    explanation: t(
      "Pour décrire une **suite d'étapes** (une recette, un itinéraire…), on utilise :\n- **先** (d'abord) — adverbe, après le sujet ;\n- **再** (ensuite, puis) — adverbe, pour une action **future** ou une instruction ;\n- **然后** (après ça) — conjonction, en tête de proposition ;\n- **最后** (pour finir).\n\n**再** vs **又** : 再 = « encore / ensuite » pour le **futur** ; 又 = « de nouveau » pour une action **déjà faite**. Dans une recette (instructions), on utilise donc 再.",
      "To describe a **sequence of steps** (a recipe, directions…), use:\n- **先** (first) — adverb, after the subject;\n- **再** (then) — adverb, for a **future** action or an instruction;\n- **然后** (after that) — conjunction, at the start of a clause;\n- **最后** (finally).\n\n**再** vs **又**: 再 = \"again / then\" for the **future**; 又 = \"again\" for something **already done**. So in a recipe (instructions), use 再."
    ),
    examples: [
      ex("先把西红柿洗干净，再切成小块。", "Xiān bǎ xīhóngshì xǐ gānjìng, zài qiēchéng xiǎo kuài.", "Lave d'abord les tomates, puis coupe-les en petits morceaux.", "First wash the tomatoes, then cut them into small pieces."),
      ex("然后把鸡蛋放进锅里，最后加一点儿盐。", "Ránhòu bǎ jīdàn fàngjìn guō lǐ, zuìhòu jiā yìdiǎnr yán.", "Ensuite mets les œufs dans la poêle, et pour finir ajoute un peu de sel.", "Then put the eggs in the wok, and finally add a little salt."),
      ex("我们先吃饭，然后再去看电影吧。", "Wǒmen xiān chīfàn, ránhòu zài qù kàn diànyǐng ba.", "On mange d'abord, et après on va au cinéma ?", "Let's eat first and then go to the cinema."),
    ],
    pitfalls: t(
      "✗ 先洗菜，又切菜。 → instruction/futur : ✓ 先洗菜，再切菜。\n✗ 我再先吃饭。 → ordre : ✓ 我先吃饭，再……",
      "✗ 先洗菜，又切菜。 → instruction/future: ✓ 先洗菜，再切菜。\n✗ 我再先吃饭。 → word order: ✓ 我先吃饭，再……"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g59",
    level: 3,
    title: t("Transformer / considérer : 把 A + V + 成 / 作 B", "Turning / treating: 把 A + V + 成 / 作 B"),
    pattern: "Sujet + 把 + A + Verbe + 成 / 作 + B",
    explanation: t(
      "Quand une action **transforme** A en B, ou qu'on **prend** A **pour** B, on utilise **把 A + V + 成 B** :\n- 切成小块 : couper **en** petits morceaux\n- 翻译成中文 : traduire **en** chinois\n- 看成 / 当成 : prendre pour, considérer comme (souvent par erreur)\n\nVariante plus écrite : **把 A 当作 / 看作 B** (considérer A comme B) : 他把我当作自己的家人。",
      "When an action **turns** A into B, or you **take** A **for** B, use **把 A + V + 成 B**:\n- 切成小块: cut **into** small pieces\n- 翻译成中文: translate **into** Chinese\n- 看成 / 当成: mistake for, treat as\n\nMore written variant: **把 A 当作 / 看作 B** (regard A as B): 他把我当作自己的家人。"
    ),
    examples: [
      ex("把土豆切成丝。", "Bǎ tǔdòu qiēchéng sī.", "Coupe les pommes de terre en julienne.", "Cut the potatoes into thin strips."),
      ex("请把这个菜谱翻译成法语。", "Qǐng bǎ zhège càipǔ fānyì chéng Fǎyǔ.", "Traduis cette recette en français, s'il te plaît.", "Please translate this recipe into French."),
      ex("我把糖看成盐了！", "Wǒ bǎ táng kànchéng yán le!", "J'ai confondu le sucre avec le sel !", "I mistook the sugar for salt!"),
    ],
    pitfalls: t(
      "✗ 我切土豆成丝。 → ✓ 我把土豆切成丝。\n✗ 翻译到中文 → ✓ 翻译成中文。",
      "✗ 我切土豆成丝。 → ✓ 我把土豆切成丝。\n✗ 翻译到中文 → ✓ 翻译成中文。"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g60",
    level: 3,
    title: t("把 avec négation et verbes modaux", "把 with negation and modal verbs"),
    pattern: "Sujet + 没 / 不 / 别 / 要 / 应该 / 能 + 把 + Objet + Verbe + …",
    explanation: t(
      "Dans une phrase en **把**, la négation (**没, 不, 别**) et les verbes modaux (**要, 能, 应该, 想, 得**) se placent **avant 把**, jamais avant le verbe principal.\n\n- 我**没**把作业写完。\n- 你**别**把盐放太多。\n- 你**应该**把肉先洗一下。\n\nLes adverbes de temps comme **已经, 马上, 一定** se placent aussi avant 把 : 我已经把菜做好了。",
      "In a **把** sentence, negation (**没, 不, 别**) and modal verbs (**要, 能, 应该, 想, 得**) go **before 把**, never before the main verb.\n\n- 我**没**把作业写完。\n- 你**别**把盐放太多。\n- 你**应该**把肉先洗一下。\n\nTime adverbs such as **已经, 马上, 一定** also go before 把: 我已经把菜做好了。"
    ),
    examples: [
      ex("别把油放得太多。", "Bié bǎ yóu fàng de tài duō.", "Ne mets pas trop d'huile.", "Don't put in too much oil."),
      ex("我还没把菜洗完呢。", "Wǒ hái méi bǎ cài xǐwán ne.", "Je n'ai pas encore fini de laver les légumes.", "I haven't finished washing the vegetables yet."),
      ex("你得把火关小一点儿。", "Nǐ děi bǎ huǒ guān xiǎo yìdiǎnr.", "Il faut que tu baisses un peu le feu.", "You need to turn the heat down a bit."),
      ex("我一定要把这个菜学会。", "Wǒ yídìng yào bǎ zhège cài xuéhuì.", "Je veux absolument apprendre à faire ce plat.", "I'm determined to learn how to make this dish."),
    ],
    pitfalls: t(
      "✗ 我把作业没写完。 → ✓ 我没把作业写完。\n✗ 你把盐别放。 → ✓ 你别把盐放进去。\n✗ 我把菜要做好。 → ✓ 我要把菜做好。",
      "✗ 我把作业没写完。 → ✓ 我没把作业写完。\n✗ 你把盐别放。 → ✓ 你别把盐放进去。\n✗ 我把菜要做好。 → ✓ 我要把菜做好。"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g61",
    level: 3,
    title: t("Dès que : 一……就", "As soon as: 一……就"),
    pattern: "(Sujet 1) + 一 + V1，(Sujet 2) + 就 + V2",
    explanation: t(
      "**一……就** exprime qu'une deuxième action suit **immédiatement** la première : « dès que…, aussitôt que… ». Il peut aussi exprimer une **habitude** : chaque fois que A, B arrive.\n\n**一** et **就** sont des adverbes : ils se placent **après leur sujet**, devant le verbe. 他一回家就睡觉了 / 我一说，他就明白了.\n\nPrononciation : 一 change de ton selon le mot suivant (yì / yí) ; dans cette structure, tu entendras souvent yí devant un 4ᵉ ton : 一到 (yí dào).",
      "**一……就** means the second action follows **immediately** after the first: \"as soon as…\". It can also express a **habit**: every time A happens, B follows.\n\n**一** and **就** are adverbs: they go **after their subject**, before the verb. 他一回家就睡觉了 / 我一说，他就明白了.\n\nPronunciation: 一 changes tone depending on what follows (yì / yí); you'll often hear yí before a 4th tone: 一到 (yí dào)."
    ),
    examples: [
      ex("水一开，就把面条放进去。", "Shuǐ yì kāi, jiù bǎ miàntiáo fàng jinqu.", "Dès que l'eau bout, mets les nouilles.", "As soon as the water boils, put the noodles in."),
      ex("我一闻到这个味道就饿了。", "Wǒ yì wéndào zhège wèidao jiù è le.", "Dès que je sens cette odeur, j'ai faim.", "As soon as I smell this, I get hungry."),
      ex("他一学就会，真聪明！", "Tā yì xué jiù huì, zhēn cōngming!", "Il apprend tout de suite, quel talent !", "He picks things up instantly — so clever!"),
    ],
    pitfalls: t(
      "✗ 一他回家就睡觉。 → après le sujet. ✓ 他一回家就睡觉。\n✗ 我一到家，就我吃饭。 → 就 après le sujet de la 2ᵉ proposition. ✓ 我一到家就吃饭。",
      "✗ 一他回家就睡觉。 → after the subject. ✓ 他一回家就睡觉。\n✗ 我一到家，就我吃饭。 → 就 follows the second subject. ✓ 我一到家就吃饭。"
    ),
    category: "固定格式 / fixed patterns",
  },
  {
    id: "hsk3-g62",
    level: 3,
    title: t("下来 au sens figuré : fixer, garder, s'arrêter", "Figurative 下来: fixing, keeping, calming down"),
    pattern: "记 / 写 / 留 / 停 / 安静 / 冷静 + 下来",
    explanation: t(
      "Au sens figuré, **下来** exprime :\n1. **Fixer, conserver** quelque chose qui sinon partirait : 记下来 (noter), 写下来 (écrire pour garder), 留下来 (rester, garder), 拍下来 (photographier).\n2. **Passage d'un état actif à un état calme** : 停下来 (s'arrêter), 安静下来 (se calmer), 慢下来 (ralentir).\n3. **Continuation du passé jusqu'à maintenant** : 传下来 (transmettre, léguer) — une tradition 传下来.\n\nComparaison : 下去 → du présent vers le futur ; 下来 → du passé vers le présent.",
      "Figuratively, **下来** expresses:\n1. **Fixing, keeping** something that would otherwise be lost: 记下来 (note down), 写下来 (write down), 留下来 (stay, keep), 拍下来 (capture on camera).\n2. **Going from active to calm**: 停下来 (stop), 安静下来 (quiet down), 慢下来 (slow down).\n3. **Continuing from the past to now**: 传下来 (hand down) — a tradition 传下来.\n\nCompare: 下去 → present to future; 下来 → past to present."
    ),
    examples: [
      ex("这个菜谱是我奶奶传下来的。", "Zhège càipǔ shì wǒ nǎinai chuán xialai de.", "Cette recette m'a été transmise par ma grand-mère.", "This recipe was handed down from my grandmother."),
      ex("我把做法都记下来了。", "Wǒ bǎ zuòfǎ dōu jì xialai le.", "J'ai noté toute la méthode.", "I wrote down all the steps."),
      ex("火太大了，快停下来！", "Huǒ tài dà le, kuài tíng xialai!", "Le feu est trop fort, arrête-toi vite !", "The heat's too high, stop right now!"),
    ],
    pitfalls: t(
      "✗ 请把电话号码记下去。 → on fixe une information : ✓ 记下来。\n✗ 我们的传统会传下来 (futur) → vers l'avenir : ✓ 传下去 ; depuis le passé : ✓ 传下来。",
      "✗ 请把电话号码记下去。 → you're capturing information: ✓ 记下来。\n✗ 我们的传统会传下来 (future) → towards the future: ✓ 传下去; from the past: ✓ 传下来。"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g63",
    level: 3,
    title: t("Compléments de degré : 极了, 死了, 得很, 得不得了", "Degree complements: 极了, 死了, 得很, 得不得了"),
    pattern: "Adj / V psychologique + 极了 / 死了 / 坏了 ｜ Adj + 得 + 很 / 不得了 / 要命",
    explanation: t(
      "Pour exprimer un **degré extrême** après un adjectif ou un verbe de sentiment :\n- **极了** (jí le) : « extrêmement » — neutre : 好极了 !\n- **死了 / 坏了** : « à mourir » — oral, souvent pour des sensations **désagréables** (累死了, 饿坏了), parfois positives (高兴死了).\n- **得很** : « très » — oral : 好得很.\n- **得不得了** : « incroyablement » : 高兴得不得了.\n\nCes compléments **remplacent** 很 / 非常 devant l'adjectif : ✗ 很好极了.",
      "To express an **extreme degree** after an adjective or feeling verb:\n- **极了** (jí le): \"extremely\" — neutral: 好极了!\n- **死了 / 坏了**: \"to death\" — spoken, mostly for **unpleasant** feelings (累死了, 饿坏了), sometimes positive (高兴死了).\n- **得很**: \"very\" — spoken: 好得很.\n- **得不得了**: \"incredibly\": 高兴得不得了.\n\nThese **replace** 很 / 非常 before the adjective: ✗ 很好极了."
    ),
    examples: [
      ex("我们队赢了，大家高兴极了！", "Wǒmen duì yíng le, dàjiā gāoxìng jí le!", "Notre équipe a gagné, tout le monde est fou de joie !", "Our team won — everyone's thrilled!"),
      ex("跑完马拉松，我累死了。", "Pǎowán mǎlāsōng, wǒ lèi sǐ le.", "Après le marathon, je suis mort de fatigue.", "After the marathon, I'm dead tired."),
      ex("比赛紧张得不得了。", "Bǐsài jǐnzhāng de bùdéliǎo.", "Le match était incroyablement tendu.", "The match was incredibly tense."),
    ],
    pitfalls: t(
      "✗ 很累死了 / 非常好极了 → pas de double degré. ✓ 累死了 / 好极了。\n✗ 他累得死了。 → ✓ 他累死了。 (死了 s'attache directement, sans 得)",
      "✗ 很累死了 / 非常好极了 → no double intensifier. ✓ 累死了 / 好极了。\n✗ 他累得死了。 → ✓ 他累死了。 (死了 attaches directly, no 得)"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g64",
    level: 3,
    title: t("Compléments de durée et de fréquence", "Duration and frequency complements"),
    pattern: "V + 了 + durée (+ 的) + Objet ｜ V + Objet + V + 了 + durée ｜ V + 了 + Num + 次",
    explanation: t(
      "La **durée** d'une action se place **après le verbe** (contrairement au français « j'ai nagé pendant une heure » où l'ordre est libre) : 我游了一个小时.\n\nAvec un **objet**, deux possibilités :\n1. Répéter le verbe : 我**打**球**打**了两个小时.\n2. Mettre la durée entre le verbe et l'objet : 我打了两个小时(的)球.\n\nAvec un **pronom**, la durée vient **après le pronom** : 我等了他半个小时.\n\nSi l'action **continue encore**, ajoute un **了** final : 我学了三年中文了 (j'apprends le chinois depuis trois ans — et ça continue).",
      "The **duration** of an action goes **after the verb**: 我游了一个小时 (I swam for an hour).\n\nWith an **object**, two options:\n1. Repeat the verb: 我**打**球**打**了两个小时.\n2. Put the duration between verb and object: 我打了两个小时(的)球.\n\nWith a **pronoun**, the duration comes **after the pronoun**: 我等了他半个小时.\n\nIf the action is **still going on**, add a final **了**: 我学了三年中文了 (I've been learning Chinese for three years — and still am)."
    ),
    examples: [
      ex("他每天跑步跑一个小时。", "Tā měi tiān pǎobù pǎo yí ge xiǎoshí.", "Il court une heure par jour.", "He runs for an hour every day."),
      ex("我们看了两个多小时的比赛。", "Wǒmen kàn le liǎng ge duō xiǎoshí de bǐsài.", "On a regardé le match pendant plus de deux heures.", "We watched the match for over two hours."),
      ex("我在体育馆等了你半天！", "Wǒ zài tǐyùguǎn děng le nǐ bàntiān!", "Ça fait une éternité que je t'attends au gymnase !", "I waited for you at the stadium for ages!"),
      ex("她练游泳练了十年了。", "Tā liàn yóuyǒng liàn le shí nián le.", "Ça fait dix ans qu'elle s'entraîne à la natation.", "She's been training in swimming for ten years."),
    ],
    pitfalls: t(
      "✗ 我两个小时打球。 → ✓ 我打了两个小时球。\n✗ 我等了半个小时他。 → pronom avant la durée. ✓ 我等了他半个小时。\n✗ 我游泳了一个小时。 → 游泳 est verbe+objet : ✓ 我游了一个小时泳 / 我游泳游了一个小时。",
      "✗ 我两个小时打球。 → ✓ 我打了两个小时球。\n✗ 我等了半个小时他。 → pronoun before duration. ✓ 我等了他半个小时。\n✗ 我游泳了一个小时。 → 游泳 is verb+object: ✓ 我游泳游了一个小时。"
    ),
    category: "补语 / complements",
  },
  {
    id: "hsk3-g65",
    level: 3,
    title: t("D'un côté… de l'autre : 一方面……另一方面", "On the one hand… on the other: 一方面……另一方面"),
    pattern: "一方面 + A，另一方面 + (也/又) + B",
    explanation: t(
      "**一方面……另一方面……** présente **deux aspects** d'une même question, ou deux raisons complémentaires : « d'un côté…, de l'autre… », « d'une part…, d'autre part… ».\n\nC'est une structure **d'argumentation**, idéale pour expliquer une décision ou nuancer un avis. La seconde partie contient souvent **也** ou **又**.\n\nContrairement à l'anglais, elle ne sert pas forcément à opposer : souvent les deux aspects **s'additionnent**.",
      "**一方面……另一方面……** presents **two aspects** of the same issue, or two complementary reasons: \"on the one hand…, on the other…\".\n\nIt's an **argumentation** pattern, great for explaining a decision or balancing a view. The second half often contains **也** or **又**.\n\nUnlike in English, it doesn't necessarily contrast: often the two aspects **add up**."
    ),
    examples: [
      ex("运动一方面可以锻炼身体，另一方面也可以交朋友。", "Yùndòng yì fāngmiàn kěyǐ duànliàn shēntǐ, lìng yì fāngmiàn yě kěyǐ jiāo péngyou.", "Le sport permet d'une part de se maintenir en forme, d'autre part de se faire des amis.", "Sport keeps you fit on the one hand, and helps you make friends on the other."),
      ex("举办奥运会一方面很光荣，另一方面压力也很大。", "Jǔbàn Àoyùnhuì yì fāngmiàn hěn guāngróng, lìng yì fāngmiàn yālì yě hěn dà.", "Organiser les JO, c'est un honneur, mais c'est aussi une grosse pression.", "Hosting the Olympics is an honour, but also a lot of pressure."),
      ex("我一方面想去看比赛，另一方面又没有时间。", "Wǒ yì fāngmiàn xiǎng qù kàn bǐsài, lìng yì fāngmiàn yòu méiyǒu shíjiān.", "D'un côté j'ai envie d'aller voir le match, de l'autre je n'ai pas le temps.", "On the one hand I want to see the match; on the other, I don't have time."),
    ],
    pitfalls: t(
      "✗ 一方面……其他方面…… → ✓ 一方面……另一方面……\n✗ 一边……另一边 → pour deux actions simultanées on dit 一边……一边……, c'est une autre structure.",
      "✗ 一方面……其他方面…… → ✓ 一方面……另一方面……\n✗ 一边……另一边 → for simultaneous actions it's 一边……一边……, a different pattern."
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g66",
    level: 3,
    title: t("Faire et refaire : V来V去", "Back and forth: V来V去"),
    pattern: "V + 来 + V + 去 (+ 还是 / 也 / 都…)",
    explanation: t(
      "**V来V去** décrit une action **répétée dans tous les sens**, souvent **sans résultat** : 走来走去 (faire les cent pas), 想来想去 (retourner la question dans sa tête), 找来找去 (chercher partout).\n\nLa suite de la phrase donne en général la **conclusion** (souvent décevante), avec **还是 / 也 / 都** : 想来想去，还是不知道选哪个 (j'ai beau y réfléchir, je ne sais toujours pas lequel choisir).\n\nOn utilise des verbes d'**une syllabe**.",
      "**V来V去** describes an action **repeated back and forth**, often **without result**: 走来走去 (pace up and down), 想来想去 (turn it over and over), 找来找去 (search everywhere).\n\nThe rest of the sentence usually gives the (often disappointing) **conclusion**, with **还是 / 也 / 都**: 想来想去，还是不知道选哪个 (I've thought and thought, and still don't know which to pick).\n\nUse **one-syllable** verbs."
    ),
    examples: [
      ex("教练在场边走来走去，非常紧张。", "Jiàoliàn zài chǎng biān zǒu lái zǒu qù, fēicháng jǐnzhāng.", "L'entraîneur faisait les cent pas au bord du terrain, très nerveux.", "The coach paced up and down the sideline, very nervous."),
      ex("我想来想去，还是决定报名参加比赛。", "Wǒ xiǎng lái xiǎng qù, háishi juédìng bàomíng cānjiā bǐsài.", "Après avoir longuement hésité, j'ai finalement décidé de m'inscrire à la compétition.", "After thinking it over and over, I decided to sign up for the competition."),
      ex("球票我找来找去也没找到。", "Qiúpiào wǒ zhǎo lái zhǎo qù yě méi zhǎodào.", "J'ai cherché mon billet partout, impossible de le trouver.", "I searched everywhere but couldn't find the match ticket."),
    ],
    pitfalls: t(
      "✗ 考虑来考虑去 → verbe d'une syllabe préférable. ✓ 想来想去。\n✗ 走去走来 → l'ordre est fixe : ✓ 走来走去。",
      "✗ 考虑来考虑去 → prefer a one-syllable verb. ✓ 想来想去。\n✗ 走去走来 → fixed order: ✓ 走来走去。"
    ),
    category: "固定格式 / fixed patterns",
  },
  {
    id: "hsk3-g67",
    level: 3,
    title: t("Tout de suite, à l'instant : 马上, 立刻, 刚, 刚才", "Right away, just now: 马上, 立刻, 刚, 刚才"),
    pattern: "Sujet + 马上 / 立刻 + V ｜ Sujet + 刚 + V ｜ 刚才 + …",
    explanation: t(
      "- **马上** (mǎshàng) : « tout de suite, dans un instant » — très oral, souvent avec **就** : 比赛马上就开始了.\n- **立刻** (lìkè) : « immédiatement », plus rapide et plus écrit ; souvent en réaction à un événement : 他听到哨声，立刻跑了出去.\n- **刚** (gāng) : adverbe, « venir de » : 我刚到 (je viens d'arriver). Il se place **après le sujet**.\n- **刚才** (gāngcái) : nom de temps, « tout à l'heure, il y a un instant ». Il peut se placer **avant le sujet** et se combine avec 了 et la négation : 刚才你没来.\n\n刚 vs 刚才 : 我刚到 ✓ / 我刚才到的 ✓, mais ✗ 刚你去哪儿了 → ✓ 刚才你去哪儿了？",
      "- **马上** (mǎshàng): \"right away, in a moment\" — very spoken, often with **就**: 比赛马上就开始了.\n- **立刻** (lìkè): \"immediately\", faster and more written; often a reaction to an event: 他听到哨声，立刻跑了出去.\n- **刚** (gāng): adverb, \"just (did)\": 我刚到 (I've just arrived). It goes **after the subject**.\n- **刚才** (gāngcái): time noun, \"a moment ago\". It can go **before the subject** and combines with 了 and negation: 刚才你没来.\n\n刚 vs 刚才: 我刚到 ✓ / 我刚才到的 ✓, but ✗ 刚你去哪儿了 → ✓ 刚才你去哪儿了？"
    ),
    examples: [
      ex("快点儿，比赛马上就开始了！", "Kuài diǎnr, bǐsài mǎshàng jiù kāishǐ le!", "Dépêche-toi, le match va commencer !", "Hurry up, the match is about to start!"),
      ex("他一拿到球，立刻往前跑。", "Tā yì nádào qiú, lìkè wǎng qián pǎo.", "Dès qu'il a le ballon, il fonce vers l'avant.", "As soon as he gets the ball, he immediately runs forward."),
      ex("我刚到体育馆，你在哪儿？", "Wǒ gāng dào tǐyùguǎn, nǐ zài nǎr?", "Je viens d'arriver au stade, tu es où ?", "I've just got to the stadium — where are you?"),
      ex("刚才那个球踢得太漂亮了！", "Gāngcái nàge qiú tī de tài piàoliang le!", "Le tir de tout à l'heure était magnifique !", "That shot just now was gorgeous!"),
    ],
    pitfalls: t(
      "✗ 刚我吃饭了。 → 刚 suit le sujet. ✓ 我刚吃饭。/ 刚才我吃饭了。\n✗ 我刚不在。 → négation avec 刚才 : ✓ 我刚才不在。",
      "✗ 刚我吃饭了。 → 刚 follows the subject. ✓ 我刚吃饭。/ 刚才我吃饭了。\n✗ 我刚不在。 → negation goes with 刚才: ✓ 我刚才不在。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g68",
    level: 3,
    title: t("Soit… soit… : 不是……就是", "Either… or…: 不是……就是"),
    pattern: "Sujet + 不是 + A，就是 + B",
    explanation: t(
      "**不是A，就是B** = « si ce n'est pas A, c'est B » → « soit A, soit B ». On présente **les deux seules possibilités**, souvent pour décrire une **habitude** (parfois avec un ton de plainte).\n\n他周末不是睡觉，就是玩游戏 (le week-end, soit il dort, soit il joue aux jeux vidéo).\n\n⚠️ Ne confonds pas avec **不是A，而是B** (ce n'est pas A, c'est B) : ici, A reste possible !",
      "**不是A，就是B** = \"if it's not A, it's B\" → \"either A or B\". You present **the only two possibilities**, often to describe a **habit** (sometimes with a complaining tone).\n\n他周末不是睡觉，就是玩游戏 (at weekends he either sleeps or plays video games).\n\n⚠️ Don't confuse it with **不是A，而是B** (it's not A, it's B): here, A is still possible!"
    ),
    examples: [
      ex("我的工资不是交房租，就是还信用卡。", "Wǒ de gōngzī bú shì jiāo fángzū, jiù shì huán xìnyòngkǎ.", "Mon salaire passe soit dans le loyer, soit dans le remboursement de la carte de crédit.", "My salary goes either on rent or on paying off my credit card."),
      ex("他每天不是在银行，就是在去银行的路上。", "Tā měi tiān bú shì zài yínháng, jiù shì zài qù yínháng de lù shang.", "Tous les jours, soit il est à la banque, soit il est en route pour la banque.", "Every day he's either at the bank or on his way there."),
      ex("周末我不是在家做饭，就是去超市买东西。", "Zhōumò wǒ bú shì zài jiā zuòfàn, jiù shì qù chāoshì mǎi dōngxi.", "Le week-end, soit je cuisine à la maison, soit je vais faire les courses.", "At weekends I either cook at home or go shopping at the supermarket."),
    ],
    pitfalls: t(
      "✗ 不是……而是…… pour « soit… soit… » → ✓ 不是……就是……\n✗ 不是……还是…… → ✓ 不是……就是……",
      "✗ 不是……而是…… for \"either… or…\" → ✓ 不是……就是……\n✗ 不是……还是…… → ✓ 不是……就是……"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g69",
    level: 3,
    title: t("Double négation : 不得不, 没有……不, 不是不", "Double negatives: 不得不, 没有……不, 不是不"),
    pattern: "不得不 + V ｜ 没有 + N + 不 + V ｜ 不是不 + V",
    explanation: t(
      "Deux négations = une **affirmation renforcée** :\n- **不得不** (bùdébù) : « être obligé de, ne pas pouvoir faire autrement » — plus fort que 只好 : 我不得不借钱.\n- **没有……不……** : « il n'y a aucun… qui ne… pas » = **tous** : 没有人不喜欢他 (tout le monde l'aime).\n- **不是不……** : « ce n'est pas que je ne… pas » — adoucit un refus : 我不是不想帮你，是真没钱 (ce n'est pas que je ne veux pas t'aider, c'est que je n'ai vraiment pas d'argent).",
      "Two negatives = a **stronger positive**:\n- **不得不** (bùdébù): \"have no choice but to\" — stronger than 只好: 我不得不借钱.\n- **没有……不……**: \"there's no… who doesn't…\" = **everyone**: 没有人不喜欢他 (everybody likes him).\n- **不是不……**: \"it's not that I don't…\" — softens a refusal: 我不是不想帮你，是真没钱 (it's not that I don't want to help, I really have no money)."
    ),
    examples: [
      ex("钱不够，我不得不向银行贷款。", "Qián bú gòu, wǒ bùdébù xiàng yínháng dàikuǎn.", "Je n'avais pas assez d'argent, j'ai été obligé d'emprunter à la banque.", "I didn't have enough money, so I had to take out a bank loan."),
      ex("没有人不想多挣点儿钱。", "Méiyǒu rén bù xiǎng duō zhèng diǎnr qián.", "Tout le monde a envie de gagner un peu plus d'argent.", "There's no one who doesn't want to earn a bit more."),
      ex("我不是不想买，是太贵了。", "Wǒ bú shì bù xiǎng mǎi, shì tài guì le.", "Ce n'est pas que je ne veux pas l'acheter, c'est trop cher.", "It's not that I don't want to buy it — it's too expensive."),
    ],
    pitfalls: t(
      "✗ 我得不得去。 → ✓ 我不得不去。\n✗ 没有人都喜欢他。 → ✓ 没有人不喜欢他。 (= 大家都喜欢他)",
      "✗ 我得不得去。 → ✓ 我不得不去。\n✗ 没有人都喜欢他。 → ✓ 没有人不喜欢他。 (= 大家都喜欢他)"
    ),
    category: "强调 / emphasis",
  },
  {
    id: "hsk3-g70",
    level: 3,
    title: t("Questions rhétoriques : 不是……吗？ 怎么能……呢？ 哪儿……？", "Rhetorical questions: 不是……吗？ 怎么能……呢？ 哪儿……？"),
    pattern: "不是 + … + 吗？ ｜ 怎么能 / 怎么会 + … + 呢？ ｜ 哪儿 + V + 啊？",
    explanation: t(
      "Une **question rhétorique** n'attend pas de réponse : elle **affirme** quelque chose avec force.\n- **不是……吗？** : « ce n'est pas… ? » = c'est bien… (rappel d'un fait) : 你不是说没钱了吗？ (Tu n'avais pas dit que tu n'avais plus d'argent ?)\n- **怎么能 / 怎么会……呢？** : « comment pourrait-on… ? » = on ne peut pas : 我怎么能不管你呢？ (Comment pourrais-je te laisser tomber ?)\n- **哪儿 / 哪里 + V** : « où ça… ? » = pas du tout : 我哪儿有钱啊！ (Moi, de l'argent ? Tu rêves !)\n\nLe sens est toujours **l'inverse de la forme**.",
      "A **rhetorical question** expects no answer: it **asserts** something forcefully.\n- **不是……吗？**: \"isn't it…?\" = it surely is (reminding of a fact): 你不是说没钱了吗？ (Didn't you say you were out of money?)\n- **怎么能 / 怎么会……呢？**: \"how could…?\" = no way: 我怎么能不管你呢？ (How could I leave you in the lurch?)\n- **哪儿 / 哪里 + V**: \"where…?\" = not at all: 我哪儿有钱啊！ (Me, have money? As if!)\n\nThe meaning is always **the opposite of the form**."
    ),
    examples: [
      ex("你不是上个月刚发了工资吗？", "Nǐ bú shì shàng ge yuè gāng fā le gōngzī ma?", "Tu n'as pas été payé le mois dernier ?", "Didn't you just get paid last month?"),
      ex("这么多钱，我怎么能一个人花呢？", "Zhème duō qián, wǒ zěnme néng yí ge rén huā ne?", "Tout cet argent, comment pourrais-je le dépenser tout seul ?", "How could I spend all this money by myself?"),
      ex("我哪儿知道他的密码啊！", "Wǒ nǎr zhīdào tā de mìmǎ a!", "Comment veux-tu que je connaisse son code ?!", "How would I know his PIN?!"),
    ],
    pitfalls: t(
      "Attention à l'intonation : 你不是学生吗？ peut être une vraie question (« Tu n'es pas étudiant ? ») ou une rhétorique (« Tu es étudiant, non ?! »). Le contexte décide.\n✗ 我怎么能去吗？ → ✓ 我怎么能去呢？ (怎么 + 呢, pas 吗)",
      "Mind the intonation: 你不是学生吗？ can be a real question (\"Aren't you a student?\") or rhetorical (\"You're a student, aren't you?!\"). Context decides.\n✗ 我怎么能去吗？ → ✓ 我怎么能去呢？ (怎么 + 呢, not 吗)"
    ),
    category: "特殊句型 / special sentence patterns",
  },
  {
    id: "hsk3-g71",
    level: 3,
    title: t("Hypothèse : 要是 / 假如 / 如果……的话", "Supposing: 要是 / 假如 / 如果……的话"),
    pattern: "要是 / 假如 / 如果 + condition (+ 的话)，(Sujet) + 就 + …",
    explanation: t(
      "Pour faire une **supposition** (« si… ») :\n- **如果** : neutre, le plus courant ;\n- **要是** (yàoshi) : plus **oral** ;\n- **假如** (jiǎrú) : plus **écrit**, souvent pour une hypothèse peu probable.\n\nOn ajoute souvent **的话** à la fin de la condition, et **就** dans la conséquence. On peut même garder **的话** seul : 有时间的话，我就去。\n\nLa conséquence peut aussi être une question : 要是你中了一百万，你会做什么？",
      "To make a **supposition** (\"if…\"):\n- **如果**: neutral, the most common;\n- **要是** (yàoshi): more **spoken**;\n- **假如** (jiǎrú): more **written**, often for unlikely hypotheses.\n\nYou often add **的话** after the condition and **就** in the result. You can even keep just **的话**: 有时间的话，我就去。\n\nThe result can also be a question: 要是你中了一百万，你会做什么？"
    ),
    examples: [
      ex("要是你的银行卡丢了的话，要马上给银行打电话。", "Yàoshi nǐ de yínhángkǎ diū le dehuà, yào mǎshàng gěi yínháng dǎ diànhuà.", "Si tu perds ta carte bancaire, il faut appeler la banque tout de suite.", "If you lose your bank card, call the bank straight away."),
      ex("假如我有很多钱，我就去环游世界。", "Jiǎrú wǒ yǒu hěn duō qián, wǒ jiù qù huányóu shìjiè.", "Si j'avais beaucoup d'argent, je ferais le tour du monde.", "If I had lots of money, I'd travel around the world."),
      ex("方便的话，请你帮我换一点儿人民币。", "Fāngbiàn dehuà, qǐng nǐ bāng wǒ huàn yìdiǎnr rénmínbì.", "Si ça ne te dérange pas, change-moi un peu de yuans, s'il te plaît.", "If it's convenient, could you change a bit of RMB for me?"),
    ],
    pitfalls: t(
      "✗ 要是你去，我也就去了。 → pour le futur, pas de 了 final. ✓ 要是你去，我也去。\n✗ 如果……所以…… → ✓ 如果……就……",
      "✗ 要是你去，我也就去了。 → for the future, no final 了. ✓ 要是你去，我也去。\n✗ 如果……所以…… → ✓ 如果……就……"
    ),
    category: "复句 / complex sentences",
  },
  {
    id: "hsk3-g72",
    level: 3,
    title: t("Carrément : 简直", "Simply, practically: 简直"),
    pattern: "Sujet + 简直 + (是) + exagération",
    explanation: t(
      "**简直** (jiǎnzhí) = « carrément, tout simplement, presque ». Il introduit une **exagération** pour exprimer une émotion forte (surprise, admiration, colère) : 这个价格简直太贵了！\n\nOn le combine souvent avec **太……了**, **是**, **像……一样**, ou une négation forte (简直不敢相信 = n'en pas croire ses yeux).\n\nC'est un mot de **ressenti** : on ne l'utilise pas pour un simple constat neutre.",
      "**简直** (jiǎnzhí) = \"simply, practically, downright\". It introduces an **exaggeration** to express a strong feeling (surprise, admiration, anger): 这个价格简直太贵了！\n\nOften combined with **太……了**, **是**, **像……一样**, or a strong negative (简直不敢相信 = can hardly believe it).\n\nIt's an **emotional** word: don't use it for neutral statements."
    ),
    examples: [
      ex("这里的房价简直太高了！", "Zhèlǐ de fángjià jiǎnzhí tài gāo le!", "Les prix de l'immobilier ici sont carrément délirants !", "House prices here are just ridiculous!"),
      ex("我简直不敢相信，我中奖了！", "Wǒ jiǎnzhí bù gǎn xiāngxìn, wǒ zhòngjiǎng le!", "Je n'en reviens pas, j'ai gagné à la loterie !", "I can hardly believe it — I've won!"),
      ex("他花钱简直像流水一样。", "Tā huā qián jiǎnzhí xiàng liúshuǐ yíyàng.", "Il dépense l'argent comme de l'eau.", "He spends money like water."),
    ],
    pitfalls: t(
      "✗ 今天简直是星期一。 → pas d'exagération ici, juste un fait. ✓ 今天是星期一。\n✗ 简直很好 → préfère 简直太好了。",
      "✗ 今天简直是星期一。 → no exaggeration, just a fact. ✓ 今天是星期一。\n✗ 简直很好 → prefer 简直太好了。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g73",
    level: 3,
    title: t("Comme si : 像……一样 / 似的", "As if, like: 像……一样 / 似的"),
    pattern: "(好)像 + N/proposition + 一样 / 似的 (+ Adj / V)",
    explanation: t(
      "Pour faire une **comparaison imagée** : **像……一样** ou **像……似的** (shìde) = « comme, tel que, comme si ».\n\n- 她的笑容像阳光一样温暖 (son sourire est chaleureux comme le soleil).\n- 他高兴得像个孩子似的 (il est heureux comme un enfant).\n\n**似的** est plus oral et peut s'utiliser **sans 像** : 他好像什么都知道似的 (il fait comme s'il savait tout). Ces tournures sont très fréquentes dans les **récits**.",
      "For a **vivid comparison**: **像……一样** or **像……似的** (shìde) = \"like, as if\".\n\n- 她的笑容像阳光一样温暖 (her smile is as warm as sunshine).\n- 他高兴得像个孩子似的 (he's as happy as a child).\n\n**似的** is more spoken and can be used **without 像**: 他好像什么都知道似的 (he acts as if he knows everything). These phrases are very common in **stories**."
    ),
    examples: [
      ex("那天的雪下得像棉花一样。", "Nà tiān de xuě xià de xiàng miánhua yíyàng.", "Ce jour-là, la neige tombait comme du coton.", "That day the snow fell like cotton."),
      ex("小猫的眼睛像两颗星星似的。", "Xiǎo māo de yǎnjing xiàng liǎng kē xīngxing shìde.", "Les yeux du chaton brillaient comme deux étoiles.", "The kitten's eyes were like two stars."),
      ex("他跑得飞快，好像后面有人追他似的。", "Tā pǎo de fēikuài, hǎoxiàng hòumiàn yǒu rén zhuī tā shìde.", "Il courait à toute vitesse, comme si quelqu'un le poursuivait.", "He ran like the wind, as if someone were chasing him."),
    ],
    pitfalls: t(
      "✗ 像……一样似的 → choisis l'un ou l'autre.\n✗ 似的 lu « sìde » → ✓ shìde.\n✗ 她很像花一样漂亮。 → ✓ 她像花一样漂亮。",
      "✗ 像……一样似的 → pick one.\n✗ Reading 似的 as \"sìde\" → ✓ shìde.\n✗ 她很像花一样漂亮。 → ✓ 她像花一样漂亮。"
    ),
    category: "助词 / particles",
  },
  {
    id: "hsk3-g74",
    level: 3,
    title: t("Redoublement des adjectifs : AA, AABB, ABB", "Adjective reduplication: AA, AABB, ABB"),
    pattern: "AA(的) ｜ AABB(的) ｜ ABB(的)",
    explanation: t(
      "Redoubler un adjectif le rend **plus vivant et descriptif** — c'est typique des **récits** et des descriptions :\n- **AA** : 大大的眼睛, 慢慢地走 (à l'oral, la 2ᵉ syllabe passe souvent au 1ᵉʳ ton : 好好儿 hǎohāor).\n- **AABB** (adjectif de 2 syllabes AB) : 高兴 → 高高兴兴, 干净 → 干干净净, 清楚 → 清清楚楚.\n- **ABB** : 红红的 → 红通通, 绿油油, 热乎乎, 亮晶晶.\n\n⚠️ Un adjectif redoublé exprime **déjà** un degré : on ne met **pas** 很 devant. On ajoute souvent **的** (devant un nom ou en fin de phrase) ou **地** (devant un verbe).",
      "Reduplicating an adjective makes it **more vivid and descriptive** — typical of **stories** and descriptions:\n- **AA**: 大大的眼睛, 慢慢地走.\n- **AABB** (for a two-syllable adjective AB): 高兴 → 高高兴兴, 干净 → 干干净净, 清楚 → 清清楚楚.\n- **ABB**: 红通通, 绿油油, 热乎乎, 亮晶晶.\n\n⚠️ A reduplicated adjective **already** carries degree: **no** 很 in front. Add **的** (before a noun or at the end) or **地** (before a verb)."
    ),
    examples: [
      ex("孩子们高高兴兴地回家了。", "Háizimen gāogāoxìngxìng de huí jiā le.", "Les enfants sont rentrés chez eux tout joyeux.", "The children went home happily."),
      ex("她把房间打扫得干干净净的。", "Tā bǎ fángjiān dǎsǎo de gāngānjìngjìng de.", "Elle a nettoyé la chambre de fond en comble.", "She cleaned the room spotless."),
      ex("小女孩有一双大大的眼睛。", "Xiǎo nǚhái yǒu yì shuāng dàdà de yǎnjing.", "La petite fille a de grands yeux.", "The little girl has big, big eyes."),
      ex("冬天喝一碗热乎乎的汤，真舒服。", "Dōngtiān hē yì wǎn rèhūhū de tāng, zhēn shūfu.", "En hiver, un bol de soupe bien chaude, quel bonheur.", "A bowl of piping hot soup in winter feels so good."),
    ],
    pitfalls: t(
      "✗ 很干干净净 → pas de 很. ✓ 干干净净的。\n✗ 高兴高兴 pour « tout joyeux » → ABAB, c'est le redoublement **verbal** (se faire plaisir un peu). ✓ 高高兴兴。",
      "✗ 很干干净净 → no 很. ✓ 干干净净的。\n✗ 高兴高兴 for \"very happy\" → ABAB is **verb** reduplication (cheer up a bit). ✓ 高高兴兴。"
    ),
    category: "重叠 / reduplication",
  },
  {
    id: "hsk3-g75",
    level: 3,
    title: t("Petit à petit : 渐渐 / 逐渐", "Gradually: 渐渐 / 逐渐"),
    pattern: "Sujet + 渐渐(地) / 逐渐 + V / Adj + (了 / 起来)",
    explanation: t(
      "**渐渐** (jiànjiàn) et **逐渐** (zhújiàn) = « peu à peu, progressivement ». Ils décrivent un **changement lent et naturel**.\n\n- **渐渐(地)** : plus descriptif, typique des récits : 天渐渐黑了 (la nuit tombait peu à peu). Il peut se placer **avant le sujet**.\n- **逐渐** : plus neutre / écrit, pour des évolutions « étape par étape » : 经济逐渐发展.\n\nLa phrase se termine souvent par **了**, **起来** ou **下来**.",
      "**渐渐** (jiànjiàn) and **逐渐** (zhújiàn) = \"gradually, little by little\". They describe **slow, natural change**.\n\n- **渐渐(地)**: more descriptive, typical of stories: 天渐渐黑了 (it was gradually getting dark). It can go **before the subject**.\n- **逐渐**: more neutral / written, for step-by-step developments: 经济逐渐发展.\n\nThe sentence often ends with **了**, **起来** or **下来**."
    ),
    examples: [
      ex("天渐渐黑了，路上的人越来越少。", "Tiān jiànjiàn hēi le, lù shang de rén yuè lái yuè shǎo.", "La nuit tombait peu à peu, il y avait de moins en moins de monde dans la rue.", "It was gradually getting dark, and there were fewer and fewer people on the street."),
      ex("渐渐地，我们成了好朋友。", "Jiànjiàn de, wǒmen chéng le hǎo péngyou.", "Petit à petit, nous sommes devenus bons amis.", "Little by little, we became good friends."),
      ex("他的中文水平逐渐提高了。", "Tā de Zhōngwén shuǐpíng zhújiàn tígāo le.", "Son niveau de chinois s'est progressivement amélioré.", "His Chinese gradually improved."),
    ],
    pitfalls: t(
      "✗ 他渐渐很累。 → pas d'adverbe de degré ; on décrit un changement. ✓ 他渐渐累了。\n✗ 逐渐地 est rare → ✓ 逐渐 / 渐渐地。",
      "✗ 他渐渐很累。 → no degree adverb; you're describing change. ✓ 他渐渐累了。\n✗ 逐渐地 is rare → ✓ 逐渐 / 渐渐地。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g76",
    level: 3,
    title: t("Mutuellement : 互相", "Each other: 互相"),
    pattern: "Sujet (pluriel) + 互相 + Verbe",
    explanation: t(
      "**互相** (hùxiāng) = « l'un l'autre, mutuellement ». Le sujet est forcément **pluriel** (ou deux personnes), et 互相 se place **devant le verbe**.\n\n我们互相帮助 (nous nous entraidons), 他们互相看了一眼 (ils ont échangé un regard).\n\nContrairement au français, **pas de pronom réfléchi** (« se, nous ») : ✗ 互相帮助我们 → ✓ 我们互相帮助.",
      "**互相** (hùxiāng) = \"each other, mutually\". The subject must be **plural** (or two people), and 互相 goes **before the verb**.\n\n我们互相帮助 (we help each other), 他们互相看了一眼 (they glanced at each other).\n\nNo object pronoun is needed: ✗ 互相帮助我们 → ✓ 我们互相帮助."
    ),
    examples: [
      ex("两个老人互相看了看，都笑了。", "Liǎng ge lǎorén hùxiāng kàn le kàn, dōu xiào le.", "Les deux vieillards se sont regardés et ont souri.", "The two old people looked at each other and both smiled."),
      ex("邻居之间应该互相帮助。", "Línjū zhījiān yīnggāi hùxiāng bāngzhù.", "Entre voisins, il faut s'entraider.", "Neighbours should help one another."),
      ex("我们经常互相发短信。", "Wǒmen jīngcháng hùxiāng fā duǎnxìn.", "On s'envoie souvent des messages.", "We often text each other."),
    ],
    pitfalls: t(
      "✗ 我互相帮助他。 → sujet singulier impossible. ✓ 我们互相帮助。\n✗ 他们帮助互相。 → 互相 avant le verbe. ✓ 他们互相帮助。",
      "✗ 我互相帮助他。 → a singular subject doesn't work. ✓ 我们互相帮助。\n✗ 他们帮助互相。 → 互相 before the verb. ✓ 他们互相帮助。"
    ),
    category: "副词 / adverbs",
  },
  {
    id: "hsk3-g77",
    level: 3,
    title: t("Tout en faisant… soudain : V着V着", "While doing… suddenly: V着V着"),
    pattern: "Sujet + V着V着 + (就) + événement inattendu",
    explanation: t(
      "**V着V着** décrit une action **en cours depuis un moment**, pendant laquelle survient **autre chose**, souvent sans qu'on s'en rende compte : 走着走着，天就黑了 (à force de marcher, la nuit est tombée).\n\nOn utilise un verbe d'**une syllabe** (走, 说, 看, 听, 想, 聊…), et la seconde partie contient souvent **就**, **突然** ou **了**.\n\nC'est une tournure très **narrative**, parfaite pour raconter une histoire.",
      "**V着V着** describes an action **that has been going on for a while**, during which **something else** happens, often unnoticed: 走着走着，天就黑了 (we walked and walked, and night fell).\n\nUse a **one-syllable** verb (走, 说, 看, 听, 想, 聊…); the second part often contains **就**, **突然** or **了**.\n\nIt's a very **narrative** device, perfect for storytelling."
    ),
    examples: [
      ex("孩子听着听着就睡着了。", "Háizi tīng zhe tīng zhe jiù shuìzháo le.", "L'enfant s'est endormi en écoutant.", "The child fell asleep while listening."),
      ex("我们聊着聊着，突然下起雨来了。", "Wǒmen liáo zhe liáo zhe, tūrán xià qi yǔ lai le.", "On discutait tranquillement quand soudain il s'est mis à pleuvoir.", "We were chatting away when it suddenly started to rain."),
      ex("她说着说着就哭了。", "Tā shuō zhe shuō zhe jiù kū le.", "Elle a fini par fondre en larmes en parlant.", "She burst into tears as she talked."),
    ],
    pitfalls: t(
      "✗ 休息着休息着 → verbe d'une syllabe. ✓ 睡着睡着 / 坐着坐着。\n✗ V着V着 pour deux actions volontaires simultanées → c'est 一边……一边…….",
      "✗ 休息着休息着 → use a one-syllable verb. ✓ 坐着坐着。\n✗ Using V着V着 for two deliberate simultaneous actions → that's 一边……一边……."
    ),
    category: "固定格式 / fixed patterns",
  },
];
