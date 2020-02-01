import { SLIDE_DOWN } from "./actionTypes";

export const slideDown = distance => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SLIDE_DOWN, data: distance });
    }, 2000);
  };
};