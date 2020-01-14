import {
  RECEIVE_QUESTIONS,
  RECEIVE_RELOAD_QUESTIONS,
  RECEIVE_REMOVE_NQUESTIONS,
  RECEIVE_QUESTION
} from "../actions/question";
import { RECEIVE_WATCH, RECEIVE_REMOVE_WATCH } from "../actions/user";

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
    case RECEIVE_WATCH:
      return state.map(question => {
        if (question.id === action.id) {
          question.numOfFollowers++;
        }
        return question;
      });
    case RECEIVE_REMOVE_WATCH:
      return state.map(question => {
        if (question.id === action.id) {
          question.numOfFollowers--;
        }
        return question;
      });
    default:
      return state;
  }
};
