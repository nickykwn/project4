import React, { Component } from 'react';
import './FighterItem.css';

const FighterItem = props => (
  <div className='fighter-item'>
    <h3>{props.f_name} {props.l_name}</h3>
    <div className='fighter-image'>
      <img src={props.url}/>
    </div>
  </div>
);

export default FighterItem;
