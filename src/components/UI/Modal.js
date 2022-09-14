import classes from "./Modal.module.css";
import { Fragment } from "react";
import reactDOM from "react-dom";

const ModalBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.querySelector("#overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {reactDOM.createPortal(<ModalBackdrop onClose={props.setCartClose}/>, portalElement)}
      {reactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
