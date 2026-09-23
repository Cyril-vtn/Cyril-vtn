"use client";
import { tonesForHanzi, tonify } from "@/lib/pinyin";
import { useStore } from "@/lib/store";

/** Pinyin with each syllable colored by tone. */
export function Pinyin({ text, className = "" }: { text: string; className?: string }) {
  const colors = useStore((s) => s.settings.toneColors);
  if (!colors) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
      {tonify(text).map((t, i) =>
        t.isSyllable ? (
          <span key={i} className={`t${t.tone}`}>
            {t.text}
          </span>
        ) : (
          <span key={i}>{t.text}</span>
        ),
      )}
    </span>
  );
}

/** A word: each hanzi colored by its tone (optional). */
export function Hanzi({
  hanzi,
  pinyin,
  className = "",
  colored = true,
}: {
  hanzi: string;
  pinyin?: string;
  className?: string;
  colored?: boolean;
}) {
  const colors = useStore((s) => s.settings.toneColors);
  if (!pinyin || !colored || !colors) return <span className={`font-han ${className}`}>{hanzi}</span>;
  const tones = tonesForHanzi(hanzi, pinyin);
  let i = 0;
  return (
    <span className={`font-han ${className}`}>
      {[...hanzi].map((c, k) => {
        const isHan = /\p{Script=Han}/u.test(c);
        const tone = isHan ? tones[i++] : 0;
        return (
          <span key={k} className={isHan ? `t${tone}` : ""}>
            {c}
          </span>
        );
      })}
    </span>
  );
}

/** Ruby layout: pinyin above each character (words only). */
export function Ruby({ hanzi, pinyin, className = "" }: { hanzi: string; pinyin: string; className?: string }) {
  const syls = tonify(pinyin).filter((t) => t.isSyllable);
  const chars = [...hanzi];
  if (syls.length !== chars.filter((c) => /\p{Script=Han}/u.test(c)).length) {
    return (
      <span className={`inline-flex flex-col items-center ${className}`}>
        <Pinyin text={pinyin} className="text-[0.4em] tracking-wide" />
        <Hanzi hanzi={hanzi} pinyin={pinyin} />
      </span>
    );
  }
  let i = 0;
  return (
    <span className={`inline-flex ${className}`}>
      {chars.map((c, k) => {
        const s = /\p{Script=Han}/u.test(c) ? syls[i++] : undefined;
        return (
          <span key={k} className="inline-flex flex-col items-center">
            <span className={`text-[0.36em] leading-none font-sans font-medium ${s ? `t${s.tone}` : ""}`}>
              {s?.text ?? " "}
            </span>
            <span className={`font-han ${s ? `t${s.tone}` : ""}`}>{c}</span>
          </span>
        );
      })}
    </span>
  );
}
