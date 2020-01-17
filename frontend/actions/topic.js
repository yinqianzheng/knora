import { fetchTopics } from "../utils/topic";

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const RECEIVE_TOPIC = "RECEIVE_TOPIC";

const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});

const receiveTopics = topics => ({
  type: RECEIVE_TOPICS,
  topics
});

export const selectTopic = topic => dispatch => {
  dispatch(receiveTopic(topic));
};

export const getTopics = () => dispatch => {
  fetchTopics().then(topics => dispatch(receiveTopics(topics)));
};
