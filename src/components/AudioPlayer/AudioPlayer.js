import React, { Component } from 'react';
import './AudioPlayer.css';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isPlaying: false,
    }

    this.togglePlayPause = this.togglePlayPause.bind(this);
 }

 rewindAudio = () => {
   const audio = this.props.music;
   audio.currentTime -= 5;
   console.log(audio.currentTime);
 }

  togglePlayPause = () => {
    console.log(this.props.music)
    this.setState({
        isPlaying: !this.state.isPlaying,
    }, () => {
      this.state.isPlaying ? this.props.music.play() : this.props.music.pause();
    });
  }

  render() {
    return (
      <div id="audioPlayer">
        <button onClick={this.togglePlayPause} className="audioBtn" id="playBtn">
          {this.state.isPlaying ? "Pause ⏸" : "Play ▶"}
        </button>

        <button onClick={this.rewindAudio} className="audioBtn" id="stopRewindBtn">◀ Rewind 5</button>
      </div>
    );
  }
}

export default AudioPlayer;
