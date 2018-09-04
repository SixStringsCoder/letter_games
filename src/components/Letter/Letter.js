import React, { Component } from 'react';
import './Letter.css';

/*============================================
                  CONTENT
============================================*/
const content = {
  letters: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  vowels: ["a", "e", "i", "o", "u"]
};
const letter_a = new Audio(require("./audio/a_sound.m4a"));

class Letter extends Component {
  state = {
    letter: ''
  }

  playAudio = (event) => {
    let letter = event.target.id;
    letter_a.crossOrigin = "anonymous";
    letter_a.play();

    this.setState({
      letter: letter,
    });
  }

  render() {
    return (
             content['letters'].map((letter, index) => {
                return <div className="button">
                  <p className="letter" id={letter} onClick={this.playAudio}>{letter}</p>
                </div>
              })
           );
  }
}

export default Letter;
