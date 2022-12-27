import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((deed) => deed.id !== action.payload.id);
    },
    toggleCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

// отдельные reducer'ы
export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

// один, целый reducer
export default todoSlice.reducer;
