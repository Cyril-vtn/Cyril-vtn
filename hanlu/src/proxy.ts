import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["fr", "en"];

/** Send visitors hitting a non-localized URL to /fr or /en based on Accept-Language. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((p) => p.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((l) => LOCALES.includes(l));
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred ?? "fr"}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|data|icon|favicon|robots|sitemap|og|.*\\..*).*)"],
};
