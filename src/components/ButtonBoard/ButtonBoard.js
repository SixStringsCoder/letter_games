import React, { Component } from 'react';
import './ButtonBoard.css';
import Button from '../Button/Button';


class ButtonBoard extends Component {
  state = {

  }

  render() {
    return (
      <section className="buttonPanel">
        {
          this.props.buttons.map((button, index) => {
            return <Button chooseWebpage={this.props.chooseWebpage}
                           button={button}
                           key={button}
                           tabIndex={index} />
          })
        }
      </section>
    )
  }
}

export default ButtonBoard;
