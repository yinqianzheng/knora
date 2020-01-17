import React from "react";
import SearchBundle from "./search_bundle";
import UserIconContainer from "../../home/user/user_icon_container";
import { CreateQuestionForm } from "../../home/question/question_form_comtainer";

export default class UtilsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogout: "hidden"
    };
  }

  render() {
    return (
      <div className="head-nav-right">
        <SearchBundle />
        <CreateQuestionForm type="NAV" />
        <div className="nav-icon-container">
          <UserIconContainer user={this.props.currentUser} />
          <div className="logout-btn" onClick={this.props.logout}>
            <a>Log Out</a>
          </div>
        </div>
      </div>
    );
  }
}
