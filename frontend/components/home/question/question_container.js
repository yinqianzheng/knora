import { connect } from "react-redux";
import Question from "./question";
import { deleteQuestion } from "../../../actions/question";
import {
  createAnswer,
  editAnswer,
  deleteAnswer
} from "../../../actions/answer";
const action = { type: "TEST", test: {} };

const getQuestion = id => {
  alert(
    `fetch question:${id} and show it's detail \n /component/home/question/question_container`
  );
  return action;
};

const getAnswers = id => {
  alert(
    `fetch answers for question:${id} \n /component/home/question/question_container`
  );
  return action;
};

const followQuestion = id => {
  alert(`follow question:${id} \n Will send a follow request to server`);
  return action;
};

const unfollowQuestion = id => {
  alert(`unfollow question:${id} \n Will send a unfollow request to server`);
  return action;
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  selectQuestion: id => dispatch(getQuestion(id)),
  getAnswers: id => dispatch(getAnswers(id)),
  follow: id => dispatch(followQuestion(id)),
  unfollow: id => dispatch(unfollowQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  createAnswer: (answer, cb) => dispatch(createAnswer(answer, cb)),
  editAnswer: answer => dispatch(editAnswer(answer)),
  deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
