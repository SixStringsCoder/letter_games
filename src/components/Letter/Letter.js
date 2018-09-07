import React, { Component } from 'react';
import './Letter.css';

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter_state: '',
    }
    this.playAudio = this.playAudio.bind(this);
 }

  playAudio(event) {
    let letter_clicked = event.target.id;
    let letter_audio = new Audio(require(`./audio/${letter_clicked}_sound.m4a`));
    letter_audio.play();
    this.setState({
      letter_state: letter_clicked,
    });
  }

  render() {
    return (
            <div className="button">
               <a className="letter" id={this.props.letter} onClick={this.playAudio}>{this.props.letter}</a>
             </div>
           );
  }
}

export default Letter;
