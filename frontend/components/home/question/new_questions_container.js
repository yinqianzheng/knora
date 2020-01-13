import { connect } from "react-redux";
import NewQuestions from "./new_questions";
import { loadMoreQustions } from "../../../actions/question";

const mapStateToProps = state => ({
  questions: state.entities.answer
});

const mapDispatchToProps = dispatch => ({
  loadMoreQustions: range => dispatch(loadMoreQustions(range))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestions);
