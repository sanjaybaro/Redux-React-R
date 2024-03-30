import React from "react";
import { useState } from "react";
import axios from "axios";

function TodoInput() {
  const [title, setTitle] = useState("");

  let newTodo = {
    title,
    status: false,
  };
  const addTodoHandler = async () => {
    try {
      const res = await axios.post("http://localhost:8080/todos", newTodo);
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
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
