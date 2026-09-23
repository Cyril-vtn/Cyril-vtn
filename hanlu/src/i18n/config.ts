import type { Locale, L10n } from "@/content/types";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export function isLocale(x: string): x is Locale {
  return (locales as string[]).includes(x);
}

/** Pick the right language from a bilingual value. */
export function l(v: L10n | string | undefined, locale: Locale): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[locale] || v.en || v.fr;
}
