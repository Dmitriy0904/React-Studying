import React from "react";
import Input from "./Input";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <Input
        count={this.state.count}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}