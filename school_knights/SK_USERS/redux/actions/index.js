// An object that tells the reducer how to change its data
// Example: turn 'asfd' into an array of characters -> go to reducer

import { SET_DESTINATION } from "../constants/action-types";

const setDestination = payload => {
  return { type: SET_DESTINATION, payload };
};

module.exports = { setDestination };
