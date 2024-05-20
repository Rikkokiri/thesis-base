import { getCandidateById } from "@data/api";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import CandidateInfo, { CandidateHeader } from "src/features/candidateInfo";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;
  const { t } = useTranslation();

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <CandidateHeader candidateId={candidate.id} />
      <div className="page-sections__column">
        <CandidateInfo candidateId={candidate.id} />
        <SectionCard title={t("candidate.answers")}>
          <p>Candidate's answers</p>
        </SectionCard>
      </div>
    </>
  );
};
