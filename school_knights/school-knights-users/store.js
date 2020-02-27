// The index is the object that holds the application's data
// Newly created array will be stored here
import React from "react";
import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./src/redux/reducers";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const middleware = [thunk];

export default function configureStore(initialState={}) {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
}