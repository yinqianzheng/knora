import { combineReducers } from "redux";
import newQuesionReducer from "./newQuestionsReducer";
import questions from "./questionsReducer";
import watchList from "./watchListReducer";

export default combineReducers({
  answer: newQuesionReducer,
  questions,
  watchList
});
