import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });
  const handleIncrement = () => {
    dispatch({ type: "counter/increment" });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
//dispatch --> reducer --> redux store --> subscribe --> react xử lý tiếp
