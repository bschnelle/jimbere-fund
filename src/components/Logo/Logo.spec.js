import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import Logo from './Logo';
import classes from './Logo.scss';

describe('Logo', () => {
  it('root element has a .logo class', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.is(`.${classes.logo}`)).to.be.true;
  });

  it('if defined, root element has props.className', () => {
    const className = 'myClass';
    const wrapper = shallow(<Logo className={className} />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  describe('props.link = false', () => {
    it('renders a root span', () => {
      const wrapper = shallow(<Logo />);
      expect(wrapper.type()).to.equal('span');
    });
  });

  describe('props.link = true', () => {
    it('renders a root Link', () => {
      const wrapper = shallow(<Logo link />);
      expect(wrapper.type()).to.equal(Link);
    });
  });

  describe('svg', () => {
    it('is rendered as first child of root element', () => {
      const wrapper = shallow(<Logo link />);
      expect(wrapper.childAt(0).type()).to.equal('svg');
    });

    describe('props.secondary  = false', () => {
      it('contains 13 elements with a .green class', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find(`.${classes.green}`)).to.have.length(13);
      });

      it('contains 2 elements with a .white class', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper.find(`.${classes.white}`)).to.have.length(2);
      });
    });

    describe('props.secondary  = true', () => {
      it('contains 2 elements with a .green class', () => {
        const wrapper = shallow(<Logo secondary />);
        expect(wrapper.find(`.${classes.green}`)).to.have.length(2);
      });

      it('contains 13 elements with a .white class', () => {
        const wrapper = shallow(<Logo secondary />);
        expect(wrapper.find(`.${classes.white}`)).to.have.length(13);
      });
    });
  });
});
