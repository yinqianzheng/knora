import React from "react";
import { NavLink } from "react-router-dom";
import HeadNavItemsContainer from "./items/head_items_container";
import UtilsBoxContainer from "./utils/util_box_container";
export default class HeaderNavBar extends React.Component {
  render() {
    return (
      <div className="header-nav-bar">
        <div className="head-nav-content">
          <div>
            <NavLink
              activeStyle={{ outline: "none" }}
              className="nav-logo"
              to="/feed"
            >
              Knora
            </NavLink>
          </div>
          <HeadNavItemsContainer />
          <UtilsBoxContainer />
        </div>
      </div>
    );
  }
}
