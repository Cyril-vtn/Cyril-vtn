import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { LEVELS, getCourse } from "@/content";
import { l } from "@/i18n/config";
import Dashboard from "@/components/dashboard/Dashboard";

export const metadata: Metadata = { title: "Dashboard", robots: { index: false } };

export default async function DashboardPage({ params }: PageProps<"/[locale]/dashboard">) {
  const locale = (await params).locale as Locale;
  const levels = LEVELS.filter((lv) => getCourse(lv)).map((lv) => ({
    level: lv,
    lessons: getCourse(lv)!.lessons.map((x) => ({ id: x.id, title: l(x.title, locale) })),
  }));
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 font-display text-5xl font-semibold tracking-tight">{locale === "fr" ? "Ma progression" : "My progress"}</h1>
      <Dashboard locale={locale} levels={levels} />
    </div>
  );
}
