import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenCart = () => {
    dispatch({ type: "cart/toggleCart" });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={handleOpenCart}
          className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <HiOutlineShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
