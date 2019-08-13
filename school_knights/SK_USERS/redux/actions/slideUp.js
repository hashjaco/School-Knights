import { SLIDE_UP } from "./actionTypes";

export const slideUp = distance => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SLIDE_UP, data: distance });
    }, 2000);
  };
};