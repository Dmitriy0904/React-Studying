import React, { useState } from "react";
import "./styles.css";

function Element(props) {
  const toDo = props.item;

  const [status, setStatus] = useState(toDo.status);

  

//   const handleDeleteClick = (event) => {
//     console.log(event.target.value);
//     props.handleDeleteToDo(toDo.id);
//   };

  const isDone = toDo.status ? "done" : "not-done";

  return (
    <div className={"todo-list-item todo-" + isDone}>
  
      <p>{toDo.description}</p>

      <p>
        Completed: 
        <input type="checkbox" checked={toDo.status} onChange={event => setStatus(!status)}/>
        <button>Delete</button>
      </p>
    </div>
  );
}

export default Element;
