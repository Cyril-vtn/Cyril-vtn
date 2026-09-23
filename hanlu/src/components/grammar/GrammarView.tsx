"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function GrammarView({ id, level }: { id: string; level: number }) {
  useEffect(() => {
    track("grammar_viewed", { grammar_id: id, level });
  }, [id, level]);
  return null;
}
