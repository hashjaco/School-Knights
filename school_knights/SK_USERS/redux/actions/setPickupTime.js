import { SET_PICKUP_TIME } from "./actionTypes";

export const setPickupTime = time => {
  return dispatch => {
    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      dispatch({ type: SET_PICKUP_TIME, data: time });
    }, 2000);
  };
};