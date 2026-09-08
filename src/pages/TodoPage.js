function TodoPage() {
  return (
    <section className="todo-page">
      <h1>My Todo List</h1>

      <form className="todo-form">
        <input type="text" placeholder="Enter a new task" />

        <button type="submit">Add Task</button>
      </form>

      <div className="todo-filters">
        <button>All</button>
        <button>Completed</button>
        <button>Incomplete</button>
      </div>

      <div className="todo-list">
        <p>No tasks yet.</p>
      </div>
    </section>
  );
}

export default TodoPage;
