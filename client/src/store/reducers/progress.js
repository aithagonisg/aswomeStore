import { SHOW_PROGRESS } from "../actions/actionTypes";

const progressReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_PROGRESS:
      return action.payload;
    default:
      return state;
  }
};

export default progressReducer;
