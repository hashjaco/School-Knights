import { CONTROL_SECTION_ACTIVE, CONFIRM_TRIP, SCHEDULE_TRIP, WAIT_FOR_MATCH, MATCH_FOUND } from "../actions/actionTypes";

let initialState = {
  viewReference: this.myComponent,
  yPosition: this.myComponent.layout.y,
  scheduleTrip: false,
  confirmTrip: false,
  waitForMatch: false,
  matchFound: false,
  isActive: false
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTROL_SECTION_ACTIVE:
      return Object.assign({}, state, {
        destination: action.destination
      });
    case CONFIRM_TRIP:
      return Object.assign({}, state, {
        destination: action.destination
      });
    case SCHEDULE_TRIP:
      return Object.assign({}, state, {
        destination: action.destination
      });
    case WAIT_FOR_MATCH:
      return Object.assign({}, state, {
        destination: action.destination
      });
    case MATCH_FOUND:
      return Object.assign({}, state, {
        destination: action.destination
      });
    default:
      return state;
  }
};

export default controlsReducer;
