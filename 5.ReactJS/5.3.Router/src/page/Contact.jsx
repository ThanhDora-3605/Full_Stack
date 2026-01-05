import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>Contact</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleGoHome}
      >
        Go Home
      </button>
    </div>
  );
}
