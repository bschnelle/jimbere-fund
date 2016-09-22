import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import NavItem from './NavItem';
import classes from './NavItem.scss';

const label = 'Label';
const to = '/label';

describe('NavItem', () => {
  it('renders a root li with a .navItem class', () => {
    const wrapper = shallow(<NavItem label={label} to={to} />);
    expect(wrapper.type()).to.equal('li');
    expect(wrapper.is(`.${classes.navItem}`)).to.be.true;
  });

  it('is passed props.className if defined', () => {
    const className = 'myClass';
    const wrapper = shallow(<NavItem className={className} label={label} to={to} />);
    expect(wrapper.is(`.${className}`)).to.be.true;
  });

  describe('renders a Link', () => {
    it('is of type Link', () => {
      const wrapper = shallow(<NavItem label={label} to={to} />);
      expect(wrapper.find(Link)).to.have.length(1);
    });

    describe('with the following props', () => {
      it('activeClassName of classes.active', () => {
        const wrapper = shallow(<NavItem label={label} to={to} />);
        expect(wrapper.find(Link).prop('activeClassName')).to.equal(classes.active);
      });

      it('onClick of props.onClick', () => {
        const onClick = () => {};
        const wrapper = shallow(<NavItem label={label} onClick={onClick} to={to} />);
        expect(wrapper.find(Link).prop('onClick')).to.equal(onClick);
      });

      it('onlyActiveOnIndex of true if to = "/"', () => {
        const wrapper = shallow(<NavItem label={label} to={to} />);
        expect(wrapper.find(Link).prop('onlyActiveOnIndex')).to.be.false;
        wrapper.setProps({ label, to: '/' });
        expect(wrapper.find(Link).prop('onlyActiveOnIndex')).to.be.true;
      });

      it('to of props.to', () => {
        const wrapper = shallow(<NavItem label={label} to={to} />);
        expect(wrapper.find(Link).prop('to')).to.equal(to);
      });
    });
  });
});
