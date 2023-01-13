import { CARD_DETAILS } from "../actions/actionTypes";

const cardDeatilsReducer = (state = [], action) => {
  switch (action.type) {
    case CARD_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default cardDeatilsReducer;
