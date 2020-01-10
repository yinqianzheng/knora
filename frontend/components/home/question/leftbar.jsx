import React from "react";
import { NavLink } from "react-router-dom";

export default class AnswerLeftBar extends React.Component {
  render() {
    return (
      <div className="question-left-bar">
        <h2>Questions</h2>
        <div className="leftbar-items">
          <div>
            <NavLink to="/answer" activeClassName="leftBarSelected">
              Questions for you
            </NavLink>
          </div>
          <div>
            <NavLink to="/answer_later" activeClassName="leftBarSelected">
              Answer Later
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
