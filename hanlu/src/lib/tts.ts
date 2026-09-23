"use client";
/**
 * Text-to-speech via the Web Speech API (free, offline-capable, quality depends on OS voices).
 * Upgrade path: pre-generated neural MP3s on a CDN keyed by hanzi — `speak()` is the single seam.
 */
let voices: SpeechSynthesisVoice[] = [];

function refresh() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  voices = window.speechSynthesis.getVoices();
}
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  refresh();
  window.speechSynthesis.addEventListener?.("voiceschanged", refresh);
}

export function chineseVoice(): SpeechSynthesisVoice | undefined {
  refresh();
  const zh = voices.filter((v) => /^zh(-|_)?(CN|Hans)?/i.test(v.lang) || /chinese|mandarin|普通话|中文/i.test(v.name));
  const cn = zh.filter((v) => /CN|Hans/i.test(v.lang));
  const pool = cn.length ? cn : zh;
  return (
    pool.find((v) => /natural|neural|premium|enhanced|google/i.test(v.name)) ?? pool.find((v) => v.localService) ?? pool[0]
  );
}

export function hasChineseVoice(): boolean {
  return !!chineseVoice();
}

export function speak(text: string, rate = 0.85): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return resolve();
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-CN";
    const v = chineseVoice();
    if (v) u.voice = v;
    u.rate = rate;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    synth.speak(u);
  });
}
