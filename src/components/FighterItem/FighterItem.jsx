import React, { Component } from 'react';
import './FighterItem.css';

const FighterItem = props => (
    <div className='fighter-list-item'>
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"/>
      <h3>{props.name}</h3>
      <p>Wins: {props.wins} - Losses: {props.losses}</p>
      <p>{props.weight}</p>
      <div className='fighter-image'>
        <img src={props.url}/>
      </div>
      <div id="button-div">
      <button onClick={() => props.handleSaveFighters(props.id)}>
        Save!
      </button>
      <button onClick={() => props.handleRemoveFighter(props.id)}>
        Remove!
      </button>
      </div>
    </div>
);


export default FighterItem;
