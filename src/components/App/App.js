import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel';
import Gameboard from '../Gameboard/Gameboard';
import { Footer } from '../Footer/Footer';


const BUTTON_MENU = {
  home: ["Play Vowels", "Play Consonants", "Play All Letters", "Play Words", "How To", "About"],
  music_practice: ["Sing", "Touch", "Rhythm", "Copycat", "Jam"],
  challenges: ["Listen & Touch", "Drag & Drop", "Match", "Word Builder"],
  audio_player: ["Play/Pause", "Stop/Rewind"]
}

class App extends Component {

  render() {

    return (
      <div id="appContainer">
        <Header />

        <Gameboard />
        <ButtonPanel buttons={BUTTON_MENU.home} />

        <Footer />
      </div>
    );
  }
}

export default App;
