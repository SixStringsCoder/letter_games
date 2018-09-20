import React from 'react';
import './Words.css';

export const Words = props => {
    return (
      <p className="letterInWord">{props.letters2Word}</p>
    );
}
