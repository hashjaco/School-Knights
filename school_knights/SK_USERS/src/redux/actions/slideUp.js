import { SLIDE_UP } from "./actionTypes";

export const slideUp = distance => dispatch => {
    setTimeout(() => {
      dispatch({ type: SLIDE_UP, data: distance });
    }, 2000);
};