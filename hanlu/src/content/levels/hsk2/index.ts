import type { LevelCourse } from "../../types";
import { grammarA } from "./grammar-a";
import { grammarB } from "./grammar-b";
import { lessonsA } from "./lessons-a";
import { lessonsB } from "./lessons-b";
import { lessonsC } from "./lessons-c";

export const course: LevelCourse = {
  level: 2,
  lessons: [...lessonsA, ...lessonsB, ...lessonsC],
  grammar: [...grammarA, ...grammarB],
};

export default course;
