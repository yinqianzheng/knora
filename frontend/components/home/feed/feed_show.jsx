import React from "react";
import QuestionBundle from "../question/question_bundle_container";
import FeedHeadContainer from "./feed_haed_container";

export default class FeedShow extends React.Component {
  componentDidMount() {
    if (this.props.questions.length === 0) {
      this.props.fetchQuestions();
    }
    this.props.fetchWatchList(this.props.currentUser.id);
  }

  render() {
    return (
      <div>
        <FeedHeadContainer />
        <div>
          {this.props.questions.map(question => (
            <QuestionBundle
              footer={question.answer ? false : true}
              question={question}
            />
          ))}
        </div>
      </div>
    );
  }
}
