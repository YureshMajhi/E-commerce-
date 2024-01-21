import { API } from "../config";

export const placeOrder = (order) => {
  return fetch(`${API}/api/order/placeorder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
