import React from "react";

export default class UtilsBox extends React.Component {
  render() {
    return (
      <div className="head-nav-right">
        <div>{`HELLO: ${this.props.currentUser.firstname}`}</div>
        <button className="logout-btn" onClick={this.props.logout}>
          log out
        </button>
        <button className="add-question-btn">Add Question</button>
      </div>
    );
  }
}
