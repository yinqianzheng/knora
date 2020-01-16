import React from "react";
import QuestionBundle from "./question_bundle_container";

export default class Detail extends React.Component {
  componentDidMount() {
    this.props.loadQuestion(this.props.match.params.question_id);
  }
  componentWillUnmount() {
    this.props.clear;
  }

  render() {
    return (
      <div className="grid_page">
        <div className="detail-background-layer"></div>
        <div className="detail-box">
          <div className="question-details">
            <QuestionBundle
              footer={true}
              question={this.props.question}
              type="DETAIL"
            />
          </div>
          <div>related</div>
        </div>
      </div>
    );
  }
}
