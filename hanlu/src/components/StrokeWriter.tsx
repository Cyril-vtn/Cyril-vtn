"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type HanziWriterType from "hanzi-writer";

export interface StrokeWriterHandle {
  animate: () => void;
  quiz: () => void;
  reveal: () => void;
}

interface Props {
  char: string;
  size?: number;
  mode?: "static" | "animate" | "loop" | "quiz";
  /** For mode="loop": cycle through these characters. */
  sequence?: string[];
  onSequenceChar?: (c: string) => void;
  onQuizComplete?: (mistakes: number) => void;
  onMistake?: () => void;
  showOutline?: boolean;
  grid?: boolean;
  className?: string;
}

function cssVar(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

/** Stroke-order animation & handwriting quiz, powered by hanzi-writer (data: Make Me a Hanzi). */
const StrokeWriter = forwardRef<StrokeWriterHandle, Props>(function StrokeWriter(
  { char, size = 220, mode = "animate", sequence, onSequenceChar, onQuizComplete, onMistake, showOutline = true, grid = true, className = "" },
  ref,
) {
  const host = useRef<HTMLDivElement>(null);
  const writer = useRef<HanziWriterType | null>(null);
  const cbs = useRef({ onSequenceChar, onQuizComplete, onMistake });
  cbs.current = { onSequenceChar, onQuizComplete, onMistake };

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    (async () => {
      const { default: HanziWriter } = await import("hanzi-writer");
      if (cancelled || !host.current) return;
      host.current.innerHTML = "";
      const ink = cssVar("--ink", "#16140f");
      const seal = cssVar("--seal", "#c8372d");
      const line = cssVar("--line", "#e2d9ca");
      const w = HanziWriter.create(host.current, sequence?.[0] ?? char, {
        width: size,
        height: size,
        padding: Math.round(size * 0.06),
        showOutline,
        showCharacter: mode === "static",
        strokeColor: ink,
        radicalColor: seal,
        outlineColor: line,
        drawingColor: seal,
        highlightColor: seal,
        strokeAnimationSpeed: 1.1,
        delayBetweenStrokes: 180,
        drawingWidth: Math.max(14, size / 14),
      });
      writer.current = w;
      if (mode === "animate") w.animateCharacter();
      if (mode === "quiz") startQuiz(w);
      if (mode === "loop" && sequence?.length) {
        let i = 0;
        const run = async () => {
          if (cancelled) return;
          const c = sequence[i % sequence.length];
          cbs.current.onSequenceChar?.(c);
          await w.setCharacter(c);
          if (cancelled) return;
          await w.hideCharacter();
          await w.animateCharacter();
          i++;
          timer = setTimeout(run, 1600);
        };
        run();
      }
    })();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      writer.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char, size, mode, sequence?.join("")]);

  function startQuiz(w: HanziWriterType) {
    w.quiz({
      showHintAfterMisses: 2,
      leniency: 1.1,
      onMistake: () => cbs.current.onMistake?.(),
      onComplete: (s) => cbs.current.onQuizComplete?.(s.totalMistakes),
    });
  }

  useImperativeHandle(ref, () => ({
    animate: () => {
      const w = writer.current;
      if (!w) return;
      w.cancelQuiz();
      w.hideCharacter().then(() => w.animateCharacter());
    },
    quiz: () => {
      const w = writer.current;
      if (!w) return;
      w.hideCharacter();
      startQuiz(w);
    },
    reveal: () => {
      writer.current?.cancelQuiz();
      writer.current?.showCharacter();
    },
  }));

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {grid && (
        <svg className="pointer-events-none absolute inset-0" width={size} height={size} aria-hidden="true">
          <rect x="1" y="1" width={size - 2} height={size - 2} fill="none" stroke="var(--line)" strokeWidth="2" rx="10" />
          <g stroke="var(--line)" strokeDasharray="6 6" strokeWidth="1">
            <line x1={size / 2} y1="0" x2={size / 2} y2={size} />
            <line x1="0" y1={size / 2} x2={size} y2={size / 2} />
            <line x1="0" y1="0" x2={size} y2={size} />
            <line x1={size} y1="0" x2="0" y2={size} />
          </g>
        </svg>
      )}
      <div ref={host} className="relative" />
    </div>
  );
});

export default StrokeWriter;
