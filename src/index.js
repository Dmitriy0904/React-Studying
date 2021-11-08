import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BoilWaterCalculator from "./lifting_state_up/boil_water_calculator/Calculator";

ReactDOM.render(
  <BoilWaterCalculator />,
  document.getElementById("root")

);

reportWebVitals();
