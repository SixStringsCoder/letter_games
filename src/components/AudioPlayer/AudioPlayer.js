import React, { Component } from 'react';
import './AudioPlayer.css';


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isPlaying: false,
        musicPath: new Audio(''),
    }

    this.togglePlayPause = this.togglePlayPause.bind(this);
 }

 loadAudio = () => {
   console.log(this.props.trackUrl);
   let audioURL = this.props.trackUrl;
   this.setState({
       musicPath: new Audio(audioURL)
   });
 }

  togglePlayPause = () => {
    this.setState({
        isPlaying: !this.state.isPlaying,
    }, () => {
      this.state.isPlaying ? this.state.musicPath.play() : this.state.musicPath.pause();
    });
  }

  render() {

    return (
      <div id="audioPlayer">
        <button className="audioBtn" onClick={this.togglePlayPause} id="playBtn">
          {this.state.isPlaying ? "Pause" : "Play"}
        </button>
        <button className="audioBtn" onClick={this.loadAudio} id="loadAudio">Load Audio</button>

        <button className="audioBtn" id="stopRewindBtn">Stop/Rewind</button>
      </div>
    );
  }
}

export default AudioPlayer;
