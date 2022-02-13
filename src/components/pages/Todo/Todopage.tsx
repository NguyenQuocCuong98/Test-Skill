import "styles/Todopage.css";

import React,{useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "components/pages/Home/Header";
import { Link } from "react-router-dom";
import { angleLeft } from "components/font/FontGlobal";

const Todolist: React.FC = () => {
  const [class, setClass] = useState<string>('')
  return (
    <section>
      <Header />
      <div className="todoList-page__container">
        <Link to="/">
          <div className="todoList-page__icon">
            <FontAwesomeIcon icon={angleLeft} />
          </div>
        </Link>
        <h3>Todo list</h3>
      
    </section>
  );
};

export default Todolist;
