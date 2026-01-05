"use strict";
// let a: unknown = "Thanh";
Object.defineProperty(exports, "__esModule", { value: true });
// if (typeof a === "string") {
//   let b: string = a;
// }
// const getMessage = (): void | string => {
//   let check = true;
//   if (check) {
//     return "Thanh";
//   }
// };
// const users: string[] = ["User 1", "User 2", "User 3"];
// const myArray: [string, number, boolean] = ["Thanh", 1, true];
// const users: {
//   name: string;
//   age: number;
//   isSenior?: boolean;
//   delteil: {
//     province: string;
//   };
// } = {
//   name: "Thanh",
//   age: 20,
//   delteil: {
//     province: "Bắc Ninh",
//   },
// };
// type Address = {
//   province?: string;
// };
// type Address2 = {
//   ward: string;
// };
// type User = {
//   id: number;
//   name: string;
//   address?: Address;
// };
// const users: User[] = [
//   {
//     id: 1,
//     name: "Thanh",
//     address: {
//       province: "Bắc Ninh",
//     },
//   },
//   {
//     id: 2,
//     name: "Thanh2",
//   },
// ];
// const address: Address & Address2 = {
//   province: "Bắc Ninh",
//   ward: "Thanh Xuân",
// };
// interface User {
//   name: string;
//   email: string;
// }
// interface Authention extends User {
//   login: () => boolean;
// }
// const user: Authention = {
//   name: "Thanh",
//   email: "thanh@gmail.com",
//   login: () => {
//     return true;
//   },
// };
// interface ErrorWithStatus extends Error {
//   status?: number;
// }
// try {
//   const a: number = -1;
//   if (a < 0) {
//     const err: ErrorWithStatus = new Error();
//     err.status = 400;
//     throw err;
//   }
// } catch (error) {
//   const err = error as ErrorWithStatus;
//   console.log(err.message);
//   console.log(err.status);
// }
// const a: unknown = 10;
// const b: string = a as unknown as string;
// const doSomething = (a: "a" | "b") => {
//   console.log(a.toString());
// };
// doSomething("b");
// type Todo<T> = {
//   id: number;
//   title: string;
//   completed: boolean;
//   info?: T;
// };
// const todos: Todo<unknown>[] = [
//   {
//     id: 1,
//     title: "Buy groceries",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Buy groceries",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Buy groceries",
//     completed: false,
//   },
// ];
// const todo2: Todo<{ description: string }>[] = [
//   {
//     id: 1,
//     title: "Buy groceries",
//     completed: false,
//     info: {
//       description: "Buy groceries",
//     },
//   },
//   {
//     id: 2,
//     title: "Buy groceries",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Buy groceries",
//     completed: false,
//   },
// ];
// const todo3: Todo<{ update: string }>[] = [
//   {
//     id: 1,
//     title: "Buy groceries",
//     completed: false,
//     info: {
//       update: "Buy groceries",
//     },
//   },
// ];
const myPromise = Promise.resolve([
    {
        id: 1,
        title: "Buy groceries",
        completed: false,
    },
    {
        id: 2,
        title: "Buy groceries",
        completed: false,
    },
    {
        id: 3,
        title: "Buy groceries",
        completed: false,
    },
]);
const showTodos = async () => {
    const todos = await myPromise;
    return todos;
};
//# sourceMappingURL=ex01.js.map