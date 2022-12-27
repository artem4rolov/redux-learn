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
    removeTodo(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// отдельные reducer'ы
export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

// один, целый reducer
export default todoSlice.reducer;
