import React, { Component } from 'react';
import './Gameboard.css';
import GamePicker from '../GamePicker/GamePicker';
import { LetterList } from '../LetterList/LetterList';

/*============================================
                  CONTENT
============================================*/
const CONTENT = {
  letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  vowels: ["a", "e", "i", "o", "u"],
  consonants: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  air_voiced: [["b", "p"], ["c", "g"], ["k", "g"], ["d", "t"], ["f", "v"], ["s", "z"]],
  blends: [ "bl", "br", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr", "sl", "st", "tr"]
};


class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: CONTENT.letters
    }
  }

  chooseContent = (newContent) => {
    this.setState({
      content: CONTENT[newContent]
    })
  }

  render() {
    return (
        <main>
          <section id="gameboard">
            <GamePicker chooseContent={this.chooseContent}/>
            <LetterList content={this.state.content} />
          </section>
          <hr />
        </main>
    );
  }
}

export default Gameboard;
