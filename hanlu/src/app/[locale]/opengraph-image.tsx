import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hanlu — HSK 3.0";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function OG({ params }: { params: Promise<{ locale: string }> }) {
  const fr = (await params).locale === "fr";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f7f3ec", padding: 80, flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "#c8372d" }} />
          <div style={{ fontSize: 48, fontWeight: 700, color: "#16140f" }}>Hanlu</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, color: "#16140f", lineHeight: 1.05 }}>{fr ? "Parle chinois." : "Speak Chinese."}</div>
          <div style={{ fontSize: 80, fontWeight: 700, color: "#c8372d", lineHeight: 1.05 }}>{fr ? "Pour de vrai." : "For real."}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 30, color: "#4a4439" }}>
          {fr ? "HSK 3.0 · 9 niveaux · 11 092 mots · Cours, grammaire, révisions" : "HSK 3.0 · 9 levels · 11,092 words · Courses, grammar, review"}
        </div>
      </div>
    ),
    size,
  );
}
