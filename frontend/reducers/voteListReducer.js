import { RECEIVE_VOTE_LIST } from "../actions/user";
import {
  RECEIVE_UPVOTE,
  RECEIVE_DOWNVOTE,
  RECEIVE_REMOVE_VOTE
} from "../actions/answer";

export default (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VOTE_LIST:
      return action.voteList;
    case RECEIVE_UPVOTE:
      nextState[action.vote.vote.answer_id] = true;
      return nextState;
    case RECEIVE_DOWNVOTE:
      nextState[action.vote.vote.answer_id] = false;
      return nextState;
    case RECEIVE_REMOVE_VOTE:
      delete nextState[action.vote.vote.answer_id];
      return nextState;
    default:
      return state;
  }
};
