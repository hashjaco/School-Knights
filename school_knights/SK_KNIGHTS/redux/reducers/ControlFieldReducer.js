import { CONTROL_SECTION_ACTIVE, CONFIRM_TRIP, SCHEDULE_TRIP, WAIT_FOR_MATCH, MATCH_FOUND } from "../actions/actionTypes";

let initialState = {
  scheduleTrip: false,
  confirmTrip: false,
  waitForMatch: false,
  matchFound: false,
  isActive: false,
  className: null
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTROL_SECTION_ACTIVE:
      return Object.assign({}, state, {
        isActive: action.isActive
      });
    case CONFIRM_TRIP:
      return Object.assign({}, state, {
        confirmTrip: action.confirmTrip
      });
    case SCHEDULE_TRIP:
      return Object.assign({}, state, {
        scheduleTrip: action.scheduleTrip
      });
    case WAIT_FOR_MATCH:
      return Object.assign({}, state, {
        waitForMatch: action.waitForMatch
      });
    case MATCH_FOUND:
      return Object.assign({}, state, {
        matchFound: action.matchFound
      });
    default:
      return state;
  }
};

export default controlsReducer;
