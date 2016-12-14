import React, { Component } from 'react';
import SavedFightersItem from '../SavedFightersItem/SavedFightersItem.jsx';

export default class SavedFighters extends Component {

  renderSavedFighters() {
    return this.props.savedImages.map((result, i) =>
      <SavedFightersItem
        DeleteButton={this.props.DeleteButton}
        username={this.props.username}
        getSavedFighters={this.props.getSavedFighters}
        deleteSaved={this.props.deleteSaved}
        />
    )
  }

  render() {
    return (
      <div className="saved-fighters-container">
        {this.renderSavedFighters()}
      </div>
    );
  }
}
