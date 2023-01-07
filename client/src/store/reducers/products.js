import { PRODUCTS } from "../actions/actionTypes";

const poroductsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS:
      return [...action.payload];

    default:
      return state;
  }
};

export default poroductsReducer;
