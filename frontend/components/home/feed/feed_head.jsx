import React from "react";
import UserIcon from "../user/user_icon";
import { CreateQuestionForm } from "../question/question_form_comtainer";

export default class FeedHead extends React.Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div className="feed-head">
        <div className="feed-head-icon">
          <UserIcon user={user} action={"a"} />
          <div>{`${user.firstname} ${user.lastname}`}</div>
        </div>
        <CreateQuestionForm type="FEED" />
      </div>
    );
  }
}
