import React from "react";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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
    this.props
      .createNewUser(this.state)
      .then(() => this.props.history.push("/feed"));
  }

  render() {
    return (
      <div className="signup-form">
        <form>
          <div className="form-row half-left">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInput("firstname")}
            />
          </div>

          <div className="form-row half-right">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput("lastname")}
            />
          </div>
          <br />
          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </div>
          <br />
          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </div>
          <br />
          <a href="#" signup-toggle onClick={this.props.showGoogleSigninBtn}>
            cancel
          </a>
          <button className="login-btn" onClick={e => this.handleSubmit(e)}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
