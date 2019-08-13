import {
  CHANGE_FIELD_COLORS,
  RESET_FIELD_COLORS
} from "../actions/actionTypes";

let initialState = {
  fillColor: "#8E3B9B",
  fontColor: "#C9B132",
  isActive: false
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD_COLORS:
      state = {
        ...state,
        fontColor: action.data,
        fillColor: action.data
      };
      return state;
    case RESET_FIELD_COLORS:
      state = { ...state, state };
      return state;
    default:
      return state;
  }
};

export default fieldReducer