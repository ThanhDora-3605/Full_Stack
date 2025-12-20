import React, { useState, useContext } from "react";
import { TodoContext } from "../../TodoReducer";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return alert("Vui lòng điền tiêu đề công việc!");
    }
    const todo = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
