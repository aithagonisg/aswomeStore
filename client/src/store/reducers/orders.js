import { ORDERS_DATA } from "../actions/actionTypes";

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case ORDERS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default ordersReducer;
