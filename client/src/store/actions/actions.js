import {
  loginAndRegister,
  getCartAndOrders,
  getProducts,
  addToCart,
} from "../../services/API";
import { USER_INFO, CART_ORDERS, PRODUCTS, SHOW_PROGRESS } from "./actionTypes";

//our own actions

export const showProgress = (data) => ({
  type: SHOW_PROGRESS,
  payload: data,
});

//synchronous
export const setUserInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});

export const setCartAndOrders = (data) => ({
  type: CART_ORDERS,
  payload: data,
});

export const setProducts = (data) => ({
  type: PRODUCTS,
  payload: data,
});
//async

export const setLoginInfo = (pathname, userinfo) => {
  return (dispatch) => {
    dispatch(showProgress(true));
    setTimeout(() => {
      loginAndRegister(pathname, userinfo)
        .then((res) => res.json())
        .then((info) => {
          localStorage.setItem("authToken", info.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              firstName: info.firstName,
              lastName: info.lastName,
              email: info.email,
            })
          );
          dispatch(setUserInfo(info));
          dispatch(showProgress(false));
        });
    }, 2000);
  };
};

export const setAddToCart = (data) => {
  return (dispatch) => {
    addToCart(data)
      .then((res) => res.json())
      .then((cart) => {
        dispatch(setCartAndOrderList());
      });
  };
};

export const setCartAndOrderList = () => {
  return (dispatch) => {
    getCartAndOrders()
      .then((res) => res.json())
      .then((cart) => {
        dispatch(setCartAndOrders(cart));
      });
  };
};

export const setProductsList = () => {
  return (dispatch) => {
    getProducts()
      .then((res) => res.json())
      .then((products) => {
        dispatch(setProducts(products));
      });
  };
};
