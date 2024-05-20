import { PromiseList } from "./PromiseList";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { BackgroundDetailsGrid } from "./BackgroundDetailsGrid";

export const CandidateInfoContent = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, promises, candidate } = props;

  return (
    <>
      {promises && (
        <SectionCard title={t("candidate.electionPromises")}>
          <PromiseList items={promises} />
        </SectionCard>
      )}
      {candidate !== undefined && (
        <SectionCard title={t("candidate.backgroundInfo")}>
          <BackgroundDetailsGrid candidate={candidate} />
        </SectionCard>
      )}
    </>
  );
};
