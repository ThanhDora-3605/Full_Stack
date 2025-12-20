import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import MountUnmount from "./MountUnmount.jsx";
// import FetchApi from "./FetchApi.jsx";
// import ReactRef from "./ReactRef.jsx";
// import ExrciseRef from "./ExrciseRef.jsx";
// import ReactContext from "./components/ReactContext.jsx";
// import Reducer from "./Reducer.jsx";
import TodoReducer from "./TodoReducer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoReducer />
  </StrictMode>
);
