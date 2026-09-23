import Link from "next/link";
import type { Locale } from "@/content/types";
import { href } from "@/lib/site";
import Icon from "../Icon";

export default function PracticeHeader({ locale, title, subtitle }: { locale: Locale; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <Link href={href(locale, "/practice")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <Icon name="back" size={16} /> {locale === "fr" ? "Entraînement" : "Practice"}
      </Link>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 text-lg text-ink-2">{subtitle}</p>
    </div>
  );
}
