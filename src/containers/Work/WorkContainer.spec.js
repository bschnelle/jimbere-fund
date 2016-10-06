import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Work from '../../components/Work/Work';
import { WorkContainer } from './WorkContainer';

const setTheme = () => {};

describe('WorkContainer', () => {
  it('renders a Work component', () => {
    const wrapper = shallow(<WorkContainer setTheme={setTheme} />);
    expect(wrapper.type()).to.equal(Work);
  });

  it('passes props.setTheme to Work', () => {
    const wrapper = shallow(<WorkContainer setTheme={setTheme} />);
    expect(wrapper.prop('setTheme')).to.equal(setTheme);
  });
});
