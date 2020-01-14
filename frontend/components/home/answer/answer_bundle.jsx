import React from "react";
import AnswerHeaderContainer from "./answer_header_container";
import AnswerBodyContainer from "./answer_body_container";

export default class AnswerBundle extends React.Component {
  render() {
    return (
      <div className="answer-bundle">
        <AnswerHeaderContainer answer={this.props.answer} />
        <AnswerBodyContainer answer={this.props.answer} />
      </div>
    );
  }
}
