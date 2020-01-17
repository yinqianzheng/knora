import {
  postAnswer,
  updateAnswer,
  destroyAnswer,
  upvote,
  downvote
} from "../utils/answer";
import { receiveErrors } from "./session";

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_REMOVE_ANSWER = "RECEIVE_REMOVE_ANSWER";
export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const RECEIVE_DOWNVOTE = "RECEIVE_DOWNVOTE";
export const RECEIVE_REMOVE_VOTE = "RECEIVE_REMOVE_VOTE";

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const receiveUpvote = vote => ({
  type: RECEIVE_UPVOTE,
  vote
});

const receiveRemoveVote = vote => ({
  type: RECEIVE_REMOVE_VOTE,
  vote
});

const removeUpvote = vote => ({
  type: REMOVE_UPVOTE,
  vote
});

const removeDownvote = vote => ({
  type: REMOVE_DOWNVOTE,
  vote
});

const receiveDownvote = vote => ({
  type: RECEIVE_DOWNVOTE,
  vote
});

const receiveRemoveAnswer = answerId => ({
  type: RECEIVE_REMOVE_ANSWER,
  answerId
});

const onFailure = (err, dispatch) => {
  dispatch(receiveErrors(err.responseJSON));
  if (window.clearSessionErrorTimerId) {
    clearTimeout(window.clearSessionErrorTimerId);
  }
  window.clearSessionErrorTimerId = setTimeout(() => {
    dispatch(receiveErrors([]));
  }, 4000);
};

export const createAnswer = (answer, callback) => dispatch => {
  postAnswer(answer).then(
    answer => {
      dispatch(receiveAnswer(answer));
      callback();
      window.location.hash = `/question_details/${answer.questionId}`;
    },
    err => onFailure(err, dispatch)
  );
};

export const editAnswer = (answer, cb) => dispatch => {
  updateAnswer(answer).then(
    answer => {
      dispatch(receiveAnswer(answer));
      cb();
    },
    err => onFailure(err, dispatch)
  );
};

export const deleteAnswer = answerId => dispatch => {
  destroyAnswer(answerId).then(
    () => dispatch(receiveRemoveAnswer(answerId)),
    err => onFailure(err, dispatch)
  );
};

export const voteUp = vote => dispatch => {
  upvote(vote).then(
    vote => {
      if (vote.action === "ADD_VOTE") {
        dispatch(receiveUpvote(vote));
      } else {
        dispatch(receiveRemoveVote(vote));
      }
    },
    err => onFailure(err, dispatch)
  );
};

export const voteDown = vote => dispatch => {
  downvote(vote).then(
    vote => {
      if (vote.action === "ADD_DOWNVOTE") {
        dispatch(receiveDownvote(vote));
      } else {
        dispatch(receiveRemoveVote(vote));
      }
    },
    err => onFailure(err, dispatch)
  );
};
