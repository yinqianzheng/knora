import React from "react";
import { Link } from "react-router-dom";
import HeadNavItemsContainer from "./head_nav";
import UtilsBoxContainer from "./util_box_container";

export default class HeaderNavBar extends React.Component {
  render() {
    return (
      <div className="header-nav-bar">
        <div className="head-nav-content">
          <div>
            <Link className="quora-logo-nav" to="/feed"></Link>
          </div>
          <HeadNavItemsContainer />
          <UtilsBoxContainer />
        </div>
      </div>
    );
  }
}
