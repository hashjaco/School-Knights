import React from "react";
import { DATA_AVAILABLE } from "../actions/actionTypes";
import history from "../../data/history.json";


// TODO: Will need to modify initialState
let initialState = {
  history: [
    {
      id: "0",
      name: "Work",
      address: "1123 Folsom St, San Francisco, CA 94108",
      imageSource:
        "/PiggyBack/school_knights/school-knights-users/assets/Home-icon.png"
    },
    {
      id: "1",
      name: "Home",
      address: "1600 Holloway St, San Francisco, CA 94132",
      imageSource:
        "/PiggyBack/school_knights/school-knights-users/assets/Home-icon.png"
    }
  ],
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
