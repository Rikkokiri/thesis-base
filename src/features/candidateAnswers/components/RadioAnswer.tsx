import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";

interface RadioAnswerProps {
  t: TFunction;
  value: number | null;
  questionId: number;
}

export const RadioAnswer = (props: RadioAnswerProps) => {
  const { t, value, questionId } = props;

  return (
    <div className="row_centered answer_radio">
      <RadioRange
        options={[
          {
            value: 1,
            label: t("answerScale.strongDisagree"),
            optionClassName: "disagree",
          },
          {
            value: 2,
            label: t("answerScale.disagree"),
            optionClassName: "disagree",
          },
          { value: 4, label: t("answerScale.agree"), optionClassName: "agree" },
          {
            value: 5,
            label: t("answerScale.strongAgree"),
            optionClassName: "agree",
          },
        ]}
        value={value ?? undefined}
        onChange={() => {}}
      />
    </div>
  );
};
