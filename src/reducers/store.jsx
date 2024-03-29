import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cart: cartReducer });

const initialState = {
  cart: {
    cart_items: localStorage.getItem("cart_items")
      ? JSON.parse(localStorage.getItem("cart_items"))
      : [],
    shipping_info: localStorage.getItem("shipping_info")
      ? JSON.parse(localStorage.getItem("shipping_info"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
