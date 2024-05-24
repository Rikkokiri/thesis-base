import "../styles/AnswerList.css";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, answers } = props;

  return (
    <article className="answer-list">
      <SectionCard title={t("candidateSections.answers")}>
        {questions.map((question) => (
          <AnswerCard
            key={question.id}
            question={question}
            answer={answers[question.id]}
            questionsCount={questions.length}
          />
        ))}
      </SectionCard>
    </article>
  );
};
