import { LOG_IN, LOG_OUT, REGISTER } from "./actionTypes";

export const logInUser = payload => ({
  type: LOG_IN,
  payload
});

export const logOutUser = payload => ({
  type: LOG_OUT,
  payload
});

export const registerUser = payload => ({
  type: REGISTER,
  payload
});
