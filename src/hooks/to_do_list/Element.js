import React from "react";
import { useContext } from "react/cjs/react.development";
import { ToDoListContext } from "./Context";
import "./styles.css";

function Element(props) {
  
  const toDo = props.item;

  const { removeTodo, changeStatus } = useContext(ToDoListContext);

  const isDone = toDo.status ? "done" : "not-done";

  return (
    <div className={"todo-list-item todo-" + isDone}>
      <p>{toDo.description}</p>

      <p>
        Completed:
        <input
          type="checkbox"
          checked={toDo.status}
          onChange={() => changeStatus(toDo.id)}
        />
        <button onClick={() => removeTodo(toDo.id)}>Delete</button>
      </p>
    </div>
  );
}

export default Element;
