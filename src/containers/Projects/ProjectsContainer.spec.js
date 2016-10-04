import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Projects from '../../components/Projects/Projects';
import { ProjectsContainer } from './ProjectsContainer';

const setTheme = () => {};

describe('ProjectsContainer', () => {
  it('renders a Projects component', () => {
    const wrapper = shallow(<ProjectsContainer setTheme={setTheme} />);
    expect(wrapper.type()).to.equal(Projects);
  });

  it('passes props.setTheme to Projects', () => {
    const wrapper = shallow(<ProjectsContainer setTheme={setTheme} />);
    expect(wrapper.prop('setTheme')).to.equal(setTheme);
  });
});
