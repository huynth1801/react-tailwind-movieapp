import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propsType = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export default Modal;

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div
      ref={contentRef}
      className="modal__content bg-screenLight dark:bg-screenDark"
    >
      {props.children}
      <div onClick={closeModal} className="modal__content__close">
        <IoCloseSharp />
      </div>
    </div>
  );
};

ModalContent.propsType = {
  onClose: PropTypes.func,
};
