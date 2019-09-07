import React from "react";
import { LOG_IN, LOG_OUT, REGISTER } from "../actions/actionTypes";
import { connect } from "react-redux"

const INITIAL_STATE = {
  id: null,
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
  userDetails: {}
};

const userReducer = (state = INITIAL_STATE, action, props) => {
  switch (action.type) {
    case LOG_IN:
      if (props.switchValue)
      return {
        ...state,
        emailAddress: action.payload.emailAddress,
        password: action.payload.password
      };
    case LOG_OUT:
      return {
        ...state,
        emailAddress: null,
        password: null
      };
    case REGISTER:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
};

const mapStateToProps = state => {
  return {
    switchValue: state.switchValue
  }
}

export default connect(mapStateToProps)(userReducer);