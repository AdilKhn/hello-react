import React from 'react';
import Utils from '../utils.js';

function RemoteData(props) {
  
  const names = props.remoteData || ['no data yet'];
  let namesLi = names.map((name) => { 
   return  <li key={name}> {name} </li>
  });


  return (
    <div>
      <ul> {namesLi} </ul>
    </div>
  );
}

export default class MyButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false, netData: []};
    this.handleClick = this.handleClick.bind(this);
    this.handleNetData = this.handleNetData.bind(this);
  }

  handleNetData(data) {
    if(this.state.isToggleOn) {
      this.setState(pState => ({
        netData: data.names
      }));
    }

  }

  handleClick(e) {
    e.preventDefault();
    //setState recieves the previous state as the first argument
    //(and props as the second which we arent using here

    Utils.getUrlData(this.handleNetData);
    this.setState(pState => ({
      isToggleOn: !pState.isToggleOn,
      netData: ['empty']
    }));

  }

  render() {
    console.log("HERE");
    console.log(this.state.netData);
    console.log("ENDHERE");
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <RemoteData remoteData={this.state.netData}/>
      </div>
    );
  }
}
