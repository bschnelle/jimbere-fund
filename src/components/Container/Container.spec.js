import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Container from './Container';
import classes from './Container.scss';

describe('Container', () => {
  it('renders its children into a div with a class of .container', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Container>{child}</Container>);
    expect(wrapper.contains(child)).to.be.true;
    expect(wrapper.is(`.${classes.container}`)).to.be.true;
  });

  it('adds props.className to the root div if present', () => {
    const className = 'someClass';
    const child = <div>child</div>;
    const wrapper = shallow(<Container className={className}>{child}</Container>);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('adds a .section class if props.section is true', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Container section>{child}</Container>);
    expect(wrapper.is(`.${classes.section}`)).to.be.true;
  });

  it('sets the root div\'s id to props.id', () => {
    const id = 'myId';
    const child = <div>child</div>;
    const wrapper = shallow(<Container id={id}>{child}</Container>);
    expect(wrapper.prop('id')).to.equal(id);
  });

  it('renders its children', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Container>{child}</Container>);
    expect(wrapper.contains(<div className="">{child}</div>)).to.be.true;
  });

  it('adds a .fluid class to the child div wrapper if props.fluid is true', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Container fluid>{child}</Container>);
    const childWrapper = wrapper.find(`.${classes.fluid}`);
    expect(childWrapper).to.have.length(1);
    expect(childWrapper.contains(child)).to.be.true;
  });

  it('renders an h1 with props.title', () => {
    const child = <div>child</div>;
    const title = 'Some title';
    const wrapper = shallow(<Container title={title}>{child}</Container>);
    expect(wrapper.contains(<h1>{title}</h1>)).to.be.true;
  });
});
