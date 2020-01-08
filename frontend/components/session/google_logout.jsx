import React from "react";

export default class GoogleLogout extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(this.props.onLogoutSuccess));
    }
    // gapi.load("client:auth2", () => {
    //   gapi.client
    //     .init({
    //       clientId:
    //         "410414924194-p01fmqs2gn56sgg4af6alb20mu3hojs3.apps.googleusercontent.com",
    //       scope: "profile email"
    //     })
    //     .then(() => {
    //       const auth = gapi.auth2.getAuthInstance();
    //       auth
    //         .signOut()
    //         .then(auth.disconnect().then(this.props.onLogoutSuccess));
    //     });
    // });
  }

  render() {
    return <button onClick={this.signOut}>log out</button>;
  }
}
