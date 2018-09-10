import React, { Component } from 'react';
import './ButtonPanel.css';
import { Button } from '../Button/Button';


export const ButtonPanel = props => {
  console.log(props);
    return (
      <section className="buttonPanel">
        {
          props.buttons.map((button, index) => {
            return <Button button={button} key={button.id} tabIndex={index}/>
          })
        }
      </section>
    );
}
