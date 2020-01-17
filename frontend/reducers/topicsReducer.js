import { RECEIVE_TOPICS } from "../actions/topic";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    default:
      return state;
  }
};
