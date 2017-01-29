import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils';
import MyButton from './components/MyButton';



function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function UserGreeting(props){
  return <h1> Welcome Back! </h1>;
}
function GuestGreeting(props){
  return <h1> Please Sign Up. </h1>;
}

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
    <Greeting isLoggedIn = {true}/>
    <MyButton />
  </div>,
  document.getElementById('root')

);
