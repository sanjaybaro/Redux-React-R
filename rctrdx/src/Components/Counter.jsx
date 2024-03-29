import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/action";
import { store } from "../Redux/store";

function Counter() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addAction(2));
  };
  const handleReduce = () => {
    dispatch(reduceAction(2));
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export default Counter;
