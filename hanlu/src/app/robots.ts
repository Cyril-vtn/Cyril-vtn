import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/fr/review", "/en/review", "/fr/dashboard", "/en/dashboard"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
