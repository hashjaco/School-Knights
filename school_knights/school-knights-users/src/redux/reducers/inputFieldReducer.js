import {
  SET_ACTIVE,
  RESET_FIELD_COLORS,
  UPDATE_VALUE
} from "../actions/actionTypes";

let initialState = {
  placeholder: "Where to?",
  placeholderColor: "#C9B132",
  fillColor: "#8E3B9B",
  fontColor: "#000",
  isActive: false,
  input: "",
  height: 70,
  width: "90%",
  backgroundColor: "#8E3B9B",
  borderRadius: 50,
  borderColor: "#000",
  borderWidth: 1,
  shadowColor: "black",
  opacity: 1.2,
  shadowOpacity: 3,
  shadowOffset: { width: 1, height: 1 },
  elevation: 1,
  top: 15,
  justifyContent: "center",
  fontWeight: "600",
  fontSize: 36,
  marginBottom: 0,
  letterSpacing: 3,
  marginLeft: 15,
  color: "#000"
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state
      };
    case RESET_FIELD_COLORS:
      return {
        ...state,
        ...initialState
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
