import React, { useState } from "react";
import Theme from "./Theme";
import { AppContext } from "../context/AppContext";

export default function ReactContext() {
  const [message, setMessage] = useState("Hello World");
  return (
    <div>
      <AppContext.Provider
        value={{
          message,
          setMessage,
        }}
      >
        <Theme />
      </AppContext.Provider>
    </div>
  );
}

//Props: A →> B →> C →> D
//Context:
//1. Provider -> Gửi dữ liệu đi
//2. Consumer -> Lấy dữ liệu từ context
// - Class component -> Sử dụng component Consumer
// - Function component -> Sử dụng hook useContext hoặc use (React 19)

//Khi component re-render -> tất cả
