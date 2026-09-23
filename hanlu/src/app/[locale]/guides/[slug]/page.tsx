import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/types";
import { guides } from "@/content/foundations/guides";
import { l, locales } from "@/i18n/config";
import { href } from "@/lib/site";
import { RichText } from "@/components/learn/GrammarBody";
import Speak from "@/components/Speak";
import { Pinyin } from "@/components/Zh";
import GuideView from "@/components/GuideView";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return locales.flatMap((locale) => guides.map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/guides/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) return {};
  return { title: l(g.title, locale as Locale), description: l(g.summary, locale as Locale) };
}

export default async function GuidePage({ params }: PageProps<"/[locale]/guides/[slug]">) {
  const { locale: loc, slug } = await params;
  const locale = loc as Locale;
  const g = guides.find((x) => x.slug === slug);
  if (!g) notFound();
  const fr = locale === "fr";
  const others = guides.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <GuideView slug={slug} />
      <div className="grid gap-12 lg:grid-cols-[15rem_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1 text-sm">
            <Link href={href(locale, "/guides")} className="mb-4 inline-flex items-center gap-1 text-muted hover:text-ink">
              <Icon name="back" size={16} /> Guides
            </Link>
            {g.sections.map((s, i) => (
              <a key={i} href={`#s${i}`} className="block rounded-lg px-3 py-1.5 text-ink-2 hover:bg-paper-2 hover:text-ink">
                {l(s.heading, locale)}
              </a>
            ))}
          </nav>
        </aside>
        <article className="max-w-3xl">
          <p className="text-sm text-muted">
            {g.readMinutes} {fr ? "min de lecture" : "min read"}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{l(g.title, locale)}</h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-2">{l(g.summary, locale)}</p>
          {g.sections.map((s, i) => (
            <section key={i} id={`s${i}`} className="mt-12 scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold">{l(s.heading, locale)}</h2>
              <RichText text={l(s.body, locale)} className="mt-3 text-[1.05rem] text-ink-2" />
              {s.table && (
                <div className="card mt-5 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-line text-left">
                        {s.table.head.map((h, k) => (
                          <th key={k} className="p-3 font-semibold">
                            {l(h, locale)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r, k) => (
                        <tr key={k} className="border-b border-line/60 last:border-0">
                          {r.map((c, j) => (
                            <td key={j} className={`p-3 ${typeof c === "string" && /\p{Script=Han}/u.test(c) ? "font-han text-lg" : ""}`}>
                              {l(c, locale)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.examples && (
                <ul className="card mt-5 divide-y divide-line">
                  {s.examples.map((ex, k) => (
                    <li key={k} className="flex items-start gap-3 p-4">
                      <Speak text={ex.zh} source="guide_example" size="sm" />
                      <div>
                        <p className="font-han text-xl">{ex.zh}</p>
                        <Pinyin text={ex.pinyin} className="text-sm" />
                        <p className="text-sm text-muted">{l(ex.tr, locale)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {s.tip && (
                <div className="mt-5 flex gap-3 rounded-2xl border border-jade/30 bg-jade/5 p-4 text-sm">
                  <Icon name="sparkle" className="mt-0.5 shrink-0 text-jade" />
                  <RichText text={l(s.tip, locale)} />
                </div>
              )}
            </section>
          ))}
          <div className="mt-16 border-t border-line pt-8">
            <p className="text-sm font-semibold tracking-widest text-muted uppercase">{fr ? "À lire ensuite" : "Read next"}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {others.map((o) => (
                <Link key={o.slug} href={href(locale, `/guides/${o.slug}`)} className="card p-4 text-sm font-semibold hover:border-ink-2">
                  {l(o.title, locale)}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
