import { TOGGLE_SWITCH } from "../actions/actionTypes";

let initialState = {
  switchValue: false
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        switchValue: action.payload
      };
    default:
      return state;
  }
};

export default formReducer;
