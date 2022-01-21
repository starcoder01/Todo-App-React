import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  //to filter the values
  useEffect(() => {
    filterTask();
    saveLocalTodo();
  }, [todos, filter]);

  const filterTask = () => {
    switch (filter) {
      case "completed":
        setFilterTodos(todos.filter((todo) => (todo.checked ? true : false)));
        break;
      case "uncomplete":
        setFilterTodos(todos.filter((todo) => (todo.checked ? false : true)));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify());
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    }
  };

  return (
    <>
      <header>Todo List</header>
      <TodoForm
        input={input}
        todos={todos}
        setInput={setInput}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </>
  );
}
