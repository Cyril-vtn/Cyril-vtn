#!/usr/bin/env node
/**
 * Build the HSK 3.0 vocabulary + character datasets for Hanlu.
 *
 *   node scripts/build-vocab.mjs            # download (cached) + build
 *   node scripts/build-vocab.mjs --refresh  # force re-download of sources
 *
 * Sources (pinned to git commits for reproducibility, see SOURCES below):
 *   - ivankra/hsk30        : HSK 3.0 word list (GF0025-2021), pinyin, POS, trad, CEDICT keys (MIT)
 *   - elkmovie/hsk30       : official HSK 3.0 character list, OCR by Pleco (MIT)
 *   - CC-CEDICT            : English glosses (CC BY-SA 4.0), MDBG snapshot mirrored in CFDICT-Next
 *   - CFDICT               : French glosses (CC BY-SA 3.0), mirrored in licryle/CFDICT-Next
 *     (only the human-made CFDICT file is used; CFDICT-Next's LLM-generated entries are NOT used)
 *
 * Outputs:
 *   src/data/vocab/hsk{1..7}.json   VocabEntry[] (level 7 = HSK 7–9 band)
 *   src/data/vocab/meta.json
 *   src/data/chars/hsk-chars.json   { "1": [...300], ..., "7": [...1200] }
 *
 * Downloads go through fetch(); behind an HTTPS proxy on Node 22 set NODE_USE_ENV_PROXY=1
 * (the script falls back to `curl` if fetch fails).
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CACHE = path.join(__dirname, ".cache");
const OUT_VOCAB = path.join(ROOT, "src/data/vocab");
const OUT_CHARS = path.join(ROOT, "src/data/chars");
const REFRESH = process.argv.includes("--refresh");

const IVANKRA_SHA = "4ff9e3915ce87baaecd7ebe263085573a4ea3192";
const ELKMOVIE_SHA = "7f3d4fdcfcb6e826001df062747c943d1fa8160e";
const CFDICT_NEXT_SHA = "48a3fe7565917fdf73f9c95749492b3a14e07304";
const raw = (repo, sha, p) => `https://raw.githubusercontent.com/${repo}/${sha}/${p}`;

const FILES = {
  hsk30: raw("ivankra/hsk30", IVANKRA_SHA, "hsk30.csv"),
  hsk30chars: raw("ivankra/hsk30", IVANKRA_SHA, "hsk30-chars.csv"),
  elkChars: raw("elkmovie/hsk30", ELKMOVIE_SHA, "charlist.txt"),
  cedict: raw("licryle/CFDICT-Next", CFDICT_NEXT_SHA, "data/cc-cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz"),
  cfdict: raw("licryle/CFDICT-Next", CFDICT_NEXT_SHA, "data/cfdict.u8"),
};

const SOURCES = [
  {
    name: "HSK 3.0 vocabulary list (ivankra/hsk30) — derived from the official 国际中文教育中文水平等级标准 (GF0025-2021) word list",
    url: `https://github.com/ivankra/hsk30/tree/${IVANKRA_SHA}`,
    license: "MIT (© 2023 Ivan Krasilnikov, © 2021 Shawky, © 2021 Pleco Inc.)",
    use: "word list, level assignment, pinyin, traditional forms, parts of speech, CC-CEDICT keys",
  },
  {
    name: "HSK 3.0 character list (elkmovie/hsk30, OCR by Pleco)",
    url: `https://github.com/elkmovie/hsk30/tree/${ELKMOVIE_SHA}`,
    license: "MIT (© 2021 Pleco Inc.)",
    use: "official character list per level (cross-checked with ivankra/hsk30 hsk30-chars.csv)",
  },
  {
    name: "CC-CEDICT (MDBG snapshot 2025-09-12, SHA-256 b8c062da…e1e4, mirrored in licryle/CFDICT-Next)",
    url: "https://www.mdbg.net/chinese/dictionary?page=cc-cedict",
    license: "CC BY-SA 4.0",
    use: "English glosses (shortened)",
  },
  {
    name: "CFDICT — dictionnaire chinois-français libre, by David Houstin / Chine Informations (version 14/12/2024, mirrored in licryle/CFDICT-Next)",
    url: "https://chine.in/mandarin/dictionnaire/CFDICT/",
    license: "CC BY-SA 3.0",
    use: "French glosses (shortened)",
  },
];

// Hand-written glosses for official items that have no CC-CEDICT/CFDICT entry (mostly
// transparent phrases like 不太, 能不能) or whose dictionary gloss is misleading.
// These are original to Hanlu.
const MANUAL = {
  "车上": { en: "in the car; on the bus/train", fr: "dans la voiture ; dans le bus/train" },
  "不太": { en: "not very; not too", fr: "pas très ; pas trop" },
  "不一会儿": { en: "soon; in a moment; before long", fr: "bientôt ; en un instant ; peu après" },
  "见过": { en: "to have seen; to have met", fr: "avoir vu ; avoir rencontré" },
  "送到": { en: "to deliver to; to take (sb) to", fr: "livrer à ; accompagner (qqn) jusqu'à" },
  "这时候": { en: "at this time; at this moment", fr: "à ce moment-là ; maintenant" },
  "这时": { en: "at this time; at this moment", fr: "à ce moment-là ; maintenant" },
  "放到": { en: "to put (sth) in/on", fr: "mettre (qch) dans/sur ; poser" },
  "能不能": { en: "can (you)...?; whether (one) can", fr: "est-ce que (tu) peux... ? ; pouvoir ou non" },
  "眼里": { en: "in one's eyes; in one's view", fr: "aux yeux de ; selon (qqn)" },
  "有劲儿": { en: "strong; energetic; interesting", fr: "fort ; énergique ; intéressant" },
  "城里": { en: "in town; downtown; the city", fr: "en ville ; centre-ville" },
  "很难说": { en: "hard to say", fr: "difficile à dire" },
  "一番": { en: "(m. for effort, words, etc.); a spell of", fr: "(classificateur d'efforts, de paroles, etc.) ; une fois" },
  "指着": { en: "to point at", fr: "montrer du doigt ; pointer" },
  "不利于": { en: "to be unfavorable to; harmful to", fr: "défavorable à ; nuisible à" },
  "不肯": { en: "to be unwilling to; to refuse to", fr: "ne pas vouloir ; refuser de" },
  "不难": { en: "not difficult; easy", fr: "pas difficile ; facile" },
  "不如说": { en: "it would be better to say; rather", fr: "il vaudrait mieux dire ; plutôt" },
  "不予": { en: "not to grant; to refuse to", fr: "ne pas accorder ; refuser de" },
  "趁着": { en: "while; taking advantage of", fr: "profiter de ; pendant que" },
  "定为": { en: "to designate as; to set as", fr: "désigner comme ; fixer à" },
  "飞往": { en: "to fly to", fr: "s'envoler pour ; voler vers" },
  "公益性": { en: "public-interest (nature); non-profit", fr: "d'utilité publique ; à but non lucratif" },
  "怀着": { en: "to harbor (a feeling); with (hope, etc.)", fr: "nourrir (un sentiment) ; avec (espoir, etc.)" },
  "离谱儿": { en: "outrageous; unreasonable; off the mark", fr: "exagéré ; déraisonnable ; à côté de la plaque" },
  "难以想象": { en: "unimaginable; hard to imagine", fr: "inimaginable ; difficile à imaginer" },
  "说起来": { en: "speaking of; come to think of it", fr: "en parlant de ; à vrai dire" },
  "效仿": { en: "to imitate; to follow the example of", fr: "imiter ; suivre l'exemple de" },
  "致力于": { en: "to devote oneself to; to be committed to", fr: "se consacrer à ; œuvrer pour" },
  "着眼于": { en: "to focus on; to have in view", fr: "viser à ; se concentrer sur" },
  "极了": { en: "extremely; exceedingly (after adj.)", fr: "extrêmement ; on ne peut plus (après adj.)" },
  "分之": { en: "(in fractions) X分之Y = Y/X", fr: "(fractions) X分之Y = Y/X" },
  "有一些": { en: "some; somewhat; a little", fr: "quelques ; un peu" },
};

// Per-id fixes where the dictionary's first senses don't match the sense taught at that level
// (multi-level homographs such as 称1/称2, 本 as pronoun, 打 as preposition). Original to Hanlu.
const MANUAL_ID = {
  "2-称": { en: "to call; to name; to be called", fr: "appeler ; nommer ; s'appeler" },
  "5-称": { en: "to weigh", fr: "peser" },
  "6-本": { en: "this; one's own; current", fr: "ce ; propre ; présent (ce …-ci)" },
  "5-打": { en: "(coll.) from; since", fr: "(fam.) depuis ; à partir de" },
  "2-面-2": { fr: "nouilles ; pâtes ; farine" },
  "1-号": { en: "number; day of the month; size", fr: "numéro ; jour du mois ; taille" },
  "1-个": { en: "(general classifier for people and things); individual", fr: "(classificateur général pour personnes et objets) ; individuel" },
  "1-毛": { en: "mao (1/10 of a yuan); hair; feather", fr: "mao (1/10 de yuan) ; poil ; plume" },
  "1-分": { en: "minute; point (score); fen (1/100 of a yuan)", fr: "minute ; point (note) ; fen (1/100 de yuan)" },
  "2-分": { en: "to divide; to separate; to distribute", fr: "diviser ; partager ; séparer" },
  "1-会": { en: "can; to know how to; to be likely to", fr: "savoir (faire) ; pouvoir ; être probable" },
  "2-会": { en: "meeting; gathering; association", fr: "réunion ; rencontre ; association" },
  "1-干": { fr: "sec ; vide ; en vain" },
  "1-里": { en: "inside; in; interior", fr: "dans ; intérieur ; à l'intérieur" },
  "1-穿": { en: "to wear; to put on; to pass through", fr: "porter (vêtements) ; mettre ; passer à travers" },
  "1-跟": { en: "with; and; to follow", fr: "avec ; et ; suivre" },
  "1-别": { en: "don't...!; other; another", fr: "ne... pas ! ; autre" },
  "4-别": { en: "to pin; to fasten; to leave", fr: "épingler ; attacher ; quitter" },
  "1-行": { en: "OK; all right; capable; to walk", fr: "d'accord ; ça va ; compétent ; marcher" },
  "1-站": { fr: "station ; arrêt ; se tenir debout" },
  "1-正": { en: "just (now); in the process of; straight", fr: "juste ; en train de ; droit" },
  "1-不客气": { fr: "de rien ; je vous en prie ; impoli" },
  "1-奶奶": { fr: "grand-mère (paternelle) ; mamie" },
  "1-吗": { fr: "(particule interrogative des questions oui/non)" },
  "1-等": { fr: "attendre ; jusqu'à ce que" },
  "2-等": { en: "and so on; etc.; class; rank", fr: "etc. ; et ainsi de suite ; rang" },
  "1-岁": { fr: "an (âge) ; année d'âge" },
  "1-网友": { fr: "internaute ; ami en ligne" },
  "1-听写": { fr: "dictée ; écrire sous la dictée" },
  "1-真的": { fr: "vraiment ; vrai ; réel" },
  "2-对": { en: "towards; to; for; right; correct", fr: "envers ; à ; pour ; correct" },
  "2-多": { en: "how (much, many, old...); more than; over", fr: "combien ; plus de ; très" },
  "2-好": { en: "very; quite; so", fr: "très ; bien ; si" },
  "2-老": { en: "always; very; old", fr: "toujours ; très ; vieux" },
  "2-那": { en: "then; in that case", fr: "alors ; dans ce cas" },
  "2-才": { en: "only then; just; only", fr: "seulement (alors) ; juste ; ne... que" },
  "2-卡": { en: "card; (coll.) slow; to block", fr: "carte ; bloquer ; coincer" },
  "2-该": { en: "should; ought to; to be sb's turn", fr: "devoir ; falloir ; être le tour de qqn" },
  "7-该": { en: "this; that; the said", fr: "ce ; ledit ; ce dernier" },
  "2-度": { en: "degree (temperature, angle); extent; measure", fr: "degré ; mesure ; limite" },
  "2-米": { en: "meter (unit of length); rice", fr: "mètre ; riz" },
  "3-米": { en: "rice; uncooked rice", fr: "riz ; grain" },
  "2-两": { en: "tael (50 g); two", fr: "liang (50 g) ; deux" },
  "3-白": { en: "in vain; for nothing; free of charge", fr: "en vain ; pour rien ; gratuitement" },
  "4-次": { en: "second-rate; inferior; next", fr: "de second ordre ; inférieur ; suivant" },
  "4-要": { en: "if; in case", fr: "si ; au cas où" },
  "4-花": { en: "multicolored; blurred (vision); fancy", fr: "multicolore ; trouble (vue) ; fantaisie" },
  "6-成": { en: "one tenth; 10 percent", fr: "dixième ; 10 pour cent" },
  "2-刻": { fr: "quart d'heure ; moment" },
  "2-表": { en: "watch; meter; table (chart); form", fr: "montre ; compteur ; tableau ; formulaire" },
  "2-克": { en: "gram; to be able to; to overcome", fr: "gramme ; pouvoir ; vaincre" },
  "2-道": { en: "(m. for rivers, doors, questions, courses); road; way", fr: "(classificateur : rivières, portes, questions, plats) ; route ; voie" },
  "2-老朋友": { en: "old friend", fr: "vieil ami" },
  "2-带": { fr: "apporter ; emporter ; porter sur soi" },
  "2-刚": { en: "just; just now; exactly", fr: "juste ; à l'instant ; exactement" },
  "2-或": { en: "or; maybe; perhaps", fr: "ou ; peut-être" },
  "2-省": { fr: "province" },
  "2-省-2": { fr: "économiser; épargner; omettre" },
  "2-长-2": { fr: "grandir; pousser; se développer" },
  "2-实在-2": { en: "honest; dependable; solid (work)", fr: "honnête; sérieux; solide" },
  "3-把": { en: "(marks the object: 把 + obj. + verb); to hold", fr: "(introduit le complément d'objet); tenir" },
  "3-把-2": { fr: "(classificateur : objets à poignée, poignée de)" },
  "3-初-2": { en: "first (days of a month, as in 初一); junior", fr: "premier (jours du mois, ex. 初一)" },
  "3-任-2": { en: "no matter (how, what, etc.); to let", fr: "quel que soit; n'importe; laisser" },
  "3-为-2": { en: "by (in passive 为…所…); as", fr: "par (passif 为…所…); comme" },
  "4-批-2": { fr: "lot; groupe; fournée" },
  "5-品": { fr: "goûter; savourer; juger" },
  "6-副-2": { fr: "(classificateur : paires, ensembles, expressions du visage)" },
  "6-料": { fr: "prévoir; s'attendre à; deviner" },
  "6-料-2": { fr: "matériau; matière; ingrédient" },
  "6-露-2": { en: "dew; to reveal; to show", fr: "rosée; apparaître; révéler" },
  "7-且": { en: "for the time being; just; even", fr: "pour le moment; même" },
  "7-且-2": { en: "and; moreover; both...and", fr: "et; de plus; à la fois" },
  "7-之-2": { en: "(literary possessive particle, like 的)", fr: "(particule possessive littéraire, comme 的)" },
  "7-麻": { en: "hemp; flax; sesame", fr: "chanvre; lin; sésame" },
  "7-麻-2": { en: "numb; tingling; rough", fr: "engourdi; fourmillement; rugueux" },
  "7-码": { en: "to pile up; to stack; code", fr: "empiler; entasser; code" },
  "7-码-2": { en: "yard (unit); (m.) kind, sort (一码事)", fr: "yard; (classificateur) sorte (一码事)" },
  "7-则": { en: "then; but; however", fr: "alors; mais; en revanche" },
  "7-则-2": { en: "(m. for news items, notices, etc.)", fr: "(classificateur : articles, nouvelles, notes)" },
  "7-成年": { fr: "atteindre l'âge adulte; adulte" },
  "7-成年-2": { en: "all year round; the whole year", fr: "toute l'année" },
  "2-不过": { en: "but; however; only", fr: "mais ; cependant ; seulement" },
};

const POS_MAP = {
  N: "n", V: "v", Adj: "adj", Adv: "adv", Pron: "pron", Num: "num", M: "m", Prep: "prep",
  Conj: "conj", Aux: "part", Intj: "int", Prefix: "prefix", Suffix: "suffix", Phonetic: "onom",
};

// ---------------------------------------------------------------- download
async function download(key) {
  const url = FILES[key];
  const file = path.join(CACHE, key + path.extname(new URL(url).pathname));
  if (!REFRESH && fs.existsSync(file) && fs.statSync(file).size > 0) return file;
  fs.mkdirSync(CACHE, { recursive: true });
  process.stdout.write(`download ${url}\n`);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  } catch (e) {
    process.stdout.write(`  fetch failed (${e.message}), trying curl\n`);
    execFileSync("curl", ["-fsSL", "-o", file, url], { stdio: "inherit" });
  }
  return file;
}

// ---------------------------------------------------------------- parsing
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else q = false;
      } else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
}

/** Parse a CEDICT-format file into Map<"trad|simp[pinyin]", senses[]> plus a simp index. */
function parseCedict(text) {
  const byKey = new Map();
  const bySimp = new Map();
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^(\S+) (\S+) \[([^\]]*)\] \/(.*)\/\s*$/);
    if (!m) continue;
    const [, trad, simp, py, defs] = m;
    const key = `${trad}|${simp}[${py}]`;
    const senses = defs.split("/").filter(Boolean);
    const ent = { trad, simp, py, senses };
    const prev = byKey.get(key);
    byKey.set(key, prev ? { ...ent, senses: [...prev.senses, ...senses] } : ent);
    if (!bySimp.has(simp)) bySimp.set(simp, []);
    bySimp.get(simp).push(ent);
  }
  return { byKey, bySimp };
}

