import React from "react";

export default function Button({
  children = "Button",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center",
        "px-6 py-2 rounded-xl",
        "bg-gradient-to-r from-blue-600 to-blue-500",
        "text-white font-semibold text-lg",
        "shadow-lg",
        "hover:-translate-y-1 hover:scale-105 hover:shadow-xl",
        "hover:from-blue-700 hover:to-blue-600",
        "active:scale-95",
        "active:from-blue-800 active:to-blue-700",
        "transition-all duration-200",
        "focus:outline-none",
        "focus:ring-2 focus:ring-blue-300",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "relative overflow-hidden",
        className,
      ].join(" ")}
    >
      <span className="relative z-10">{children}</span>
      {/* Ripple Effect on Click */}
      <span className="absolute inset-0 opacity-0 pointer-events-none" />
    </button>
  );
}
