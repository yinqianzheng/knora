import {
  RECEIVE_NEW_QUESTIONS,
  RECEIVE_RELOAD_NEW_QUESTIONS,
  RECEIVE_REMOVE_NEW_QUESTIONS,
  RECEIVE_NEW_QUESTION
} from "../actions/question";
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_QUESTIONS:
      return state.concat(shuffle(action.questions));
    case RECEIVE_NEW_QUESTION:
      return state.map(question =>
        question.id === action.question.id ? action.question : question
      );
    case RECEIVE_RELOAD_NEW_QUESTIONS:
      return shuffle(action.questions);
    case RECEIVE_REMOVE_NEW_QUESTIONS:
      return state.filter(question => question.id !== action.id);
    default:
      return state;
  }
};
