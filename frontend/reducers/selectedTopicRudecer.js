import { RECEIVE_TOPIC } from "../actions/topic";

export default (state = "", action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPIC:
      return action.topic;
    default:
      return state;
  }
};
