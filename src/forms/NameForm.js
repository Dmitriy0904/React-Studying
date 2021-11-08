//Controlled Components 
import React from "react";

export default class AuthorizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  handleSubmit = () => {
    alert("Name was submitted: " + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
          placeholder="Name:"
        />

        <button>Submit</button>
      </form>
    );
  }
}