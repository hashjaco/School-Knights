import {
  SET_ACTIVE,
  RESET_FIELD_COLORS,
  UPDATE_VALUE
} from "../actions/actionTypes";

let initialState = {
  placeholder: "",
  placeholderTextColor: "",
  fillColor: "#8E3B9B",
  fontColor: "#C9B132",
  isActive: false,
  input: ""
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        fontColor: "#000",
        fillColor: "#FFF"
      };
    case RESET_FIELD_COLORS:
      return {
        ...state,
        fillColor: initialState.fillColor,
        fontColor: initialState.fontColor
      };
    case UPDATE_VALUE:
      return {
        ...state,
        input: action.payload
      };
    default:
      return state;
  }
};

export default fieldReducer;
