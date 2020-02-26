import React from "react";
import { GET_HISTORY, LOG_IN, LOG_OUT, CREATE_ACCOUNT } from "../actions/actionTypes";
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
    case CREATE_ACCOUNT:
      return {
        ...state,
        userDetails: action.payload
      };
    case GET_HISTORY:
      const locations = require("../../data/history.json").history;
      return Object.assign({}, state, {
        history: action.payload
      })
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