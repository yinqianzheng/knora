import React from "react";

export default class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.getInit = this.getInit.bind(this);
  }

  getInit() {
    return this.props.user.firstname.length > 0
      ? this.props.user.firstname[0].toUpperCase()
      : " ";
  }

  render() {
    return (
      <div className="user-icon">
        <img src={this.props.user.imageUrl} />
      </div>
    );
  }
}
