import React, { Component } from 'react';
import {ToggleButtonGroup} from 'react-bootstrap';
import Child from './Child.js';

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state = {foo: 'in constructor'}
    this.sayHello.bind(this);
    this.sayChildHello.bind(this);
    this.stateMutatorPassedToChild.bind(this);
    this.stateMutator.bind(this);

  }
  sayHello(){
      return 'Hello from Main' ;
  }
  sayChildHello(){
    return 'Hello from Main Child!';
  }

  stateMutator(){
      this.setState({age: 33});
  }

  stateMutatorPassedToChild(){
    this.setState({desc: 'This is the description'});
  }
  render() {
    return(
      <div>
        <p>hi there</p>
        <p>{this.state.foo}</p>
        <p>{this.sayHello()}</p>
        <Child doThis={this.sayChildHello} mutateParent={this.stateMutatorPassedToChild.bind(this)}/>
      </div>
    ) 
  }
}

