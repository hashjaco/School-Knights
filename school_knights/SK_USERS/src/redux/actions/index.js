import {
  LOG_IN,
  LOG_OUT,
  TOGGLE_MENU,
  REGISTER,
  SCHEDULE_TRIP,
  WAIT_FOR_MATCH,
  SET_DESTINATION,
  SET_LOCATION,
  SET_WAITING,
  SET_PICKUP_TIME,
  RESET_FIELD_COLORS,
  SET_ACTIVE,
  FIND_MATCH,
  CONTROL_SECTION_ACTIVE,
  CONFIRM_TRIP,
  ACTIVATE_ALARM,
  CHANGE_FIELD_COLORS,
  GET_DATA,
  UPDATE_VALUE,
  CONFIRM_EMERGENCY,
  TOGGLE_SWITCH,
  GET_HISTORY,
  MATCH_FOUND
} from "./actionTypes";

export const activateAlarm = values => {
  return { type: ACTIVATE_ALARM, payload: values };
};

export const getData = values => {
  return { type: GET_DATA, payload: values };
};

export const getHistory = values => {
  return { type: GET_HISTORY, payload: values }
}

export const changeFieldColors = values => {
  return { type: CHANGE_FIELD_COLORS, payload: values };
};

export const confirmEmergency = values => {
  return { type: CONFIRM_EMERGENCY, payload: values };
};

export const confirmTrip = values => {
  return { type: CONFIRM_TRIP, payload: values };
};

export const controlSectionActive = values => {
  return { type: CONTROL_SECTION_ACTIVE, payload: values };
};

export const findMatch = values => {
  return { type: FIND_MATCH, payload: values };
};

export const logInUser = values => {
  return { type: LOG_IN, payload: values };
};

export const logOut = values => {
  return { type: LOG_OUT, payload: values };
};

export const register = values => {
  return { type: REGISTER, payload: values };
};

export const resetFieldColors = values => {
  return { type: RESET_FIELD_COLORS, payload: values };
};

export const setActive = values => {
  return { type: SET_ACTIVE, payload: values };
};

export const setDestination = values => {
  return { type: SET_DESTINATION, payload: values };
};

export const setLocation = values => {
  return { type: SET_LOCATION, payload: values };
};

export const setPickupTime = values => {
  return { type: SET_PICKUP_TIME, payload: values };
};

export const setWaiting = values => {
  return { type: SET_WAITING, payload: values };
};

export const toggleMenu = values => {
  return { type: TOGGLE_MENU, payload: values };
};

export const toggleSwitch = values => {
  return { type: TOGGLE_SWITCH, payload: values };
};

export const updateValue = values => {
  return { type: UPDATE_VALUE, payload: values };
};

export const waitForMatch = () => {
  return { type: WAIT_FOR_MATCH };
};

export const scheduleTrip = values => {
  return { type: SCHEDULE_TRIP, payload: values };
};
