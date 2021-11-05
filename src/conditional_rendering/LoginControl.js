import React from "react";

export default class LoginControl extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }


  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };


  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };


  UserGreeting = () => {
    return <h2>Hello user</h2>;
  };


  AnonymGreeting = () => {
    return <h2>Please, authoize first</h2>;
  };


  Greeting = () => {
    if (this.state.isLoggedIn) {
      return <this.UserGreeting />;
    }
    return <this.AnonymGreeting />;
  };


  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <this.Greeting />
          <button onClick={this.handleLogoutClick}>Logout</button>
        </div>
      );
    }
    return (
      <div>
        <this.Greeting />
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }

}
