import type { LevelCourse } from "../../types";
import { grammar } from "./grammar";
import { lessonsA } from "./lessons-a";
import { lessonsB } from "./lessons-b";

/** HSK 3.0 — Level 1 course: 15 lessons, 48 grammar points (official 【一01】–【一48】 coverage). */
export const course: LevelCourse = {
  level: 1,
  lessons: [...lessonsA, ...lessonsB],
  grammar,
};
