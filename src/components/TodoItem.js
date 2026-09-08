function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={function () {
          toggleTodo(todo.id);
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={function () {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
