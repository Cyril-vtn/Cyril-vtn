import type { LevelCourse } from "../../types";
import { grammarA } from "./grammar-a";
import { grammarB } from "./grammar-b";
import { grammarC } from "./grammar-c";
import { lessons1 } from "./lessons-1";
import { lessons2 } from "./lessons-2";
import { lessons3 } from "./lessons-3";

export const course: LevelCourse = {
  level: 3,
  lessons: [...lessons1, ...lessons2, ...lessons3],
  grammar: [...grammarA, ...grammarB, ...grammarC],
};
