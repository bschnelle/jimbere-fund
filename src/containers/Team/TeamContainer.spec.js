import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Team from '../../components/Team/Team';
import { TeamContainer } from './TeamContainer';

const setTheme = () => {};

describe('TeamContainer', () => {
  it('renders a Team component', () => {
    const wrapper = shallow(<TeamContainer setTheme={setTheme} />);
    expect(wrapper.type()).to.equal(Team);
  });

  it('passes props.setTheme to Team', () => {
    const wrapper = shallow(<TeamContainer setTheme={setTheme} />);
    expect(wrapper.prop('setTheme')).to.equal(setTheme);
  });
});
