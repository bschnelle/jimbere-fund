import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import People from '../../components/People/People';
import { PeopleContainer } from './PeopleContainer';

describe('PeopleContainer', () => {
  it('renders a People component', () => {
    const wrapper = shallow(<PeopleContainer />);
    expect(wrapper.type()).to.equal(People);
  });
});
