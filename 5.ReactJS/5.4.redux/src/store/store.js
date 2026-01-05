import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers/couterReducers.js";
export const store = createStore(rootReducer);
