import { TOGGLE_MENU } from "./actionTypes";

export const toggleMenu = dispatch => {
    setTimeout(() => {
        dispatch({ type: TOGGLE_MENU });
    }, 2000);
};
