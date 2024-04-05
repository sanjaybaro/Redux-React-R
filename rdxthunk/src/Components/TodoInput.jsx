import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../Redux/Todo/action";

function TodoInput() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const newTodo = {
      title,
      status: false,
    };

    // postTodo(newTodo, dispatch);
    dispatch(postTodo(newTodo))
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
