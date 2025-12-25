import { legacy_createStore as createStore } from "redux";
import cartReducer from "../reducers/cartReducer.js";

export const store = createStore(cartReducer);
