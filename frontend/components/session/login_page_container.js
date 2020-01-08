import React from "react";
import LoginContainer from "./login_container";
import SignupContentContainer from "./signup_content_container";
import SessionErrors from "./errors_container";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page-container">
        <SessionErrors />
        <div className="login-page-background"></div>
        <div className="login-page-content">
          <div className="quora-logo"></div>
          <div className="login-page-content-inner">
            <div className="signup-login">
              <SignupContentContainer history={this.props.history} />
              <div className="login">
                <div className="login-title">Login</div>
                <LoginContainer history={this.props.history} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
