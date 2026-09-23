import type { Radical } from "./types";

/**
 * The 80 most useful radicals / components for learners, in rough order of frequency and usefulness.
 * `radical` is the form you actually see inside characters; `variants` lists the other form(s).
 * `strokes` counts the strokes of `radical`.
 */
export const radicals: Radical[] = [
  {
    radical: "人", variants: ["亻"], pinyin: "rén", strokes: 2,
    meaning: { fr: "personne, être humain (à gauche : 亻)", en: "person, human being (on the left: 亻)" },
    examples: [
      { hanzi: "你", pinyin: "nǐ", tr: { fr: "tu, toi", en: "you" } },
      { hanzi: "他", pinyin: "tā", tr: { fr: "il, lui", en: "he, him" } },
      { hanzi: "休", pinyin: "xiū", tr: { fr: "se reposer (une personne adossée à un arbre)", en: "to rest (a person leaning on a tree)" } },
    ],
  },
  {
    radical: "口", pinyin: "kǒu", strokes: 3,
    meaning: { fr: "bouche, ouverture", en: "mouth, opening" },
    examples: [
      { hanzi: "吃", pinyin: "chī", tr: { fr: "manger", en: "to eat" } },
      { hanzi: "喝", pinyin: "hē", tr: { fr: "boire", en: "to drink" } },
      { hanzi: "叫", pinyin: "jiào", tr: { fr: "appeler, crier", en: "to call, to shout" } },
    ],
  },
  {
    radical: "女", pinyin: "nǚ", strokes: 3,
    meaning: { fr: "femme", en: "woman" },
    examples: [
      { hanzi: "妈", pinyin: "mā", tr: { fr: "maman", en: "mum" } },
      { hanzi: "好", pinyin: "hǎo", tr: { fr: "bon, bien (une femme et un enfant)", en: "good (a woman and a child)" } },
      { hanzi: "姐", pinyin: "jiě", tr: { fr: "grande sœur", en: "older sister" } },
    ],
  },
  {
    radical: "氵", variants: ["水"], pinyin: "shuǐ", strokes: 3,
    meaning: { fr: "eau (« trois gouttes d'eau »)", en: "water (\"three drops of water\")" },
    examples: [
      { hanzi: "河", pinyin: "hé", tr: { fr: "rivière", en: "river" } },
      { hanzi: "海", pinyin: "hǎi", tr: { fr: "mer", en: "sea" } },
      { hanzi: "洗", pinyin: "xǐ", tr: { fr: "laver", en: "to wash" } },
    ],
  },
  {
    radical: "木", pinyin: "mù", strokes: 4,
    meaning: { fr: "arbre, bois", en: "tree, wood" },
    examples: [
      { hanzi: "树", pinyin: "shù", tr: { fr: "arbre", en: "tree" } },
      { hanzi: "林", pinyin: "lín", tr: { fr: "bois, forêt", en: "woods, grove" } },
      { hanzi: "桌", pinyin: "zhuō", tr: { fr: "table", en: "table" } },
    ],
  },
  {
    radical: "扌", variants: ["手"], pinyin: "shǒu", strokes: 3,
    meaning: { fr: "main (action faite avec la main)", en: "hand (action done by hand)" },
    examples: [
      { hanzi: "打", pinyin: "dǎ", tr: { fr: "frapper ; faire (un appel…)", en: "to hit; to make (a call…)" } },
      { hanzi: "拉", pinyin: "lā", tr: { fr: "tirer", en: "to pull" } },
      { hanzi: "找", pinyin: "zhǎo", tr: { fr: "chercher", en: "to look for" } },
    ],
  },
  {
    radical: "艹", pinyin: "cǎo", strokes: 3,
    meaning: { fr: "herbe, plante", en: "grass, plant" },
    examples: [
      { hanzi: "草", pinyin: "cǎo", tr: { fr: "herbe", en: "grass" } },
      { hanzi: "花", pinyin: "huā", tr: { fr: "fleur", en: "flower" } },
      { hanzi: "茶", pinyin: "chá", tr: { fr: "thé", en: "tea" } },
    ],
  },
  {
    radical: "心", variants: ["忄"], pinyin: "xīn", strokes: 4,
    meaning: { fr: "cœur, sentiment (à gauche : 忄)", en: "heart, feelings (on the left: 忄)" },
    examples: [
      { hanzi: "想", pinyin: "xiǎng", tr: { fr: "penser, vouloir", en: "to think, to want" } },
      { hanzi: "忙", pinyin: "máng", tr: { fr: "occupé", en: "busy" } },
      { hanzi: "快", pinyin: "kuài", tr: { fr: "rapide ; heureux", en: "fast; happy" } },
    ],
  },
  {
    radical: "日", pinyin: "rì", strokes: 4,
    meaning: { fr: "soleil, jour", en: "sun, day" },
    examples: [
      { hanzi: "明", pinyin: "míng", tr: { fr: "clair, lumineux", en: "bright" } },
      { hanzi: "早", pinyin: "zǎo", tr: { fr: "tôt, matin", en: "early, morning" } },
      { hanzi: "晚", pinyin: "wǎn", tr: { fr: "tard, soir", en: "late, evening" } },
    ],
  },
  {
    radical: "月", pinyin: "yuè", strokes: 4,
    meaning: { fr: "lune ; aussi « chair » (肉) dans les parties du corps", en: "moon; also \"flesh\" (肉) in body parts" },
    examples: [
      { hanzi: "朋", pinyin: "péng", tr: { fr: "ami (dans 朋友)", en: "friend (in 朋友)" } },
      { hanzi: "脸", pinyin: "liǎn", tr: { fr: "visage", en: "face" } },
      { hanzi: "胖", pinyin: "pàng", tr: { fr: "gros, enrobé", en: "fat, chubby" } },
    ],
  },
  {
    radical: "讠", variants: ["言"], pinyin: "yán", strokes: 2,
    meaning: { fr: "parole, langage", en: "speech, language" },
    examples: [
      { hanzi: "说", pinyin: "shuō", tr: { fr: "parler, dire", en: "to speak, to say" } },
      { hanzi: "话", pinyin: "huà", tr: { fr: "parole, langue", en: "words, speech" } },
      { hanzi: "语", pinyin: "yǔ", tr: { fr: "langue", en: "language" } },
    ],
  },
  {
    radical: "钅", variants: ["金"], pinyin: "jīn", strokes: 5,
    meaning: { fr: "métal, or", en: "metal, gold" },
    examples: [
      { hanzi: "钱", pinyin: "qián", tr: { fr: "argent (monnaie)", en: "money" } },
      { hanzi: "铁", pinyin: "tiě", tr: { fr: "fer", en: "iron" } },
      { hanzi: "银", pinyin: "yín", tr: { fr: "argent (métal)", en: "silver" } },
    ],
  },
  {
    radical: "饣", variants: ["食"], pinyin: "shí", strokes: 3,
    meaning: { fr: "nourriture", en: "food" },
    examples: [
      { hanzi: "饭", pinyin: "fàn", tr: { fr: "repas, riz cuit", en: "meal, cooked rice" } },
      { hanzi: "饿", pinyin: "è", tr: { fr: "avoir faim", en: "hungry" } },
      { hanzi: "饺", pinyin: "jiǎo", tr: { fr: "ravioli (dans 饺子)", en: "dumpling (in 饺子)" } },
    ],
  },
  {
    radical: "纟", variants: ["糸"], pinyin: "sī", strokes: 3,
    meaning: { fr: "fil de soie", en: "silk thread" },
    examples: [
      { hanzi: "红", pinyin: "hóng", tr: { fr: "rouge", en: "red" } },
      { hanzi: "给", pinyin: "gěi", tr: { fr: "donner", en: "to give" } },
      { hanzi: "线", pinyin: "xiàn", tr: { fr: "fil, ligne", en: "thread, line" } },
    ],
  },
  {
    radical: "辶", pinyin: "chuò", strokes: 3,
    meaning: { fr: "marcher, avancer", en: "walking, movement" },
    examples: [
      { hanzi: "这", pinyin: "zhè", tr: { fr: "ceci, ce", en: "this" } },
      { hanzi: "进", pinyin: "jìn", tr: { fr: "entrer", en: "to enter" } },
      { hanzi: "远", pinyin: "yuǎn", tr: { fr: "loin", en: "far" } },
    ],
  },
  {
    radical: "宀", pinyin: "mián", strokes: 3,
    meaning: { fr: "toit", en: "roof" },
    examples: [
      { hanzi: "家", pinyin: "jiā", tr: { fr: "maison, famille (un cochon sous un toit)", en: "home, family (a pig under a roof)" } },
      { hanzi: "字", pinyin: "zì", tr: { fr: "caractère", en: "character" } },
      { hanzi: "安", pinyin: "ān", tr: { fr: "paix, sûr (une femme sous un toit)", en: "peace, safe (a woman under a roof)" } },
    ],
  },
  {
    radical: "门", pinyin: "mén", strokes: 3,
    meaning: { fr: "porte", en: "door, gate" },
    examples: [
      { hanzi: "问", pinyin: "wèn", tr: { fr: "demander (une bouche à la porte)", en: "to ask (a mouth at the door)" } },
      { hanzi: "间", pinyin: "jiān", tr: { fr: "espace, pièce", en: "space, room" } },
      { hanzi: "闭", pinyin: "bì", tr: { fr: "fermer", en: "to close" } },
    ],
  },
  {
    radical: "土", pinyin: "tǔ", strokes: 3,
    meaning: { fr: "terre, sol", en: "earth, soil" },
    examples: [
      { hanzi: "地", pinyin: "dì", tr: { fr: "sol, terre", en: "ground, land" } },
      { hanzi: "坐", pinyin: "zuò", tr: { fr: "s'asseoir", en: "to sit" } },
      { hanzi: "城", pinyin: "chéng", tr: { fr: "ville, remparts", en: "city, city wall" } },
    ],
  },
  {
    radical: "火", variants: ["灬"], pinyin: "huǒ", strokes: 4,
    meaning: { fr: "feu (en bas : 灬)", en: "fire (at the bottom: 灬)" },
    examples: [
      { hanzi: "灯", pinyin: "dēng", tr: { fr: "lampe", en: "lamp" } },
      { hanzi: "炒", pinyin: "chǎo", tr: { fr: "faire sauter (au wok)", en: "to stir-fry" } },
      { hanzi: "热", pinyin: "rè", tr: { fr: "chaud", en: "hot" } },
    ],
  },
  {
    radical: "竹", variants: ["⺮"], pinyin: "zhú", strokes: 6,
    meaning: { fr: "bambou (en haut : ⺮)", en: "bamboo (on top: ⺮)" },
    examples: [
      { hanzi: "笔", pinyin: "bǐ", tr: { fr: "stylo, pinceau", en: "pen, brush" } },
      { hanzi: "等", pinyin: "děng", tr: { fr: "attendre", en: "to wait" } },
      { hanzi: "答", pinyin: "dá", tr: { fr: "répondre", en: "to answer" } },
    ],
  },
  {
    radical: "目", pinyin: "mù", strokes: 5,
    meaning: { fr: "œil", en: "eye" },
    examples: [
      { hanzi: "看", pinyin: "kàn", tr: { fr: "regarder (une main au-dessus de l'œil)", en: "to look (a hand above the eye)" } },
      { hanzi: "眼", pinyin: "yǎn", tr: { fr: "œil", en: "eye" } },
      { hanzi: "睡", pinyin: "shuì", tr: { fr: "dormir", en: "to sleep" } },
    ],
  },
  {
    radical: "足", variants: ["⻊"], pinyin: "zú", strokes: 7,
    meaning: { fr: "pied (à gauche : ⻊)", en: "foot (on the left: ⻊)" },
    examples: [
      { hanzi: "跑", pinyin: "pǎo", tr: { fr: "courir", en: "to run" } },
      { hanzi: "跳", pinyin: "tiào", tr: { fr: "sauter", en: "to jump" } },
      { hanzi: "路", pinyin: "lù", tr: { fr: "route, chemin", en: "road, path" } },
    ],
  },
  {
    radical: "雨", pinyin: "yǔ", strokes: 8,
    meaning: { fr: "pluie, phénomènes météo", en: "rain, weather" },
    examples: [
      { hanzi: "雪", pinyin: "xuě", tr: { fr: "neige", en: "snow" } },
      { hanzi: "雷", pinyin: "léi", tr: { fr: "tonnerre", en: "thunder" } },
      { hanzi: "雾", pinyin: "wù", tr: { fr: "brouillard", en: "fog" } },
    ],
  },
  {
    radical: "衣", variants: ["衤"], pinyin: "yī", strokes: 6,
    meaning: { fr: "vêtement (à gauche : 衤)", en: "clothing (on the left: 衤)" },
    examples: [
      { hanzi: "裤", pinyin: "kù", tr: { fr: "pantalon (dans 裤子)", en: "trousers (in 裤子)" } },
      { hanzi: "袜", pinyin: "wà", tr: { fr: "chaussette (dans 袜子)", en: "sock (in 袜子)" } },
      { hanzi: "被", pinyin: "bèi", tr: { fr: "couverture ; marque du passif", en: "quilt; passive marker" } },
    ],
  },
  {
    radical: "贝", pinyin: "bèi", strokes: 4,
    meaning: { fr: "coquillage, ancienne monnaie → argent, valeur", en: "shell, ancient currency → money, value" },
    examples: [
      { hanzi: "贵", pinyin: "guì", tr: { fr: "cher", en: "expensive" } },
      { hanzi: "货", pinyin: "huò", tr: { fr: "marchandise", en: "goods" } },
      { hanzi: "购", pinyin: "gòu", tr: { fr: "acheter", en: "to buy" } },
    ],
  },
  {
    radical: "车", pinyin: "chē", strokes: 4,
    meaning: { fr: "véhicule, char", en: "vehicle, cart" },
    examples: [
      { hanzi: "辆", pinyin: "liàng", tr: { fr: "classificateur des véhicules", en: "measure word for vehicles" } },
      { hanzi: "轮", pinyin: "lún", tr: { fr: "roue", en: "wheel" } },
      { hanzi: "转", pinyin: "zhuǎn", tr: { fr: "tourner", en: "to turn" } },
    ],
  },
  {
    radical: "马", pinyin: "mǎ", strokes: 3,
    meaning: { fr: "cheval", en: "horse" },
    examples: [
      { hanzi: "骑", pinyin: "qí", tr: { fr: "monter (à cheval, à vélo)", en: "to ride" } },
      { hanzi: "驾", pinyin: "jià", tr: { fr: "conduire", en: "to drive" } },
      { hanzi: "驴", pinyin: "lǘ", tr: { fr: "âne", en: "donkey" } },
    ],
  },
  {
    radical: "鸟", pinyin: "niǎo", strokes: 5,
    meaning: { fr: "oiseau", en: "bird" },
    examples: [
      { hanzi: "鸡", pinyin: "jī", tr: { fr: "poulet", en: "chicken" } },
      { hanzi: "鸭", pinyin: "yā", tr: { fr: "canard", en: "duck" } },
      { hanzi: "鸽", pinyin: "gē", tr: { fr: "pigeon, colombe", en: "pigeon, dove" } },
    ],
  },
  {
    radical: "鱼", pinyin: "yú", strokes: 8,
    meaning: { fr: "poisson", en: "fish" },
    examples: [
      { hanzi: "鲜", pinyin: "xiān", tr: { fr: "frais", en: "fresh" } },
      { hanzi: "鲸", pinyin: "jīng", tr: { fr: "baleine", en: "whale" } },
      { hanzi: "鲤", pinyin: "lǐ", tr: { fr: "carpe", en: "carp" } },
    ],
  },
  {
    radical: "犭", variants: ["犬"], pinyin: "quǎn", strokes: 3,
    meaning: { fr: "chien, animal", en: "dog, animal" },
    examples: [
      { hanzi: "狗", pinyin: "gǒu", tr: { fr: "chien", en: "dog" } },
      { hanzi: "猫", pinyin: "māo", tr: { fr: "chat", en: "cat" } },
      { hanzi: "猪", pinyin: "zhū", tr: { fr: "cochon", en: "pig" } },
    ],
  },
  {
    radical: "疒", pinyin: "nè", strokes: 5,
    meaning: { fr: "maladie", en: "illness" },
    examples: [
      { hanzi: "病", pinyin: "bìng", tr: { fr: "maladie", en: "illness" } },
      { hanzi: "疼", pinyin: "téng", tr: { fr: "avoir mal", en: "to hurt" } },
      { hanzi: "痛", pinyin: "tòng", tr: { fr: "douleur", en: "pain" } },
    ],
  },
  {
    radical: "页", pinyin: "yè", strokes: 6,
    meaning: { fr: "tête ; aujourd'hui aussi « page »", en: "head; today also \"page\"" },
    examples: [
      { hanzi: "题", pinyin: "tí", tr: { fr: "sujet, question", en: "topic, question" } },
      { hanzi: "顺", pinyin: "shùn", tr: { fr: "dans le sens de, fluide", en: "smooth, along" } },
      { hanzi: "颜", pinyin: "yán", tr: { fr: "couleur (dans 颜色)", en: "colour (in 颜色)" } },
    ],
  },
  {
    radical: "刂", variants: ["刀"], pinyin: "dāo", strokes: 2,
    meaning: { fr: "couteau (à droite : 刂)", en: "knife (on the right: 刂)" },
    examples: [
      { hanzi: "到", pinyin: "dào", tr: { fr: "arriver", en: "to arrive" } },
      { hanzi: "别", pinyin: "bié", tr: { fr: "ne… pas ; autre", en: "don't; other" } },
      { hanzi: "刻", pinyin: "kè", tr: { fr: "graver ; quart d'heure", en: "to carve; quarter of an hour" } },
    ],
  },
  {
    radical: "力", pinyin: "lì", strokes: 2,
    meaning: { fr: "force", en: "strength" },
    examples: [
      { hanzi: "加", pinyin: "jiā", tr: { fr: "ajouter", en: "to add" } },
      { hanzi: "动", pinyin: "dòng", tr: { fr: "bouger", en: "to move" } },
      { hanzi: "办", pinyin: "bàn", tr: { fr: "faire, s'occuper de", en: "to handle, to do" } },
    ],
  },
  {
    radical: "阝", pinyin: "fù", strokes: 2,
    meaning: { fr: "à gauche : colline (阜) ; à droite : ville (邑)", en: "on the left: hill (阜); on the right: city (邑)" },
    examples: [
      { hanzi: "院", pinyin: "yuàn", tr: { fr: "cour, institution", en: "courtyard, institution" } },
      { hanzi: "阳", pinyin: "yáng", tr: { fr: "soleil, côté ensoleillé", en: "sun, sunny side" } },
      { hanzi: "都", pinyin: "dōu", tr: { fr: "tous ; (dū) capitale", en: "all; (dū) capital" } },
    ],
  },
  {
    radical: "亠", pinyin: "tóu", strokes: 2,
    meaning: { fr: "couvercle, « chapeau »", en: "lid, \"hat\"" },
    examples: [
      { hanzi: "京", pinyin: "jīng", tr: { fr: "capitale", en: "capital" } },
      { hanzi: "交", pinyin: "jiāo", tr: { fr: "échanger, remettre", en: "to exchange, to hand in" } },
      { hanzi: "高", pinyin: "gāo", tr: { fr: "haut, grand", en: "tall, high" } },
    ],
  },
  {
    radical: "冫", pinyin: "bīng", strokes: 2,
    meaning: { fr: "glace (« deux gouttes »)", en: "ice (\"two drops\")" },
    examples: [
      { hanzi: "冷", pinyin: "lěng", tr: { fr: "froid", en: "cold" } },
      { hanzi: "冰", pinyin: "bīng", tr: { fr: "glace", en: "ice" } },
      { hanzi: "次", pinyin: "cì", tr: { fr: "fois", en: "time (occurrence)" } },
    ],
  },
  {
    radical: "冖", pinyin: "mì", strokes: 2,
    meaning: { fr: "couvercle, voile", en: "cover" },
    examples: [
      { hanzi: "写", pinyin: "xiě", tr: { fr: "écrire", en: "to write" } },
      { hanzi: "军", pinyin: "jūn", tr: { fr: "armée", en: "army" } },
      { hanzi: "冠", pinyin: "guàn", tr: { fr: "champion (dans 冠军)", en: "champion (in 冠军)" } },
    ],
  },
  {
    radical: "八", variants: ["丷"], pinyin: "bā", strokes: 2,
    meaning: { fr: "huit ; séparer", en: "eight; to divide" },
    examples: [
      { hanzi: "分", pinyin: "fēn", tr: { fr: "diviser ; minute", en: "to divide; minute" } },
      { hanzi: "公", pinyin: "gōng", tr: { fr: "public", en: "public" } },
      { hanzi: "关", pinyin: "guān", tr: { fr: "fermer ; concerner", en: "to close; to concern" } },
    ],
  },
  {
    radical: "十", pinyin: "shí", strokes: 2,
    meaning: { fr: "dix", en: "ten" },
    examples: [
      { hanzi: "午", pinyin: "wǔ", tr: { fr: "midi", en: "noon" } },
      { hanzi: "半", pinyin: "bàn", tr: { fr: "moitié", en: "half" } },
      { hanzi: "南", pinyin: "nán", tr: { fr: "sud", en: "south" } },
    ],
  },
  {
    radical: "厂", pinyin: "chǎng", strokes: 2,
    meaning: { fr: "falaise, abri ; usine", en: "cliff, shelter; factory" },
    examples: [
      { hanzi: "厅", pinyin: "tīng", tr: { fr: "salle, hall", en: "hall" } },
      { hanzi: "历", pinyin: "lì", tr: { fr: "histoire, calendrier", en: "history, calendar" } },
      { hanzi: "厕", pinyin: "cè", tr: { fr: "toilettes (dans 厕所)", en: "toilet (in 厕所)" } },
    ],
  },
  {
    radical: "广", pinyin: "guǎng", strokes: 3,
    meaning: { fr: "abri, bâtiment ouvert", en: "shelter, building" },
    examples: [
      { hanzi: "床", pinyin: "chuáng", tr: { fr: "lit", en: "bed" } },
      { hanzi: "店", pinyin: "diàn", tr: { fr: "magasin", en: "shop" } },
      { hanzi: "座", pinyin: "zuò", tr: { fr: "siège, place", en: "seat" } },
    ],
  },
  {
    radical: "大", pinyin: "dà", strokes: 3,
    meaning: { fr: "grand (un homme bras écartés)", en: "big (a man with arms spread)" },
    examples: [
      { hanzi: "天", pinyin: "tiān", tr: { fr: "ciel, jour", en: "sky, day" } },
      { hanzi: "太", pinyin: "tài", tr: { fr: "trop", en: "too (much)" } },
      { hanzi: "夫", pinyin: "fū", tr: { fr: "homme, mari", en: "man, husband" } },
    ],
  },
  {
    radical: "小", pinyin: "xiǎo", strokes: 3,
    meaning: { fr: "petit", en: "small" },
    examples: [
      { hanzi: "少", pinyin: "shǎo", tr: { fr: "peu", en: "few, little" } },
      { hanzi: "尖", pinyin: "jiān", tr: { fr: "pointu (petit en haut, grand en bas)", en: "pointed (small on top, big below)" } },
      { hanzi: "尘", pinyin: "chén", tr: { fr: "poussière", en: "dust" } },
    ],
  },
  {
    radical: "山", pinyin: "shān", strokes: 3,
    meaning: { fr: "montagne", en: "mountain" },
    examples: [
      { hanzi: "岁", pinyin: "suì", tr: { fr: "an (d'âge)", en: "year (of age)" } },
      { hanzi: "岛", pinyin: "dǎo", tr: { fr: "île", en: "island" } },
      { hanzi: "峰", pinyin: "fēng", tr: { fr: "sommet", en: "peak" } },
    ],
  },
  {
    radical: "巾", pinyin: "jīn", strokes: 3,
    meaning: { fr: "tissu, serviette", en: "cloth, towel" },
    examples: [
      { hanzi: "帽", pinyin: "mào", tr: { fr: "chapeau (dans 帽子)", en: "hat (in 帽子)" } },
      { hanzi: "帮", pinyin: "bāng", tr: { fr: "aider", en: "to help" } },
      { hanzi: "带", pinyin: "dài", tr: { fr: "ceinture ; emporter", en: "belt; to bring" } },
    ],
  },
  {
    radical: "彳", pinyin: "chì", strokes: 3,
    meaning: { fr: "pas, marcher (« homme double »)", en: "step, walking (\"double person\")" },
    examples: [
      { hanzi: "很", pinyin: "hěn", tr: { fr: "très", en: "very" } },
      { hanzi: "行", pinyin: "xíng", tr: { fr: "marcher ; ça va", en: "to walk; OK" } },
      { hanzi: "往", pinyin: "wǎng", tr: { fr: "vers", en: "towards" } },
    ],
  },
  {
    radical: "尸", pinyin: "shī", strokes: 3,
    meaning: { fr: "corps, abri", en: "body, shelter" },
    examples: [
      { hanzi: "屋", pinyin: "wū", tr: { fr: "maison, pièce", en: "house, room" } },
      { hanzi: "层", pinyin: "céng", tr: { fr: "étage", en: "floor, storey" } },
      { hanzi: "局", pinyin: "jú", tr: { fr: "bureau (administration)", en: "office, bureau" } },
    ],
  },
  {
    radical: "弓", pinyin: "gōng", strokes: 3,
    meaning: { fr: "arc", en: "bow (weapon)" },
    examples: [
      { hanzi: "张", pinyin: "zhāng", tr: { fr: "tendre ; classificateur des objets plats", en: "to stretch; measure word for flat things" } },
      { hanzi: "弟", pinyin: "dì", tr: { fr: "petit frère", en: "younger brother" } },
      { hanzi: "强", pinyin: "qiáng", tr: { fr: "fort", en: "strong" } },
    ],
  },
  {
    radical: "子", pinyin: "zǐ", strokes: 3,
    meaning: { fr: "enfant", en: "child" },
    examples: [
      { hanzi: "孩", pinyin: "hái", tr: { fr: "enfant (dans 孩子)", en: "child (in 孩子)" } },
      { hanzi: "学", pinyin: "xué", tr: { fr: "étudier", en: "to study" } },
      { hanzi: "孙", pinyin: "sūn", tr: { fr: "petit-enfant", en: "grandchild" } },
    ],
  },
  {
    radical: "攵", pinyin: "pū", strokes: 4,
    meaning: { fr: "frapper légèrement → action", en: "to tap → action" },
    examples: [
      { hanzi: "教", pinyin: "jiāo", tr: { fr: "enseigner", en: "to teach" } },
      { hanzi: "放", pinyin: "fàng", tr: { fr: "poser, lâcher", en: "to put, to release" } },
      { hanzi: "数", pinyin: "shù", tr: { fr: "nombre ; (shǔ) compter", en: "number; (shǔ) to count" } },
    ],
  },
  {
    radical: "王", variants: ["玉"], pinyin: "wáng", strokes: 4,
    meaning: { fr: "roi ; en composition : jade (玉)", en: "king; as a component: jade (玉)" },
    examples: [
      { hanzi: "玩", pinyin: "wán", tr: { fr: "jouer, s'amuser", en: "to play" } },
      { hanzi: "球", pinyin: "qiú", tr: { fr: "balle, ballon", en: "ball" } },
      { hanzi: "现", pinyin: "xiàn", tr: { fr: "actuel, apparaître", en: "present, to appear" } },
    ],
  },
  {
    radical: "牛", variants: ["牜"], pinyin: "niú", strokes: 4,
    meaning: { fr: "bœuf, vache", en: "ox, cow" },
    examples: [
      { hanzi: "物", pinyin: "wù", tr: { fr: "chose, objet", en: "thing" } },
      { hanzi: "特", pinyin: "tè", tr: { fr: "spécial", en: "special" } },
      { hanzi: "牧", pinyin: "mù", tr: { fr: "faire paître", en: "to herd" } },
    ],
  },
  {
    radical: "石", pinyin: "shí", strokes: 5,
    meaning: { fr: "pierre", en: "stone" },
    examples: [
      { hanzi: "碗", pinyin: "wǎn", tr: { fr: "bol", en: "bowl" } },
      { hanzi: "破", pinyin: "pò", tr: { fr: "cassé", en: "broken" } },
      { hanzi: "码", pinyin: "mǎ", tr: { fr: "code, numéro", en: "code, number" } },
    ],
  },
  {
    radical: "田", pinyin: "tián", strokes: 5,
    meaning: { fr: "champ cultivé", en: "field" },
    examples: [
      { hanzi: "男", pinyin: "nán", tr: { fr: "homme (la force au champ)", en: "man (strength in the field)" } },
      { hanzi: "界", pinyin: "jiè", tr: { fr: "limite, monde", en: "boundary, world" } },
      { hanzi: "留", pinyin: "liú", tr: { fr: "rester, garder", en: "to stay, to keep" } },
    ],
  },
  {
    radical: "禾", pinyin: "hé", strokes: 5,
    meaning: { fr: "céréale sur pied", en: "standing grain" },
    examples: [
      { hanzi: "秋", pinyin: "qiū", tr: { fr: "automne (céréales + feu)", en: "autumn (grain + fire)" } },
      { hanzi: "种", pinyin: "zhǒng", tr: { fr: "sorte ; (zhòng) planter", en: "kind; (zhòng) to plant" } },
      { hanzi: "租", pinyin: "zū", tr: { fr: "louer", en: "to rent" } },
    ],
  },
  {
    radical: "米", pinyin: "mǐ", strokes: 6,
    meaning: { fr: "riz, grain", en: "rice, grain" },
    examples: [
      { hanzi: "粉", pinyin: "fěn", tr: { fr: "poudre ; vermicelles", en: "powder; noodles" } },
      { hanzi: "糖", pinyin: "táng", tr: { fr: "sucre, bonbon", en: "sugar, candy" } },
      { hanzi: "精", pinyin: "jīng", tr: { fr: "raffiné, essence", en: "refined, essence" } },
    ],
  },
  {
    radical: "耳", pinyin: "ěr", strokes: 6,
    meaning: { fr: "oreille", en: "ear" },
    examples: [
      { hanzi: "聊", pinyin: "liáo", tr: { fr: "bavarder", en: "to chat" } },
      { hanzi: "取", pinyin: "qǔ", tr: { fr: "prendre (une main qui saisit une oreille)", en: "to take (a hand grabbing an ear)" } },
      { hanzi: "职", pinyin: "zhí", tr: { fr: "poste, métier", en: "post, job" } },
    ],
  },
  {
    radical: "虫", pinyin: "chóng", strokes: 6,
    meaning: { fr: "insecte, ver", en: "insect, worm" },
    examples: [
      { hanzi: "蛇", pinyin: "shé", tr: { fr: "serpent", en: "snake" } },
      { hanzi: "蚊", pinyin: "wén", tr: { fr: "moustique (dans 蚊子)", en: "mosquito (in 蚊子)" } },
      { hanzi: "虾", pinyin: "xiā", tr: { fr: "crevette", en: "shrimp" } },
    ],
  },
  {
    radical: "走", pinyin: "zǒu", strokes: 7,
    meaning: { fr: "marcher, aller", en: "to walk, to go" },
    examples: [
      { hanzi: "起", pinyin: "qǐ", tr: { fr: "se lever", en: "to rise" } },
      { hanzi: "超", pinyin: "chāo", tr: { fr: "dépasser", en: "to exceed" } },
      { hanzi: "趣", pinyin: "qù", tr: { fr: "intérêt (dans 有趣)", en: "interest (in 有趣)" } },
    ],
  },
  {
    radical: "酉", pinyin: "yǒu", strokes: 7,
    meaning: { fr: "jarre d'alcool, fermentation", en: "wine jar, fermentation" },
    examples: [
      { hanzi: "酒", pinyin: "jiǔ", tr: { fr: "alcool", en: "alcohol" } },
      { hanzi: "醒", pinyin: "xǐng", tr: { fr: "se réveiller, dessaouler", en: "to wake up, to sober up" } },
      { hanzi: "酸", pinyin: "suān", tr: { fr: "acide", en: "sour" } },
    ],
  },
  {
    radical: "白", pinyin: "bái", strokes: 5,
    meaning: { fr: "blanc", en: "white" },
    examples: [
      { hanzi: "百", pinyin: "bǎi", tr: { fr: "cent", en: "hundred" } },
      { hanzi: "的", pinyin: "de", tr: { fr: "particule de détermination", en: "possessive/attributive particle" } },
      { hanzi: "皂", pinyin: "zào", tr: { fr: "savon (dans 肥皂)", en: "soap (in 肥皂)" } },
    ],
  },
  {
    radical: "立", pinyin: "lì", strokes: 5,
    meaning: { fr: "se tenir debout", en: "to stand" },
    examples: [
      { hanzi: "站", pinyin: "zhàn", tr: { fr: "être debout ; gare", en: "to stand; station" } },
      { hanzi: "童", pinyin: "tóng", tr: { fr: "enfant (dans 儿童)", en: "child (in 儿童)" } },
      { hanzi: "端", pinyin: "duān", tr: { fr: "bout ; tenir à plat", en: "end; to carry level" } },
    ],
  },
  {
    radical: "穴", pinyin: "xué", strokes: 5,
    meaning: { fr: "grotte, trou", en: "cave, hole" },
    examples: [
      { hanzi: "空", pinyin: "kōng", tr: { fr: "vide ; ciel", en: "empty; sky" } },
      { hanzi: "窗", pinyin: "chuāng", tr: { fr: "fenêtre", en: "window" } },
      { hanzi: "穿", pinyin: "chuān", tr: { fr: "porter, traverser", en: "to wear, to pass through" } },
    ],
  },
  {
    radical: "皿", pinyin: "mǐn", strokes: 5,
    meaning: { fr: "récipient", en: "vessel, dish" },
    examples: [
      { hanzi: "盘", pinyin: "pán", tr: { fr: "assiette", en: "plate" } },
      { hanzi: "盒", pinyin: "hé", tr: { fr: "boîte", en: "box" } },
      { hanzi: "盐", pinyin: "yán", tr: { fr: "sel", en: "salt" } },
    ],
  },
  {
    radical: "礻", variants: ["示"], pinyin: "shì", strokes: 4,
    meaning: { fr: "autel, rites (≠ 衤 vêtement)", en: "altar, rites (≠ 衤 clothing)" },
    examples: [
      { hanzi: "礼", pinyin: "lǐ", tr: { fr: "politesse, cadeau", en: "etiquette, gift" } },
      { hanzi: "视", pinyin: "shì", tr: { fr: "regarder (dans 电视)", en: "to look (in 电视)" } },
      { hanzi: "福", pinyin: "fú", tr: { fr: "bonheur", en: "good fortune" } },
    ],
  },
  {
    radical: "羊", pinyin: "yáng", strokes: 6,
    meaning: { fr: "mouton, chèvre", en: "sheep, goat" },
    examples: [
      { hanzi: "美", pinyin: "měi", tr: { fr: "beau", en: "beautiful" } },
      { hanzi: "群", pinyin: "qún", tr: { fr: "groupe, troupeau", en: "group, flock" } },
      { hanzi: "羡", pinyin: "xiàn", tr: { fr: "envier (dans 羡慕)", en: "to envy (in 羡慕)" } },
    ],
  },
  {
    radical: "见", pinyin: "jiàn", strokes: 4,
    meaning: { fr: "voir", en: "to see" },
    examples: [
      { hanzi: "观", pinyin: "guān", tr: { fr: "observer", en: "to observe" } },
      { hanzi: "觉", pinyin: "jué", tr: { fr: "sentir, avoir l'impression", en: "to feel" } },
      { hanzi: "览", pinyin: "lǎn", tr: { fr: "regarder, parcourir", en: "to view" } },
    ],
  },
  {
    radical: "欠", pinyin: "qiàn", strokes: 4,
    meaning: { fr: "bâiller, souffle", en: "yawn, breath" },
    examples: [
      { hanzi: "欢", pinyin: "huān", tr: { fr: "joyeux (dans 喜欢)", en: "joyful (in 喜欢)" } },
      { hanzi: "歌", pinyin: "gē", tr: { fr: "chanson", en: "song" } },
      { hanzi: "欧", pinyin: "ōu", tr: { fr: "Europe (dans 欧洲)", en: "Europe (in 欧洲)" } },
    ],
  },
  {
    radical: "方", pinyin: "fāng", strokes: 4,
    meaning: { fr: "carré ; direction ; drapeau", en: "square; direction; flag" },
    examples: [
      { hanzi: "旅", pinyin: "lǚ", tr: { fr: "voyager (dans 旅游)", en: "to travel (in 旅游)" } },
      { hanzi: "旁", pinyin: "páng", tr: { fr: "à côté", en: "beside" } },
      { hanzi: "族", pinyin: "zú", tr: { fr: "ethnie, clan", en: "ethnic group, clan" } },
    ],
  },
  {
    radical: "夕", pinyin: "xī", strokes: 3,
    meaning: { fr: "soir, crépuscule", en: "dusk, evening" },
    examples: [
      { hanzi: "多", pinyin: "duō", tr: { fr: "beaucoup", en: "many" } },
      { hanzi: "外", pinyin: "wài", tr: { fr: "dehors", en: "outside" } },
      { hanzi: "名", pinyin: "míng", tr: { fr: "nom (on crie son nom dans le noir)", en: "name (you call your name in the dark)" } },
    ],
  },
  {
    radical: "又", pinyin: "yòu", strokes: 2,
    meaning: { fr: "main droite ; encore", en: "right hand; again" },
    examples: [
      { hanzi: "友", pinyin: "yǒu", tr: { fr: "ami", en: "friend" } },
      { hanzi: "双", pinyin: "shuāng", tr: { fr: "paire", en: "pair" } },
      { hanzi: "对", pinyin: "duì", tr: { fr: "juste ; en face de", en: "correct; facing" } },
    ],
  },
  {
    radical: "寸", pinyin: "cùn", strokes: 3,
    meaning: { fr: "pouce (unité), main précise", en: "inch, precise hand" },
    examples: [
      { hanzi: "封", pinyin: "fēng", tr: { fr: "sceller ; classificateur des lettres", en: "to seal; measure word for letters" } },
      { hanzi: "导", pinyin: "dǎo", tr: { fr: "guider", en: "to guide" } },
      { hanzi: "射", pinyin: "shè", tr: { fr: "tirer (à l'arc)", en: "to shoot" } },
    ],
  },
  {
    radical: "户", pinyin: "hù", strokes: 4,
    meaning: { fr: "battant de porte, foyer", en: "door leaf, household" },
    examples: [
      { hanzi: "房", pinyin: "fáng", tr: { fr: "maison, pièce", en: "house, room" } },
      { hanzi: "扇", pinyin: "shàn", tr: { fr: "éventail ; classificateur des portes", en: "fan; measure word for doors" } },
      { hanzi: "启", pinyin: "qǐ", tr: { fr: "ouvrir", en: "to open" } },
    ],
  },
  {
    radical: "耂", pinyin: "lǎo", strokes: 4,
    meaning: { fr: "vieux (forme de 老)", en: "old (form of 老)" },
    examples: [
      { hanzi: "老", pinyin: "lǎo", tr: { fr: "vieux", en: "old" } },
      { hanzi: "考", pinyin: "kǎo", tr: { fr: "passer un examen", en: "to take an exam" } },
      { hanzi: "者", pinyin: "zhě", tr: { fr: "celui qui (suffixe)", en: "one who (suffix)" } },
    ],
  },
  {
    radical: "身", pinyin: "shēn", strokes: 7,
    meaning: { fr: "corps", en: "body" },
    examples: [
      { hanzi: "躺", pinyin: "tǎng", tr: { fr: "être allongé", en: "to lie down" } },
      { hanzi: "躲", pinyin: "duǒ", tr: { fr: "se cacher, esquiver", en: "to hide, to dodge" } },
      { hanzi: "躬", pinyin: "gōng", tr: { fr: "s'incliner", en: "to bow" } },
    ],
  },
  {
    radical: "囗", pinyin: "wéi", strokes: 3,
    meaning: { fr: "enceinte, clôture (≠ 口 bouche, plus grand)", en: "enclosure (≠ 口 mouth, larger)" },
    examples: [
      { hanzi: "国", pinyin: "guó", tr: { fr: "pays", en: "country" } },
      { hanzi: "图", pinyin: "tú", tr: { fr: "image, carte", en: "picture, map" } },
      { hanzi: "园", pinyin: "yuán", tr: { fr: "jardin, parc", en: "garden, park" } },
    ],
  },
  {
    radical: "斤", pinyin: "jīn", strokes: 4,
    meaning: { fr: "hache ; livre chinoise (500 g)", en: "axe; Chinese pound (500 g)" },
    examples: [
      { hanzi: "新", pinyin: "xīn", tr: { fr: "nouveau", en: "new" } },
      { hanzi: "断", pinyin: "duàn", tr: { fr: "casser, couper", en: "to break, to cut off" } },
      { hanzi: "所", pinyin: "suǒ", tr: { fr: "lieu (dans 厕所)", en: "place (in 厕所)" } },
    ],
  },
  {
    radical: "工", pinyin: "gōng", strokes: 3,
    meaning: { fr: "outil, travail", en: "tool, work" },
    examples: [
      { hanzi: "左", pinyin: "zuǒ", tr: { fr: "gauche", en: "left" } },
      { hanzi: "差", pinyin: "chà", tr: { fr: "manquer ; mauvais", en: "to lack; poor" } },
      { hanzi: "巧", pinyin: "qiǎo", tr: { fr: "habile ; coïncidence", en: "skilful; coincidence" } },
    ],
  },
  {
    radical: "止", pinyin: "zhǐ", strokes: 4,
    meaning: { fr: "arrêter ; pied", en: "to stop; foot" },
    examples: [
      { hanzi: "正", pinyin: "zhèng", tr: { fr: "droit, correct", en: "straight, correct" } },
      { hanzi: "步", pinyin: "bù", tr: { fr: "pas", en: "step" } },
      { hanzi: "此", pinyin: "cǐ", tr: { fr: "ceci (écrit)", en: "this (written)" } },
    ],
  },
];
