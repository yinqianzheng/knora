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
  }

  render() {
    return <button onClick={this.signOut}>log out</button>;
  }
}
