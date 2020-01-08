import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import entitiesReducer from "./entitiesReducer";
import errors from "./errorsReducer";
export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer,
  errors
});
