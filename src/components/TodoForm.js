import React, { useState } from "react";
import TodoList from "./TodoList";
import { BiPlusCircle } from "react-icons/bi";

function TodoForm({ input, todos, setTodos, setInput, setFilter }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        data: input,
        checked: false,
      },
    ]);
    setInput("");
    console.log(todos);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const handleComplete = () => {
    setTodos(todos.filter((todo) => (todo.checked ? true : false)));
  };
  const handleUncomplete = () => {
    setTodos(todos.filter((todo) => (!todo.checked ? true : false)));
  };
  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-container">
          <input
            className="todo-input"
            type="text"
            placeholder="Enter your task for today"
            onChange={handleChange}
            value={input}
          />
          <button className="todo-btn" type="submit">
            <BiPlusCircle />
          </button>
        </div>

        <div className="todo-filter">
          <select onChange={handleFilter} name="todos" className=".select">
            <option value="all">All</option>
            <option value="completed">Complete</option>
            <option value="uncomplete">Uncomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
