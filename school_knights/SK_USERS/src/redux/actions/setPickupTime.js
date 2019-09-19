import { SET_PICKUP_TIME } from "./actionTypes";

export const setPickupTime = time => dispatch => {
  setTimeout(() => {
    dispatch({ type: SET_PICKUP_TIME, data: time });
  }, 2000);
};
