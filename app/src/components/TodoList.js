import React from "react";
function TodoList(props) {
  return (
    <div className="todoList">
      {props.todos.map((todo) => {
        return (
          <li>
            <p>{todo.name}</p>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.completed}
              onClick={() => props.toggleTodo(todo.id)}
            />
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
