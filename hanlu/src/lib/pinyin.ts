/** Pinyin helpers: tone detection, syllable splitting, numbered → marked conversion. */

const TONE_MARKS: Record<string, [string, number]> = {};
const groups: [string, string[]][] = [
  ["a", ["ā", "á", "ǎ", "à"]],
  ["e", ["ē", "é", "ě", "è"]],
  ["i", ["ī", "í", "ǐ", "ì"]],
  ["o", ["ō", "ó", "ǒ", "ò"]],
  ["u", ["ū", "ú", "ǔ", "ù"]],
  ["ü", ["ǖ", "ǘ", "ǚ", "ǜ"]],
];
for (const [base, marks] of groups) {
  marks.forEach((m, i) => {
    TONE_MARKS[m] = [base, i + 1];
    TONE_MARKS[m.toUpperCase()] = [base.toUpperCase(), i + 1];
  });
}

/** Tone (1–4, or 5 for neutral) of a single syllable. */
export function toneOf(syllable: string): number {
  for (const ch of syllable.normalize("NFC")) {
    const hit = TONE_MARKS[ch];
    if (hit) return hit[1];
  }
  return 5;
}

/** Remove tone marks: "nǐ hǎo" → "ni hao". ü kept. */
export function stripTones(s: string): string {
  let out = "";
  for (const ch of s.normalize("NFC")) out += TONE_MARKS[ch]?.[0] ?? ch;
  return out;
}

/** Normalized for search: lowercase, no tones, ü→v, no spaces/apostrophes. */
export function searchKey(s: string): string {
  return stripTones(s).toLowerCase().replace(/ü/g, "v").replace(/[\s'’·-]/g, "");
}

const INITIALS = "zh|ch|sh|b|p|m|f|d|t|n|l|g|k|h|j|q|x|r|z|c|s|y|w";
const FINALS =
  "iang|iong|uang|ueng|ang|eng|ing|ong|ian|iao|uai|uan|üan|van|un|ai|ei|ao|ou|an|en|er|ia|ie|iu|in|ua|uo|ui|üe|ve|ue|ün|a|o|e|i|u|ü|v|ng|n|m";
const SYL = new RegExp(`^(?:${INITIALS})?(?:${FINALS})`, "i");

/**
 * Split a pinyin word into syllables, e.g. "xuésheng" → ["xué", "sheng"], "Xī'ān" → ["Xī", "ān"].
 * Works on toned text by matching against the tone-stripped form. Greedy with backtracking.
 */
export function splitSyllables(word: string): string[] {
  const src = word.normalize("NFC");
  const bare = stripTones(src);
  const result: string[] = [];
  const solve = (pos: number): boolean => {
    if (pos >= bare.length) return true;
    if (bare[pos] === "'" || bare[pos] === "’" || bare[pos] === "-") return solve(pos + 1);
    const rest = bare.slice(pos);
    const m = rest.match(SYL);
    if (!m) return false;
    // try longest match first, then shorter ones (handles "xian" vs "xi'an" ambiguity reasonably)
    for (let len = m[0].length; len >= 1; len--) {
      const cand = rest.slice(0, len);
      if (!new RegExp(`^(?:${INITIALS})?(?:${FINALS})$`, "i").test(cand)) continue;
      // don't leave a dangling vowel-initial syllable that should have been an initial consonant
      const next = rest[len];
      if (next && /[aeiouüv]/i.test(next) && /[ngr]$/i.test(cand) && len > 1) {
        // e.g. "ni" + "ao"? prefer giving consonant to next syllable
        const shorter = cand.slice(0, -1);
        if (new RegExp(`^(?:${INITIALS})?(?:${FINALS})$`, "i").test(shorter)) {
          result.push(src.slice(pos, pos + len - 1));
          if (solve(pos + len - 1)) return true;
          result.pop();
        }
      }
      result.push(src.slice(pos, pos + len));
      if (solve(pos + len)) return true;
      result.pop();
    }
    return false;
  };
  if (!solve(0)) return [src];
  return result;
}

export interface ToneToken {
  text: string;
  tone: number;
  isSyllable: boolean;
}

/** Tokenize a pinyin sentence into syllables (with tone) and separators (spaces, punctuation). */
export function tonify(pinyin: string): ToneToken[] {
  const out: ToneToken[] = [];
  const parts = pinyin.normalize("NFC").split(/([^A-Za-zÀ-ɏ'’ü]+)/);
  for (const part of parts) {
    if (!part) continue;
    if (!/[A-Za-zÀ-ɏü]/.test(part)) {
      out.push({ text: part, tone: 0, isSyllable: false });
      continue;
    }
    const syls = splitSyllables(part);
    syls.forEach((s) => out.push({ text: s, tone: toneOf(s), isSyllable: true }));
  }
  return out;
}

/** Tones of each Chinese character in a word, based on its pinyin (best effort). */
export function tonesForHanzi(hanzi: string, pinyin: string): number[] {
  const syls = tonify(pinyin).filter((t) => t.isSyllable);
  const chars = [...hanzi].filter((c) => /\p{Script=Han}/u.test(c));
  return chars.map((_, i) => syls[i]?.tone ?? 5);
}

const MARK_ORDER = ["a", "e", "o"];
/** Convert "ni3 hao3" → "nǐ hǎo". */
export function numberedToMarked(input: string): string {
  return input.replace(/([a-zü]+)([1-5])/gi, (_, syl: string, t: string) => {
    const tone = Number(t);
    let s = syl.replace(/v/g, "ü");
    if (tone === 5) return s;
    const lower = s.toLowerCase();
    let idx = -1;
    for (const v of MARK_ORDER) {
      if (lower.includes(v)) {
        idx = lower.indexOf(v);
        break;
      }
    }
    if (idx === -1) {
      if (lower.includes("iu")) idx = lower.indexOf("u");
      else if (lower.includes("ui")) idx = lower.indexOf("i");
      else {
        for (let i = lower.length - 1; i >= 0; i--)
          if ("aeiouü".includes(lower[i])) {
            idx = i;
            break;
          }
      }
    }
    if (idx === -1) return s;
    const base = lower[idx];
    const g = groups.find(([b]) => b === base);
    if (!g) return s;
    let mark = g[1][tone - 1];
    if (s[idx] !== lower[idx]) mark = mark.toUpperCase();
    s = s.slice(0, idx) + mark + s.slice(idx + 1);
    return s;
  });
}
