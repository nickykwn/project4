import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import FighterList from './FighterList/FighterList.jsx';
import FighterForm from './FighterForm/FighterForm.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: [],
      fighterFormName: '',
      fighterFormURL: '',
      signup: {
        username: '',
        password: '',
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
      },
      loggedIn: false
    };
  }

  checkLogInStatus() {
    if(!this.state.loggedIn) {
      return ('hidden');
    } else {
      return ('show');
    }
  }

  getFighters() {
    fetch(`/api/fighters`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        fighters: data,
      });
      // console.log(this.state);
    })
    .catch((err) => console.log(err))
  }

  handleRemoveFighter(id) {
    fetch(`/api/fighters/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      let fighters = this.state.fighters.filter((fighter) => {
        return fighter.id !== id;
      });
      this.setState({ fighters });
    })
    .catch(err => console.log(err));
  }

  // savefighters for the user to database
  handleSaveFighters(int, int2, int3, int4, text, text2, text3, text4, url, username) {
  return fetch(`/api/fighters`, {
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

  updateFormName(e) {
    this.setState({
      fighterFormName: e.target.value
    });
  }

  updateFormURL(e) {
    this.setState({
      fighterFormURL: e.target.value
    });
  }

///////////////// Rafa's(@rapala61) User Auth Code //////////////////////////////
  updateFormSignUpUsername(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password,
      },
    });
  }

  updateFormSignUpPassword(e) {
    console.log(e.target.value);
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value,
      },
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password,
      },
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
      },
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
        password: this.state.signup.password,
      }),
    })
    .then(this.setState({
      signUpFormDisplay: 'hidden',
      logInFormDisplay: 'logInFormDisplay',
      signup: {
        username: '',
        password: ''
      },
    }))
    .then(this.alertInfo('You have successfully signed up!'))
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
        password: this.state.login.password,
      }),
    })
    .then(this.setState({
      username: this.state.login.username,
      login: {
        username: '',
        password: ''
      }
    }))
    .then(this.onSuccessfulLogIn)
    .then(this.setState({
      loggedIn: true
    }))
    .catch(err => console.log(err));
  }

  onSuccessfulLogIn(a,b) {
    console.log(a, b);
  }

  alertInfo(msg) {
    alert(msg);
  }

  handleFormSubmit() {
    fetch('/api/fighters', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.fighterFormName,
        url: this.state.fighterFormURL
      })
    })
    .then(this.setState({
      fighterFormName: '',
      fighterFormURL: ''
    }))
    .then(this.getFighters())
    .catch(err => console.log(err));
  }

////////////////////////////////////////////////////////

// // fetches the savedFighters for that specific user
// getSavedFighters(username) {
//   return fetch(`/api/fighters/${username}`, {
//     method: 'GET'
//   })
//   .then(r => r.json())
//   .then((data) => {
//     console.log(data)
//     // this.setState({
//     //   SavedFighters: data
//     // });
//   })
//   .catch(err => console.log(err));
// }

// handles the function that activates the saveFighters function
// handleSaveClick(int, int2, int3, int4, text, text2, text3, text4, url, username) {
//   this.saveFighters(int, int2, int3, int4, text, text2, text3, text4, url, username);
//   setTimeout(() => {this.getSavedFighters(username)}, 300);
// }

// loginFunctions(username) {
//   this.getSavedFighters(username);
//   this.handleLogIn();
// }

// // delete saved fighter by id
// deletedSaved(id) {
//   fetch(`/api/fighters/${id}`, {
//     method: 'delete'
//   })
//   .then(() => {
//     const SavedFighters = this.state.SavedFighters.filter((image) => {
//       return image.id !==id;
//     });
//       this.setState({ SavedFighters });
//     })
//   .catch(err => console.log(err));
// }

  render() {
    return (
      <div id="app-container">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
        <header>
        <h1>The Ultimate Fighting Championship</h1>
        </header>
        <div className="fighters">
        <div className="login-container">
          <SignUp
            signUpUsername={this.state.signup.username}
            signUpPassword={this.state.signup.password}
            updateFormUsername={event => this.updateFormSignUpUsername(event)}
            updateFormPassword={event => this.updateFormSignUpPassword(event)}
            handleFormSubmit={() => this.handleSignUp()}
          />
          <Login
            className={this.state.login.loggedIn ? 'hidden' : ''}
            logInUsername={this.state.login.username}
            logInPassWord={this.state.login.password}
            updateFormUsername={event => this.updateFormLogInUsername(event)}
            updateFormPassword={event => this.updateFormLogInPassword(event)}
            handleFormSubmit={() => this.handleLogIn()}
          />
        </div>
          <FighterList
            checkLogInStatus={this.checkLogInStatus.bind(this)}
            fighters={this.state.fighters}
            getFighters={this.getFighters.bind(this)}
            handleRemoveFighter={this.handleRemoveFighter.bind(this)}
            handleSaveFighters={this.handleSaveFighters.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
