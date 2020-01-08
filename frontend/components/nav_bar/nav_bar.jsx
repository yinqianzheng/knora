import React from "react";
import GoogleLogout from "../session/google_logout_container";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        nav bar
        <button onClick={this.props.logout}>log out</button>
      </div>
    );
  }
}
