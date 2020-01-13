import { connect } from "react-redux";
import QuestionBundle from "./question_bundle";
import { removeNewQuestion } from "../../../actions/question";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  removeQuestion: id => dispatch(removeNewQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBundle);
