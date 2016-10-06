import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Work from '../../components/Work/Work';
import { WorkContainer } from './WorkContainer';


describe('WorkContainer', () => {
  it('renders a Work component', () => {
    const wrapper = shallow(<WorkContainer />);
    expect(wrapper.type()).to.equal(Work);
  });
});
