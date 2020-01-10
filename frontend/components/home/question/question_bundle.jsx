import React from "react";
import QuestionContainer from "./question_container";

export default class QuestionBundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true
    };
    this.closeWindow = this.closeWindow.bind(this);
  }
  closeWindow() {
    this.setState({
      render: false
    });
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
          <QuestionContainer question={this.props.question} />
        </div>
        <div className="AnswersArea"></div>
      </div>
    );
  }
}
