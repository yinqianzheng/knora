import React from "react";
import SearchBundle from "./search_bundle";

export default class UtilsBox extends React.Component {
  render() {
    return (
      <div className="head-nav-right">
        <SearchBundle />
        <div>{`HELLO: ${this.props.currentUser.firstname}`}</div>
        <button className="add-question-btn">Add Question</button>
        <button className="logout-btn" onClick={this.props.logout}>
          log out
        </button>
      </div>
    );
  }
}
