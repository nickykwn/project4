import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {

  render() {
    return (
      <div id='form-container'>
        <input
          type="text"
          placeholder="username"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          Register
        </button>
      </div>
    );
  }
}

export default SignUp;
