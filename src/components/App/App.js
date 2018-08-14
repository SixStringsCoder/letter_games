import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import Gameboard from '../Gameboard/Gameboard';
import { Footer } from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Header />

        <Gameboard />

        <Footer />
      </div>
    );
  }
}

export default App;
