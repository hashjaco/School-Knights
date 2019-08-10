// The index is the object that holds the application's data
// Newly created array will be stored here
import React from 'react'
import { createStore, combineReducers } from "redux";
import reducers from "../reducers/index";

export const store = createStore(
  combineReducers({
    state: reducers
  }),
);

