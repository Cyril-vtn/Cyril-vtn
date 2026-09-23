"use client";
import { useState } from "react";
import type { Locale } from "@/content/types";
import StrokeWriter from "../StrokeWriter";
import Speak from "../Speak";
import { Pinyin } from "../Zh";

const SEQ: { c: string; p: string; fr: string; en: string }[] = [
  { c: "汉", p: "hàn", fr: "Han · chinois", en: "Han · Chinese" },
  { c: "语", p: "yǔ", fr: "langue", en: "language" },
  { c: "学", p: "xué", fr: "apprendre", en: "to learn" },
  { c: "路", p: "lù", fr: "chemin", en: "road · path" },
  { c: "爱", p: "ài", fr: "aimer", en: "to love" },
  { c: "梦", p: "mèng", fr: "rêve", en: "dream" },
];

export default function HeroCard({ locale }: { locale: Locale }) {
  const [cur, setCur] = useState(SEQ[0]);
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--seal)_22%,transparent),transparent)] blur-2xl" />
      <div className="card float relative overflow-hidden p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-jade" /> HSK 1
          </span>
          <span className="font-han text-sm text-muted">笔顺 · {locale === "fr" ? "ordre des traits" : "stroke order"}</span>
        </div>
        <div className="mt-6 flex justify-center">
          <StrokeWriter
            char={SEQ[0].c}
            mode="loop"
            size={240}
            sequence={SEQ.map((s) => s.c)}
            onSequenceChar={(c) => setCur(SEQ.find((s) => s.c === c) ?? SEQ[0])}
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <Pinyin text={cur.p} className="font-display text-3xl font-semibold" />
            <p className="text-sm text-ink-2">{locale === "fr" ? cur.fr : cur.en}</p>
          </div>
          <Speak text={cur.c} source="hero" size="lg" />
        </div>
      </div>
      <div className="card pop absolute -left-6 top-10 hidden px-4 py-2.5 sm:block" style={{ animationDelay: ".4s" }}>
        <span className="font-han text-lg">
          <span className="t3">你</span>
          <span className="t3">好</span>
        </span>
        <span className="ml-2 text-sm text-muted">nǐ hǎo</span>
      </div>
      <div className="card pop absolute -right-4 bottom-24 hidden px-4 py-2.5 sm:block" style={{ animationDelay: ".8s" }}>
        <span className="font-han text-lg">
          <span className="t4">谢</span>
          <span className="t5">谢</span>
        </span>
        <span className="ml-2 text-sm text-muted">xièxie</span>
      </div>
    </div>
  );
}
