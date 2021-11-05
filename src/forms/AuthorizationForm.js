//Authorization form
import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: "", 
        password: ""
    };
  }


  handleNameChange = (event) => {
    this.setState({ name: event.target.name });
  };


  handlePasswordChange = (event) => {
    this.setState({ password: event.target.password });
  };


  handleSubmit = () => {
    alert("Authorixation form was submitted");
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
          placeholder="Name:"
        />

        <input 
          type="password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
          placeholder="Password"  
        />

        <button>Submit</button>
      </form>
    );
  }
}