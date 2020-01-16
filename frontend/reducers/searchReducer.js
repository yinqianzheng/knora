import { RECEIVE_SEARCH_RESULT, RECEIVE_CLEAR_RESULT } from "../actions/search";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      return action.result;
    case RECEIVE_CLEAR_RESULT:
      return [];
    default:
      return state;
  }
};
