import { ButtonLink } from "@components/ButtonLink/ButtonLink";
import "../styles/CandidateModal.css";
import { Modal } from "@components/Modal/Modal";
import { useTranslation } from "react-i18next";

interface ICandidateModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const CandidateModal = ({
  isOpen,
  closeModal,
}: ICandidateModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="candidate-modal__body"></div>
      <div className="candidate-modal__actions">
        <ButtonLink to={`/candidates/mantine`} variant="outline" size="small">
          {t("candidate.getToKnow")}
        </ButtonLink>
      </div>
    </Modal>
  );
};
