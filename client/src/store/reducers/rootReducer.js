import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";

export const rootReducer = combineReducers({ userInfo: userInfoReducer });
