import { CandidateInfoContent } from "./components/CandidateInfoContent";
import { useCandidateInfo } from "./hooks/useCandidateInfo";

export default function ({ candidateId }: { candidateId: string }) {
  const candidateInfo = useCandidateInfo(candidateId);
  return <CandidateInfoContent {...candidateInfo} />;
}
