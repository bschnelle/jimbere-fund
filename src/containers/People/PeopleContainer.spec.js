import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import People from '../../components/People/People';
import { PeopleContainer } from './PeopleContainer';

const setTheme = () => {};

describe('PeopleContainer', () => {
  it('renders a People component', () => {
    const wrapper = shallow(<PeopleContainer setTheme={setTheme} />);
    expect(wrapper.type()).to.equal(People);
  });

  it('passes props.setTheme to People', () => {
    const wrapper = shallow(<PeopleContainer setTheme={setTheme} />);
    expect(wrapper.prop('setTheme')).to.equal(setTheme);
  });
});
