import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import JoinUs from '../../components/JoinUs/JoinUs';
import JoinUsContainer from './JoinUsContainer';

describe('JoinUsContainer', () => {
  it('renders a JoinUs component', () => {
    const wrapper = shallow(<JoinUsContainer />);
    expect(wrapper.type()).to.equal(JoinUs);
  });
});
