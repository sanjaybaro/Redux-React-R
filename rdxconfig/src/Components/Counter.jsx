import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/counter/action";

function Counter() {
  const count = useSelector(
    (state) =>
      // console.log(state);
      state.counterReducer.counter
  );

  // console.log("Counter Re-rendered");

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
