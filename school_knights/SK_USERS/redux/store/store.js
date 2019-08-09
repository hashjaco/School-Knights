// The store is the object that holds the application's data
// Newly created array will be stored here

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
