import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Header } from '../Header/Header';
import ButtonBoard from '../ButtonBoard/ButtonBoard';
import Gameboard from '../Gameboard/Gameboard';
import { Footer } from '../Footer/Footer';


const BUTTON_MENU = {
  home: ["Home", "Vowels", "Consonants", "Letters", "Words",]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webpageContent: "home",
      buttonSet: 'home',
    }
  }

  chooseWebpage = (pageName) => {
    this.setState({
      webpageContent: pageName.toLowerCase(),
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

App.propTypes = {
  pageContent: PropTypes.string,
  chooseWebpage: PropTypes.func,
  buttons: PropTypes.string
}
