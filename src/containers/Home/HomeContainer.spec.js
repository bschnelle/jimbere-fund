import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../components/Home/Home';
import { HomeContainer, stateToProps } from './HomeContainer';

describe('HomeContainer', () => {
  describe('render()', () => {
    it('renders a Home component', () => {
      const wrapper = shallow(<HomeContainer />);
      expect(wrapper.type()).to.equal(Home);
    });

    it('passes props.isSmall to Home', () => {
      const isSmall = true;
      const wrapper = shallow(<HomeContainer isSmall={isSmall} />);
      expect(wrapper.prop('isSmall')).to.equal(isSmall);
    });
  });

  describe('stateToProps()', () => {
    it('maps state.browser.lessThem.medium to props.isSmall', () => {
      const state = { browser: { lessThan: { medium: true } } };
      expect(stateToProps(state).isSmall).to.equal(state.browser.lessThan.medium);
    });
  });
});
