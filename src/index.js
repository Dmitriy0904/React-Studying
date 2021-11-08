import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Counter from "./lifting_state_up/simple_counter/Counter";

ReactDOM.render(
  <Counter />,
  document.getElementById("root")
);

reportWebVitals();
