import { ACTIVATE_ALARM } from "./actionTypes";

export const activateAlarm = dispatch => {
  //Make API Call
  setTimeout(() => {
    dispatch({ type: ACTIVATE_ALARM });
  }, 2000);
};
