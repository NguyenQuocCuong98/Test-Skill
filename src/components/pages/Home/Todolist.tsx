import "styles/TodoList.css";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { angleRight } from "components/font/FontGlobal";

const Todolist: FC = () => {
  return (
    <div className="todoList">
      <div className="todoList-wrapper">
        <div className="todoList-number">
          <p>1</p>
        </div>
        <div className="todoList-description">Todo list</div>
      </div>
      <Link to="todo">
        <div className="todoList-icon">
          <FontAwesomeIcon icon={angleRight} />
        </div>
      </Link>
    </div>
  );
};

export default Todolist;
