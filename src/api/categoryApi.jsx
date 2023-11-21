import { API } from "../config";

export const getAllCategories = () => {
  return fetch(`${API}/api/category/`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
