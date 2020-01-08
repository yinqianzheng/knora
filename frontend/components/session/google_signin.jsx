import React from "react";
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
      this.props.dispatchCurrentUser(user);
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(auth2.disconnect());
      }
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