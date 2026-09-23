"use client";
import type { GrammarPoint, Locale } from "@/content/types";
import { l } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import Speak from "../Speak";
import { Pinyin } from "../Zh";
import Icon from "../Icon";

/** Tiny formatter: **bold**, line breaks → paragraphs, ✗/✓ lines highlighted. */
export function RichText({ text, className = "" }: { text: string; className?: string }) {
  const paras = text.split(/\n{2,}|\n(?=[✗✓•\-])/).filter(Boolean);
  return (
    <div className={`prose-hl ${className}`}>
      {paras.map((p, i) => {
        const tone = p.trim().startsWith("✗") ? "text-seal" : p.trim().startsWith("✓") ? "text-jade" : "";
        return (
          <p key={i} className={tone}>
            {p.split(/(\*\*[^*]+\*\*)/g).map((seg, k) =>
              seg.startsWith("**") && seg.endsWith("**") ? <strong key={k}>{seg.slice(2, -2)}</strong> : seg.split("\n").flatMap((x, j, arr) => (j < arr.length - 1 ? [x, <br key={`${k}-${j}`} />] : [x])),
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function GrammarBody({ g, locale }: { g: GrammarPoint; locale: Locale }) {
  const t = getUI(locale).common;
  return (
    <div>
      <div className="mt-4 inline-flex rounded-xl border border-seal/30 bg-seal/5 px-4 py-2 font-han text-lg font-medium text-seal">
        {g.pattern}
      </div>
      <RichText text={l(g.explanation, locale)} className="mt-3 text-ink-2" />
      <h4 className="mt-6 text-xs font-semibold tracking-widest text-muted uppercase">{t.examples}</h4>
      <ul className="mt-3 divide-y divide-line">
        {g.examples.map((ex, i) => (
          <li key={i} className="flex items-start gap-3 py-3">
            <Speak text={ex.zh} source="grammar_example" size="sm" />
            <div>
              <p className="font-han text-xl">{ex.zh}</p>
              <Pinyin text={ex.pinyin} className="text-sm" />
              <p className="text-sm text-muted">{l(ex.tr, locale)}</p>
            </div>
          </li>
        ))}
      </ul>
      {g.pitfalls && (
        <div className="mt-5 rounded-2xl border border-gold/30 bg-gold/5 p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-gold">
            <Icon name="info" size={16} /> {t.pitfalls}
          </p>
          <RichText text={l(g.pitfalls, locale)} className="mt-1 text-sm" />
        </div>
      )}
    </div>
  );
}
