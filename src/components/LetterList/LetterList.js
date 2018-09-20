import React, { Component } from 'react';
import './LetterList.css';
import Letter from '../Letter/Letter';
import { Words } from '../Words/Words';

let wordStorage = [];

class LetterList extends Component {

  state = {
    letters2Word: '',
  }

  letter2Word = (letter) => {
    wordStorage.push(letter);
    let word = wordStorage.join('');
    this.setState({
      letters2Word: word,
    });
  }

  clearWordBox = () => {
    // empty word storage array
    wordStorage.splice(0, wordStorage.length);
    this.setState({
      letters2Word: '',
    });
  }

  render() {
    return (
      <div>
        <section className="wordsArea">
          <div className="wordBox">
            <Words letters2Word={this.state.letters2Word} />
          </div>
          <button id="clearWordBtn" onClick={this.clearWordBox}>&#x02297;</button>
        </section>

        <section className="letterList">
          {
            this.props.content.map(letter => {
              return <Letter letter2Word={this.letter2Word} letter={letter} key={letter} />
            })
          }
        </section>
      </div>
    );
  }
}

export default LetterList;
