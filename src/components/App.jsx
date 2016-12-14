import React, { Component } from 'react';
import './App.css';
// import Fighter from './Fighter/Fighter.jsx';
import Login from './Login/Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import FighterList from './FighterList/FighterList.jsx';
import SavedFighters from './SavedFighters/SavedFighters.jsx';
import SavedFightersItem from './SavedFightersItem/SavedFightersItem.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: [],
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

///////////////// Rafa's(@rapala61) User Auth Code //////////////////////////////
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
      body: JSON.stringify({
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

////////////////////////////////////////////////////////

saveFighters(int, int2, int3, int4, text, text2, text3, text4, url, username) {
  return fetch(`/fighters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'int': int,
      'int2': int2,
      'int3': int3,
      'int4': int4,
      'text': text,
      'text2': text2,
      'text3': text3,
      'text4': text4,
      'url': url,
      'username': username
    })
  })
  .catch(err => console.log(err));
}

getSavedFighters(username) {
  return fetch(`/fighters/${username}`, {
    method: 'GET'
  })
  .then(r => r.json())
  .then((data) => {
    this.setState({
      savedImages: data
    });
  })
  .catch(err => console.log(err));
}

handleSaveClick(int, int2, int3, int4, text, text2, text3, text4, url, username) {
  this.saveFighters(int, int2, int3, int4, text, text2, text3, text4, url, username);
  setTimeout(() => {this.getSavedFighters(username)}, 300);
}

loginFunctions(username) {
  this.getSavedFighters(username);
  this.handleLogIn();
}

deletedSaved(id) {
  fetch(`/fighters/${id}`, {
    method: 'delete'
  })
  .then(() => {
    const SavedFighters = this.state.SavedFighters.filter((image) => {
      return image.id !==id;
    });
      this.setState({ SavedFighters });
    })
  .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <header>
        <h1>The Ultimate Fighting Championship</h1>
        </header>
          <div className="login-container">
            <SignUp
              signUpFormDisplay={this.state.signUpFormDisplay}
              signUpUsername={this.state.signup.username}
              signUpPassword={this.state.signup.password}
              updateFormUsername={event => this.updateFormSignUpUsername(event)}
              updateFormPassword={event => this.updateFormSignUpPassword(event)}
              handleFormSubmit={() => this.handleSignUp()}
            />
            <Login
              logInFormDisplay={this.state.logInFormDisplay}
              loginFunctions={() => this.loginFunctions(this.state.login.username)}
              className={this.state.login.loggedIn ? 'hidden' : ''}
              logInUsername={this.state.login.username}
              logInPassWord={this.state.login.password}
              updateFormUsername={event => this.updateFormLogInUsername(event)}
              updateFormPassword={event => this.updateFormLogInPassword(event)}
              handleFormSubmit={() => this.handleLogIn()}
              getSavedFighters={() => this.getSavedFighters()}
            />
          </div>
            <div className="fighter-container">
              <FighterList
                fighters={this.state.fighters}
                getFighters={this.getFighters.bind(this)}
              />
            </div>
          </div>
            <SavedFighters
              username={this.state.username}
              getSavedFighters={this.getSavedFighters.bind(this)}
              deletedSaved={this.deletedSaved.bind(this)}
              SavedFighters={this.state.SavedFighters}
            />
      </div>
    );
  }
}

export default App;
