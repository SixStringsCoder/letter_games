import React, { Component } from 'react';
import './Button.css';

export const Button = props => {
    return (
      <div class="btn_container">
        <button className="menu-button" id={props.button}>
          <span className="btn-text">{props.button}</span>
        </button>
      </div>
    );
}
