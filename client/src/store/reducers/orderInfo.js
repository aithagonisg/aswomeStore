import { ORDER_INFO } from "../actions/actionTypes";

const orderInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default orderInfoReducer;
