import { UPDATE_VALUE } from "./actionTypes";

export const updateValue = value => dispatch => {
    //Make API Call
    setTimeout(() => {
        dispatch({ type: UPDATE_VALUE });
    }, 2000);
};
