import type { Guide } from "./types";

/**
 * Foundations: free, evergreen bilingual guides (FR/EN).
 * Pinyin convention: citation tones, except 不 and 一 which are written with their spoken (sandhi) tone.
 */

const pinyinComplete: Guide = {
  slug: "pinyin-complete",
  category: "pronunciation",
  readMinutes: 14,
  title: {
    fr: "Le pinyin de A à Z : initiales, finales, orthographe et tons",
    en: "Pinyin from A to Z: initials, finals, spelling and tones",
  },
  summary: {
    fr: "Tout ce qu'il faut savoir pour lire et prononcer n'importe quelle syllabe chinoise : les 21 initiales, les finales, les règles d'orthographe avec y, w et ü, et où placer la marque de ton.",
    en: "Everything you need to read and pronounce any Chinese syllable: the 21 initials, the finals, the spelling rules for y, w and ü, and where the tone mark goes.",
  },
  sections: [
    {
      heading: { fr: "Le pinyin, c'est quoi exactement ?", en: "What exactly is pinyin?" },
      body: {
        fr: "Le **pinyin** (拼音, « assembler les sons ») est le système officiel de transcription du chinois en alphabet latin, adopté en Chine en 1958. Il ne remplace pas les caractères : c'est un **outil de prononciation**. Les enfants chinois l'apprennent à l'école avant les caractères, on l'utilise pour taper le chinois sur un clavier, et les dictionnaires sont classés selon lui.\n\nLe piège principal : le pinyin utilise des lettres que tu connais, mais **pas avec leur valeur française ou anglaise**. Le « q » se prononce à peu près « tch », le « x » à peu près « ch », le « e » ne ressemble ni au « é » français ni au « e » anglais. Il faut donc apprendre le pinyin comme un **nouveau code**, pas le lire « à l'instinct ».\n\nChaque syllabe chinoise se découpe en trois éléments :\n• une **initiale** (la consonne de départ, parfois absente) ;\n• une **finale** (la voyelle, éventuellement suivie de -n ou -ng) ;\n• un **ton** (la mélodie de la syllabe).\n\nPar exemple, **mā** = initiale **m** + finale **a** + 1er ton. Le chinois standard ne compte qu'environ **400 syllabes** sans les tons (environ 1 300 avec les tons), contre plus de 10 000 en anglais. C'est une excellente nouvelle : une fois ces 400 syllabes maîtrisées, tu sais prononcer tout le mandarin.",
        en: "**Pinyin** (拼音, \"spelling sounds\") is the official system for writing Chinese in the Latin alphabet, adopted in China in 1958. It does not replace characters: it is a **pronunciation tool**. Chinese children learn it at school before characters, it is how people type Chinese on a keyboard, and dictionaries are ordered by it.\n\nThe main trap: pinyin uses letters you already know, but **not with their English values**. \"q\" sounds roughly like \"ch\" in \"cheese\", \"x\" roughly like \"sh\" in \"sheep\", and \"e\" is not the \"e\" of \"bed\". So learn pinyin as a **new code** rather than reading it on instinct.\n\nEvery Chinese syllable breaks down into three parts:\n• an **initial** (the starting consonant, sometimes absent);\n• a **final** (the vowel part, possibly ending in -n or -ng);\n• a **tone** (the pitch melody of the syllable).\n\nFor example, **mā** = initial **m** + final **a** + 1st tone. Standard Chinese has only about **400 syllables** without tones (around 1,300 with tones), compared with over 10,000 in English. That is great news: once you master those 400 syllables, you can pronounce all of Mandarin.",
      },
      examples: [
        { zh: "妈", pinyin: "mā", tr: { fr: "maman (m + a + 1er ton)", en: "mum (m + a + 1st tone)" } },
        { zh: "好", pinyin: "hǎo", tr: { fr: "bien (h + ao + 3e ton)", en: "good (h + ao + 3rd tone)" } },
        { zh: "爱", pinyin: "ài", tr: { fr: "aimer (pas d'initiale : ai + 4e ton)", en: "to love (no initial: ai + 4th tone)" } },
      ],
    },
    {
      heading: { fr: "Les 21 initiales, groupe par groupe", en: "The 21 initials, group by group" },
      body: {
        fr: "On classe les initiales selon **l'endroit de la bouche** où elles se forment. Apprends-les par groupes, c'est beaucoup plus logique.\n\n**Lèvres : b p m f.** Proches du français. Attention : **b** n'est pas sonore comme le « b » français, c'est un « p » doux, sans souffle. **p** est un « p » avec un **fort souffle** (aspiré), comme en anglais « pie ».\n\n**Pointe de la langue : d t n l.** Même logique : **d** = « t » doux non aspiré ; **t** = « t » avec souffle.\n\n**Fond de la gorge : g k h.** **g** = « k » doux ; **k** = « k » soufflé ; **h** est **raclé**, plus rugueux qu'un « h » anglais, proche de la jota espagnole.\n\n**Palatales : j q x.** La langue est à plat contre le palais, lèvres étirées comme pour sourire. **j** ≈ « dj » doux, **q** ≈ « tch » soufflé, **x** ≈ « ch » très doux et souriant. Elles ne se combinent **qu'avec i ou ü**.\n\n**Rétroflexes : zh ch sh r.** La pointe de la langue se **recourbe vers le haut**, derrière les gencives. **zh** ≈ « dj » creux, **ch** ≈ « tch » soufflé, **sh** ≈ « ch » creux, **r** ≈ un mélange entre le « j » de « jour » et le « r » anglais.\n\n**Sifflantes : z c s.** La langue touche l'arrière des dents du bas. **z** ≈ « dz », **c** ≈ « ts » avec souffle (comme dans « tsé-tsé »), **s** = « s ».\n\nLa notion clé : **aspiration**. En chinois, b/p, d/t, g/k, j/q, zh/ch, z/c ne s'opposent pas par la voix (sourd/sonore) comme en français, mais par le **souffle**. Mets ta main devant la bouche : sur **p, t, k, q, ch, c**, tu dois sentir une bouffée d'air.",
        en: "Initials are grouped by **where in the mouth** they are made. Learn them in groups; it is far more logical.\n\n**Lips: b p m f.** Close to English, with one key difference: **b** is not voiced like English \"b\"; it is a soft, unaspirated \"p\" (like the p in \"spin\"). **p** is a \"p\" with a **strong puff of air**, as in \"pie\".\n\n**Tongue tip: d t n l.** Same logic: **d** = soft unaspirated \"t\" (as in \"stop\"); **t** = \"t\" with a puff of air (as in \"top\").\n\n**Back of the throat: g k h.** **g** = soft \"k\" (as in \"skin\"); **k** = aspirated \"k\"; **h** is **raspy**, rougher than English \"h\", closer to the Scottish \"loch\".\n\n**Palatals: j q x.** Tongue flat against the palate, lips spread as if smiling. **j** ≈ a soft \"j\" in \"jeep\", **q** ≈ an aspirated \"ch\" in \"cheap\", **x** ≈ a very soft, smiling \"sh\". They **only combine with i or ü**.\n\n**Retroflexes: zh ch sh r.** The tongue tip **curls up** behind the gum ridge. **zh** ≈ \"j\" in \"judge\" but hollower, **ch** ≈ aspirated \"ch\" in \"church\", **sh** ≈ \"sh\" in \"shirt\", **r** ≈ between the \"s\" in \"measure\" and English \"r\".\n\n**Sibilants: z c s.** Tongue behind the lower teeth. **z** ≈ \"ds\" in \"kids\", **c** ≈ \"ts\" in \"cats\" with a puff of air, **s** = \"s\".\n\nThe key concept is **aspiration**. In Chinese, b/p, d/t, g/k, j/q, zh/ch and z/c are not distinguished by voicing (as in English \"b\" vs \"p\") but by **breath**. Hold your hand in front of your mouth: on **p, t, k, q, ch, c** you should feel a puff of air.",
      },
      table: {
        head: [
          { fr: "Groupe", en: "Group" },
          { fr: "Non aspirées", en: "Unaspirated" },
          { fr: "Aspirées", en: "Aspirated" },
          { fr: "Autres", en: "Others" },
        ],
        rows: [
          [{ fr: "Lèvres", en: "Lips" }, "b", "p", "m f"],
          [{ fr: "Pointe de la langue", en: "Tongue tip" }, "d", "t", "n l"],
          [{ fr: "Gorge", en: "Throat" }, "g", "k", "h"],
          [{ fr: "Palatales", en: "Palatals" }, "j", "q", "x"],
          [{ fr: "Rétroflexes", en: "Retroflexes" }, "zh", "ch", "sh r"],
          [{ fr: "Sifflantes", en: "Sibilants" }, "z", "c", "s"],
        ],
      },
      tip: {
        fr: "Test de la feuille de papier : tiens une feuille devant ta bouche. Elle doit bouger sur « pà » (怕, avoir peur) mais pas sur « bà » (爸, papa).",
        en: "Paper test: hold a sheet of paper in front of your mouth. It should move on \"pà\" (怕, to fear) but not on \"bà\" (爸, dad).",
      },
    },
    {
      heading: { fr: "Les finales : voyelles simples, composées et nasales", en: "Finals: simple, compound and nasal vowels" },
      body: {
        fr: "Les finales se rangent en quatre familles, selon leur première voyelle.\n\n**1. Finales « ouvertes » : a, o, e, ai, ei, ao, ou, an, en, ang, eng, ong, er.**\n• **a** : « a » bien ouvert.\n• **o** : « o » arrondi, avec un léger « ou » devant (bo ≈ « bwo »).\n• **e** : le son le plus difficile. Ce n'est pas « é » ! Prononce « o », puis étire les lèvres sans bouger la langue : tu obtiens un son proche du « eu » de « peur » prononcé du fond de la gorge.\n• **ai** ≈ « aï », **ei** ≈ « eï » (comme « hey »), **ao** ≈ « ao », **ou** ≈ « o-ou ».\n• **-n / -ng** : **-n** se termine avec la langue contre les dents du haut (comme « banane » en anglais) ; **-ng** se termine au fond de la gorge, comme dans l'anglais « sing ». Le **-g ne se prononce jamais** séparément.\n• **er** : un « eu » avec la langue recourbée, proche du « are » américain.\n\n**2. Finales en i : i, ia, ie, iao, iou, ian, in, iang, ing, iong.** Attention à **ian**, qui se prononce **« yèn »** et non « yan » : 天 tiān ≈ « tyèn ».\n\n**3. Finales en u : u, ua, uo, uai, uei, uan, uen, uang, ueng.** Le **u** chinois se prononce **« ou »**, jamais comme le « u » français.\n\n**4. Finales en ü : ü, üe, üan, ün.** Le **ü** est exactement le **« u » français** (« tu », « rue ») — un avantage pour les francophones ! Les anglophones doivent dire « ii » en arrondissant les lèvres.\n\n**Cas spécial : le « i » après z c s zh ch sh r.** Dans **zi, ci, si, zhi, chi, shi, ri**, le « i » n'est **pas** un « i » : c'est un simple prolongement de la consonne, un bourdonnement. 四 sì ne se prononce pas « si » mais plutôt « sz ».",
        en: "Finals fall into four families according to their first vowel.\n\n**1. \"Open\" finals: a, o, e, ai, ei, ao, ou, an, en, ang, eng, ong, er.**\n• **a**: a wide-open \"ah\".\n• **o**: a rounded \"o\" with a slight \"w\" glide before it (bo ≈ \"bwo\").\n• **e**: the hardest one. It is not the \"e\" of \"bed\"! Say \"o\", then spread your lips without moving your tongue: you get a sound close to the \"u\" in \"duh\", made further back.\n• **ai** ≈ \"eye\", **ei** ≈ \"hey\", **ao** ≈ \"ow\" in \"cow\", **ou** ≈ \"oh\".\n• **-n / -ng**: **-n** ends with the tongue on the upper gum ridge; **-ng** ends at the back of the throat, as in \"sing\". The **-g is never pronounced** on its own.\n• **er**: like the American \"are\" with the tongue curled.\n\n**2. i-finals: i, ia, ie, iao, iou, ian, in, iang, ing, iong.** Watch out for **ian**, pronounced **\"yen\"**, not \"yan\": 天 tiān ≈ \"tyen\".\n\n**3. u-finals: u, ua, uo, uai, uei, uan, uen, uang, ueng.** Chinese **u** sounds like **\"oo\"** in \"food\".\n\n**4. ü-finals: ü, üe, üan, ün.** **ü** is the French \"u\" or German \"ü\": say \"ee\" and round your lips as for \"oo\" without moving your tongue.\n\n**Special case: \"i\" after z c s zh ch sh r.** In **zi, ci, si, zhi, chi, shi, ri**, the \"i\" is **not** an \"ee\": it is just a buzzing continuation of the consonant. 四 sì is not \"see\" but closer to \"sz\".",
      },
      table: {
        head: [
          { fr: "Famille", en: "Family" },
          { fr: "Finales", en: "Finals" },
        ],
        rows: [
          [{ fr: "Ouvertes", en: "Open" }, "a o e ai ei ao ou an en ang eng ong er"],
          [{ fr: "En i", en: "i-finals" }, "i ia ie iao iou(-iu) ian in iang ing iong"],
          [{ fr: "En u", en: "u-finals" }, "u ua uo uai uei(-ui) uan uen(-un) uang ueng"],
          [{ fr: "En ü", en: "ü-finals" }, "ü üe üan ün"],
        ],
      },
      examples: [
        { zh: "饿", pinyin: "è", tr: { fr: "avoir faim (le fameux « e »)", en: "hungry (the famous \"e\")" } },
        { zh: "天", pinyin: "tiān", tr: { fr: "ciel, jour (« tyèn »)", en: "sky, day (\"tyen\")" } },
        { zh: "绿", pinyin: "lǜ", tr: { fr: "vert (« u » français)", en: "green (French \"u\")" } },
        { zh: "四", pinyin: "sì", tr: { fr: "quatre (« i » bourdonné)", en: "four (buzzing \"i\")" } },
      ],
    },
    {
      heading: { fr: "Règles d'orthographe : y, w et le ü qui perd ses points", en: "Spelling rules: y, w and the ü that loses its dots" },
      body: {
        fr: "Le pinyin a quelques règles d'écriture qui déroutent au début. Elles ne changent **pas la prononciation** : elles servent seulement à bien séparer les syllabes à l'écrit.\n\n**Règle 1 — Finales en i sans initiale : on écrit y.**\n• Si la finale est juste **i, in, ing**, on **ajoute** y devant : i → **yi**, in → **yin**, ing → **ying**.\n• Sinon, le **i devient y** : ia → **ya**, ie → **ye**, iao → **yao**, iou → **you**, ian → **yan**, iang → **yang**, iong → **yong**.\n\n**Règle 2 — Finales en u sans initiale : on écrit w.**\n• **u** seul → **wu** (on ajoute w).\n• Sinon, le **u devient w** : ua → **wa**, uo → **wo**, uai → **wai**, uei → **wei**, uan → **wan**, uen → **wen**, uang → **wang**, ueng → **weng**.\n\n**Règle 3 — Finales en ü sans initiale : on écrit yu.** ü → **yu**, üe → **yue**, üan → **yuan**, ün → **yun**. Les points disparaissent.\n\n**Règle 4 — Après j, q, x, le ü perd ses points.** Comme j, q, x ne se combinent **jamais** avec u (« ou »), il n'y a pas d'ambiguïté : **ju, qu, xu, jue, quan, xun** contiennent tous un **ü**. C'est l'erreur n°1 des débutants : 去 qù se prononce « tch-u » (u français), pas « tchou ».\n\n**Règle 5 — Après n et l, on garde les points**, car nu/nü et lu/lü existent tous les deux : 路 lù (route) ≠ 绿 lǜ (vert), 女 nǚ (femme) ≠ 努 nǔ (effort).\n\n**Règle 6 — Trois finales abrégées.** Après une initiale, **iou → iu**, **uei → ui**, **uen → un** : d + iou = **diu**, g + uei = **gui**, l + uen = **lun**. La voyelle du milieu est plus faible mais s'entend encore, surtout aux 3e et 4e tons (贵 guì ≈ « gouèï »).\n\n**Règle 7 — L'apostrophe.** Quand une syllabe commençant par a, o ou e suit une autre syllabe, on met une apostrophe pour éviter la confusion : **Xī'ān** (西安, deux syllabes) ≠ **xiān** (先, une syllabe) ; **Tiān'ānmén** (天安门).",
        en: "Pinyin has a few spelling rules that confuse beginners. They **do not change pronunciation**: they just keep syllables clearly separated in writing.\n\n**Rule 1 — i-finals with no initial are written with y.**\n• If the final is just **i, in, ing**, **add** y: i → **yi**, in → **yin**, ing → **ying**.\n• Otherwise **i becomes y**: ia → **ya**, ie → **ye**, iao → **yao**, iou → **you**, ian → **yan**, iang → **yang**, iong → **yong**.\n\n**Rule 2 — u-finals with no initial are written with w.**\n• **u** alone → **wu** (add w).\n• Otherwise **u becomes w**: ua → **wa**, uo → **wo**, uai → **wai**, uei → **wei**, uan → **wan**, uen → **wen**, uang → **wang**, ueng → **weng**.\n\n**Rule 3 — ü-finals with no initial are written yu.** ü → **yu**, üe → **yue**, üan → **yuan**, ün → **yun**. The dots disappear.\n\n**Rule 4 — After j, q, x, ü loses its dots.** Since j, q, x **never** combine with u (\"oo\"), there is no ambiguity: **ju, qu, xu, jue, quan, xun** all contain **ü**. This is beginners' mistake no. 1: 去 qù is \"ch\" + French \"u\", not \"choo\".\n\n**Rule 5 — After n and l, the dots stay**, because nu/nü and lu/lü both exist: 路 lù (road) ≠ 绿 lǜ (green), 女 nǚ (woman) ≠ 努 nǔ (effort).\n\n**Rule 6 — Three contracted finals.** After an initial, **iou → iu**, **uei → ui**, **uen → un**: d + iou = **diu**, g + uei = **gui**, l + uen = **lun**. The middle vowel is weaker but still audible, especially in tones 3 and 4 (贵 guì ≈ \"gway\").\n\n**Rule 7 — The apostrophe.** When a syllable starting with a, o or e follows another syllable, an apostrophe prevents confusion: **Xī'ān** (西安, two syllables) ≠ **xiān** (先, one syllable); **Tiān'ānmén** (天安门).",
      },
      table: {
        head: [
          { fr: "Finale", en: "Final" },
          { fr: "Sans initiale", en: "No initial" },
          { fr: "Avec initiale (ex.)", en: "With initial (e.g.)" },
        ],
        rows: [
          ["i", "yi", "mi, ji"],
          ["iou", "you", "liu, jiu"],
          ["u", "wu", "bu, zhu"],
          ["uei", "wei", "gui, dui"],
          ["uen", "wen", "lun, chun"],
          ["ü", "yu", "lü, nü, ju, qu, xu"],
          ["üe", "yue", "lüe, jue, xue"],
          ["üan", "yuan", "juan, quan, xuan"],
        ],
      },
      examples: [
        { zh: "去", pinyin: "qù", tr: { fr: "aller (q + ü, sans les points)", en: "to go (q + ü, dots dropped)" } },
        { zh: "学", pinyin: "xué", tr: { fr: "étudier (x + üe)", en: "to study (x + üe)" } },
        { zh: "月", pinyin: "yuè", tr: { fr: "lune, mois (üe sans initiale)", en: "moon, month (üe with no initial)" } },
        { zh: "问", pinyin: "wèn", tr: { fr: "demander (uen sans initiale)", en: "to ask (uen with no initial)" } },
      ],
    },
    {
      heading: { fr: "Où placer la marque de ton ?", en: "Where does the tone mark go?" },
      body: {
        fr: "Le ton se note par un signe au-dessus d'une voyelle : **ā** (1er ton, plat), **á** (2e, montant), **ǎ** (3e, descendant-montant), **à** (4e, descendant). Le ton neutre n'a pas de marque : **ma**.\n\nLa règle est simple et s'applique dans cet ordre :\n\n**1. S'il y a un a ou un e, il prend la marque.** (a et e ne se trouvent jamais ensemble.) → hǎo, jiā, mèi, xué, tiān.\n\n**2. S'il y a « ou », c'est le o qui prend la marque.** → dōu, zǒu, gòu.\n\n**3. Sinon, c'est la dernière voyelle.** → duō, guì, liù, huí, jiǒng.\n\nLa règle n°3 explique un cas qui surprend beaucoup : dans **iu** et **ui**, c'est toujours la **seconde** voyelle qui porte le ton : **liù** (six), **shuǐ** (eau), **duì** (juste).\n\nSur un **i**, le point est remplacé par la marque : **nǐ**, **yī**. Sur un **ü** avec ton, on garde les points et on ajoute la marque dessus : **lǜ**, **nǚ**.\n\nSi ton clavier ne permet pas de taper les marques, on écrit parfois les tons avec des chiffres (ni3 hao3). C'est pratique pour taper, mais dans Hanlu et dans tous les manuels, on utilise les **vraies marques** : elles donnent une image visuelle de la mélodie.",
        en: "Tones are written with a mark above a vowel: **ā** (1st tone, level), **á** (2nd, rising), **ǎ** (3rd, dipping), **à** (4th, falling). The neutral tone has no mark: **ma**.\n\nThe rule is simple and applies in this order:\n\n**1. If there is an a or an e, it takes the mark.** (a and e never appear together.) → hǎo, jiā, mèi, xué, tiān.\n\n**2. If there is \"ou\", the o takes the mark.** → dōu, zǒu, gòu.\n\n**3. Otherwise, the last vowel takes it.** → duō, guì, liù, huí, jiǒng.\n\nRule 3 explains a case that surprises many learners: in **iu** and **ui**, the tone always goes on the **second** vowel: **liù** (six), **shuǐ** (water), **duì** (correct).\n\nOn an **i**, the dot is replaced by the mark: **nǐ**, **yī**. On a **ü** with a tone, keep the dots and put the mark on top: **lǜ**, **nǚ**.\n\nIf your keyboard cannot type the marks, tones are sometimes written with numbers (ni3 hao3). That's handy for typing, but Hanlu and all textbooks use **real tone marks**: they give you a visual picture of the melody.",
      },
      examples: [
        { zh: "六", pinyin: "liù", tr: { fr: "six (iu : la marque va sur le u)", en: "six (iu: the mark goes on u)" } },
        { zh: "水", pinyin: "shuǐ", tr: { fr: "eau (ui : la marque va sur le i)", en: "water (ui: the mark goes on i)" } },
        { zh: "走", pinyin: "zǒu", tr: { fr: "marcher (ou : sur le o)", en: "to walk (ou: on the o)" } },
        { zh: "谢谢", pinyin: "xièxie", tr: { fr: "merci (e prioritaire ; 2e syllabe neutre)", en: "thank you (e has priority; 2nd syllable neutral)" } },
      ],
      tip: {
        fr: "Moyen mnémotechnique : « **a** et **e** d'abord, puis **o** de ou, sinon la **dernière** ».",
        en: "Mnemonic: \"**a** and **e** first, then the **o** of ou, otherwise the **last** vowel\".",
      },
    },
    {
      heading: { fr: "Les paires qui piègent les francophones et anglophones", en: "The pairs that trip up French and English speakers" },
      body: {
        fr: "Voici les confusions les plus fréquentes, et comment les corriger.\n\n• **zh / j** : 知 zhī (savoir) vs 鸡 jī (poulet). Pour **zh**, la langue est recourbée, la bouche plutôt ronde ; pour **j**, la langue est à plat et tu souris.\n• **sh / x** : 是 shì (être) vs 细 xì (fin). Même principe.\n• **c / ch / q** : 次 cì (fois), 吃 chī (manger), 七 qī (sept). Trois « tch/ts » différents : dents, langue recourbée, sourire.\n• **u / ü** : 路 lù (route) vs 绿 lǜ (vert). Pour les francophones : « lou » vs « lu ». Et n'oublie pas que **qu, ju, xu** contiennent un ü !\n• **-n / -ng** : 山 shān (montagne) vs 上 shàng (dessus) ; 心 xīn (cœur) vs 星 xīng (étoile). Termine **-n** sur les dents, **-ng** dans la gorge, bouche ouverte.\n• **e** : francophones, ne dites pas « é » dans 喝 hē (boire) ; anglophones, ne dites pas « her ».\n• **r** : ce n'est ni le « r » français roulé en gorge, ni un « r » anglais pur. Pense au « j » de « jour » avec la langue recourbée : 热 rè (chaud), 人 rén (personne).\n• **h** : les francophones l'oublient souvent. 好 hǎo n'est pas « ao » ! Racle légèrement la gorge.\n• **en / an** : 很 hěn (très) se prononce avec un « e » court et neutre, pas « hin » ni « han ».",
        en: "Here are the most common confusions and how to fix them.\n\n• **zh / j**: 知 zhī (to know) vs 鸡 jī (chicken). For **zh**, the tongue curls back and the mouth is rounder; for **j**, the tongue is flat and you smile.\n• **sh / x**: 是 shì (to be) vs 细 xì (thin). Same principle.\n• **c / ch / q**: 次 cì (time), 吃 chī (to eat), 七 qī (seven). Three different \"ts/ch\" sounds: teeth, curled tongue, smile.\n• **u / ü**: 路 lù (road) vs 绿 lǜ (green). And remember that **qu, ju, xu** contain ü, not \"oo\"!\n• **-n / -ng**: 山 shān (mountain) vs 上 shàng (on top); 心 xīn (heart) vs 星 xīng (star). End **-n** on the gum ridge, **-ng** in the throat.\n• **e**: 喝 hē (to drink) is not \"heh\" and not \"her\": keep the tongue back, lips unrounded.\n• **r**: not a pure English \"r\". Think of the \"s\" in \"pleasure\" with the tongue curled back: 热 rè (hot), 人 rén (person).\n• **x**: English speakers often say \"z\" or \"ks\" (as in \"box\"). 小 xiǎo is \"shyow\", never \"ksyow\".\n• **q**: never \"kw\"! 去 qù ≈ \"chü\".\n• **ian**: 钱 qián (money) ≈ \"chyen\", not \"chyan\".",
      },
      examples: [
        { zh: "吃", pinyin: "chī", tr: { fr: "manger", en: "to eat" } },
        { zh: "七", pinyin: "qī", tr: { fr: "sept", en: "seven" } },
        { zh: "次", pinyin: "cì", tr: { fr: "fois", en: "time (occurrence)" } },
        { zh: "绿", pinyin: "lǜ", tr: { fr: "vert", en: "green" } },
        { zh: "路", pinyin: "lù", tr: { fr: "route", en: "road" } },
      ],
    },
    {
      heading: { fr: "Méthode : comment apprendre le pinyin en deux semaines", en: "Method: how to learn pinyin in two weeks" },
      body: {
        fr: "Le pinyin s'apprend vite si on s'y prend bien. Voici une méthode éprouvée :\n\n**Jours 1–3 : les finales simples et les tons.** Travaille a, o, e, i, u, ü avec les quatre tons (ā á ǎ à…). Enregistre-toi et compare avec l'audio.\n\n**Jours 4–7 : les initiales, par groupes.** Un groupe par jour, en insistant sur les paires aspirées/non aspirées. Combine chaque initiale avec a, i, u.\n\n**Jours 8–10 : les finales composées et nasales.** Entraîne-toi sur les paires -n/-ng et sur ian, üan, iong.\n\n**Jours 11–14 : lecture de mots réels.** Lis des mots de deux syllabes que tu vas utiliser (你好, 谢谢, 中国, 老师…). C'est là que le pinyin devient vivant.\n\nTrois conseils importants :\n1. **Écoute avant de lire.** Ne te fie jamais à l'orthographe seule : chaque nouvelle syllabe doit d'abord passer par l'oreille.\n2. **Apprends les mots avec leur ton**, dès le début. Un mot sans son ton est un mot mal appris.\n3. **Ne reste pas bloqué** sur le pinyin. Au bout de deux semaines, passe aux caractères : le pinyin continuera de s'affiner avec la pratique.\n\nDans Hanlu, le **tableau interactif du pinyin** te permet d'écouter chacune des ~400 syllabes, avec les quatre tons.",
        en: "Pinyin is quick to learn if you go about it the right way. Here is a proven method:\n\n**Days 1–3: simple finals and tones.** Practise a, o, e, i, u, ü with the four tones (ā á ǎ à…). Record yourself and compare with the audio.\n\n**Days 4–7: initials, by group.** One group per day, focusing on aspirated/unaspirated pairs. Combine each initial with a, i, u.\n\n**Days 8–10: compound and nasal finals.** Drill the -n/-ng pairs and tricky finals like ian, üan, iong.\n\n**Days 11–14: read real words.** Read two-syllable words you will actually use (你好, 谢谢, 中国, 老师…). This is where pinyin comes alive.\n\nThree key tips:\n1. **Listen before you read.** Never rely on spelling alone: every new syllable should go through your ears first.\n2. **Learn words with their tone** from day one. A word learned without its tone is a word learned wrong.\n3. **Don't get stuck** on pinyin. After two weeks, move on to characters: your pinyin will keep improving with practice.\n\nIn Hanlu, the **interactive pinyin chart** lets you hear each of the ~400 syllables in all four tones.",
      },
      examples: [
        { zh: "你好", pinyin: "nǐ hǎo", tr: { fr: "bonjour", en: "hello" } },
        { zh: "中国", pinyin: "Zhōngguó", tr: { fr: "la Chine", en: "China" } },
        { zh: "老师", pinyin: "lǎoshī", tr: { fr: "professeur", en: "teacher" } },
      ],
      tip: {
        fr: "Écris les syllabes difficiles sur des fiches et teste-toi à l'oral chaque jour : 5 minutes régulières valent mieux qu'une heure une fois par semaine.",
        en: "Put difficult syllables on cards and test yourself out loud every day: 5 minutes daily beats one hour once a week.",
      },
    },
  ],
};

