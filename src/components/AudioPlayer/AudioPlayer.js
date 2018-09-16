import React, { Component } from 'react';
import './AudioPlayer.css';
import App from '../App/App';
import Gameboard from '../Gameboard/Gameboard';


class AudioPlayer extends Component {
  state = {
      isPlaying: false,
  }

  playMusic = () => {
    let contentAudio = this.props.audioFolder
    let music_audio = new Audio(require(`./audio/${contentAudio}/${contentAudio}_${this.props.track}.ogg`));
    music_audio.play();

    this.setState({
      isPlaying: true
    })
  }

  render() {

    return (
      <div id="audioPlayer">
        <button className="audioBtn" onClick={this.playMusic} id="playBtn">
          {!this.state.isPlaying ?
            "Play"
            :
            "Pause"
          }
        </button>
        <button className="audioBtn" id="stopRewindBtn">Stop/Rewind</button>
      </div>
    );
  }
}

export default AudioPlayer;
