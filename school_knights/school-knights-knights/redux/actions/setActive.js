import { SET_ACTIVE } from "./actionTypes";

export const setActive = isNotActive => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_ACTIVE, data: isNotActive });
    }, 2000);
  };
};