const fourTones: Guide = {
  slug: "four-tones",
  category: "pronunciation",
  readMinutes: 12,
  title: {
    fr: "Les 4 tons du chinois (et le ton neutre) : le guide pour enfin les maîtriser",
    en: "The 4 tones of Chinese (plus the neutral tone): the guide to finally mastering them",
  },
  summary: {
    fr: "Comprendre les contours 55, 35, 214 et 51, savoir pourquoi les francophones et anglophones se trompent, et s'entraîner avec des exercices concrets.",
    en: "Understand the 55, 35, 214 and 51 contours, why English and French speakers get them wrong, and practise with concrete drills.",
  },
  sections: [
    {
      heading: { fr: "Pourquoi les tons sont indispensables", en: "Why tones are essential" },
      body: {
        fr: "En français comme en anglais, la mélodie de la voix sert à exprimer une **émotion** ou une **intention** : on monte à la fin d'une question, on descend pour affirmer. Mais le mot lui-même ne change pas : « chat ? » et « chat ! » désignent le même animal.\n\nEn chinois, c'est différent : la mélodie fait **partie du mot**. La même syllabe **ma** peut vouloir dire « maman » (mā), « chanvre » (má), « cheval » (mǎ) ou « gronder » (mà). Changer de ton, c'est changer de mot, exactement comme changer de voyelle en français (« pâte » / « pote »).\n\nOn entend souvent : « Les Chinois comprendront avec le contexte. » C'est vrai pour une erreur isolée, mais **une phrase où tous les tons sont faux devient très difficile à comprendre**, même pour un natif patient. Le chinois n'a qu'environ 400 syllabes : sans les tons, les homophones deviennent ingérables.\n\nLa bonne nouvelle : il n'y a que **quatre tons** (plus un ton neutre), et ils suivent un système très régulier. Avec un bon entraînement au début, ils deviennent un réflexe.",
        en: "In English, voice pitch expresses **emotion** or **intent**: we rise at the end of a question and fall to make a statement. But the word itself doesn't change: \"cat?\" and \"cat!\" are the same animal.\n\nIn Chinese it's different: pitch is **part of the word**. The same syllable **ma** can mean \"mum\" (mā), \"hemp\" (má), \"horse\" (mǎ) or \"to scold\" (mà). Changing the tone changes the word, just as changing a vowel does in English (\"bit\" / \"bat\").\n\nYou'll often hear: \"Chinese people will understand from context.\" That's true for one mistake, but **a sentence where every tone is wrong becomes very hard to follow**, even for a patient native speaker. Chinese has only about 400 syllables: without tones, homophones become unmanageable.\n\nThe good news: there are only **four tones** (plus a neutral tone), and they form a very regular system. With good training at the start, they become second nature.",
      },
      examples: [
        { zh: "妈", pinyin: "mā", tr: { fr: "maman", en: "mum" } },
        { zh: "麻", pinyin: "má", tr: { fr: "chanvre ; engourdi", en: "hemp; numb" } },
        { zh: "马", pinyin: "mǎ", tr: { fr: "cheval", en: "horse" } },
        { zh: "骂", pinyin: "mà", tr: { fr: "gronder, insulter", en: "to scold" } },
      ],
    },
    {
      heading: { fr: "Les chiffres 55, 35, 214, 51 : lire un contour tonal", en: "55, 35, 214, 51: reading a tone contour" },
      body: {
        fr: "Les linguistes décrivent les tons avec une échelle de **1 (le plus grave) à 5 (le plus aigu)** de ta voix. Le premier chiffre indique où le ton commence, le dernier où il finit.\n\n• **1er ton — 55** : haut et plat. Tu commences en haut de ta tessiture et tu restes en haut, sans bouger, comme une note tenue.\n• **2e ton — 35** : montant. Tu pars du milieu et tu montes vers le haut, comme dans un « Hein ? » ou un « Quoi ? » étonné.\n• **3e ton — 214** : descendant-montant. Tu pars un peu bas, tu descends **tout en bas** (le point le plus grave de ta voix), puis tu remontes légèrement.\n• **4e ton — 51** : descendant. Tu pars du haut et tu tombes brusquement en bas, comme un ordre sec : « Stop ! », « Non ! ».\n• **Ton neutre** : court, léger, sans contour propre. Sa hauteur dépend du ton précédent.\n\nImportant : ces hauteurs sont **relatives à ta propre voix**. Une voix grave d'homme et une voix aiguë d'enfant ont chacune leur « 5 » et leur « 1 ». Ce qui compte, c'est le **mouvement** et **l'amplitude**.",
        en: "Linguists describe tones on a scale from **1 (lowest) to 5 (highest)** of your voice. The first digit shows where the tone starts, the last where it ends.\n\n• **Tone 1 — 55**: high and level. Start at the top of your range and stay there, like a sustained note.\n• **Tone 2 — 35**: rising. Start mid-range and rise to the top, like a surprised \"Huh?\" or \"What?\".\n• **Tone 3 — 214**: dipping. Start fairly low, drop **right to the bottom** of your voice, then rise slightly.\n• **Tone 4 — 51**: falling. Start high and drop sharply, like a curt command: \"Stop!\", \"No!\".\n• **Neutral tone**: short, light, with no contour of its own. Its pitch depends on the preceding tone.\n\nImportant: these pitches are **relative to your own voice**. A deep male voice and a child's high voice each have their own \"5\" and \"1\". What matters is the **movement** and the **range**.",
      },
      table: {
        head: [
          { fr: "Ton", en: "Tone" },
          { fr: "Contour", en: "Contour" },
          { fr: "Marque", en: "Mark" },
          { fr: "Image", en: "Picture it as" },
        ],
        rows: [
          [{ fr: "1er", en: "1st" }, "55", "ā", { fr: "une note tenue, « Aaaah » chez le médecin", en: "a held note, \"Aaaah\" at the doctor's" }],
          [{ fr: "2e", en: "2nd" }, "35", "á", { fr: "« Hein ? » surpris", en: "a surprised \"Huh?\"" }],
          [{ fr: "3e", en: "3rd" }, "214", "ǎ", { fr: "un « Bah… » dubitatif, grave", en: "a low, doubtful \"Well…\"" }],
          [{ fr: "4e", en: "4th" }, "51", "à", { fr: "un « Non ! » sec", en: "a curt \"No!\"" }],
          [{ fr: "Neutre", en: "Neutral" }, "—", "a", { fr: "une syllabe avalée, légère", en: "a light, swallowed syllable" }],
        ],
      },
    },
    {
      heading: { fr: "Le 3e ton, le grand malentendu", en: "Tone 3, the great misunderstanding" },
      body: {
        fr: "Les manuels dessinent le 3e ton comme un grand « V » (214). En réalité, dans la parole courante, on prononce presque toujours le 3e ton **en entier uniquement quand il est isolé ou en fin de phrase**.\n\nDans tous les autres cas, il devient un **demi-3e ton** : un ton **bas et plat (21 ou 211)**, sans la remontée finale. Par exemple, dans 很好 ou 我是, la syllabe au 3e ton reste simplement grave. Et devant un autre 3e ton, il se transforme en 2e ton (voir le guide sur les changements de ton).\n\nRetiens donc : **le 3e ton est avant tout un ton BAS**. La remontée est secondaire. Beaucoup d'apprenants exagèrent le « V » dans chaque mot : leur chinois sonne alors haché et artificiel. Pense plutôt « grave, écrasé, avec une voix un peu grinçante ».\n\nC'est le ton qui prend le plus de temps à maîtriser. Si tu arrives à produire un 3e ton vraiment bas, tu as fait la moitié du chemin.",
        en: "Textbooks draw tone 3 as a big \"V\" (214). In reality, in normal speech, the full tone 3 is only pronounced **when it stands alone or at the end of a sentence**.\n\nEverywhere else it becomes a **half-third tone**: a **low, flat tone (21 or 211)**, with no final rise. For example, in 很好 or 我是, the third-tone syllable just stays low. And before another third tone, it turns into a second tone (see the tone sandhi guide).\n\nSo remember: **tone 3 is first and foremost a LOW tone**. The rise is secondary. Many learners exaggerate the \"V\" in every word, which makes their Chinese sound choppy and artificial. Think instead \"low, squashed, slightly creaky voice\".\n\nThis is the tone that takes longest to master. If you can produce a truly low third tone, you are halfway there.",
      },
      examples: [
        { zh: "我", pinyin: "wǒ", tr: { fr: "je, moi (isolé : 214 complet)", en: "I, me (alone: full 214)" } },
        { zh: "我是法国人。", pinyin: "Wǒ shì Fǎguórén.", tr: { fr: "Je suis français. (我 et 法 : demi-3e ton, bas)", en: "I'm French. (我 and 法: half-third, low)" } },
        { zh: "很好", pinyin: "hěn hǎo", tr: { fr: "très bien (很 se prononce hén)", en: "very good (很 is pronounced hén)" } },
      ],
    },
    {
      heading: { fr: "Le ton neutre", en: "The neutral tone" },
      body: {
        fr: "Le **ton neutre** (轻声 qīngshēng, « son léger ») n'est pas un cinquième ton à proprement parler : c'est une syllabe **courte et faible**, qui perd son ton d'origine. On ne met aucune marque.\n\nSa hauteur dépend du ton qui précède :\n• après un 1er ton → assez bas (妈妈 māma) ;\n• après un 2e ton → moyen (朋友 péngyou) ;\n• après un 3e ton → plutôt haut (你们 nǐmen, 我的 wǒ de) ;\n• après un 4e ton → très bas (谢谢 xièxie, 爸爸 bàba).\n\nOn le trouve surtout :\n• dans les **particules** : 的, 了, 吗, 呢, 吧, 着, 过 ;\n• dans les **suffixes** : 们, 子 (桌子 zhuōzi), 头 (木头 mùtou) ;\n• dans la **2e syllabe des mots redoublés** : 妈妈, 哥哥, 看看 ;\n• dans de nombreux mots courants : 东西 dōngxi (chose), 衣服 yīfu, 知道 zhīdao, 喜欢 xǐhuan.\n\nAttention aux paires : **东西 dōngxī** = « est et ouest » ; **东西 dōngxi** = « chose, truc ». Le ton neutre peut changer le sens !",
        en: "The **neutral tone** (轻声 qīngshēng, \"light sound\") is not really a fifth tone: it is a **short, weak** syllable that has lost its original tone. It has no mark.\n\nIts pitch depends on the preceding tone:\n• after tone 1 → fairly low (妈妈 māma);\n• after tone 2 → mid (朋友 péngyou);\n• after tone 3 → rather high (你们 nǐmen, 我的 wǒ de);\n• after tone 4 → very low (谢谢 xièxie, 爸爸 bàba).\n\nIt mainly appears:\n• in **particles**: 的, 了, 吗, 呢, 吧, 着, 过;\n• in **suffixes**: 们, 子 (桌子 zhuōzi), 头 (木头 mùtou);\n• in the **second syllable of reduplicated words**: 妈妈, 哥哥, 看看;\n• in many common words: 东西 dōngxi (thing), 衣服 yīfu, 知道 zhīdao, 喜欢 xǐhuan.\n\nWatch out for pairs: **东西 dōngxī** = \"east and west\"; **东西 dōngxi** = \"thing, stuff\". The neutral tone can change the meaning!",
      },
      examples: [
        { zh: "谢谢你。", pinyin: "Xièxie nǐ.", tr: { fr: "Merci à toi.", en: "Thank you." } },
        { zh: "你好吗？", pinyin: "Nǐ hǎo ma?", tr: { fr: "Tu vas bien ?", en: "How are you?" } },
        { zh: "我买东西。", pinyin: "Wǒ mǎi dōngxi.", tr: { fr: "Je fais des courses. (litt. « j'achète des choses »)", en: "I'm shopping. (lit. \"I buy things\")" } },
      ],
    },
    {
      heading: { fr: "Pourquoi tu te trompes (francophones et anglophones)", en: "Why you get them wrong (English and French speakers)" },
      body: {
        fr: "Les erreurs de tons ne sont pas aléatoires : elles viennent des habitudes de ta langue maternelle.\n\n**Erreur 1 : le 1er ton trop bas.** En français, on parle dans un registre moyen et assez plat. Résultat : le 1er ton est prononcé au milieu de la voix et se confond avec le début du 2e. Le 1er ton doit être **nettement haut**, presque chanté.\n\n**Erreur 2 : la mélodie de phrase écrase les tons.** Le français monte naturellement en fin de groupe de mots (« Je vais au marché↗, puis je rentre↘ »). Si tu appliques cette intonation, un 4e ton en fin de groupe devient montant et tout s'effondre. En chinois, **chaque syllabe garde son ton**, même dans une question.\n\n**Erreur 3 : le 4e ton trop mou.** Le 4e ton doit tomber **du haut jusqu'en bas**, rapidement. Beaucoup d'apprenants le font démarrer au milieu : il ressemble alors à un 3e ton.\n\n**Erreur 4 : confondre 2e et 3e ton.** Les deux ont une montée. La différence : le 2e ton monte **directement**, le 3e **descend d'abord très bas**. Si tu hésites, exagère le creux du 3e ton.\n\n**Erreur 5 : l'accent tonique.** Les anglophones ont l'habitude d'accentuer une syllabe par mot et d'avaler les autres. En chinois, chaque syllabe (sauf les tons neutres) a un poids à peu près égal. Les francophones, eux, accentuent la dernière syllabe de chaque groupe.\n\n**Erreur 6 : apprendre les mots sans leurs tons.** C'est la cause n°1. Si tu mémorises « mai » au lieu de « mǎi » (acheter) ou « mài » (vendre), tu devras tout réapprendre plus tard.",
        en: "Tone errors aren't random: they come from the habits of your native language.\n\n**Mistake 1: sentence intonation overrides tones.** English rises at the end of questions and falls at the end of statements. Apply that to Chinese and a 4th tone at the end of a question turns into a rising tone, and everything collapses. In Chinese, **every syllable keeps its own tone**, even in a question (the question is marked by 吗 or word order instead).\n\n**Mistake 2: stress instead of tone.** English speakers stress one syllable per word and reduce the others (\"PHO-to-graph\"). In Chinese, every syllable (except neutral ones) carries roughly equal weight. A stressed syllable often comes out as a 4th tone by accident, and unstressed ones lose their tone.\n\n**Mistake 3: tone 1 too low.** Many learners pitch tone 1 in the middle of their voice, where it blurs with the start of tone 2. Tone 1 should be **clearly high**, almost sung.\n\n**Mistake 4: a weak tone 4.** Tone 4 must fall **from the top to the bottom**, fast. Starting it mid-range makes it sound like a tone 3.\n\n**Mistake 5: mixing up tones 2 and 3.** Both involve a rise. The difference: tone 2 rises **straight away**; tone 3 **first dips very low**. When in doubt, exaggerate the dip in tone 3.\n\n**Mistake 6: learning words without their tones.** This is the number-one cause. If you memorise \"mai\" instead of \"mǎi\" (to buy) or \"mài\" (to sell), you will have to relearn everything later.",
      },
      examples: [
        { zh: "买", pinyin: "mǎi", tr: { fr: "acheter", en: "to buy" } },
        { zh: "卖", pinyin: "mài", tr: { fr: "vendre", en: "to sell" } },
        { zh: "你是老师吗？", pinyin: "Nǐ shì lǎoshī ma?", tr: { fr: "Tu es professeur ? (shì reste descendant, même dans une question)", en: "Are you a teacher? (shì stays falling, even in a question)" } },
      ],
    },
    {
      heading: { fr: "Les 20 combinaisons de deux tons", en: "The 20 two-tone combinations" },
      body: {
        fr: "Isoler un ton, c'est facile. La vraie difficulté, ce sont les **enchaînements** : la plupart des mots chinois ont deux syllabes. Les professeurs recommandent de travailler les **20 combinaisons** (4 tons × 4 tons + 4 combinaisons avec ton neutre) avec des mots réels.\n\nPrends le tableau ci-dessous et lis chaque ligne à voix haute, lentement, puis à vitesse normale. Enregistre-toi, compare avec l'audio de Hanlu, recommence. Les combinaisons les plus difficiles sont généralement **2+3**, **3+2**, **4+1** et **1+4**, parce qu'elles demandent un grand saut de hauteur.\n\nNote la combinaison **3+3** : elle se prononce **2+3** (你好 = « ní hǎo »). C'est une règle automatique, expliquée dans le guide sur les changements de ton.",
        en: "Isolated tones are easy. The real challenge is **sequences**: most Chinese words have two syllables. Teachers recommend drilling the **20 combinations** (4 tones × 4 tones + 4 combinations with a neutral tone) using real words.\n\nTake the table below and read each row aloud, slowly, then at normal speed. Record yourself, compare with Hanlu's audio, repeat. The hardest combinations are usually **2+3**, **3+2**, **4+1** and **1+4**, because they require big pitch jumps.\n\nNote the **3+3** combination: it is pronounced **2+3** (你好 = \"ní hǎo\"). This is an automatic rule explained in the tone sandhi guide.",
      },
      table: {
        head: [
          { fr: "1re syllabe", en: "1st syllable" },
          { fr: "+ 1er ton", en: "+ tone 1" },
          { fr: "+ 2e ton", en: "+ tone 2" },
          { fr: "+ 3e ton", en: "+ tone 3" },
          { fr: "+ 4e ton", en: "+ tone 4" },
          { fr: "+ neutre", en: "+ neutral" },
        ],
        rows: [
          [{ fr: "1er ton", en: "Tone 1" }, "飞机 fēijī", "中国 Zhōngguó", "铅笔 qiānbǐ", "工作 gōngzuò", "妈妈 māma"],
          [{ fr: "2e ton", en: "Tone 2" }, "明天 míngtiān", "银行 yínháng", "苹果 píngguǒ", "学校 xuéxiào", "朋友 péngyou"],
          [{ fr: "3e ton", en: "Tone 3" }, "老师 lǎoshī", "女儿 nǚ'ér", "你好 nǐ hǎo", "考试 kǎoshì", "姐姐 jiějie"],
          [{ fr: "4e ton", en: "Tone 4" }, "面包 miànbāo", "大学 dàxué", "汉语 Hànyǔ", "电视 diànshì", "爸爸 bàba"],
        ],
      },
    },
    {
      heading: { fr: "Exercices : 10 minutes par jour pendant un mois", en: "Drills: 10 minutes a day for a month" },
      body: {
        fr: "Voici une routine simple et efficace.\n\n**1. Le « ma-ma-ma-ma » (1 min).** Dis mā má mǎ mà, puis dans le désordre : mà mǎ mā má. Exagère : le 1er très haut, le 3e très bas, le 4e qui tombe de haut.\n\n**2. Le geste (2 min).** Accompagne chaque ton d'un geste de la main : horizontal pour le 1er, vers le haut pour le 2e, un creux pour le 3e, un coup vers le bas pour le 4e. Les gestes aident vraiment le cerveau à associer la mélodie au mot.\n\n**3. Les paires minimales (3 min).** Travaille des mots qui ne diffèrent que par le ton : 买 mǎi / 卖 mài, 汤 tāng / 糖 táng, 问 wèn / 吻 wěn, 睡觉 shuìjiào / 水饺 shuǐjiǎo.\n\n**4. Les combinaisons (3 min).** Une ligne du tableau des 20 combinaisons par jour.\n\n**5. Le shadowing (1 min).** Écoute une phrase courte d'un dialogue Hanlu et répète-la **en même temps** que l'audio, comme un écho. C'est la meilleure méthode pour acquérir la mélodie naturelle.\n\nEt surtout : **enregistre-toi**. On ne s'entend pas bien en parlant. La comparaison avec l'audio natif est souvent une révélation.",
        en: "Here is a simple, effective routine.\n\n**1. \"Ma-ma-ma-ma\" (1 min).** Say mā má mǎ mà, then shuffled: mà mǎ mā má. Exaggerate: tone 1 very high, tone 3 very low, tone 4 falling from the top.\n\n**2. Hand gestures (2 min).** Draw each tone with your hand: flat for tone 1, upward for tone 2, a dip for tone 3, a downward chop for tone 4. Gestures genuinely help your brain link melody to word.\n\n**3. Minimal pairs (3 min).** Practise words that differ only by tone: 买 mǎi / 卖 mài, 汤 tāng / 糖 táng, 问 wèn / 吻 wěn, 睡觉 shuìjiào / 水饺 shuǐjiǎo.\n\n**4. Combinations (3 min).** One row of the 20-combination table per day.\n\n**5. Shadowing (1 min).** Play a short sentence from a Hanlu dialogue and repeat it **at the same time** as the audio, like an echo. This is the best way to pick up natural melody.\n\nAbove all: **record yourself**. You can't hear yourself properly while speaking. Comparing with native audio is often an eye-opener.",
      },
      examples: [
        { zh: "我要睡觉。", pinyin: "Wǒ yào shuìjiào.", tr: { fr: "Je veux dormir.", en: "I want to sleep." } },
        { zh: "我要水饺。", pinyin: "Wǒ yào shuǐjiǎo.", tr: { fr: "Je veux des raviolis bouillis.", en: "I want boiled dumplings." } },
        { zh: "我想买糖。", pinyin: "Wǒ xiǎng mǎi táng.", tr: { fr: "Je veux acheter des bonbons.", en: "I want to buy some sweets." } },
      ],
      tip: {
        fr: "Dans les exercices d'écoute de Hanlu, rejoue l'audio à vitesse réduite : entendre la courbe au ralenti aide beaucoup à la reproduire.",
        en: "In Hanlu's listening exercises, replay the audio at reduced speed: hearing the contour in slow motion helps a lot in reproducing it.",
      },
    },
  ],
};

