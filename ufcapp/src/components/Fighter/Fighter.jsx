import React, { Component } from 'react';
import './Fighter.css';
import FighterItem from '../FighterItem/FighterItem.jsx';

class Fighter extends Component {

  componentWillMount() {
    this.props.getFighters();
  }

  render(){
    return (
      <div id="fighter-list">
        {this.renderFighters()}
      </div>
    );
  }
}

export default Fighter;
