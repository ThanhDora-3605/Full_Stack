import React from "react";
import Header from "../components/Header.jsx";
import Cart from "../components/Cart.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Cart />
      <Footer />
    </div>
  );
}
