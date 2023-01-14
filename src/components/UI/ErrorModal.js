import React from "react";
import ReactDom from "react-dom";

import Button from "./Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="container" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <div className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </div>
    </div>
  );
};

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
