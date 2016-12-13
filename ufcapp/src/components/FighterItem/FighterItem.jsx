import React, { Component } from 'react';
import './FighterItem.css';

const FighterItem = props => (
  <div className='fighter-item'>
    <h3>{props.name}</h3>
    <div className='fighter-image'>
      <img src={props.thumbnail}/>
    </div>
  </div>
);

export default FighterItem;
