import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { inter, fraunces, notoSerifSC, notoSansSC } from "@/lib/fonts";
import { isLocale, locales } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getUI(locale);
  const title =
    locale === "fr"
      ? "Hanlu — Apprendre le chinois avec le HSK 3.0 (cours, grammaire, vocabulaire)"
      : "Hanlu — Learn Chinese with HSK 3.0 (courses, grammar, vocabulary)";
  const description = t.home.subtitle;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s · Hanlu" },
    description,
    alternates: { canonical: `/${locale}`, languages: { fr: "/fr", en: "/en", "x-default": "/fr" } },
    openGraph: { title, description, siteName: "Hanlu", locale: locale === "fr" ? "fr_FR" : "en_US", type: "website" },
    twitter: { card: "summary_large_image", title, description },
    icons: { icon: "/icon.svg" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#111013" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('hanlu:theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}`;

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer locale={locale} />
        <ConsentBanner locale={locale} />
        <AnalyticsTracker locale={locale} />
      </body>
    </html>
  );
}
