import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Contact from "./page/Contact";
import ProductsDetaul from "./page/ProductsDetaul";
import NotDound from "./page/NotDound";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/MainLayout/AdminLayout";
import Dashboard from "./page/admin/Dashboard";
import Users from "./page/admin/Users";
import AuthMiddleware from "./Middleware/AuthMiddleware";
import Login from "./page/auth/Login";
import Order from "./page/Order";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<ProductsDetaul />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/order/:productId" element={<Order />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthMiddleware />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<NotDound />} />
      </Routes>
    </>
  );
}
