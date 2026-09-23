"use client";
import Link from "next/link";
import { useMemo, useRef } from "react";
import type { Locale } from "@/content/types";
import { track } from "@/lib/analytics";
import { exportState, importState, resetState, setState, streak, today, useHydrated, useStore } from "@/lib/store";
import { isDue, isNew } from "@/lib/srs";
import { href, levelLabel } from "@/lib/site";
import Icon from "../Icon";

export default function Dashboard({
  locale,
  levels,
}: {
  locale: Locale;
  levels: { level: number; lessons: { id: string; title: string }[] }[];
}) {
  const fr = locale === "fr";
  const h = useHydrated();
  const s = useStore((x) => x);
  const fileRef = useRef<HTMLInputElement>(null);

  const deck = useMemo(() => {
    const now = new Date();
    const cards = Object.values(s.srs);
    return {
      total: cards.length,
      due: cards.filter((c) => !isNew(c) && isDue(c, now)).length,
      mastered: cards.filter((c) => c.stability > 21).length,
      learning: cards.filter((c) => !isNew(c) && c.stability <= 21).length,
    };
  }, [s.srs]);

  const weeks = 20;
  const days = useMemo(() => {
    const out: { d: string; xp: number }[] = [];
    const end = new Date();
    const start = new Date(end);
    start.setDate(end.getDate() - (weeks * 7 - 1) - end.getDay());
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const k = today(d);
      out.push({ d: k, xp: s.activity[k] ?? 0 });
    }
    return out;
  }, [s.activity]);

  if (!h) return <div className="h-[60vh]" />;
  const todayXp = s.activity[today()] ?? 0;
  const goalPct = Math.min(100, Math.round((100 * todayXp) / s.settings.dailyGoal));
  const lessonsDone = Object.keys(s.lessons).length;
  const nextLesson = levels.flatMap((lv) => lv.lessons.map((l) => ({ ...l, level: lv.level }))).find((l) => !s.lessons[l.id]);
  const shade = (xp: number) => (xp === 0 ? "bg-paper-2" : xp < 10 ? "bg-jade/30" : xp < 30 ? "bg-jade/60" : "bg-jade");

  const set = <K extends keyof typeof s.settings>(k: K, v: (typeof s.settings)[K]) =>
    setState((st) => ({ ...st, settings: { ...st.settings, [k]: v } }));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="card relative overflow-hidden p-6 md:col-span-2">
          <p className="text-sm text-muted">{fr ? "Objectif du jour" : "Today’s goal"}</p>
          <div className="mt-3 flex items-center gap-6">
            <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--paper-2)" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--seal)" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${(goalPct * 97.4) / 100} 97.4`} />
            </svg>
            <div>
              <p className="font-display text-4xl font-semibold">
                {todayXp}
                <span className="text-lg text-muted"> / {s.settings.dailyGoal} XP</span>
              </p>
              {nextLesson ? (
                <Link href={href(locale, `/learn/${nextLesson.level}/${nextLesson.id}`)} className="btn btn-primary mt-3 !py-2 !text-sm">
                  {nextLesson.title} <Icon name="arrow" size={14} />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <StatCard icon="flame" tone="text-seal" n={streak(s.activity)} label={fr ? "jours d’affilée" : "day streak"} />
        <StatCard icon="star" tone="text-gold" n={s.xp} label="XP total" />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon="book" n={lessonsDone} label={fr ? "leçons terminées" : "lessons done"} />
        <StatCard icon="cards" n={deck.total} label={fr ? "mots dans le paquet" : "words in deck"} />
        <StatCard icon="check" tone="text-jade" n={deck.mastered} label={fr ? "mots maîtrisés" : "words mastered"} />
        <Link href={href(locale, "/review")} className="card p-6 transition hover:-translate-y-0.5">
          <Icon name="refresh" className="text-sky" />
          <p className="mt-3 font-display text-3xl font-semibold">{deck.due}</p>
          <p className="text-sm text-muted">{fr ? "à réviser maintenant →" : "due now →"}</p>
        </Link>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{fr ? "Activité" : "Activity"}</h2>
          <span className="text-xs text-muted">{fr ? `${weeks} dernières semaines` : `last ${weeks} weeks`}</span>
        </div>
        <div className="mt-4 overflow-x-auto">
          <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
            {days.map((d) => (
              <div key={d.d} title={`${d.d} · ${d.xp} XP`} className={`h-3.5 w-3.5 rounded-[4px] ${shade(d.xp)}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold">{fr ? "Progression par niveau" : "Progress by level"}</h2>
        {s.placement && (
          <p className="mt-1 text-sm text-muted">
            {fr ? "Test de niveau" : "Placement"} : HSK {s.placement.level ? levelLabel(s.placement.level) : "0"}
          </p>
        )}
        <div className="mt-4 space-y-3">
          {levels.map((lv) => {
            const done = lv.lessons.filter((l) => s.lessons[l.id]).length;
            const pct = lv.lessons.length ? Math.round((100 * done) / lv.lessons.length) : 0;
            return (
              <Link key={lv.level} href={href(locale, `/learn/${lv.level}`)} className="grid grid-cols-[4.5rem_1fr_3.5rem] items-center gap-3 text-sm">
                <span className="font-semibold">HSK {levelLabel(lv.level)}</span>
                <div className="h-2.5 overflow-hidden rounded-full bg-paper-2">
                  <div className="h-full rounded-full bg-jade" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-right text-muted tabular-nums">
                  {done}/{lv.lessons.length}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold">{fr ? "Réglages" : "Settings"}</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Toggle label={fr ? "Couleurs des tons" : "Tone colors"} value={s.settings.toneColors} onChange={(v) => set("toneColors", v)} />
          <Toggle label={fr ? "Afficher le pinyin" : "Show pinyin"} value={s.settings.showPinyin} onChange={(v) => set("showPinyin", v)} />
          <Range label={fr ? "Vitesse de la voix" : "Voice speed"} min={0.5} max={1.2} step={0.05} value={s.settings.ttsRate} fmt={(v) => `${v.toFixed(2)}×`} onChange={(v) => set("ttsRate", v)} />
          <Range label={fr ? "Nouveaux mots par jour" : "New words per day"} min={5} max={50} step={5} value={s.settings.newPerDay} fmt={(v) => String(v)} onChange={(v) => set("newPerDay", v)} />
          <Range label={fr ? "Objectif quotidien (XP)" : "Daily goal (XP)"} min={10} max={100} step={10} value={s.settings.dailyGoal} fmt={(v) => String(v)} onChange={(v) => set("dailyGoal", v)} />
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          <button
            className="btn btn-ghost !py-2 !text-sm"
            onClick={() => {
              const blob = new Blob([exportState()], { type: "application/json" });
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = `hanlu-progress-${today()}.json`;
              a.click();
              track("progress_exported");
            }}
          >
            <Icon name="download" size={16} /> {fr ? "Exporter ma progression" : "Export progress"}
          </button>
          <button className="btn btn-ghost !py-2 !text-sm" onClick={() => fileRef.current?.click()}>
            {fr ? "Importer" : "Import"}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            hidden
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              try {
                importState(await f.text());
              } catch {
                alert(fr ? "Fichier invalide" : "Invalid file");
              }
            }}
          />
          <button
            className="btn btn-ghost !py-2 !text-sm !text-seal"
            onClick={() => confirm(fr ? "Effacer toute ta progression ?" : "Erase all your progress?") && resetState()}
          >
            {fr ? "Réinitialiser" : "Reset"}
          </button>
        </div>
        <p className="mt-3 text-xs text-muted">
          {fr
            ? "Ta progression est enregistrée sur cet appareil. Exporte-la pour la transférer."
            : "Your progress is saved on this device. Export it to move it elsewhere."}
        </p>
      </div>
    </div>
  );
}

function StatCard({ icon, n, label, tone = "text-ink-2" }: { icon: "flame" | "star" | "book" | "cards" | "check"; n: number; label: string; tone?: string }) {
  return (
    <div className="card p-6">
      <Icon name={icon} className={tone} fill={icon === "flame" || icon === "star"} />
      <p className="mt-3 font-display text-3xl font-semibold">{n.toLocaleString()}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3">
      <span className="text-sm">{label}</span>
      <button role="switch" aria-checked={value} onClick={() => onChange(!value)} className={`relative h-6 w-11 rounded-full transition ${value ? "bg-jade" : "bg-line"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${value ? "left-[1.4rem]" : "left-0.5"}`} />
      </button>
    </label>
  );
}

function Range({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (v: number) => string; onChange: (v: number) => void }) {
  return (
    <label className="block text-sm">
      <span className="flex justify-between">
        {label} <span className="font-semibold tabular-nums">{fmt(value)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-[var(--seal)]" />
    </label>
  );
}
