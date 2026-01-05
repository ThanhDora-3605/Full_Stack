import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/slice/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment(1));
  };
  const handleDecrement = () => {
    dispatch(decrement(1));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