const normPy = (s) => s.toLowerCase().replace(/\s+/g, "").replace(/u:/g, "v").replace(/[^a-z0-9]/g, "").replace(/5/g, "");

// tone-marked pinyin -> numbered-ish comparable form (letters + tones, neutral dropped)
const TONES = { ā: "a1", á: "a2", ǎ: "a3", à: "a4", ē: "e1", é: "e2", ě: "e3", è: "e4", ī: "i1", í: "i2", ǐ: "i3", ì: "i4", ō: "o1", ó: "o2", ǒ: "o3", ò: "o4", ū: "u1", ú: "u2", ǔ: "u3", ù: "u4", ǖ: "v1", ǘ: "v2", ǚ: "v3", ǜ: "v4", ü: "v" };
function markedToLetters(p) {
  // letters only + multiset of tones, order-insensitive enough for matching
  let letters = "", tones = "";
  for (const ch of p.toLowerCase().normalize("NFC")) {
    if (TONES[ch]) { letters += TONES[ch][0]; tones += TONES[ch][1] ?? ""; }
    else if (/[a-z]/.test(ch)) letters += ch;
  }
  return letters + ":" + tones;
}
function numberedToLetters(p) {
  let letters = "", tones = "";
  for (const syl of p.toLowerCase().replace(/u:/g, "v").split(/\s+/)) {
    const m = syl.match(/^([a-z]+)([1-5])?$/);
    if (!m) { letters += syl.replace(/[^a-z]/g, ""); continue; }
    letters += m[1];
    if (m[2] && m[2] !== "5") tones += m[2];
  }
  return letters + ":" + tones;
}

