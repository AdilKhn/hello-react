import React from 'react';
import ReactDOM from 'react-dom';
import MainWithReactReduxTogether from './components/MainWithReactReduxTogether';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import greeting from './reducers/greeting.js';

let store = createStore(greeting);
ReactDOM.render(
  <Provider store={store}>
    <div>
      <MainWithReactReduxTogether foo='homer'/>
    </div>
  </Provider>,
  document.getElementById('root')
);
