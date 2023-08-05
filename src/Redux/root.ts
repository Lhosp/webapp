import { combineReducers } from "redux";
import userReducer from "./Reducer/user";

export const rootReducer= combineReducers(
  {
    user:userReducer
  }
)