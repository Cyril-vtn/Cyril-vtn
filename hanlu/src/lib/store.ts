"use client";
/**
 * Learner state, persisted in localStorage (device-only for now; swap `persist` for a
 * Supabase sync layer when accounts ship). Exposed through a tiny external store.
 */
import { useSyncExternalStore } from "react";
import type { Card } from "ts-fsrs";

export interface LessonResult {
  score: number; // 0–100
  xp: number;
  at: string; // ISO date
}

export interface State {
  v: 1;
  xp: number;
  /** yyyy-mm-dd → xp earned that day */
  activity: Record<string, number>;
  lessons: Record<string, LessonResult>;
  /** vocab id → FSRS card (dates serialized as ISO strings) */
  srs: Record<string, SerializedCard>;
  settings: {
    showPinyin: boolean;
    showTranslation: boolean;
    toneColors: boolean;
    ttsRate: number;
    dailyGoal: number; // xp
    newPerDay: number;
  };
  placement?: { level: number; at: string };
  /** yyyy-mm-dd → number of new cards introduced that day */
  introduced: Record<string, number>;
  /** yyyy-mm-dd → reviews done that day */
  reviews: Record<string, number>;
  plan: "free" | "pro";
  onboarded: boolean;
}

export type SerializedCard = Omit<Card, "due" | "last_review"> & { due: string; last_review?: string };

const KEY = "hanlu:v1";

const initial: State = {
  v: 1,
  xp: 0,
  activity: {},
  lessons: {},
  srs: {},
  settings: { showPinyin: true, showTranslation: true, toneColors: true, ttsRate: 0.85, dailyGoal: 30, newPerDay: 15 },
  plan: "free",
  onboarded: false,
  introduced: {},
  reviews: {},
};

let state: State = initial;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<State>;
      state = { ...initial, ...parsed, settings: { ...initial.settings, ...parsed.settings } };
    }
  } catch {
    /* storage unavailable (private mode) — run in memory */
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function getState(): State {
  load();
  return state;
}

export function setState(fn: (s: State) => State) {
  load();
  state = fn(state);
  persist();
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      loaded = false;
      load();
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useStore<T>(selector: (s: State) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => selector(getState()),
    () => selector(initial),
  );
}

/** Returns false during SSR/first paint so pages can avoid hydration mismatch on stored data. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function today(d = new Date()): string {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

export function addXp(amount: number) {
  const day = today();
  setState((s) => ({ ...s, xp: s.xp + amount, activity: { ...s.activity, [day]: (s.activity[day] ?? 0) + amount } }));
}

export function completeLesson(id: string, score: number, xp: number) {
  setState((s) => {
    const prev = s.lessons[id];
    const best = prev && prev.score > score ? prev : { score, xp, at: new Date().toISOString() };
    return { ...s, lessons: { ...s.lessons, [id]: best } };
  });
  addXp(xp);
}

export function streak(activity: Record<string, number>): number {
  let n = 0;
  const d = new Date();
  // today counts if active; if not active today, streak continues from yesterday
  if (!activity[today(d)]) d.setDate(d.getDate() - 1);
  while (activity[today(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function exportState(): string {
  return JSON.stringify(getState(), null, 2);
}

export function importState(json: string) {
  const parsed = JSON.parse(json) as State;
  if (parsed.v !== 1) throw new Error("Unsupported backup version");
  setState(() => ({ ...initial, ...parsed }));
}

export function resetState() {
  setState(() => initial);
}
