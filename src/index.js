import React from 'react';
import ReactDOM from 'react-dom';

// function Clock(props) {
//   return (
//     <div>
//       <h1> Hello, world </h1>
//       <h2> It is {props.date.toLocaleTimeString()} </h2>
//     </div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date()};
  }

  componentDidMount() {
  
  }

  componentWillMount() {
  
  }
  render() {
    return (
      <div>
        <h1> Hello, Woild </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

}
setInterval(tick, 1000);
