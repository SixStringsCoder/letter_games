import React, { Component } from 'react';
import './LetterList.css';
import Gameboard from '../Gameboard/Gameboard';
import Letter from '../Letter/Letter';


export const LetterList = props => {
  console.log(props);
    return (
      <section className="letterList">
        {
          props.content.map(letter => {
            return <Letter letter={letter} key={letter.id} />
          })
        }
      </section>
    );
}
