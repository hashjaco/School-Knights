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
  isWaiting: false,
  destinationSet: false,
  locationSet: false
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESTINATION:
      return Object.assign({}, state, {
        destination: action.payload,
        destinationSet: true
      });

    case SET_PICKUP_TIME:
      return Object.assign({}, state, {
        pickUpTime: action.payload
      });

    case SET_WAITING:
      return Object.assign({}, state, {
        isWaiting: true
      });

    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload,
        locationSet: true
      });

    default:
      return state;
  }
};

export default tripReducer;
