import {
  loginAndRegister,
  getCartAndOrders,
  getProducts,
  addToCart,
  removeFromCart,
  addCardDetails,
  placeOrder,
  addAddress,
} from "../../services/API";
import {
  USER_INFO,
  CART_ORDERS,
  PRODUCTS,
  SHOW_PROGRESS,
  SHOW_TOASTER,
  CARD_DETAILS,
  ORDER_INFO,
  ORDERS_DATA,
  ADDRESS_DATA,
} from "./actionTypes";

//our own actions

export const showProgress = (data) => ({
  type: SHOW_PROGRESS,
  payload: data,
});

export const showToaster = (data) => ({
  type: SHOW_TOASTER,
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

export const setCardDetails = (data) => ({
  type: CARD_DETAILS,
  payload: data,
});

export const setOrderInfo = (data) => ({
  type: ORDER_INFO,
  payload: data,
});

export const setOrdersData = (data) => ({
  type: ORDERS_DATA,
  payload: data,
});

export const setAddressData = (data) => ({
  type: ADDRESS_DATA,
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
          console.log(info);
          if (typeof info === "string") {
            dispatch(
              showToaster({
                open: true,
                duration: 2000,
                severity: "error",
                message: info,
              })
            );
            setTimeout(() => {
              dispatch(
                showToaster({
                  open: false,
                  duration: 2000,
                  severity: "error",
                  message: "",
                })
              );
            }, 2000);
          } else {
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
          }
          dispatch(showProgress(false));
        });
    }, 2000);
  };
};

export const setCartAndOrderList = () => {
  return (dispatch) => {
    getCartAndOrders()
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCartAndOrders(res));
        dispatch(setOrdersData(res.cart.orders));
        dispatch(setAddressData(res.cart.address));
        dispatch(setCardDetails(res.cart.cardDeatils));
      });
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

export const setRemoveFromCart = (data) => {
  return (dispatch) => {
    removeFromCart(data)
      .then((res) => res.json())
      .then((cart) => {
        dispatch(setCartAndOrderList());
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

export const PlaceOrder = (orderInfo) => {
  return (dispatch) => {
    placeOrder(orderInfo)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setOrderInfo(res));
      });
  };
};

export const AddCardDetails = (cardDetails) => {
  return (dispatch) => {
    addCardDetails(cardDetails)
      .then((res) => res.json())
      .then((res) => {});
  };
};

export const AddUserAddress = (addressInfo) => {
  return (dispatch) => {
    addAddress(addressInfo)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCartAndOrderList());
      });
  };
};
