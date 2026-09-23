"use client";
import { useState } from "react";
import type { Locale } from "@/content/types";
import { speak } from "@/lib/tts";
import { track } from "@/lib/analytics";

const TONES = [
  { n: 1, py: "mā", hz: "妈", fr: "maman", en: "mother", d: "M10 22 L90 22", contour: "55" },
  { n: 2, py: "má", hz: "麻", fr: "chanvre", en: "hemp", d: "M10 62 C40 58 70 40 90 18", contour: "35" },
  { n: 3, py: "mǎ", hz: "马", fr: "cheval", en: "horse", d: "M10 50 C35 88 60 92 90 34", contour: "214" },
  { n: 4, py: "mà", hz: "骂", fr: "gronder", en: "to scold", d: "M10 16 C40 30 65 55 90 86", contour: "51" },
];

export default function ToneDemo({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {TONES.map((t) => (
        <button
          key={t.n}
          onClick={async () => {
            setActive(t.n);
            track("audio_played", { source: "home_tone_demo", tone: t.n });
            await speak(t.hz, 0.7);
            setActive(null);
          }}
          className="card group relative overflow-hidden p-5 text-left transition hover:-translate-y-1"
          style={active === t.n ? { boxShadow: `0 0 0 2px var(--tone${t.n})` } : undefined}
        >
          <svg viewBox="0 0 100 100" className="h-20 w-full" aria-hidden="true">
            {[20, 40, 60, 80].map((y) => (
              <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--line)" strokeDasharray="2 4" />
            ))}
            <path
              d={t.d}
              fill="none"
              stroke={`var(--tone${t.n})`}
              strokeWidth="6"
              strokeLinecap="round"
              className={active === t.n ? "animate-pulse" : ""}
            />
          </svg>
          <div className="mt-3 flex items-baseline justify-between">
            <span className={`font-display text-3xl font-semibold t${t.n}`}>{t.py}</span>
            <span className="font-han text-3xl">{t.hz}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-ink-2">
            <span>{locale === "fr" ? t.fr : t.en}</span>
            <span className="text-muted">
              {locale === "fr" ? "ton" : "tone"} {t.n} · {t.contour}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
