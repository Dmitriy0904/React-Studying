import React, { useState, useContext } from "react";
import { ToDoListContext } from "./Context";
import "./styles.css";


function newTodo(description) {
  return {
    id: new Date(),
    description: description,
    status: false,
  };
}


function CreateTodoBar() {

  const [input, setInput] = useState("");

  const { createTodo } = useContext(ToDoListContext);


  const handleInputChange = (event) => {
    setInput(event.target.input);
  };


  const handleCreateNewTodo = (event) => {
    if ((event.key === "Enter" || event.type === "click") && input !== "") {
      const todo = newTodo(event.target.value);
      createTodo(todo);
      setInput("");
    }
  };

  
  return (
    <fieldset className="create-todo">
      <legend>Add new to do</legend>
      <input
        className="input-field"
        type="text"
        placeholder="Enter what do you need to do..."
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleCreateNewTodo}
      />
      <button className="add-button" onClick={handleCreateNewTodo}>
        Add
      </button>
    </fieldset>
  );
}

export default CreateTodoBar;
