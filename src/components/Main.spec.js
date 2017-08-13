import React, {Component} from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import Main from './Main';
import Child from './Child';
import jsdom from 'jsdom'


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

  it('mutate state and examine it', ()=>{
    const main = shallow(<Main/>);
    console.log(main.instance().state);
    expect(main.instance().state.age).to.equal(undefined);
    main.instance().stateMutator();
    expect(main.instance().state.age).to.equal(33);
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

  it('Main passes function to child which mutates state in parent ', () => {
    let main = mount(<Main/>);
    let child = main.children('Child');
    expect(main.state().desc).to.equal(undefined);
    child.props().mutateParent();
    expect(main.state().desc).to.equal('This is the description');
  })
});

