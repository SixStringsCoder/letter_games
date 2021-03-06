import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {

  handleClick = (event) => {
    this.props.chooseWebpage(event.target.id);
    console.log(event.target.id);
  }

  render() {
    return (
      <div className="btn_container">
        <button onClick={this.handleClick} className="menu-button btn-text" id={this.props.button}>
          {this.props.button}
        </button>
      </div>
    )
  }
}

export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
}
