import React from "react";
import "./styles.css";
import Element from "./element";

function ToDoList(props) {
  const todos = props.todos;

  return (
    <ul>
      {todos.map((t) => ( <li key={t.id}><Element item={t} /></li>))}
    </ul>
  );
}

export default ToDoList;
