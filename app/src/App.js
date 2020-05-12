import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import uuidv4 from "uuid/v4";

function App(props) {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    console.log(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todo, id: uuidv4(), completed: false }]);
    setTodo("");
  };

  const onClearAllCompleted = (e) => {
    e.preventDefault();

    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleTodo = (id) => {
    const newArr = [];
    todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      newArr.push(todo);
    });
    setTodos(newArr);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={onChange} type="text" />
      <button type="submit" onClick={onSubmit}>
        Add Task
      </button>
      <button type="submit" onClick={onClearAllCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;
