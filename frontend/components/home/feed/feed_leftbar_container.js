import { connect } from "react-redux";
import FeedLeftBar from "./feed_leftbar";
import {
  fetchQuestionsByTopic,
  reloadQustions
} from "../../../actions/question";
import { selectTopic } from "../../../actions/topic";

const mapStateToProps = state => ({
  topic: state.entities.selectedTopic
});

const mapDispatchToProps = dispatch => ({
  fetchByTopic: id => dispatch(fetchQuestionsByTopic(id)),
  reloadQustions: () => dispatch(reloadQustions()),
  selectTopic: topic => dispatch(selectTopic(topic))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedLeftBar);
