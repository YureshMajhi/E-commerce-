import { API } from "../config";

export const register = (email, username, password) => {
  let user = { email, username, password };
  return fetch(`${API}/api/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
