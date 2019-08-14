import { RESET_FIELD_COLORS } from "./actionTypes";

export const resetFieldColors = () => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: RESET_FIELD_COLORS });
    }, 2000);
  };
};
