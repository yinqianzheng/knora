import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createNewQuestion, editQuestion } from "../../../actions/question";
import { withRouter } from "react-router-dom";

const mspCreate = state => ({
  currentUser: state.session.currentUser,
  formType: "Add Question"
});

const mspEdit = state => ({
  currentUser: state.session.currentUser,
  formType: "Edit Question"
});

const mdpCreate = dispatch => ({
  action: (question, callback) =>
    dispatch(createNewQuestion(question, callback))
});

const mdpEdit = dispatch => ({
  action: (question, callback) => dispatch(editQuestion(question, callback))
});

export const CreateQuestionForm = withRouter(
  connect(mspCreate, mdpCreate)(QuestionForm)
);

export const EditQuestionForm = withRouter(
  connect(mspEdit, mdpEdit)(QuestionForm)
);
