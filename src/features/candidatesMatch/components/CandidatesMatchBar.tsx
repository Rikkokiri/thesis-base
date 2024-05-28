import "../styles/CandidatesMatchBar.css";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";

export const CandidatesMatchBar = (
  props: ReturnType<typeof useCandidatesMatch>,
) => {
  const { topFourCandidates, topCount } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  return (
    <header className="match-bar">
      <div className="match-bar__matches">
        {resultsHidden || !topFourCandidates
          ? [...Array(topCount).keys()].map((index) => (
              <MatchPlaceholder key={index} />
            ))
          : topFourCandidates.map(
              (candidate: MatchWithDetails, index: number) => (
                <MatchButton
                  rank={index + 1}
                  key={candidate.id}
                  candidateName={candidate.name}
                  percentage={candidate.score}
                  imageSrc={candidate.logoSrc}
                />
              ),
            )}
        <ToggleButton
          isToggled={resultsHidden}
          onClick={() => setResultsHidden(!resultsHidden)}
          untoggledIcon={<FiEye />}
          toggledIcon={<FiEyeOff />}
          variant="ghost"
          size="medium"
        />
      </div>
    </header>
  );
};

const MatchPlaceholder = () => {
  return (
    <div className="column-centered placeholder-match">
      <div className="placeholder-candidate"></div>
      <div className="placeholder-score"></div>
    </div>
  );
};
