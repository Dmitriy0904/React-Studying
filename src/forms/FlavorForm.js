//Using select tag
import React from "react";

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
    };
  }


  handleChange = (event) => {
      this.setState({value: event.target.value});
      console.log(this.state);
  };


  handleSubmit = (event) => {
      alert("Your favourite flavor is: " + this.state.value);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your favourite flavor
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="coconut">Coconut</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="cherry">Cherry</option>
          </select>
        </label>
        <input type="submit" value="Send"/>
      </form>
    );
  }
};