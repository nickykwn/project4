import React, { Component } from 'react';
import './FighterForm.css';

class FighterForm extends Component {

  render() {
    return (
      <div id='form-container'>
        <input
          type="text"
          placeholder="Fighter Name"
          value={this.props.fighterForm}
          onChange={this.props.updateFormName}
        />
        <input
          type="text"
          placeholder="Silly Fighter picture URL"
          value={this.props.fighterFormURL}
          onChange={this.props.updateFormURL}
        />
        <button onClick={this.props.handleFormSubmit}>
          Save!
        </button>
      </div>
    );
  }
}

export default FighterForm;
