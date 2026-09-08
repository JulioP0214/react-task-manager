import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

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

  function deleteTodo(id) {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  const filteredTodos = todos.filter(function (todo) {
    if (filter === "completed") {
      return todo.completed;
    }

    if (filter === "incomplete") {
      return !todo.completed;
    }

    return true;
  });

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
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          filteredTodos.map(function (todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default TodoPage;
