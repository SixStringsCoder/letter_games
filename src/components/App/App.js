import React, { Component } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import ButtonBoard from '../ButtonBoard/ButtonBoard';
import Gameboard from '../Gameboard/Gameboard';
import { Footer } from '../Footer/Footer';


const BUTTON_MENU = {
  home: ["Home", "Vowels", "Consonants", "Letters", "Words", "Games", "?"],
  music_practice: ["Sing", "Touch", "Rhythm", "Copycat", "Jam"],
  challenges: ["Listen & Touch", "Drag & Drop", "Match", "Word Builder"],
  audio_player: ["Play/Pause", "Stop/Rewind"]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webpageContent: "letters",
      buttonSet: "home"
    }
  }

  chooseWebpage = (pageName) => {
    this.setState({
      webpageContent: pageName.toLowerCase(),
      buttonSet: pageName != "Home" ? "music_practice" : "home",
    });
  }

  render() {

    return (
      <div id="appContainer">
        <Header />

        <Gameboard pageContent={this.state.webpageContent} />
        <ButtonBoard chooseWebpage={this.chooseWebpage}
                    buttons={BUTTON_MENU[this.state.buttonSet]}
                    />

        <Footer />
      </div>
    );
  }
}

export default App;
