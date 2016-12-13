import React, { Component } from 'react';
import FighterItem from '../FighterItem/FighterItem.jsx';
import './FighterList.css';

class FighterList extends Component {

  componentWillMount() {
    this.props.getFighters();
  }

  renderFighters() {
    return this.props.fighters.map((fighter, i) =>
      <FighterItem
        key={i}
        f_name={fighter.first_name}
        l_name={fighter.last_name}
        url={fighter.thumbnail}
        />
    );
  }

  render() {
    return (
      <div id='fighter-list-container'>
        {this.renderFighters()}
      </div>
    );
  }
}

export default FighterList;
