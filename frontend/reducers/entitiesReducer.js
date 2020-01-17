import { combineReducers } from "redux";
import newQuesionReducer from "./newQuestionsReducer";
import questions from "./questionsReducer";
import watchList from "./watchListReducer";
import voteList from "./voteListReducer";
import selectedQuestion from "./seletedQuestionReducer";
import searchResult from "./searchReducer";
import topics from "./topicsReducer";
import selectedTopic from "./selectedTopicRudecer";

export default combineReducers({
  answer: newQuesionReducer,
  questions,
  watchList,
  voteList,
  selectedQuestion,
  searchResult,
  topics,
  selectedTopic
});
