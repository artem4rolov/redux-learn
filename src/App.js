import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  const removeTodo = (id) => {
    // setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id !== id) {
    //       return todo;
    //     }
    //     console.log(todos);
    //     return { ...todo, completed: !todo.completed };
    //   })
    // );
  };

  return (
    <div className="App">
      <InputField handleInput={setText} handleSubmit={addTask} text={text} />

      <TodoList />
    </div>
  );
}

export default App;
