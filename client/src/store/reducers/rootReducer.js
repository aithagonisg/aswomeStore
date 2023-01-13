import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import cartAndOrderReducer from "./cartAndOrders";
import poroductsReducer from "./products";
import progressReducer from "./progress";
import toasterReducer from "./toaster";
import addressReducer from "./addressReducer";
import cardDeatilsReducer from "./cardDetailsReducer";
import ordersReducer from "./orders";
import orderInfoReducer from "./orderInfo";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  cartAndOrder: cartAndOrderReducer,
  prouducts: poroductsReducer,
  progress: progressReducer,
  toaster: toasterReducer,
  address: addressReducer,
  cardDetails: cardDeatilsReducer,
  orders: ordersReducer,
  orderInfo: orderInfoReducer,
});
