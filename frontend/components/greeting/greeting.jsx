import React from 'react';
import { Link } from 'react-router-dom';


export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loggedIn: false
    // }
    //
    // if (this.props.currentUser) {
    //   this.state.loggedIn = true;
    // }
    //
    this.props.fetchPostings();
    if (this.props.currentUser) {
      this.props.fetchSubmits();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentUser && !
      prevProps.currentUser
    ) {
      this.props.fetchSubmits();
    }
  }


  render() {
    const sessionLinks = () => (
      <nav className="login-signup">
        <Link className="login-link" to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link className="signup-link" to="/signup">Sign up!</Link>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <Link to="/personal">Edit Profile</Link>
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );

    return this.props.currentUser ? personalGreeting() : sessionLinks();
  }
}
