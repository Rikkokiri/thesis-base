import { Candidate } from "@data/candidates";

export type AnswerValuesRecord = Record<number, number | undefined>;

export type MatchWithDetails = Pick<Candidate, "id" | "name" | "logoSrc"> & {
  rank: number;
  score: number;
};
