import type { Locale } from "@/content/types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hanlu.app";

export function href(locale: Locale, path = ""): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${p === "/" ? "" : p}`;
}

/** Levels that are free without a Pro plan. */
export const FREE_LEVELS = [1];

export const PAYWALL_ENABLED = process.env.NEXT_PUBLIC_PAYWALL_ENABLED === "true";

export const CHECKOUT = {
  monthly: process.env.NEXT_PUBLIC_CHECKOUT_MONTHLY || "",
  yearly: process.env.NEXT_PUBLIC_CHECKOUT_YEARLY || "",
  lifetime: process.env.NEXT_PUBLIC_CHECKOUT_LIFETIME || "",
};

export function levelLabel(level: number): string {
  return level === 7 ? "7–9" : String(level);
}
