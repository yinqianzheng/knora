import {
  RECEIVE_WATCH_LIST,
  RECEIVE_WATCH,
  RECEIVE_REMOVE_WATCH
} from "../actions/user";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCH_LIST:
      return [...action.watchList];
    case RECEIVE_WATCH:
      return [...state, action.id];
    case RECEIVE_REMOVE_WATCH:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
};
