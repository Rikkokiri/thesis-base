import "../styles/MatchButton.css";

interface IMatchButtonProps {
  rank: number;
  candidateName: string;
  percentage: number;
  imageSrc: string;
}

export const MatchButton = (props: IMatchButtonProps) => {
  return (
    <button aria-label="top X - Candidate name" className="match-result">
      <div className="match-result__img-wrapper">
        <img src={props.imageSrc} aria-hidden className="match-result__img" />
        <p className="match-result__score">{`${props.percentage}%`}</p>
      </div>
    </button>
  );
};
