"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function GuideView({ slug }: { slug: string }) {
  useEffect(() => {
    track("guide_viewed", { slug });
  }, [slug]);
  return null;
}
