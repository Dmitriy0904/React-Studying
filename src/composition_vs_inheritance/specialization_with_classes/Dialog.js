import React from "react";
import "./../../App.css";

function FancyBorder(props) {
  return (
    <div className={"fancy-border fancy-border-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export default Dialog;
