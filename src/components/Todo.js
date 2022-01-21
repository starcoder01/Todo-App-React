import React from "react";

function Todo({ text, todos, todo, setTodos, id }) {
  const handleDelete = () => {
    const newTodo = todos.filter((el) => el.id !== todo.id);
    setTodos(newTodo);
  };

  const handleChecked = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
    console.log(todos);
  };
  return (
    text && (
      <div className="todo-item">
        <li className={`item-text ${todo.checked ? "checked" : ""}`}>{text}</li>
        <button className="edit-btn" onClick={handleChecked}>
          Completed
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    )
  );
}

export default Todo;
