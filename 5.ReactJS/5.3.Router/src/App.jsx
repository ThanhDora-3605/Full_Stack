import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Contact from "./page/Contact";
import Nav from "./Components/Nav";
import ProductsDetaul from "./page/ProductsDetaul";
import NotDound from "./page/NotDound";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductsDetaul />} />
        <Route path="*" element={<NotDound />} />
      </Routes>
    </>
  );
}
