import React from "react";
import { ADD_TO_HISTORY } from "../actions/actionTypes";

// TODO: Will need to modify initialState
let initialState = {
  data: require("../../data/history.json").history
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        ...state,
        data: [ ...state.data, action.payload ]
      };
    default:
      return state;
  }
};

export default dataReducer;
