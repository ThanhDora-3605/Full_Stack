import React from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetaul() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Chi tiết sản phẩm: {productId}</h1>
    </div>
  );
}
