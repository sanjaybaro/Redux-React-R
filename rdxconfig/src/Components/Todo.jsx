import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getTodoFailureAction,
  getTodoRequestAction,
  getTodoSuccessAction,
} from "../Redux/Todo/action";
import TodoInput from "./TodoInput";

function Todo() {
  const { isLoading, todo } = useSelector(
    (store) => ({
      isLoading: store.todoReducer.isLoading,
      todo: store.todoReducer.todo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // console.log("Todo Re-rendered");

  // console.log(todo);

  const getTodos = () => {
    //Request
    dispatch(getTodoRequestAction());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        // console.log(res.data);
        //Success
        dispatch(getTodoSuccessAction(res.data));
      })

      .catch((err) => {
        console.log(err.message);
        //Failure
        dispatch(getTodoFailureAction());
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <TodoInput />
      {isLoading && <h1>Loading....</h1>}
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
