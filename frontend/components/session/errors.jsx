import React from "react";

export default class ErrorBox extends React.Component {
  render() {
    return (
      <div className={`session-errors`}>
        {this.props.errors.map(error => (
          <p>{error}</p>
        ))}
      </div>
    );
  }
}
