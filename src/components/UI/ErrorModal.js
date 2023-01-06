import React from "react";
import Button from "./Button";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div className="container">
      <div className="box">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <div className="actions">
          <Button>Okay</Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
