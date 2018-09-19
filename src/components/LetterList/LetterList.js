import React, { Component } from 'react';
import './LetterList.css';
import Letter from '../Letter/Letter';
import { Words } from '../Words/Words';


class LetterList extends Component {

  state = {
    letterClicked: '',
  }

  letter2Word = (letter) => {
    this.setState({
      letterClicked: letter
    });
  }

  render() {
    return (
      <div>
        <section className="wordsArea">
          <div className="wordBox">
            <Words wordLetter={this.state.letterClicked} />
          </div>
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
