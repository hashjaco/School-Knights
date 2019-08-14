import { SET_WAITING } from "./actionTypes";

export const setWaiting = isNotWaiting => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_WAITING, data: isNotWaiting });
    }, 2000);
  };
};