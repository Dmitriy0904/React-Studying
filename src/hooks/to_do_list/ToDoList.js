import React, { useState } from "react";
import Element from "./Element";
import "./styles.css";


function ToDoList(props){

    const [todos, setTodos] = useState([
        {id: 1, description: "To do 1", status: true},
        {id: 2, description: "To do 2", status: false},
        {id: 3, description: "To do 3", status: true},
        {id: 4, description: "To do 4", status: false},
        {id: 5, description: "To do 5", status: true}
    ]);

    const [todoDesc, setTodoDesc] = useState("");

    const onChangeToDoDesc = (event) => {
        setTodoDesc(event.target.value);
    };

    const createTodo = (event) => {
        if((event.key === "Enter" || event.type === "click") && todoDesc !== ""){
            const newTodo = {
                id: new Date(),
                description: todoDesc,
                status: false
            };
            setTodos([...todos, newTodo]);
            setTodoDesc("");
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
            value={todoDesc}
            onChange={onChangeToDoDesc}
            onKeyPress={createTodo}
          />
          <button className="add-button" onClick={createTodo}>Add</button>
        
        </fieldset>

        <ul>
          {todos.map((item) => (
            <li>
              <Element item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ToDoList;