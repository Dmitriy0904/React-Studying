import React from "react";
import ReactDOM from "react-dom";
import Mailbox from "./conditional_rendering/Mailbox";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


 const males = ["Hello", "How are you?"];

ReactDOM.render(
  <Mailbox unreadMessages={males}/>,
  document.getElementById("root")
);

reportWebVitals();
