import React from "react";
import UserIcon from "../user/user_icon";
import QuestionForm from "../question/question_form";

export default class FeedHead extends React.Component {
  render() {
    const user = this.props.currentUser;
    return (
      <div className="feed-head">
        <div className="feed-head-icon">
          <UserIcon user={user} action={"a"} />
          <div>{`${user.firstname} ${user.lastname}`}</div>
        </div>
        <QuestionForm type="FEED" />
      </div>
    );
  }
}
