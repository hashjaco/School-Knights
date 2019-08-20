import React from "react";
import { DATA_AVAILABLE } from "../actions/actionTypes";

// TODO: Will need to modify initialState
let initialState = {
  loading: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        history: action.data,
        loading: false
      };
    default:
      return state;
  }
};

export default dataReducer;
