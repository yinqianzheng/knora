import React from "react";
import QuestionContainer from "./question_container";

// delete afterword
import AnswerBundle from "../answer/anser_bundle";

export default class QuestionBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true
    };
    this.closeWindow = this.closeWindow.bind(this);
    this.renderAnswerBundle = this.renderAnswerBundle.bind(this);
  }
  closeWindow() {
    this.setState({
      render: false
    });
  }

  renderAnswerBundle() {
    if (this.props.footer !== undefined || this.props.footer === false)
      return (
        <div className="AnswersArea">
          <AnswerBundle />
        </div>
      );
    return null;
  }

  render() {
    if (!this.state.render) return null;
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
