import React from "react";

const TodoItem = ({ id, text, completed, removeTodo, toggleComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleComplete(id)}
        checked={completed}
      />
      <span>{completed ? <del>{text}</del> : text}</span>
      <span
        onClick={() => removeTodo(id)}
        className="delete_todo"
        style={{ color: "red" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
