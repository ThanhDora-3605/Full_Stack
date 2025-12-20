/* eslint-disable react-refresh/only-export-components */
import React, { useReducer, createContext } from "react";
import TodoList from "./components/Todo/TodoList";
import TodoAdd from "./components/Todo/TodoAdd";
import { reducer, initialState } from "./utils/reducer.js";

export const TodoContext = createContext();

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
        <TodoAdd />
      </TodoContext.Provider>
    </div>
  );
}
