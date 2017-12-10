import React, { Component } from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

const WillWontToggle = ({toggleState, personData, clickHandler}) => {
  return (
    <ToggleButtonGroup name="mytbg" type="radio" defaultValue={null}>
      <ToggleButton onClick={(e) => clickHandler(e, 'will')} value={1} bsStyle={toggleState.willBid ? "success" : "default"}>Will Bid</ToggleButton>
      <ToggleButton onClick={(e) => clickHandler(e, 'wont')} value={2} bsStyle={toggleState.wontBid ? "danger" : "default"}>Won't Bid</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      toggleState: {
          willBid: false,
          wontBid: false
      }
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e, stat){
    e.preventDefault();
    console.log('CLICKed by' , stat);

    let current = this.state.toggleState;


    if (stat === 'will') {
      current.willBid = !current.willBid;
      current.wontBid = false;
    }

    if (stat === 'wont') {
      current.wontBid = !current.wontBid;
      current.willBid = false;
    }
    this.setState({toggleState: current });
  }

  render() {
    return(
      <div>
        <WillWontToggle clickHandler={this.handleClick} toggleState={this.state.toggleState}/>
      </div>
    ) 
  }
}

