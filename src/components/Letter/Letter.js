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

  }


  render() {
    return (
             content['letters'].map(letter => {
                return <div className="button">
                  <p className="letter">{letter}</p>
                </div>
              })
           );
  }
}

export default Letter;
