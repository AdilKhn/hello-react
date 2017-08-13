import React, { Component } from 'react';
import {createStore} from 'redux';

export default class MainWithRedux extends Component{

  constructor(props){
    super(props);

    function counter(state=0, action){
      switch(action.type){
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        defaut:
          return state 
      }
    }
    this.state={count: 0};
    let store = createStore(counter);
    this.rstore = store;
    this.rstore.subscribe(() =>{
      this.setState({count:this.rstore.getState() });
    })
  }

  doPlus(){
    this.rstore.dispatch({type: 'INCREMENT'});
  }

  doMinus(){
    this.rstore.dispatch({type: 'DECREMENT'});
  }
  render() {
    return(
      <div>
        <p>hi in main with redux</p>
        <button onClick={this.doPlus.bind(this)}>Increment</button>
        <button onClick={this.doMinus.bind(this)} >Decrement</button>
        <p>Count: {this.state.count}</p>
      </div>
    ) 
  }
}

