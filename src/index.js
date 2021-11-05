import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NumberList from "./lists_and_keys/NumbersList.js"


ReactDOM.render(
  <NumberList numbers={[1, 2, 3, 4, 5]}/>,
  document.getElementById("root")
);

reportWebVitals();
