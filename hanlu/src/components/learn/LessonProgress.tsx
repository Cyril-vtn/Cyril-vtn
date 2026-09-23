"use client";
import { useHydrated, useStore } from "@/lib/store";
import Icon from "../Icon";

/** Stars/score badge for a lesson card. */
export function LessonBadge({ id }: { id: string }) {
  const r = useStore((s) => s.lessons[id]);
  const h = useHydrated();
  if (!h || !r) return null;
  const stars = r.score >= 90 ? 3 : r.score >= 70 ? 2 : 1;
  return (
    <span className="flex items-center gap-0.5 text-gold" title={`${r.score}%`}>
      {[1, 2, 3].map((i) => (
        <Icon key={i} name="star" size={14} fill={i <= stars} className={i <= stars ? "" : "text-line"} />
      ))}
    </span>
  );
}

/** Progress bar for a set of lesson ids. */
export function LevelProgress({ ids, label }: { ids: string[]; label?: string }) {
  const done = useStore((s) => ids.filter((id) => s.lessons[id]).length);
  const h = useHydrated();
  const pct = ids.length && h ? Math.round((100 * done) / ids.length) : 0;
  return (
    <div>
      <div className="flex justify-between text-xs text-muted">
        <span>{label}</span>
        <span>
          {h ? done : 0}/{ids.length}
        </span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-2">
        <div className="h-full rounded-full bg-jade transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
