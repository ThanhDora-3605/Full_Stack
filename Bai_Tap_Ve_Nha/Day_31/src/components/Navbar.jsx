import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/product", label: "Product" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-center gap-6 p-6 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-md">
      {navItems.map(({ to, label }) => {
        const isActive =
          location.pathname === to ||
          (to !== "/" && location.pathname.startsWith(to + "/"));

        return (
          <NavLink
            key={to}
            to={to}
            className={`relative px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {label}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full"
                layoutId="activeIndicator"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
