import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

class Letter extends Component {

  playAudio = (event) => {
    let letter = event.target.id;
    let letter_audio = new Audio(require(`./audio/${letter}_sound.m4a`));
    letter_audio.play();

    this.props.letter2Word(letter);
  }

  render() {
    return (
            <div className="button">
               <a className="letter" id={this.props.letter} onClick={this.playAudio}>{this.props.letter}</a>
             </div>
           );
  }
}

export default Letter;

Letter.propTypes = {
  playAudio: PropTypes.func.isRequired,
  letter2Word: PropTypes.func.isRequired,
}
