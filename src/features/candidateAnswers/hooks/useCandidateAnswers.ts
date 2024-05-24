import { getAllQuestionsInOrder, getCandidatesAnswersById } from "@data/api";
import { Candidate } from "@data/candidates";
import { useTranslation } from "react-i18next";
import { useLocalizedString } from "src/hooks/useLocalizedString";

export const useCandidateAnswers = (candidate: Candidate) => {
  const questions = getAllQuestionsInOrder();
  const candidateAnswers = getCandidatesAnswersById(candidate.id);
  const { localize } = useLocalizedString();
  const { t } = useTranslation();

  return {
    t,
    questions,
    candidateName: candidate.name,
    answers: candidateAnswers,
  };
};
