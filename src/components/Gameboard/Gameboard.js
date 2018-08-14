import React, { Component } from 'react';
import './Gameboard.css';
import Letter from '../Letter/Letter';

class Gameboard extends Component {
  render() {
    return (
        <main>
          <section id="gameboard">
            <Letter />
          </section>
        </main>
    );
  }
}

export default Gameboard;
