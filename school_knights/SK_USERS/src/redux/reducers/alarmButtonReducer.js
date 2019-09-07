import React from "react";
import { ACTIVATE_ALARM } from "../actions/actionTypes";

// TODO: Will need to modify initialState
let initialState = {
    loading: false
};

const alarmButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_ALARM:
            return {
                ...state,
                alarmActive: action.payload
            };
        default:
            return state;
    }
};

export default alarmButtonReducer;
