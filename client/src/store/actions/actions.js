import { loginAndRegister } from "../../services/API";
import { USER_INFO } from "./actionTypes";

//synchronous
export const setUserInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});

//async

export const setLoginInfo = (pathname, userinfo) => {
  return (dispatch) => {
    loginAndRegister(pathname, userinfo)
      .then((res) => res.json())
      .then((info) => dispatch(setUserInfo(info)));
  };
};
