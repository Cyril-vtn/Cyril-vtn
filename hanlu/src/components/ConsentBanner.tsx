"use client";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/content/types";
import { getUI } from "@/i18n/ui";
import { getConsent, needsConsentBanner, onConsentChange, setConsent } from "@/lib/analytics";
import { href } from "@/lib/site";

/** GDPR/CNIL: equal-weight Accept/Decline, no pre-ticked choice, re-openable from the footer. */
export default function ConsentBanner({ locale }: { locale: Locale }) {
  const t = getUI(locale).consent;
  const consent = useSyncExternalStore(onConsentChange, getConsent, () => "denied" as const);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const open = () => setForced(true);
    window.addEventListener("hanlu:open-consent", open);
    return () => window.removeEventListener("hanlu:open-consent", open);
  }, []);

  const show = forced || (needsConsentBanner && consent === "unset");
  if (!show) return null;
  const choose = (c: "granted" | "denied") => {
    setConsent(c);
    setForced(false);
  };
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-sm">
      <div className="card pop p-5">
        <p className="font-display text-lg font-semibold">{t.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          {t.body}{" "}
          <Link href={href(locale, "/legal/privacy")} className="underline decoration-line underline-offset-2">
            {t.more}
          </Link>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="btn btn-ghost" onClick={() => choose("denied")}>
            {t.decline}
          </button>
          <button className="btn btn-ink" onClick={() => choose("granted")}>
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
