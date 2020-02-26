import { SET_LOCATION } from "./actionTypes";

export const setLocation = address => dispatch => {
  setTimeout(() => {
    dispatch({ type: SET_LOCATION, data: address });
  }, 2000);
};
