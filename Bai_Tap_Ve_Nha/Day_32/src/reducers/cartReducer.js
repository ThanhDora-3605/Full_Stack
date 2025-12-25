const initialState = {
  products: [],
  cart: [],
  isCartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/addItem": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "cart/updateQuantity": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case "cart/removeItem": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "products/setProducts": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "cart/toggleCart": {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    }
    case "cart/closeCart": {
      return {
        ...state,
        isCartOpen: false,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
