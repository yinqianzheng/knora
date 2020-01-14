import { postAnswer, updateAnswer, destroyAnswer } from "../utils/answer";
import { receiveErrors } from "./session";

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_REMOVE_ANSWER = "RECEIVE_REMOVE_ANSWER";

const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

const receiveRemoveAnswer = answerId => ({
  type: RECEIVE_REMOVE_ANSWER,
  answerId
});

export const createAnswer = (answer, callback) => dispatch => {
  postAnswer(answer).then(
    answer => {
      console.log(answer);
      dispatch(receiveAnswer(answer));
      callback();
    },
    err => {
      dispatch(receiveErrors(err.responseJSON));
      if (window.clearSessionErrorTimerId) {
        clearTimeout(window.clearSessionErrorTimerId);
      }
      window.clearSessionErrorTimerId = setTimeout(() => {
        dispatch(receiveErrors([]));
      }, 4000);
    }
  );
};

export const editAnswer = answer => dispatch => {
  updateAnswer(answer).then(
    answer => dispatch(receiveAnswer(answer)),
    err => {
      dispatch(receiveErrors(err.responseJSON));
      if (window.clearSessionErrorTimerId) {
        clearTimeout(window.clearSessionErrorTimerId);
      }
      window.clearSessionErrorTimerId = setTimeout(() => {
        dispatch(receiveErrors([]));
      }, 4000);
    }
  );
};

export const deleteAnswer = answerId => dispatch => {
  destroyAnswer(answerId).then(
    () => dispatch(receiveRemoveAnswer(answerId)),
    err => {
      dispatch(receiveErrors(err.responseJSON));
      if (window.clearSessionErrorTimerId) {
        clearTimeout(window.clearSessionErrorTimerId);
      }
      window.clearSessionErrorTimerId = setTimeout(() => {
        dispatch(receiveErrors([]));
      }, 4000);
    }
  );
};
