import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  failureAction,
  postSuccessAction,
  requestAction,
} from "../Redux/Todo/action";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    let newTodo = {
      title,
      status: false,
    };
   
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
