import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
