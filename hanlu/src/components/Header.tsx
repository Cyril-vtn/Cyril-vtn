"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/content/types";
import { getUI } from "@/i18n/ui";
import { href } from "@/lib/site";
import { streak, useHydrated, useStore } from "@/lib/store";
import { track } from "@/lib/analytics";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Header({ locale }: { locale: Locale }) {
  const t = getUI(locale);
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const hydrated = useHydrated();
  const xp = useStore((s) => s.xp);
  const days = useStore((s) => streak(s.activity));

  const links = [
    { to: "/learn", label: t.nav.learn },
    { to: "/vocabulary", label: t.nav.vocabulary },
    { to: "/grammar", label: t.nav.grammar },
    { to: "/practice", label: t.nav.practice },
    { to: "/review", label: t.nav.review },
    { to: "/hsk", label: t.nav.hsk },
    { to: "/pricing", label: t.nav.pricing },
  ];
  const other: Locale = locale === "fr" ? "en" : "fr";
  const switchPath = pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${other}`);
  const active = (to: string) => pathname.startsWith(href(locale, to));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href={href(locale)} className="flex items-center gap-2.5" aria-label="Hanlu">
          <Logo />
        </Link>
        <nav className="ml-4 hidden items-center gap-1 lg:flex">
          {links.map((x) => (
            <Link
              key={x.to}
              href={href(locale, x.to)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                active(x.to) ? "bg-ink text-paper" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
              }`}
            >
              {x.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {hydrated && xp > 0 && (
            <Link
              href={href(locale, "/dashboard")}
              className="chip hidden sm:inline-flex"
              title={t.nav.dashboard}
            >
              <Icon name="flame" size={14} className="text-seal" fill />
              {days}
              <span className="text-line">|</span>
              <Icon name="star" size={14} className="text-gold" fill />
              {xp}
            </Link>
          )}
          <ThemeToggle />
          <Link
            href={switchPath}
            onClick={() => track("locale_switched", { from: locale, to: other })}
            className="chip uppercase"
            hrefLang={other}
            aria-label={other === "fr" ? "Français" : "English"}
          >
            <Icon name="globe" size={14} />
            {other}
          </Link>
          <Link href={href(locale, "/learn/1")} className="btn btn-primary hidden !py-2 !text-sm md:inline-flex">
            {t.nav.start}
          </Link>
          <button className="btn btn-ghost !p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={t.nav.menu}>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-4 py-3 lg:hidden">
          {[...links, { to: "/dashboard", label: t.nav.dashboard }, { to: "/guides", label: t.nav.guides }].map((x) => (
            <Link
              key={x.to}
              href={href(locale, x.to)}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-base font-medium hover:bg-paper-2"
            >
              {x.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const isDark =
      el.dataset.theme === "dark" ||
      (!el.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    el.dataset.theme = next;
    try {
      localStorage.setItem("hanlu:theme", next);
    } catch {}
    track("theme_switched", { theme: next });
  };
  return (
    <button onClick={toggle} className="btn btn-ghost !p-2" aria-label="Theme">
      <span className="dark:hidden">
        <Icon name="moon" size={18} />
      </span>
      <span className="hidden dark:inline">
        <Icon name="sun" size={18} />
      </span>
    </button>
  );
}
