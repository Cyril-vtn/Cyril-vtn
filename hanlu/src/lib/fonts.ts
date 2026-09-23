import { Inter, Fraunces, Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
export const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "600", "900"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});
export const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});
