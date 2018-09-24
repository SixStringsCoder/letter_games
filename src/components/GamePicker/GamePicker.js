import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GamePicker.css';
import LetterList from '../LetterList/LetterList';
import ListenClick from '../ListenClick/ListenClick';

class GamePicker extends Component {
  state = {
    game: ''
  }

  handleChange = (event) => {
    this.setState({
      game: event.target.value
    })
  }

  render() {
    return (
      <section id="gamepicker">
        <div id="menu-container">
          <label>Pick Your Challenge</label>
            <select onChange={this.handleChange} id="menu" name="content-menu" autoFocus>
              <option disabled selected>Game Menu</option>
              <option value="listenclick">Listen & Click</option>
              <option value="dragdrop">Drag & Drop</option>
              <option value="match">Match</option>
              <option value="spell">Spell</option>
            </select>
        </div>
        <ListenClick game={this.state.game} />
      </section>
    );
  }
}

export default GamePicker;

GamePicker.propTypes = {
  track: PropTypes.string,
  music: PropTypes.object,
}
