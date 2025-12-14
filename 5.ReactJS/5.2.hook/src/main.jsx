import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import MountUnmount from "./MountUnmount.jsx";
import FetchApi from "./FetchApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchApi />
  </StrictMode>
);
