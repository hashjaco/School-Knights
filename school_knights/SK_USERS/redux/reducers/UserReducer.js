import React from "react";
import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  emailAddress: null,
  password: null,
  confirmPassword: null,
  userDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        emailAddress: action.payload.emailAddress,
        password: action.payload.password
      };
    case "LOG_OUT":
      return {
        ...state,
        emailAddress: null,
        password: null
      };
    case "REGISTER":
      console.log("you have reached the reducer")
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        emailAddress: action.payload.emailAddress,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        userDetails: action.payload
      };
    default:
      return state;
  }
}
