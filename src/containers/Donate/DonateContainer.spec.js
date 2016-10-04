import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Donate from '../../components/Donate/Donate';
import DonateContainer from './DonateContainer';

describe('DonateContainer', () => {
  it('renders a Donate component', () => {
    const wrapper = shallow(<DonateContainer />);
    expect(wrapper.type()).to.equal(Donate);
  });
});
