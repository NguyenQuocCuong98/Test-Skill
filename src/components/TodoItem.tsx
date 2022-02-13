import "styles/TodoItem.css";

import React from "react";

const TodoItem: React.FC<{
  text: string;
  onCheckedTodo: () => void;
}> = ({ text, onCheckedTodo }) => {
  return (
    <li className="todo-item" onClick={onCheckedTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
