import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Product from "./page/Product.jsx";
import ProductDetail from "./page/ProductDetail.jsx";
import NotFound from "./page/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./page/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
