import Link from "next/link";
import type { Locale } from "@/content/types";
import { getUI } from "@/i18n/ui";
import { href } from "@/lib/site";
import Logo from "./Logo";
import CookieSettingsLink from "./CookieSettingsLink";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getUI(locale);
  const cols = [
    {
      title: t.nav.learn,
      links: [
        { to: "/learn", label: t.nav.learn },
        { to: "/vocabulary", label: t.nav.vocabulary },
        { to: "/grammar", label: t.nav.grammar },
        { to: "/review", label: t.nav.review },
      ],
    },
    {
      title: t.nav.practice,
      links: [
        { to: "/practice/tones", label: locale === "fr" ? "Entraîneur de tons" : "Tone trainer" },
        { to: "/practice/writing", label: locale === "fr" ? "Écriture" : "Handwriting" },
        { to: "/practice/pinyin", label: locale === "fr" ? "Tableau du pinyin" : "Pinyin chart" },
        { to: "/placement", label: locale === "fr" ? "Test de niveau" : "Placement test" },
      ],
    },
    {
      title: "Hanlu",
      links: [
        { to: "/hsk", label: t.nav.hsk },
        { to: "/guides", label: t.nav.guides },
        { to: "/radicals", label: locale === "fr" ? "Radicaux" : "Radicals" },
        { to: "/pricing", label: t.nav.pricing },
      ],
    },
    {
      title: locale === "fr" ? "Légal" : "Legal",
      links: [
        { to: "/about", label: t.footer.about },
        { to: "/legal/privacy", label: t.footer.privacy },
        { to: "/legal/terms", label: t.footer.terms },
        { to: "/legal/credits", label: t.footer.credits },
      ],
    },
  ];
  return (
    <footer className="relative z-10 mt-24 border-t border-line bg-paper-2/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink-2">{t.footer.made}</p>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">{t.footer.disclaimer}</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs font-semibold tracking-widest text-muted uppercase">{c.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((x) => (
                <li key={x.to}>
                  <Link href={href(locale, x.to)} className="text-sm text-ink-2 hover:text-seal">
                    {x.label}
                  </Link>
                </li>
              ))}
              {c.title === (locale === "fr" ? "Légal" : "Legal") && (
                <li>
                  <CookieSettingsLink label={t.footer.cookies} />
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Hanlu · 汉路
      </div>
    </footer>
  );
}
