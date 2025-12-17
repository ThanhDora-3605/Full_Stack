import React, { useEffect, useRef } from "react";
const data = ["item1", "item2", "item3", "item4", "item5"];
import Button from "./components/Button.jsx";

export default function ReactRef() {
  const inputRef = useRef();
  const itemRef = useRef([]);
  const btnRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    let id = setTimeout(() => {
      itemRef.current[0].focus();
    }, 3000);
    return () => clearTimeout(id);
  }, []);
  return (
    <div className="text-center mt-10">
      <input type="text" placeholder="Nhập gì đó" ref={inputRef} />
      <ul>
        {data.map((item, index) => (
          <li
            ref={(el) => {
              if (itemRef.current.length < data.length) {
                itemRef.current.push(el);
              }
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <Button ref={btnRef} />
    </div>
  );
}

//State:
// - state đổi -> component re-render
// - re-render -> state lấy giá cuối cùng của lần render trước
//Ref: useRef()
// - Giữ được giá trị sau mỗi lần re-render
// - Không kích hoạt re-render khi thay đổi
// - Tham chiếu đến phần tử DOM -> Thao tác với DomBrowser_
