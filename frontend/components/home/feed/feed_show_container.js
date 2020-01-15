import { connect } from "react-redux";
import FeedShow from "./feed_show";
import { getQuestions } from "../../../actions/question";
import { fetchWatchedQuestions, fetchVoteList } from "../../../actions/user";

const mapStateToProps = state => ({
  questions: state.entities.questions,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(getQuestions()),
  fetchWatchList: id => dispatch(fetchWatchedQuestions(id)),
  fetchVoteList: id => dispatch(fetchVoteList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedShow);
