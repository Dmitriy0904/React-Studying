//Authorization form
import React from "react";
import "./../App.css";

export default class AuthorizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: "",
      passwordField: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    alert("Authorization form was submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input-field"
          name="nameField"
          placeholder="Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <input
          className="input-field"
          name="passwordField"
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <input className="submit-button" type="submit" value="Authorize" />
      </form>
    );
  }
}
