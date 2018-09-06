import React, { Component } from 'react';
import './Gameboard.css';
import GamePicker from '../GamePicker/GamePicker';


class Gameboard extends Component {
  render() {
    return (
        <main>
          <section id="gameboard">
            <GamePicker />
          </section>
        </main>
    );
  }
}

export default Gameboard;
