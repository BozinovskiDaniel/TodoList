import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <Todo key={todo.id} todoItem={todo} toggleTodo={props.toggleTodo} />
        );
      })}
    </div>
  );
}

export default TodoList;
