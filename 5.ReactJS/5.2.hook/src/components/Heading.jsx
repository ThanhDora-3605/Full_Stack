import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Heading() {
  const { message, setMessage } = useContext(AppContext);
  console.log(message);
  const handleChangeMessage = () => {
    setMessage("Hello World Updated!!!!");
  };
  return (
    <div>
      <h2>Heading</h2>
      <h3 className="text-red-500">{message}</h3>
      <button
        onClick={handleChangeMessage}
        className="bg-primary-color text-white px-4 py-2 rounded-md border-secondary-color hover:bg-secondary-color hover:text-white border border-primary-color"
      >
        Change Message
      </button>
    </div>
  );
}
