import React, { Component } from 'react';
import './AudioPicker.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


class AudioPicker extends Component {
  state = {
    track: '',
    musicPath: new Audio(require(`./audio/consonants/consonants_rhythm.ogg`)),
  }

  handleChange = (event) => {
    let trackPath = require(`./audio/${this.props.audioFolder}/${this.props.audioFolder}_${event.target.value}.ogg`);
    this.setState({
      track: event.target.value,
      musicPath: new Audio(trackPath)
    })
  }

  render() {
    return (
      <section id="audiopicker">
        <div id="menu-container">
          <label>Pick Your 🎶</label>
            <select onChange={this.handleChange} id="menu" name="content-menu" autoFocus>
              <option disabled selected>Menu</option>
              <option value="sing">Sing</option>
              <option value="touch">Touch</option>
              <option value="rhythm">Rhythm</option>
              <option value="copycat">Copycat</option>
              <option value="jam">Jam</option>
            </select>
        </div>
        <AudioPlayer track={this.state.track} music={this.state.musicPath} />
      </section>
    );
  }
}

export default AudioPicker;
