import { connect } from "react-redux";
import AnswerHeader from "./answer_header";

const mapStateToProps = state => ({
  answer: {
    author: {
      id: 1,
      firstname: "Hello",
      lastname: "Ok"
    },
    updated: "Dec 29, 2018"
  }
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerHeader);
