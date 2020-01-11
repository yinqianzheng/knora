import React from "react";
import QuestionBundle from "../question/question_bundle_container";
import FeedHeadContainer from "./feed_haed_container";

const que = {
  id: 2,
  title: "What type of questions do people with a high IQ ask?",
  numOfAnswers: 4,
  numOfFollows: 3
};

export default class FeedShow extends React.Component {
  render() {
    return (
      <div>
        <FeedHeadContainer />
        <div>
          <QuestionBundle footer={false} question={que} />
        </div>
      </div>
    );
  }
}
