import React from "react";
import SignupContainer from "./signup_container";
import GoogleLogin from "./google_signin_container";

export default class SignupContentContainer extends React.Component {
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
          <GoogleLogin />
          <div onClick={this.showSignupForm}>Sign Up With Email</div>
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
