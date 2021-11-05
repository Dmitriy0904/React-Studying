import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NumberList from "./lists_and_keys/NumbersList_2"

const numbers = [1, 2, 3, 4, 5];


ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById("root")
);

reportWebVitals();
