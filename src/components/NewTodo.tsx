import "styles/NewTodo.css";

import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddToDo: (text: string) => void }> = ({
  onAddToDo,
}) => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value; // ! ở đây chắc chắn phải là value không thể là null
    if (enteredText.trim().length === 0) {
      return;
    }
    onAddToDo(enteredText);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" id="text" placeholder="Search" ref={todoTextInput} />
        <button>Add</button>
      </form>
      <h4>
        There are
        <span>5</span>tasks left out of 6 tasks
      </h4>
    </>
  );
};

export default NewTodo;
