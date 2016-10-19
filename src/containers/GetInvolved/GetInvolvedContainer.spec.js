import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GetInvolvedComp from '../../components/GetInvolved/GetInvolved';
import { GetInvolvedContainer, stateToProps } from './GetInvolvedContainer';

describe('GetInvolvedContainer', () => {
  it('renders a GetInvolved component', () => {
    const wrapper = shallow(<GetInvolvedContainer />);
    expect(wrapper.type()).to.equal(GetInvolvedComp);
  });

  it('passes props.isSmall to GetInvolved', () => {
    const isSmall = true;
    const wrapper = shallow(<GetInvolvedContainer isSmall={isSmall} />);
    expect(wrapper.prop('isSmall')).to.equal(isSmall);
  });

  describe('stateToProps()', () => {
    it('maps state.browser.lessThem.medium to props.isSmall', () => {
      const state = { browser: { lessThan: { medium: true } } };
      expect(stateToProps(state).isSmall).to.equal(state.browser.lessThan.medium);
    });
  });
});
