import { SET_LOCATION } from "./actionTypes";

export const setLocation = address => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_LOCATION, data: address });
    }, 2000);
  };
};