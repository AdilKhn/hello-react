import React from 'react';
import Utils from '../utils'
export default class NameInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    Utils.postUrlData(this.state.value, function(){
      console.log("POST done");
    })
    event.preventDefault();
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
