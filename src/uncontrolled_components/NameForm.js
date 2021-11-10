import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("Sended name " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input placeholder="Enter your name..." type="text" ref={this.input} />{" "}
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}