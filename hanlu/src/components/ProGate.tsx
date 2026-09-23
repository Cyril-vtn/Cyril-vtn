"use client";
import Link from "next/link";
import { useEffect } from "react";
import type { Locale } from "@/content/types";
import { track } from "@/lib/analytics";
import { FREE_LEVELS, PAYWALL_ENABLED, href } from "@/lib/site";
import { useHydrated, useStore } from "@/lib/store";
import Icon from "./Icon";

export function isLocked(level: number, plan: "free" | "pro") {
  return PAYWALL_ENABLED && plan !== "pro" && !FREE_LEVELS.includes(level);
}

/** Client-side gate. NOTE: real enforcement needs server-side entitlements once accounts ship. */
export default function ProGate({
  level,
  locale,
  feature,
  children,
}: {
  level: number;
  locale: Locale;
  feature: string;
  children: React.ReactNode;
}) {
  const plan = useStore((s) => s.plan);
  const hydrated = useHydrated();
  const locked = hydrated && isLocked(level, plan);
  useEffect(() => {
    if (locked) track("paywall_viewed", { feature, level });
  }, [locked, feature, level]);
  if (!locked) return <>{children}</>;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-seal/10 text-seal">
        <Icon name="lock" size={28} />
      </span>
      <h1 className="mt-6 font-display text-4xl font-semibold">{fr ? `Le HSK ${level} fait partie de Pro` : `HSK ${level} is part of Pro`}</h1>
      <p className="mt-4 text-lg text-ink-2">
        {fr
          ? "Débloque tous les niveaux, les révisions illimitées et le test de niveau détaillé. Annulable à tout moment."
          : "Unlock every level, unlimited reviews and the detailed placement report. Cancel anytime."}
      </p>
      <Link href={href(locale, "/pricing")} className="btn btn-primary mt-8 !px-7 !py-3.5" onClick={() => track("cta_clicked", { cta: "paywall_to_pricing", level })}>
        {fr ? "Voir les offres" : "See plans"} <Icon name="arrow" size={18} />
      </Link>
    </div>
  );
}
