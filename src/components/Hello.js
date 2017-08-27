import React from 'react';

function capIt(input){
  return input.toUpperCase();
}
const Hello = (props) => (
    <div>
      <p>I am the Hello Component </p>
      <p>My name is {capIt(props.myName)} and I am {props.age} years old</p>
      <p> OUtput of runMe: {props.runMeOutput} </p>
    </div>
)

export default Hello;
