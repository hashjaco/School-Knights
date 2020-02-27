import { ACTIVATE_ALARM } from "./actionTypes";

export const activateAlarm = isNotActivated => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: ACTIVATE_ALARM, data: isNotActivated });
    }, 2000);
  };
};