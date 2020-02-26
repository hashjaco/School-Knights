// A reducer is a function that returns some data
// Example cont'd: If the action's type is 'split', take the string of characters and turn it into an array.
// array will be passed to the application index as state

import { combineReducers } from "redux";
import formReducer from "./formReducer";
import userReducer from "./userReducer";
import tripReducer from "./tripReducer";
import dataReducer from "./dataReducer";
import controlsReducer from "./controlFieldReducer";
import fieldReducer from "./inputFieldReducer";
import appReducer from "./appReducer";
import alarmButtonReducer from "./alarmButtonReducer"

const rootReducer = combineReducers({
  forms: formReducer,
  users: userReducer,
  trips: tripReducer,
  data: dataReducer,
  controls: controlsReducer,
  fields: fieldReducer,
  app: appReducer,
  alarm: alarmButtonReducer,
});

export default rootReducer;
