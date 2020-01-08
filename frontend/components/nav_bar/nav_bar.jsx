import React from "react";
import GoogleLogout from "../session/google_logout_container";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        nav bar
        {this.props.currentUser.signin_method === "GOOLE_SIGNIN" ? (
          <GoogleLogout />
        ) : (
          <button onClick={this.props.logout}>logout</button>
        )}
      </div>
    );
  }
}
