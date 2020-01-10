import { connect } from "react-redux";
import MainContent from "./main_feed_content";

const questions = [
  {
    id: 1,
    title: "Can Python run on Unix?",
    numOfAnswers: 4,
    numOfFollows: 3
  },
  {
    id: 2,
    title: "What type of questions do people with a high IQ ask?",
    numOfAnswers: 4,
    numOfFollows: 3
  },
  {
    id: 3,
    title: "Can an electric magnet be a substitute for a magnet to test metal?",
    numOfAnswers: 4,
    numOfFollows: 3
  },
  {
    id: 4,
    title: "Do first graders have spelling tests?",
    numOfAnswers: 4,
    numOfFollows: 3
  },
  {
    id: 5,
    title: "Which particle has a negatively charged ion?",
    numOfAnswers: 4,
    numOfFollows: 3
  }
];

const mapStateToProps = state => ({
  questions: questions
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
