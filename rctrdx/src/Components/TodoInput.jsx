import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  postTodoFailureAction,
  postTodoRequestAction,
  postTodoSuccessAction,
} from "../Redux/action";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  let newTodo = {
    title,
    status: false,
  };
  const addTodoHandler = async () => {
    dispatch(postTodoRequestAction());
    try {
      const res = await axios.post("http://localhost:8080/todos", newTodo);
      console.log(res.data);
      dispatch(postTodoSuccessAction(res.data));
    } catch (err) {
      console.error(err.message);
      dispatch(postTodoFailureAction());
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  );
}

export default TodoInput;
