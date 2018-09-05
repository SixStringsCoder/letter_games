import React, { Component } from 'react';
import './Letter.css';

/*============================================
                  CONTENT
============================================*/
const content = {
  letters: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  vowels: ["a", "e", "i", "o", "u"]
};


class Letter extends Component {
  state = {
    letter_state: '',
  }

  playAudio = (event) => {
    let letter_clicked = event.target.id;
    let letter_audio = new Audio(require(`./audio/${letter_clicked}_sound.m4a`));
    letter_audio.play();
    this.setState({
      letter_state: letter_clicked,
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
