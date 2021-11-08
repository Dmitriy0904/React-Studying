import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WelcomeDialog from "./composition_vs_inheritance/containment/WelcomeDialog";

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById("root")
);

reportWebVitals();
