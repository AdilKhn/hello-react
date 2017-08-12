import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
describe('<Main/>', () => {

  it('loads without crashing', ()=>{
    expect(shallow(<Main/>).instance()).to.be.an.instanceOf(Main);
    expect(true).to.equal(true); 
  });
});
