import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filterTodos }) {
  const todoList = todos.map((todo) => {
    <h1>todo.text</h1>;
  });

  return (
    <div className="todo-list">
      {filterTodos.map((todo) => (
        <Todo
          text={todo.data}
          id={todo.id}
          todo={todo}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
}

export default TodoList;
