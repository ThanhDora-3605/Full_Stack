export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return state;
  }
};

export const initialState = {
  count: 0,
  products: [],
  todoList: [],
};
