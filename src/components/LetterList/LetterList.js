import React from 'react';
import './LetterList.css';
import Letter from '../Letter/Letter';


export const LetterList = props => {
    return (
      <section className="letterList">
        {
          props.content.map(letter => {
            return <Letter letter={letter} key={letter} />
          })
        }
      </section>
    );
}
