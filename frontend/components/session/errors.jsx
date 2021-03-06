import React from "react";

export default class ErrorBox extends React.Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }

  renderErrors() {
    if (
      this.props.errors &&
      Array.isArray(this.props.errors) &&
      this.props.errors.length > 0
    ) {
      return (
        <div className={`session-errors`} onClick={this.props.clearErrors}>
          {this.props.errors.map(error => (
            <p>{error}</p>
          ))}
        </div>
      );
    }
    return null;
  }

  render() {
    return this.renderErrors();
  }
}
