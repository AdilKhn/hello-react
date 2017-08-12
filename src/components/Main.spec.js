import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
describe('<Main/>', () => {

  it('loads without crashing', ()=>{
    expect(shallow(<Main/>).instance()).to.be.an.instanceOf(Main);
  });

  it('has props', () => {
  
    const comp = shallow(<Main foo={'homy'}/>, {myname: 'hoomie'});
    console.log(comp.state());
    console.log(comp.instance().props);
  })
});
