import { ADDRESS_DATA } from "../actions/actionTypes";

const addressReducer = (state = [], action) => {
  switch (action.type) {
    case ADDRESS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default addressReducer;
