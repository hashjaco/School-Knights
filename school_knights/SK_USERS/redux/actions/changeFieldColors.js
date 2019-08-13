import { CHANGE_FIELD_COLORS } from "./actionTypes";

export const changeFieldColors = (fillColor, fontColor) => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: CHANGE_FIELD_COLORS, data: fillColor, fontColor });
    }, 2000);
  };
};