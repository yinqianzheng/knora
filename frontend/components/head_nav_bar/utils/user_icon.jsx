import React from "react";

export default class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.getInit = this.getInit.bind(this);
  }

  getInit() {
    return this.props.currentUser.firstname.length > 0
      ? this.props.currentUser.firstname[0].toUpperCase()
      : " ";
  }

  render() {
    return (
      <div className="user-icon">
        <div onClick={this.props.logout}>{this.getInit()}</div>
      </div>
    );
  }
}
