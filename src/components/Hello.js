import React from 'react';

function capIt(input){
  return input.toUpperCase();
}
const Hello = ({myName}) => (
    <div>
      <p>I am the Hello Component </p>
      <p>My name is {capIt(myName)}</p>
    </div>
)

export default Hello;
