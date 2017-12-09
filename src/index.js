import React from 'react';
import ReactDOM from 'react-dom';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';



const WillWontToggle = ({caption, personData}) => {
  return (
    <ToggleButtonGroup name="mytbg" type="radio" defaultValue={1}>
      <ToggleButton value={1} bsStyle={"success"}>{caption}</ToggleButton>
      <ToggleButton value={2} bsStyle={"danger"}>{personData.name} is {personData.age()}</ToggleButton>
    </ToggleButtonGroup>
  )
}

const person = {
  name: 'Homer',
  age : function() { return 99;}
};
ReactDOM.render(
    <div>
      <div>
        <p>
          Here it is
        </p>
      </div>
      <WillWontToggle caption={"Hi There"} personData={person}/>
    </div>,
  document.getElementById('root')
);
