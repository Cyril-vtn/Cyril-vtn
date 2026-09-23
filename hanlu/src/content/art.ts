/**
 * Ink-wash illustrations (generated with Higgsfield, GPT Image 2.5). `scripts/fetch-art.mjs` copies them
 * into public/art/ at build time when the network allows; otherwise pages fall back to the CDN URL.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3IoUhIxxBlHjnTGC0maZnlOJrMm/";

export const ART: Record<string, string> = {
  "level-1": CDN + "hf_20260923_203434_aa16bcec-c042-422d-9c7f-1b66a150b143.png",
  "level-2": CDN + "hf_20260923_203434_b6f70f50-e867-4a8c-9655-a5e857cb6a55.png",
  "level-3": CDN + "hf_20260923_203434_741674fb-2c6b-4f34-a989-714fa04bbe4e.png",
  "level-4": CDN + "hf_20260923_203435_dd47dcf7-7ad7-4e0c-b646-ac9b45eafda0.png",
  "level-5": CDN + "hf_20260923_203434_d2c24e79-4d23-4fa9-b0b8-15f056edd963.png",
  "level-6": CDN + "hf_20260923_203434_33b0cfc0-796f-4013-8cdc-a785094d90a9.png",
  "level-7": CDN + "hf_20260923_203434_508c41b1-3566-4c6f-91e1-c71eaed54de7.png",
  journey: CDN + "hf_20260923_203435_56a73c73-cd3c-481f-ae3b-d639d29fc775.png",
};

/** Local copy when present at build time, remote otherwise. Server-only. */
export function artSrc(key: string): string {
  const local = join(process.cwd(), "public", "art", `${key}.png`);
  return existsSync(local) ? `/art/${key}.png` : ART[key];
}
