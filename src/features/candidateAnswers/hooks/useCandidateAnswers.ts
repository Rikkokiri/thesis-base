import { getCandidateById, getCandidatesAnswersById } from "@data/api";
import { useLocalizedString } from "src/hooks/useLocalizedString";

export const useCandidateAnswers = (candidateId: string) => {
  const candidateDetails = getCandidateById(candidateId);
  const candidateAnswers = getCandidatesAnswersById(candidateId);
  const { localize } = useLocalizedString();

  return {};
};
