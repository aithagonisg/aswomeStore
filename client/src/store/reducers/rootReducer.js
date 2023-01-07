import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import cartAndOrderReducer from "./cartAndOrders";
import poroductsReducer from "./products";
import progressReducer from "./progress";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  cartAndOrder: cartAndOrderReducer,
  prouducts: poroductsReducer,
  progress: progressReducer,
});
