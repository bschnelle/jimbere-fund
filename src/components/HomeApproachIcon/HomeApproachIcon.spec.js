import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HomeApproachIcon from './HomeApproachIcon';
import classes from './HomeApproachIcon.scss';

describe('HomeApproachIcon', () => {
  it('renders an svg element', () => {
    const wrapper = shallow(<HomeApproachIcon icon="collaborative" />);
    expect(wrapper.type()).to.equal('svg');
  });

  it('adds props.className to the root svg if defined', () => {
    const className = 'myClass';
    const wrapper = shallow(<HomeApproachIcon className={className} icon="collaborative" />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('contains .active & .activeShadow classes if props.active is true', () => {
    const wrapper = shallow(<HomeApproachIcon active icon="collaborative" />);
    expect(wrapper.find(`.${classes.active}`)).to.have.length.above(0);
    expect(wrapper.find(`.${classes.activeShadow}`)).to.have.length.above(0);
  });

  it('contains .inactive & .inactiveShadow classes if props.active is false', () => {
    const wrapper = shallow(<HomeApproachIcon active={false} icon="collaborative" />);
    expect(wrapper.find(`.${classes.inactive}`)).to.have.length.above(0);
    expect(wrapper.find(`.${classes.inactiveShadow}`)).to.have.length.above(0);
  });
});
