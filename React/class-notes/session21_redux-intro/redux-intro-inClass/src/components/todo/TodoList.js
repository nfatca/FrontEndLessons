import TodoItem from "./TodoItem";

const TodoList = () => {
  const handleClearList = () => {};

  return (
    <div>
      <div>
        {[].map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
