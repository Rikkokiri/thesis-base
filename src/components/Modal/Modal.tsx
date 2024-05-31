import { Button } from "@components/Button/Button";
import "./Modal.css";
import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

interface IModalProps {
  isOpen: boolean;
  closeModal: () => void;
  // onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: IModalProps) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      /* if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("Clicked outside modal");
        ref.current.close();
      } */
      const rect = ref?.current?.getBoundingClientRect();
      if (
        rect &&
        (event.clientY < rect.top ||
          event.clientY > rect.bottom ||
          event.clientX < rect.left ||
          event.clientX > rect.right)
      ) {
        handleClosing();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleClosing = () => {
    ref.current?.close();
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      console.log("show modal");
      ref.current?.showModal();
      // document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      // ref.current?.close();
      handleClosing();
      // document.body.classList.remove("modal-open");
    }
  }, [isOpen, ref]);

  return (
    <dialog ref={ref} className="modal" onCancel={closeModal}>
      <div className="modal__content">
        <div className="modal__body">{children}</div>

        <Button
          onClick={() => closeModal()}
          iconBefore={<FiX />}
          iconSize={24}
          className="modal__close"
          variant="ghost"
          size="icon-only"
          aria-label="Close modal"
        ></Button>
      </div>
    </dialog>
  );
};
