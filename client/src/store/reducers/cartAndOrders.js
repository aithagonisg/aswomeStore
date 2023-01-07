import { CART_ORDERS } from "../actions/actionTypes";

const cartAndOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ORDERS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default cartAndOrderReducer;
