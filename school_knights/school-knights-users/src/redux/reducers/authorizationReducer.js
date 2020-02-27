import { APP_IS_READY } from "../actions/actionTypes";


const INITIAL_STATE = {
    isReady: false,
    activeUser: null
};

export default function(state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case "APP_IS_READY":
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}