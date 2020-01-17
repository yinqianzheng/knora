import { connect } from "react-redux";
import Question from "./question";
import {
  deleteQuestion,
  follow,
  unfollow,
  fetchQuestionsByTopic
} from "../../../actions/question";
import { selectTopic } from "../../../actions/topic";
import { createAnswer, deleteAnswer } from "../../../actions/answer";
import { withRouter } from "react-router-dom";

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
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  getQuestionsByTopic: id => dispatch(fetchQuestionsByTopic(id)),
  selectTopic: topic => dispatch(selectTopic(topic))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Question)
);
