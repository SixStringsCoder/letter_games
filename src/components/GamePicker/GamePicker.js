import React, { Component } from 'react';
import './GamePicker.css';
import Letter from '../Letter/Letter';

class GamePicker extends Component {
  state = {
    content_state: 'Menu'
  }

  changeHandler = (event) => {
    let selection = event.target.value
    this.setState({
      content_state: selection
    })
  }

  render() {
    return (
      <section>
        <div id="menu-container">
          <label>Pick Your Letters</label>
            <select onChange={this.changeHandler} id="menu" name="content-menu" autofocus>
            <option disabled selected>Menu</option>
            <option value="letters">Letters</option>
            <option value="vowels">Vowels</option>
            <option value="consonants">Consonants</option>
            <option value="air_voiced">Air and Voiced</option>
            <option value="blends">Blends</option>
            </select>
        </div>
        <Letter set={this.state.content_state} />
      </section>
    );
  }
}

export default GamePicker;
