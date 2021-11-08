import React from "react";
import Dialog from "./Dialog";

export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleClick = () => {
    alert("You are invited, " + this.state.name);
  };

  render() {
    return (
      <Dialog title="Excursion to ...." message="How should we refer to you?">
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Invite me!</button>
      </Dialog>
    );
  }
}
