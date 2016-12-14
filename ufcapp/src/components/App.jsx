import React, { Component } from 'react';
import './App.css';
// import Fighter from './Fighter/Fighter.jsx';
import Login from './Login/Login.jsx';
import SavedFighters from './SavedFighters/SavedFighters.jsx';
import FighterList from './FighterList/FighterList.jsx';
import SavedFightersItem from './SavedFightersItem/SavedFightersItem.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: [],
      DeleteButton: DeleteButton,
      Save: Save,
      User: User,
      signup: {
        username: '',
        password: ''
      },
      login: {
        loggedIn: false,
        username: '',
        password: ''
      },
      username: '',
      SavedFighters: []
    };
  }

  getFighters() {
    fetch('/api/fighters')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        fighters: data,
      })
      console.log(this.state);
    })
    .catch((err) => console.log(err))
  }

  updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password
      }
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value
      }
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    });
  }

  handleSignUp() {
    fetch('/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body.JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password
      })
    })
    .then(this.setState({
      username: this.state.login.username,
      signup: {
        username: '',
        password: ''
      },
      signUpFormDisplay: 'hidden'
    }))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    fetch('/api/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password
      })
    })
    .then(this.setState({
      username: this.state.login.username,
      login: {
        username: '',
        password: ''
      },
      signUpFormDisplay: 'hidden',
      logInFormDisplay: 'hidden',
      userInfo: 'userInfo'
    }))
    .then(this.onSuccessfulLogIn)
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a,b);
  }

  alertInfo(msg) {
    alert(msg);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <header>
        <h1>The Ultimate Fighting Championship</h1>
        </header>
        <FighterList
          fighters={this.state.fighters}
          getFighters={this.getFighters.bind(this)}
        />
        </div>
      </div>
    );
  }
}

export default App;
