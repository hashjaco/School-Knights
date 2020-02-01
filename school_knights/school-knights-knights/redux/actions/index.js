// An object that tells the reducer how to change its data
// Example: turn 'asfd' into an array of characters -> go to reducer

import {
  ACTIVATE_ALARM,
  CONFIRM_EMERGENCY,
  LOG_IN,
  LOG_OUT,
  RESET_FIELD_COLORS,
  SET_ACTIVE,
  SET_DESTINATION,
  SET_LOCATION,
  SET_PICKUP_TIME,
  CONTROL_SECTION_ACTIVE,
  CONFIRM_TRIP,
  MATCH_FOUND,
  WAIT_FOR_MATCH,
  SCHEDULE_TRIP,
  CHANGE_FIELD_COLORS, SLIDE_UP, SLIDE_DOWN
} from "./actionTypes";
//Import sample data
import History from "../../data/history";

// Action Creators
//return an action, which is an object

export const setDestination = address => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_DESTINATION, data: address });
    }, 2000);
  };
};

export const setLocation = address => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_LOCATION, data: address });
    }, 2000);
  };
};

export const changeFieldColors = (fillColor, fontColor) => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: CHANGE_FIELD_COLORS, data: fillColor, fontColor });
    }, 2000);
  };
};

export const resetFieldColors = () => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: RESET_FIELD_COLORS });
    }, 2000);
  };
};

export const slideUp = distance => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SLIDE_UP, data: distance });
    }, 2000);
  };
};

export const slideDown = distance => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SLIDE_DOWN, data: distance });
    }, 2000);
  };
};

export const logIn = user => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: LOG_IN, data: user });
    }, 2000);
  };
};

export const logOut = () => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: LOG_OUT, data: null });
    }, 2000);
  };
};

export const activateAlarm = isNotActivated => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: ACTIVATE_ALARM, data: isNotActivated });
    }, 2000);
  };
};

export const setActive = isNotActive => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      dispatch({ type: SET_ACTIVE, data: isNotActive });
    }, 2000);
  };
};

export const setPickupTime = time => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: SET_PICKUP_TIME, data: time });
    }, 2000);
  };
};

export const setScheduleTrip = isScheduling => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: SCHEDULE_TRIP, data: isScheduling });
    }, 2000);
  };
};
export const setIsWaitingStatus = isWaiting => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: WAIT_FOR_MATCH, data: isWaiting });
    }, 2000);
  };
};
export const setMatchStatus = matchFound => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: MATCH_FOUND, data: matchFound });
    }, 2000);
  };
};
export const setTripConfirmStatus = isConfirmed => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: CONFIRM_TRIP, data: isConfirmed });
    }, 2000);
  };
};
export const setYPosition = distance => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: CONTROL_SECTION_ACTIVE, data: distance });
    }, 2000);
  };
};

export const confirmEmergencyCall = isConfirmed => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: CONFIRM_EMERGENCY, data: isConfirmed });
    }, 2000);
  };
};

export const getData = () => {
  return History.history;
};
