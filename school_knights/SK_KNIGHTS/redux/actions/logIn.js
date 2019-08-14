import { LOG_IN } from "./actionTypes";

export const logIn = user => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: LOG_IN, data: user });
    }, 2000);
  };
};