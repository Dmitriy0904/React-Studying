import React from "react";

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    console.log("Mouse was clicked");
    this.setState({ counter: this.state.counter + 1 });
  };

  handleMouseEnter = () => {
    console.log("Mouse on button");
  };

  handleMouseLeave = () => {
    console.log("Mouse don`t on the button");
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Click me
        </button>

        <h3>Button already pressed {this.state.counter} times</h3>
      </div>
    );
  }
}
