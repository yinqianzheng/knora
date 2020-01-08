import React from "react";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/feed"));
  }

  render() {
    return (
      <div className="session_form">
        <form>
          <input
            className="header_login_text_box"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInput("email")}
          />
          <br />
          <input
            className="header_login_text_box"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInput("password")}
          />
          <br />
          <button className="login_btn" onClick={e => this.handleSubmit(e)}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}
