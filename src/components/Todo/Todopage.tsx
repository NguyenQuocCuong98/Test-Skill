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
  const todoStorage = JSON.parse(localStorage.getItem("todo"));
  const [todos, setTodos] = useState<TodoContainer[]>(todoStorage ?? []);
  const onAddTodoHandler = (text: string) => {
    const newTodo = new TodoContainer(text);
    setTodos((preTodos) => {
      const data = preTodos.concat(newTodo);
      const jsonData = JSON.stringify(data);
      localStorage.setItem("todo", jsonData);
      return data;
    });
  };
  const onCheckTodoHandler = (todoId: string) => {
    setTodos((preTodos) => {
      return preTodos.filter((todo) => todo.id !== todoId);
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
