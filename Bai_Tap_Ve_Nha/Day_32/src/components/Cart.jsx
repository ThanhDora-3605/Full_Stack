import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineX,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isCartOpen = useSelector((state) => state.isCartOpen);

  const handleCloseCart = () => {
    dispatch({ type: "cart/closeCart" });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: "cart/removeItem", payload: id });
    } else {
      dispatch({
        type: "cart/updateQuantity",
        payload: { id, quantity },
      });
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "cart/removeItem", payload: id });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-30" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseCart}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Cart</h2>
            <button
              onClick={handleCloseCart}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <HiOutlineX className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <HiOutlineShoppingCart className="h-16 w-16 mb-4" />
                <p className="text-lg">No products in cart</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border rounded-lg bg-gray-50 relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                        >
                          +
                        </button>
                        <span className="ml-auto font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
                    >
                      <HiOutlineTrash className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Total:
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
