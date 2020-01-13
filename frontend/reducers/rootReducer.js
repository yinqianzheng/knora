import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import entities from "./entitiesReducer";
import errors from "./errorsReducer";
export default combineReducers({
  entities,
  session: sessionReducer,
  errors
});
