import { LOG_IN } from "./actionTypes";
import store from "../../store";

const logIn = {
  type: LOG_IN,
  payload: { user: "Hashim" }
};

store.dispatch(logIn);
