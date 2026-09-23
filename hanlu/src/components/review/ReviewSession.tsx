"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale, VocabEntry } from "@/content/types";
import { track } from "@/lib/analytics";
import { addXp, getState, setState, today, useHydrated, useStore } from "@/lib/store";
import { Rating, isDue, isNew, newCardFor, preview, review, type Grade } from "@/lib/srs";
import { loadByIds, loadLevel } from "@/lib/vocabClient";
import { speak } from "@/lib/tts";
import { href, levelLabel } from "@/lib/site";
import { Hanzi, Pinyin } from "../Zh";
import Icon from "../Icon";

type Phase = "overview" | "session" | "summary";

export default function ReviewSession({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const hydrated = useHydrated();
  const srs = useStore((s) => s.srs);
  const newPerDay = useStore((s) => s.settings.newPerDay);
  const introducedToday = useStore((s) => s.introduced[today()] ?? 0);
  const [phase, setPhase] = useState<Phase>("overview");
  const [queue, setQueue] = useState<string[]>([]);
  const [words, setWords] = useState<Map<string, VocabEntry>>(new Map());
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState<{ id: string; grade: Grade }[]>([]);

  const ids = Object.keys(srs);
  const counts = useMemo(() => {
    const now = new Date();
    let due = 0,
      fresh = 0,
      learned = 0;
    for (const id of ids) {
      const c = srs[id];
      if (isNew(c)) fresh++;
      else {
        if (isDue(c, now)) due++;
        if (c.stability > 21) learned++;
      }
    }
    return { due, fresh, learned, total: ids.length };
  }, [srs, ids]);
  const newAllowed = Math.max(0, newPerDay - introducedToday);

  const start = async () => {
    const now = new Date();
    const dueIds = ids.filter((id) => !isNew(srs[id]) && isDue(srs[id], now));
    const newIds = ids.filter((id) => isNew(srs[id])).slice(0, newAllowed);
    const q = [...dueIds.sort(() => Math.random() - 0.5), ...newIds];
    if (!q.length) return;
    setWords(await loadByIds(q));
    setQueue(q);
    setDone([]);
    setRevealed(false);
    setPhase("session");
    track("review_session_started", { due: dueIds.length, new: newIds.length });
  };

  const seedLevel = async (level: number) => {
    const list = await loadLevel(level);
    setState((s) => {
      const next = { ...s.srs };
      for (const w of list.slice(0, 50)) if (!next[w.id]) next[w.id] = newCardFor();
      return { ...s, srs: next };
    });
    track("vocab_added_to_review", { count: 50, scope: "seed", level });
  };

  const current = queue[0];
  const word = current ? words.get(current) : undefined;
  const card = current ? srs[current] : undefined;
  const intervals = useMemo(() => (card ? preview(card, locale) : {}), [card, locale]);

  const rate = useCallback(
    (grade: Grade) => {
      if (!current || !card) return;
      const wasNew = isNew(card);
      const updated = review(card, grade);
      const d = today();
      setState((s) => ({
        ...s,
        srs: { ...s.srs, [current]: updated },
        introduced: wasNew ? { ...s.introduced, [d]: (s.introduced[d] ?? 0) + 1 } : s.introduced,
        reviews: { ...s.reviews, [d]: (s.reviews[d] ?? 0) + 1 },
      }));
      addXp(grade === Rating.Again ? 1 : 2);
      track("review_card_rated", { grade, was_new: wasNew, level: word?.level });
      setDone((x) => [...x, { id: current, grade }]);
      // "Again" → show again later in this session
      const rest = queue.slice(1);
      if (grade === Rating.Again) rest.splice(Math.min(rest.length, 4), 0, current);
      setQueue(rest);
      if (!rest.length) {
        setPhase("summary");
        track("review_session_completed", { reviewed: done.length + 1 });
      }
      setRevealed(false);
    },
    [current, card, word, done.length, queue],
  );

  useEffect(() => {
    if (phase !== "session") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (!revealed && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        setRevealed(true);
        if (word) speak(word.hanzi, getState().settings.ttsRate);
      } else if (revealed && ["1", "2", "3", "4"].includes(e.key)) {
        rate(Number(e.key) as Grade);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, revealed, rate, word]);

  if (!hydrated) return <div className="h-96" />;

  if (phase === "overview") {
    const canStart = counts.due + Math.min(counts.fresh, newAllowed) > 0;
    return (
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Tile n={counts.due} label={fr ? "à réviser" : "due"} tone="text-seal" />
          <Tile n={Math.min(counts.fresh, newAllowed)} label={fr ? "nouveaux aujourd’hui" : "new today"} tone="text-sky" />
          <Tile n={counts.learned} label={fr ? "mots maîtrisés" : "words mastered"} tone="text-jade" />
          <Tile n={counts.total} label={fr ? "dans ton paquet" : "in your deck"} />
        </div>
        {canStart ? (
          <div className="card mt-8 flex flex-col items-center p-10 text-center">
            <span className="font-han text-7xl text-seal">复习</span>
            <p className="mt-4 text-lg text-ink-2">
              {fr
                ? `${counts.due + Math.min(counts.fresh, newAllowed)} cartes t’attendent. Environ ${Math.ceil((counts.due + Math.min(counts.fresh, newAllowed)) * 0.15)} min.`
                : `${counts.due + Math.min(counts.fresh, newAllowed)} cards waiting. About ${Math.ceil((counts.due + Math.min(counts.fresh, newAllowed)) * 0.15)} min.`}
            </p>
            <button className="btn btn-primary mt-6 !px-8 !py-3.5 !text-base" onClick={start}>
              {fr ? "Lancer la révision" : "Start review"} <Icon name="arrow" size={18} />
            </button>
          </div>
        ) : (
          <div className="card mt-8 p-8 text-center">
            <p className="font-display text-2xl font-semibold">
              {counts.total ? (fr ? "Tout est à jour 🎉" : "All caught up 🎉") : fr ? "Ton paquet est vide" : "Your deck is empty"}
            </p>
            <p className="mt-2 text-ink-2">
              {counts.total
                ? fr
                  ? "Reviens demain : l’algorithme a programmé tes prochaines cartes."
                  : "Come back tomorrow: the algorithm has scheduled your next cards."
                : fr
                  ? "Termine une leçon ou ajoute un paquet de départ :"
                  : "Finish a lesson or add a starter pack:"}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((lv) => (
                <button key={lv} className="btn btn-ghost !py-2 !text-sm" onClick={() => seedLevel(lv)}>
                  + 50 HSK {levelLabel(lv)}
                </button>
              ))}
            </div>
          </div>
        )}
        <Explainer fr={fr} />
      </div>
    );
  }

  if (phase === "summary") {
    const good = done.filter((d) => d.grade >= Rating.Good).length;
    return (
      <div className="pop mx-auto max-w-lg text-center">
        <span className="font-han text-7xl text-jade">好</span>
        <h2 className="mt-4 font-display text-4xl font-semibold">{fr ? "Session terminée" : "Session complete"}</h2>
        <p className="mt-2 text-ink-2">
          {fr ? `${done.length} révisions · ${good} réussies du premier coup` : `${done.length} reviews · ${good} recalled first time`}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="btn btn-ghost" onClick={() => setPhase("overview")}>
            {fr ? "Retour" : "Back"}
          </button>
          <Link className="btn btn-primary" href={href(locale, "/learn")}>
            {fr ? "Continuer les cours" : "Continue learning"}
          </Link>
        </div>
      </div>
    );
  }

  // session
  const total = done.length + queue.length;
  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center gap-3">
        <button onClick={() => setPhase("overview")} className="text-muted hover:text-ink" aria-label="close">
          <Icon name="x" />
        </button>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-paper-2">
          <div className="h-full rounded-full bg-seal transition-all" style={{ width: `${(100 * done.length) / Math.max(1, total)}%` }} />
        </div>
        <span className="text-sm text-muted">{queue.length}</span>
      </div>
      {word && (
        <div className="flip mt-8" key={current + done.length}>
          <div className="card pop relative flex min-h-[22rem] flex-col items-center justify-center p-8 text-center">
            {card && isNew(card) && <span className="chip absolute top-4 left-4 !text-sky">{fr ? "nouveau" : "new"}</span>}
            <span className="chip absolute top-4 right-4">HSK {levelLabel(word.level)}</span>
            <Hanzi hanzi={word.hanzi} pinyin={revealed ? word.pinyin : undefined} className="text-7xl sm:text-8xl" />
            {revealed ? (
              <div className="pop mt-6">
                <Pinyin text={word.pinyin} className="font-display text-2xl font-semibold" />
                <p className="mt-2 text-lg text-ink-2">{(fr ? word.fr : word.en) || word.en}</p>
                <button className="mx-auto mt-4 flex items-center gap-2 text-sm text-muted hover:text-seal" onClick={() => speak(word.hanzi)}>
                  <Icon name="volume" size={16} /> {fr ? "Réécouter" : "Replay"}
                </button>
              </div>
            ) : (
              <p className="mt-6 text-sm text-muted">{fr ? "Te souviens-tu de la prononciation et du sens ?" : "Do you remember the sound and meaning?"}</p>
            )}
          </div>
        </div>
      )}
      <div className="mt-6">
        {!revealed ? (
          <button
            className="btn btn-ink w-full !py-4 !text-base"
            onClick={() => {
              setRevealed(true);
              if (word) speak(word.hanzi, getState().settings.ttsRate);
            }}
          >
            {fr ? "Afficher la réponse" : "Show answer"} <kbd className="ml-2 rounded border border-paper/30 px-1.5 text-xs">␣</kbd>
          </button>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {(
              [
                [Rating.Again, fr ? "Oublié" : "Again", "bg-seal"],
                [Rating.Hard, fr ? "Difficile" : "Hard", "bg-gold"],
                [Rating.Good, fr ? "Bien" : "Good", "bg-jade"],
                [Rating.Easy, fr ? "Facile" : "Easy", "bg-sky"],
              ] as [Grade, string, string][]
            ).map(([g, label, bg]) => (
              <button key={g} onClick={() => rate(g)} className={`rounded-2xl ${bg} px-2 py-3 text-white transition hover:opacity-90 active:scale-95`}>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs opacity-80">{intervals[g]}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Tile({ n, label, tone = "" }: { n: number; label: string; tone?: string }) {
  return (
    <div className="card p-5 text-center">
      <div className={`font-display text-4xl font-semibold ${tone}`}>{n.toLocaleString()}</div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </div>
  );
}

function Explainer({ fr }: { fr: boolean }) {
  return (
    <div className="mt-10 grid gap-4 text-sm text-ink-2 sm:grid-cols-3">
      {(fr
        ? [
            ["Juste à temps", "FSRS estime ta probabilité de te souvenir de chaque mot et le reprogramme juste avant l’oubli."],
            ["Sois honnête", "« Oublié » n’est pas un échec : c’est ce qui permet à l’algorithme de s’adapter à toi."],
            ["10 min par jour", "La régularité bat l’intensité. Une courte session quotidienne suffit pour retenir des milliers de mots."],
          ]
        : [
            ["Just in time", "FSRS estimates how likely you are to remember each word and reschedules it right before you forget."],
            ["Be honest", "“Again” isn’t failure: it’s what lets the algorithm adapt to you."],
            ["10 min a day", "Consistency beats intensity. A short daily session is enough to retain thousands of words."],
          ]
      ).map(([h, p]) => (
        <div key={h} className="rounded-2xl border border-line p-5">
          <p className="font-semibold text-ink">{h}</p>
          <p className="mt-1">{p}</p>
        </div>
      ))}
    </div>
  );
}
