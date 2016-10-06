import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Home } from './Home';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomePurpose from '../HomePurpose/HomePurpose';
import classes from './Home.scss';

describe('Home', () => {
  it('renders a div with a class of .home', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.is(`.${classes.home}`)).to.be.true;
  });

  describe('nested components', () => {
    let wrapper;

    beforeEach(() => { wrapper = shallow(<Home />); });

    describe('HomeLanding', () => {
      it('has props.onScrollClick of type function', () => {
        expect(typeof wrapper.find(HomeLanding).prop('onScrollClick')).to.equal('function');
      });
    });

    describe('HomeFacts', () => {
      it('has props.id equal to "facts"', () => {
        expect(wrapper.find(HomeFacts).prop('id')).to.equal('facts');
      });

      it('has props.isSmall of the same name', () => {
        const isSmall = true;
        wrapper.setProps({ isSmall });
        expect(wrapper.find(HomeFacts).prop('isSmall')).to.equal(isSmall);
      });
    });

    describe('HomePurpose', () => {
      it('renders', () => {
        expect(wrapper.find(HomePurpose)).to.have.length(1);
      });
    });

    describe('HomeApproach', () => {
      it('has props.isSmall of the same name', () => {
        const isSmall = true;
        wrapper.setProps({ isSmall });
        expect(wrapper.find(HomeApproach).prop('isSmall')).to.equal(isSmall);
      });
    });

    describe('HomeProcess', () => {
      it('has props.isSmall of the same name', () => {
        const isSmall = true;
        wrapper.setProps({ isSmall });
        expect(wrapper.find(HomeProcess).prop('isSmall')).to.equal(isSmall);
      });
    });
  });
});
