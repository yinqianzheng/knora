import {
  createQuestion,
  updateQuestion,
  fetchNewQuestions,
  destroyQuestion,
  fetchQuestions,
  fetchQuestion,
  followQuestion,
  unfollowQuestion
} from "../utils/question";

import { receiveWatch, receiveRemoveWatch } from "./user";

import { receiveErrors } from "./session";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_RELOAD_QUESTIONS = "RECEIVE_RELOAD_QUESTIONS";
export const RECEIVE_RELOAD_NEW_QUESTIONS = "RECEIVE_RELOAD_NEW_QUESTIONS";
export const RECEIVE_DELETE_QUESTION = "RECEIVE_DELETE_QUESTION";
export const RECEIVE_HAS_NEW_QUESTIONS = "RECEIVE_HAS_NEW_QUESTIONS";
export const RECEIVE_REMOVE_NQUESTIONS = "RECEIVE_REMOVE_NQUESTIONS";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";
export const RECEIVE_SELECTED_QUESTION = "RECEIVE_SELECTED_QUESTION";

export const receiveClearQuestions = () => ({
  type: CLEAR_QUESTIONS
});

export const clearQuestions = () => dispatch => {
  dispatch(receiveClearQuestions());
};

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const receiveDeleteQuestion = id => ({
  type: RECEIVE_DELETE_QUESTION,
  id
});

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveHasNewQuestions = bool => ({
  type: RECEIVE_HAS_NEW_QUESTIONS,
  bool
});

export const removeNewQuestion = id => ({
  type: RECEIVE_REMOVE_NQUESTIONS,
  id
});

export const receiveReloadQuestions = questions => ({
  type: RECEIVE_RELOAD_QUESTIONS,
  questions
});

export const receiveReloadNewQuestions = questions => ({
  type: RECEIVE_RELOAD_NEW_QUESTIONS,
  questions
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

export const createNewQuestion = (formQuestion, callback) => dispatch =>
  createQuestion(formQuestion).then(
    question => {
      dispatch(receiveQuestion(question));
      if (callback) {
        callback();
      }
    },
    err => onFailure(err, dispatch)
  );

export const editQuestion = (formQuestion, callback) => dispatch =>
  updateQuestion(formQuestion).then(
    question => {
      dispatch(receiveQuestion(question));
      if (callback) {
        callback();
      }
    },
    err => onFailure(err, dispatch)
  );

export const loadMoreQustions = notInRange => dispatch => {
  fetchNewQuestions(notInRange).then(
    questions => {
      if (questions.length > 0) {
        dispatch(receiveQuestions(questions));
      }
      // else {
      //   dispatch(receiveHasNewQuestions(false));
      // }
    },
    err => onFailure(err, dispatch)
  );
};

export const reloadNewQustions = notInRange => dispatch => {
  fetchNewQuestions(notInRange).then(
    questions => {
      $(window).scrollTop(0);
      dispatch(receiveReloadNewQuestions(questions));
    },
    err => onFailure(err, dispatch)
  );
};

export const receiveSelectedQuestion = question => ({
  type: RECEIVE_SELECTED_QUESTION,
  question
});

export const loadQustion = id => dispatch => {
  fetchQuestion(id).then(
    question => {
      dispatch(receiveSelectedQuestion(question));
    },
    err => onFailure(err, dispatch)
  );
};

export const deleteQuestion = id => dispatch => {
  destroyQuestion(id).then(
    () => dispatch(removeNewQuestion(id)),
    err => onFailure(err, dispatch)
  );
};

export const getQuestions = () => dispatch => {
  fetchQuestions().then(
    questions => {
      dispatch(receiveQuestions(questions));
    },
    err => onFailure(err, dispatch)
  );
};

export const reloadQustions = () => dispatch => {
  fetchQuestions().then(
    questions => {
      dispatch(receiveReloadQuestions(questions));
    },
    err => onFailure(err, dispatch)
  );
};

export const follow = id => dispatch => {
  followQuestion(id).then(
    watch => {
      dispatch(receiveWatch(watch.id));
    },
    err => onFailure(err, dispatch)
  );
};

export const unfollow = id => dispatch => {
  unfollowQuestion(id).then(
    watch => dispatch(receiveRemoveWatch(watch.id)),
    err => onFailure(err, dispatch)
  );
};
