import React, { Component } from 'react';
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
    },
 
    statement: (state && state.statement) || 'empty'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sayHello: () => {
      console.log(`sayHello called`);
      dispatch({type: 'HELLO'});
    }
  }
}

class MainWithReactReduxTogether extends Component{
  render() {
    return(
      <div>
        <p>hi in main with redux</p>
        <p>MappedStateToProps, fooString: {this.props.fooString}</p>
        <p>MappedStateToProps, fooFunc: {this.props.fooFunc()}</p>
        <p>MappedStateToProps, funcWithParam: {this.props.funcWithParam('Thunky')}</p>
        <p>MappedStateToProps, funcWithParam: {this.props.funcWithParam(()=>{return 'garbage'})}</p>
        <hr/>
        <div>
          <button onClick={this.props.sayHello}>Say hello</button>
          <p>Statement: {this.props.statement}</p>
        </div>
      </div>
    ) 
  }
}

const MainWithReactReduxTogetherContainer =  connect(mapStateToProps, mapDispatchToProps)(MainWithReactReduxTogether);

export default MainWithReactReduxTogetherContainer;
