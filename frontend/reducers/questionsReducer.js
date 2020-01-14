import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  RECEIVE_RELOAD_QUESTIONS,
  RECEIVE_REMOVE_NQUESTIONS
} from "../actions/question";
import { shuffle } from "./newQuestionsReducer";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return state.concat(shuffle(action.questions));
    case RECEIVE_QUESTION:
      return state.map(question =>
        question.id === action.question.id ? action.question : question
      );
    case RECEIVE_RELOAD_QUESTIONS:
      return shuffle(action.questions);
    case RECEIVE_REMOVE_NQUESTIONS:
      return state.filter(question => question.id !== action.id);
    default:
      return state;
  }
};
