import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ScrollArrow from './ScrollArrow';
import classes from './ScrollArrow.scss';

describe('ScrollArrow', () => {
  it('renders a root div with a .scrollArrow class', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<ScrollArrow label={label} onClick={onClick} />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.scrollArrow}`)).to.be.true;
  });

  it('renders three spans, one of which contains props.label', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<ScrollArrow label={label} onClick={onClick} />);
    expect(wrapper.contains([
      <span>{label}</span>,
      <span />,
      <span />
    ])).to.be.true;
  });

  it('adds props.class if defined', () => {
    const className = 'myClass';
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<ScrollArrow className={className} label={label} onClick={onClick} />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('clicking fires props.onClick', () => {
    const label = 'label';
    const onClick = sinon.stub();
    const wrapper = shallow(<ScrollArrow label={label} onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).to.have.been.calledOnce;
  });
});
