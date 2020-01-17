import { connect } from "react-redux";
import FeedShow from "./feed_show";
import { reloadQustions, clearQuestions } from "../../../actions/question";
import { fetchWatchedQuestions, fetchVoteList } from "../../../actions/user";

const mapStateToProps = state => ({
  questions: state.entities.questions,
  currentUser: state.session.currentUser,
  topic: state.entities.selectedTopic
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(reloadQustions()),
  fetchWatchList: id => dispatch(fetchWatchedQuestions(id)),
  fetchVoteList: id => dispatch(fetchVoteList(id)),
  clearQuestions: () => dispatch(clearQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedShow);
