import React, {Component} from 'react';

export default class Child extends Component{


  render(){
    return(
      <div>
        <p>Do this:{this.props.doThis()}  </p>
      </div>
    ) 
  }

}
