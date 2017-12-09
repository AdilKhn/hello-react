import React from 'react';
import ReactDOM from 'react-dom';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';



const WillWontToggle = ({caption, personData, clickHandler}) => {
  return (
    <ToggleButtonGroup name="mytbg" type="radio" defaultValue={1}>
      <ToggleButton onClick={(e) => clickHandler(e)} value={1} bsStyle={"success"}>{caption}</ToggleButton>
      <ToggleButton onClick={(e) => clickHandler(e)} value={2} bsStyle={"danger"}>{personData.name} is {personData.age()}</ToggleButton>
    </ToggleButtonGroup>
  )
}

const person = {
  name: 'Homer',
  age : function() { return 99;}
};

const handleClick = (e) => {
  e.preventDefault();
  console.log('CLICKed by' ,e.target);
}
ReactDOM.render(
    <div>
      <div>
        <p>
          Here it is
        </p>
      </div>
      <WillWontToggle clickHandler={handleClick} caption={"Hi There"} personData={person}/>
    </div>,
  document.getElementById('root')
);
