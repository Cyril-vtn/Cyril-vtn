// Copies the vocab JSON into public/ so client features (review deck, placement) can fetch per level.
import { cpSync, mkdirSync } from "node:fs";
mkdirSync("public/data/vocab", { recursive: true });
cpSync("src/data/vocab", "public/data/vocab", { recursive: true });
console.log("copied vocab → public/data/vocab");
