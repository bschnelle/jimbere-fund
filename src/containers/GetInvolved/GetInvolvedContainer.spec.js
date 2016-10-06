import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GetInvolved from '../../components/GetInvolved/GetInvolved';
import GetInvolvedContainer from './GetInvolvedContainer';

describe('GetInvolvedContainer', () => {
  it('renders a GetInvolved component', () => {
    const wrapper = shallow(<GetInvolvedContainer />);
    expect(wrapper.type()).to.equal(GetInvolved);
  });
});
