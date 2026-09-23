"use client";
import { useState } from "react";
import { speak } from "@/lib/tts";
import { track } from "@/lib/analytics";
import { getState } from "@/lib/store";
import Icon from "./Icon";

export default function Speak({
  text,
  source = "generic",
  size = "md",
  className = "",
  label,
}: {
  text: string;
  source?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const dims = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-14 w-14" : "h-10 w-10";
  const icon = size === "sm" ? 14 : size === "lg" ? 24 : 18;
  return (
    <button
      type="button"
      aria-label={label ?? `Play ${text}`}
      onClick={async (e) => {
        e.stopPropagation();
        setPlaying(true);
        track("audio_played", { source });
        await speak(text, getState().settings.ttsRate);
        setPlaying(false);
      }}
      className={`inline-grid shrink-0 place-items-center rounded-full border border-line bg-card text-ink-2 transition hover:border-seal hover:text-seal ${dims} ${
        playing ? "!border-seal !text-seal ring-4 ring-seal/15" : ""
      } ${className}`}
    >
      <Icon name="volume" size={icon} />
    </button>
  );
}
