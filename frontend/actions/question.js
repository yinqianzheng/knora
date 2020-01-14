import {
  createQuestion,
  updateQuestion,
  fetchNewQuestions,
  destroyQuestion,
  fetchQuestions
} from "../utils/question";

import { receiveErrors } from "./session";

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_RELOAD_QUESTIONS = "RECEIVE_RELOAD_QUESTIONS";
export const RECEIVE_DELETE_QUESTION = "RECEIVE_DELETE_QUESTION";
export const RECEIVE_HAS_NEW_QUESTIONS = "RECEIVE_HAS_NEW_QUESTIONS";
export const RECEIVE_REMOVE_NQUESTIONS = "RECEIVE_REMOVE_NQUESTIONS";

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

export const receiveReloadNewQuestions = questions => ({
  type: RECEIVE_RELOAD_QUESTIONS,
  questions
});

export const createNewQuestion = (formQuestion, callback) => dispatch =>
  createQuestion(formQuestion).then(
    question => {
      dispatch(receiveQuestion(question));
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
      dispatch(receiveQuestion(question));
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
        dispatch(receiveQuestions(questions));
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
    questions => {
      $(window).scrollTop(0);
      dispatch(receiveReloadNewQuestions(questions));
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

export const getQuestions = () => dispatch => {
  fetchQuestions().then(
    questions => {
      console.log(questions);
      dispatch(receiveQuestions(questions));
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
