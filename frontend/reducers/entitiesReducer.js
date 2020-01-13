import { combineReducers } from "redux";
import newQuesionReducer from "./newQuestionsReducer";

export default combineReducers({
  answer: newQuesionReducer
});
