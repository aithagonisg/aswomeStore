import { USER_INFO } from "../actions/actionTypes";
const userInfo = {
  info: {},
};

const userInfoReducer = (state = userInfo, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
