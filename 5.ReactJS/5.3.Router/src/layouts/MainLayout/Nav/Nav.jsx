import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Nav() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex gap-2 p-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      {navItems.map(({ to, label }) => {
        const isActive = location.pathname === to;

        return (
          <NavLink
            key={to}
            to={to}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {label}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
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
