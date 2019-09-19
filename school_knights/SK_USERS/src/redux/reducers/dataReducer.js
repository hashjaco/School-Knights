import React from "react";
import { GET_DATA } from "../actions/actionTypes";

// TODO: Will need to modify initialState
let initialState = {
  loading: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
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
