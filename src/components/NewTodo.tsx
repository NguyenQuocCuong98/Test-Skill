import "styles/NewTodo.css";

import React, { ChangeEvent, FormEvent, useState } from "react";

interface newTodoProps {
  addTodo: AddTodo;
}
const NewTodo: React.FC<newTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="text"
          placeholder="On Add Todo"
          value={newTodo}
          onChange={handleChange}
          className="newTodo-input"
        />
        <button type="submit" className="todo-button" onClick={submitHandler}>
          Add
        </button>
      </form>
      <h4>
        There are
        <span>5</span>tasks left out of 6 tasks
      </h4>
    </>
  );
};

export default NewTodo;
