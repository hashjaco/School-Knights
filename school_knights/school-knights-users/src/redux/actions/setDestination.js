import { SET_DESTINATION } from "./actionTypes";

export const setDestination = address => dispatch => {
  setTimeout(() => {
    dispatch({ type: SET_DESTINATION, payload: address });
  }, 2000);
};
