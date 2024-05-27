import "../styles/CandidatesMatchBar.css";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";

export const CandidatesMatchBar = () => {
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);
  const sampleValues = [1, 2, 3, 4, 5];

  return (
    <header className="match-bar">
      <div className="match-bar__matches">
        {resultsHidden
          ? sampleValues.map((index) => <MatchPlaceholder key={index} />)
          : sampleValues.map((index) => (
              <MatchButton
                rank={index}
                key={index}
                candidateName={"Test name"}
                percentage={0}
                imageSrc={"/logos/ant-logo.svg"}
              />
            ))}
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
