"use client";
import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/content/types";
import { track } from "@/lib/analytics";
import { href } from "@/lib/site";
import Speak from "../Speak";
import { Pinyin } from "../Zh";
import Icon from "../Icon";

const Q = {
  zh: "我是学生。",
  py: "Wǒ shì xuésheng.",
  options: [
    { fr: "Je suis étudiant.", en: "I am a student.", ok: true },
    { fr: "Je suis professeur.", en: "I am a teacher.", ok: false },
    { fr: "Tu es étudiant ?", en: "Are you a student?", ok: false },
  ],
};

export default function MiniQuiz({ locale }: { locale: Locale }) {
  const [picked, setPicked] = useState<number | null>(null);
  const ok = picked !== null && Q.options[picked].ok;
  return (
    <div className="card mx-auto max-w-xl p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <Speak text={Q.zh} source="home_quiz" size="lg" />
        <div>
          <p className="font-han text-3xl">{Q.zh}</p>
          <Pinyin text={Q.py} className="text-sm" />
        </div>
      </div>
      <div className="mt-6 grid gap-2">
        {Q.options.map((o, i) => {
          const state = picked === null ? "" : o.ok ? "border-jade bg-jade/10" : picked === i ? "border-seal bg-seal/10 shake" : "opacity-50";
          return (
            <button
              key={i}
              disabled={picked !== null}
              onClick={() => {
                setPicked(i);
                track("exercise_answered", { type: "choice", correct: o.ok, context: "home_demo" });
              }}
              className={`flex items-center justify-between rounded-2xl border border-line bg-card px-4 py-3.5 text-left font-medium transition hover:border-ink-2 ${state}`}
            >
              {locale === "fr" ? o.fr : o.en}
              {picked !== null && o.ok && <Icon name="check" className="text-jade" />}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="pop mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-paper-2 p-4">
          <p className="text-sm text-ink-2">
            {ok
              ? locale === "fr"
                ? "Bravo ! 是 (shì) relie deux noms, comme « être »."
                : "Nice! 是 (shì) links two nouns, like “to be”."
              : locale === "fr"
                ? "Presque : 学生 (xuésheng) = étudiant. 是 (shì) = être."
                : "Almost: 学生 (xuésheng) = student. 是 (shì) = to be."}
          </p>
          <Link href={href(locale, "/learn/1")} className="btn btn-primary !py-2 !text-sm" onClick={() => track("cta_clicked", { cta: "home_quiz_continue" })}>
            {locale === "fr" ? "Continuer le HSK 1" : "Continue HSK 1"} <Icon name="arrow" size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
