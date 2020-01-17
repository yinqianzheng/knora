import {
  RECEIVE_SELECTED_QUESTION,
  CLEAR_QUESTIONS,
  RECEIVE_QUESTION
} from "../actions/question";
import { RECEIVE_WATCH, RECEIVE_REMOVE_WATCH } from "../actions/user";

import {
  RECEIVE_UPVOTE,
  RECEIVE_DOWNVOTE,
  RECEIVE_REMOVE_VOTE,
  RECEIVE_REMOVE_ANSWER,
  RECEIVE_ANSWER
} from "../actions/answer";

export default (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SELECTED_QUESTION:
      return action.question;
    case RECEIVE_UPVOTE:
      if (nextState.answers) {
        nextState.answers.map(ans => {
          if (ans.id === action.vote.vote.answer_id) {
            ans.upvotes += action.vote.count;
          }
          return ans;
        });
      }
      return nextState;
    case RECEIVE_DOWNVOTE:
      if (nextState.answers) {
        nextState.answers.map(ans => {
          if (ans.id === action.vote.vote.answer_id) {
            ans.upvotes -= action.vote.count;
          }
          return ans;
        });
      }
      return nextState;
    case RECEIVE_REMOVE_VOTE:
      if (nextState.answers) {
        nextState.answers.map(ans => {
          if (ans.id === action.vote.vote.answer_id) {
            if (action.vote.action === "REMOVE_VOTE") {
              ans.upvotes -= action.vote.count;
            } else {
              ans.upvotes += action.vote.count;
            }
          }
          return ans;
        });
      }
      return nextState;
    case RECEIVE_WATCH:
      nextState.numOfFollowers++;
      return nextState;
    case RECEIVE_REMOVE_WATCH:
      nextState.numOfFollowers--;
      return nextState;
    case RECEIVE_QUESTION:
      nextState.title = action.question.title;
      return nextState;
    case RECEIVE_REMOVE_ANSWER:
      nextState.answers = nextState.answers.filter(
        ans => ans.id !== action.answerId
      );
      return nextState;
    case RECEIVE_ANSWER:
      if (nextState.answers) {
        let notEdited = true;
        nextState.answers.forEach(ans => {
          if (ans.id === action.answer.id) {
            notEdited = false;
            ans.body = action.answer.body;
          }
        });
        if (notEdited) {
          nextState.answers.unshift(action.answer);
        }
      }
      return nextState;
    case CLEAR_QUESTIONS:
      return {};
    default:
      return state;
  }
};
