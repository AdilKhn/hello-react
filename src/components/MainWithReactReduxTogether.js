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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sayHello: (val) => {
      dispatch({type: 'HELLO', payload: val});
    }
  }
}

class MainWithReactReduxTogether extends Component{
   handleTextInput(event){
      this.props.sayHello(event.target.value);
   }
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
          <input type='text' onChange={this.handleTextInput.bind(this)}/>
          <p>Statement: {this.props.statement}</p>
        </div>
      </div>
    ) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWithReactReduxTogether);

