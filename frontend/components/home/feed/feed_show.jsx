import React from "react";
import QuestionBundle from "../question/question_bundle_container";
import FeedHeadContainer from "./feed_haed_container";

export default class FeedShow extends React.Component {
  componentDidMount() {
    if (this.props.questions.length < 1) {
      this.props.fetchQuestions();
    }
    this.props.fetchWatchList(this.props.currentUser.id);
    this.props.fetchVoteList(this.props.currentUser.id);
  }

  componentWillUnmount() {
    this.props.clearQuestions();
  }

  render() {
    return (
      <div>
        <FeedHeadContainer />
        <div>
          {this.props.questions.map(question => (
            <QuestionBundle
              footer={question.answers.length > 0 ? false : true}
              question={question}
            />
          ))}
        </div>
      </div>
    );
  }
}
