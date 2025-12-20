import React, { useContext } from "react";
import { TodoContext } from "../../TodoReducer";

export default function TodoList() {
  const {
    state: { todoList },
    dispatch,
  } = useContext(TodoContext);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const handleComplete = (id) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  };

  return (
    <div>
      <ul>
        {todoList.map(({ id, title, isCompleted }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => handleComplete(id)}
            />
            <span className={isCompleted ? "line-through" : ""}>{title}</span>
            <button onClick={() => handleDelete(id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
