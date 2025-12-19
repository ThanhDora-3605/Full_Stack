import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState("status");

  const handleInputChange = (e) => {
    const value = e.target.value;
    const keyword = searchParams.get("keyword") || "";
    const status = searchParams.get("status") || "";

    if (mode === "status") {
      setSearchParams({ status: value, keyword });
    } else {
      setSearchParams({ status, keyword: value });
    }
  };

  const toggleMode = () => {
    setMode(mode === "status" ? "keyword" : "status");
  };

  const currentValue =
    mode === "status"
      ? searchParams.get("status") || ""
      : searchParams.get("keyword") || "";

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white/90 rounded-xl shadow-lg p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6 tracking-tight uppercase drop-shadow">
        Products
      </h1>
      <div className="w-full mb-6 flex gap-2 items-center justify-center">
        <input
          type="text"
          placeholder={`Enter ${mode === "status" ? "Status" : "Keyword"}...`}
          value={currentValue}
          onChange={handleInputChange}
          className="w-full md:w-96 px-4 py-2 rounded-full border border-blue-300 focus:outline-none focus:border-blue-500 shadow focus:shadow-md bg-white/70 text-gray-800 transition duration-200"
        />
        <button
          onClick={toggleMode}
          className="px-4 py-2 rounded-full border border-blue-300 bg-blue-500 text-white hover:bg-blue-600 transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {mode === "status" ? "Keyword" : "Status"}
        </button>
      </div>
      <div className="w-full max-w-xs bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-4 mb-2 flex flex-col items-center">
        <span className="text-gray-600 font-semibold">
          Status:
          <span className="ml-2 text-purple-600">
            {searchParams.get("status") || (
              <span className="italic text-gray-400">Chưa nhập</span>
            )}
          </span>
        </span>
        <span className="text-gray-600 font-semibold">
          Keyword:
          <span className="ml-2 text-purple-600">
            {searchParams.get("keyword") || (
              <span className="italic text-gray-400">Chưa nhập</span>
            )}
          </span>
        </span>
      </div>
    </div>
  );
}
//slug
