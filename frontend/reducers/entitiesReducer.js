import { combineReducers } from "redux";
import newQuesionReducer from "./newQuestionsReducer";
import questions from "./questionsReducer";
import watchList from "./watchListReducer";
import voteList from "./voteListReducer";
import selectedQuestion from "./seletedQuestionReducer";
import searchResult from "./searchReducer";

export default combineReducers({
  answer: newQuesionReducer,
  questions,
  watchList,
  voteList,
  selectedQuestion,
  searchResult
});
