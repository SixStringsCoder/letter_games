import React, { Component } from 'react';
import './Letter.css';
import GamePicker from '../GamePicker/GamePicker';

/*============================================
                  CONTENT
============================================*/
const content = {
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  vowels: ["a", "e", "i", "o", "u"],
  consonants: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  air_voiced: [["b", "p"], ["c", "g"], ["k", "g"], ["d", "t"], ["f", "v"], ["s", "z"]],
  blends: [ "bl", "br", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr", "sl", "st", "tr"]
};

class Letter extends Component {
  state = {
    letter_state: '',
    game_content: ''
  }

  playAudio = (event) => {
    let letter_clicked = event.target.id;
    let letter_audio = new Audio(require(`./audio/${letter_clicked}_sound.m4a`));
    letter_audio.play();
    this.setState({
      letter_state: letter_clicked,
    });
  }

  setContent = () => {
    this.props.set(state.game_content)
  }

  render() {
    return (
             content[letters].map((letter, index) => {
                return <div className="button">
                  <p className="letter" id={letter} onClick={this.playAudio}>{letter}</p>
                </div>
              })
           );
  }
}

export default Letter;
