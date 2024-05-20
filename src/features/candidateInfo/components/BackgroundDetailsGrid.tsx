import {
  InfoGrid,
  InfoGridItem,
  InfoGridRow,
} from "@components/InfoGrid/InfoGrid";
import { Candidate } from "@data/candidates";

interface IBackgroundDetailsProps {
  candidate: Candidate;
}

export const BackgroundDetailsGrid = (props: IBackgroundDetailsProps) => {
  const { candidate } = props;

  return (
    <InfoGrid>
      <InfoGridRow>
        <InfoGridItem className="body-bold">Verkkosivut</InfoGridItem>
        <InfoGridItem>{candidate.website ?? "-"}</InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <InfoGridItem className="body-bold">Creator</InfoGridItem>
        <InfoGridItem>{candidate.creator}</InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <InfoGridItem className="body-bold">Github repository</InfoGridItem>
        <InfoGridItem>{candidate.github || "-"}</InfoGridItem>
      </InfoGridRow>
    </InfoGrid>
  );
};
