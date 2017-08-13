import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
describe('Tests for <Main/>', () => {

  it('loads without crashing', ()=>{
    expect(shallow(<Main/>).instance()).to.be.an.instanceOf(Main);
  });


  it('Execute the method on the component', ()=>{
    const comp = shallow(<Main/>);
    expect(comp.instance().sayHello()).to.equal('Hello from Main');
  });

  it('set state from enzyme', () =>{
    const comp = shallow(<Main/>); 
    comp.setState({name: 'homer'});

    expect(comp.state().name).to.equal('homer');
  });
});
