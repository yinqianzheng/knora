import {
  createQuestion,
  updateQuestion,
  fetchNewQuestions,
  destroyQuestion
} from "../utils/question";

import { receiveErrors } from "./session";

export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";
export const RECEIVE_NEW_QUESTIONS = "RECEIVE_NEW_QUESTIONS";
export const RECEIVE_RELOAD_NEW_QUESTIONS = "RECEIVE_RELOAD_NEW_QUESTIONS";
export const RECEIVE_DELETE_QUESTION = "RECEIVE_DELETE_QUESTION";
export const RECEIVE_HAS_NEW_QUESTIONS = "RECEIVE_HAS_NEW_QUESTIONS";
export const RECEIVE_REMOVE_NEW_QUESTIONS = "RECEIVE_REMOVE_NEW_QUESTIONS";

export const receiveNewQuestion = question => ({
  type: RECEIVE_NEW_QUESTION,
  question
});

export const receiveDeleteQuestion = id => ({
  type: RECEIVE_DELETE_QUESTION,
  id
});

export const receiveNewQuestions = questions => ({
  type: RECEIVE_NEW_QUESTIONS,
  questions
});

export const receiveHasNewQuestions = bool => ({
  type: RECEIVE_HAS_NEW_QUESTIONS,
  bool
});

export const removeNewQuestion = id => ({
  type: RECEIVE_REMOVE_NEW_QUESTIONS,
  id
});

export const receiveReloadNewQuestions = questions => ({
  type: RECEIVE_RELOAD_NEW_QUESTIONS,
  questions
});

export const createNewQuestion = (formQuestion, callback) => dispatch =>
  createQuestion(formQuestion).then(
    question => {
      dispatch(receiveNewQuestion(question));
      if (callback) {
        callback();
      }
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

export const editQuestion = (formQuestion, callback) => dispatch =>
  updateQuestion(formQuestion).then(
    question => {
      dispatch(receiveNewQuestion(question));
      if (callback) {
        callback();
      }
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

export const loadMoreQustions = notInRange => dispatch => {
  fetchNewQuestions(notInRange).then(
    questions => {
      if (questions.length > 0) {
        dispatch(receiveNewQuestions(questions));
      }
      // else {
      //   dispatch(receiveHasNewQuestions(false));
      // }
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

export const reloadNewQustions = notInRange => dispatch => {
  fetchNewQuestions(notInRange).then(
    questions => dispatch(receiveReloadNewQuestions(questions)),
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

export const deleteQuestion = id => dispatch => {
  destroyQuestion(id).then(
    () => dispatch(removeNewQuestion(id)),
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
