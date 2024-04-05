import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/Todo/action";
import TodoInput from "./TodoInput";

function Todo() {
  const todo = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <TodoInput />
      {/* {isLoading && <h1>Loading....</h1>} */}
      {todo.length &&
        todo.map((el) => (
          <div key={el.id}>
            {el.title} -- {el.status ? "True" : "False"}
          </div>
        ))}
    </div>
  );
}

export default Todo;
