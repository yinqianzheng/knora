import React, { useReducer } from "react";
import { googleLogin } from "../../utils/session";

const GOOGLE_BUTTON_ID = "google-sign-in-button";

export default class GoogleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }
  componentDidMount() {
    const intervalId = setInterval(() => {
      if (gapi) {
        this.renderButton();
        clearInterval(intervalId);
      }
    }, 100);
  }

  onSuccess(googleUser) {
    googleLogin(googleUser.getAuthResponse().id_token).then(user => {
      user.signin_method = "GOOLE_SIGNIN";
      this.props.dispatchCurrentUser(user);
    });
  }

  onFailure(error) {
    console.log(error);
  }

  renderButton() {
    gapi.signin2.render(GOOGLE_BUTTON_ID, {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: this.onSuccess
      //   onfailure: onFailure
    });
  }

  render() {
    return <div id={GOOGLE_BUTTON_ID} />;
  }
}
