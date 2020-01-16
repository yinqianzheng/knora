import { connect } from "react-redux";
import Detail from "./details";
import { loadQustion, clearQuestions } from "../../../actions/question";

const mapStateToProps = state => ({
  question: state.entities.selectedQuestion
});

const mapDispatchToProps = dispatch => ({
  loadQuestion: id => dispatch(loadQustion(id)),
  clearQuestion: () => dispatch(clearQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
