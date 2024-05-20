import { getCandidateById } from "@data/api";
import { useParams } from "react-router-dom";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { useTranslation } from "react-i18next";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import CandidateInfo from "src/features/candidateInfo";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;
  const { t } = useTranslation();

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <div className="page-sections__column">
      <h1>Candidate: {candidate.name}</h1>
      <CandidateInfo candidateId={candidate.id} />
      <SectionCard title={t("candidate.answers")}>
        <p>Candidate's answers</p>
      </SectionCard>
    </div>
  );
};
