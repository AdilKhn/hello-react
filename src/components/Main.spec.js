import React, {Component} from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Main from './Main';
describe('<Main/>', () => {

  it('loads without crashing', ()=>{
    expect(shallow(<Main/>).instance()).to.be.an.instanceOf(Main);
  });

  it('has props', () => {
    const comp = shallow(<Main foo={'in tag'}/>, {foo: 'in context'});
    console.log(comp.state());
    console.log(comp.instance().props);
  })

  it('Execute the method on the component', ()=>{
    const comp = shallow(<Main/>);
    expect(comp.instance().sayHello()).to.equal('Hello from Main');
  });

  it('Set state from enzyme', () =>{
      const comp = shallow(<Main/>); 
      comp.setState({name: 'homer'});

      expect(comp.state().name).to.equal('homer');
  });
});
