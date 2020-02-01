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
      this.setState({
        destinationSet: true
      });
      return Object.assign({}, state, {
        destination: action.data
      });

    case SET_PICKUP_TIME:
      return Object.assign({}, state, {
        pickUpTime: action.data
      });

    case SET_WAITING:
      return Object.assign({}, state, {
        isWaiting: action.data
      });

    case SET_LOCATION:
      this.setState({
        locationSet: true
      });
      return Object.assign({}, state, {
        location: action.data
      });

    default:
      return state;
  }
};

export default tripReducer;
