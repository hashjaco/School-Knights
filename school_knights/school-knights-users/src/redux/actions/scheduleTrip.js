import { SCHEDULE_TRIP } from "./actionTypes";

export const scheduleTrip = schedule => dispatch => {
    //Make API Call
    setTimeout(() => {
        dispatch({ type: SCHEDULE_TRIP, payload: schedule });
    }, 2000);
};
