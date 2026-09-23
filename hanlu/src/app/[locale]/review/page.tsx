import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import ReviewSession from "@/components/review/ReviewSession";

export const metadata: Metadata = { title: "Review · 复习", robots: { index: false } };

export default async function ReviewPage({ params }: PageProps<"/[locale]/review">) {
  const locale = (await params).locale as Locale;
  const fr = locale === "fr";
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto mb-10 max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-seal uppercase">{fr ? "Révisions" : "Review"}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight">{fr ? "Révisions espacées" : "Spaced repetition"}</h1>
      </div>
      <ReviewSession locale={locale} />
    </div>
  );
}
