import React from "react";
import { SET_USER } from "../actions/actionTypes";

export default (currentUser = null, action) => {
  if (action.type === "SET_USER") currentUser = action.payload;
  else if (action.type === "LOG_OUT") currentUser = null;
  return currentUser;
};
