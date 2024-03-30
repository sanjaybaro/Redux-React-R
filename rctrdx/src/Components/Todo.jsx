import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailureAction,
  getTodoRequestAction,
  getTodoSuccessAction,
} from "../Redux/action";
import TodoInput from "./TodoInput";

function Todo() {
  const todo = useSelector((store) => store.todo);

  const dispatch = useDispatch();

  console.log(todo);

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
