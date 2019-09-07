import {CONFIRM_TRIP} from "./actionTypes";

export const confirmTrip = dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: CONFIRM_TRIP });
  }, 2000);
};