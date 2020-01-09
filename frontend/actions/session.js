import {
  postUser,
  postSession,
  deleteSession,
  googleLogin,
  postDemoSession
} from "../utils/session";

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
  errors
});

export const createNewUser = formUser => dispatch =>
  postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = formUser => dispatch =>
  postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const demoLogin = () => dispatch =>
  postDemoSession().then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  deleteSession().then(() => dispatch(loggoutCurrentUser()));

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
