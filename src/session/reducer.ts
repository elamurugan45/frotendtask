import { combineReducers } from "redux";
import { session } from "./session-model";

export const rootReducer = combineReducers({
  session: session,
});
