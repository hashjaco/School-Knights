import { LOG_IN } from "./actionTypes";

export const logIn = userDetails => dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: LOG_IN, payload: userDetails });
  }, 2000);
};
