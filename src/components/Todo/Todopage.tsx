import "styles/TodoPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/Header";
import { Link } from "react-router-dom";
import NewTodo from "../NewTodo";
import TodoContainer from "model/TodoContainer";
import Todos from "../Todos";
import { angleLeft } from "components/font/FontGlobal";
import { useState } from "react";

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<TodoContainer[]>([]);
  const onAddTodoHandler = (text: string) => {
    const newTodo = new TodoContainer(text);
    setTodos((preTodos) => {
      return preTodos.concat(newTodo);
    });
  };
  const onCheckTodoHandler = (todoId: string) => {
    setTodos((preTodos) => {
      return preTodos.filter((todo) =>
        todo.id === todoId ? "line-through" : ""
      );
    });
  };
  return (
    <section>
      <Header />
      <div className="todo-container">
        <Link to="/">
          <div className="todo-icon">
            <FontAwesomeIcon icon={angleLeft} />
          </div>
        </Link>
        <h3>Todo list</h3>
      </div>
      <NewTodo onAddToDo={onAddTodoHandler} />
      <Todos items={todos} onCheckedTodo={onCheckTodoHandler} />
    </section>
  );
};

export default Todolist;
