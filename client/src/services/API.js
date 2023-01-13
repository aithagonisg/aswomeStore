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

export const addToCart = (data) => {
  return fetch(`${API_ORIGIN}/addtocart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const removeFromCart = (data) => {
  return fetch(`${API_ORIGIN}/removefromcart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const getProducts = () => {
  return fetch(`${API_ORIGIN}/products`);
};

export const getCartAndOrders = () => {
  return fetch(`${API_ORIGIN}/getCartAndOrderList`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const addAddress = (data) => {
  return fetch(`${API_ORIGIN}/addaddress`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addCardDetails = (data) => {
  return fetch(`${API_ORIGIN}/addcarddetails`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const placeOrder = (data) => {
  return fetch(`${API_ORIGIN}/placeOrder`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserInfo = (data) => {
  return fetch(`${API_ORIGIN}/updateuserinfo`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updatePassword = (data) => {
  return fetch(`${API_ORIGIN}/changepassword`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};
