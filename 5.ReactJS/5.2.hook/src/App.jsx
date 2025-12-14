import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [is_login, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  console.log(`re-render: ${count}`);
  // useEffect(() => {
  //   console.log(`callback effect: ${count}`);
  //   //cleanup
  //   return () => {
  //     console.log(`cleanup: ${count}`);
  //   };
  // }, [count]);

  useEffect(() => {
    const setLoginStatus = () => {
      setTimeout(() => {
        setIsLogin(localStorage.getItem(`is_login`) === "true" ? true : false);
        setIsLoading(false);
      }, 1000);
    };
    setLoginStatus();
  }, []);

  if (isLoading) {
    return <h2 className="text-center text-2xl font-bold">Loading...</h2>;
  }

  return (
    <div className="text-center h-[2000px]">
      {console.log("UI update", count)}
      {is_login ? (
        <>
          <h1>Count: {count}</h1>
          <button
            className="bg-primary-color text-white px-4 py-2 rounded-md border-1 border-secondary-color"
            onClick={handleIncrement}
          >
            +
          </button>
        </>
      ) : (
        <div>
          <h2>Vui lòng đăng nhập</h2>
        </div>
      )}
    </div>
  );
}

//useEffect(callback, dependencies)

//Flow React: State --> Trigger --> Re-render --> UI Update
//Side Effect: Các logic không nầm trong luồng chính của việc update giao diện UI
// - storage
// - http request
// - timer: setTimeout, setInterval,...
// - event listener: click, submit, change,...
// => Các công việc side effect phải thực hiện sau khi giao diện UI đã được update

// Hook useEffect: Dùng để quản lý side effect
//TH1: depedencies = null | undefined -> Khi component re-render -> callback effect sẽ chạy
//Th2: depedencies = [] -> callback effect chỉ chạy sau lần render đầu tiên
//Th3: dependencies = [bien1, bien2,...] -> Khi 1 trong các biến được khai báo chạy --> callback effect sẽ chạy

// snapshot

//Thứ tự chạy useEffect
// 1. State thay đổi
// 2. Component Re-render
// 3. UI Update
// 4. Cleanup (Nếu có)
// 5. Callback Effect

//Thứ tự chạy useLayoutEffect
// 1. State thay đổi
// 2. Component Re-render
// 3. Cleanup (Nếu có)
// 4. callback Effect
// 5. UI Update (Browser Repaint)
