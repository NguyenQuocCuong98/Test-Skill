import "styles/TodoItem.css";

import React from "react";

interface todoItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}
const TodoItem: React.FC<todoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li>
      <label className={todo.complete ? "todo-item completed" : "todo-item"}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          className="todo-input"
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
