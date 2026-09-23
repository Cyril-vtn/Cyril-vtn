// Downloads the illustrations listed in src/content/art.ts into public/art/ (best effort, never fails the build).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const src = readFileSync("src/content/art.ts", "utf8");
const cdn = src.match(/const CDN = "([^"]+)"/)[1];
const entries = [...src.matchAll(/"?([\w-]+)"?: CDN \+ "([^"]+)"/g)];
mkdirSync("public/art", { recursive: true });
let ok = 0;
for (const [, key, file] of entries) {
  const out = `public/art/${key}.png`;
  if (existsSync(out)) { ok++; continue; }
  try {
    const res = await fetch(cdn + file, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(String(res.status));
    writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    console.warn(`[fetch-art] ${key}: ${e.message} — will use CDN URL`);
  }
}
console.log(`[fetch-art] ${ok}/${entries.length} illustrations available locally`);
