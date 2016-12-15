import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  render(){
    return (
      <div id='form-container'>
        <input
          type="text"
          placeholder="username"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          Log in!
        </button>
      </div>
    );
  }
}

export default Login;
