import { connect } from "react-redux";
import AnswerBody from "./answer_body";
import {
  voteUp,
  voteDown,
  deleteAnswer,
  editAnswer
} from "../../../actions/answer";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  voteList: state.entities.voteList
});

const mapDispatchToProps = dispatch => ({
  upvote: vote => dispatch(voteUp(vote)),
  downvote: vote => dispatch(voteDown(vote)),
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  editAnswer: (answer, closeEditor) => dispatch(editAnswer(answer, closeEditor))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerBody);
