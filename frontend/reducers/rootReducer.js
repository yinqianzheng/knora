import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer
});
