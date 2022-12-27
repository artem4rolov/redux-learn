import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
  // в store redux есть todos, в этом todos есть массив todos
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
