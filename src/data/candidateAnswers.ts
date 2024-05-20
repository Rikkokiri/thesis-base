import { LocalizedString } from "./types";

/* TODO: Move to types file */
export type CandidateAnswer = {
  /* candidateId: string; */
  /* questionId: number; */
  answer: number;
  comment?: LocalizedString;
};

export type SingleCandidateAnswers = {
  [questionId: number]: CandidateAnswer;
};

export type CandidatesResponses = {
  [candidateId: string]: SingleCandidateAnswers;
};

const ANT_DESIGN_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
    comment: {
      en: "Test comment",
      fi: "Testikommentti",
    },
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

const CHAKRA_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

const MANTINE_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

const SHADCN_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

export const CANDIDATE_ANSWERS: CandidatesResponses = {
  chakra: CHAKRA_ANSWERS,
  ant: ANT_DESIGN_ANSWERS,
  mantine: MANTINE_ANSWERS,
  shadcnui: SHADCN_ANSWERS,
};
