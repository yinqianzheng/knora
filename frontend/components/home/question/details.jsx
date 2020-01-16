import React from "react";
import QuestionBundle from "./question_bundle_container";
import { Link } from "react-router-dom";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.renderRelatedQuestions = this.renderRelatedQuestions.bind(this);
  }

  componentDidMount() {
    this.props.loadQuestion(this.props.match.params.question_id);
  }
  componentWillUnmount() {
    this.props.clear;
  }

  renderRelatedQuestions() {
    if (this.props.question.relatedQuestions) {
      return (
        <ul>
          {this.props.question.relatedQuestions.map(qu => (
            <li>
              <Link
                onClick={() => this.props.loadQuestion(qu.id)}
                to={`/question_details/${qu.id}`}
              >
                {qu.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
    return null;
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
          <div className="related-questions">
            <h3>Related Questions</h3>
            {this.renderRelatedQuestions()}
          </div>
        </div>
      </div>
    );
  }
}
