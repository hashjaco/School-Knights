import { APP_IS_READY, UPDATE_CURR_LOCATION } from "../actions/actionTypes";

const INITIAL_STATE = {
  isReady: false,
  activeUser: null,
  currentLocation: null
};

export default function(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case APP_IS_READY:
      return {
        ...state,
        isReady: action.payload
      };
    case UPDATE_CURR_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    default:
      return state;
  }
}
