import React, { Component } from 'react';
import Child from './Child.js';

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state = {foo: 'in constructor'}
  }
  sayHello(){
      return 'Hello from Main' ;
  }
  sayChildHello(){
    return 'Hello from Main Child!';
  }
  render() {
    return(
      <div>
        <p>hi there</p>
        <p>{this.state.foo}</p>
        <p>{this.sayHello()}</p>
        <p><Child doThis={this.sayChildHello}/></p>
      </div>
    ) 
  }


}

