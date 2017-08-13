import React, { Component } from 'react';

export default class Main extends Component{

  constructor(props){
    super(props);
    this.state = {foo: 'in constructor'}
  }
  sayHello(){
      return 'Hello from Main' ;
  }
  render() {
    return(
      <div>
        <p>hi there</p>
        <p>{this.state.foo}</p>
        <p>{this.sayHello()}</p>
      </div>
    ) 
  }


}
