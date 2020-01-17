import { connect } from "react-redux";
import Question from "./question";

import { deleteQuestion, follow, unfollow } from "../../../actions/question";
import { createAnswer, deleteAnswer } from "../../../actions/answer";
import { withRouter } from "react-router-dom";
const action = { type: "REDIRECT", test: {} };

// const getQuestion = id => {
//   alert(
//     `fetch question:${id} and show it's detail \n /component/home/question/question_container`
//   );
//   return action;
// };

// const getAnswers = id => {
//   alert(
//     `fetch answers for question:${id} \n /component/home/question/question_container`
//   );
//   return action;
// };

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  watchList: state.entities.watchList
});

const mapDispatchToProps = dispatch => ({
  selectQuestion: id => dispatch(getQuestion(id)),
  getAnswers: id => dispatch(getAnswers(id)),
  follow: watch => dispatch(follow(watch)),
  unfollow: watch => dispatch(unfollow(watch)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createAnswer: (answer, cb) => dispatch(createAnswer(answer, cb)),
  deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
);
