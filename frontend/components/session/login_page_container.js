import React from "react";
import SignupContainer from "./signup_container";
import LoginContainer from "./login_container";

export default props => {
  return (
    <div className="login_page_container">
      <div className="login_page_background"></div>
      <div className="login_page_content">
        <div className="quora_logo"></div>
        <div className="login_page_content_inner">
          <div className="signup_login">
            <div className="signup">
              <div className="login_title">Sign up</div>
              <SignupContainer history={props.history} />
            </div>
            <div className="login">
              <div className="login_title">Login</div>
              <LoginContainer history={props.history} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
