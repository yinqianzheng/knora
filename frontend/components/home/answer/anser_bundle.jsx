import React from "react";
import AnswerHeaderContainer from "./anser_header_container";
import AnswerBodyContainer from "./answer_body_container";

export default class AnswerBundle extends React.Component {
  render() {
    return (
      <div className="answer-bundle">
        <AnswerHeaderContainer />
        <AnswerBodyContainer />
      </div>
    );
  }
}
