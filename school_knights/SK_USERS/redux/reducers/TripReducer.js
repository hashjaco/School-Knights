import React from "react";
import {
  SET_DESTINATION,
  SET_LOCATION,
  SET_PICKUP_TIME,
  SET_WAITING
} from "../actions/actionTypes";

let initialState = {
  location: "",
  destination: "",
  pickUpTime: null,
  isWaiting: false
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATION:
      return Object.assign({}, state, {
        destination: action.destination
      });

    case SET_PICKUP_TIME:
      return Object.assign({}, state, {
        pickUpTime: action.pickUpTime
      });

    case SET_WAITING:
      return Object.assign({}, state, {
        isWaiting: action.isWaiting
      });

    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location
      });

    default:
      return state;
  }
};

export default tripReducer;
