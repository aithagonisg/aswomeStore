const API_ORIGIN = "http://localhost:8080";

export const loginAndRegister = (pathName, data) => {
  return fetch(`${API_ORIGIN}/${pathName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getProducts = (pathName) => {
  return fetch(`${API_ORIGIN}/${pathName}`);
};
