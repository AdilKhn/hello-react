import React from 'react';
import ReactDOM from 'react-dom';
import MainWithReactReduxTogether from './components/MainWithReactReduxTogether';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import greeting from './reducers/greeting.js';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

let store = createStore(greeting);
ReactDOM.render(
  <Provider store={store}>
    <div>
      <div>
        <p>
          Here it is
        </p>
      </div>
      <ToggleButtonGroup name="mytbg" type="radio" defaultValue={1}>
        <ToggleButton value={1} bsStyle={"success"}> Will  </ToggleButton>
        <ToggleButton value={2} bsStyle={"danger"}> Wont </ToggleButton>
      </ToggleButtonGroup>
    </div>
  </Provider>,
  document.getElementById('root')
);
