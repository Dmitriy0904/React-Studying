import React from "react";
import { useState } from "react/cjs/react.development";
import "./styles.css";

function Element(props) {
  const toDo = props.item;

  //local state for the element
  const [status, setStatus] = useState(toDo.status);

  const handleStatusChange = () => {
    setStatus(!status);
  }

  const isDone = status ? "done" : "not-done";

  return (
    <div className={"todo-list-item todo-" + isDone}>
  
      <p>{toDo.description}</p>

      <p>
        Completed: 
        <input type="checkbox" checked={status} onChange={handleStatusChange}/>
        <button>Delete</button>
      </p>
    </div>
  );
}

export default Element;
