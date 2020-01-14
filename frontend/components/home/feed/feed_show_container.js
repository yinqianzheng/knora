import { connect } from "react-redux";
import FeedShow from "./feed_show";
import { getQuestions } from "../../../actions/question";

const mapStateToProps = state => ({
  questions: state.entities.questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(getQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedShow);
