import "../../../styles/TodoPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/Header";
import { Link } from "react-router-dom";
import NewTodo from "../../NewTodo";
import Todos from "../../Todos";
import { angleLeft } from "components/font/FontGlobal";
import { useState } from "react";

const Todolist: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onAddTodoHandler: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
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
      <NewTodo addTodo={onAddTodoHandler} />
      <Todos todos={todos} toggleComplete={toggleComplete} />
    </section>
  );
};

export default Todolist;
