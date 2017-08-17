import React, { Component } from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
      fooString: 'Homer',
      fooFunc: function(){
          return 'Homer from func';
      },
      funcWithParam: function(param){
        if (typeof param === 'function'){
          return param();
        }
         return `You passed in ${param}`;
      }
    }
  }

class MainWithReactReduxTogether extends Component{

  constructor(props){
    super(props);

    function counter(state=0, action){
      switch(action.type){
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state 
      }
    }
    this.state={count: 0};
    this.store = createStore(counter);
    this.store.subscribe(() =>{
      this.setState({count:this.store.getState() });
    })
  }

  doPlus(){
    this.store.dispatch({type: 'INCREMENT'});
  }

  doMinus(){
    this.store.dispatch({type: 'DECREMENT'});
  }

  render() {
    return(
      <div>
        <p>hi in main with redux</p>
        <button onClick={this.doPlus.bind(this)}>Increment</button>
        <button onClick={this.doMinus.bind(this)} >Decrement</button>
        <p>Count: {this.state.count}</p>
        <p>MappedStateToProps, fooString: {this.props.fooString}</p>
        <p>MappedStateToProps, fooFunc: {this.props.fooFunc()}</p>
        <p>MappedStateToProps, funcWithParam: {this.props.funcWithParam('Thunky')}</p>
        <p>MappedStateToProps, funcWithParam: {this.props.funcWithParam(()=>{return 'garbage'})}</p>
      </div>
    ) 
  }
}

const MainWithReactReduxTogetherContainer =  connect(mapStateToProps)(MainWithReactReduxTogether);

export default MainWithReactReduxTogetherContainer;
