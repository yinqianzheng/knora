import { searchQuestion } from "../utils/search";

export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";
export const RECEIVE_CLEAR_RESULT = "RECEIVE_CLEAR_RESULT";

export const receiveSearchResult = result => ({
  type: RECEIVE_SEARCH_RESULT,
  result
});

export const receiveClearSearch = () => ({
  type: RECEIVE_CLEAR_RESULT
});

export const search = words => dispatch => {
  searchQuestion(words).then(result => dispatch(receiveSearchResult(result)));
};

export const clearSearch = () => dispatch => {
  dispatch(receiveClearSearch());
};
