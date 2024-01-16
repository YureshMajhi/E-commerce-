import { toast } from "react-toastify";
import { getProduct } from "../api/productapi";
import { ADD_TO_CART } from "./cartConstants";

export const addToCart =
  (product_id, quantity) => async (dispatch, getState) => {
    let data = await getProduct(product_id);
    let payload = {
      product: data._id,
      title: data.title,
      price: data.price,
      image: data.image,
      count_in_stock: data.count_in_stock,
      quantity,
    };

    dispatch({ type: ADD_TO_CART, payload });

    localStorage.setItem(
      "cart_items",
      JSON.stringify(getState().cart.cart_items)
    );
  };
