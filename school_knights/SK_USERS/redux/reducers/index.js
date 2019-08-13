// A reducer is a function that returns some data
// Example cont'd: If the action's type is 'split', take the string of characters and turn it into an array.
// array will be passed to the application index as state

import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import userReducer from "./UserReducer";
import tripReducer from "./TripReducer";
import dataReducer from "./DataReducer";
import controlsReducer from "./ControlFieldReducer";
import fieldReducer from "./InputFieldReducer"

const reducers = () => {combineReducers({
  forms: FormReducer,
  users: userReducer,
  trips: tripReducer,
  data: dataReducer,
  controls: controlsReducer,
  inputFields: fieldReducer
})};

export default reducers;
