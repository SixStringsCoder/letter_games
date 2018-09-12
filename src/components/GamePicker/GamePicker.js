import React, { Component } from 'react';
import './GamePicker.css';


class GamePicker extends Component {

  changeHandler = (event) => {
    const selection = event.target.value;
    this.props.chooseContent(selection)
  }

  render() {
    return (
      <section id="gamepicker">
        <div id="menu-container">
          <label>Pick Your Challenge</label>
            <select onChange={this.changeHandler} id="menu" name="content-menu" autofocus>
              <option disabled selected>Menu</option>
              <option value="letters">Letters</option>
              <option value="vowels">Vowels</option>
              <option value="consonants">Consonants</option>
              // <option value="air_voiced">Air and Voiced</option>
              // <option value="blends">Blends</option>
            </select>
        </div>
      </section>
    );
  }
}

export default GamePicker;
