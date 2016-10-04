import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('renders 3 divs', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div')).to.have.length(3);
  });
});
