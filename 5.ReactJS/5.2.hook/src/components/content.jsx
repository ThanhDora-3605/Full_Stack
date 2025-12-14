import React, { useEffect, useState } from "react";

export default function Content() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("content_count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
      localStorage.removeItem("content_count");
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("content_count", count.toString());
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <hr />
    </div>
  );
}

//Mounting: Quá trình component được đưa vào DOM
//Unmounting: Quá trình component bị loại bỏ khỏi DOM

//Component Lifecycle
//1. Mounting -> Lần render đầu tiên (Component được đưa vào DOM)
//2. Updating -> Từ lần re-render thứ 2 trở đi
//3. Unmounting -> Khi component bị loại khỏi DOM
