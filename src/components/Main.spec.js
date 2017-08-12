import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
describe('<Main/>', () => {

  it('loads without crashing', ()=>{
    shallow(<Main/>);
    expect(true).to.equal(true); 
  });
});
