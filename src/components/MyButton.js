import React from 'react';

export default class MyButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    //setState recieves the previous state as the first argument
    //(and props as the second which we arent using here
    this.setState(pState => ({
      isToggleOn: !pState.isToggleOn
    }));

  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>

    );
  }
}
