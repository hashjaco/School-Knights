import { REGISTER } from "./actionTypes";

const register = userDetails => dispatch => {
    //Make API Call
    setTimeout(() => {
        dispatch({ type: REGISTER, payload: userDetails });
    }, 2000);
};

export default register;