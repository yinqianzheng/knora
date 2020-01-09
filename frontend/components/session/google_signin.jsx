import React from "react";

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
    this.props.loginWithGoogle(googleUser.getAuthResponse().id_token);
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
      onsuccess: this.onSuccess,
      onfailure: this.onFailure
    });
  }

  render() {
    return <div id={GOOGLE_BUTTON_ID} />;
  }
}
