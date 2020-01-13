import React from "react";
import SearchBundle from "./search_bundle";
import UserIconContainer from "../../home/user/user_icon_container";
import { CreateQuestionForm } from "../../home/question/question_form_comtainer";

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
        <CreateQuestionForm type="NAV" />
        <UserIconContainer user={this.props.currentUser} />
      </div>
    );
  }
}
