import { configureStore } from "@reduxjs/toolkit";
// неважно, как назовем общий (главный, который включает в себя все мелкие reducer'ы) reducer,
// поскольку в файле todoSlice в конце идет экспорт по умолчанию
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
