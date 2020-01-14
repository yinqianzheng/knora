import React from "react";
import QuestionBundle from "../question/question_bundle_container";
import FeedHeadContainer from "./feed_haed_container";

const que = {
  id: 3,
  authorId: 1,
  title: "What type of questions do people with a high IQ ask?",
  numOfFollowers: 5,
  answer: {
    id: 2,
    questionId: 4,
    updatedAt: "Jan 13, 2020",
    author: {
      id: 5,
      image_url: "http//...",
      firstname: "Yin",
      lastname: "zheng"
    },
    body:
      "There are three body parts that you must keep clean, even on the battlefield. If one of those parts gets infected or causes you any other trouble, the war will be over for you: Your teeth I always had a toothbrush with me. I used the plastic bags from the MRE combat rations to protect the brush from dirt. You get used to cleaning your teeth while doing something else at the same time (like watching the terrain, listening to an officer giving orders or checking your rifle). There is really no excuse for not brushing your teeth. Your butt You can use wet wipes to wipe your ass. If you don't have any, try to clean your butt (and your genitals as well) with water from time to time. You should also change your underwear whenever you can. There is always some space in your backpack to take some spare underwear with you.",
    views: 12,
    upvotes: 9
  }
};

export default class FeedShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
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
