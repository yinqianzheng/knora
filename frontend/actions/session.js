import {
  postUser,
  postSession,
  deleteSession,
  googleLogin,
  postDemoSession
} from "../utils/session";

import { selectTopic } from "./topic";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const loggoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors ? errors : []
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

export const createNewUser = formUser => dispatch =>
  postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => onFailure(err, dispatch)
  );

export const login = formUser => dispatch =>
  postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => onFailure(err, dispatch)
  );

export const demoLogin = () => dispatch =>
  postDemoSession().then(
    user => dispatch(receiveCurrentUser(user)),
    err => onFailure(err, dispatch)
  );

export const logout = () => dispatch =>
  deleteSession().then(() => {
    dispatch(loggoutCurrentUser());
    dispatch(selectTopic(""));
    window.localStorage.clear();
  });

export const loginWithGoogle = idToken => dispatch =>
  googleLogin(idToken).then(
    user => {
      dispatch(receiveCurrentUser(user));
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(auth2.disconnect());
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
