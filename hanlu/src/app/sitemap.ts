import type { MetadataRoute } from "next";
import { LEVELS, allGrammar, getCourse } from "@/content";
import { guides } from "@/content/foundations/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/learn",
    "/vocabulary",
    "/grammar",
    "/practice",
    "/practice/tones",
    "/practice/writing",
    "/practice/pinyin",
    "/practice/listening",
    "/placement",
    "/hsk",
    "/guides",
    "/radicals",
    "/pricing",
    "/about",
    ...LEVELS.flatMap((lv) => [`/learn/${lv}`, `/vocabulary/${lv}`]),
    ...LEVELS.flatMap((lv) => (getCourse(lv)?.lessons ?? []).map((x) => `/learn/${lv}/${x.id}`)),
    ...allGrammar().map((g) => `/grammar/${g.id}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
  return paths.flatMap((p) =>
    (["fr", "en"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${p}`,
      alternates: { languages: { fr: `${SITE_URL}/fr${p}`, en: `${SITE_URL}/en${p}` } },
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : p.split("/").length <= 2 ? 0.8 : 0.6,
    })),
  );
}
