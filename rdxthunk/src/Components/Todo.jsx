import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/Todo/action";
import TodoInput from "./TodoInput";

function Todo() {
  const todo = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos); //ui
  }, []);

  return (
    <div>
      <TodoInput />
      {/* {isLoading && <h1>Loading....</h1>} */}
      {todo.length > 0 &&
        todo.map((el) => {
          return (
            <div key={el.id}>
              {el.title} -- {el.status ? "True" : "False"}
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
