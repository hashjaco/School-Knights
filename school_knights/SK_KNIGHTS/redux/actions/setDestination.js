import { SET_DESTINATION } from "./actionTypes";

export const setDestination = address => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_DESTINATION, data: address });
    }, 2000);
  };
};