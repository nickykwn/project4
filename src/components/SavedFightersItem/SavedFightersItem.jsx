import React, { Component } from 'react';

export default class SavedFightersItem extends Component {

  handleDelete(id, username) {
    this.props.deleteSaved(id);
    setTimeout(() => {this.props.getSavedImages(username)}, 300);
  }

  render() {
    return (
      <div className="saved-container">
        <div className="saved-fighters-container">
          <img src={this.props.fighter} />
        </div>
        <div onClick={() => this.handleDelete(this.props.id, this.props.username)}><img className="DeleteButton" src={this.props.DeleteButton}/></div>
      </div>
    );
  }
}
