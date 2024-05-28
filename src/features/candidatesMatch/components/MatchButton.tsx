import "../styles/MatchButton.css";

interface IMatchButtonProps {
  rank: number;
  candidateName: string;
  percentage: number;
  imageSrc: string;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { candidateName, rank, percentage, imageSrc } = props;
  const ariaLabel = `top ${rank} - ${candidateName} - ${props.percentage}% match`;

  return (
    <button aria-label={ariaLabel} className="match-result">
      <div className="match-result__img-wrapper">
        <img src={imageSrc} aria-hidden className="match-result__img" />
        <p className="match-result__score">{`${percentage}%`}</p>
      </div>
    </button>
  );
};
