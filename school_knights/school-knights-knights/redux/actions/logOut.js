import { LOG_OUT } from "./actionTypes";

export const logOut = () => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: LOG_OUT, data: null });
    }, 2000);
  };
};