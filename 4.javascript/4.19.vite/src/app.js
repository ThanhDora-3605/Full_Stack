import "./assets/main.css";
import moment from "moment";
import { Header } from "./header.js";
import { Footer } from "./footer.js";
import config from "../config.json";

export const App = () => {
  //   console.log(config);
  console.log(import.meta.env.VITE_BACKEND_API);

  return `
  ${Header()}
  <main>
    <h1 class="text-3xl font-bold text-center text-blue-500">ThanhDora</h1>
    <h2 class="text-2xl font-bold">Thời gian: ${moment().format(
      "DD/MM/YYYY HH:mm:ss"
    )}</h2>
  </main>
  ${Footer()}
  `;
};
