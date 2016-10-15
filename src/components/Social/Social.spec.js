import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Social from './Social';
import classes from './Social.scss';

describe('Social', () => {
  it('renders a root div with a .social class', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.social}`)).to.be.true;
  });

  it('adds a .secondary class to the root div if props.secondary is true', () => {
    const wrapper = shallow(<Social secondary />);
    expect(wrapper.is(`.${classes.secondary}`)).to.be.true;
  });

  it('if defined, adds props.className to the root div', () => {
    const className = 'myClass';
    const wrapper = shallow(<Social className={className} />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  it('renders an anchor with a href to https://www.facebook.com/jimberefund/', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('a').at(0).prop('href')).to.equal('https://www.facebook.com/jimberefund/');
  });

  it('renders an anchor with a href to https://twitter.com/JimbereFund', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('a').at(1).prop('href')).to.equal('https://twitter.com/JimbereFund');
  });

  it('renders an anchor with a href to https://www.linkedin.com/company/jimbere-fund', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('a').at(2).prop('href')).to.equal('https://www.linkedin.com/company/jimbere-fund');
  });

  it('renders three svg elements', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('svg')).to.have.length(3);
  });
});
