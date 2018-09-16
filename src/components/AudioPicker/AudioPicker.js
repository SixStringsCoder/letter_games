import React, { Component } from 'react';
import './AudioPicker.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const music_practice = ["Sing", "Touch", "Rhythm", "Copycat", "Jam"];

class AudioPicker extends Component {
  state = {
    track: ''
  }

  handleChange = (event) => {
    this.setState({
      track: event.target.value
    })
  }

  render() {
    return (
      <section id="audiopicker">
        <div id="menu-container">
          <label>Pick Your Challenge</label>
            <select onChange={this.handleChange} id="menu" name="content-menu" autofocus>
              <option disabled selected>Menu</option>
              <option value="sing">Sing</option>
              <option value="touch">Touch</option>
              <option value="rhythm">Rhythm</option>
              <option value="copycat">Copycat</option>
              <option value="jam">Jam</option>
            </select>
        </div>
        <AudioPlayer track={this.state.track} audioFolder={this.props.audioFolder} />
      </section>
    );
  }
}

export default AudioPicker;
