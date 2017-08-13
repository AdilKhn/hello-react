import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';
import MainWithRedux from './components/MainWithRedux.js';


ReactDOM.render(
  <div>
    <Main myname={'homer'}/>
    <MainWithRedux />
  </div>,
  document.getElementById('root')

);
