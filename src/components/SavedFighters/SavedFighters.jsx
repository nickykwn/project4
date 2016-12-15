import React, { Component } from 'react';
import SavedFightersItem from '../SavedFightersItem/SavedFightersItem.jsx';

export default class SavedFighters extends Component {

  renderSavedFighters() {
    return this.props.savedFighters.map((result, i) =>
      <SavedFightersItem
        DeleteButton={this.props.DeleteButton}
        username={this.props.username}
        getSavedFighters={this.props.getSavedFighters}
        deleteSaved={this.props.deleteSaved}
        key={i}
        id={result.search_id}
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
