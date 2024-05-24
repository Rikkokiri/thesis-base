import "../styles/AnswerCard.css";
import { useTranslation } from "react-i18next";
import { Tag } from "../../../components/Tag/Tag";
import { Question } from "@data/types";
import { RadioAnswer } from "./RadioAnswer";
import { YesNoAnswer } from "./YesNoAnswer";
import { CandidateAnswer } from "@data/candidateAnswers";
import { CommentCard } from "./CommentCard";
import { useLocalizedString } from "@hooks/useLocalizedString";

interface ICardProps {
  question: Question;
  answer: CandidateAnswer;
  questionsCount: number;
}

export const AnswerCard = (props: ICardProps) => {
  const { answer, question, questionsCount } = props;
  const { t } = useTranslation();
  const { localize } = useLocalizedString();
  const questionId = question.id;

  const candidateComment = answer?.comment
    ? localize(answer.comment)
    : undefined;

  return (
    <section className="answer-card">
      <div className="row_centered card_header">
        <Tag variant="negative">{`${question.position}/${questionsCount}`}</Tag>
      </div>
      <h2 className="question">{question.question.en}</h2>
      {question.questionType === "yes-no" ? (
        <YesNoAnswer
          questionId={questionId}
          t={t}
          answer={answer?.answer ?? null}
        />
      ) : (
        <RadioAnswer
          questionId={questionId}
          t={t}
          value={answer?.answer ?? null}
        />
      )}
      {candidateComment && (
        <CommentCard
          header={"Candidate name"} // TODO: Pass candidate's name
          body={candidateComment}
          questionType={question.questionType}
          answer={answer.answer}
        />
      )}
    </section>
  );
};
