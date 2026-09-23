"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/content/types";
import { initAnalytics, setBaseProps, track } from "@/lib/analytics";
import { getState } from "@/lib/store";

/** Sends page_view on every App Router navigation, with a normalized path template for grouping. */
export default function AnalyticsTracker({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    const s = getState();
    setBaseProps({ locale, plan: s.plan, total_xp: s.xp, lessons_done: Object.keys(s.lessons).length });
    if (!pathname) return;
    const template = pathname
      .replace(/^\/(fr|en)/, "/:locale")
      .replace(/\/learn\/\d+\/[^/]+/, "/learn/:level/:lesson")
      .replace(/\/learn\/\d+$/, "/learn/:level")
      .replace(/\/grammar\/[^/]+/, "/grammar/:id")
      .replace(/\/guides\/[^/]+/, "/guides/:slug")
      .replace(/\/vocabulary\/\d+/, "/vocabulary/:level");
    track("page_view", { path: pathname, path_template: template, referrer: document.referrer || null });
  }, [pathname, locale]);
  return null;
}
