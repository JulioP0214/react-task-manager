function TodoItem({ todo, toggleTodo }) {
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
    </div>
  );
}

export default TodoItem;
