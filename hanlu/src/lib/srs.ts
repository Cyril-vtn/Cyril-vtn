/**
 * Spaced repetition with FSRS (Free Spaced Repetition Scheduler — the algorithm now built into Anki).
 * Cards are stored serialized in the learner store; this module converts and schedules.
 */
import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from "ts-fsrs";
import type { SerializedCard } from "./store";

const scheduler = fsrs(generatorParameters({ enable_fuzz: true, request_retention: 0.9, maximum_interval: 3650 }));

export { Rating };
export type { Grade };

export function newCardFor(now = new Date()): SerializedCard {
  return serialize(createEmptyCard(now));
}

export function serialize(c: Card): SerializedCard {
  return { ...c, due: c.due.toISOString(), last_review: c.last_review ? c.last_review.toISOString() : undefined };
}

export function deserialize(c: SerializedCard): Card {
  return { ...c, due: new Date(c.due), last_review: c.last_review ? new Date(c.last_review) : undefined } as Card;
}

export function review(c: SerializedCard, grade: Grade, now = new Date()): SerializedCard {
  return serialize(scheduler.next(deserialize(c), now, grade).card);
}

/** Human-readable interval preview per grade, e.g. { 1: "1 min", 3: "2 d" }. */
export function preview(c: SerializedCard, locale: "fr" | "en", now = new Date()): Record<number, string> {
  const rec = scheduler.repeat(deserialize(c), now);
  const out: Record<number, string> = {};
  for (const g of [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy] as Grade[]) {
    out[g] = humanize(rec[g].card.due.getTime() - now.getTime(), locale);
  }
  return out;
}

function humanize(ms: number, locale: "fr" | "en"): string {
  const m = Math.max(1, Math.round(ms / 60000));
  if (m < 60) return `${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h} h`;
  const d = Math.round(h / 24);
  if (d < 31) return locale === "fr" ? `${d} j` : `${d} d`;
  const mo = Math.round(d / 30);
  if (mo < 12) return locale === "fr" ? `${mo} mois` : `${mo} mo`;
  return locale === "fr" ? `${(d / 365).toFixed(1)} an` : `${(d / 365).toFixed(1)} y`;
}

export function isDue(c: SerializedCard, now = new Date()): boolean {
  return new Date(c.due).getTime() <= now.getTime();
}

/** State 0 = New, 1 = Learning, 2 = Review, 3 = Relearning */
export function isNew(c: SerializedCard): boolean {
  return c.state === 0;
}
