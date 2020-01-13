import { connect } from "react-redux";
import QuestionForm from "./question_form";
import { createNewQuestion, editQuestion } from "../../../actions/question";

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

export const CreateQuestionForm = connect(mspCreate, mdpCreate)(QuestionForm);

export const EditQuestionForm = connect(mspEdit, mdpEdit)(QuestionForm);
