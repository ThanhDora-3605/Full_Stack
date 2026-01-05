import { useEffect, useRef, useState } from "react";
import User from "./User";
type UserType = {
  id: number;
  name: string;
};
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};
export default function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [user, setUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data: TodoType[] = await response.json();
      setTodos(data);
      setUser({ id: 1, name: "John Doe" });
    };
    fetchTodos();
    if (buttonRef.current) {
      buttonRef.current.style.color = "red";
    }
  }, []);
  return (
    <div>
      <h1>TodoList</h1>
      <p>User: {user.name}</p>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>ID: {todo.id}</p>
          <h2>{todo.title}</h2>
          <p>Completed: {todo.completed ? "Completed" : "Not Completed"}</p>
          <p>Completed (boolean): {String(todo.completed)}</p>
        </div>
      ))}
      <button ref={buttonRef}>Click me</button>
      <User name={"Thanh"} email={"thanh@gmail.com"} setUser={setUser} />
    </div>
  );
}
