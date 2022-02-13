import "styles/Todos.css";

import React from "react";
import TodoContainer from "model/TodoContainer";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: TodoContainer[];
  onCheckedTodo: (id: string) => void;
}> = ({ items, onCheckedTodo }) => {
  return (
    <ul className="todos">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onCheckedTodo={onCheckedTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
