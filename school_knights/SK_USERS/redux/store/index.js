// The index is the object that holds the application's data
// Newly created array will be stored here
import React from "react";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

export default createStore(reducers, applyMiddleware(thunk));