import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils';
import MyButton from './components/MyButton';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      place: props.place || "Home"
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => { this.tick();},
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      place: ["homer", "marge", "bart", "lisa", "maggie"][Utils.getRandomInt(0,4)]
    });
  }

  render() {
    return (
      <div>
        <h1> Hello, {this.state.place} </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <MyButton />
  </div>,
  document.getElementById('root')

);
