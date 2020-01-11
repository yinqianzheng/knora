import React from "react";
import SearchBundle from "./search_bundle";
import UserIconContainer from "../../home/user/user_icon_container";
import QuestionForm from "../../home/question/question_form";

export default class UtilsBox extends React.Component {
  constructor(props) {
    super(props);
    this.showCreateQuestionModal = this.showCreateQuestionModal.bind(this);
  }

  showCreateQuestionModal() {
    alert(
      "Sorry, not yet implemented \n Will show a modal for creating question"
    );
  }

  render() {
    return (
      <div className="head-nav-right">
        <SearchBundle />
        {/* <button
          onClick={this.showCreateQuestionModal}
          className="add-question-btn"
        >
          Add Question
        </button> */}
        <QuestionForm type="NAV" />
        <UserIconContainer user={this.props.currentUser} />
        {/* <button className="logout-btn" onClick={this.props.logout}>
          log out
        </button> */}
      </div>
    );
  }
}
