import React, { useEffect, useState } from "react";
import "./styles.css";
import ToDoList from "./ToDoList";
import { ToDoListContext } from "./Context";
import CreateTodoBar from "./CreateTodoBar";

function App() {

  const [todos, setTodos] = useState([]);


  //get todos from local storage
  useEffect(() => {
    const items = localStorage.getItem("todos");
    setTodos(JSON.parse(items));
  }, []);


  //save todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const createTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };


  const removeTodo = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  };


  const changeStatus = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        t.status = !t.status;
      }
      return t;
    });
    setTodos(updatedTodos);
  };


  return (
    <div>
      <ToDoListContext.Provider value={{ createTodo }}>
        <CreateTodoBar />
      </ToDoListContext.Provider>

      <ToDoListContext.Provider value={{ removeTodo, changeStatus }}>
        <ToDoList todos={todos} />
      </ToDoListContext.Provider>
    </div>
  );
}

export default App;
