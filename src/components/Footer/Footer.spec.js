import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';
import Social from '../Social/Social';
import classes from './Footer.scss';

describe('Footer', () => {
  it('renders a root div with a .footer class', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.footer}`)).to.be.true;
  });

  it('contains a Social component with props.secondary set to true', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains(<Social secondary />)).to.be.true;
  });
});
