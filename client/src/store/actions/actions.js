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
      });
  };
};
