import "../styles/AnswerList.css";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers } = props;

  return (
    <article className="answer-list">
      <SectionCard title={t("candidateSections.answers")}>
        {questions.map((question) => (
          <AnswerCard
            key={question.id}
            question={question}
            answer={candidateAnswers[question.id] ?? { answer: null }}
            questionsCount={questions.length}
          />
        ))}
      </SectionCard>
    </article>
  );
};
