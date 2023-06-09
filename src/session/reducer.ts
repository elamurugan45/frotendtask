import { combineReducers } from "redux";
import { session } from "./session-model/reducer";

export const rootReducer = combineReducers({
  session: session,
});
