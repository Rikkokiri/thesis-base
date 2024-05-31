import "../styles/MatchButton.css";
import { useState } from "react";
import { CandidateModal } from "./CandidateModal";

interface IMatchButtonProps {
  rank: number;
  candidateName: string;
  percentage: number;
  imageSrc: string;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { candidateName, rank, percentage, imageSrc } = props;
  const ariaLabel = `top ${rank} - ${candidateName} - ${props.percentage}% match`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        aria-label={ariaLabel}
        className="match-result"
        onClick={() => {
          console.log("Clicked the button");
          setIsModalOpen(true);
        }}
      >
        <div className="match-result__img-wrapper">
          <img src={imageSrc} aria-hidden className="match-result__img" />
          <p className="match-result__score">{`${percentage}%`}</p>
        </div>
      </button>
      <CandidateModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};
