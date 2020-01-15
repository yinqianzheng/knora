import React from "react";
import QuestionContainer from "./question_container";

// delete afterword
import AnswerBundle from "../answer/answer_bundle";

export default class QuestionBundle extends React.Component {
  constructor(props) {
    super(props);
    this.closeWindow = this.closeWindow.bind(this);
    this.renderAnswerBundle = this.renderAnswerBundle.bind(this);
  }
  closeWindow() {
    this.props.removeQuestion(this.props.question.id);
  }

  renderAnswerBundle() {
    if (this.props.question.answers === undefined) return null;
    if (this.props.footer !== undefined || this.props.footer === false)
      return (
        <div className="AnswersArea">
          {this.props.question.answers.map(answer => (
            <AnswerBundle answer={answer} />
          ))}
        </div>
      );
    return null;
  }

  render() {
    return (
      <div>
        <div className="QuestionArea">
          <div onClick={this.closeWindow} className="remove-question-btn">
            x
          </div>
          <div className="question-head"></div>
          <QuestionContainer
            footer={this.props.footer}
            question={this.props.question}
          />
          {this.renderAnswerBundle()}
        </div>
      </div>
    );
  }
}
