import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";

interface RadioAnswerProps {
  t: TFunction;
  value: number | null;
}

export const RadioAnswer = (props: RadioAnswerProps) => {
  const { t, value } = props;

  return (
    <div className="row-centered answer__radio">
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
        isReadonly
      />
    </div>
  );
};
