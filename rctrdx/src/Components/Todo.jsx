import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";

function Todo() {
  const todo = useSelector();
  return (
    <div>
      <TodoInput />
    </div>
  );
}

export default Todo;
