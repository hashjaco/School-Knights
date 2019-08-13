//Import sample data
import History from "../../data/history";
import { DATA_AVAILABLE } from "./actionTypes";

export const getData = () => {
  return dispatch => {
    //Make API Call
    setTimeout(() => {
      const data = History.history;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 2000);
  };
};