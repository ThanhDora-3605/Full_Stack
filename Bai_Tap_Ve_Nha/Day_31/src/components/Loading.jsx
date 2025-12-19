import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading({ color = "#32cd32", size = "medium" }) {
  const sizeMap = {
    small: 35,
    medium: 50,
    large: 70,
  };

  const spinnerSize =
    typeof size === "string" ? sizeMap[size] || sizeMap.medium : size;

  return (
    <div className="flex flex-col justify-center items-center min-h-[200px] gap-4">
      <ClipLoader color={color} size={spinnerSize} speedMultiplier={0.8} />
      <p className="text-gray-500 font-medium">Đang tải...</p>
    </div>
  );
}
