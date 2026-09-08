import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (newTodo.trim() === "") {
      return;
    }

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);
    setNewTodo("");
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <section className="todo-page">
      <h1>My Todo List</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTodo}
          onChange={function (event) {
            setNewTodo(event.target.value);
          }}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="todo-filters">
        <button>All</button>
        <button>Completed</button>
        <button>Incomplete</button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          todos.map(function (todo) {
            return (
              <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            );
          })
        )}
      </div>
    </section>
  );
}

export default TodoPage;
