import React, { Component } from 'react';
import './Fighter.css';

export default class Fighter extends Component {

  getFighters() {
    fetch('http://ufc-data-api.ufc.com/api/v1/us/fighters', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ 'url': url }),
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({

      })
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
