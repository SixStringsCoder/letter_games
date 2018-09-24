import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListenClick.css';

class ListenClick extends Component {

  playRandomLetter = () => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let randPick = Math.floor(Math.random() * letters.length);
    let letter_audio = new Audio(require(`../Letter/audio/${letters[randPick]}_sound.m4a`));
    letter_audio.play();
  }

  render() {
    return (
            <div>
               <button className="randButton" onClick={this.playRandomLetter}>Play Random Letter</button>
            </div>
           );
  }
}

export default ListenClick;

ListenClick.propTypes = {
  playRandomLetter: PropTypes.func,
}
