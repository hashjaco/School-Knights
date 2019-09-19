import { TOGGLE_MENU } from "../actions/actionTypes";

const INITIAL_STATE = {
    menuToggled: false
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                emailAddress: action.payload.emailAddress,
                password: action.payload.password
            };
        case "LOG_OUT":
            return {
                ...state,
                emailAddress: null,
                password: null
            };
        case "REGISTER":
            console.log("you have reached the reducer")
            return {
                ...state,
                userDetails: action.payload
            };
        default:
            return state;
    }
}