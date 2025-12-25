import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Add To Cart");

  const handleAddToCart = () => {
    dispatch({
      type: "cart/addItem",
      payload: {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
      },
    });

    setButtonText("Added");
    setTimeout(() => {
      setButtonText("Add To Cart");
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
