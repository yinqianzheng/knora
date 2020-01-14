import React from "react";
import UserIconContainer from "../user/user_icon_container";

export default class AnswerHeader extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="AnswerHeader">
        <UserIconContainer user={this.props.answer.author} />
        <div>
          <div className="NameCredential">
            <a>{`${this.props.answer.author.firstname} ${this.props.answer.author.lastname}`}</a>
          </div>
          <div className="AnswerCredibilityFacts">
            {this.props.answer.updatedAt}
          </div>
        </div>
      </div>
    );
  }
}