const toneSandhi: Guide = {
  slug: "tone-sandhi",
  category: "pronunciation",
  readMinutes: 11,
  title: {
    fr: "Les changements de ton (sandhi) : 3e ton, 不 et 一 expliqués simplement",
    en: "Tone sandhi explained: third tone, 不 and 一 made simple",
  },
  summary: {
    fr: "Pourquoi 你好 se dit « ní hǎo », pourquoi 不 devient parfois « bú » et 一 change trois fois de ton : toutes les règles, avec des exemples et des astuces pour les automatiser.",
    en: "Why 你好 is said \"ní hǎo\", why 不 sometimes becomes \"bú\", and why 一 changes tone three ways: all the rules, with examples and tips to make them automatic.",
  },
  sections: [
    {
      heading: { fr: "Le sandhi, c'est quoi ?", en: "What is sandhi?" },
      body: {
        fr: "Le mot **sandhi** vient du sanskrit et signifie « jonction ». En chinois, on appelle **sandhi tonal** (变调 biàndiào) le fait qu'un ton **change selon le ton qui le suit**.\n\nCe n'est pas une exception bizarre : c'est comme en français, où l'on fait des liaisons (« les amis » → « lé-z-amis ») pour que la parole coule mieux. Enchaîner deux 3e tons complets (descendre-monter, descendre-monter) serait très fatigant : la langue a donc simplifié.\n\nIl y a **trois règles principales** à connaître, et une quatrième qui concerne le « demi-3e ton ». Elles sont **automatiques** chez les natifs : un Chinois qui dit 你好 ne pense pas « je change le ton », il le fait naturellement.\n\n**Comment le pinyin note-t-il ces changements ?** C'est la source de beaucoup de confusion :\n• Pour **不** et **一**, les manuels et Hanlu écrivent en général le **ton réellement prononcé** : 不是 **bú shì**, 一个 **yí gè**.\n• Pour le **3e ton**, on écrit toujours le **ton d'origine** : 你好 s'écrit **nǐ hǎo** mais se prononce « ní hǎo ». C'est à toi d'appliquer la règle.\n\nLes dictionnaires, eux, donnent toujours le ton de base : 不 bù, 一 yī.",
        en: "The word **sandhi** comes from Sanskrit and means \"joining\". In Chinese, **tone sandhi** (变调 biàndiào) is when a tone **changes depending on the tone that follows it**.\n\nIt isn't a weird exception: it's like English connected speech, where \"want to\" becomes \"wanna\" so speech flows more smoothly. Chaining two full third tones (dip-rise, dip-rise) would be tiring, so the language simplified it.\n\nThere are **three main rules** to know, plus a fourth about the \"half-third tone\". They are **automatic** for native speakers: someone saying 你好 doesn't think \"I'm changing the tone\", they just do it.\n\n**How does pinyin show these changes?** This causes a lot of confusion:\n• For **不** and **一**, textbooks and Hanlu usually write the **tone actually spoken**: 不是 **bú shì**, 一个 **yí gè**.\n• For **tone 3**, the **original tone** is always written: 你好 is spelled **nǐ hǎo** but pronounced \"ní hǎo\". Applying the rule is up to you.\n\nDictionaries always give the base tone: 不 bù, 一 yī.",
      },
    },
    {
      heading: { fr: "Règle 1 : deux 3e tons → 2e ton + 3e ton", en: "Rule 1: two third tones → second tone + third tone" },
      body: {
        fr: "Quand deux syllabes au **3e ton** se suivent, la **première se prononce au 2e ton**.\n\n**3 + 3 → 2 + 3**\n\n• 你好 nǐ hǎo → « **ní** hǎo »\n• 很好 hěn hǎo → « **hén** hǎo »\n• 可以 kěyǐ → « **ké**yǐ »\n• 水果 shuǐguǒ → « **shuí**guǒ »\n• 展览 zhǎnlǎn → « **zhán**lǎn »\n\nCette règle s'applique **à l'intérieur des mots** et **entre les mots** d'un même groupe rythmique : 我也 (wǒ yě) → « wó yě ».\n\n**Et avec trois 3e tons ou plus ?** Tout dépend du découpage de la phrase en groupes de sens. En pratique, la règle la plus simple : on garde le 3e ton sur la dernière syllabe du groupe, et les précédentes passent souvent au 2e ton.\n• 我很好 wǒ hěn hǎo → « wó hén hǎo » (le plus courant à vitesse normale)\n• 展览馆 zhǎnlǎnguǎn (salle d'exposition) → « zhán lán guǎn »\n• 我想买 wǒ xiǎng mǎi → « wó xiáng mǎi »\n\nNe t'inquiète pas si tu n'es pas sûr du découpage : à vitesse normale, les deux prononciations sont acceptables, et les natifs varient eux-mêmes.\n\n**Cas particulier : quand le 2e 3e ton devient neutre.** Si la seconde syllabe est un ton neutre qui vient d'un 3e ton, la règle est irrégulière : 姐姐 jiějie se prononce avec un 3e ton (bas) + neutre haut, alors que 想想 xiǎngxiang se prononce « xiángxiang ». Apprends ces mots par l'écoute.",
        en: "When two **third-tone** syllables follow each other, the **first is pronounced as a second tone**.\n\n**3 + 3 → 2 + 3**\n\n• 你好 nǐ hǎo → \"**ní** hǎo\"\n• 很好 hěn hǎo → \"**hén** hǎo\"\n• 可以 kěyǐ → \"**ké**yǐ\"\n• 水果 shuǐguǒ → \"**shuí**guǒ\"\n• 展览 zhǎnlǎn → \"**zhán**lǎn\"\n\nThis applies **inside words** and **across words** in the same rhythmic group: 我也 (wǒ yě) → \"wó yě\".\n\n**What about three or more third tones?** It depends on how the sentence splits into meaning groups. In practice, the simplest rule: keep tone 3 on the last syllable of the group, and the earlier ones usually become tone 2.\n• 我很好 wǒ hěn hǎo → \"wó hén hǎo\" (most common at normal speed)\n• 展览馆 zhǎnlǎnguǎn (exhibition hall) → \"zhán lán guǎn\"\n• 我想买 wǒ xiǎng mǎi → \"wó xiáng mǎi\"\n\nDon't worry if you're unsure about grouping: at normal speed, both pronunciations are acceptable, and native speakers vary too.\n\n**Special case: when the second third tone becomes neutral.** If the second syllable is a neutral tone that was originally a third tone, the rule is irregular: 姐姐 jiějie is said with a low tone 3 + high neutral, while 想想 xiǎngxiang is said \"xiángxiang\". Learn these words by ear.",
      },
      examples: [
        { zh: "你好！", pinyin: "Nǐ hǎo!", tr: { fr: "Bonjour ! (prononcé « ní hǎo »)", en: "Hello! (pronounced \"ní hǎo\")" } },
        { zh: "我很好。", pinyin: "Wǒ hěn hǎo.", tr: { fr: "Je vais très bien. (« wó hén hǎo »)", en: "I'm very well. (\"wó hén hǎo\")" } },
        { zh: "可以吗？", pinyin: "Kěyǐ ma?", tr: { fr: "C'est possible ? (« kéyǐ ma »)", en: "Is that OK? (\"kéyǐ ma\")" } },
        { zh: "我想买水果。", pinyin: "Wǒ xiǎng mǎi shuǐguǒ.", tr: { fr: "Je veux acheter des fruits.", en: "I want to buy some fruit." } },
      ],
      tip: {
        fr: "Ne réfléchis pas à la règle en parlant : apprends 你好, 很好, 可以, 我也 comme des « blocs sonores » déjà transformés. La règle se généralisera toute seule.",
        en: "Don't think about the rule while speaking: learn 你好, 很好, 可以, 我也 as ready-made \"sound blocks\". The rule will generalise on its own.",
      },
    },
    {
      heading: { fr: "Règle 2 : 不 bù devient bú devant un 4e ton", en: "Rule 2: 不 bù becomes bú before a fourth tone" },
      body: {
        fr: "**不** (non, ne… pas) est au **4e ton** : bù. Mais devant une autre syllabe au **4e ton**, il passe au **2e ton** : **bú**.\n\n• 不是 → **bú shì** (ce n'est pas)\n• 不对 → **bú duì** (ce n'est pas juste)\n• 不要 → **bú yào** (ne veux pas, ne… pas)\n• 不去 → **bú qù** (ne va pas)\n• 不客气 → **bú kèqi** (de rien)\n\nDevant un 1er, 2e ou 3e ton, 不 reste **bù** :\n• 不喝 bù hē, 不来 bù lái, 不好 bù hǎo.\n\n**Pourquoi ?** Deux 4e tons à la suite (tomber, tomber) sonnent heurtés ; le 2e ton crée un « tremplin ».\n\n**不 au ton neutre.** Au milieu d'une structure **verbe-不-verbe** (question) ou d'un complément de résultat/potentiel, 不 devient souvent **neutre** : 是不是 shì bu shì, 去不去 qù bu qù, 看不懂 kàn bu dǒng, 听不见 tīng bu jiàn.\n\n**Erreur fréquente :** ✗ « bù shì » prononcé avec deux 4e tons bien marqués. ✓ « bú shì ». C'est l'une des premières fautes qu'un natif remarque.",
        en: "**不** (no, not) is **tone 4**: bù. But before another **tone 4** syllable, it changes to **tone 2**: **bú**.\n\n• 不是 → **bú shì** (is not)\n• 不对 → **bú duì** (not right)\n• 不要 → **bú yào** (don't want, don't)\n• 不去 → **bú qù** (not going)\n• 不客气 → **bú kèqi** (you're welcome)\n\nBefore tones 1, 2 or 3, 不 stays **bù**:\n• 不喝 bù hē, 不来 bù lái, 不好 bù hǎo.\n\n**Why?** Two falling tones in a row (fall, fall) sound jerky; tone 2 acts as a springboard.\n\n**不 in the neutral tone.** In the middle of a **verb-不-verb** question or a resultative/potential complement, 不 is often **neutral**: 是不是 shì bu shì, 去不去 qù bu qù, 看不懂 kàn bu dǒng, 听不见 tīng bu jiàn.\n\n**Common mistake:** ✗ \"bù shì\" with two heavy falling tones. ✓ \"bú shì\". It's one of the first errors a native speaker notices.",
      },
      table: {
        head: [
          { fr: "Ton suivant", en: "Next tone" },
          { fr: "不 se prononce", en: "不 is said" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          [{ fr: "1er ton", en: "Tone 1" }, "bù", "不吃 bù chī, 不说 bù shuō"],
          [{ fr: "2e ton", en: "Tone 2" }, "bù", "不忙 bù máng, 不来 bù lái"],
          [{ fr: "3e ton", en: "Tone 3" }, "bù", "不好 bù hǎo, 不想 bù xiǎng"],
          [{ fr: "4e ton", en: "Tone 4" }, "bú", "不是 bú shì, 不去 bú qù"],
          [{ fr: "Milieu de V不V", en: "Inside V-不-V" }, "bu", "好不好 hǎo bu hǎo, 看不懂 kàn bu dǒng"],
        ],
      },
      examples: [
        { zh: "我不是老师。", pinyin: "Wǒ bú shì lǎoshī.", tr: { fr: "Je ne suis pas professeur.", en: "I'm not a teacher." } },
        { zh: "他不喝咖啡。", pinyin: "Tā bù hē kāfēi.", tr: { fr: "Il ne boit pas de café.", en: "He doesn't drink coffee." } },
        { zh: "你去不去？", pinyin: "Nǐ qù bu qù?", tr: { fr: "Tu y vas ou pas ?", en: "Are you going or not?" } },
      ],
    },
    {
      heading: { fr: "Règle 3 : les trois visages de 一 yī", en: "Rule 3: the three faces of 一 yī" },
      body: {
        fr: "**一** (un) est le caractère le plus capricieux. Son ton de base est le **1er ton** : yī. Mais il change selon sa position :\n\n**a) yī (1er ton) quand il est seul, en fin de mot, ou dans un nombre/une énumération :**\n• 一 yī, 第一 dì-yī (premier), 十一 shíyī (onze), 一月 yīyuè (janvier), 一楼 yī lóu (1er étage), 一二三 yī èr sān.\n\n**b) yí (2e ton) devant un 4e ton** — y compris devant 个 gè, prononcé au 4e ton dans ce cas :\n• 一个 **yí gè**, 一样 **yíyàng** (pareil), 一下 **yíxià** (un peu), 一定 **yídìng** (sûrement), 一共 **yígòng** (en tout).\n\n**c) yì (4e ton) devant un 1er, 2e ou 3e ton :**\n• 一天 **yì tiān** (un jour), 一年 **yì nián** (un an), 一起 **yìqǐ** (ensemble), 一些 **yìxiē** (quelques), 一点儿 **yìdiǎnr** (un peu).\n\n**d) yi (neutre) entre deux verbes redoublés :**\n• 看一看 kàn yi kàn (jeter un œil), 想一想 xiǎng yi xiǎng (réfléchir un peu).\n\n**Astuce :** 一 fait « l'inverse » du ton suivant pour les 4e tons (→ 2e), et prend le 4e ton devant tout le reste. Retiens les modèles **一个 yí gè** et **一天 yì tiān**, ils couvrent 90 % des cas.",
        en: "**一** (one) is the most capricious character. Its base tone is **tone 1**: yī. But it changes with position:\n\n**a) yī (tone 1) when alone, at the end of a word, or in numbers/counting:**\n• 一 yī, 第一 dì-yī (first), 十一 shíyī (eleven), 一月 yīyuè (January), 一楼 yī lóu (1st floor), 一二三 yī èr sān.\n\n**b) yí (tone 2) before a tone 4** — including before 个 gè, pronounced as tone 4 here:\n• 一个 **yí gè**, 一样 **yíyàng** (the same), 一下 **yíxià** (a bit), 一定 **yídìng** (surely), 一共 **yígòng** (altogether).\n\n**c) yì (tone 4) before tones 1, 2 or 3:**\n• 一天 **yì tiān** (one day), 一年 **yì nián** (one year), 一起 **yìqǐ** (together), 一些 **yìxiē** (some), 一点儿 **yìdiǎnr** (a little).\n\n**d) yi (neutral) between reduplicated verbs:**\n• 看一看 kàn yi kàn (take a look), 想一想 xiǎng yi xiǎng (think it over).\n\n**Tip:** 一 goes to tone 2 before tone 4, and to tone 4 before everything else. Remember the models **一个 yí gè** and **一天 yì tiān**: they cover 90% of cases.",
      },
      table: {
        head: [
          { fr: "Contexte", en: "Context" },
          { fr: "一 se prononce", en: "一 is said" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          [{ fr: "Seul, fin de mot, nombres, ordinaux", en: "Alone, word-final, numbers, ordinals" }, "yī", "第一 dì-yī, 十一 shíyī"],
          [{ fr: "Devant un 1er ton", en: "Before tone 1" }, "yì", "一杯 yì bēi, 一天 yì tiān"],
          [{ fr: "Devant un 2e ton", en: "Before tone 2" }, "yì", "一年 yì nián, 一直 yìzhí"],
          [{ fr: "Devant un 3e ton", en: "Before tone 3" }, "yì", "一起 yìqǐ, 一点儿 yìdiǎnr"],
          [{ fr: "Devant un 4e ton", en: "Before tone 4" }, "yí", "一个 yí gè, 一样 yíyàng"],
          [{ fr: "Entre verbes redoublés", en: "Between reduplicated verbs" }, "yi", "看一看 kàn yi kàn"],
        ],
      },
      examples: [
        { zh: "我有一个哥哥。", pinyin: "Wǒ yǒu yí gè gēge.", tr: { fr: "J'ai un grand frère.", en: "I have an older brother." } },
        { zh: "我们一起去吧。", pinyin: "Wǒmen yìqǐ qù ba.", tr: { fr: "Allons-y ensemble.", en: "Let's go together." } },
        { zh: "今天是一月一号。", pinyin: "Jīntiān shì yīyuè yī hào.", tr: { fr: "Aujourd'hui, c'est le 1er janvier.", en: "Today is January 1st." } },
      ],
    },
    {
      heading: { fr: "Le demi-3e ton : la règle qu'on oublie", en: "The half-third tone: the forgotten rule" },
      body: {
        fr: "Si tu écoutes attentivement des natifs, tu remarqueras que le 3e ton complet (214, descendre puis remonter) est **rare**. Voici la règle réelle :\n\n• **3e ton + 1er, 2e, 4e ton ou neutre → demi-3e ton (21)** : on descend bas et on **ne remonte pas**. 老师 lǎoshī, 很忙 hěn máng, 可是 kěshì, 我们 wǒmen.\n• **3e ton + 3e ton → 2e ton** (règle 1).\n• **3e ton en fin de phrase ou isolé → 3e ton complet (214)**, parfois même réduit en fin de phrase rapide.\n\nConséquence pratique : dans 90 % des cas, ton 3e ton doit être **bas, grave, sans remontée**. C'est cette « basse » qui le distingue des autres. En pensant « 3e ton = bas », ta prononciation deviendra beaucoup plus naturelle.\n\nUn bon test : dis 我是学生 (Wǒ shì xuésheng). Si ton 我 remonte avant 是, tu entendras une sorte de « wo-o-shì » : c'est trop. Le 我 doit être court et grave, et 是 tombe ensuite du haut.",
        en: "If you listen carefully to native speakers, you'll notice that the full third tone (214, dip then rise) is **rare**. Here is the real rule:\n\n• **Tone 3 + tone 1, 2, 4 or neutral → half-third (21)**: go low and **don't come back up**. 老师 lǎoshī, 很忙 hěn máng, 可是 kěshì, 我们 wǒmen.\n• **Tone 3 + tone 3 → tone 2** (rule 1).\n• **Tone 3 at the end of a sentence or alone → full 214**, sometimes even reduced in fast speech.\n\nPractical consequence: in 90% of cases, your third tone should be **low, deep, with no rise**. That lowness is what sets it apart. Thinking \"tone 3 = low\" will make your pronunciation much more natural.\n\nA good test: say 我是学生 (Wǒ shì xuésheng). If your 我 rises before 是, you'll hear something like \"wo-o-shì\": too much. 我 should be short and low, then 是 falls from the top.",
      },
      examples: [
        { zh: "我是学生。", pinyin: "Wǒ shì xuésheng.", tr: { fr: "Je suis étudiant. (我 : demi-3e ton)", en: "I'm a student. (我: half-third)" } },
        { zh: "老师很忙。", pinyin: "Lǎoshī hěn máng.", tr: { fr: "Le professeur est très occupé.", en: "The teacher is very busy." } },
        { zh: "我们走吧。", pinyin: "Wǒmen zǒu ba.", tr: { fr: "Allons-y.", en: "Let's go." } },
      ],
    },
    {
      heading: { fr: "Récapitulatif et pièges", en: "Summary and pitfalls" },
      body: {
        fr: "**Les règles en une minute :**\n1. **3 + 3 → 2 + 3** (你好 « ní hǎo »). Non noté dans le pinyin.\n2. **不 + 4e ton → bú** (不是 bú shì). Noté dans le pinyin des manuels.\n3. **一 + 4e ton → yí** ; **一 + autres tons → yì** ; nombre/ordinal/fin → **yī**. Noté dans le pinyin des manuels.\n4. **3e ton non final → bas (21)**, sans remontée.\n\n**Pièges fréquents :**\n• ✗ Appliquer la règle de 一 aux nombres : 十一 n'est **jamais** « shíyí ». ✓ shíyī.\n• ✗ Oublier que 个 est au 4e ton : 一个 = ✓ yí gè (même si 个 se prononce souvent neutre ensuite : yí ge).\n• ✗ Croire que la règle du 3e ton ne s'applique qu'à l'intérieur d'un mot : elle joue aussi entre mots (我也 « wó yě », 你有 « ní yǒu »).\n• ✗ Faire le sandhi sur 不 devant un ton neutre qui vient d'un 4e ton : cela dépend des mots — suis l'audio.\n\n**Comment s'entraîner ?** Choisis 10 expressions très fréquentes contenant ces règles (你好, 很好, 可以, 不是, 不客气, 一个, 一起, 一下, 一点儿, 我也是) et répète-les jusqu'à ce qu'elles sortent sans réfléchir. Le reste suivra.",
        en: "**The rules in one minute:**\n1. **3 + 3 → 2 + 3** (你好 \"ní hǎo\"). Not shown in pinyin.\n2. **不 + tone 4 → bú** (不是 bú shì). Shown in textbook pinyin.\n3. **一 + tone 4 → yí**; **一 + other tones → yì**; number/ordinal/final → **yī**. Shown in textbook pinyin.\n4. **Non-final tone 3 → low (21)**, no rise.\n\n**Common pitfalls:**\n• ✗ Applying the 一 rule to numbers: 十一 is **never** \"shíyí\". ✓ shíyī.\n• ✗ Forgetting that 个 is tone 4: 一个 = ✓ yí gè (even though 个 is often then said neutral: yí ge).\n• ✗ Thinking the tone-3 rule only works inside a word: it applies across words too (我也 \"wó yě\", 你有 \"ní yǒu\").\n• ✗ Applying 不 sandhi before a neutral syllable whose original tone was 4: it depends on the word — follow the audio.\n\n**How to practise?** Pick 10 very frequent expressions containing these rules (你好, 很好, 可以, 不是, 不客气, 一个, 一起, 一下, 一点儿, 我也是) and repeat them until they come out without thinking. The rest will follow.",
      },
      examples: [
        { zh: "不客气。", pinyin: "Bú kèqi.", tr: { fr: "De rien.", en: "You're welcome." } },
        { zh: "请等一下。", pinyin: "Qǐng děng yíxià.", tr: { fr: "Attends un instant, s'il te plaît.", en: "Please wait a moment." } },
        { zh: "我也是。", pinyin: "Wǒ yě shì.", tr: { fr: "Moi aussi. (« wó yě shì »)", en: "Me too. (\"wó yě shì\")" } },
      ],
    },
  ],
};

const strokeOrderRules: Guide = {
  slug: "stroke-order-rules",
  category: "writing",
  readMinutes: 12,
  title: {
    fr: "L'ordre des traits en chinois : les 8 traits de base et les 7 règles",
    en: "Chinese stroke order: the 8 basic strokes and the 7 rules",
  },
  summary: {
    fr: "Apprends les huit traits fondamentaux (横, 竖, 撇, 捺, 点, 折, 提, 钩) et les sept règles qui te permettent d'écrire correctement n'importe quel caractère, même inconnu.",
    en: "Learn the eight fundamental strokes (横, 竖, 撇, 捺, 点, 折, 提, 钩) and the seven rules that let you write any character correctly, even one you've never seen.",
  },
  sections: [
    {
      heading: { fr: "Pourquoi respecter l'ordre des traits ?", en: "Why follow stroke order?" },
      body: {
        fr: "Beaucoup de débutants se demandent : « Si le caractère final est le même, pourquoi l'ordre compterait-il ? » Il y a quatre bonnes raisons.\n\n**1. La mémoire.** Écrire un caractère toujours dans le même ordre crée une **mémoire motrice**, comme un geste de danse. Tu retiens mieux, et plus longtemps.\n\n**2. La beauté et l'équilibre.** L'ordre des traits a été optimisé pendant des siècles de calligraphie pour que le caractère soit bien proportionné. Un ordre incorrect donne souvent un caractère déséquilibré.\n\n**3. La lecture de l'écriture manuscrite.** En écriture rapide, les traits se lient entre eux. Si tu connais l'ordre standard, tu peux lire les notes manuscrites, les menus écrits à la main et la calligraphie cursive.\n\n**4. La technologie.** La reconnaissance d'écriture sur smartphone et certains dictionnaires fonctionnent mieux avec l'ordre standard.\n\nLa bonne nouvelle : il n'y a pas des milliers d'ordres différents à apprendre. Tout repose sur **8 traits de base** et **7 règles**. Une fois ces principes intégrés, tu peux deviner l'ordre correct de la grande majorité des caractères nouveaux.",
        en: "Many beginners ask: \"If the final character looks the same, why would order matter?\" There are four good reasons.\n\n**1. Memory.** Writing a character in the same order every time builds **motor memory**, like a dance move. You remember better, and for longer.\n\n**2. Beauty and balance.** Stroke order was refined over centuries of calligraphy to keep characters well proportioned. The wrong order often produces a lopsided character.\n\n**3. Reading handwriting.** In fast writing, strokes join together. If you know the standard order, you can read handwritten notes, hand-written menus and cursive calligraphy.\n\n**4. Technology.** Handwriting recognition on phones and some dictionaries work better with the standard order.\n\nThe good news: there aren't thousands of orders to learn. Everything rests on **8 basic strokes** and **7 rules**. Once these principles sink in, you can guess the correct order for the vast majority of new characters.",
      },
    },
    {
      heading: { fr: "Les 8 traits de base", en: "The 8 basic strokes" },
      body: {
        fr: "Tous les caractères chinois sont construits à partir d'un petit nombre de traits. On en distingue traditionnellement **huit**, illustrés par le célèbre caractère **永** (yǒng, « éternel »), qui les contient presque tous.\n\n• **横 héng — le trait horizontal.** De gauche à droite, légèrement montant. Ex. : 一, 三.\n• **竖 shù — le trait vertical.** De haut en bas, bien droit. Ex. : 十, 中.\n• **撇 piě — la diagonale descendante vers la gauche.** Part de la droite en haut, glisse vers la gauche en s'affinant. Ex. : 人 (1er trait), 八.\n• **捺 nà — la diagonale descendante vers la droite.** Part d'en haut à gauche, s'épaissit, puis s'étire à la fin. Ex. : 人 (2e trait), 大.\n• **点 diǎn — le point.** Un petit trait court, généralement vers le bas à droite. Ex. : 六, 主, 氵.\n• **折 zhé — le trait brisé.** Un trait qui change de direction sans lever le stylo, par exemple horizontal puis vertical (横折 héngzhé). Ex. : 口, 日.\n• **提 tí — le trait remontant.** De bas à gauche vers le haut à droite, court et vif. Ex. : 我 (5e trait), 扌, 冫.\n• **钩 gōu — le crochet.** Un petit crochet au bout d'un autre trait. Ex. : 小 et 水 (竖钩), 我 (斜钩).\n\nEn réalité, les dictionnaires recensent une trentaine de variantes (横折钩, 竖弯钩, 横撇…), mais ce sont toutes des **combinaisons** de ces huit traits.",
        en: "All Chinese characters are built from a small set of strokes. Traditionally, **eight** are distinguished, illustrated by the famous character **永** (yǒng, \"eternal\"), which contains almost all of them.\n\n• **横 héng — horizontal.** Left to right, rising slightly. E.g. 一, 三.\n• **竖 shù — vertical.** Top to bottom, straight. E.g. 十, 中.\n• **撇 piě — left-falling diagonal.** Starts top right, sweeps down to the left, tapering. E.g. 人 (1st stroke), 八.\n• **捺 nà — right-falling diagonal.** Starts top left, thickens, then flares at the end. E.g. 人 (2nd stroke), 大.\n• **点 diǎn — dot.** A short stroke, usually down to the right. E.g. 六, 主, 氵.\n• **折 zhé — turning stroke.** A stroke that changes direction without lifting the pen, e.g. horizontal then vertical (横折 héngzhé). E.g. 口, 日.\n• **提 tí — rising stroke.** From bottom left to top right, short and quick. E.g. 我 (5th stroke), 扌, 冫.\n• **钩 gōu — hook.** A small hook at the end of another stroke. E.g. 小 and 水 (竖钩), 我 (斜钩).\n\nIn fact, dictionaries list around thirty variants (横折钩, 竖弯钩, 横撇…), but they are all **combinations** of these eight.",
      },
      table: {
        head: [
          { fr: "Trait", en: "Stroke" },
          { fr: "Pinyin", en: "Pinyin" },
          { fr: "Direction", en: "Direction" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          ["横", "héng", { fr: "→ gauche à droite", en: "→ left to right" }, "一 二 三"],
          ["竖", "shù", { fr: "↓ haut en bas", en: "↓ top to bottom" }, "十 中 下"],
          ["撇", "piě", { fr: "↙ vers le bas à gauche", en: "↙ down-left" }, "人 八 千"],
          ["捺", "nà", { fr: "↘ vers le bas à droite", en: "↘ down-right" }, "人 大 木"],
          ["点", "diǎn", { fr: "↘ court", en: "↘ short" }, "六 主 文"],
          ["折", "zhé", { fr: "→↓ changement de direction", en: "→↓ change of direction" }, "口 日 月"],
          ["提", "tí", { fr: "↗ vers le haut à droite", en: "↗ up-right" }, "我 打 冷"],
          ["钩", "gōu", { fr: "crochet final", en: "final hook" }, "小 水 你"],
        ],
      },
      tip: {
        fr: "Écris 永 dix fois en nommant chaque trait à voix haute : c'est l'exercice d'échauffement traditionnel des calligraphes.",
        en: "Write 永 ten times while naming each stroke aloud: it's the traditional warm-up for calligraphers.",
      },
    },
    {
      heading: { fr: "Règles 1 et 2 : horizontal avant vertical, gauche avant droite (pour les diagonales)", en: "Rules 1 and 2: horizontal before vertical, left-falling before right-falling" },
      body: {
        fr: "**Règle 1 — 先横后竖 (xiān héng hòu shù) : l'horizontal avant le vertical.**\nQuand un trait horizontal et un trait vertical se croisent, on trace **d'abord l'horizontal**.\n• 十 : 一 puis 丨.\n• 干 : 一, 一, puis 丨.\n• 王 : 一, 一, 丨, puis le dernier 一 (le trait du bas ferme le caractère).\n\n**Règle 2 — 先撇后捺 (xiān piě hòu nà) : la diagonale gauche avant la diagonale droite.**\nQuand deux diagonales forment un « toit » ou une « jambe », on trace **d'abord 撇 (vers la gauche)**, puis **捺 (vers la droite)**.\n• 人 : 丿 puis ㇏.\n• 八 : même principe.\n• 大 : 一, puis 丿, puis ㇏ (on combine avec la règle 1).\n• 文 : 丶, 一, 丿, ㇏.\n\n**Exception à connaître :** dans certains caractères, le vertical vient avant l'horizontal quand l'horizontal est en bas et ne croise pas vraiment : 上 (丨, 一 court, 一 long) et 止.",
        en: "**Rule 1 — 先横后竖 (xiān héng hòu shù): horizontal before vertical.**\nWhen a horizontal and a vertical stroke cross, write **the horizontal first**.\n• 十: 一 then 丨.\n• 干: 一, 一, then 丨.\n• 王: 一, 一, 丨, then the final 一 (the bottom stroke closes the character).\n\n**Rule 2 — 先撇后捺 (xiān piě hòu nà): left-falling before right-falling.**\nWhen two diagonals form a \"roof\" or \"legs\", write **撇 (down-left) first**, then **捺 (down-right)**.\n• 人: 丿 then ㇏.\n• 八: same principle.\n• 大: 一, then 丿, then ㇏ (combined with rule 1).\n• 文: 丶, 一, 丿, ㇏.\n\n**Exception to know:** in some characters the vertical comes before a horizontal that sits at the bottom and doesn't really cross it: 上 (丨, short 一, long 一) and 止.",
      },
      examples: [
        { zh: "十", pinyin: "shí", tr: { fr: "dix : horizontal, puis vertical", en: "ten: horizontal, then vertical" } },
        { zh: "人", pinyin: "rén", tr: { fr: "personne : 撇 puis 捺", en: "person: 撇 then 捺" } },
        { zh: "大", pinyin: "dà", tr: { fr: "grand : 一, 丿, ㇏", en: "big: 一, 丿, ㇏" } },
      ],
    },
    {
      heading: { fr: "Règles 3 et 4 : de haut en bas, de gauche à droite", en: "Rules 3 and 4: top to bottom, left to right" },
      body: {
        fr: "**Règle 3 — 从上到下 (cóng shàng dào xià) : de haut en bas.**\nOn écrit les traits et les composants du haut **avant** ceux du bas.\n• 三 : les trois traits du haut vers le bas.\n• 京 : 亠, puis 口, puis 小.\n• 字 : 宀, puis 子.\n• 草 : 艹, puis 早.\n\n**Règle 4 — 从左到右 (cóng zuǒ dào yòu) : de gauche à droite.**\nOn écrit les traits et les composants de gauche **avant** ceux de droite.\n• 川 : trois traits de gauche à droite.\n• 你 : 亻 d'abord, puis 尔.\n• 明 : 日, puis 月.\n• 谢 : 讠, puis 身, puis 寸 (trois parties, de gauche à droite).\n\nCes deux règles s'appliquent **à tous les niveaux** : d'abord à la disposition des grands composants, puis, à l'intérieur de chaque composant, aux traits eux-mêmes. C'est pourquoi il est si utile de reconnaître les **radicaux** : un caractère complexe devient une suite de petits blocs familiers.",
        en: "**Rule 3 — 从上到下 (cóng shàng dào xià): top to bottom.**\nWrite the upper strokes and components **before** the lower ones.\n• 三: the three strokes from top to bottom.\n• 京: 亠, then 口, then 小.\n• 字: 宀, then 子.\n• 草: 艹, then 早.\n\n**Rule 4 — 从左到右 (cóng zuǒ dào yòu): left to right.**\nWrite left strokes and components **before** right ones.\n• 川: three strokes from left to right.\n• 你: 亻 first, then 尔.\n• 明: 日, then 月.\n• 谢: 讠, then 身, then 寸 (three parts, left to right).\n\nThese two rules apply **at every level**: first to the layout of the big components, then to the strokes inside each component. That's why recognising **radicals** is so useful: a complex character becomes a series of small, familiar blocks.",
      },
      examples: [
        { zh: "明", pinyin: "míng", tr: { fr: "clair : 日 puis 月", en: "bright: 日 then 月" } },
        { zh: "字", pinyin: "zì", tr: { fr: "caractère : 宀 puis 子", en: "character: 宀 then 子" } },
        { zh: "谢", pinyin: "xiè", tr: { fr: "remercier : 讠, 身, 寸", en: "to thank: 讠, 身, 寸" } },
      ],
    },
    {
      heading: { fr: "Règles 5 et 6 : l'extérieur avant l'intérieur, entrer avant de fermer la porte", en: "Rules 5 and 6: outside before inside, go in before closing the door" },
      body: {
        fr: "**Règle 5 — 从外到内 (cóng wài dào nèi) : de l'extérieur vers l'intérieur.**\nQuand un composant en **entoure** un autre (sur deux ou trois côtés), on trace d'abord le **cadre**, puis l'intérieur.\n• 月 : 丿 et 𠃌 (le cadre), puis les deux petits traits intérieurs.\n• 同 : 冂, puis 一 et 口.\n• 问 : 门, puis 口.\n\n**Règle 6 — 先里头后封口 (xiān lǐtou hòu fēngkǒu) : on remplit avant de fermer.**\nC'est la suite logique de la règle 5 : quand le cadre est **fermé sur les quatre côtés**, on trace le côté gauche et le haut, puis on **remplit l'intérieur**, et on **ferme en bas en dernier**. Les Chinois disent : « **先进人，后关门** » — « d'abord on fait entrer les gens, ensuite on ferme la porte ».\n• 日 : 丨, 𠃌, 一 (intérieur), puis 一 du bas.\n• 国 : 丨, 𠃌, puis 玉 à l'intérieur, puis 一 du bas.\n• 回 : grand cadre ouvert, petit 口 à l'intérieur, puis on ferme le grand cadre.\n\n**Erreur fréquente :** ✗ tracer le carré complet de 国 puis le remplir. ✓ Le trait du bas se trace **en tout dernier**.",
        en: "**Rule 5 — 从外到内 (cóng wài dào nèi): outside before inside.**\nWhen a component **encloses** another (on two or three sides), write the **frame** first, then the inside.\n• 月: 丿 and 𠃌 (the frame), then the two small inner strokes.\n• 同: 冂, then 一 and 口.\n• 问: 门, then 口.\n\n**Rule 6 — 先里头后封口 (xiān lǐtou hòu fēngkǒu): fill in before sealing.**\nThe logical follow-up to rule 5: when the frame is **closed on all four sides**, draw the left side and the top, **fill in the inside**, and **seal the bottom last**. Chinese people say: \"**先进人，后关门**\" — \"let people in first, then close the door\".\n• 日: 丨, 𠃌, 一 (inside), then the bottom 一.\n• 国: 丨, 𠃌, then 玉 inside, then the bottom 一.\n• 回: big open frame, small 口 inside, then close the big frame.\n\n**Common mistake:** ✗ drawing the full square of 国 and then filling it. ✓ The bottom stroke comes **last of all**.",
      },
      examples: [
        { zh: "国", pinyin: "guó", tr: { fr: "pays : on ferme le cadre en dernier", en: "country: the frame is sealed last" } },
        { zh: "日", pinyin: "rì", tr: { fr: "soleil : le trait du bas en dernier", en: "sun: the bottom stroke last" } },
        { zh: "问", pinyin: "wèn", tr: { fr: "demander : 门 puis 口", en: "to ask: 门 then 口" } },
      ],
    },
    {
      heading: { fr: "Règle 7 : le centre avant les côtés (et deux cas particuliers)", en: "Rule 7: centre before sides (plus two special cases)" },
      body: {
        fr: "**Règle 7 — 先中间后两边 (xiān zhōngjiān hòu liǎngbiān) : le milieu avant les côtés.**\nQuand un caractère est **symétrique** avec un trait central dominant, on trace d'abord le centre, puis la gauche, puis la droite.\n• 小 : 亅 (le crochet central), puis le point gauche, puis le point droit.\n• 水 : 亅 central, puis la partie gauche, puis la partie droite.\n• 办 : 力 d'abord, puis les deux points de chaque côté.\n\n**Cas particulier A — le point en haut à droite vient en dernier.**\nDans des caractères comme **我**, **书**, **犬**, **发**, le petit point en haut à droite se trace **à la fin**.\n\n**Cas particulier B — 辶 et 廴 se tracent en dernier.**\nLe composant « marcher » **辶** (et 廴) enveloppe le bas du caractère ; on écrit donc d'abord la partie intérieure, puis le 辶 : **这** (文 puis 辶), **进** (井 puis 辶), **远**, **建** (聿 puis 廴).\n\nAvec ces sept règles et ces deux cas particuliers, tu peux écrire correctement plus de 95 % des caractères courants. Pour les rares exceptions (必, 火, 出…), l'animation de Hanlu te montre l'ordre exact.",
        en: "**Rule 7 — 先中间后两边 (xiān zhōngjiān hòu liǎngbiān): centre before sides.**\nWhen a character is **symmetrical** with a dominant central stroke, write the centre first, then the left, then the right.\n• 小: 亅 (the central hook), then the left dot, then the right dot.\n• 水: central 亅, then the left part, then the right part.\n• 办: 力 first, then the dots on either side.\n\n**Special case A — the top-right dot comes last.**\nIn characters like **我**, **书**, **犬**, **发**, the small dot at the top right is written **at the end**.\n\n**Special case B — 辶 and 廴 are written last.**\nThe \"walk\" component **辶** (and 廴) wraps around the bottom of the character, so you write the inside first, then 辶: **这** (文 then 辶), **进** (井 then 辶), **远**, **建** (聿 then 廴).\n\nWith these seven rules and two special cases, you can correctly write over 95% of common characters. For the rare exceptions (必, 火, 出…), Hanlu's animation shows you the exact order.",
      },
      table: {
        head: [
          { fr: "Règle", en: "Rule" },
          { fr: "Chinois", en: "Chinese" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          [{ fr: "1. Horizontal avant vertical", en: "1. Horizontal before vertical" }, "先横后竖", "十 干 王"],
          [{ fr: "2. 撇 avant 捺", en: "2. 撇 before 捺" }, "先撇后捺", "人 八 大"],
          [{ fr: "3. De haut en bas", en: "3. Top to bottom" }, "从上到下", "三 京 字"],
          [{ fr: "4. De gauche à droite", en: "4. Left to right" }, "从左到右", "你 明 谢"],
          [{ fr: "5. Extérieur puis intérieur", en: "5. Outside then inside" }, "从外到内", "月 同 问"],
          [{ fr: "6. Remplir puis fermer", en: "6. Fill in, then seal" }, "先里头后封口", "日 国 回"],
          [{ fr: "7. Centre puis côtés", en: "7. Centre then sides" }, "先中间后两边", "小 水 办"],
        ],
      },
    },
    {
      heading: { fr: "Conseils pratiques pour écrire", en: "Practical writing tips" },
      body: {
        fr: "• **Utilise un quadrillage 田字格** (tiánzìgé) : un carré divisé en quatre. Il t'aide à placer chaque composant et à garder des proportions régulières. Tous les caractères occupent un **carré de même taille**, qu'ils aient 1 ou 20 traits.\n• **Compte les traits.** Savoir que 我 a 7 traits et 爱 en a 10 t'oblige à les distinguer et t'aide à chercher dans un dictionnaire papier.\n• **Commence lentement.** La vitesse viendra. Au début, un caractère bien écrit vaut mieux que dix bâclés.\n• **Écris pour apprendre, pas pour recopier.** Couvre le modèle, écris de mémoire, puis vérifie. C'est le **rappel actif** qui fixe le souvenir (voir notre guide sur la répétition espacée).\n• **Ne cherche pas à tout écrire.** Aujourd'hui, on tape le chinois bien plus qu'on ne l'écrit. Un objectif réaliste : savoir **lire** tous les caractères de ton niveau et **écrire** à la main les plus fréquents (les 300 à 500 premiers). Tu consolideras les autres via la saisie en pinyin.\n• **Profite des animations.** Dans Hanlu, chaque caractère a une animation de l'ordre des traits et un mode « écrire au doigt » qui corrige ton tracé.",
        en: "• **Use a 田字格 grid** (tiánzìgé): a square divided into four. It helps you place each component and keep proportions even. Every character fills **a square of the same size**, whether it has 1 stroke or 20.\n• **Count strokes.** Knowing that 我 has 7 strokes and 爱 has 10 forces you to tell them apart and helps with paper dictionaries.\n• **Start slowly.** Speed will come. At first, one well-written character beats ten sloppy ones.\n• **Write to learn, not to copy.** Cover the model, write from memory, then check. **Active recall** is what fixes the memory (see our guide on spaced repetition).\n• **Don't try to hand-write everything.** Today Chinese is typed far more than it's written. A realistic goal: be able to **read** every character at your level and **hand-write** the most frequent ones (the first 300–500). Typing in pinyin will reinforce the rest.\n• **Use the animations.** In Hanlu, every character has a stroke-order animation and a \"write with your finger\" mode that checks your strokes.",
      },
      examples: [
        { zh: "我", pinyin: "wǒ", tr: { fr: "je, moi — 7 traits, le point en dernier", en: "I, me — 7 strokes, dot last" } },
        { zh: "这", pinyin: "zhè", tr: { fr: "ceci — 文 d'abord, 辶 en dernier", en: "this — 文 first, 辶 last" } },
        { zh: "小", pinyin: "xiǎo", tr: { fr: "petit — centre, gauche, droite", en: "small — centre, left, right" } },
      ],
      tip: {
        fr: "Quand tu apprends un nouveau caractère, décompose-le d'abord en composants connus (你 = 亻 + 尔), puis applique les règles à chaque bloc.",
        en: "When learning a new character, first break it into known components (你 = 亻 + 尔), then apply the rules to each block.",
      },
    },
  ],
};

const radicalsIntro: Guide = {
  slug: "radicals-intro",
  category: "writing",
  readMinutes: 11,
  title: {
    fr: "Les radicaux chinois : la clé pour comprendre et retenir les caractères",
    en: "Chinese radicals: the key to understanding and remembering characters",
  },
  summary: {
    fr: "Ce qu'est un radical, comment se construisent les caractères (pictogrammes, idéogrammes, idéo-phonogrammes) et comment utiliser les radicaux pour deviner le sens et la prononciation.",
    en: "What a radical is, how characters are built (pictographs, ideographs, phono-semantic compounds) and how to use radicals to guess meaning and pronunciation.",
  },
  sections: [
    {
      heading: { fr: "Les caractères ne sont pas des dessins aléatoires", en: "Characters are not random drawings" },
      body: {
        fr: "Quand on commence le chinois, les caractères ressemblent à des milliers de petits dessins à mémoriser un par un. C'est l'impression qui décourage le plus les débutants — et elle est **fausse**.\n\nEn réalité, l'immense majorité des caractères est construite à partir d'un nombre limité de **composants** qui reviennent sans cesse. Parmi ces composants, les **radicaux** (部首 bùshǒu, littéralement « tête de section ») jouent un rôle spécial : ils servaient à classer les caractères dans les dictionnaires, et ils donnent très souvent une **indication de sens**.\n\nQuelques exemples :\n• Tous ces caractères contiennent **氵** (l'eau) : 河 (rivière), 海 (mer), 洗 (laver), 游 (nager), 汤 (soupe), 酒 (alcool).\n• Tous ceux-ci contiennent **口** (la bouche) : 吃 (manger), 喝 (boire), 叫 (appeler), 唱 (chanter), 吗 (particule de question).\n• Et ceux-ci **讠** (la parole) : 说 (parler), 话 (paroles), 语 (langue), 读 (lire), 请 (inviter, prier).\n\nConnaître une cinquantaine de radicaux transforme donc ta manière d'apprendre : au lieu de mémoriser 3 000 formes isolées, tu reconnais des familles et tu construis des **histoires** qui relient la forme au sens.",
        en: "When you start Chinese, characters look like thousands of little drawings to memorise one by one. That impression discourages beginners more than anything — and it is **wrong**.\n\nIn reality, the vast majority of characters are built from a limited set of **components** that appear again and again. Among them, **radicals** (部首 bùshǒu, literally \"section head\") play a special role: they were used to organise characters in dictionaries, and they very often give a **hint about meaning**.\n\nA few examples:\n• All of these contain **氵** (water): 河 (river), 海 (sea), 洗 (to wash), 游 (to swim), 汤 (soup), 酒 (alcohol).\n• All of these contain **口** (mouth): 吃 (to eat), 喝 (to drink), 叫 (to call), 唱 (to sing), 吗 (question particle).\n• And these contain **讠** (speech): 说 (to speak), 话 (words), 语 (language), 读 (to read), 请 (to invite, please).\n\nKnowing about fifty radicals transforms the way you learn: instead of memorising 3,000 isolated shapes, you recognise families and build **stories** linking form to meaning.",
      },
      examples: [
        { zh: "我喜欢喝汤。", pinyin: "Wǒ xǐhuan hē tāng.", tr: { fr: "J'aime boire de la soupe. (口 dans 喝, 氵 dans 汤)", en: "I like having soup. (口 in 喝, 氵 in 汤)" } },
        { zh: "请说汉语。", pinyin: "Qǐng shuō Hànyǔ.", tr: { fr: "Parle chinois, s'il te plaît. (讠 trois fois)", en: "Please speak Chinese. (讠 three times)" } },
      ],
    },
    {
      heading: { fr: "Les quatre façons de former un caractère", en: "The four ways characters are formed" },
      body: {
        fr: "Les lettrés chinois classent traditionnellement les caractères en six catégories (六书 liùshū). Quatre sont vraiment utiles à connaître.\n\n**1. Les pictogrammes (象形 xiàngxíng) — des dessins simplifiés.** Ce sont les caractères les plus anciens, qui représentaient un objet : 人 (une personne de profil), 日 (le soleil), 月 (le croissant de lune), 山 (trois sommets), 木 (un arbre avec ses racines), 口 (une bouche), 马 (un cheval, très stylisé). Ils ne sont qu'environ 4 % des caractères, mais ils forment la base de tous les autres.\n\n**2. Les indicatifs (指事 zhǐshì) — un dessin + un signe.** On ajoute un trait pour indiquer une idée : 上 (au-dessus d'une ligne), 下 (au-dessous), 本 (un trait sur les racines de l'arbre → « racine, origine »), 一 二 三.\n\n**3. Les idéogrammes composés (会意 huìyì) — deux sens qui se combinent.** 休 (une personne 亻 contre un arbre 木 → « se reposer »), 好 (une femme 女 et un enfant 子 → « bien »), 明 (soleil 日 + lune 月 → « clair »), 林 (deux arbres → « bois »), 森 (trois arbres → « forêt »).\n\n**4. Les idéo-phonogrammes (形声 xíngshēng) — un sens + un son.** C'est de loin la catégorie la plus importante : **plus de 80 % des caractères** ! Ils combinent un **radical sémantique** (qui indique le domaine) et un **composant phonétique** (qui indique la prononciation, approximativement). C'est l'objet de la section suivante.",
        en: "Chinese scholars traditionally classify characters into six categories (六书 liùshū). Four are really worth knowing.\n\n**1. Pictographs (象形 xiàngxíng) — simplified drawings.** The oldest characters, depicting an object: 人 (a person in profile), 日 (the sun), 月 (a crescent moon), 山 (three peaks), 木 (a tree with roots), 口 (a mouth), 马 (a horse, highly stylised). They are only about 4% of characters, but they form the basis of all the others.\n\n**2. Indicatives (指事 zhǐshì) — a drawing + a marker.** A stroke is added to point to an idea: 上 (above a line), 下 (below), 本 (a mark on a tree's roots → \"root, origin\"), 一 二 三.\n\n**3. Compound ideographs (会意 huìyì) — two meanings combined.** 休 (a person 亻 against a tree 木 → \"to rest\"), 好 (a woman 女 and a child 子 → \"good\"), 明 (sun 日 + moon 月 → \"bright\"), 林 (two trees → \"woods\"), 森 (three trees → \"forest\").\n\n**4. Phono-semantic compounds (形声 xíngshēng) — meaning + sound.** By far the most important category: **over 80% of characters**! They combine a **semantic radical** (showing the domain) with a **phonetic component** (roughly showing the pronunciation). That's the subject of the next section.",
      },
      table: {
        head: [
          { fr: "Type", en: "Type" },
          { fr: "Principe", en: "Principle" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          [{ fr: "Pictogramme", en: "Pictograph" }, { fr: "dessin d'un objet", en: "drawing of an object" }, "人 日 月 山 木"],
          [{ fr: "Indicatif", en: "Indicative" }, { fr: "dessin + signe", en: "drawing + marker" }, "上 下 本"],
          [{ fr: "Idéogramme composé", en: "Compound ideograph" }, { fr: "sens + sens", en: "meaning + meaning" }, "休 好 明 林"],
          [{ fr: "Idéo-phonogramme", en: "Phono-semantic" }, { fr: "sens + son", en: "meaning + sound" }, "妈 河 请 问"],
        ],
      },
    },
    {
      heading: { fr: "Sens + son : le secret de 80 % des caractères", en: "Meaning + sound: the secret of 80% of characters" },
      body: {
        fr: "Prenons le composant **马 mǎ** (cheval). On le retrouve dans :\n• **妈 mā** (maman) = 女 (femme : le sens) + 马 (le son « ma »)\n• **吗 ma** (particule de question) = 口 (bouche : c'est un mot parlé) + 马 (« ma »)\n• **骂 mà** (gronder) = 口口 (deux bouches qui crient) + 马 (« ma »)\n• **码 mǎ** (code, numéro) = 石 (pierre) + 马 (« ma »)\n\nMême chose avec **青 qīng** :\n• **请 qǐng** (inviter, s'il te plaît) = 讠 (parole) + 青\n• **清 qīng** (clair, limpide) = 氵 (eau) + 青\n• **晴 qíng** (ensoleillé) = 日 (soleil) + 青\n• **情 qíng** (sentiment) = 忄 (cœur) + 青\n• **睛 jīng** (œil, dans 眼睛) = 目 (œil) + 青\n\nOn voit la logique : **le radical donne le domaine, la phonétique donne le son**. Attention toutefois : le chinois a beaucoup évolué en 3 000 ans, et la phonétique n'est souvent qu'**approximative** (le ton change souvent, parfois l'initiale). Elle reste un excellent indice pour la mémoire.\n\n**Méthode pratique :** quand tu apprends un nouveau caractère, pose-toi deux questions : « Quel est le radical et que suggère-t-il ? » et « Est-ce que je connais la partie qui reste ? Se prononce-t-elle pareil ? »",
        en: "Take the component **马 mǎ** (horse). It appears in:\n• **妈 mā** (mum) = 女 (woman: the meaning) + 马 (the sound \"ma\")\n• **吗 ma** (question particle) = 口 (mouth: it's a spoken word) + 马 (\"ma\")\n• **骂 mà** (to scold) = 口口 (two shouting mouths) + 马 (\"ma\")\n• **码 mǎ** (code, number) = 石 (stone) + 马 (\"ma\")\n\nSame with **青 qīng**:\n• **请 qǐng** (to invite, please) = 讠 (speech) + 青\n• **清 qīng** (clear, limpid) = 氵 (water) + 青\n• **晴 qíng** (sunny) = 日 (sun) + 青\n• **情 qíng** (feeling) = 忄 (heart) + 青\n• **睛 jīng** (eye, in 眼睛) = 目 (eye) + 青\n\nThe logic is clear: **the radical gives the domain, the phonetic gives the sound**. Be careful though: Chinese has changed a lot over 3,000 years, and the phonetic is often only **approximate** (the tone often changes, sometimes the initial). It's still an excellent memory aid.\n\n**Practical method:** when you learn a new character, ask two questions: \"What is the radical and what does it suggest?\" and \"Do I know the remaining part? Is it pronounced the same?\"",
      },
      examples: [
        { zh: "妈妈骂我。", pinyin: "Māma mà wǒ.", tr: { fr: "Maman me gronde.", en: "Mum scolds me." } },
        { zh: "今天很晴。", pinyin: "Jīntiān hěn qíng.", tr: { fr: "Aujourd'hui, il fait très beau.", en: "It's very sunny today." } },
        { zh: "请喝水。", pinyin: "Qǐng hē shuǐ.", tr: { fr: "Bois de l'eau, je t'en prie.", en: "Please have some water." } },
      ],
      tip: {
        fr: "Crée des « familles phonétiques » dans ton carnet : 青 请 清 晴 情 睛. Tu apprendras cinq caractères pour le prix d'un.",
        en: "Build \"phonetic families\" in your notebook: 青 请 清 晴 情 睛. You'll learn five characters for the price of one.",
      },
    },
    {
      heading: { fr: "Les formes réduites des radicaux", en: "The reduced forms of radicals" },
      body: {
        fr: "Beaucoup de radicaux changent de forme selon leur **position** dans le caractère, souvent pour prendre moins de place à gauche. C'est déroutant au début, mais une fois repérés, ils deviennent très faciles à reconnaître.\n\n• **人 → 亻** (à gauche) : 你, 他, 做, 住\n• **水 → 氵** (à gauche) : 河, 洗, 没\n• **手 → 扌** (à gauche) : 打, 找, 拿 (en bas : 手 garde sa forme)\n• **心 → 忄** (à gauche) : 忙, 快, 慢 ; en bas il reste 心 : 想, 您, 念\n• **火 → 灬** (en bas) : 热, 点, 照\n• **言 → 讠**, **金 → 钅**, **食 → 饣**, **糸 → 纟** : forme simplifiée à gauche.\n• **衣 → 衤** (à gauche) : 衬, 裤\n• **示 → 礻** (à gauche) : 礼, 视\n• **刀 → 刂** (à droite) : 到, 别, 刻\n• **竹 → ⺮** (en haut) : 笔, 等, 答\n• **足 → ⻊** (à gauche) : 跑, 跳, 路\n\n**Attention aux sosies :**\n• **衤** (vêtement, deux points) ≠ **礻** (rite, un seul point).\n• **阝 à gauche** (colline : 院, 阳) ≠ **阝 à droite** (ville : 都, 那).\n• **月** « lune » et **月** « chair » (肉) ont fusionné : dans les parties du corps (脸, 脚, 肚, 胖), c'est la chair.\n• **口** (bouche, petit) ≠ **囗** (enclos, grand cadre) : 国, 图, 园.",
        en: "Many radicals change shape depending on their **position** in the character, usually to take up less room on the left. Confusing at first, but once spotted they become very easy to recognise.\n\n• **人 → 亻** (left): 你, 他, 做, 住\n• **水 → 氵** (left): 河, 洗, 没\n• **手 → 扌** (left): 打, 找 (at the bottom, 手 keeps its shape: 拿)\n• **心 → 忄** (left): 忙, 快, 慢; at the bottom it stays 心: 想, 您, 念\n• **火 → 灬** (bottom): 热, 点, 照\n• **言 → 讠**, **金 → 钅**, **食 → 饣**, **糸 → 纟**: simplified form on the left.\n• **衣 → 衤** (left): 衬, 裤\n• **示 → 礻** (left): 礼, 视\n• **刀 → 刂** (right): 到, 别, 刻\n• **竹 → ⺮** (top): 笔, 等, 答\n• **足 → ⻊** (left): 跑, 跳, 路\n\n**Watch out for look-alikes:**\n• **衤** (clothing, two dots) ≠ **礻** (ritual, one dot).\n• **阝 on the left** (hill: 院, 阳) ≠ **阝 on the right** (city: 都, 那).\n• **月** \"moon\" and **月** \"flesh\" (肉) merged: in body parts (脸, 脚, 肚, 胖), it means flesh.\n• **口** (mouth, small) ≠ **囗** (enclosure, large frame): 国, 图, 园.",
      },
      table: {
        head: [
          { fr: "Forme pleine", en: "Full form" },
          { fr: "Forme réduite", en: "Reduced form" },
          { fr: "Sens", en: "Meaning" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          ["人", "亻", { fr: "personne", en: "person" }, "你 他 住"],
          ["水", "氵", { fr: "eau", en: "water" }, "河 洗 没"],
          ["手", "扌", { fr: "main", en: "hand" }, "打 找 拉"],
          ["心", "忄", { fr: "cœur", en: "heart" }, "忙 快 慢"],
          ["火", "灬", { fr: "feu", en: "fire" }, "热 点 照"],
          ["言", "讠", { fr: "parole", en: "speech" }, "说 话 语"],
          ["金", "钅", { fr: "métal", en: "metal" }, "钱 银 错"],
          ["食", "饣", { fr: "nourriture", en: "food" }, "饭 饿 饱"],
          ["糸", "纟", { fr: "soie, fil", en: "silk, thread" }, "红 给 线"],
          ["刀", "刂", { fr: "couteau", en: "knife" }, "到 别 刻"],
        ],
      },
    },
    {
      heading: { fr: "Les 20 radicaux à connaître en premier", en: "The 20 radicals to learn first" },
      body: {
        fr: "Si tu ne devais en apprendre que vingt, voici ceux qui te rapporteront le plus, car ils apparaissent dans des centaines de caractères courants :\n\n**亻 (personne), 口 (bouche), 氵 (eau), 扌 (main), 木 (arbre), 艹 (herbe), 讠 (parole), 女 (femme), 日 (soleil), 月 (lune/chair), 心/忄 (cœur), 纟 (fil), 辶 (marche), 宀 (toit), 土 (terre), 钅 (métal), 贝 (argent), 火/灬 (feu), 目 (œil), 足/⻊ (pied).**\n\nPour chacun, apprends la forme, le sens et **trois caractères d'exemple** que tu connais déjà ou que tu vas rencontrer bientôt. La page « Radicaux » de Hanlu te propose les 80 radicaux les plus utiles, avec leurs exemples.\n\n**Comment s'entraîner ?**\n1. **Le jeu du détective** : devant un caractère inconnu, devine le domaine grâce au radical. 蛇 ? Radical 虫 (insecte, bestiole) → un animal. C'est « serpent ».\n2. **La chasse aux radicaux** : dans un texte de ton niveau, entoure tous les caractères qui contiennent 氵, puis 口, etc.\n3. **Les histoires** : invente une petite phrase qui relie les composants au sens. 休 : « une personne se repose contre un arbre ». Plus l'histoire est visuelle ou drôle, mieux elle reste.",
        en: "If you learn only twenty, these will pay off the most, as they appear in hundreds of common characters:\n\n**亻 (person), 口 (mouth), 氵 (water), 扌 (hand), 木 (tree), 艹 (grass), 讠 (speech), 女 (woman), 日 (sun), 月 (moon/flesh), 心/忄 (heart), 纟 (thread), 辶 (walking), 宀 (roof), 土 (earth), 钅 (metal), 贝 (money), 火/灬 (fire), 目 (eye), 足/⻊ (foot).**\n\nFor each, learn the shape, the meaning and **three example characters** you already know or will meet soon. Hanlu's \"Radicals\" page gives you the 80 most useful radicals, with examples.\n\n**How to practise?**\n1. **Detective game**: faced with an unknown character, guess its domain from the radical. 蛇? Radical 虫 (insect, critter) → an animal. It's \"snake\".\n2. **Radical hunt**: in a text at your level, circle every character containing 氵, then 口, and so on.\n3. **Stories**: make up a short sentence linking the components to the meaning. 休: \"a person rests against a tree\". The more visual or funny, the better it sticks.",
      },
      examples: [
        { zh: "休息", pinyin: "xiūxi", tr: { fr: "se reposer (亻 + 木)", en: "to rest (亻 + 木)" } },
        { zh: "森林", pinyin: "sēnlín", tr: { fr: "forêt (beaucoup d'arbres !)", en: "forest (lots of trees!)" } },
        { zh: "眼睛", pinyin: "yǎnjing", tr: { fr: "yeux (deux fois 目)", en: "eyes (目 twice)" } },
      ],
    },
    {
      heading: { fr: "Limites et pièges", en: "Limits and pitfalls" },
      body: {
        fr: "Les radicaux sont un outil formidable, mais il faut connaître leurs limites.\n\n**1. Le sens n'est qu'un indice.** 独 (seul) contient 犭 (chien) sans rapport évident avec le chien aujourd'hui. 笑 (rire) contient ⺮ (bambou). L'histoire des caractères est longue et les sens ont dérivé.\n\n**2. La simplification a brouillé certaines pistes.** En 1956, la Chine continentale a simplifié des centaines de caractères. 听 (écouter) s'écrivait 聽, avec 耳 (oreille) ; la version simplifiée utilise 口. 爱 (aimer) a perdu son 心 (cœur) : 愛 → 爱.\n\n**3. Le radical « officiel » n'est pas toujours le plus parlant.** Le radical de classement de 问 est 门, alors que c'est 口 qui porte le sens (demander avec la bouche) ; 门 est ici la phonétique (mén → wèn).\n\n**4. Ne te perds pas dans l'étymologie.** Il est tentant de passer des heures sur l'origine de chaque caractère. C'est passionnant, mais l'objectif reste de **lire et utiliser** les mots. Utilise les radicaux pour mémoriser, pas comme une fin en soi.\n\nEn résumé : les radicaux transforment un mur de 3 000 dessins en un **système logique**. Apprends-les progressivement, au fil des caractères que tu rencontres dans tes leçons.",
        en: "Radicals are a fantastic tool, but know their limits.\n\n**1. Meaning is only a hint.** 独 (alone) contains 犭 (dog) with no obvious link to dogs today. 笑 (to laugh) contains ⺮ (bamboo). Characters have a long history and meanings have drifted.\n\n**2. Simplification blurred some clues.** In 1956, mainland China simplified hundreds of characters. 听 (to listen) used to be 聽, with 耳 (ear); the simplified form uses 口. 爱 (love) lost its 心 (heart): 愛 → 爱.\n\n**3. The \"official\" radical isn't always the meaningful one.** 问's dictionary radical is 门, although 口 carries the meaning (asking with the mouth); 门 is actually the phonetic here (mén → wèn).\n\n**4. Don't get lost in etymology.** It's tempting to spend hours on the origin of each character. Fascinating, but the goal is to **read and use** words. Use radicals to memorise, not as an end in themselves.\n\nIn short: radicals turn a wall of 3,000 drawings into a **logical system**. Learn them gradually, as you meet characters in your lessons.",
      },
      examples: [
        { zh: "我爱你。", pinyin: "Wǒ ài nǐ.", tr: { fr: "Je t'aime. (爱 a perdu son 心 en simplifié)", en: "I love you. (爱 lost its 心 in simplified form)" } },
        { zh: "他在笑。", pinyin: "Tā zài xiào.", tr: { fr: "Il est en train de rire.", en: "He's laughing." } },
      ],
    },
  ],
};

const measureWords: Guide = {
  slug: "measure-words",
  category: "grammar",
  readMinutes: 13,
  title: {
    fr: "Les classificateurs chinois (量词) : le guide complet avec tableau",
    en: "Chinese measure words (量词): the complete guide with table",
  },
  summary: {
    fr: "Pourquoi on dit 一本书 et pas « 一书 », les 25 classificateurs les plus utiles (个, 本, 张, 杯, 件, 条, 只, 位, 辆, 双, 家, 次…), et les règles d'emploi avec 这, 那, 几 et les verbes.",
    en: "Why you say 一本书 and not \"一书\", the 25 most useful measure words (个, 本, 张, 杯, 件, 条, 只, 位, 辆, 双, 家, 次…), and how to use them with 这, 那, 几 and verbs.",
  },
  sections: [
    {
      heading: { fr: "Qu'est-ce qu'un classificateur ?", en: "What is a measure word?" },
      body: {
        fr: "En français, on dit « un livre », « trois chats ». En chinois, on ne peut **pas** mettre directement un nombre devant un nom : il faut un mot intermédiaire, le **classificateur** (量词 liàngcí, « mot de mesure »).\n\n**Nombre + classificateur + nom**\n• 一**本**书 yì běn shū — un livre\n• 三**只**猫 sān zhī māo — trois chats\n• 两**杯**咖啡 liǎng bēi kāfēi — deux cafés\n\nLe français a d'ailleurs quelque chose de proche avec les noms « indénombrables » : « une **tasse** de thé », « une **feuille** de papier », « une **paire** de chaussures », « trois **têtes** de bétail ». Le chinois généralise ce principe à **tous** les noms.\n\nChaque classificateur est associé à une **catégorie d'objets**, souvent selon leur **forme** : 张 pour les objets plats (papier, table, lit, billet), 条 pour les objets longs et souples (rivière, pantalon, poisson, route), 本 pour les objets reliés (livre, cahier, magazine). Apprendre le classificateur, c'est donc aussi apprendre comment les Chinois « voient » les objets.\n\n**Règle d'or : apprends chaque nom avec son classificateur**, comme on apprend le genre des noms en français (« **la** table », « **le** livre »). Ne retiens pas « 书 = livre », retiens « 一本书 = un livre ».",
        en: "In English you say \"a book\", \"three cats\". In Chinese you **cannot** put a number directly before a noun: you need a word in between, the **measure word** or **classifier** (量词 liàngcí, \"measuring word\").\n\n**Number + measure word + noun**\n• 一**本**书 yì běn shū — a book\n• 三**只**猫 sān zhī māo — three cats\n• 两**杯**咖啡 liǎng bēi kāfēi — two coffees\n\nEnglish actually has something similar with uncountable nouns: \"a **cup** of tea\", \"a **sheet** of paper\", \"a **pair** of shoes\", \"three **head** of cattle\". Chinese extends this principle to **all** nouns.\n\nEach measure word is linked to a **category of objects**, often by **shape**: 张 for flat things (paper, tables, beds, tickets), 条 for long, flexible things (rivers, trousers, fish, roads), 本 for bound things (books, notebooks, magazines). Learning measure words is also learning how Chinese speakers \"see\" objects.\n\n**Golden rule: learn every noun with its measure word**, the way you'd learn the gender of nouns in French or German. Don't memorise \"书 = book\"; memorise \"一本书 = a book\".",
      },
      examples: [
        { zh: "我有一本中文书。", pinyin: "Wǒ yǒu yì běn Zhōngwén shū.", tr: { fr: "J'ai un livre en chinois.", en: "I have a Chinese book." } },
        { zh: "她家有两只猫。", pinyin: "Tā jiā yǒu liǎng zhī māo.", tr: { fr: "Chez elle, il y a deux chats.", en: "She has two cats at home." } },
      ],
    },
    {
      heading: { fr: "个 gè : le classificateur universel (ou presque)", en: "个 gè: the (almost) universal measure word" },
      body: {
        fr: "**个** est de loin le classificateur le plus fréquent. Il s'emploie :\n• pour les **personnes** : 一个人, 三个学生, 两个朋友 ;\n• pour de nombreux objets sans classificateur spécifique : 一个苹果, 一个问题 (une question), 一个国家 (un pays), 一个星期 (une semaine), 一个月 (un mois) ;\n• pour les **choses abstraites** : 一个想法 (une idée), 一个机会 (une occasion).\n\nDans la langue parlée, 个 est souvent utilisé **à la place** d'un classificateur plus précis (一个杯子, 一个椅子). Si tu hésites, 个 sera généralement **compris**, mais pas toujours **correct**. Des phrases comme ✗ 一个书 ou ✗ 一个猫 sonnent clairement fautives.\n\n**Prononciation :** 个 est au 4e ton (gè), mais il est très souvent prononcé **au ton neutre** dans la parole : 一个 yí ge, 这个 zhège, 那个 nàge. Remarque que 一 devient bien **yí** devant 个 (4e ton d'origine).\n\n**À noter :** 一个月 (un mois) utilise 个, mais **pas** 一个年 : ✓ 一年 (un an), ✓ 一天 (un jour). 年, 天, 分钟 fonctionnent eux-mêmes comme des unités et n'ont pas besoin de classificateur.",
        en: "**个** is by far the most common measure word. It's used:\n• for **people**: 一个人, 三个学生, 两个朋友;\n• for many objects with no specific measure word: 一个苹果, 一个问题 (a question), 一个国家 (a country), 一个星期 (a week), 一个月 (a month);\n• for **abstract things**: 一个想法 (an idea), 一个机会 (an opportunity).\n\nIn speech, 个 often **replaces** a more specific measure word (一个杯子, 一个椅子). If in doubt, 个 will usually be **understood**, but not always **correct**. Phrases like ✗ 一个书 or ✗ 一个猫 sound clearly wrong.\n\n**Pronunciation:** 个 is tone 4 (gè), but it's very often pronounced **neutral** in speech: 一个 yí ge, 这个 zhège, 那个 nàge. Note that 一 does become **yí** before 个 (underlying tone 4).\n\n**Note:** 一个月 (one month) uses 个, but **not** 一个年: ✓ 一年 (one year), ✓ 一天 (one day). 年, 天, 分钟 act as units themselves and need no measure word.",
      },
      examples: [
        { zh: "我们班有二十个学生。", pinyin: "Wǒmen bān yǒu èrshí gè xuésheng.", tr: { fr: "Notre classe compte vingt élèves.", en: "Our class has twenty students." } },
        { zh: "我有一个问题。", pinyin: "Wǒ yǒu yí gè wèntí.", tr: { fr: "J'ai une question.", en: "I have a question." } },
        { zh: "我在中国住了一年。", pinyin: "Wǒ zài Zhōngguó zhùle yì nián.", tr: { fr: "J'ai habité un an en Chine.", en: "I lived in China for a year." } },
      ],
    },
    {
      heading: { fr: "Le tableau des 25 classificateurs essentiels", en: "Table of the 25 essential measure words" },
      body: {
        fr: "Voici les classificateurs que tu rencontreras dans les niveaux HSK 1 à 3, classés par fréquence approximative. Pour chacun : la catégorie d'objets et des exemples typiques. Pas besoin de tout apprendre d'un coup : commence par les dix premiers.",
        en: "Here are the measure words you'll meet in HSK levels 1 to 3, roughly ordered by frequency. For each: the category of objects and typical examples. No need to learn them all at once: start with the first ten.",
      },
      table: {
        head: [
          { fr: "Classificateur", en: "Measure word" },
          { fr: "Pinyin", en: "Pinyin" },
          { fr: "Pour…", en: "Used for…" },
          { fr: "Exemples", en: "Examples" },
        ],
        rows: [
          ["个", "gè", { fr: "personnes, objets divers, abstrait", en: "people, general objects, abstract" }, "一个人, 一个苹果"],
          ["本", "běn", { fr: "livres, cahiers, magazines", en: "books, notebooks, magazines" }, "一本书, 两本杂志"],
          ["张", "zhāng", { fr: "objets plats : papier, tables, lits, billets, photos", en: "flat things: paper, tables, beds, tickets, photos" }, "一张纸, 一张票, 一张桌子"],
          ["杯", "bēi", { fr: "un verre / une tasse de…", en: "a glass / cup of…" }, "一杯茶, 两杯水"],
          ["件", "jiàn", { fr: "vêtements (surtout du haut), bagages ; affaires, événements", en: "clothes (esp. tops), luggage; matters, events" }, "一件衣服, 一件事, 两件行李"],
          ["条", "tiáo", { fr: "objets longs et souples : rivières, routes, pantalons, poissons, chiens ; nouvelles, messages", en: "long, flexible things: rivers, roads, trousers, fish, dogs; news items, messages" }, "一条河, 一条裤子, 一条鱼, 一条短信"],
          ["只", "zhī", { fr: "animaux (surtout petits) ; un élément d'une paire", en: "animals (mostly small); one of a pair" }, "一只猫, 一只手"],
          ["位", "wèi", { fr: "personnes (poli)", en: "people (polite)" }, "一位老师, 三位客人"],
          ["辆", "liàng", { fr: "véhicules à roues", en: "wheeled vehicles" }, "一辆车, 一辆自行车"],
          ["双", "shuāng", { fr: "paires : chaussures, chaussettes, baguettes, yeux", en: "pairs: shoes, socks, chopsticks, eyes" }, "一双鞋, 一双筷子"],
          ["家", "jiā", { fr: "entreprises, magasins, restaurants", en: "companies, shops, restaurants" }, "一家饭馆, 一家公司"],
          ["次", "cì", { fr: "nombre de fois (verbal)", en: "number of times (verbal)" }, "去过两次, 第一次"],
          ["口", "kǒu", { fr: "membres d'une famille ; bouchées", en: "family members; mouthfuls" }, "三口人, 一口饭"],
          ["块", "kuài", { fr: "morceaux ; yuans (oral)", en: "pieces, chunks; yuan (spoken)" }, "一块蛋糕, 十块钱"],
          ["瓶", "píng", { fr: "une bouteille de…", en: "a bottle of…" }, "一瓶水, 一瓶啤酒"],
          ["碗", "wǎn", { fr: "un bol de…", en: "a bowl of…" }, "一碗米饭, 一碗面"],
          ["些", "xiē", { fr: "quelques, un peu de (indéfini)", en: "some, a few (indefinite)" }, "一些人, 这些书"],
          ["点儿", "diǎnr", { fr: "un peu (quantité)", en: "a little (amount)" }, "一点儿水"],
          ["门", "mén", { fr: "matières, cours", en: "school subjects, courses" }, "一门课"],
          ["把", "bǎ", { fr: "objets avec une poignée ; chaises", en: "objects with a handle; chairs" }, "一把伞, 一把椅子"],
          ["层", "céng", { fr: "étages", en: "floors, storeys" }, "三层楼"],
          ["种", "zhǒng", { fr: "sortes, types", en: "kinds, types" }, "两种颜色, 这种水果"],
          ["份", "fèn", { fr: "portions, exemplaires, documents", en: "portions, copies, documents" }, "一份报纸, 一份工作"],
          ["顿", "dùn", { fr: "repas", en: "meals" }, "一顿饭"],
          ["遍", "biàn", { fr: "fois (du début à la fin)", en: "times (from start to finish)" }, "再说一遍"],
        ],
      },
    },
    {
      heading: { fr: "Classificateurs avec 这, 那, 哪, 几 et 每", en: "Measure words with 这, 那, 哪, 几 and 每" },
      body: {
        fr: "Le classificateur n'apparaît pas seulement après les nombres. On l'utilise aussi après les **démonstratifs** et les **interrogatifs** :\n\n**这 / 那 / 哪 + (nombre) + classificateur + nom**\n• 这**本**书 zhè běn shū — ce livre-ci\n• 那**件**衣服 nà jiàn yīfu — ce vêtement-là\n• 哪**个**人？ nǎ ge rén — quelle personne ?\n• 这**三个**学生 zhè sān gè xuésheng — ces trois étudiants (l'ordre est **démonstratif + nombre + classificateur**)\n\n**几 + classificateur (+ nom) ?** — combien (petit nombre, en général < 10) :\n• 你家有几**口**人？ Combien de personnes y a-t-il dans ta famille ?\n• 你要几**杯**咖啡？ Combien de cafés veux-tu ?\n\nAvec **多少** (combien, nombre plus grand ou inconnu), le classificateur est **facultatif** : 多少(个)学生 ?\n\n**每 + classificateur + nom** — chaque :\n• 每**个**人 — chaque personne ; 每**天** — chaque jour (pas de classificateur avec 天, 年).\n\n**Le nom peut disparaître** si le contexte est clair — mais **jamais** le classificateur :\n• 你要哪个？— Lequel veux-tu ?\n• 我要这个。— Je veux celui-ci.\n• 我买了三本。— J'en ai acheté trois (livres).",
        en: "Measure words don't only follow numbers. They also follow **demonstratives** and **question words**:\n\n**这 / 那 / 哪 + (number) + measure word + noun**\n• 这**本**书 zhè běn shū — this book\n• 那**件**衣服 nà jiàn yīfu — that piece of clothing\n• 哪**个**人? nǎ ge rén — which person?\n• 这**三个**学生 zhè sān gè xuésheng — these three students (the order is **demonstrative + number + measure word**)\n\n**几 + measure word (+ noun)?** — how many (small number, usually < 10):\n• 你家有几**口**人? How many people are in your family?\n• 你要几**杯**咖啡? How many coffees do you want?\n\nWith **多少** (how many, larger or unknown number), the measure word is **optional**: 多少(个)学生?\n\n**每 + measure word + noun** — each, every:\n• 每**个**人 — everyone; 每**天** — every day (no measure word with 天, 年).\n\n**The noun can be dropped** if context is clear — but **never** the measure word:\n• 你要哪个? — Which one do you want?\n• 我要这个。— I want this one.\n• 我买了三本。— I bought three (books).",
      },
      examples: [
        { zh: "这件衣服多少钱？", pinyin: "Zhè jiàn yīfu duōshao qián?", tr: { fr: "Combien coûte ce vêtement ?", en: "How much is this item of clothing?" } },
        { zh: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", tr: { fr: "Vous êtes combien dans ta famille ?", en: "How many people are in your family?" } },
        { zh: "我要那个，不要这个。", pinyin: "Wǒ yào nàge, bú yào zhège.", tr: { fr: "Je veux celui-là, pas celui-ci.", en: "I want that one, not this one." } },
      ],
    },
    {
      heading: { fr: "二 ou 两 ? Le piège du chiffre 2", en: "二 or 两? The number-2 trap" },
      body: {
        fr: "Le chinois a deux mots pour « deux » :\n• **二 èr** : pour **compter** et dans les nombres : 一、二、三 ; 十二 (12) ; 第二 (deuxième) ; 二月 (février).\n• **两 liǎng** : **devant un classificateur**, pour dire « deux (choses) » : 两个人, 两本书, 两杯茶, 两天.\n\n✗ 二个人 → ✓ **两个人**\n✗ 二本书 → ✓ **两本书**\n\nDans les nombres composés, on garde 二 : 十二个人 (12 personnes), 二十二本书 (22 livres). Pour 200, 2 000, on dit 两百 ou 二百, 两千 (plus courant).\n\nAutre piège : l'**argent**. 2 yuans = **两块钱**, pas « 二块钱 ».",
        en: "Chinese has two words for \"two\":\n• **二 èr**: for **counting** and inside numbers: 一、二、三; 十二 (12); 第二 (second); 二月 (February).\n• **两 liǎng**: **before a measure word**, meaning \"two (things)\": 两个人, 两本书, 两杯茶, 两天.\n\n✗ 二个人 → ✓ **两个人**\n✗ 二本书 → ✓ **两本书**\n\nIn compound numbers, keep 二: 十二个人 (12 people), 二十二本书 (22 books). For 200 and 2,000, you can say 两百 or 二百, and 两千 (more common).\n\nAnother trap: **money**. 2 yuan = **两块钱**, not \"二块钱\".",
      },
      examples: [
        { zh: "我有两个姐姐。", pinyin: "Wǒ yǒu liǎng gè jiějie.", tr: { fr: "J'ai deux grandes sœurs.", en: "I have two older sisters." } },
        { zh: "一共十二块钱。", pinyin: "Yígòng shí'èr kuài qián.", tr: { fr: "Ça fait douze yuans en tout.", en: "That's twelve yuan altogether." } },
      ],
    },
    {
      heading: { fr: "Les classificateurs verbaux : 次, 遍, 下", en: "Verbal measure words: 次, 遍, 下" },
      body: {
        fr: "Certains classificateurs ne comptent pas des objets, mais des **actions**. Ils se placent **après le verbe** :\n\n**Verbe + nombre + classificateur verbal**\n\n• **次 cì** : le nombre de fois qu'une action a lieu. 我去过两**次**北京。 Je suis allé deux fois à Pékin.\n• **遍 biàn** : une fois **du début à la fin** (lire, écouter, dire en entier). 请再说一**遍**。 Répète, s'il te plaît (litt. dis-le encore une fois en entier).\n• **下 xià** : une action brève. 等一**下** — attends un instant ; 看一**下** — jette un œil.\n\nAttention à la place de l'objet : avec un nom commun, on dit en général **verbe + nombre + 次 + objet** (我看过三次这个电影), mais avec un pronom, **verbe + pronom + nombre + 次** (我见过他两次).\n\nComme avec les classificateurs nominaux, **第 + nombre + 次** donne l'ordinal : 第一次来中国 — venir en Chine pour la première fois.",
        en: "Some measure words count **actions**, not objects. They go **after the verb**:\n\n**Verb + number + verbal measure word**\n\n• **次 cì**: how many times an action happens. 我去过两**次**北京。 I've been to Beijing twice.\n• **遍 biàn**: one time **from start to finish** (reading, listening, saying in full). 请再说一**遍**。 Please say it again (lit. say it once more in full).\n• **下 xià**: a brief action. 等一**下** — wait a moment; 看一**下** — take a quick look.\n\nWatch the object position: with an ordinary noun, you usually say **verb + number + 次 + object** (我看过三次这个电影), but with a pronoun, **verb + pronoun + number + 次** (我见过他两次).\n\nAs with nominal measure words, **第 + number + 次** gives the ordinal: 第一次来中国 — to come to China for the first time.",
      },
      examples: [
        { zh: "我去过两次北京。", pinyin: "Wǒ qùguo liǎng cì Běijīng.", tr: { fr: "Je suis allé deux fois à Pékin.", en: "I've been to Beijing twice." } },
        { zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn.", tr: { fr: "Tu peux répéter, s'il te plaît ?", en: "Could you say that again, please?" } },
        { zh: "这是我第一次来中国。", pinyin: "Zhè shì wǒ dì-yī cì lái Zhōngguó.", tr: { fr: "C'est la première fois que je viens en Chine.", en: "This is my first time in China." } },
      ],
    },
    {
      heading: { fr: "Erreurs fréquentes et astuces", en: "Common mistakes and tips" },
      body: {
        fr: "• ✗ 一书 → ✓ 一**本**书. Le classificateur est **obligatoire** entre le nombre et le nom.\n• ✗ 这书 est possible à l'oral mais ✓ 这**本**书 est la forme standard et la seule correcte à l'écrit.\n• ✗ 二杯茶 → ✓ **两**杯茶.\n• ✗ 一个年 → ✓ 一年. Pas de classificateur avec 年, 天, 分钟, 岁 (qui est lui-même une unité).\n• ✗ 一只狗 ou 一条狗 ? Les deux existent ! 条 est très courant pour les chiens, 只 aussi. Certains noms acceptent plusieurs classificateurs.\n• ✗ 一位我朋友 → ✓ 我的一位朋友 ou 我一个朋友 (le possessif vient en premier).\n• **位 est poli** : utilise-le pour les invités, les professeurs, les clients (几位？ — « Vous êtes combien ? » au restaurant). Ne dis pas ✗ 一位小偷 (un voleur) : c'est ironique !\n\n**Astuce mémoire :** regroupe les noms par classificateur dans tes révisions. Une carte « 张 : 纸, 票, 桌子, 床, 照片 » est plus efficace que cinq cartes isolées. Et surtout, apprends chaque mot nouveau **avec** son classificateur : c'est ce que fait Hanlu dans ses fiches de vocabulaire.",
        en: "• ✗ 一书 → ✓ 一**本**书. The measure word is **mandatory** between number and noun.\n• ✗ 这书 occurs in speech, but ✓ 这**本**书 is the standard form and the only correct one in writing.\n• ✗ 二杯茶 → ✓ **两**杯茶.\n• ✗ 一个年 → ✓ 一年. No measure word with 年, 天, 分钟, 岁 (which is itself a unit).\n• 一只狗 or 一条狗? Both exist! 条 is very common for dogs, and so is 只. Some nouns accept several measure words.\n• ✗ 一位我朋友 → ✓ 我的一位朋友 or 我一个朋友 (the possessor comes first).\n• **位 is polite**: use it for guests, teachers, customers (几位? — \"How many of you?\" at a restaurant). Don't say ✗ 一位小偷 (a thief): it sounds ironic!\n\n**Memory tip:** group nouns by measure word when you review. A card \"张: 纸, 票, 桌子, 床, 照片\" works better than five separate cards. Above all, learn every new word **with** its measure word: that's what Hanlu's vocabulary cards do.",
      },
      examples: [
        { zh: "您好，几位？", pinyin: "Nín hǎo, jǐ wèi?", tr: { fr: "Bonjour, vous êtes combien ?", en: "Hello, how many of you?" } },
        { zh: "我想买一双鞋。", pinyin: "Wǒ xiǎng mǎi yì shuāng xié.", tr: { fr: "Je voudrais acheter une paire de chaussures.", en: "I'd like to buy a pair of shoes." } },
        { zh: "桌子上有一张照片。", pinyin: "Zhuōzi shang yǒu yì zhāng zhàopiàn.", tr: { fr: "Il y a une photo sur la table.", en: "There's a photo on the table." } },
      ],
    },
  ],
};

const sentenceStructure: Guide = {
  slug: "sentence-structure",
  category: "grammar",
  readMinutes: 13,
  title: {
    fr: "L'ordre des mots en chinois : SVO, temps-lieu-manière et thème-commentaire",
    en: "Chinese word order: SVO, time-place-manner and topic-comment",
  },
  summary: {
    fr: "La phrase chinoise suit une logique très stable. Découvre la structure de base, la place du temps, du lieu et de la manière, les questions sans inversion et la construction thème-commentaire.",
    en: "Chinese sentences follow a very stable logic. Learn the basic structure, where time, place and manner go, questions without inversion, and the topic-comment construction.",
  },
  sections: [
    {
      heading: { fr: "Une grammaire sans conjugaison, mais pas sans règles", en: "A grammar without conjugation, but not without rules" },
      body: {
        fr: "Bonne nouvelle : en chinois, **les verbes ne se conjuguent pas**. Pas de « je mange, tu manges, nous mangeons », pas de passé simple ni de subjonctif. Les noms n'ont **ni genre ni pluriel** obligatoire. Pas d'articles « le, la, un, une ».\n\nMais alors, comment sait-on qui fait quoi, et quand ? Grâce à **l'ordre des mots**, qui est beaucoup plus **fixe** qu'en français ou en anglais. En chinois, la position d'un mot dans la phrase indique son rôle. Changer l'ordre, c'est souvent changer le sens, ou rendre la phrase incorrecte.\n\nLe principe général, que l'on retrouve partout : **ce qui précise vient avant ce qui est précisé**. L'adjectif avant le nom (好人, une bonne personne), le complément de temps et de lieu avant le verbe (我明天在家吃饭), la proposition relative avant le nom (我买的书, le livre que j'ai acheté).\n\nSi tu comprends ce principe, 80 % de la grammaire chinoise devient logique.",
        en: "Good news: in Chinese, **verbs don't conjugate**. No \"I eat, he eats\", no irregular past tenses. Nouns have **no gender and no compulsory plural**. No articles \"the, a\".\n\nSo how do you know who does what, and when? Through **word order**, which is much more **fixed** than in English. In Chinese, a word's position tells you its role. Change the order and you often change the meaning — or make the sentence wrong.\n\nThe general principle, found everywhere: **modifiers come before what they modify**. Adjective before noun (好人, a good person), time and place before the verb (我明天在家吃饭), relative clause before the noun (我买的书, the book I bought).\n\nOnce you grasp this principle, 80% of Chinese grammar starts to make sense.",
      },
      examples: [
        { zh: "我吃苹果。", pinyin: "Wǒ chī píngguǒ.", tr: { fr: "Je mange une pomme / des pommes.", en: "I eat an apple / apples." } },
        { zh: "他吃苹果。", pinyin: "Tā chī píngguǒ.", tr: { fr: "Il mange une pomme. (le verbe ne change pas)", en: "He eats an apple. (the verb doesn't change)" } },
      ],
    },
    {
      heading: { fr: "La base : Sujet + Verbe + Objet", en: "The basics: Subject + Verb + Object" },
      body: {
        fr: "Comme en français et en anglais, la phrase chinoise de base suit l'ordre **Sujet + Verbe + Objet (SVO)** :\n\n• 我 **喜欢** 音乐。 J'aime la musique.\n• 妈妈 **做** 饭。 Maman fait à manger.\n• 我们 **学习** 汉语。 Nous étudions le chinois.\n\nLes **adjectifs employés comme prédicat** fonctionnent comme des verbes : pas besoin de 是 (être). On ajoute généralement **很** (très), qui a souvent perdu son sens fort :\n• ✗ 我是忙。 → ✓ 我**很**忙。 Je suis occupé.\n• ✗ 天气是好。 → ✓ 天气**很**好。 Il fait beau.\n\n**是 shì** relie deux **noms** (A = B) :\n• 我**是**法国人。 Je suis français.\n• 他**是**我的老师。 C'est mon professeur.\n\n**La négation** se place **juste avant le verbe** (ou l'adjectif) : 不 pour le présent/futur/habitudes, 没 pour le passé accompli et avec 有.\n• 我**不**喝咖啡。 Je ne bois pas de café.\n• 我**没**去。 Je n'y suis pas allé.\n• 我**没**有钱。 Je n'ai pas d'argent.",
        en: "As in English, the basic Chinese sentence follows **Subject + Verb + Object (SVO)** order:\n\n• 我 **喜欢** 音乐。 I like music.\n• 妈妈 **做** 饭。 Mum cooks.\n• 我们 **学习** 汉语。 We study Chinese.\n\n**Adjectives used as predicates** work like verbs: no 是 (to be) needed. You usually add **很** (very), which has largely lost its strong meaning:\n• ✗ 我是忙。 → ✓ 我**很**忙。 I'm busy.\n• ✗ 天气是好。 → ✓ 天气**很**好。 The weather is nice.\n\n**是 shì** links two **nouns** (A = B):\n• 我**是**英国人。 I'm British.\n• 他**是**我的老师。 He's my teacher.\n\n**Negation** goes **right before the verb** (or adjective): 不 for present/future/habits, 没 for completed past actions and with 有.\n• 我**不**喝咖啡。 I don't drink coffee.\n• 我**没**去。 I didn't go.\n• 我**没**有钱。 I have no money.",
      },
      examples: [
        { zh: "我很忙。", pinyin: "Wǒ hěn máng.", tr: { fr: "Je suis occupé.", en: "I'm busy." } },
        { zh: "他是我的老师。", pinyin: "Tā shì wǒ de lǎoshī.", tr: { fr: "C'est mon professeur.", en: "He's my teacher." } },
        { zh: "我不喝咖啡。", pinyin: "Wǒ bù hē kāfēi.", tr: { fr: "Je ne bois pas de café.", en: "I don't drink coffee." } },
      ],
    },
    {
      heading: { fr: "Temps, lieu, manière : tout avant le verbe", en: "Time, place, manner: everything before the verb" },
      body: {
        fr: "C'est **la** différence majeure avec le français. En français, on dit « Je mange **au restaurant** **demain** » : les compléments viennent après le verbe. En chinois, ils se placent **avant le verbe**, dans un ordre précis :\n\n**Sujet + Temps + Manière/Avec qui + Lieu + Verbe + Objet**\n\n• 我 **明天** **在饭馆** 吃饭。 Je mange au restaurant demain.\n• 他 **每天** **坐地铁** 上班。 Il va au travail en métro tous les jours.\n• 我 **下午** **跟朋友** **在咖啡馆** 聊天。 Cet après-midi, je discute avec des amis au café.\n\n**Le temps** peut aussi se placer **avant le sujet**, pour le mettre en valeur ou planter le décor :\n• **明天**我在家。 = 我**明天**在家。 Demain, je suis à la maison.\n\nMais **jamais après le verbe** :\n✗ 我吃饭在饭馆明天。\n✓ 我明天在饭馆吃饭。\n\nPense à la phrase chinoise comme à un **film** : on donne d'abord le **quand**, puis le **comment/avec qui**, puis le **où**, et enfin l'**action**. On pose le décor avant que l'action ne commence.",
        en: "This is **the** major difference from English. In English you say \"I'm eating **at the restaurant** **tomorrow**\": the details follow the verb. In Chinese, they go **before the verb**, in a set order:\n\n**Subject + Time + Manner/With whom + Place + Verb + Object**\n\n• 我 **明天** **在饭馆** 吃饭。 I'm eating at a restaurant tomorrow.\n• 他 **每天** **坐地铁** 上班。 He goes to work by metro every day.\n• 我 **下午** **跟朋友** **在咖啡馆** 聊天。 This afternoon I'm chatting with friends at a café.\n\n**Time** can also go **before the subject**, to highlight it or set the scene:\n• **明天**我在家。 = 我**明天**在家。 Tomorrow I'll be at home.\n\nBut **never after the verb**:\n✗ 我吃饭在饭馆明天。\n✓ 我明天在饭馆吃饭。\n\nThink of a Chinese sentence as a **film**: first the **when**, then the **how/with whom**, then the **where**, and finally the **action**. The scene is set before the action begins.",
      },
      table: {
        head: [
          { fr: "Sujet", en: "Subject" },
          { fr: "Temps", en: "Time" },
          { fr: "Manière / avec qui", en: "Manner / with whom" },
          { fr: "Lieu", en: "Place" },
          { fr: "Verbe + objet", en: "Verb + object" },
        ],
        rows: [
          ["我", "明天", "—", "在家", "看书"],
          ["他", "每天", "坐公共汽车", "—", "去学校"],
          ["我们", "晚上", "跟朋友", "在饭馆", "吃饭"],
          ["妈妈", "上午", "一个人", "在超市", "买东西"],
        ],
      },
      examples: [
        { zh: "我晚上在家看电视。", pinyin: "Wǒ wǎnshang zài jiā kàn diànshì.", tr: { fr: "Le soir, je regarde la télé à la maison.", en: "In the evening I watch TV at home." } },
        { zh: "他每天坐地铁上班。", pinyin: "Tā měi tiān zuò dìtiě shàngbān.", tr: { fr: "Il va au travail en métro tous les jours.", en: "He takes the metro to work every day." } },
        { zh: "我们明天跟老师一起去博物馆。", pinyin: "Wǒmen míngtiān gēn lǎoshī yìqǐ qù bówùguǎn.", tr: { fr: "Demain, nous allons au musée avec le professeur.", en: "Tomorrow we're going to the museum with our teacher." } },
      ],
      tip: {
        fr: "Moyen mnémotechnique : « **Quand – Comment – Où – Quoi** ». Récite-le avant de construire une longue phrase.",
        en: "Mnemonic: \"**When – How – Where – What**\". Recite it before building a long sentence.",
      },
    },
    {
      heading: { fr: "Ce qui vient après le verbe : durée, résultat, degré", en: "What comes after the verb: duration, result, degree" },
      body: {
        fr: "Tout ne se place pas avant le verbe. Certains éléments, appelés **compléments** (补语 bǔyǔ), viennent **après** le verbe, parce qu'ils décrivent le **résultat** ou la **mesure** de l'action :\n\n• **La durée** : 我学了**两年**汉语。 J'ai étudié le chinois pendant deux ans.\n• **Le nombre de fois** : 我去过**三次**。 J'y suis allé trois fois.\n• **Le résultat** : 我听**懂**了。 J'ai compris (en écoutant). 作业写**完**了。 J'ai fini les devoirs.\n• **La direction** : 他走**进来**了。 Il est entré (vers moi).\n• **Le degré / la manière évaluée** (avec 得) : 他说**得很快**。 Il parle vite.\n\nComparons :\n• 我**在北京**工作。 Je travaille à Pékin. (lieu = avant le verbe)\n• 我工作了**三年**。 J'ai travaillé trois ans. (durée = après le verbe)\n\nLa logique : **avant le verbe**, on pose le **cadre** de l'action (quand, où, comment). **Après le verbe**, on dit ce que l'action **a donné** (combien de temps, quel résultat, à quel degré).",
        en: "Not everything goes before the verb. Some elements, called **complements** (补语 bǔyǔ), come **after** the verb, because they describe the **result** or **extent** of the action:\n\n• **Duration**: 我学了**两年**汉语。 I studied Chinese for two years.\n• **Frequency**: 我去过**三次**。 I've been there three times.\n• **Result**: 我听**懂**了。 I understood (by listening). 作业写**完**了。 I've finished the homework.\n• **Direction**: 他走**进来**了。 He came in (towards me).\n• **Degree / evaluated manner** (with 得): 他说**得很快**。 He speaks fast.\n\nCompare:\n• 我**在北京**工作。 I work in Beijing. (place = before the verb)\n• 我工作了**三年**。 I worked for three years. (duration = after the verb)\n\nThe logic: **before the verb**, you set the **frame** of the action (when, where, how). **After the verb**, you say what the action **produced** (how long, what result, to what degree).",
      },
      examples: [
        { zh: "我学了两年汉语。", pinyin: "Wǒ xuéle liǎng nián Hànyǔ.", tr: { fr: "J'ai étudié le chinois pendant deux ans.", en: "I studied Chinese for two years." } },
        { zh: "你听懂了吗？", pinyin: "Nǐ tīngdǒng le ma?", tr: { fr: "Tu as compris ?", en: "Did you understand?" } },
        { zh: "她唱得很好。", pinyin: "Tā chàng de hěn hǎo.", tr: { fr: "Elle chante très bien.", en: "She sings very well." } },
      ],
    },
    {
      heading: { fr: "Les questions : pas d'inversion !", en: "Questions: no inversion!" },
      body: {
        fr: "En français, on inverse souvent pour poser une question (« Où vas-tu ? »). En anglais, on ajoute « do » et on déplace le mot interrogatif en tête (« Where are you going? »). En chinois, **l'ordre des mots ne change pas**.\n\n**1. Ajouter 吗 à la fin** (question fermée, oui/non) :\n• 你是学生。→ 你是学生**吗**？ Tu es étudiant ?\n\n**2. Remplacer l'élément inconnu par un mot interrogatif, à la même place :**\n• 你去**北京**。→ 你去**哪儿**？ Tu vas où ?\n• **他**是老师。→ **谁**是老师？ Qui est le professeur ?\n• 你**明天**来。→ 你**什么时候**来？ Tu viens quand ?\n• 这是**书**。→ 这是**什么**？ C'est quoi ?\n\nC'est très pratique : prends la réponse attendue, remplace le mot inconnu par 什么, 谁, 哪儿, 几, 多少, 什么时候, 怎么… et tu as ta question.\n\n**3. La forme affirmative-négative (V不V) :**\n• 你去**不去**？ Tu y vas ou pas ?\n• 你是**不是**老师？ Tu es professeur ou non ?\n\n**4. 呢 pour renvoyer la question :**\n• 我很好，你**呢**？ Je vais bien, et toi ?\n\n**Attention :** on n'utilise **jamais** 吗 avec un mot interrogatif. ✗ 你去哪儿吗？ → ✓ 你去哪儿？",
        en: "In English, you invert or add \"do\" to ask a question and move the question word to the front (\"Where are you going?\"). In Chinese, **word order doesn't change**.\n\n**1. Add 吗 at the end** (yes/no question):\n• 你是学生。→ 你是学生**吗**? Are you a student?\n\n**2. Replace the unknown element with a question word, in the same position:**\n• 你去**北京**。→ 你去**哪儿**? Where are you going?\n• **他**是老师。→ **谁**是老师? Who is the teacher?\n• 你**明天**来。→ 你**什么时候**来? When are you coming?\n• 这是**书**。→ 这是**什么**? What's this?\n\nVery handy: take the expected answer, swap the unknown word for 什么, 谁, 哪儿, 几, 多少, 什么时候, 怎么… and you have your question.\n\n**3. Affirmative-negative form (V不V):**\n• 你去**不去**? Are you going or not?\n• 你是**不是**老师? Are you a teacher or not?\n\n**4. 呢 to bounce the question back:**\n• 我很好，你**呢**? I'm fine, and you?\n\n**Careful:** **never** use 吗 together with a question word. ✗ 你去哪儿吗? → ✓ 你去哪儿?",
      },
      examples: [
        { zh: "你去哪儿？", pinyin: "Nǐ qù nǎr?", tr: { fr: "Tu vas où ?", en: "Where are you going?" } },
        { zh: "谁是你的老师？", pinyin: "Shéi shì nǐ de lǎoshī?", tr: { fr: "Qui est ton professeur ?", en: "Who is your teacher?" } },
        { zh: "你喜欢不喜欢喝茶？", pinyin: "Nǐ xǐhuan bu xǐhuan hē chá?", tr: { fr: "Tu aimes le thé ou pas ?", en: "Do you like tea or not?" } },
      ],
    },
    {
      heading: { fr: "Thème + commentaire : la phrase « à la chinoise »", en: "Topic + comment: the \"Chinese-style\" sentence" },
      body: {
        fr: "Le chinois est souvent décrit comme une langue **à thème** (topic-prominent). On commence par annoncer **de quoi on parle** (le thème), puis on dit quelque chose **à ce sujet** (le commentaire). Le thème n'est pas forcément le sujet grammatical.\n\n• **这本书**我看过。 Ce livre, je l'ai lu.\n• **北京**我去过两次。 Pékin, j'y suis allé deux fois.\n• **中国菜**我最喜欢饺子。 La cuisine chinoise, ce que je préfère, ce sont les raviolis.\n• **大象**鼻子很长。 L'éléphant, (sa) trompe est longue.\n\nLe français parlé fait exactement la même chose : « Le café, moi, j'en bois pas. » L'anglais aussi, de manière plus limitée : « This book, I've read it. » En chinois, cette construction est **tout à fait standard**, à l'oral comme à l'écrit, et n'a pas besoin de pronom de rappel (« le », « it »).\n\nOn l'utilise pour :\n• **reprendre** un élément déjà mentionné : A : 你看过这个电影吗？ B : 这个电影我看过。\n• **opposer** deux éléments : 苹果我喜欢，香蕉我不喜欢。 Les pommes, j'aime ; les bananes, non.\n\nQuand tu entends une phrase qui semble « commencer par l'objet », pense thème-commentaire !",
        en: "Chinese is often described as a **topic-prominent** language. You start by announcing **what you're talking about** (the topic), then say something **about it** (the comment). The topic isn't necessarily the grammatical subject.\n\n• **这本书**我看过。 This book, I've read (it).\n• **北京**我去过两次。 Beijing, I've been (there) twice.\n• **中国菜**我最喜欢饺子。 Chinese food — my favourite is dumplings.\n• **大象**鼻子很长。 Elephants, (their) trunks are long.\n\nSpoken English does this too: \"That film, I really didn't like it.\" In Chinese, though, this construction is **completely standard**, in speech and writing, and needs no resumptive pronoun (\"it\").\n\nIt's used to:\n• **pick up** something already mentioned: A: 你看过这个电影吗? B: 这个电影我看过。\n• **contrast** two things: 苹果我喜欢，香蕉我不喜欢。 Apples I like; bananas, I don't.\n\nWhen you hear a sentence that seems to \"start with the object\", think topic-comment!",
      },
      examples: [
        { zh: "这本书我看过。", pinyin: "Zhè běn shū wǒ kànguo.", tr: { fr: "Ce livre, je l'ai déjà lu.", en: "This book, I've read it." } },
        { zh: "苹果我喜欢，香蕉我不喜欢。", pinyin: "Píngguǒ wǒ xǐhuan, xiāngjiāo wǒ bù xǐhuan.", tr: { fr: "Les pommes, j'aime ; les bananes, non.", en: "Apples I like; bananas I don't." } },
      ],
    },
    {
      heading: { fr: "Existence et localisation : 有, 在 et la phrase qui commence par le lieu", en: "Existence and location: 有, 在 and place-first sentences" },
      body: {
        fr: "Pour dire **où se trouve** quelque chose et **ce qu'il y a** quelque part, le chinois utilise deux structures symétriques. Elles illustrent bien la logique « du connu vers le nouveau ».\n\n**1. Chose connue + 在 + lieu : « X est à tel endroit ».**\n• 我的手机**在**桌子上。 Mon téléphone est sur la table.\n• 洗手间**在**哪儿？ Où sont les toilettes ?\nIci, on parle d'un objet précis, déjà identifié.\n\n**2. Lieu + 有 + chose nouvelle : « À tel endroit, il y a X ».**\n• 桌子上**有**一个手机。 Il y a un téléphone sur la table.\n• 我家附近**有**一个超市。 Il y a un supermarché près de chez moi.\nLe lieu vient **en premier**, comme un thème ; la chose nouvelle, souvent avec un nombre et un classificateur, vient **après** 有. C'est l'équivalent de « il y a », « there is ».\n\n**Les mots de localisation** se placent **après** le nom, comme des postpositions : 桌子**上** (sur la table), 房间**里** (dans la chambre), 学校**旁边** (à côté de l'école), 银行**对面** (en face de la banque). Le français dit « **sur** la table », le chinois dit « table-**dessus** ».\n\n**Erreurs fréquentes :**\n• ✗ 有一个手机在桌子上。 → ✓ 桌子上有一个手机。\n• ✗ 在桌子上有一个手机。 → ✓ 桌子上有一个手机。 (pas de 在 devant le lieu dans une phrase en 有)\n• ✗ 一个手机在桌子上。 → sonne bizarre : une chose indéfinie se présente avec 有.",
        en: "To say **where** something is and **what there is** somewhere, Chinese uses two mirror-image structures. They nicely illustrate the \"known → new\" logic.\n\n**1. Known thing + 在 + place: \"X is at such a place\".**\n• 我的手机**在**桌子上。 My phone is on the table.\n• 洗手间**在**哪儿? Where's the toilet?\nHere we're talking about a specific, already identified object.\n\n**2. Place + 有 + new thing: \"In such a place, there is X\".**\n• 桌子上**有**一个手机。 There's a phone on the table.\n• 我家附近**有**一个超市。 There's a supermarket near my place.\nThe place comes **first**, like a topic; the new thing, often with a number and measure word, comes **after** 有. It's the equivalent of \"there is\".\n\n**Location words** go **after** the noun, like postpositions: 桌子**上** (on the table), 房间**里** (in the room), 学校**旁边** (next to the school), 银行**对面** (opposite the bank). English says \"**on** the table\"; Chinese says \"table-**top**\".\n\n**Common mistakes:**\n• ✗ 有一个手机在桌子上。 → ✓ 桌子上有一个手机。\n• ✗ 在桌子上有一个手机。 → ✓ 桌子上有一个手机。 (no 在 before the place in a 有 sentence)\n• ✗ 一个手机在桌子上。 → sounds odd: an indefinite thing is introduced with 有.",
      },
      examples: [
        { zh: "我的手机在桌子上。", pinyin: "Wǒ de shǒujī zài zhuōzi shang.", tr: { fr: "Mon téléphone est sur la table.", en: "My phone is on the table." } },
        { zh: "我家附近有一个超市。", pinyin: "Wǒ jiā fùjìn yǒu yí gè chāoshì.", tr: { fr: "Il y a un supermarché près de chez moi.", en: "There's a supermarket near my home." } },
        { zh: "银行在学校对面。", pinyin: "Yínháng zài xuéxiào duìmiàn.", tr: { fr: "La banque est en face de l'école.", en: "The bank is opposite the school." } },
      ],
    },
    {
      heading: { fr: "Le déterminant avant le déterminé", en: "Modifier before modified" },
      body: {
        fr: "Revenons au grand principe : **ce qui précise vient avant**. Il s'applique aussi au groupe nominal, ce qui surprend les francophones habitués à « un livre **intéressant** », « l'homme **qui parle** ».\n\n• **Adjectif + (的) + nom** : 好朋友 (un bon ami), 很漂亮**的**衣服 (de très beaux vêtements).\n• **Possesseur + 的 + nom** : 我**的**书 (mon livre), 老师**的**车 (la voiture du professeur).\n• **Proposition relative + 的 + nom** : 我昨天买**的**书 (le livre que j'ai acheté hier), 在那儿说话**的**人 (la personne qui parle là-bas).\n\nPlus le complément du nom est long, plus il faut attendre pour découvrir de quoi on parle : 我在北京认识**的**那个法国朋友 — « cet ami français que j'ai rencontré à Pékin ». Le mot principal, 朋友, arrive **tout à la fin**.\n\n**Conseil de lecture :** face à une longue phrase, cherche d'abord le **的** puis le **nom qui le suit** : c'est le noyau. Tout ce qui précède le 的 le décrit. (Voir notre guide sur 的, 得 et 地.)",
        en: "Back to the big principle: **modifiers come first**. This also applies inside noun phrases, which is especially striking with relative clauses (\"the man **who is talking**\").\n\n• **Adjective + (的) + noun**: 好朋友 (a good friend), 很漂亮**的**衣服 (very pretty clothes).\n• **Possessor + 的 + noun**: 我**的**书 (my book), 老师**的**车 (the teacher's car).\n• **Relative clause + 的 + noun**: 我昨天买**的**书 (the book I bought yesterday), 在那儿说话**的**人 (the person talking over there).\n\nThe longer the modifier, the longer you wait to find out what's being talked about: 我在北京认识**的**那个法国朋友 — \"that French friend I met in Beijing\". The head word, 朋友, comes **right at the end**.\n\n**Reading tip:** when facing a long sentence, look for **的** and then the **noun after it**: that's the core. Everything before 的 describes it. (See our guide on 的, 得 and 地.)",
      },
      examples: [
        { zh: "这是我昨天买的书。", pinyin: "Zhè shì wǒ zuótiān mǎi de shū.", tr: { fr: "C'est le livre que j'ai acheté hier.", en: "This is the book I bought yesterday." } },
        { zh: "在那儿说话的人是我哥哥。", pinyin: "Zài nàr shuōhuà de rén shì wǒ gēge.", tr: { fr: "La personne qui parle là-bas, c'est mon grand frère.", en: "The person talking over there is my older brother." } },
      ],
      tip: {
        fr: "Exercice : prends une phrase française avec « qui » ou « que » et traduis-la en déplaçant toute la relative **avant** le nom, suivie de 的.",
        en: "Exercise: take an English sentence with \"who\" or \"that\" and translate it by moving the whole relative clause **before** the noun, followed by 的.",
      },
    },
  ],
};

const leGuide: Guide = {
  slug: "le-guide",
  category: "grammar",
  readMinutes: 15,
  title: {
    fr: "La particule 了 (le) : tous ses emplois expliqués clairement",
    en: "The particle 了 (le): every use explained clearly",
  },
  summary: {
    fr: "了 n'est pas un marqueur du passé ! Comprends enfin la différence entre le 了 verbal (action accomplie) et le 了 de fin de phrase (changement de situation), avec les cas où il ne faut surtout pas l'utiliser.",
    en: "了 is not a past-tense marker! Finally understand the difference between verbal 了 (completed action) and sentence-final 了 (change of situation), plus the cases where you must not use it.",
  },
  sections: [
    {
      heading: { fr: "Le malentendu n°1 : « 了 = passé »", en: "Misconception no. 1: \"了 = past tense\"" },
      body: {
        fr: "Presque tous les débutants apprennent que « 了 sert à mettre au passé ». C'est la source de la moitié des erreurs sur cette particule. En réalité :\n\n• On peut parler du passé **sans** 了 : 我以前住在上海。 J'habitais à Shanghai avant. / 昨天很冷。 Il faisait froid hier.\n• On peut utiliser 了 pour le **futur** : 明天下**了**课，我去找你。 Demain, quand j'aurai fini les cours, je passerai te voir.\n• Et 了 peut signaler un **changement au présent** : 下雨**了**！ Il (se met à) pleut !\n\nLe chinois n'a pas de **temps** grammatical (passé, présent, futur) : le moment de l'action est indiqué par des mots de temps (昨天, 明天, 以前…) ou par le contexte. En revanche, le chinois a des **aspects** : ils disent **comment** on envisage l'action (terminée, en cours, vécue…).\n\n了 recouvre en fait **deux particules différentes** qui s'écrivent et se prononcent pareil (le, ton neutre) :\n• **了₁ (verbal)**, juste **après le verbe** : l'action est **réalisée / accomplie**.\n• **了₂ (de phrase)**, en **fin de phrase** : il y a un **changement**, une **nouvelle situation**.\n\nApprends à les distinguer, et 了 cessera d'être un mystère.",
        en: "Almost every beginner learns that \"了 makes things past tense\". That idea causes half the mistakes with this particle. In reality:\n\n• You can talk about the past **without** 了: 我以前住在上海。 I used to live in Shanghai. / 昨天很冷。 It was cold yesterday.\n• You can use 了 for the **future**: 明天下**了**课，我去找你。 Tomorrow, once class is over, I'll come and find you.\n• And 了 can signal a **change in the present**: 下雨**了**! It's (started) raining!\n\nChinese has no grammatical **tense** (past, present, future): when an action happens is shown by time words (昨天, 明天, 以前…) or context. Instead, Chinese has **aspect**: it shows **how** an action is viewed (completed, ongoing, experienced…).\n\n了 is really **two different particles** that are written and pronounced the same way (le, neutral tone):\n• **了₁ (verbal)**, right **after the verb**: the action is **realised / completed**.\n• **了₂ (sentence-final)**, at the **end of the sentence**: there is a **change**, a **new situation**.\n\nLearn to tell them apart and 了 stops being a mystery.",
      },
      examples: [
        { zh: "昨天很冷。", pinyin: "Zuótiān hěn lěng.", tr: { fr: "Il faisait froid hier. (passé sans 了)", en: "It was cold yesterday. (past without 了)" } },
        { zh: "下雨了！", pinyin: "Xià yǔ le!", tr: { fr: "Il pleut ! (ça vient de commencer)", en: "It's raining! (it's just started)" } },
      ],
    },
    {
      heading: { fr: "了₁ : l'action accomplie (après le verbe)", en: "了₁: the completed action (after the verb)" },
      body: {
        fr: "**Structure : Sujet + Verbe + 了 + (quantité) + Objet**\n\nCe 了 indique que l'action a eu lieu et s'est **réalisée**, souvent avec un résultat concret ou une quantité.\n\n• 我买**了**一本书。 J'ai acheté un livre.\n• 他喝**了**三杯咖啡。 Il a bu trois cafés.\n• 我们看**了**一个很有意思的电影。 Nous avons vu un film très intéressant.\n\n**La règle cruciale : l'objet doit être « délimité ».** Si l'objet est un simple nom nu, la phrase semble **incomplète** :\n• ✗ 我买了书。 (« J'ai acheté des livres… et alors ? »)\n• ✓ 我买了**一本**书。 (avec quantité)\n• ✓ 我买了**你喜欢的**书。 (avec un déterminant)\n• ✓ 我买了书**就回家了**。 (suivi d'une autre action)\n• ✓ 我买书**了**。 (avec 了₂ en fin de phrase, voir plus bas)\n\n**了₁ pour enchaîner deux actions : V₁ + 了 + O, 就/再 + V₂**\n• 我下**了**班**就**回家。 Dès que je finis le travail, je rentre à la maison.\n• 你吃**了**饭**再**走吧。 Mange avant de partir. (litt. « quand tu auras mangé, pars »)\n\nIci, l'action peut être passée, habituelle ou future : 了₁ indique seulement qu'**elle est accomplie avant la suivante**.",
        en: "**Structure: Subject + Verb + 了 + (quantity) + Object**\n\nThis 了 shows that the action took place and was **realised**, often with a concrete result or quantity.\n\n• 我买**了**一本书。 I bought a book.\n• 他喝**了**三杯咖啡。 He drank three coffees.\n• 我们看**了**一个很有意思的电影。 We watched a really interesting film.\n\n**The crucial rule: the object must be \"bounded\".** If the object is a bare noun, the sentence feels **unfinished**:\n• ✗ 我买了书。 (\"I bought books… and then?\")\n• ✓ 我买了**一本**书。 (with a quantity)\n• ✓ 我买了**你喜欢的**书。 (with a modifier)\n• ✓ 我买了书**就回家了**。 (followed by another action)\n• ✓ 我买书**了**。 (with sentence-final 了₂, see below)\n\n**了₁ to chain two actions: V₁ + 了 + O, 就/再 + V₂**\n• 我下**了**班**就**回家。 As soon as I finish work, I go home.\n• 你吃**了**饭**再**走吧。 Eat before you go. (lit. \"once you've eaten, then go\")\n\nHere the action can be past, habitual or future: 了₁ only shows that **it's completed before the next one**.",
      },
      examples: [
        { zh: "我买了一本书。", pinyin: "Wǒ mǎile yì běn shū.", tr: { fr: "J'ai acheté un livre.", en: "I bought a book." } },
        { zh: "他喝了三杯咖啡。", pinyin: "Tā hēle sān bēi kāfēi.", tr: { fr: "Il a bu trois cafés.", en: "He drank three cups of coffee." } },
        { zh: "我下了班就回家。", pinyin: "Wǒ xiàle bān jiù huí jiā.", tr: { fr: "Dès que je sors du travail, je rentre.", en: "I go home as soon as I finish work." } },
      ],
    },
    {
      heading: { fr: "了₂ : le changement de situation (fin de phrase)", en: "了₂: change of situation (end of sentence)" },
      body: {
        fr: "**Structure : … + 了。** (en fin de phrase)\n\nCe 了 signale que **la situation a changé** par rapport à avant, ou qu'elle est **nouvelle** pour l'interlocuteur. Il peut suivre un verbe, un adjectif, un nom…\n\n**1. Nouvel état :**\n• 我饿**了**。 J'ai faim (maintenant, je n'avais pas faim avant).\n• 天黑**了**。 Il fait nuit (la nuit est tombée).\n• 他是大学生**了**。 Il est à l'université maintenant (il ne l'était pas avant).\n• 我二十岁**了**。 J'ai (maintenant) vingt ans.\n\n**2. Changement de décision ou d'habitude :**\n• 我不去**了**。 Finalement, je n'y vais pas.\n• 他不抽烟**了**。 Il ne fume plus.\n• 我现在喜欢喝茶**了**。 Maintenant, j'aime le thé (avant non).\n\n**3. Annoncer une nouvelle / confirmer un événement :**\n• A : 你吃饭了吗？ Tu as mangé ? — B : 吃**了**。 Oui.\n• 我买书**了**。 J'ai acheté des livres (c'est fait).\n\n**Astuce :** traduis 了₂ mentalement par « **maintenant / désormais / ça y est** ». « 我饿了 » = « ça y est, j'ai faim ». « 我不去了 » = « désormais, je n'y vais plus ».\n\n**不…了 = ne… plus.** C'est un emploi très fréquent et très utile.",
        en: "**Structure: … + 了。** (at the end of the sentence)\n\nThis 了 signals that **the situation has changed** compared to before, or that it is **news** to the listener. It can follow a verb, an adjective, a noun…\n\n**1. New state:**\n• 我饿**了**。 I'm hungry (now; I wasn't before).\n• 天黑**了**。 It's dark (night has fallen).\n• 他是大学生**了**。 He's at university now (he wasn't before).\n• 我二十岁**了**。 I'm twenty (now).\n\n**2. Change of decision or habit:**\n• 我不去**了**。 I'm not going after all.\n• 他不抽烟**了**。 He doesn't smoke any more.\n• 我现在喜欢喝茶**了**。 Now I like tea (I didn't before).\n\n**3. Reporting news / confirming an event:**\n• A: 你吃饭了吗? Have you eaten? — B: 吃**了**。 Yes.\n• 我买书**了**。 I've bought the books (it's done).\n\n**Tip:** mentally translate 了₂ as \"**now / any more / there we go**\". \"我饿了\" = \"now I'm hungry\". \"我不去了\" = \"I'm not going any more\".\n\n**不…了 = not… any more.** A very frequent and useful pattern.",
      },
      examples: [
        { zh: "我饿了。", pinyin: "Wǒ è le.", tr: { fr: "J'ai faim.", en: "I'm hungry." } },
        { zh: "他不抽烟了。", pinyin: "Tā bù chōuyān le.", tr: { fr: "Il ne fume plus.", en: "He doesn't smoke any more." } },
        { zh: "我女儿八岁了。", pinyin: "Wǒ nǚ'ér bā suì le.", tr: { fr: "Ma fille a (maintenant) huit ans.", en: "My daughter is eight now." } },
      ],
    },
    {
      heading: { fr: "Les deux 了 ensemble : l'action qui continue", en: "Both 了 together: an action that's still going on" },
      body: {
        fr: "Quand on combine **了₁ après le verbe** et **了₂ en fin de phrase** avec une **durée** ou une **quantité**, on indique que l'action a commencé dans le passé et **continue encore** (ou que le compte n'est pas terminé).\n\nComparons :\n• 我学**了**两年汉语。 J'ai étudié le chinois pendant deux ans. (c'est fini, j'ai arrêté)\n• 我学**了**两年汉语**了**。 Ça fait deux ans que j'étudie le chinois. (et je continue !)\n\n• 我等**了**半个小时。 J'ai attendu une demi-heure. (l'attente est finie)\n• 我等**了**半个小时**了**！ Ça fait une demi-heure que j'attends ! (et j'attends toujours…)\n\n• 他喝了三杯**了**。 Il en est à son troisième verre. (et il va peut-être continuer)\n\nC'est l'équivalent exact du français « **ça fait… que** » ou de l'anglais « **have been …ing for** ». Très utile en conversation !",
        en: "When you combine **了₁ after the verb** and **了₂ at the end** with a **duration** or **quantity**, you show that the action began in the past and **is still going on** (or the count isn't finished).\n\nCompare:\n• 我学**了**两年汉语。 I studied Chinese for two years. (it's over, I stopped)\n• 我学**了**两年汉语**了**。 I've been studying Chinese for two years. (and I'm still at it!)\n\n• 我等**了**半个小时。 I waited half an hour. (the wait is over)\n• 我等**了**半个小时**了**! I've been waiting for half an hour! (and I'm still waiting…)\n\n• 他喝了三杯**了**。 He's had three glasses so far. (and may carry on)\n\nThis is exactly the English \"**have been …ing for**\". Very useful in conversation!",
      },
      table: {
        head: [
          { fr: "Phrase", en: "Sentence" },
          { fr: "Sens", en: "Meaning" },
        ],
        rows: [
          ["我学了两年汉语。", { fr: "J'ai étudié deux ans (terminé).", en: "I studied for two years (over)." }],
          ["我学了两年汉语了。", { fr: "Ça fait deux ans que j'étudie (en cours).", en: "I've been studying for two years (ongoing)." }],
          ["我在这儿住了五年。", { fr: "J'ai habité ici cinq ans (parti depuis).", en: "I lived here for five years (since left)." }],
          ["我在这儿住了五年了。", { fr: "J'habite ici depuis cinq ans.", en: "I've lived here for five years (still do)." }],
        ],
      },
    },
    {
      heading: { fr: "Autres emplois : 太…了, 快…了, 要…了", en: "Other uses: 太…了, 快…了, 要…了" },
      body: {
        fr: "**太 + adjectif + 了 : l'exclamation.** 了 renforce ici l'exclamation, sans idée d'accomplissement.\n• 太好**了**！ Super !\n• 这个菜太辣**了**！ Ce plat est bien trop épicé !\n• 太谢谢你**了**！ Merci infiniment !\n\n**快 / 快要 / 要 / 就要 + verbe + 了 : l'action imminente.** « Être sur le point de… »\n• 快下雨**了**。 Il va bientôt pleuvoir.\n• 火车**要**开**了**。 Le train va partir.\n• 我们**快要**到**了**。 On arrive bientôt.\n• 他下个月**就要**结婚**了**。 Il se marie le mois prochain.\n\nAttention : avec un mot de temps précis, on utilise **就要…了**, pas **快要…了** : ✗ 他明天快要走了 → ✓ 他明天**就要**走了。\n\n**Le 了 de 了解, 不了, 得了 (liǎo) — un autre mot !** Dans certains mots, 了 se prononce **liǎo** et signifie « terminer, pouvoir » : 了解 liǎojiě (comprendre, connaître), 吃不了 chī bu liǎo (ne pas pouvoir tout manger). Ne le confonds pas avec la particule.",
        en: "**太 + adjective + 了: exclamation.** Here 了 strengthens the exclamation, with no sense of completion.\n• 太好**了**! Great!\n• 这个菜太辣**了**! This dish is way too spicy!\n• 太谢谢你**了**! Thank you so much!\n\n**快 / 快要 / 要 / 就要 + verb + 了: imminent action.** \"About to…\"\n• 快下雨**了**。 It's about to rain.\n• 火车**要**开**了**。 The train is about to leave.\n• 我们**快要**到**了**。 We're almost there.\n• 他下个月**就要**结婚**了**。 He's getting married next month.\n\nCareful: with a specific time word, use **就要…了**, not **快要…了**: ✗ 他明天快要走了 → ✓ 他明天**就要**走了。\n\n**The 了 in 了解, 不了, 得了 (liǎo) — a different word!** In some words, 了 is pronounced **liǎo** and means \"to finish, to be able\": 了解 liǎojiě (to understand, to know about), 吃不了 chī bu liǎo (can't finish eating). Don't confuse it with the particle.",
      },
      examples: [
        { zh: "太好了！", pinyin: "Tài hǎo le!", tr: { fr: "Génial !", en: "Great!" } },
        { zh: "快下雨了，我们回家吧。", pinyin: "Kuài xià yǔ le, wǒmen huí jiā ba.", tr: { fr: "Il va pleuvoir, rentrons.", en: "It's about to rain, let's go home." } },
        { zh: "我不太了解中国文化。", pinyin: "Wǒ bú tài liǎojiě Zhōngguó wénhuà.", tr: { fr: "Je ne connais pas très bien la culture chinoise.", en: "I don't know much about Chinese culture." } },
      ],
    },
    {
      heading: { fr: "Quand NE PAS utiliser 了", en: "When NOT to use 了" },
      body: {
        fr: "C'est souvent plus important que de savoir quand l'utiliser.\n\n**1. Avec la négation 没 : pas de 了.** 没 signifie déjà « l'action n'a pas eu lieu ».\n• ✗ 我没吃了饭。 → ✓ 我**没**吃饭。 Je n'ai pas mangé.\n• ✗ 他没来了。 → ✓ 他**没**来。 Il n'est pas venu.\n\n**2. Avec des habitudes passées :**\n• ✗ 我小时候常常去了公园。 → ✓ 我小时候**常常**去公园。 Enfant, j'allais souvent au parc.\n\n**3. Avec des verbes d'état ou de pensée** (是, 在, 像, 喜欢, 觉得, 知道, 认为…) quand il n'y a pas de changement :\n• ✗ 我昨天觉得了很累。 → ✓ 我昨天**觉得**很累。 Hier, je me sentais très fatigué.\n• ✗ 他以前是了老师。 → ✓ 他以前**是**老师。 Il était professeur avant.\n\n**4. Dans la construction 是…的** qui insiste sur les circonstances d'une action passée (quand, où, comment) :\n• ✗ 我是昨天来了的。 → ✓ 我是昨天来**的**。 C'est hier que je suis arrivé.\n\n**5. Devant un objet qui est une proposition** (après 说, 想, 觉得…), en général :\n• ✗ 他说了他不来。 → ✓ 他**说**他不来。 Il a dit qu'il ne venait pas.\n• Pour dire « j'ai décidé d'aller en Chine », la forme la plus naturelle est 我**决定**去中国**了**, avec 了₂ en fin de phrase.\n\n**6. Avec un adjectif qui décrit simplement :** ✗ 昨天天气很好了 → ✓ 昨天天气很好。",
        en: "This is often more important than knowing when to use it.\n\n**1. With the negation 没: no 了.** 没 already means \"the action didn't happen\".\n• ✗ 我没吃了饭。 → ✓ 我**没**吃饭。 I didn't eat.\n• ✗ 他没来了。 → ✓ 他**没**来。 He didn't come.\n\n**2. With past habits:**\n• ✗ 我小时候常常去了公园。 → ✓ 我小时候**常常**去公园。 As a child I often went to the park.\n\n**3. With stative or mental verbs** (是, 在, 像, 喜欢, 觉得, 知道, 认为…) when there's no change:\n• ✗ 我昨天觉得了很累。 → ✓ 我昨天**觉得**很累。 I felt very tired yesterday.\n• ✗ 他以前是了老师。 → ✓ 他以前**是**老师。 He used to be a teacher.\n\n**4. In the 是…的 construction** that stresses the circumstances of a past action (when, where, how):\n• ✗ 我是昨天来了的。 → ✓ 我是昨天来**的**。 It was yesterday that I arrived.\n\n**5. Before a clause object** (after 说, 想, 觉得…), as a rule:\n• ✗ 他说了他不来。 → ✓ 他**说**他不来。 He said he wasn't coming.\n• To say \"I've decided to go to China\", the most natural form is 我**决定**去中国**了**, with 了₂ at the end.\n\n**6. With an adjective that simply describes:** ✗ 昨天天气很好了 → ✓ 昨天天气很好。",
      },
      examples: [
        { zh: "我没吃早饭。", pinyin: "Wǒ méi chī zǎofàn.", tr: { fr: "Je n'ai pas pris de petit-déjeuner.", en: "I didn't have breakfast." } },
        { zh: "我小时候常常去公园。", pinyin: "Wǒ xiǎoshíhou chángcháng qù gōngyuán.", tr: { fr: "Enfant, j'allais souvent au parc.", en: "As a child I often went to the park." } },
        { zh: "我是坐飞机来的。", pinyin: "Wǒ shì zuò fēijī lái de.", tr: { fr: "Je suis venu en avion.", en: "I came by plane." } },
      ],
    },
    {
      heading: { fr: "Méthode : comment apprivoiser 了", en: "Method: how to tame 了" },
      body: {
        fr: "了 est réputé pour être la particule la plus difficile du chinois. Même des apprenants avancés hésitent. Voici comment progresser sans t'angoisser.\n\n**1. Commence par les modèles figés.** Apprends par cœur : 我饿了, 太好了, 下雨了, 我不去了, 我吃了, 我买了一本书, 你吃了饭再走吧. Ces phrases couvrent la majorité des besoins courants.\n\n**2. Pose-toi deux questions :**\n• « Est-ce que je raconte une action **réalisée** avec une **quantité** ou un **objet précis** ? » → 了₁ après le verbe.\n• « Est-ce que je signale un **changement** ou une **nouvelle situation** ? » → 了₂ en fin de phrase.\n\n**3. Pense « négation = 没, sans 了 ».** C'est la règle la plus simple et la plus rentable.\n\n**4. Écoute les natifs.** L'usage de 了 dépend aussi du rythme et de ce qui est « nouveau » dans la conversation. Les dialogues de Hanlu sont écrits pour montrer 了 dans des situations naturelles : repère-le à chaque fois et demande-toi s'il s'agit de 了₁ ou de 了₂.\n\n**5. Accepte l'imperfection.** Un 了 manquant ou en trop gêne rarement la compréhension. Mieux vaut parler avec quelques erreurs de 了 que de ne pas parler !",
        en: "了 is famous as the hardest particle in Chinese. Even advanced learners hesitate. Here's how to progress without stress.\n\n**1. Start with fixed models.** Learn these by heart: 我饿了, 太好了, 下雨了, 我不去了, 我吃了, 我买了一本书, 你吃了饭再走吧. They cover most everyday needs.\n\n**2. Ask yourself two questions:**\n• \"Am I reporting a **completed** action with a **quantity** or a **specific object**?\" → 了₁ after the verb.\n• \"Am I signalling a **change** or a **new situation**?\" → 了₂ at the end.\n\n**3. Think \"negation = 没, no 了\".** It's the simplest and most useful rule.\n\n**4. Listen to native speakers.** The use of 了 also depends on rhythm and on what's \"new\" in the conversation. Hanlu's dialogues are written to show 了 in natural situations: spot it every time and ask whether it's 了₁ or 了₂.\n\n**5. Accept imperfection.** A missing or extra 了 rarely blocks understanding. Better to speak with a few 了 errors than not to speak at all!",
      },
      examples: [
        { zh: "你吃了饭再走吧。", pinyin: "Nǐ chīle fàn zài zǒu ba.", tr: { fr: "Mange avant de partir.", en: "Have something to eat before you go." } },
        { zh: "我等了你半个小时了！", pinyin: "Wǒ děngle nǐ bàn gè xiǎoshí le!", tr: { fr: "Ça fait une demi-heure que je t'attends !", en: "I've been waiting for you for half an hour!" } },
      ],
    },
  ],
};

const deDeDe: Guide = {
  slug: "de-de-de",
  category: "grammar",
  readMinutes: 12,
  title: {
    fr: "的, 得, 地 : les trois « de » du chinois enfin démêlés",
    en: "的, 得, 地: the three Chinese \"de\" finally untangled",
  },
  summary: {
    fr: "Trois caractères, une seule prononciation : de. Apprends à choisir sans hésiter entre 的 (devant un nom), 地 (devant un verbe) et 得 (après un verbe), avec une règle simple et des exemples.",
    en: "Three characters, one pronunciation: de. Learn to choose confidently between 的 (before a noun), 地 (before a verb) and 得 (after a verb), with a simple rule and examples.",
  },
  sections: [
    {
      heading: { fr: "Trois caractères, un seul son", en: "Three characters, one sound" },
      body: {
        fr: "À l'oral, pas de problème : **的**, **得** et **地** se prononcent tous **de**, au ton neutre. On ne peut donc pas les confondre en parlant. C'est **à l'écrit** que les choses se compliquent — même pour les Chinois ! Les confusions entre 的, 得 et 地 sont parmi les fautes d'orthographe les plus fréquentes sur les réseaux sociaux chinois.\n\nLa règle de base tient en une ligne, qu'on peut visualiser comme un schéma :\n\n**… 的 + NOM**\n**… 地 + VERBE**\n**VERBE + 得 + …**\n\nAutrement dit :\n• **的** relie un élément à un **nom** qui le **suit** (possession, description).\n• **地** relie un adverbe de manière à un **verbe** qui le **suit** (comment on fait l'action).\n• **得** vient **après** un **verbe** (ou un adjectif) pour introduire un **complément** (comment l'action se passe, à quel degré, résultat).\n\nPour savoir lequel utiliser, **regarde ce qui vient juste avant et juste après** : c'est presque toujours suffisant.",
        en: "In speech there's no problem: **的**, **得** and **地** are all pronounced **de**, neutral tone. So you can't confuse them when speaking. It's **in writing** that things get tricky — even for Chinese people! Mixing up 的, 得 and 地 is one of the most common spelling mistakes on Chinese social media.\n\nThe basic rule fits on one line, and you can picture it as a diagram:\n\n**… 的 + NOUN**\n**… 地 + VERB**\n**VERB + 得 + …**\n\nIn other words:\n• **的** links something to a **noun** that **follows** (possession, description).\n• **地** links a manner adverbial to a **verb** that **follows** (how the action is done).\n• **得** comes **after** a **verb** (or adjective) to introduce a **complement** (how the action turns out, to what degree, result).\n\nTo decide which to use, **look at what comes right before and right after**: that's almost always enough.",
      },
      table: {
        head: [
          { fr: "Caractère", en: "Character" },
          { fr: "Position", en: "Position" },
          { fr: "Fonction", en: "Function" },
          { fr: "Exemple", en: "Example" },
        ],
        rows: [
          ["的", { fr: "… 的 + nom", en: "… 的 + noun" }, { fr: "possession, description du nom", en: "possession, describing a noun" }, "我的书, 漂亮的衣服"],
          ["地", { fr: "… 地 + verbe", en: "… 地 + verb" }, { fr: "manière de faire l'action", en: "manner of the action" }, "认真地学习"],
          ["得", { fr: "verbe/adj. + 得 + …", en: "verb/adj. + 得 + …" }, { fr: "degré, résultat, évaluation", en: "degree, result, evaluation" }, "说得很好"],
        ],
      },
    },
    {
      heading: { fr: "的 : le plus fréquent de tous", en: "的: the most frequent of all" },
      body: {
        fr: "**的** est le caractère **le plus fréquent** de la langue chinoise. Il relie un **déterminant** au **nom** qu'il précise. Comme on l'a vu dans le guide sur l'ordre des mots, **le déterminant vient toujours avant**.\n\n**1. Possession : Possesseur + 的 + nom**\n• 我**的**手机 — mon téléphone\n• 老师**的**办公室 — le bureau du professeur\n• 中国**的**首都 — la capitale de la Chine\n\n**2. Description : Adjectif + 的 + nom**\n• 很漂亮**的**花 — de très jolies fleurs\n• 新**的**电脑 — un ordinateur neuf\n\n**3. Proposition relative : Proposition + 的 + nom**\n• 我昨天买**的**衣服 — les vêtements que j'ai achetés hier\n• 喜欢唱歌**的**人 — les gens qui aiment chanter\n\n**4. Le nom peut être sous-entendu :**\n• 这本书是我**的**。 Ce livre est à moi (= le mien).\n• 红**的**好看。 Le rouge (celui qui est rouge) est plus joli.\n\n**Quand peut-on omettre 的 ?**\n• Avec la **famille et les relations proches** après un pronom : 我妈妈, 我朋友, 我们学校 (plus naturel que 我的妈妈).\n• Avec un **adjectif d'une syllabe** très courant : 好人, 新书, 大房子.\n• Dans des **noms composés** figés : 中国人, 汉语老师.\n\n**Mais** dès que l'adjectif est précédé de 很, 非常, etc., 的 devient obligatoire : ✗ 很漂亮花 → ✓ 很漂亮**的**花.",
        en: "**的** is the **most frequent character** in Chinese. It links a **modifier** to the **noun** it describes. As we saw in the word-order guide, **the modifier always comes first**.\n\n**1. Possession: Possessor + 的 + noun**\n• 我**的**手机 — my phone\n• 老师**的**办公室 — the teacher's office\n• 中国**的**首都 — the capital of China\n\n**2. Description: Adjective + 的 + noun**\n• 很漂亮**的**花 — very pretty flowers\n• 新**的**电脑 — a new computer\n\n**3. Relative clause: Clause + 的 + noun**\n• 我昨天买**的**衣服 — the clothes I bought yesterday\n• 喜欢唱歌**的**人 — people who like singing\n\n**4. The noun can be left out:**\n• 这本书是我**的**。 This book is mine.\n• 红**的**好看。 The red one looks nicer.\n\n**When can 的 be dropped?**\n• With **family and close relationships** after a pronoun: 我妈妈, 我朋友, 我们学校 (more natural than 我的妈妈).\n• With a very common **one-syllable adjective**: 好人, 新书, 大房子.\n• In set **compound nouns**: 中国人, 汉语老师.\n\n**But** as soon as the adjective has 很, 非常, etc. in front, 的 is required: ✗ 很漂亮花 → ✓ 很漂亮**的**花.",
      },
      examples: [
        { zh: "这是我的手机。", pinyin: "Zhè shì wǒ de shǒujī.", tr: { fr: "C'est mon téléphone.", en: "This is my phone." } },
        { zh: "我喜欢你昨天买的衣服。", pinyin: "Wǒ xǐhuan nǐ zuótiān mǎi de yīfu.", tr: { fr: "J'aime les vêtements que tu as achetés hier.", en: "I like the clothes you bought yesterday." } },
        { zh: "这本书是我的。", pinyin: "Zhè běn shū shì wǒ de.", tr: { fr: "Ce livre est à moi.", en: "This book is mine." } },
      ],
    },
    {
      heading: { fr: "地 : comment on fait l'action", en: "地: how the action is done" },
      body: {
        fr: "**地** transforme un adjectif (ou une expression) en **adverbe de manière**, un peu comme le suffixe **-ment** en français (« lent → lentement ») ou **-ly** en anglais. Il se place **entre l'adverbe et le verbe**.\n\n**Adjectif / expression + 地 + verbe**\n\n• 他**认真地**学习。 Il étudie sérieusement.\n• 孩子们**高兴地**跑过来。 Les enfants accourent joyeusement.\n• 她**慢慢地**说。 Elle parle lentement.\n• 我们要**好好地**准备。 Nous devons bien nous préparer.\n\n**Quand utiliser 地 ?** Surtout avec :\n• des adjectifs de **deux syllabes** : 认真, 高兴, 努力, 仔细, 安静 ;\n• des adjectifs **redoublés** : 慢慢, 好好, 高高兴兴 ;\n• des expressions plus longues : 一个一个**地**, 很快**地**.\n\n**Quand l'omettre ?** Avec les adverbes courts d'une syllabe ou les adverbes « vrais » (很, 都, 也, 常常, 一起…), pas de 地 : 快走！ (Marche vite !), 多吃点儿 (Mange davantage), 我们一起去.\n\n**Remarque :** 地 se prononce **de** dans cet emploi, mais **dì** quand il signifie « sol, terre » (地方, 地铁). Même caractère, deux mots différents.",
        en: "**地** turns an adjective (or phrase) into a **manner adverbial**, a bit like the English suffix **-ly** (\"slow → slowly\"). It sits **between the adverbial and the verb**.\n\n**Adjective / phrase + 地 + verb**\n\n• 他**认真地**学习。 He studies seriously.\n• 孩子们**高兴地**跑过来。 The children come running happily.\n• 她**慢慢地**说。 She speaks slowly.\n• 我们要**好好地**准备。 We need to prepare properly.\n\n**When to use 地?** Mainly with:\n• **two-syllable** adjectives: 认真, 高兴, 努力, 仔细, 安静;\n• **reduplicated** adjectives: 慢慢, 好好, 高高兴兴;\n• longer phrases: 一个一个**地**, 很快**地**.\n\n**When to drop it?** With short one-syllable adverbs or \"true\" adverbs (很, 都, 也, 常常, 一起…), no 地: 快走! (Walk fast!), 多吃点儿 (Eat more), 我们一起去.\n\n**Note:** 地 is pronounced **de** in this use, but **dì** when it means \"ground, earth\" (地方, 地铁). Same character, two different words.",
      },
      examples: [
        { zh: "他每天都认真地学习。", pinyin: "Tā měi tiān dōu rènzhēn de xuéxí.", tr: { fr: "Il étudie sérieusement tous les jours.", en: "He studies conscientiously every day." } },
        { zh: "请慢慢地说。", pinyin: "Qǐng mànmàn de shuō.", tr: { fr: "Parle lentement, s'il te plaît.", en: "Please speak slowly." } },
        { zh: "孩子们高兴地跑过来了。", pinyin: "Háizimen gāoxìng de pǎo guòlai le.", tr: { fr: "Les enfants sont accourus tout joyeux.", en: "The children came running over happily." } },
      ],
    },
    {
      heading: { fr: "得 : le résultat, le degré, l'évaluation", en: "得: result, degree, evaluation" },
      body: {
        fr: "**得** se place **après** un verbe (ou un adjectif) et introduit un **complément** qui **évalue** l'action : comment elle s'est passée, à quel point, avec quel résultat. C'est le **complément de degré** (程度补语).\n\n**Verbe + 得 + (très) + adjectif**\n• 他说**得**很快。 Il parle vite.\n• 你汉语说**得**真好！ Tu parles vraiment bien chinois !\n• 我昨天睡**得**不好。 J'ai mal dormi hier.\n\n**Différence clé avec 地 :**\n• 他**认真地**写。 Il écrit sérieusement. (地 : décrit l'attitude pendant l'action, **avant** le verbe)\n• 他写**得**很认真。 Il écrit de manière très appliquée / son écriture est soignée. (得 : **évalue** le résultat, **après** le verbe)\n\n**Avec un objet : on répète le verbe (ou on place l'objet devant).**\n• ✗ 他说汉语得很好。\n• ✓ 他**说**汉语**说**得很好。\n• ✓ 他汉语说得很好。 (objet en position de thème)\n\n**La négation porte sur le complément, pas sur le verbe :**\n• ✗ 他不说得很好。 → ✓ 他说得**不**好。 Il ne parle pas bien.\n\n**La question :** 他说得好**吗**？ / 他说得好**不好**？ / 他说得**怎么样**？\n\n**Adjectif + 得 + conséquence** (à un point tel que…) :\n• 我累**得**不想说话。 Je suis si fatigué que je n'ai pas envie de parler.\n• 他高兴**得**跳了起来。 Il était si content qu'il a sauté de joie.",
        en: "**得** comes **after** a verb (or adjective) and introduces a **complement** that **evaluates** the action: how it went, to what extent, with what result. This is the **complement of degree** (程度补语).\n\n**Verb + 得 + (very) + adjective**\n• 他说**得**很快。 He speaks fast.\n• 你汉语说**得**真好! Your Chinese is really good!\n• 我昨天睡**得**不好。 I slept badly last night.\n\n**Key difference from 地:**\n• 他**认真地**写。 He writes conscientiously. (地: describes the attitude during the action, **before** the verb)\n• 他写**得**很认真。 His writing is very careful. (得: **evaluates** the outcome, **after** the verb)\n\n**With an object: repeat the verb (or move the object to the front).**\n• ✗ 他说汉语得很好。\n• ✓ 他**说**汉语**说**得很好。\n• ✓ 他汉语说得很好。 (object as topic)\n\n**Negation goes on the complement, not the verb:**\n• ✗ 他不说得很好。 → ✓ 他说得**不**好。 He doesn't speak well.\n\n**Questions:** 他说得好**吗**? / 他说得好**不好**? / 他说得**怎么样**?\n\n**Adjective + 得 + consequence** (so… that…):\n• 我累**得**不想说话。 I'm so tired I don't feel like talking.\n• 他高兴**得**跳了起来。 He was so happy he jumped for joy.",
      },
      examples: [
        { zh: "你汉语说得真好！", pinyin: "Nǐ Hànyǔ shuō de zhēn hǎo!", tr: { fr: "Tu parles vraiment bien chinois !", en: "Your Chinese is really good!" } },
        { zh: "他跑步跑得很快。", pinyin: "Tā pǎobù pǎo de hěn kuài.", tr: { fr: "Il court très vite.", en: "He runs very fast." } },
        { zh: "我昨天睡得不好。", pinyin: "Wǒ zuótiān shuì de bù hǎo.", tr: { fr: "J'ai mal dormi hier.", en: "I didn't sleep well last night." } },
      ],
    },
    {
      heading: { fr: "得 dans les compléments de possibilité", en: "得 in potential complements" },
      body: {
        fr: "得 a un second emploi très fréquent : il se glisse **entre un verbe et son complément de résultat ou de direction** pour exprimer la **possibilité** (« arriver à, pouvoir »). La forme négative utilise **不** à la même place.\n\n**Verbe + 得 / 不 + résultat**\n• 听**得**懂 — arriver à comprendre (en écoutant) ; 听**不**懂 — ne pas comprendre\n• 看**得**见 — pouvoir voir ; 看**不**见 — ne pas voir\n• 吃**得**完 — pouvoir finir (de manger) ; 吃**不**完 — ne pas pouvoir tout manger\n• 回**得**来 — pouvoir revenir ; 回**不**来 — ne pas pouvoir revenir\n\nExemples :\n• 老师说的话你听**得**懂吗？ Tu comprends ce que dit le professeur ?\n• 字太小了，我看**不**清楚。 Les caractères sont trop petits, je n'arrive pas à les lire.\n• 菜太多了，我们吃**不**完。 Il y a trop de plats, on ne pourra pas tout finir.\n\nLa forme négative (听不懂, 看不见…) est **bien plus fréquente** que la forme positive. Retiens surtout **听不懂** et **看不懂** : ce sont deux phrases de survie !",
        en: "得 has a second very common use: it slips **between a verb and its result or direction complement** to express **possibility** (\"manage to, can\"). The negative form uses **不** in the same slot.\n\n**Verb + 得 / 不 + result**\n• 听**得**懂 — can understand (by listening); 听**不**懂 — can't understand\n• 看**得**见 — can see; 看**不**见 — can't see\n• 吃**得**完 — can finish (eating); 吃**不**完 — can't finish it all\n• 回**得**来 — can come back; 回**不**来 — can't come back\n\nExamples:\n• 老师说的话你听**得**懂吗? Can you understand what the teacher says?\n• 字太小了，我看**不**清楚。 The characters are too small, I can't read them clearly.\n• 菜太多了，我们吃**不**完。 There's too much food, we can't finish it.\n\nThe negative form (听不懂, 看不见…) is **much more common** than the positive. Above all remember **听不懂** and **看不懂**: they're survival phrases!",
      },
      examples: [
        { zh: "对不起，我听不懂。", pinyin: "Duìbuqǐ, wǒ tīng bu dǒng.", tr: { fr: "Désolé, je ne comprends pas.", en: "Sorry, I don't understand." } },
        { zh: "菜太多了，我们吃不完。", pinyin: "Cài tài duō le, wǒmen chī bu wán.", tr: { fr: "Il y a trop de plats, on ne pourra pas tout finir.", en: "There's too much food, we can't finish it." } },
      ],
    },
    {
      heading: { fr: "Les autres 的 : 是…的 et le 的 de fin de phrase", en: "The other 的: 是…的 and sentence-final 的" },
      body: {
        fr: "Au-delà du lien « … 的 + nom », 的 apparaît dans deux constructions très fréquentes où **aucun nom ne suit**. Ne te laisse pas piéger : c'est toujours **的**, jamais 得 ou 地.\n\n**1. La structure 是…的 : insister sur les circonstances.** Quand une action passée est déjà connue, on utilise 是…的 pour mettre en avant **quand**, **où**, **comment** ou **avec qui** elle s'est faite. 是 se place devant l'élément mis en valeur (il est souvent omis à l'oral) et 的 en fin de phrase.\n• 你**是**什么时候来**的**？ — Quand est-ce que tu es arrivé ?\n• 我**是**坐高铁来**的**。 — Je suis venu en TGV chinois.\n• 这本书**是**在北京买**的**。 — Ce livre, je l'ai acheté à Pékin.\nLa négation porte sur 是 : 我**不是**坐飞机来的。 Ce n'est pas en avion que je suis venu.\n\n**2. 的 en fin de phrase pour affirmer.** À l'oral, 的 en fin de phrase renforce une affirmation, avec une nuance de certitude ou de conviction : 他会来**的**。 Il viendra, c'est sûr. / 没问题**的**。 Aucun problème, je t'assure.\n\n**3. 的 pour classer.** 这个杯子是玻璃**的**。 Cette tasse est en verre. Le nom est sous-entendu (« une tasse de verre »).\n\n**Erreur fréquente :** ✗ 我是昨天到得。 → ✓ 我是昨天到**的**。 Après un verbe, si rien n'évalue l'action (pas de « très vite », « bien »…), ce n'est pas 得.",
        en: "Beyond the \"… 的 + noun\" link, 的 appears in two very common constructions where **no noun follows**. Don't be fooled: it's always **的**, never 得 or 地.\n\n**1. The 是…的 structure: stressing circumstances.** When a past action is already known, 是…的 highlights **when**, **where**, **how** or **with whom** it happened. 是 goes before the highlighted element (often dropped in speech) and 的 at the end.\n• 你**是**什么时候来**的**? — When did you get here?\n• 我**是**坐高铁来**的**。 — I came by high-speed train.\n• 这本书**是**在北京买**的**。 — I bought this book in Beijing.\nNegation goes on 是: 我**不是**坐飞机来的。 It wasn't by plane that I came.\n\n**2. Sentence-final 的 for emphasis.** In speech, a final 的 reinforces a statement with a note of certainty or conviction: 他会来**的**。 He'll come, for sure. / 没问题**的**。 No problem, trust me.\n\n**3. 的 for classifying.** 这个杯子是玻璃**的**。 This cup is made of glass. The noun is implied (\"a glass one\").\n\n**Common mistake:** ✗ 我是昨天到得。 → ✓ 我是昨天到**的**。 After a verb, if nothing evaluates the action (no \"very fast\", \"well\"…), it isn't 得.",
      },
      examples: [
        { zh: "你是什么时候来的？", pinyin: "Nǐ shì shénme shíhou lái de?", tr: { fr: "Quand est-ce que tu es arrivé ?", en: "When did you get here?" } },
        { zh: "我是坐高铁来的。", pinyin: "Wǒ shì zuò gāotiě lái de.", tr: { fr: "Je suis venu en train à grande vitesse.", en: "I came by high-speed train." } },
        { zh: "放心，他会来的。", pinyin: "Fàngxīn, tā huì lái de.", tr: { fr: "Ne t'inquiète pas, il viendra.", en: "Don't worry, he'll come." } },
      ],
    },
    {
      heading: { fr: "La méthode infaillible en 3 questions", en: "The foolproof 3-question method" },
      body: {
        fr: "Quand tu écris « de » et que tu hésites, pose-toi ces questions dans l'ordre :\n\n**1. Est-ce qu'un NOM suit directement ?** (ou pourrait suivre, s'il est sous-entendu) → **的**\n• 美丽___城市 → 城市 est un nom → **美丽的城市**\n\n**2. Est-ce qu'un VERBE suit directement, et ce qui précède décrit COMMENT on le fait ?** → **地**\n• 安静___看书 → 看 est un verbe → **安静地看书**\n\n**3. Est-ce qu'un VERBE ou un ADJECTIF précède, et ce qui suit ÉVALUE le résultat / le degré ?** → **得**\n• 跑___很快 → 跑 est un verbe, 很快 évalue → **跑得很快**\n\n**Exercice rapide** (réponses ci-dessous) :\n a) 他高兴___说。\n b) 这是妈妈做___菜。\n c) 她唱___非常好听。\n d) 他们努力___工作。\n e) 我累___不想动。\n\n**Réponses :** a) 地 — b) 的 — c) 得 — d) 地 — e) 得.",
        en: "When you're writing \"de\" and hesitate, ask these questions in order:\n\n**1. Does a NOUN follow directly?** (or could follow, if implied) → **的**\n• 美丽___城市 → 城市 is a noun → **美丽的城市**\n\n**2. Does a VERB follow directly, and what comes before describes HOW it's done?** → **地**\n• 安静___看书 → 看 is a verb → **安静地看书**\n\n**3. Does a VERB or ADJECTIVE come before, and what follows EVALUATES the result / degree?** → **得**\n• 跑___很快 → 跑 is a verb, 很快 evaluates → **跑得很快**\n\n**Quick exercise** (answers below):\n a) 他高兴___说。\n b) 这是妈妈做___菜。\n c) 她唱___非常好听。\n d) 他们努力___工作。\n e) 我累___不想动。\n\n**Answers:** a) 地 — b) 的 — c) 得 — d) 地 — e) 得.",
      },
      examples: [
        { zh: "这是妈妈做的菜。", pinyin: "Zhè shì māma zuò de cài.", tr: { fr: "C'est un plat fait par maman.", en: "This is a dish Mum made." } },
        { zh: "她唱得非常好听。", pinyin: "Tā chàng de fēicháng hǎotīng.", tr: { fr: "Elle chante merveilleusement bien.", en: "She sings beautifully." } },
        { zh: "他们努力地工作。", pinyin: "Tāmen nǔlì de gōngzuò.", tr: { fr: "Ils travaillent avec acharnement.", en: "They work hard." } },
      ],
      tip: {
        fr: "Moyen mnémotechnique : **地** contient 土 (la terre) : on marche sur la terre → un verbe suit. **得** contient 彳 (le pas) : on évalue le chemin déjà parcouru → après le verbe. **的**, c'est tout le reste → devant un nom.",
        en: "Mnemonic: **地** contains 土 (earth): you walk on the ground → a verb follows. **得** contains 彳 (step): you evaluate the road already travelled → after the verb. **的** is everything else → before a noun.",
      },
    },
  ],
};

const hsk3ExamStrategy: Guide = {
  slug: "hsk3-exam-strategy",
  category: "exam",
  readMinutes: 13,
  title: {
    fr: "Préparer le HSK 3.0 : niveaux, volume de travail et stratégie",
    en: "Preparing for HSK 3.0: levels, workload and strategy",
  },
  summary: {
    fr: "Comment fonctionne le nouveau standard HSK 3.0 à 9 niveaux, combien d'heures prévoir pour chaque niveau, et une méthode concrète pour progresser et réussir l'examen.",
    en: "How the new 9-level HSK 3.0 standard works, how many hours to plan for each level, and a concrete method to progress and pass the exam.",
  },
  sections: [
    {
      heading: { fr: "Le HSK 3.0 en bref", en: "HSK 3.0 in brief" },
      body: {
        fr: "Le **HSK** (汉语水平考试 Hànyǔ Shuǐpíng Kǎoshì) est l'examen officiel de chinois pour les non-natifs, organisé par le Centre for Language Education and Cooperation (CLEC), sous l'égide du ministère chinois de l'Éducation. Il est reconnu par les universités chinoises, de nombreux employeurs et pour certaines bourses.\n\nEn 2021, la Chine a publié un nouveau référentiel : les **« Chinese Proficiency Grading Standards for International Chinese Language Education »** (norme GF0025-2021), qu'on appelle couramment **HSK 3.0**. Il remplace l'ancien système à 6 niveaux (HSK 2.0, en vigueur depuis 2009) par **9 niveaux** répartis en **3 paliers** :\n\n• **Élémentaire** (初等) : niveaux 1, 2, 3\n• **Intermédiaire** (中等) : niveaux 4, 5, 6\n• **Avancé** (高等) : niveaux 7, 8, 9 (évalués ensemble)\n\nLe nouveau standard décrit chaque niveau selon **quatre dimensions** : les **syllabes**, les **caractères**, le **vocabulaire** et la **grammaire**, ainsi que des compétences de communication (écouter, parler, lire, écrire, traduire).\n\nLa principale différence avec l'ancien HSK : les exigences sont **nettement plus élevées**, surtout pour les premiers niveaux. L'ancien HSK 1 demandait 150 mots ; le nouveau niveau 1 en demande **500**.\n\n**Important :** la transition entre l'ancien et le nouveau format d'examen se fait progressivement, et les modalités précises (sections, durée, nombre de questions, seuil de réussite) peuvent évoluer. **Vérifie toujours le format en vigueur sur le site officiel** (chinesetest.cn) avant de t'inscrire.",
        en: "The **HSK** (汉语水平考试 Hànyǔ Shuǐpíng Kǎoshì) is the official Chinese proficiency test for non-native speakers, run by the Centre for Language Education and Cooperation (CLEC) under China's Ministry of Education. It's recognised by Chinese universities, many employers and for some scholarships.\n\nIn 2021, China published a new framework: the **\"Chinese Proficiency Grading Standards for International Chinese Language Education\"** (standard GF0025-2021), commonly called **HSK 3.0**. It replaces the old 6-level system (HSK 2.0, in use since 2009) with **9 levels** grouped into **3 bands**:\n\n• **Elementary** (初等): levels 1, 2, 3\n• **Intermediate** (中等): levels 4, 5, 6\n• **Advanced** (高等): levels 7, 8, 9 (tested together)\n\nThe new standard describes each level along **four dimensions**: **syllables**, **characters**, **vocabulary** and **grammar**, plus communication skills (listening, speaking, reading, writing, translation).\n\nThe main difference from the old HSK: requirements are **much higher**, especially at the lower levels. Old HSK 1 required 150 words; new level 1 requires **500**.\n\n**Important:** the switch from the old to the new exam format is gradual, and the exact details (sections, duration, number of questions, pass mark) may change. **Always check the current format on the official website** (chinesetest.cn) before registering.",
      },
    },
    {
      heading: { fr: "Ce que chaque niveau exige", en: "What each level requires" },
      body: {
        fr: "Voici les volumes **cumulés** fixés par le standard HSK 3.0 pour le vocabulaire et les caractères (chiffres arrondis pour les caractères). Chaque niveau inclut tout ce qui précède.\n\nDeux remarques :\n• Le vocabulaire augmente beaucoup plus vite que les caractères : à partir du niveau 3, la plupart des nouveaux mots sont des **combinaisons de caractères déjà connus**. C'est pourquoi une bonne maîtrise des caractères de base accélère énormément la suite.\n• Le standard distingue les caractères à **reconnaître** et ceux à savoir **écrire à la main** ; ces derniers sont moins nombreux.\n\nLes niveaux 7 à 9 visent une maîtrise quasi professionnelle : lire des textes spécialisés, suivre des cours universitaires en chinois, traduire.",
        en: "Here are the **cumulative** totals set by the HSK 3.0 standard for vocabulary and characters (character figures rounded). Each level includes everything before it.\n\nTwo remarks:\n• Vocabulary grows much faster than characters: from level 3 on, most new words are **combinations of characters you already know**. That's why solid command of basic characters speeds everything up enormously.\n• The standard distinguishes characters you must **recognise** from those you must **hand-write**; the latter are fewer.\n\nLevels 7 to 9 target near-professional mastery: reading specialised texts, following university courses in Chinese, translating.",
      },
      table: {
        head: [
          { fr: "Niveau", en: "Level" },
          { fr: "Mots (cumulés)", en: "Words (cumulative)" },
          { fr: "Caractères (cumulés)", en: "Characters (cumulative)" },
          { fr: "Ce que tu sais faire", en: "What you can do" },
        ],
        rows: [
          ["1", "500", "300", { fr: "Se présenter, chiffres, heure, besoins simples", en: "Introduce yourself, numbers, time, simple needs" }],
          ["2", "1 272", "600", { fr: "Conversations quotidiennes courtes", en: "Short everyday conversations" }],
          ["3", "2 245", "900", { fr: "Voyager, raconter, exprimer un avis simple", en: "Travel, narrate, give a simple opinion" }],
          ["4", "3 245", "1 200", { fr: "Discussions générales, textes simples authentiques", en: "General discussions, simple authentic texts" }],
          ["5", "4 316", "1 500", { fr: "Presse accessible, travail en chinois simple", en: "Accessible press, working in simple Chinese" }],
          ["6", "5 456", "1 800", { fr: "La plupart des sujets, films, articles", en: "Most topics, films, articles" }],
          ["7–9", "11 092", "3 000", { fr: "Usage académique et professionnel", en: "Academic and professional use" }],
        ],
      },
    },
    {
      heading: { fr: "Combien d'heures faut-il ?", en: "How many hours does it take?" },
      body: {
        fr: "Il n'existe **pas de chiffre officiel** du nombre d'heures par niveau HSK 3.0, et tout dépend de ton point de départ (as-tu déjà appris une langue asiatique ? Lis-tu des caractères japonais ?), de ta régularité et de la qualité de ta méthode. Voici néanmoins des **ordres de grandeur réalistes** pour un adulte francophone ou anglophone débutant, en comptant tout le travail (cours, révisions, écoute, lecture) :\n\n• **Niveau 1** : environ 100 à 150 heures\n• **Niveau 2** : +150 à 200 heures\n• **Niveau 3** : +200 à 300 heures\n• **Niveaux 4 à 6** : plusieurs centaines d'heures chacun\n• **Niveaux 7 à 9** : plusieurs milliers d'heures au total\n\nÀ titre de comparaison, le Foreign Service Institute américain classe le mandarin parmi les langues les plus longues à apprendre pour un anglophone, avec environ **2 200 heures** pour atteindre une maîtrise professionnelle.\n\n**Ce que ça veut dire concrètement :** avec **45 minutes par jour**, tous les jours, tu peux viser le niveau 1 en 4 à 6 mois, le niveau 2 environ un an après avoir commencé, et le niveau 3 en un an et demi à deux ans. Avec une heure et demie par jour, divise à peu près par deux.\n\nLa variable la plus importante n'est pas le talent : c'est la **régularité**. 30 minutes par jour battent largement 4 heures le dimanche.",
        en: "There is **no official figure** for hours per HSK 3.0 level, and everything depends on your starting point (have you learned an Asian language? Do you read Japanese kanji?), your consistency and the quality of your method. Still, here are **realistic orders of magnitude** for an adult English- or French-speaking beginner, counting all work (lessons, review, listening, reading):\n\n• **Level 1**: about 100–150 hours\n• **Level 2**: +150–200 hours\n• **Level 3**: +200–300 hours\n• **Levels 4–6**: several hundred hours each\n• **Levels 7–9**: several thousand hours in total\n\nFor comparison, the US Foreign Service Institute ranks Mandarin among the hardest languages for English speakers, at around **2,200 hours** to reach professional working proficiency.\n\n**What this means in practice:** with **45 minutes a day**, every day, you can aim for level 1 in 4–6 months, level 2 about a year after starting, and level 3 in eighteen months to two years. With an hour and a half a day, roughly halve that.\n\nThe most important variable isn't talent: it's **consistency**. 30 minutes a day easily beats 4 hours on a Sunday.",
      },
    },
    {
      heading: { fr: "Niveaux 1 à 3 : construire des fondations solides", en: "Levels 1–3: building solid foundations" },
      body: {
        fr: "**Niveau 1 — Les bases absolues.**\n• Maîtrise le **pinyin et les tons** dès le début (voir nos guides). C'est l'investissement le plus rentable de tout ton apprentissage.\n• Apprends les **caractères** en même temps que les mots, pas « plus tard ». Ne reste pas au pinyin seul : c'est une béquille qui devient un piège.\n• Grammaire typique à ce stade : phrases avec 是, 有, 在, questions avec 吗 et mots interrogatifs, négation 不/没, classificateurs, 的, 了 (premiers emplois).\n\n**Niveau 2 — Le décollage.**\n• Le vocabulaire fait plus que doubler : **la répétition espacée devient indispensable**.\n• Commence à **écouter** du chinois tous les jours, même 10 minutes : dialogues, podcasts pour débutants.\n• Grammaire typique à ce stade : 过, 着, compléments de résultat, 比 (comparaison), 会/能/可以, 正在.\n\n**Niveau 3 — Vers l'autonomie.**\n• Lis des **textes suivis** : lectures graduées, dialogues longs. Le but est de lire sans traduire mot à mot.\n• Travaille la **production** : écris de courts paragraphes, parle avec un partenaire ou un professeur.\n• Grammaire typique à ce stade : 把, 被, compléments de direction et de possibilité, 是…的, 一…就…, 虽然…但是…, 越来越.\n\nLa répartition exacte des points de grammaire par niveau est fixée par le référentiel ; à chaque niveau, Hanlu suit ce **référentiel officiel** (mots, caractères et points de grammaire) : tu sais toujours précisément ce qui te reste à apprendre.",
        en: "**Level 1 — The absolute basics.**\n• Master **pinyin and tones** from the start (see our guides). It's the best investment of your whole learning journey.\n• Learn **characters** together with words, not \"later\". Don't stay on pinyin alone: it's a crutch that becomes a trap.\n• Typical grammar at this stage: sentences with 是, 有, 在, questions with 吗 and question words, negation 不/没, measure words, 的, 了 (first uses).\n\n**Level 2 — Take-off.**\n• Vocabulary more than doubles: **spaced repetition becomes essential**.\n• Start **listening** to Chinese every day, even 10 minutes: dialogues, beginner podcasts.\n• Typical grammar at this stage: 过, 着, result complements, 比 (comparison), 会/能/可以, 正在.\n\n**Level 3 — Towards independence.**\n• Read **connected texts**: graded readers, longer dialogues. The goal is to read without translating word by word.\n• Work on **output**: write short paragraphs, speak with a partner or tutor.\n• Typical grammar at this stage: 把, 被, direction and potential complements, 是…的, 一…就…, 虽然…但是…, 越来越.\n\nThe exact level-by-level assignment of grammar points is set by the standard; at every level, Hanlu follows that **official standard** (words, characters and grammar points), so you always know exactly what's left to learn.",
      },
      examples: [
        { zh: "我学了一年汉语了。", pinyin: "Wǒ xuéle yì nián Hànyǔ le.", tr: { fr: "Ça fait un an que j'apprends le chinois.", en: "I've been learning Chinese for a year." } },
        { zh: "我想参加HSK考试。", pinyin: "Wǒ xiǎng cānjiā HSK kǎoshì.", tr: { fr: "Je voudrais passer l'examen du HSK.", en: "I'd like to take the HSK exam." } },
      ],
    },
    {
      heading: { fr: "Niveaux 4 à 9 : passer à la langue réelle", en: "Levels 4–9: moving to real-world Chinese" },
      body: {
        fr: "À partir du niveau 4, les manuels ne suffisent plus : il faut **s'immerger dans du chinois authentique**.\n\n**Niveaux 4 à 6 :**\n• **Lecture extensive** : lis beaucoup de textes un peu en dessous de ton niveau (95 % de mots connus). Le volume compte plus que la difficulté.\n• **Écoute active** : séries, vidéos, podcasts natifs, d'abord avec sous-titres chinois, puis sans.\n• **Vocabulaire en contexte** : ajoute à tes révisions les mots rencontrés dans tes lectures, avec leur phrase d'exemple.\n• **Écriture régulière** : un journal, des messages, des résumés d'articles. Fais-les corriger.\n• Travaille les **connecteurs** et les **structures formelles** (因此, 而且, 不仅…而且…, 即使…也…) : ils font la différence à l'écrit.\n\n**Niveaux 7 à 9 :**\n• Lecture de presse, d'essais, de littérature ; compréhension d'expressions idiomatiques (成语).\n• **Traduction** et **interprétation** font partie des compétences visées.\n• C'est un niveau d'usage universitaire ou professionnel : l'idéal est de **vivre, étudier ou travailler en chinois**.\n\nLe principe à tous les niveaux : **compréhension massive + production régulière + révision espacée**.",
        en: "From level 4 onwards, textbooks are no longer enough: you need to **immerse yourself in authentic Chinese**.\n\n**Levels 4–6:**\n• **Extensive reading**: read lots of texts slightly below your level (95% known words). Volume matters more than difficulty.\n• **Active listening**: series, videos, native podcasts, first with Chinese subtitles, then without.\n• **Vocabulary in context**: add words from your reading to your reviews, with their example sentence.\n• **Regular writing**: a journal, messages, article summaries. Get them corrected.\n• Work on **connectives** and **formal structures** (因此, 而且, 不仅…而且…, 即使…也…): they make the difference in writing.\n\n**Levels 7–9:**\n• Reading news, essays, literature; understanding idioms (成语).\n• **Translation** and **interpreting** are among the target skills.\n• This is academic or professional level: ideally, **live, study or work in Chinese**.\n\nThe principle at every level: **massive input + regular output + spaced review**.",
      },
    },
    {
      heading: { fr: "Les 8 dernières semaines avant l'examen", en: "The final 8 weeks before the exam" },
      body: {
        fr: "**Semaines 8 à 5 : combler les lacunes.**\n• Fais un **examen blanc** complet (épreuves officielles d'entraînement ou tests de niveau) pour identifier tes points faibles.\n• Passe en revue **toute la liste de vocabulaire** de ton niveau : Hanlu te montre les mots non encore maîtrisés.\n• Revois les **points de grammaire** du référentiel un par un.\n\n**Semaines 4 à 2 : s'entraîner dans les conditions réelles.**\n• Un examen blanc **chronométré** par semaine. La gestion du temps est souvent ce qui fait échouer, bien plus que le niveau.\n• Entraîne-toi sur **le support de l'examen** : si tu passes l'examen sur ordinateur, entraîne-toi à **taper en pinyin** rapidement ; sur papier, à **écrire les caractères** à la main.\n• Analyse chaque erreur : vocabulaire inconnu ? grammaire ? lecture trop lente ? piège de l'énoncé ?\n\n**Dernière semaine : consolider.**\n• Pas de nouveau contenu. Révisions légères, écoute quotidienne, sommeil.\n• Vérifie la **logistique** : convocation, pièce d'identité, trajet, horaires.\n\n**Le jour J :**\n• Lis les **questions avant d'écouter** l'enregistrement quand c'est possible, pour savoir quoi chercher.\n• Ne reste pas bloqué sur une question : avance, et reviens-y si tu as le temps.\n• Ne laisse **aucune réponse vide** aux questions à choix multiple.",
        en: "**Weeks 8–5: fill the gaps.**\n• Take a full **mock exam** (official practice papers or level tests) to find your weak points.\n• Go through **the whole vocabulary list** for your level: Hanlu shows you which words you haven't mastered yet.\n• Review the standard's **grammar points** one by one.\n\n**Weeks 4–2: practise under real conditions.**\n• One **timed** mock exam per week. Time management fails more candidates than language level.\n• Practise on **the exam medium**: if you're sitting a computer-based test, practise **typing in pinyin** quickly; on paper, **hand-writing characters**.\n• Analyse every mistake: unknown vocabulary? grammar? reading too slowly? a trick in the question?\n\n**Final week: consolidate.**\n• No new content. Light review, daily listening, sleep.\n• Check **logistics**: admission ticket, ID, journey, timings.\n\n**On the day:**\n• Read the **questions before hearing** the recording when possible, so you know what to listen for.\n• Don't get stuck on one question: move on and come back if time allows.\n• Leave **no blank answers** on multiple-choice questions.",
      },
      tip: {
        fr: "Le HSK évalue la **compréhension** autant que les connaissances : entraîne-toi à lire vite. Chronomètre-toi sur des textes courts et cherche à comprendre l'idée générale sans t'arrêter sur chaque mot.",
        en: "The HSK tests **comprehension** as much as knowledge: practise reading fast. Time yourself on short texts and aim to grasp the gist without stopping at every word.",
      },
    },
    {
      heading: { fr: "Les erreurs qui coûtent cher", en: "Costly mistakes" },
      body: {
        fr: "• **Apprendre des listes de mots sans contexte.** Un mot isolé s'oublie vite et ne s'utilise pas. Apprends-le dans une phrase.\n• **Négliger l'écoute.** C'est souvent la partie la plus difficile pour les autodidactes. Écoute du chinois **tous les jours**.\n• **Ignorer les caractères** en se reposant sur le pinyin : au-delà du niveau 2, c'est intenable.\n• **Bachoter uniquement des annales.** Les examens blancs servent à se tester, pas à apprendre. La base, c'est la langue.\n• **Viser trop haut, trop vite.** Passer un niveau que tu maîtrises bien est plus motivant (et plus utile sur un CV) que de rater un niveau au-dessus.\n• **Arrêter après l'examen.** Le HSK est une étape, pas une fin. Ce qui compte, c'est de pouvoir **utiliser** le chinois.\n\n**En résumé :** régularité quotidienne, fondations solides en prononciation et en caractères, révision espacée, beaucoup d'écoute et de lecture, et des examens blancs dans les dernières semaines. C'est exactement le parcours que Hanlu organise pour toi, niveau par niveau.",
        en: "• **Learning word lists without context.** An isolated word is quickly forgotten and never used. Learn it in a sentence.\n• **Neglecting listening.** It's often the hardest part for self-learners. Listen to Chinese **every day**.\n• **Ignoring characters** and relying on pinyin: beyond level 2 that's unsustainable.\n• **Only cramming past papers.** Mock exams are for testing yourself, not for learning. The foundation is the language itself.\n• **Aiming too high, too fast.** Passing a level you've mastered is more motivating (and more useful on a CV) than failing the one above.\n• **Stopping after the exam.** The HSK is a milestone, not the finish line. What matters is being able to **use** Chinese.\n\n**In short:** daily consistency, solid foundations in pronunciation and characters, spaced review, lots of listening and reading, and mock exams in the final weeks. That's exactly the path Hanlu lays out for you, level by level.",
      },
    },
  ],
};

const spacedRepetitionMethod: Guide = {
  slug: "spaced-repetition-method",
  category: "method",
  readMinutes: 12,
  title: {
    fr: "La répétition espacée (SRS/FSRS) : retenir le vocabulaire chinois pour de bon",
    en: "Spaced repetition (SRS/FSRS): remember Chinese vocabulary for good",
  },
  summary: {
    fr: "Pourquoi on oublie, comment la répétition espacée et l'algorithme FSRS contrent l'oubli, et comment organiser une routine quotidienne efficace avec les révisions de Hanlu.",
    en: "Why we forget, how spaced repetition and the FSRS algorithm fight forgetting, and how to build an effective daily routine with Hanlu's reviews.",
  },
  sections: [
    {
      heading: { fr: "La courbe de l'oubli", en: "The forgetting curve" },
      body: {
        fr: "À la fin du XIXe siècle, le psychologue allemand **Hermann Ebbinghaus** a mesuré sur lui-même la vitesse à laquelle on oublie des informations nouvelles. Son constat, confirmé depuis par de nombreuses études : **l'oubli est rapide au début, puis ralentit**. Sans révision, une grande partie de ce qu'on vient d'apprendre disparaît en quelques jours.\n\nC'est exactement ce que vit tout apprenant de chinois : tu apprends 20 mots lundi, tu les connais parfaitement le soir… et le jeudi, la moitié s'est volatilisée. Ce n'est **pas un problème de mémoire** : c'est le fonctionnement normal du cerveau, qui trie ce qui semble important.\n\nLa bonne nouvelle, c'est la seconde découverte : **chaque révision réussie ralentit l'oubli**. Après une première révision, le souvenir tient plus longtemps ; après la deuxième, encore plus longtemps, et ainsi de suite. Au bout de quelques révisions bien placées, un mot peut rester en mémoire des mois, voire des années.\n\nLe chinois est particulièrement concerné : pour chaque mot, il faut retenir **le caractère, le son, le ton et le sens**. Sans méthode, c'est un travail de Sisyphe. Avec la répétition espacée, c'est gérable.",
        en: "In the late 19th century, German psychologist **Hermann Ebbinghaus** measured, on himself, how fast we forget new information. His finding, confirmed by many studies since: **forgetting is fast at first, then slows down**. Without review, much of what you've just learned vanishes within days.\n\nThat's exactly what every Chinese learner experiences: you learn 20 words on Monday, know them perfectly that evening… and by Thursday half of them are gone. It's **not a memory problem**: it's how the brain normally works, filtering out what seems unimportant.\n\nThe good news is the second finding: **each successful review slows forgetting**. After one review, the memory lasts longer; after the second, longer still, and so on. After a few well-timed reviews, a word can stay with you for months or even years.\n\nChinese is particularly affected: for every word you have to remember **the character, the sound, the tone and the meaning**. Without a method, it's a Sisyphean task. With spaced repetition, it's manageable.",
      },
    },
    {
      heading: { fr: "Le principe de la répétition espacée", en: "The principle of spaced repetition" },
      body: {
        fr: "La **répétition espacée** (SRS, *spaced repetition system*) repose sur une idée simple : **réviser chaque élément juste avant de l'oublier**.\n\n• Réviser **trop tôt** = perte de temps (tu le savais encore très bien, le cerveau n'apprend presque rien).\n• Réviser **trop tard** = tu as oublié, il faut réapprendre.\n• Réviser **au bon moment**, quand le souvenir commence à s'effacer mais que tu arrives encore à le retrouver avec un petit effort = **l'effet maximal**.\n\nConcrètement, les intervalles **s'allongent** à chaque réussite. Par exemple : 1 jour, puis 3 jours, puis 1 semaine, 3 semaines, 2 mois, 6 mois… En cas d'échec, l'intervalle se raccourcit et le mot revient plus vite.\n\nRésultat : tu passes ton temps de révision **là où il est utile** — sur les mots fragiles — et tu ne perds pas de temps sur ceux que tu maîtrises. Avec 15 à 20 minutes par jour, tu peux entretenir plusieurs milliers de mots.\n\nLe second ingrédient est le **rappel actif** (*active recall*) : on ne relit pas passivement une fiche, on essaie de **retrouver** la réponse avant de la voir. Cet effort de récupération est ce qui renforce le plus la mémoire. Relire sa liste de vocabulaire donne une illusion de maîtrise ; se tester crée une vraie maîtrise.",
        en: "**Spaced repetition** (SRS, spaced repetition system) rests on a simple idea: **review each item just before you'd forget it**.\n\n• Reviewing **too early** = wasted time (you still knew it well, so your brain learns almost nothing).\n• Reviewing **too late** = you've forgotten and must relearn.\n• Reviewing **at the right time**, when the memory is starting to fade but you can still retrieve it with a little effort = **maximum effect**.\n\nIn practice, intervals **get longer** with each success. For example: 1 day, then 3 days, then 1 week, 3 weeks, 2 months, 6 months… If you fail, the interval shrinks and the word comes back sooner.\n\nResult: your review time goes **where it's useful** — on fragile words — and none is wasted on words you've mastered. With 15–20 minutes a day, you can maintain several thousand words.\n\nThe second ingredient is **active recall**: instead of passively rereading a card, you try to **retrieve** the answer before seeing it. That retrieval effort is what strengthens memory most. Rereading your vocab list gives an illusion of mastery; testing yourself builds real mastery.",
      },
    },
    {
      heading: { fr: "FSRS : l'algorithme moderne", en: "FSRS: the modern algorithm" },
      body: {
        fr: "Pendant des décennies, la plupart des logiciels de cartes mémoire utilisaient des variantes de l'algorithme **SM-2** (créé dans les années 1980 pour SuperMemo) : des règles fixes qui multiplient l'intervalle par un facteur à chaque réussite.\n\n**FSRS** (*Free Spaced Repetition Scheduler*) est un algorithme open source plus récent, adopté notamment par Anki en 2023. Au lieu de règles fixes, il s'appuie sur un **modèle de la mémoire** qui estime, pour chaque carte, trois grandeurs :\n\n• la **difficulté** (D) : à quel point cet élément est difficile pour toi ;\n• la **stabilité** (S) : combien de temps le souvenir tient avant de tomber sous un certain seuil ;\n• la **récupérabilité** (R) : la probabilité que tu te souviennes de la carte **aujourd'hui**.\n\nL'algorithme programme la prochaine révision au moment où ta probabilité de t'en souvenir descend jusqu'à un **taux de rétention cible** (souvent autour de 90 %). Ses paramètres peuvent être ajustés à partir de l'historique de révisions.\n\nAvantages par rapport à SM-2 :\n• **moins de révisions** pour le même taux de mémorisation ;\n• une meilleure gestion des **retards** (si tu rates quelques jours, les cartes sont reprogrammées intelligemment) ;\n• des intervalles adaptés à **ta** mémoire.\n\nHanlu utilise un planificateur de type FSRS pour tes révisions : tu n'as pas à te demander quoi réviser, ni quand.",
        en: "For decades, most flashcard software used variants of the **SM-2** algorithm (created in the 1980s for SuperMemo): fixed rules that multiply the interval by a factor after each success.\n\n**FSRS** (Free Spaced Repetition Scheduler) is a more recent open-source algorithm, adopted notably by Anki in 2023. Instead of fixed rules, it relies on a **model of memory** that estimates three quantities for each card:\n\n• **difficulty** (D): how hard this item is for you;\n• **stability** (S): how long the memory lasts before dropping below a given threshold;\n• **retrievability** (R): the probability you'll remember the card **today**.\n\nThe algorithm schedules the next review for when your probability of recall drops to a **target retention rate** (often around 90%). Its parameters can be fitted to your review history.\n\nAdvantages over SM-2:\n• **fewer reviews** for the same retention;\n• better handling of **delays** (if you miss a few days, cards are rescheduled sensibly);\n• intervals tailored to **your** memory.\n\nHanlu uses an FSRS-style scheduler for your reviews: you never have to wonder what to review, or when.",
      },
    },
    {
      heading: { fr: "Bien noter ses réponses", en: "Rating your answers well" },
      body: {
        fr: "Après chaque carte, tu indiques **à quel point tu t'en es souvenu**. Les systèmes de type FSRS utilisent généralement quatre boutons :\n\n• **À revoir** (Again) : tu n'as pas trouvé, ou tu t'es trompé. La carte revient très vite.\n• **Difficile** (Hard) : tu as trouvé, mais avec beaucoup d'effort ou d'hésitation.\n• **Correct** (Good) : tu as trouvé après une courte réflexion. **C'est le bouton normal**, celui que tu devrais utiliser le plus souvent.\n• **Facile** (Easy) : réponse immédiate, sans aucun effort.\n\n**Sois honnête.** La tentation est grande de cliquer sur « Correct » quand on a « presque » trouvé. Mais l'algorithme ne peut t'aider que si tes réponses reflètent la réalité. Tricher, c'est se retrouver dans un mois avec des mots qu'on croyait connaître.\n\n**Qu'est-ce que « trouver » ?** Pour le chinois, définis ton critère et tiens-t'y. Par exemple, pour une carte « caractère → sens et prononciation » : si tu as le sens mais **pas le ton**, c'est « Difficile » ou « À revoir ». Le ton fait partie du mot !\n\n**Ne note pas « Facile » par réflexe.** Ce bouton espace beaucoup la carte. Réserve-le aux mots vraiment évidents.",
        en: "After each card, you rate **how well you remembered it**. FSRS-style systems usually use four buttons:\n\n• **Again**: you didn't get it, or got it wrong. The card comes back very soon.\n• **Hard**: you got it, but with a lot of effort or hesitation.\n• **Good**: you got it after a moment's thought. **This is the normal button**, the one you should use most.\n• **Easy**: instant answer, no effort at all.\n\n**Be honest.** It's tempting to click \"Good\" when you \"almost\" got it. But the algorithm can only help you if your ratings reflect reality. Cheat now and in a month you'll have words you thought you knew.\n\n**What counts as \"getting it\"?** For Chinese, set your criterion and stick to it. For example, for a \"character → meaning and pronunciation\" card: if you have the meaning but **not the tone**, that's \"Hard\" or \"Again\". The tone is part of the word!\n\n**Don't press \"Easy\" by reflex.** It spaces the card out a lot. Keep it for truly obvious words.",
      },
      table: {
        head: [
          { fr: "Bouton", en: "Button" },
          { fr: "Quand l'utiliser", en: "When to use it" },
          { fr: "Effet", en: "Effect" },
        ],
        rows: [
          [{ fr: "À revoir", en: "Again" }, { fr: "Oublié ou faux", en: "Forgotten or wrong" }, { fr: "Revient aujourd'hui", en: "Comes back today" }],
          [{ fr: "Difficile", en: "Hard" }, { fr: "Trouvé avec peine", en: "Got it with difficulty" }, { fr: "Intervalle court", en: "Short interval" }],
          [{ fr: "Correct", en: "Good" }, { fr: "Trouvé normalement", en: "Got it normally" }, { fr: "Intervalle normal", en: "Normal interval" }],
          [{ fr: "Facile", en: "Easy" }, { fr: "Évident, immédiat", en: "Obvious, instant" }, { fr: "Intervalle long", en: "Long interval" }],
        ],
      },
    },
    {
      heading: { fr: "Des cartes efficaces pour le chinois", en: "Effective cards for Chinese" },
      body: {
        fr: "Toutes les cartes ne se valent pas. Quelques principes issus de la recherche et de l'expérience des apprenants :\n\n**1. Une carte = une chose à retenir.** Ne mets pas 5 sens différents sur une carte. Si un mot a deux sens très différents, fais deux cartes.\n\n**2. Travaille dans les deux sens, mais pas en même temps.**\n• **Reconnaissance** (caractère → sens + son) : c'est ce qui sert à lire. Commence par là.\n• **Production** (sens → caractère/pinyin) : c'est ce qui sert à parler et écrire. Plus difficile, mais indispensable.\n\n**3. Toujours avec une phrase d'exemple.** Le mot 意思 seul est abstrait ; « 这个字是什么意思？ » (Que veut dire ce caractère ?) est mémorable et utile.\n\n**4. Toujours avec le son.** Écoute l'audio à chaque révision et répète à voix haute. Tu entraînes ainsi ta mémoire auditive et ta prononciation en même temps.\n\n**5. Ajoute des moyens mnémotechniques** pour les mots rebelles : décomposition en radicaux, image mentale, histoire drôle.\n\n**6. N'ajoute pas trop de nouvelles cartes.** Chaque nouvelle carte génère des révisions pendant des semaines. **10 à 20 nouveaux mots par jour** est un rythme soutenable pour la plupart des gens. Au-delà, la pile de révisions explose.",
        en: "Not all cards are equal. A few principles from research and learners' experience:\n\n**1. One card = one thing to remember.** Don't put 5 different meanings on one card. If a word has two very different meanings, make two cards.\n\n**2. Work in both directions, but not at the same time.**\n• **Recognition** (character → meaning + sound): what you need for reading. Start here.\n• **Production** (meaning → character/pinyin): what you need for speaking and writing. Harder, but essential.\n\n**3. Always with an example sentence.** The word 意思 on its own is abstract; \"这个字是什么意思?\" (What does this character mean?) is memorable and useful.\n\n**4. Always with audio.** Listen at every review and repeat aloud. You train your auditory memory and pronunciation at the same time.\n\n**5. Add mnemonics** for stubborn words: breaking into radicals, a mental image, a funny story.\n\n**6. Don't add too many new cards.** Each new card generates reviews for weeks. **10–20 new words a day** is a sustainable pace for most people. Beyond that, the review pile explodes.",
      },
      examples: [
        { zh: "这个字是什么意思？", pinyin: "Zhège zì shì shénme yìsi?", tr: { fr: "Que veut dire ce caractère ?", en: "What does this character mean?" } },
        { zh: "我每天复习生词。", pinyin: "Wǒ měi tiān fùxí shēngcí.", tr: { fr: "Je révise le nouveau vocabulaire tous les jours.", en: "I review new words every day." } },
      ],
    },
    {
      heading: { fr: "Ta routine quotidienne avec Hanlu", en: "Your daily routine with Hanlu" },
      body: {
        fr: "Voici une routine de **30 à 45 minutes** qui fonctionne pour la grande majorité des apprenants :\n\n**1. Les révisions d'abord (10–20 min).** Ouvre la section **Révision** et fais toutes les cartes dues du jour. C'est la priorité absolue : c'est ce qui protège tout ce que tu as déjà appris. Fais-les de préférence **le matin** ou à heure fixe.\n\n**2. Une nouvelle leçon (15–20 min).** Lis le dialogue, écoute-le, étudie les points de grammaire, fais les exercices. Les nouveaux mots de la leçon rejoignent automatiquement ta pile de révisions.\n\n**3. De l'écoute ou de la lecture (5–10 min).** Réécoute un dialogue déjà étudié, fais du *shadowing* (répéter en même temps que l'audio), ou lis un texte de ton niveau.\n\n**Les jours chargés :** fais au moins les révisions, même 5 minutes. Garder la chaîne intacte compte plus que la durée.\n\n**Si tu as pris du retard** (vacances, maladie) : ne panique pas et **n'ajoute pas de nouveaux mots** tant que la pile n'est pas revenue à un niveau normal. Étale le rattrapage sur plusieurs jours. Un algorithme comme FSRS gère bien les retards.\n\n**Suis ta progression** : nombre de mots maîtrisés, série de jours consécutifs, taux de réussite. Un taux de réussite autour de 85–90 % est idéal ; s'il est beaucoup plus bas, ralentis les nouvelles cartes.",
        en: "Here's a **30–45 minute** routine that works for the vast majority of learners:\n\n**1. Reviews first (10–20 min).** Open the **Review** section and clear all of today's due cards. This is the top priority: it protects everything you've already learned. Ideally do them **in the morning** or at a fixed time.\n\n**2. One new lesson (15–20 min).** Read the dialogue, listen to it, study the grammar points, do the exercises. The lesson's new words automatically join your review pile.\n\n**3. Listening or reading (5–10 min).** Replay a dialogue you've already studied, do some shadowing (repeating along with the audio), or read a text at your level.\n\n**Busy days:** do at least your reviews, even 5 minutes. Keeping the chain unbroken matters more than duration.\n\n**If you've fallen behind** (holiday, illness): don't panic and **don't add new words** until the pile is back to normal. Spread the catch-up over several days. An algorithm like FSRS handles delays well.\n\n**Track your progress**: words mastered, daily streak, success rate. A success rate around 85–90% is ideal; if it's much lower, slow down on new cards.",
      },
      tip: {
        fr: "Associe tes révisions à une habitude existante : le café du matin, le trajet en métro, la pause déjeuner. Une habitude « accrochée » à une autre tient beaucoup mieux.",
        en: "Attach your reviews to an existing habit: morning coffee, the metro ride, lunch break. A habit \"anchored\" to another one sticks much better.",
      },
    },
    {
      heading: { fr: "Ce que la répétition espacée ne fait pas", en: "What spaced repetition doesn't do" },
      body: {
        fr: "Le SRS est l'outil le plus efficace pour **retenir**. Mais il ne suffit pas à lui seul pour **parler** chinois.\n\n• **Il ne remplace pas l'exposition à la langue.** Connaître 2 000 mots sur des cartes ne garantit pas de les reconnaître dans une conversation rapide. Il faut aussi **beaucoup écouter et lire**.\n• **Il ne remplace pas la pratique orale.** Les cartes entraînent la mémoire, pas la fluidité. Parle, même seul, même avec des erreurs : décris ta journée à voix haute, répète des dialogues, trouve un partenaire d'échange.\n• **Il ne remplace pas la compréhension.** Mémoriser une structure sans la comprendre mène à des phrases bancales. C'est pourquoi Hanlu associe les révisions à des **explications de grammaire** et à des **dialogues**.\n\nLa formule gagnante : **comprendre** (leçons, explications) → **mémoriser** (répétition espacée) → **utiliser** (écoute, lecture, expression). La répétition espacée est le moteur du milieu, celui qui fait que ce que tu apprends **reste**.",
        en: "SRS is the most effective tool for **retaining**. But on its own, it won't make you **speak** Chinese.\n\n• **It doesn't replace exposure to the language.** Knowing 2,000 words on cards doesn't mean recognising them in fast conversation. You also need to **listen and read a lot**.\n• **It doesn't replace speaking practice.** Cards train memory, not fluency. Speak, even alone, even with mistakes: describe your day aloud, repeat dialogues, find a language-exchange partner.\n• **It doesn't replace understanding.** Memorising a structure without understanding it leads to wonky sentences. That's why Hanlu pairs reviews with **grammar explanations** and **dialogues**.\n\nThe winning formula: **understand** (lessons, explanations) → **memorise** (spaced repetition) → **use** (listening, reading, speaking). Spaced repetition is the engine in the middle, the one that makes what you learn **stick**.",
      },
      examples: [
        { zh: "学习汉语要每天练习。", pinyin: "Xuéxí Hànyǔ yào měi tiān liànxí.", tr: { fr: "Pour apprendre le chinois, il faut pratiquer tous les jours.", en: "Learning Chinese takes daily practice." } },
      ],
    },
  ],
};

const chineseCultureEssentials: Guide = {
  slug: "chinese-culture-essentials",
  category: "culture",
  readMinutes: 14,
  title: {
    fr: "Culture chinoise : l'essentiel à savoir (politesse, noms, repas, fêtes, nombres)",
    en: "Chinese culture essentials: etiquette, names, meals, festivals, numbers",
  },
  summary: {
    fr: "Les codes culturels indispensables pour communiquer avec des Chinois : saluer, s'adresser à quelqu'un, les noms, la table, les cadeaux, les grandes fêtes et la symbolique des nombres.",
    en: "The cultural codes you need to communicate with Chinese people: greetings, forms of address, names, table manners, gifts, major festivals and number symbolism.",
  },
  sections: [
    {
      heading: { fr: "Saluer et s'adresser aux gens", en: "Greeting and addressing people" },
      body: {
        fr: "**你好 et 您好.** 你好 (nǐ hǎo) est la salutation standard. **您好** (nín hǎo) est sa version **polie**, pour les personnes âgées, les supérieurs, les clients. Entre amis, on dit souvent simplement le prénom, ou **嗨** (hāi, « salut »).\n\n**« Tu as mangé ? »** Entre voisins ou connaissances, surtout chez les personnes âgées, on entend encore **吃了吗？** (Chī le ma?) — « Tu as mangé ? ». Ce n'est pas une invitation : c'est une salutation, comme « Ça va ? ». On répond simplement 吃了 ou 还没呢.\n\n**Les titres avant tout.** En Chine, on s'adresse volontiers aux gens par leur **nom de famille + titre ou fonction** : 王老师 (Professeur Wang), 李医生 (Docteur Li), 张经理 (Directeur Zhang). C'est plus respectueux que le prénom seul.\n\n**La famille élargie des inconnus.** On appelle souvent les inconnus avec des termes familiaux : **叔叔** (shūshu, « tonton ») et **阿姨** (āyí, « tata ») pour les adultes plus âgés, **大爷** / **奶奶** pour les personnes âgées, **哥** / **姐** pour quelqu'un d'un peu plus âgé que soi. Au restaurant, on interpelle le personnel avec **服务员** (fúwùyuán) ou simplement **你好**.\n\n**La poignée de main** est la norme dans un contexte professionnel. **Pas de bises**, et on évite les contacts physiques avec les personnes qu'on connaît peu.",
        en: "**你好 and 您好.** 你好 (nǐ hǎo) is the standard greeting. **您好** (nín hǎo) is the **polite** version, for elders, superiors and customers. Among friends, people often just use the first name, or **嗨** (hāi, \"hi\").\n\n**\"Have you eaten?\"** Among neighbours or acquaintances, especially older people, you still hear **吃了吗?** (Chī le ma?) — \"Have you eaten?\". It's not an invitation: it's a greeting, like \"How's it going?\". Just answer 吃了 or 还没呢.\n\n**Titles first.** In China, people are commonly addressed by **surname + title or job**: 王老师 (Teacher Wang), 李医生 (Doctor Li), 张经理 (Manager Zhang). This is more respectful than a first name alone.\n\n**Strangers as family.** Strangers are often addressed with family terms: **叔叔** (shūshu, \"uncle\") and **阿姨** (āyí, \"auntie\") for older adults, **大爷** / **奶奶** for elderly people, **哥** / **姐** for someone slightly older than you. In a restaurant, call staff with **服务员** (fúwùyuán) or simply **你好**.\n\n**Handshakes** are the norm in professional settings. **No cheek kisses**, and avoid physical contact with people you don't know well.",
      },
      examples: [
        { zh: "王老师，您好！", pinyin: "Wáng lǎoshī, nín hǎo!", tr: { fr: "Bonjour, professeur Wang !", en: "Hello, Teacher Wang!" } },
        { zh: "阿姨，这个多少钱？", pinyin: "Āyí, zhège duōshao qián?", tr: { fr: "Madame, combien coûte ceci ?", en: "Excuse me (auntie), how much is this?" } },
        { zh: "你吃了吗？", pinyin: "Nǐ chī le ma?", tr: { fr: "Tu as mangé ? (salutation)", en: "Have you eaten? (greeting)" } },
      ],
    },
    {
      heading: { fr: "Les noms chinois", en: "Chinese names" },
      body: {
        fr: "**Le nom de famille vient en premier.** Dans 王小明 (Wáng Xiǎomíng), **王** est le nom de famille et **小明** le prénom. C'est l'inverse de l'ordre français et anglais. Beaucoup de Chinois qui travaillent avec l'étranger inversent leur nom ou adoptent un prénom occidental pour simplifier.\n\n**Peu de noms de famille, très partagés.** Quelques noms dominent : **王 Wáng, 李 Lǐ, 张 Zhāng, 刘 Liú, 陈 Chén** comptent chacun des dizaines de millions de personnes. Les noms de famille sont presque tous d'**un seul caractère** (quelques-uns en ont deux, comme 欧阳 Ōuyáng ou 司马 Sīmǎ).\n\n**Des prénoms choisis pour leur sens.** Il n'y a pas de liste de prénoms comme en France : les parents composent le prénom (un ou deux caractères) pour son **sens** et sa **sonorité**. 明 (lumineux), 华 (splendide, la Chine), 伟 (grand), 丽 (belle), 静 (calme), 杰 (remarquable)… Un prénom exprime souvent un souhait des parents.\n\n**Les femmes gardent leur nom** après le mariage. Les enfants prennent généralement le nom du père.\n\n**Demander le nom poliment :**\n• 您贵姓？ (Nín guìxìng?) — « Quel est votre honorable nom de famille ? » (très poli)\n• 你叫什么名字？ (Nǐ jiào shénme míngzi?) — « Comment tu t'appelles ? »\n\n**Ton nom chinois.** Beaucoup d'apprenants reçoivent ou choisissent un nom chinois, souvent inspiré des sons de leur nom d'origine. Demande conseil à un natif : un bon nom chinois a un sens positif et sonne naturel.",
        en: "**The surname comes first.** In 王小明 (Wáng Xiǎomíng), **王** is the surname and **小明** the given name. That's the reverse of English order. Many Chinese people working internationally flip their name or adopt a Western first name to keep things simple.\n\n**Few surnames, widely shared.** A handful dominate: **王 Wáng, 李 Lǐ, 张 Zhāng, 刘 Liú, 陈 Chén** each belong to tens of millions of people. Surnames are almost all **a single character** (a few have two, like 欧阳 Ōuyáng or 司马 Sīmǎ).\n\n**Given names chosen for meaning.** There's no fixed list of first names: parents compose the name (one or two characters) for its **meaning** and **sound**. 明 (bright), 华 (splendid, China), 伟 (great), 丽 (beautiful), 静 (calm), 杰 (outstanding)… A given name often expresses the parents' wishes.\n\n**Women keep their surname** after marriage. Children usually take the father's surname.\n\n**Asking someone's name politely:**\n• 您贵姓? (Nín guìxìng?) — \"What is your honourable surname?\" (very polite)\n• 你叫什么名字? (Nǐ jiào shénme míngzi?) — \"What's your name?\"\n\n**Your Chinese name.** Many learners receive or choose a Chinese name, often inspired by the sounds of their own. Ask a native speaker for advice: a good Chinese name has a positive meaning and sounds natural.",
      },
      examples: [
        { zh: "您贵姓？——我姓王。", pinyin: "Nín guìxìng? — Wǒ xìng Wáng.", tr: { fr: "Quel est votre nom ? — Je m'appelle Wang.", en: "May I ask your surname? — My surname is Wang." } },
        { zh: "我叫王小明。", pinyin: "Wǒ jiào Wáng Xiǎomíng.", tr: { fr: "Je m'appelle Wang Xiaoming.", en: "My name is Wang Xiaoming." } },
      ],
    },
    {
      heading: { fr: "À table", en: "At the table" },
      body: {
        fr: "Le repas est au cœur de la vie sociale chinoise. Quelques règles pour être à l'aise :\n\n**Les plats se partagent.** On commande plusieurs plats pour toute la table et chacun se sert au fur et à mesure, souvent grâce à un plateau tournant. On ne commande pas « son » plat comme en Occident. Chacun a en général son bol de riz ou de soupe.\n\n**Les baguettes :**\n• ✗ Ne **plante jamais** tes baguettes verticalement dans le riz : cela rappelle l'encens des funérailles.\n• ✗ Ne tape pas sur ton bol avec les baguettes, ne les pointe pas vers quelqu'un.\n• ✓ Pose-les sur le repose-baguettes ou en travers de ton bol.\n\n**L'hôte régale.** Quand on est invité, c'est l'hôte qui commande et qui paie. Entre amis, on voit souvent des « batailles » pour payer l'addition : c'est une marque de générosité. Le partage de l'addition (**AA制**, AA zhì) se répand chez les jeunes.\n\n**Porter un toast.** On trinque souvent avec **干杯！** (gānbēi, « cul sec ! »). Par respect, on tient son verre **un peu plus bas** que celui d'une personne plus âgée ou plus importante. Dans les repas d'affaires, les toasts peuvent être nombreux.\n\n**Servir les autres.** Il est poli de servir le thé ou de mettre un morceau de choix dans le bol d'un invité. Quand quelqu'un te sert du thé, tu peux tapoter la table avec deux doigts pour dire merci.\n\n**Finir ou pas son assiette ?** Laisser un peu de nourriture dans les plats partagés montre que l'hôte a été généreux. Cependant, les campagnes contre le gaspillage alimentaire ont rendu le fait de tout finir de plus en plus apprécié.",
        en: "Meals are at the heart of Chinese social life. A few rules to feel at ease:\n\n**Dishes are shared.** Several dishes are ordered for the whole table and everyone helps themselves as they go, often from a lazy Susan. You don't order \"your own\" dish as in the West. Everyone usually has their own bowl of rice or soup.\n\n**Chopsticks:**\n• ✗ **Never stick** your chopsticks upright in rice: it's reminiscent of funeral incense.\n• ✗ Don't tap your bowl with them or point them at people.\n• ✓ Rest them on the chopstick rest or across your bowl.\n\n**The host treats.** When you're invited, the host orders and pays. Among friends you'll often see \"battles\" over the bill: a sign of generosity. Splitting the bill (**AA制**, AA zhì) is spreading among young people.\n\n**Toasting.** People often toast with **干杯!** (gānbēi, \"bottoms up!\"). As a sign of respect, hold your glass **slightly lower** than that of someone older or more senior. Business dinners can involve many toasts.\n\n**Serving others.** It's polite to pour tea or put a choice morsel in a guest's bowl. When someone pours you tea, you can tap the table with two fingers to say thanks.\n\n**Clear your plate or not?** Leaving some food in the shared dishes shows the host was generous. However, campaigns against food waste have made finishing everything increasingly appreciated.",
      },
      examples: [
        { zh: "干杯！", pinyin: "Gānbēi!", tr: { fr: "Santé ! (litt. « videz les verres »)", en: "Cheers! (lit. \"dry the glass\")" } },
        { zh: "今天我请客。", pinyin: "Jīntiān wǒ qǐngkè.", tr: { fr: "Aujourd'hui, c'est moi qui invite.", en: "Today it's my treat." } },
        { zh: "多吃点儿！", pinyin: "Duō chī diǎnr!", tr: { fr: "Mange donc ! (litt. « mange davantage »)", en: "Eat up! (lit. \"eat more\")" } },
      ],
    },
    {
      heading: { fr: "La « face », la modestie et les cadeaux", en: "\"Face\", modesty and gifts" },
      body: {
        fr: "**La face (面子 miànzi).** La notion de « face » désigne la **dignité et la réputation sociale** d'une personne. On évite de faire « perdre la face » à quelqu'un en public : pas de critique directe devant les autres, pas de refus trop brutal. On préfère des formules indirectes : 我考虑一下 (« je vais y réfléchir ») peut vouloir dire non.\n\n**La modestie.** Quand on te fait un compliment, la réponse traditionnelle n'est pas « merci » mais une forme de **modestie** :\n• 你的汉语说得真好！ — **哪里哪里** (nǎli nǎli, « mais non, pas du tout ») ou **还差得远呢** (« j'ai encore beaucoup à apprendre »).\nAujourd'hui, un simple **谢谢** est aussi très courant, surtout chez les jeunes.\n\n**Les relations (关系 guānxi).** Le réseau de relations personnelles compte beaucoup, y compris dans le travail. On prend le temps de faire connaissance, de partager un repas, avant de parler affaires.\n\n**Les cadeaux :**\n• On offre et on reçoit un cadeau **à deux mains**, en signe de respect (de même pour une carte de visite).\n• Le destinataire refuse parfois poliment une ou deux fois avant d'accepter.\n• On n'ouvre généralement **pas le cadeau devant la personne** (habitude qui évolue).\n• À éviter : une **horloge** (送钟 sòng zhōng se prononce comme 送终, « accompagner un mourant »), des **poires** (梨 lí ≈ 离, « se séparer »), des objets coupants, des **parapluies** (伞 sǎn ≈ 散, « se disperser »), et les emballages **blancs** ou noirs (couleurs du deuil).\n• Le **rouge** et le **doré** sont des couleurs de fête et de chance.",
        en: "**Face (面子 miànzi).** \"Face\" means a person's **dignity and social standing**. You avoid making someone \"lose face\" in public: no direct criticism in front of others, no blunt refusals. Indirect phrases are preferred: 我考虑一下 (\"I'll think about it\") may mean no.\n\n**Modesty.** When you're paid a compliment, the traditional answer isn't \"thank you\" but a show of **modesty**:\n• 你的汉语说得真好! — **哪里哪里** (nǎli nǎli, \"oh, not at all\") or **还差得远呢** (\"I still have a long way to go\").\nToday a simple **谢谢** is also very common, especially among young people.\n\n**Relationships (关系 guānxi).** Personal networks matter a lot, including at work. People take time to get to know each other and share a meal before talking business.\n\n**Gifts:**\n• Give and receive gifts **with both hands**, as a sign of respect (the same goes for business cards).\n• The recipient may politely decline once or twice before accepting.\n• Gifts are traditionally **not opened in front of the giver** (a habit that's changing).\n• Avoid: a **clock** (送钟 sòng zhōng sounds like 送终, \"attending a dying person\"), **pears** (梨 lí ≈ 离, \"to part\"), sharp objects, **umbrellas** (伞 sǎn ≈ 散, \"to break up\"), and **white** or black wrapping (mourning colours).\n• **Red** and **gold** are colours of celebration and luck.",
      },
      examples: [
        { zh: "你的汉语说得真好！——哪里哪里。", pinyin: "Nǐ de Hànyǔ shuō de zhēn hǎo! — Nǎli nǎli.", tr: { fr: "Tu parles super bien chinois ! — Oh, pas du tout.", en: "Your Chinese is great! — Oh, not at all." } },
        { zh: "这是我的一点儿心意。", pinyin: "Zhè shì wǒ de yìdiǎnr xīnyì.", tr: { fr: "C'est un petit quelque chose de ma part.", en: "It's just a small token of my appreciation." } },
      ],
    },
    {
      heading: { fr: "Les grandes fêtes", en: "The major festivals" },
      body: {
        fr: "Les fêtes traditionnelles suivent le **calendrier lunaire** : leur date change donc chaque année dans le calendrier grégorien.\n\n**春节 Chūnjié — la fête du Printemps (Nouvel An chinois).** Entre fin janvier et mi-février. C'est la fête la plus importante de l'année : des centaines de millions de personnes rentrent dans leur famille (c'est la plus grande migration humaine annuelle, le 春运). On prend le **repas du réveillon** (年夜饭) en famille, on mange des **raviolis** (饺子) dans le nord, on colle des **sentences parallèles** rouges (春联) sur les portes, on offre des **enveloppes rouges** (红包) contenant de l'argent aux enfants — et aujourd'hui aussi par WeChat. On se souhaite **新年快乐！** ou **过年好！**\n\n**元宵节 Yuánxiāojié — la fête des Lanternes.** Le 15e jour du 1er mois lunaire, elle clôt les fêtes du Nouvel An : lanternes, devinettes, boulettes de riz gluant (汤圆 / 元宵).\n\n**清明节 Qīngmíngjié — la fête de la Pure Clarté.** Début avril. On honore les ancêtres en **nettoyant leurs tombes** ; c'est aussi un moment de promenade printanière.\n\n**端午节 Duānwǔjié — la fête des Bateaux-Dragons.** Le 5e jour du 5e mois lunaire (en général en juin). **Courses de bateaux-dragons** et **粽子** (zòngzi, riz gluant en feuilles de bambou), en mémoire du poète Qu Yuan.\n\n**中秋节 Zhōngqiūjié — la fête de la Mi-Automne.** Le 15e jour du 8e mois lunaire (septembre ou début octobre), à la pleine lune. Fête des retrouvailles familiales : on admire la lune et on mange des **gâteaux de lune** (月饼).\n\n**国庆节 Guóqìngjié — la fête nationale**, le 1er octobre, suivie d'une semaine de congés (la « Semaine d'or »).",
        en: "Traditional festivals follow the **lunar calendar**, so their Gregorian date changes every year.\n\n**春节 Chūnjié — Spring Festival (Chinese New Year).** Between late January and mid-February. The most important festival of the year: hundreds of millions of people travel home (the world's largest annual human migration, 春运). Families share the **New Year's Eve dinner** (年夜饭), eat **dumplings** (饺子) in the north, paste red **couplets** (春联) on doors, and give children **red envelopes** (红包) with money — nowadays via WeChat too. People wish each other **新年快乐!** or **过年好!**\n\n**元宵节 Yuánxiāojié — Lantern Festival.** On the 15th day of the 1st lunar month, it closes the New Year period: lanterns, riddles, sweet glutinous rice balls (汤圆 / 元宵).\n\n**清明节 Qīngmíngjié — Tomb-Sweeping Day.** Early April. Ancestors are honoured by **sweeping their graves**; it's also a time for spring outings.\n\n**端午节 Duānwǔjié — Dragon Boat Festival.** The 5th day of the 5th lunar month (usually June). **Dragon-boat races** and **粽子** (zòngzi, sticky rice wrapped in bamboo leaves), in memory of the poet Qu Yuan.\n\n**中秋节 Zhōngqiūjié — Mid-Autumn Festival.** The 15th day of the 8th lunar month (September or early October), at the full moon. A festival of family reunion: people admire the moon and eat **mooncakes** (月饼).\n\n**国庆节 Guóqìngjié — National Day**, 1 October, followed by a week of holidays (\"Golden Week\").",
      },
      table: {
        head: [
          { fr: "Fête", en: "Festival" },
          { fr: "Date", en: "Date" },
          { fr: "À manger", en: "Food" },
          { fr: "Vœu typique", en: "Typical greeting" },
        ],
        rows: [
          ["春节", { fr: "1er jour du 1er mois lunaire", en: "1st day of 1st lunar month" }, "饺子, 年糕", "新年快乐！"],
          ["元宵节", { fr: "15e jour du 1er mois lunaire", en: "15th day of 1st lunar month" }, "汤圆", "元宵节快乐！"],
          ["清明节", { fr: "vers le 4–5 avril", en: "around 4–5 April" }, "青团", "—"],
          ["端午节", { fr: "5e jour du 5e mois lunaire", en: "5th day of 5th lunar month" }, "粽子", "端午安康！"],
          ["中秋节", { fr: "15e jour du 8e mois lunaire", en: "15th day of 8th lunar month" }, "月饼", "中秋节快乐！"],
        ],
      },
    },
    {
      heading: { fr: "Les nombres porte-bonheur et porte-malheur", en: "Lucky and unlucky numbers" },
      body: {
        fr: "En chinois, beaucoup de mots se ressemblent par le son. Les nombres ont donc pris des connotations selon les mots dont ils sont **homophones** ou presque.\n\n• **8 (八 bā)** : **le chiffre le plus porte-bonheur**, car il rappelle **发** (fā, dans 发财 « faire fortune »). Les numéros de téléphone ou plaques d'immatriculation avec beaucoup de 8 se vendent très cher. Les Jeux olympiques de Pékin ont commencé le 8/8/2008 à 20 h 08 !\n• **6 (六 liù)** : évoque **流** (liú, « couler ») → les choses se passent bien. **666** est aussi un compliment en ligne : « trop fort ! ».\n• **9 (九 jiǔ)** : se prononce comme **久** (jiǔ, « longtemps ») → longévité, amour durable. Très apprécié pour les mariages.\n• **4 (四 sì)** : ressemble à **死** (sǐ, « mort »). **Le chiffre à éviter** : certains immeubles n'ont pas de 4e étage (ni de 14e, 24e…), comme notre « 13 ».\n• **2 (二 / 两)** : plutôt positif (« les bonnes choses vont par paires »), sauf **二** employé seul à propos d'une personne, qui signifie « bête » en argot.\n\n**Les nombres sur internet :** les Chinois utilisent des nombres comme abréviations : **520** (wǔ èr líng ≈ 我爱你, « je t'aime »), **88** (bā bā ≈ « bye bye »), **666** (« génial »). Le 20 mai (5/20) est devenu une sorte de Saint-Valentin !\n\n**Compter sur ses doigts :** les Chinois ont des gestes d'une seule main pour tous les chiffres de 1 à 10. Par exemple, 6 se fait avec le pouce et l'auriculaire tendus, 8 avec le pouce et l'index en « L ». Très utile au marché !",
        en: "In Chinese, many words sound alike, so numbers have taken on connotations from words they're **homophones** (or near-homophones) of.\n\n• **8 (八 bā)**: **the luckiest number**, because it recalls **发** (fā, in 发财 \"to get rich\"). Phone numbers and licence plates full of 8s sell for a fortune. The Beijing Olympics opened on 8/8/2008 at 8:08 pm!\n• **6 (六 liù)**: evokes **流** (liú, \"to flow\") → things go smoothly. **666** is also online praise: \"awesome!\".\n• **9 (九 jiǔ)**: sounds like **久** (jiǔ, \"long-lasting\") → longevity, enduring love. Popular for weddings.\n• **4 (四 sì)**: sounds like **死** (sǐ, \"death\"). **The number to avoid**: some buildings have no 4th floor (or 14th, 24th…), like \"13\" in the West.\n• **2 (二 / 两)**: generally positive (\"good things come in pairs\"), except **二** used alone about a person, which is slang for \"silly\".\n\n**Numbers online:** Chinese internet users use numbers as shorthand: **520** (wǔ èr líng ≈ 我爱你, \"I love you\"), **88** (bā bā ≈ \"bye bye\"), **666** (\"awesome\"). 20 May (5/20) has become a kind of Valentine's Day!\n\n**Counting on your fingers:** Chinese people have one-handed gestures for every number from 1 to 10. For example, 6 is thumb and little finger out, 8 is thumb and index finger in an \"L\". Very handy at the market!",
      },
      examples: [
        { zh: "八在中国是一个很吉利的数字。", pinyin: "Bā zài Zhōngguó shì yí gè hěn jílì de shùzì.", tr: { fr: "En Chine, le 8 est un chiffre très porte-bonheur.", en: "In China, 8 is a very lucky number." } },
        { zh: "很多楼没有四层。", pinyin: "Hěn duō lóu méiyǒu sì céng.", tr: { fr: "Beaucoup d'immeubles n'ont pas de 4e étage.", en: "Many buildings have no fourth floor." } },
      ],
    },
    {
      heading: { fr: "La Chine d'aujourd'hui : quelques repères pratiques", en: "China today: some practical pointers" },
      body: {
        fr: "La culture traditionnelle cohabite avec une société ultra-connectée. Quelques réalités utiles à connaître :\n\n• **Le paiement mobile est roi.** On paie presque tout avec **微信** (WeChat) ou **支付宝** (Alipay) en scannant un QR code — même au marché. L'argent liquide est encore accepté mais de plus en plus rare.\n• **微信 (WeChat)** est bien plus qu'une messagerie : c'est l'outil pour échanger ses contacts (on se « scanne » : 我扫你吧), payer, réserver, travailler. On demande plus souvent « Tu as WeChat ? » (你有微信吗？) qu'un numéro de téléphone.\n• **Les messages vocaux** sont très utilisés : prépare-toi à écouter beaucoup de chinois oral !\n• **L'eau chaude.** Beaucoup de Chinois boivent de l'eau chaude (热水) plutôt que froide, et c'est le conseil universel en cas de rhume : 多喝热水！\n• **Les dialectes.** Le **普通话** (pǔtōnghuà, mandarin standard) est compris partout, mais tu entendras le cantonais, le shanghaïen, le sichuanais… qui sont souvent incompréhensibles entre eux. Ce que tu apprends avec Hanlu, c'est le mandarin standard, la langue commune de tout le pays.\n• **La diversité.** La Chine compte officiellement **56 ethnies**. Les Han (汉族) sont majoritaires ; les 55 autres (Zhuang, Hui, Ouïghours, Tibétains, Mongols…) ont leurs propres langues et traditions. La cuisine aussi varie énormément : épicée au Sichuan, sucrée à Shanghai, à base de blé dans le nord et de riz dans le sud.\n\nLa meilleure attitude : **curiosité et humilité**. Les Chinois sont généralement ravis qu'un étranger fasse l'effort d'apprendre leur langue, et pardonnent volontiers les maladresses culturelles.",
        en: "Traditional culture coexists with an ultra-connected society. A few useful realities:\n\n• **Mobile payment rules.** People pay for almost everything with **微信** (WeChat) or **支付宝** (Alipay) by scanning a QR code — even at the market. Cash is still accepted but increasingly rare.\n• **微信 (WeChat)** is much more than a messaging app: it's how people swap contacts (you \"scan\" each other: 我扫你吧), pay, book and work. People ask \"Do you have WeChat?\" (你有微信吗?) more often than for a phone number.\n• **Voice messages** are hugely popular: get ready to listen to lots of spoken Chinese!\n• **Hot water.** Many Chinese people drink hot water (热水) rather than cold, and it's the universal advice for a cold: 多喝热水!\n• **Dialects.** **普通话** (pǔtōnghuà, Standard Mandarin) is understood everywhere, but you'll hear Cantonese, Shanghainese, Sichuanese… often mutually unintelligible. What you learn with Hanlu is Standard Mandarin, the common language of the whole country.\n• **Diversity.** China officially has **56 ethnic groups**. The Han (汉族) are the majority; the other 55 (Zhuang, Hui, Uyghur, Tibetan, Mongol…) have their own languages and traditions. Food varies enormously too: spicy in Sichuan, sweet in Shanghai, wheat-based in the north and rice-based in the south.\n\nThe best attitude: **curiosity and humility**. Chinese people are generally delighted when a foreigner makes the effort to learn their language, and readily forgive cultural slip-ups.",
      },
      examples: [
        { zh: "你有微信吗？我扫你吧。", pinyin: "Nǐ yǒu Wēixìn ma? Wǒ sǎo nǐ ba.", tr: { fr: "Tu as WeChat ? Je scanne ton code.", en: "Do you have WeChat? Let me scan your code." } },
        { zh: "感冒了？多喝热水！", pinyin: "Gǎnmào le? Duō hē rè shuǐ!", tr: { fr: "Tu es enrhumé ? Bois beaucoup d'eau chaude !", en: "Got a cold? Drink lots of hot water!" } },
      ],
      tip: {
        fr: "Dans chaque leçon de Hanlu, l'encadré « Culture » approfondit un de ces thèmes en lien avec le dialogue. Lis-les : la langue et la culture s'éclairent mutuellement.",
        en: "Each Hanlu lesson has a \"Culture\" box that explores one of these themes in connection with the dialogue. Read them: language and culture shed light on each other.",
      },
    },
  ],
};

export const guides: Guide[] = [
  pinyinComplete,
  fourTones,
  toneSandhi,
  strokeOrderRules,
  radicalsIntro,
  measureWords,
  sentenceStructure,
  leGuide,
  deDeDe,
  hsk3ExamStrategy,
  spacedRepetitionMethod,
  chineseCultureEssentials,
];
