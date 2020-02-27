import { CONFIRM_EMERGENCY } from "./actionTypes";

export const confirmEmergency = dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: CONFIRM_EMERGENCY });
  }, 2000);
};
