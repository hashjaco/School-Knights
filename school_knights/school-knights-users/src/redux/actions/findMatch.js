import { FIND_MATCH } from "./actionTypes";

export const findMatch = dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: FIND_MATCH });
    }, 2000);
};
