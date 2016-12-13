import React, { Component } from 'react';
import './App.css';
// import Fighter from './Fighter/Fighter.jsx';
import FighterList from './FighterList/FighterList.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fighters: [],
    }
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
