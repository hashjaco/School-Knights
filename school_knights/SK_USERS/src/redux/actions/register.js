import { REGISTER } from "./actionTypes";

export const register = userDetails => dispatch => {
    //Make API Call
    setTimeout(() => {
        dispatch({ type: REGISTER, payload: userDetails });
    }, 2000);
};