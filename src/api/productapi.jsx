import { API } from "../config";

export const getAllProducts = () => {
  return fetch(`${API}/api/product/getproducts`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const deleteProduct = (id) => {
  return fetch(`${API}/api/product/deleteproduct/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
