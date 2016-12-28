import React from 'react';
export default class Mylabel extends React.Component{
  render() {
    return (
      <div>
        <p> First Line:  {this.props.firstLine}</p>
        First Line: {this.props.secondLine.map(function(title){
          return <p key={title}>{title}</p>
        })}
      </div>
    );
  }
}
