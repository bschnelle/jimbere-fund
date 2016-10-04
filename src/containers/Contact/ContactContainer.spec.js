import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Contact from '../../components/Contact/Contact';
import ContactContainer from './ContactContainer';

describe('ContactContainer', () => {
  it('renders a Contact component', () => {
    const wrapper = shallow(<ContactContainer />);
    expect(wrapper.type()).to.equal(Contact);
  });
});
