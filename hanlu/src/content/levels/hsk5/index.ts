import type { LevelCourse } from "../../types";
import { grammar } from "./grammar";
import { lessonsA } from "./lessons-a";
import { lessonsB } from "./lessons-b";

export const course: LevelCourse = {
  level: 5,
  lessons: [...lessonsA, ...lessonsB],
  grammar,
};
