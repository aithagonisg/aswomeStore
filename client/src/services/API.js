const API_ORIGIN = "http://localhost:8080";
const token = localStorage.getItem("authToken");

export const loginAndRegister = (pathName, data) => {
  return fetch(`${API_ORIGIN}/${pathName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getProducts = () => {
  return fetch(`${API_ORIGIN}/products`);
};

export const getCartAndOrders = () => {
  return fetch(`${API_ORIGIN}/getCartAndOrderList`, {
    method: "POST",
    headers: {
      authorization: `Barrer ${token}`,
    },
  });
};
