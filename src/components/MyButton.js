import React from 'react';

export default class MyButton extends React.Component{

  handleClick(e) {
    e.preventDefault();
    console.log('So I just got clicked!');
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        Click Me
      </a>
    );
  }
}
