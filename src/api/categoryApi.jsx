import { API } from "../config";

export const getAllCategories = () => {
  return fetch(`${API}/api/category/`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const addCategory = (title, token) => {
  return fetch(`${API}/api/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
