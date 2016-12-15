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
        name={`${fighter.first_name} ${fighter.last_name}`}
        url={fighter.thumbnail}
        // likes={fighter.likes}
        id={fighter.id}
        wins={fighter.wins}
        losses={fighter.losses}
        weight={fighter.weight_class}
        handleRemoveFighter={this.props.handleRemoveFighter}
        handleSaveFighters={this.props.handleSaveFighters}
      />
    );
  }

  render() {
    // console.log('in fighterlist ', this.props.fighters)
    return (
      <div id='fighter-list-container' className={this.props.checkLogInStatus()}>
        {this.renderFighters()}
      </div>
    );
  }
}

export default FighterList;
