import "styles/Todos.css";

import React from "react";
import TodoItem from "./TodoItem";

interface todoProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}
const Todos: React.FC<todoProps> = ({ todos, toggleComplete }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default Todos;
