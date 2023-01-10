import { SHOW_TOASTER } from "../actions/actionTypes";

const toasterReducer = (
  state = {
    open: false,
    duration: 2000,
    severity: "success",
    message: "",
  },
  action
) => {
  switch (action.type) {
    case SHOW_TOASTER:
      return action.payload;
    default:
      return state;
  }
};

export default toasterReducer;
