import { LOG_OUT } from "./actionTypes";

export const logOut = dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: LOG_OUT });
  }, 2000);
};
