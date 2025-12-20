import React, { useReducer } from "react";
import { reducer, initialState } from "./utils/reducer";

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: 2,
    });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
// const [value, setValue] = useState(init)
//Logic update state -> Trong component -> Xử lý state nội bộ, không kế thừa được logic tới các component khác

//Giải pháp: tách logic cập nhật state ra ngoài component
// - Sử dụng concept của hàm reducer array
// - Logic nằm ở hàm reducer

//array.reduce(callback, initialValue)

//Ý nghĩa:
// - Giải quyêtrs
