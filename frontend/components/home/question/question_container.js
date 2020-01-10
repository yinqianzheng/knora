import { connect } from "react-redux";
import Question from "./question";

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
  alert(`follow question:${id}`);
  return action;
};

const unfollowQuestion = id => {
  alert(`unfollow question:${id}`);
  return action;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  selectQuestion: id => dispatch(getQuestion(id)),
  getAnswers: id => dispatch(getAnswers(id)),
  follow: id => dispatch(followQuestion(id)),
  unfollow: id => dispatch(unfollowQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
