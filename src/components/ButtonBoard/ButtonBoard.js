import React, { Component } from 'react';
import './ButtonBoard.css';
import Button from '../Button/Button';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


class ButtonBoard extends Component {


  render() {
    return (
      <section className="buttonPanel">
        {
          this.props.buttons.map((button, index) => {
            return <Button chooseWebpage={this.props.chooseWebpage} button={button} key={button.id} tabIndex={index}/>
          })
        }
      </section>
    )
  }
}

export default ButtonBoard;
