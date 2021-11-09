import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./hooks/to_do_list/ToDoList";
import reportWebVitals from "./reportWebVitals";


const todos = [
  {id: 1, description: "To do 1", status: true},
  {id: 2, description: "To do 2", status: false},
  {id: 3, description: "To do 3", status: true},
  {id: 4, description: "To do 4", status: false},
  {id: 5, description: "To do 5", status: true}
];



ReactDOM.render(
  <ToDoList todos={todos}/>,
  document.getElementById("root")
);

reportWebVitals();
