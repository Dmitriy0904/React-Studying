import React, { useEffect, useState } from "react";
import "./styles.css";
import Element from "./Element";

function ToDoList(props) {
  const [todos, setTodos] = useState([
    { id: 1, description: "To do 1", status: true },
    { id: 2, description: "To do 2", status: false },
    { id: 3, description: "To do 3", status: true },
    { id: 4, description: "To do 4", status: false },
    { id: 5, description: "To do 5", status: true },
  ]);

  const [input, setInput] = useState("");


  useEffect(() => {
    const items = localStorage.getItem("todos");
    setTodos(JSON.parse(items));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const createTodo = (event) => {
    if ((event.key === "Enter" || event.type === "click") && input !== "") {
      const newTodo = {
        id: new Date(),
        description: input,
        status: false,
      };
      setTodos([newTodo, ...todos]);
      setInput("");
    }
  };


  return (
    <div>
      <fieldset className="create-todo">
        <legend>Add new to do</legend>
        <input
          className="input-field"
          type="text"
          placeholder="Enter what do you need to do..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={createTodo}
        />
        <button className="add-button" onClick={createTodo}>
          Add
        </button>
      </fieldset>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <Element item={t}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
