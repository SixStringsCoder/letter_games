import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  handleClick = (event) => {
    console.log(event.target.id)
    this.props.chooseWebpage(event.target.id);
  }

  render() {
    return (
      <div class="btn_container">
        <button onClick={this.handleClick} className="menu-button btn-text" id={this.props.button}>
          {this.props.button}
        </button>
      </div>
    )
  }
}

export default Button;
