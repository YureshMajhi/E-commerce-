import { API } from "../config";

export const getAllProducts = () => {
  return fetch(`${API}/api/product/getproducts`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
