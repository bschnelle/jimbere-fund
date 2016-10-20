import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Home } from './Home';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomePurpose from '../HomePurpose/HomePurpose';
import * as animations from '../../utils/animations';
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
      let event;
      let homeLanding;
      beforeEach(() => {
        sinon.stub(animations, 'smoothScrollTo');
        event = { stopPropagation: sinon.stub() };
        homeLanding = wrapper.find(HomeLanding);
      });

      afterEach(() => animations.smoothScrollTo.restore());

      it('has props.onScrollClick of type function', () => {
        expect(typeof homeLanding.prop('onScrollClick')).to.equal('function');
      });

      describe('onScrollClick', () => {
        it('calls event.stopPropagation()', () => {
          homeLanding.prop('onScrollClick')(event);
          expect(event.stopPropagation).to.have.been.calledOnce;
        });

        it('calls animations.smoothScrollTo with "facts"', () => {
          homeLanding.prop('onScrollClick')(event);
          expect(animations.smoothScrollTo).to.have.been.calledWith('facts');
        });
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
