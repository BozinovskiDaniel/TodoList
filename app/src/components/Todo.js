import React from "react";

function Todo(props) {
  return (
    <li>
      {props.todoItem.name}
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todoItem.completed}
        onClick={() => props.toggleTodo(props.todoItem.id)}
      />
    </li>
  );
}

export default Todo;
