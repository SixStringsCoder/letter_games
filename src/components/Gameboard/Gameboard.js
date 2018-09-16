import React, { Component } from 'react';
import './Gameboard.css';
import AudioPicker from '../AudioPicker/AudioPicker';
import { LetterList } from '../LetterList/LetterList';

/*============================================
                  CONTENT
============================================*/
const CONTENT = {
  home: [],
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  vowels: ["a", "e", "i", "o", "u"],
  consonants: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  words: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "a", "e", "i", "o", "u"]
  // air_voiced: [["b", "p"], ["c", "g"], ["k", "g"], ["d", "t"], ["f", "v"], ["s", "z"]],
  // blends: [ "bl", "br", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr", "sl", "st", "tr"]
};

const CHALLENGES = {
  listening: ["Listen-Touch", "DragDrop", "Match", "Word-Builder"],
}


class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: CHALLENGES["listening"]
    }
  }


  render() {
    return (
        <main>
          <section id="gameboard">
            <AudioPicker chooseChallenge={this.chooseChallenge} audioFolder={this.props.pageContent} />
            <LetterList content={CONTENT[this.props.pageContent]} />
          </section>
          <hr />
        </main>
    );
  }
}

export default Gameboard;
