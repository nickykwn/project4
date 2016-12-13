import React, { Component } from 'react';
import './App.css';
import Fighter from './Fighter/Fighter.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: [],
    }
  }

  getFighters() {
    fetch('/fighters')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        fighters: data,
      })
      console.log(this.state);
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>UFC</h1>
        <Fighter
        getFighters={()=> this.getFighters()}
        fighters={this.state.fighters.first_name}
        />
        </div>
      </div>
    );
  }
}

export default App;
