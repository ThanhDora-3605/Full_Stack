import React, { useContext } from "react";
import Heading from "./Heading";
import { AppContext } from "../context/AppContext";

export default function Theme() {
  const context = useContext(AppContext);
  return (
    <div>
      <Heading />
      <h3>{context.message}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus
        dicta cupiditate dolor possimus qui iusto. Impedit blanditiis
        reprehenderit hic? Nisi velit laudantium totam iure in pariatur
        provident odio eaque.
      </p>
    </div>
  );
}
