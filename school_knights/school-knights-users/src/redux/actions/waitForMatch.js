import { WAIT_FOR_MATCH } from "./actionTypes";

export const waitForMatch = dispatch => {
    //Make API Call
    setTimeout(() => {
        dispatch({ type: WAIT_FOR_MATCH });
    }, 2000);
};
