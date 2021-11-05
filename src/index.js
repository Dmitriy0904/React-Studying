import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Blog from "./lists_and_keys/Blog";

const posts = [
  {id: 1, title: "Football", content: "Smth about football..."},
  {id: 2, title: "Basketball", content: "Smth about basketball..."},
  {id: 3, title: "Tennis", content: "Smth about tennis..."},
];

ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById("root")
);

reportWebVitals();
