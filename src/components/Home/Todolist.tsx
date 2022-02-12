import "./Todolist.css";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Todolist: FC = () => {
  const faPropIcon = faAngleRight as IconProp;
  return (
    <div className="todoList">
      <div className="todoList-wrapper">
        <div className="todoList-number">
          <p>1</p>
        </div>
        <div className="todoList-description">Todo list</div>
      </div>
      <div className="todoList-icon">
        <FontAwesomeIcon icon={faPropIcon} />
      </div>
    </div>
  );
};

export default Todolist;
