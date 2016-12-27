import React from 'react';
export default class Mylabel extends React.Component{
  render() {
    return (
      <div>
        <p> First Line: {this.props.firstLine}</p>
        <p> Second Line:  {this.props.secondLine}</p>
      </div>
    );
  }
}
