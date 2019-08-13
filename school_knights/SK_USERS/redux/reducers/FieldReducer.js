import {
  CHANGE_FIELD_COLORS,
  RESET_FIELD_COLORS
} from "../actions/actionTypes";

let fieldState = {
  fillColor: "#8E3B9B",
  fontColor: "#C9B132",
  isActive: false
};

const fieldReducer = (state = fieldState, action) => {
  switch (action.type) {
    case CHANGE_FIELD_COLORS:
      state = {
        ...state,
        fontColor: action.fontColor,
        fillColor: action.fillColor
      };
      return state;
    case RESET_FIELD_COLORS:
      state = { ...state, state };
      return state;
    default:
      return state;
  }
};
