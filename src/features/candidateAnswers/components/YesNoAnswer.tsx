import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { Button } from "@components/Button/Button";

const YES = 5;
const NO = 1;

interface YesNoAnswerProps {
  t: TFunction;
  questionId: number;
  answer: number | null;
}

export const YesNoAnswer = (props: YesNoAnswerProps) => {
  const { answer, questionId, t } = props;

  return (
    <div className="row_centered answer_buttons">
      <Button
        isDisabled
        // {answer === YES}
        variant="outline"
        onClick={() => {}}
        iconBefore={<RiThumbUpLine />}
      >
        {t("question.yes")}
      </Button>
      <Button
        variant="outline"
        isDisabled
        // {answer === NO}
        onClick={() => {}}
        iconBefore={<RiThumbDownLine />}
      >
        {t("question.no")}
      </Button>
    </div>
  );
};
