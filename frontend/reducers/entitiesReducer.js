import { combineReducers } from "redux";
import newQuesionReducer from "./newQuestionsReducer";
import questions from "./questionsReducer";

export default combineReducers({
  answer: newQuesionReducer,
  questions
});
