import { getWatchedQuestions, getVoteList } from "../utils/user";
export const RECEIVE_WATCH_LIST = "RECEIVE_WATCH_LIST";
export const RECEIVE_WATCH = "RECEIVE_WATCH";
export const RECEIVE_REMOVE_WATCH = "RECEIVE_REMOVE_WATCH";
export const RECEIVE_VOTE_LIST = "RECEIVE_VOTE_LIST";

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

export const receiveVoteList = voteList => ({
  type: RECEIVE_VOTE_LIST,
  voteList
});

export const fetchVoteList = id => dispatch => {
  getVoteList(id).then(voteList => {
    const votes = {};
    voteList.forEach(([a, b]) => {
      votes[a] = b;
    });
    dispatch(receiveVoteList(votes));
  });
};
