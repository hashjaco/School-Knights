import { SET_ACTIVE } from "./actionTypes";

export const setActive = dispatch => {
  setTimeout(() => {
    dispatch({ type: SET_ACTIVE });
  }, 2000);
};
