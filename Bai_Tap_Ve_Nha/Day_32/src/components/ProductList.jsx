import { useSelector } from "react-redux";
import ProductItem from "./ProductItem.jsx";

export default function ProductList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
