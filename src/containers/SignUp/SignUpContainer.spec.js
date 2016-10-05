import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SignUp from '../../components/SignUp/SignUp';
import SignUpContainer from './SignUpContainer';

describe('SignUpContainer', () => {
  it('renders a SignUp component', () => {
    const wrapper = shallow(<SignUpContainer />);
    expect(wrapper.type()).to.equal(SignUp);
  });
});
