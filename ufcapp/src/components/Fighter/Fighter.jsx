import React, { Component } from 'react';
import './Fighter.css';

class Fighter extends Component {

  componentWillMount() {
    this.props.getFighters();
  }

  renderFighters() {
    return this.props.fighters.map((fighter, i) =>

  }
}

  render(){
    return (
      <div id=['fighter-list']>
        {this.renderFighters()}
      </div>
    );
  }
}

export default Fighter;
