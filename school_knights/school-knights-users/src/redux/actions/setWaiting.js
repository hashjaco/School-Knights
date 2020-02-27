import { SET_WAITING } from "./actionTypes";

export const setWaiting = dispatch => {
  setTimeout(() => {
    dispatch({ type: SET_WAITING });
  }, 2000);
};