// ---------------------------------------------------------------- gloss shortening
const MAX_LEN = 60;
function cleanSense(s, lang) {
  let t = s.trim();
  t = t.replace(/[\u3007\u3400-\u9fff]+\|([\u3007\u3400-\u9fff]+)\[[^\]]*\]/g, "$1"); // 條|条[tiao2] -> 条
  t = t.replace(/([\u3400-\u9fff]+)\[[a-zA-Z0-9: ]+\]/g, "$1"); // 条[tiao2] -> 条
  t = t.replace(/\s*\(CL:[^)]*\)/g, "");
  t = t.replace(/^\(bound form\)\s*/i, "").replace(/\s*\(bound form\)/gi, "");
  t = t.replace(/\s+/g, " ").trim();
  return t;
}
function isJunk(s) {
  return (
    /^CL:/.test(s) ||
    /^(old |archaic |ancient |Japanese |erroneous )?variant of /i.test(s) ||
    /^(also written|also pr\.|Taiwan pr\.|see also|see |used in |abbr\. for )/i.test(s) ||
    /^\(?(surname|nom de famille)\b/i.test(s) ||
    /^(variante de|voir |abr\. de|abréviation de)/i.test(s) ||
    /^\(?Tw\)?$/.test(s) ||
    /^erhua (form|variant) of /i.test(s) ||
    UNSAFE_RE.test(s)
  );
}
// senses we never want to show to learners (vulgar/slang) — dropped whenever another sense exists
const UNSAFE_RE = /\((slang|vulgar|vulg\.?|argot|vulgaire|obscène|offensive|pejorative|péj\.?)\b|prostitu|masturb|branlette|nichons|doudounes|\bpenis\b|\bvagina\b|pénis|vagin/i;
const CLASSIFIER_RE = /^\(?(classifier|measure word|classificateur|spécificatif|numéral)/i;
/** split "a; b (x; y); c" on top-level semicolons only */
function splitTop(s) {
  const out = [];
  let depth = 0, cur = "";
  for (const ch of s) {
    if (ch === "(" || ch === "（") depth++;
    if (ch === ")" || ch === "）") depth = Math.max(0, depth - 1);
    if (ch === ";" && depth === 0) { out.push(cur.trim()); cur = ""; } else cur += ch;
  }
  out.push(cur.trim());
  return out.filter(Boolean);
}
function truncate(s) {
  if (s.length <= MAX_LEN) return s;
  const comma = s.indexOf(", ");
  if (comma > 0 && comma <= MAX_LEN) s = s.slice(0, comma);
  if (s.length > MAX_LEN) s = s.slice(0, MAX_LEN - 1).replace(/[\s,;:]+\S*$/, "") + "…";
  const open = (s.match(/[(（]/g) ?? []).length - (s.match(/[)）]/g) ?? []).length;
  if (open > 0) s = s.replace(/…$/, "") + "…" + ")".repeat(open);
  return s;
}
/** Rank a sense unit for the entry's primary part of speech (lower = better). EN only, except classifiers. */
function posRank(u, lang, pos0) {
  if (pos0 === "m") return CLASSIFIER_RE.test(u) || /classifier|classificateur/i.test(u) ? 0 : 1;
  if (lang !== "en" || !pos0) return 0;
  const isVerb = /^(\([^)]*\)\s*)?to /.test(u);
  const isCl = /classifier/i.test(u);
  if (pos0 === "v") return isVerb ? 0 : 1;
  if (pos0 === "n" || pos0 === "adj" || pos0 === "pron" || pos0 === "num") return isVerb || isCl ? 1 : 0;
  if (pos0 === "adv" || pos0 === "prep" || pos0 === "conj") return isVerb || isCl ? 1 : 0;
  return 0;
}
function shorten(senses, lang, pos = []) {
  let cand = senses.map((s) => s.trim()).filter(Boolean);
  const good = cand.filter((s) => !isJunk(s));
  if (good.length) cand = good;
  cand = cand.map((s) => cleanSense(s, lang)).filter(Boolean);
  // explode senses into top-level sub-senses, remembering which sense they came from
  let units = [];
  cand.forEach((sense, si) => {
    const subs = lang === "en" ? splitTop(sense) : [sense];
    subs.forEach((u) => { if (!isJunk(u)) units.push({ u, si }); });
  });
  if (!units.length) return "";
  const pos0 = pos[0];
  const hasCjk = (u) => /[\u3400-\u9fff]/.test(u);
  units = units
    .map((x, i) => ({ ...x, i, r: posRank(x.u, lang, pos0) + (hasCjk(x.u) ? 0.5 : 0) }))
    .sort((a, b) => a.r - b.r || a.i - b.i);
  const fits = units.filter((x) => x.u.length <= MAX_LEN);
  const out = [];
  const seen = new Set();
  const perSense = new Map();
  for (const { u, si } of fits) {
    const k = u.toLowerCase();
    if (seen.has(k)) continue;
    if (out.length && hasCjk(u)) continue; // keep secondary senses free of untranslated hanzi
    if ((perSense.get(si) ?? 0) >= 2) continue; // at most 2 sub-senses of one dictionary sense
    const next = [...out, u].join("; ");
    if (next.length > MAX_LEN) { if (out.length) break; else continue; }
    out.push(u);
    seen.add(k);
    perSense.set(si, (perSense.get(si) ?? 0) + 1);
    if (out.length >= 3) break;
  }
  if (!out.length) out.push(truncate(units[0].u));
  return out.join("; ");
}

// ---------------------------------------------------------------- lookup
/** Resolve "variant of 復習|复习[fu4 xi2]" / "see …" / "abbr. for …" to the referenced entry's senses. */
function followRefs(dict, senses, depth = 0) {
  const out = [];
  if (depth > 2) return out;
  for (const s of senses) {
    for (const m of s.matchAll(/(?:([\u3400-\u9fff]+)\|)?([\u3400-\u9fff]+)\[([^\]]+)\]/g)) {
      const [, trad, simp, py] = m;
      const ents = (dict.bySimp.get(simp) ?? []).filter((e) => normPy(e.py) === normPy(py) && (!trad || e.trad === trad));
      for (const e of ents) {
        const good = e.senses.filter((x) => !isJunk(x.trim()));
        out.push(...(good.length ? good : followRefs(dict, e.senses, depth + 1)));
      }
    }
  }
  return out;
}

function lookup(dict, cedictKeys, simp, pinyinMarked) {
  const senses = [];
  // 1) exact CC-CEDICT key(s) from ivankra
  for (const k of cedictKeys) {
    const e = dict.byKey.get(k);
    if (e) senses.push(...e.senses);
  }
  // entries like 複習 = "variant of 復習" carry no meaning: follow the reference, then other spellings
  if (senses.length && !senses.some((x) => !isJunk(x.trim()))) senses.push(...followRefs(dict, senses));
  if (senses.some((x) => !isJunk(x.trim()))) return senses;
  // 2) same simplified + same pinyin (after key's pinyin), ignoring trad
  const cands = dict.bySimp.get(simp) ?? [];
  const keyPys = cedictKeys.map((k) => k.match(/\[(.*)\]/)?.[1]).filter(Boolean).map(normPy);
  let hit = cands.filter((e) => keyPys.includes(normPy(e.py)));
  if (!hit.length && pinyinMarked) {
    const want = markedToLetters(pinyinMarked);
    hit = cands.filter((e) => numberedToLetters(e.py) === want);
    if (!hit.length) {
      const wantL = want.split(":")[0];
      hit = cands.filter((e) => numberedToLetters(e.py).split(":")[0] === wantL);
    }
  }
  // prefer the same traditional form as the CEDICT key, then lowercase (non proper-noun) readings
  const keyTrads = cedictKeys.map((k) => k.split("|")[0]);
  hit.sort((a, b) => (keyTrads.includes(a.trad) ? 0 : 1) - (keyTrads.includes(b.trad) ? 0 : 1));
  // prefer lowercase (non proper-noun) readings
  hit.sort((a, b) => (/^[A-Z]/.test(a.py) ? 1 : 0) - (/^[A-Z]/.test(b.py) ? 1 : 0));
  for (const e of hit) senses.push(...e.senses);
  return senses;
}

// ---------------------------------------------------------------- main
const LEVEL_KEYS = { "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7-9": 7 };
const OFFICIAL = { 1: 500, 2: 772, 3: 973, 4: 1000, 5: 1071, 6: 1140, 7: 5636 };

async function main() {
  const paths = {};
  for (const k of Object.keys(FILES)) paths[k] = await download(k);

  const words = parseCsv(fs.readFileSync(paths.hsk30, "utf8"));
  const cedict = parseCedict(zlib.gunzipSync(fs.readFileSync(paths.cedict)).toString("utf8"));
  const cfdict = parseCedict(fs.readFileSync(paths.cfdict, "utf8"));

  const byLevel = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
  const officialCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const problems = [];

  const makeEntry = (level, simp, trad, pinyin, pos, cedictKeys) => {
    const man = MANUAL[simp];
    const en = man?.en ?? shorten(lookup(cedict, cedictKeys, simp, pinyin), "en", pos);
    let frSenses = lookup(cfdict, cedictKeys, simp, pinyin);
    // erhua words (好玩儿, 面条儿 …) are often only listed without 儿 in CFDICT
    if (!frSenses.length && simp.length > 1 && simp.endsWith("儿")) frSenses = lookup(cfdict, [], simp.slice(0, -1), pinyin.replace(/r$/, ""));
    const fr = man?.fr ?? (frSenses.length ? shorten(frSenses, "fr", pos) : undefined);
    const e = { id: "", hanzi: simp };
    if (trad) e.trad = trad;
    e.pinyin = pinyin;
    e.level = level;
    if (pos.length) e.pos = pos;
    e.en = en;
    if (fr) e.fr = fr;
    if (!en) problems.push(`no en: ${level} ${simp} ${pinyin}`);
    return e;
  };

  for (const w of words) {
    const level = LEVEL_KEYS[w.Level];
    if (!level) throw new Error(`bad level ${w.Level} for ${w.ID}`);
    officialCount[level]++;
    const pos = w.POS ? [...new Set(w.POS.split("/").map((p) => POS_MAP[p] ?? p.toLowerCase()))] : [];
    const keys = w.CEDICT ? w.CEDICT.split("/") : [];
    if (w.Variants) {
      const vars = JSON.parse(w.Variants).filter((v) => !v.Example);
      const main = vars[0];
      const clean = (s) => s.replace(/^…|…$/g, "");
      const mainSimp = clean(main.Simplified);
      const mainTrad = clean((main.Traditional ?? w.Traditional).split("|")[0]);
      const altReadings = vars.filter((v) => v.Simplified === main.Simplified && v.Pinyin !== main.Pinyin).map((v) => v.Pinyin);
      const e = makeEntry(level, mainSimp, mainTrad, main.Pinyin, pos, main.CEDICT ? main.CEDICT.split("/") : keys);
      if (altReadings.length) e.en = `${e.en} (also read ${altReadings.join(", ")})`;
      byLevel[level].push(e);
      // alternative written forms (爸 for 爸爸, 〇 for 零, 有一点儿 …) become their own entries
      const isAffix = /Prefix|Suffix/.test(w.POS); // 化（现代化）: the example word is not a separate item
      for (const v of vars.slice(1)) {
        if (isAffix || v.Simplified === main.Simplified) continue;
        const vt = (v.Traditional ?? "").split("|")[0] || undefined;
        const ve = makeEntry(level, clean(v.Simplified), vt, v.Pinyin, pos, v.CEDICT ? v.CEDICT.split("/") : []);
        ve.variantOf = mainSimp;
        byLevel[level].push(ve);
      }
    } else {
      const trad = w.Traditional.split("|")[0];
      byLevel[level].push(makeEntry(level, w.Simplified, trad, w.Pinyin, pos, keys));
    }
  }

  // ids + dedupe (homographs like 面1 / 面2 get "-2")
  for (const [lvl, arr] of Object.entries(byLevel)) {
    const used = new Map();
    for (const e of arr) {
      const base = `${lvl}-${e.hanzi}`;
      const n = (used.get(base) ?? 0) + 1;
      used.set(base, n);
      e.id = n === 1 ? base : `${base}-${n}`;
    }
  }

  for (const arr of Object.values(byLevel)) {
    for (const e of arr) {
      if (MANUAL_ID[e.id]) Object.assign(e, MANUAL_ID[e.id]);
      e.en = e.en.replace(/\s+;\s*/g, "; ");
      if (e.fr) e.fr = e.fr.replace(/\s+;\s*/g, "; ");
    }
  }

  // Hanlu's own French translations for entries CFDICT does not cover (scripts/fr-supplement.json: id -> fr)
  const SUPP_PATH = path.join(__dirname, "fr-supplement.json");
  const frSupp = fs.existsSync(SUPP_PATH) ? JSON.parse(fs.readFileSync(SUPP_PATH, "utf8")) : {};
  let frSuppCount = 0;
  for (const arr of Object.values(byLevel)) {
    for (const e of arr) {
      if (!e.fr && frSupp[e.id]) { e.fr = frSupp[e.id]; frSuppCount++; }
    }
  }

  // ---- sanity checks
  const hanRe = /^[\u3007\u3400-\u9fff]+$/;
  const toneRe = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/;
  const NEUTRAL_OK = new Set(["men", "zi", "ma", "ne", "le", "de", "ba", "a", "zhe", "guo", "tou", "me", "ya", "la", "lou", "na", "wa"]);
  for (const arr of Object.values(byLevel)) {
    for (const e of arr) {
      if (!hanRe.test(e.hanzi)) problems.push(`non-hanzi: ${e.id}`);
      if (/\d/.test(e.pinyin)) problems.push(`numbered pinyin: ${e.id} ${e.pinyin}`);
      if (!toneRe.test(e.pinyin) && !NEUTRAL_OK.has(e.pinyin.toLowerCase())) problems.push(`no tone mark: ${e.id} ${e.pinyin}`);
      if (!e.en) problems.push(`empty en: ${e.id}`);
      if (e.en.length > 90) problems.push(`long en: ${e.id} ${e.en}`);
    }
  }
  if (problems.length) console.warn("PROBLEMS:\n  " + problems.join("\n  "));

  // ---- write vocab
  fs.mkdirSync(OUT_VOCAB, { recursive: true });
  const counts = {}, frCoverage = {}, officialCounts = {}, variantExtras = {};
  for (const [lvl, arr] of Object.entries(byLevel)) {
    const out = arr.map(({ variantOf, ...e }) => e);
    fs.writeFileSync(path.join(OUT_VOCAB, `hsk${lvl}.json`), "[\n" + out.map((e) => "  " + JSON.stringify(e)).join(",\n") + "\n]\n");
    counts[lvl] = out.length;
    officialCounts[lvl] = officialCount[lvl];
    variantExtras[lvl] = arr.filter((e) => e.variantOf).map((e) => `${e.hanzi} (variant of ${e.variantOf})`);
    frCoverage[lvl] = Math.round((out.filter((e) => e.fr).length / out.length) * 1000) / 1000;
  }

  // ---- characters: official list order, per section
  const charText = fs.readFileSync(paths.elkChars, "utf8");
  const chars = {};
  let section = 0;
  for (const line of charText.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    if (!line.includes("\t")) { section++; continue; }
    if (section >= 1 && section <= 7) (chars[String(section)] ??= []).push(line.split("\t")[1].trim());
  }
  // cross-check against ivankra's character list
  const ivChars = parseCsv(fs.readFileSync(paths.hsk30chars, "utf8"));
  const ivLevel = new Map(ivChars.map((c) => [c.Hanzi, LEVEL_KEYS[c.Level]]));
  let charMismatch = 0;
  for (const [lvl, arr] of Object.entries(chars)) for (const c of arr) if (ivLevel.get(c) !== Number(lvl)) charMismatch++;
  const charCounts = Object.fromEntries(Object.entries(chars).map(([k, v]) => [k, v.length]));
  fs.mkdirSync(OUT_CHARS, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_CHARS, "hsk-chars.json"),
    "{\n" + Object.entries(chars).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(",\n") + "\n}\n",
  );

  const meta = {
    license:
      "src/data/vocab/*.json: CC BY-SA 4.0 (adapted from CC-CEDICT, CC BY-SA 4.0, and CFDICT, CC BY-SA 3.0 — BY-SA 3.0 §4(b) allows adaptations under a later version). src/data/chars/hsk-chars.json: MIT (Pleco Inc.). See DATA_LICENSES.md.",
    sources: SOURCES,
    manualOverrides: Object.keys(MANUAL).length + Object.keys(MANUAL_ID).length,
    counts,
    officialCounts,
    officialReference: OFFICIAL,
    variantExtras,
    frCoverage,
    frSupplement: { source: "Hanlu editorial translations", count: frSuppCount },
    charCounts,
    notes: [
      "Level 7 = HSK 7–9 band (not split officially).",
      "One entry per official item; alternative written forms listed on the official list (e.g. 爸 for 爸爸|爸, 〇 for 零|〇) are added as extra entries at the same level — see variantExtras.",
      "Affix items (第, 们, 子, 家, 化 …) are listed as the bare affix; the official example words (第二, 朋友们 …) are not added.",
      "Homographs listed twice on the official list (面1/面2) get ids with a '-2' suffix.",
      "Glosses are shortened automatically (max 60 chars, up to 3 senses, sense chosen by part of speech); dictionary French glosses come only from the human-made CFDICT (no machine translation).",
      "A small set of glosses (see MANUAL / MANUAL_ID in scripts/build-vocab.mjs) was hand-written by Hanlu for items missing from the dictionaries or where the dictionary's first sense does not match the sense taught at that level.",
      "French glosses for items missing from CFDICT are Hanlu's own translations (scripts/fr-supplement.json, see frSupplement); items without an 'fr' field still need translation.",
    ],
    generatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(OUT_VOCAB, "meta.json"), JSON.stringify(meta, null, 2) + "\n");

  console.log("counts (official items -> entries):");
  for (const l of Object.keys(counts)) console.log(`  L${l}: official ${officialCounts[l]} (ref ${OFFICIAL[l]}) -> ${counts[l]} entries, fr ${(frCoverage[l] * 100).toFixed(1)}%`);
  console.log("chars:", charCounts, "mismatch vs ivankra:", charMismatch);
  console.log("problems:", problems.length);
}

main().catch((e) => { console.error(e); process.exit(1); });
