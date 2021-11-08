//using textarea tag
import React from "react";

export default class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Enter some text here...",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Successfully sended. Your text:" + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
};