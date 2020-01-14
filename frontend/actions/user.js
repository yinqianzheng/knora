import { getWatchedQuestions } from "../utils/user";
export const RECEIVE_WATCH_LIST = "RECEIVE_WATCH_LIST";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const RECEIVE_REMOVE_WATCH = "RECEIVE_REMOVE_WATCH";

export const receiveWatchList = watchList => ({
  type: RECEIVE_WATCH_LIST,
  watchList
});

export const receiveWatch = id => ({
  type: RECEIVE_WATCH,
  id
});

export const receiveRemoveWatch = id => ({
  type: RECEIVE_REMOVE_WATCH,
  id
});

export const fetchWatchedQuestions = id => dispatch => {
  getWatchedQuestions(id).then(watchList => {
    dispatch(receiveWatchList(watchList));
  });
};
