// A reducer is a function that returns some data
// Example cont'd: If the action's type is 'split', take the string of characters and turn it into an array.
// array will be passed to the application store as state

import { combineReducers } from "redux";
import FormReducer from "./FormReducer";
import UserReducer from "./UserReducer";
import TripReducer from "./TripReducer";

const rootReducer = combineReducers({
  forms: FormReducer,
  users: UserReducer,
  trips: TripReducer
});

export default rootReducer;
