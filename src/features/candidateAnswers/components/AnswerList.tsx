import "../styles/AnswerList.css";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;

  return (
    <article className="answer-list">
      <SectionCard title={t("candidateSections.answers")}>
        {questions.map((question) => (
          <AnswerCard
            key={question.id}
            question={question}
            candidateAnswer={candidateAnswers[question.id] ?? { answer: null }}
            questionsCount={questions.length}
            candidateImgSrc={candidateImgSrc}
          />
        ))}
      </SectionCard>
    </article>
  );
};
