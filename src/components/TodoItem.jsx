import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        onChange={() => dispatch(toggleCompleted({ id }))}
        checked={completed}
      />
      <span>{completed ? <del>{text}</del> : text}</span>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        className="delete_todo"
        style={{ color: "red" }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
