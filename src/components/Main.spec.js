import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
import Child from './Child';
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


describe('Tests Child', ()=>{
  it('Test function that is passed from main to child', () => {
    let dummyFunc = function() {
        return 'Hi I am a dummy func';
    }
    const child = shallow(<Child doThis={dummyFunc}/>); 
    expect(child.instance().props.doThis()).to.equal('Hi I am a dummy func');
  });
});

