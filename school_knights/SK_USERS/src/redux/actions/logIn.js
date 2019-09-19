import { LOG_IN } from "./actionTypes";

export const logIn = userCredentials => dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: LOG_IN, payload: userCredentials });
  }, 2000);
};
