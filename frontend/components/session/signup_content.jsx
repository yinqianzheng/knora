import React from "react";
import SignupContainer from "./signup_container";
import GoogleLogin from "./google_signin_container";

export default class SignupContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleLoginClass: "",
      signupFormClass: "hidden"
    };
    this.showGoogleSigninBtn = this.showGoogleSigninBtn.bind(this);
    this.showSignupForm = this.showSignupForm.bind(this);
  }

  showSignupForm() {
    this.setState({
      googleLoginClass: "hidden",
      signupFormClass: ""
    });
  }

  showGoogleSigninBtn() {
    this.setState({
      googleLoginClass: "",
      signupFormClass: "hidden"
    });
  }

  render() {
    return (
      <div className="signup">
        <div className={this.state.googleLoginClass}>
          <div className="demo-login" onClick={this.props.demoLogin}>
            <div className="logo-k">
              <div>K</div>
            </div>
            Demo Login
          </div>
          <GoogleLogin />
          <div className="signup-term">
            <a className="signup-with-google" onClick={this.showSignupForm}>
              Sign Up With Email.
            </a>
            <div className="signup-policy">
              By signing up you indicate that you have read and agree to Quora's
              Terms of Service and Privacy Policy.
            </div>
          </div>
        </div>

        <div className={this.state.signupFormClass}>
          <div className={"login-title"}>Sign up</div>
          <SignupContainer
            history={this.props.history}
            showGoogleSigninBtn={this.showGoogleSigninBtn}
          />
        </div>
      </div>
    );
  }
}
